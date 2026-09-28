# Arquitetura Técnica — Novo site EmCORR
**Decisões fechadas:** Astro · Vercel · Supabase (banco, auth, storage) · painel admin próprio · blog.
**Versões de referência (npm, 28/09/2026):** astro 7.3.5 · @astrojs/vercel 11.0.11 · @astrojs/mdx 8.0.2 · @astrojs/sitemap 3.7.4 · tailwindcss 4.3.3 · @supabase/supabase-js 2.117.2 · @supabase/ssr 0.12.7

---

## 1. Visão geral

```
                ┌─────────────────────── Vercel ───────────────────────┐
 Visitante ───► │  Páginas públicas (HTML estático, prerender)          │
                │   /, /especialidades/*, /exames/*, /blog/*, …         │
                │  Rotas server (on-demand)                             │
                │   /admin/*   /api/agendamento   /api/revalidate       │
                └──────────────┬──────────────────────────┬────────────┘
                               │ build: lê conteúdo       │ runtime: auth, CRUD, leads
                               ▼                          ▼
                ┌──────────────────────── Supabase ─────────────────────┐
                │ Postgres (conteúdo + leads)  Auth (equipe)  Storage    │
                │ RLS por papel   pg_cron (posts agendados → deploy hook)│
                └────────────────────────────────────────────────────────┘
```

**Publicação:** salvar no admin grava no Supabase. "Publicar" chama o **Deploy Hook da Vercel**, que reconstrói o site estático em cerca de 1–2 min (o site tem ~120 páginas). Assim o paciente sempre recebe HTML estático e rápido; o servidor só entra no admin e nos formulários.
> Mais simples que ISR/revalidação por página e suficiente para o volume de uma clínica. Se a publicação precisar ficar instantânea, dá para trocar pelo ISR do adapter Vercel (`isr: { bypassToken }`) sem mudar o banco.

---

## 2. Estrutura do projeto

```
emcorr-site/
├─ astro.config.mjs          # output: 'static' + adapter vercel; rotas admin/api com prerender=false
├─ src/
│  ├─ content.config.ts       # loaders do Content Layer que leem o Supabase no build
│  ├─ lib/supabase.ts         # clientes: build (service key só no build), server (ssr cookies), browser (anon)
│  ├─ styles/tokens.css       # tokens do DESIGN.md (@theme do Tailwind 4)
│  ├─ components/             # Header, Footer, WhatsAppFab, CardEspecialidade, CardExame,
│  │                          # CardProfissional, FAQ (<details>), CTAAgendar, Breadcrumb, Depoimento…
│  ├─ layouts/Base.astro      # <head>, SEO, JSON-LD, analytics
│  ├─ pages/
│  │  ├─ index.astro  sobre.astro  convenios.astro  resultados.astro  agendar.astro  contato.astro
│  │  ├─ especialidades/index.astro  especialidades/[slug].astro
│  │  ├─ exames/index.astro  exames/[slug].astro
│  │  ├─ corpo-clinico/index.astro  corpo-clinico/[slug].astro
│  │  ├─ blog/index.astro  blog/[slug].astro  blog/categoria/[slug].astro  blog/rss.xml.ts
│  │  ├─ privacidade.astro  termos.astro  llms.txt.ts  robots.txt.ts
│  │  ├─ api/agendamento.ts   api/contato.ts           # prerender=false
│  │  └─ admin/…                                         # prerender=false (ver §5)
│  └─ middleware.ts           # protege /admin (sessão Supabase + papel)
├─ supabase/migrations/*.sql   # schema, RLS, seeds (conteúdo migrado do site atual)
├─ scripts/seed-from-scrape.ts # lê scrape/emcorr/* → insere no Supabase
└─ vercel.json                 # redirects 301 do site antigo
```

---

## 3. Modelo de dados (Supabase / Postgres)

| Tabela | Campos principais | Observação |
|---|---|---|
| `site_settings` (1 linha) | nome, endereço, lat/lng, whatsapp_consultas, whatsapp_exames, telefone, email, horários (jsonb), redes, estatísticas (jsonb), textos-chave da home (jsonb), aviso_topo | Tudo o que é "global" fica editável |
| `specialties` | slug, nome, resumo, corpo (rich), ícone, imagem, ordem, ativo, seo_title, seo_description | |
| `exam_categories` | slug, nome, ordem | Imagem, Coração, Ouvido/Nariz/Garganta, Recém-nascido, Laboratório… |
| `exams` | slug, nome, categoria_id, resumo, o_que_e, como_funciona, preparo, duracao, prazo_resultado, portal_resultado, corpo, imagem, ativo, seo_* | Campos estruturados → template consistente + schema `MedicalTest` |
| `professionals` | slug, nome, titulo (Dr./Dra.), conselho (CRM/CRO/CRP/CREFITO/CRN/CRFa), numero_registro, uf, rqe, bio, foto, dias_atendimento (jsonb), ativo, ordem | CRM + RQE obrigatórios para divulgar especialidade (CFM 2.336/2023) |
| `professional_specialties` | professional_id, specialty_id | N:N |
| `specialty_exams` | specialty_id, exam_id | "Exames relacionados" |
| `insurances` | nome, logo, ordem, ativo, observacao | Convênios |
| `faqs` | owner_type (home/specialty/exam/page), owner_id, pergunta, resposta, ordem | Gera `FAQPage` |
| `testimonials` | nome, texto, foto, consentimento_em, consentimento_arquivo, ativo | Só publica com consentimento registrado |
| `posts` | slug, titulo, resumo, corpo (json do editor + html renderizado), capa, autor_id → professionals, revisado_por_id, revisado_em, categoria_id, tags[], status (rascunho/revisão/agendado/publicado), publicar_em, seo_* | Autor e revisor médico → E-E-A-T |
| `post_categories` | slug, nome, descricao | Pilares: Família e crianças, Coração e metabolismo, Exames explicados, Mente e nutrição, Sorriso |
| `post_revisions` | post_id, snapshot jsonb, autor, criado_em | Histórico |
| `media` | path (storage), alt, legenda, credito, largura, altura | Biblioteca de mídia |
| `redirects` | origem, destino, codigo | Gerados em `vercel.json` no build |
| `appointment_requests` | nome, whatsapp, tipo (consulta/exame), interesse (specialty/exam), periodo_preferido, convenio, consentimento_lgpd (bool + timestamp + versão do texto), origem (utm/página), status (novo/contatado/agendado/descartado), notas_internas | **Sem CPF, sem campo livre de sintomas** |
| `profiles` | user_id, nome, papel (admin/editor/autor/recepcao) | Papéis |
| `audit_log` | user_id, ação, tabela, registro_id, diff, quando | Rastreabilidade |

**RLS (Row Level Security):**
- Conteúdo público: `select` liberado a anon **só** para `ativo = true` / `status = 'publicado'`. O build usa a service key via variável de ambiente, nunca exposta ao cliente.
- `appointment_requests`: anon só pode **inserir** (via API route com validação e rate-limit); leitura só para `admin`/`recepcao`.
- Escrita de conteúdo: `admin` e `editor` (tudo), `autor` (só os próprios posts, sem publicar).
- Storage: bucket `public-media` (leitura pública) e bucket `private` (consentimentos de depoimento, sem leitura pública).

**Automação:** `pg_cron` a cada 5 min publica posts com `publicar_em <= now()` e chama o deploy hook (via `pg_net`).

---

## 4. Site público

- **Renderização:** 100% prerender. Content Layer do Astro com loaders que consultam o Supabase no build.
- **Imagens:** `astro:assets` com `image.remotePatterns` para o domínio do Supabase Storage + serviço de imagem da Vercel (AVIF/WebP, `srcset`, `loading="lazy"`, dimensões explícitas).
- **Fonte:** Poppins self-hosted (subset latin, `font-display: swap`, preload do peso 600).
- **JS mínimo:** menu mobile, carrossel de depoimentos (CSS scroll-snap), FAQ nativo (`<details>`), filtro de exames e botão de WhatsApp como ilhas pequenas ou vanilla. Nada de jQuery ou slider pesado.
- **SEO/GEO:** `<title>`/meta por página vindos do banco; canonical; Open Graph gerado; `@astrojs/sitemap`; `robots.txt` liberando crawlers de IA; `llms.txt` gerado do banco; JSON-LD por tipo de página:
  - Home/Sobre/Contato: `MedicalClinic` (+ `MedicalOrganization`), `PostalAddress`, `GeoCoordinates`, `openingHoursSpecification`, `sameAs`, `medicalSpecialty[]`, `availableService[]`
  - Especialidade: `MedicalSpecialty` via `MedicalWebPage` + `FAQPage` + `BreadcrumbList`
  - Exame: `MedicalTest` / `DiagnosticProcedure` + `FAQPage`
  - Profissional: `Physician`/`Dentist` com `identifier` (CRM/CRO) e `worksFor`
  - Post: `Article`/`MedicalWebPage` com `author`, `reviewedBy`, `lastReviewed`
- **Acessibilidade:** WCAG 2.2 AA. Contraste do vermelho sobre branco: #EB1A20 dá ~4,3:1, **abaixo de AA para texto normal** → usar #C0090E em textos/links pequenos e #EB1A20 em fundos, botões grandes e ícones (validar no DESIGN.md).
- **Analytics:** Vercel Web Analytics (sem cookie) + eventos: `click_whatsapp` (com a página e o serviço), `submit_agendamento`, `click_resultados` (qual portal), `click_telefone`, `click_rota`.
- **Performance (metas):** LCP < 2,0 s no 4G, CLS < 0,05, INP < 150 ms, Lighthouse ≥ 95 no mobile.

---

## 5. Painel administrativo (`/admin`)

**Stack do painel:** páginas Astro server-rendered + ilhas interativas (Preact ou React, pequeno) para formulários e editor. Auth com Supabase (e-mail + senha, com opção de link mágico) via `@supabase/ssr` e cookies httpOnly; `middleware.ts` bloqueia sem sessão ou papel.

| Módulo | O que faz |
|---|---|
| Painel inicial | Solicitações de agendamento novas, posts agendados, último deploy, atalhos |
| Solicitações | Lista/filtra `appointment_requests`, muda status, abre WhatsApp com mensagem pronta, exporta CSV, apaga após X dias (retenção LGPD) |
| Blog | Editor rich text (Tiptap): títulos, listas, imagem, citação, tabela, callout, FAQ; autor e revisor, categoria, tags, capa, SEO (contador de caracteres + prévia do Google), status/agendamento, pré-visualização, histórico de revisões |
| Especialidades / Exames | CRUD com campos estruturados, FAQs, relações, ordem por arrastar, ativar/desativar |
| Corpo clínico | CRUD com validação de conselho, número e RQE; dias de atendimento; foto |
| Convênios, Depoimentos | CRUD; depoimento exige anexo/data de consentimento |
| Home e Configurações | Textos da home, estatísticas, horários, telefones/WhatsApp, redes, aviso no topo |
| Mídia | Upload com compressão no cliente, alt obrigatório, crédito |
| Redirecionamentos | Tabela origem → destino |
| Usuários | Convite por e-mail, papéis |
| Publicar | Botão "Publicar alterações" → deploy hook + status do deploy (API da Vercel) |

**Pré-visualização:** `/admin/preview/[tipo]/[id]` renderiza o mesmo componente público em modo server com o rascunho.

---

## 6. Formulário de agendamento (LGPD)

1. Campos: nome, WhatsApp, "consulta ou exame", qual especialidade/exame (select vindo do banco), período preferido, convênio. **Sem CPF e sem descrição de sintomas.**
2. Checkbox de consentimento com link para a política, gravando versão e data.
3. Honeypot + rate-limit por IP + Cloudflare Turnstile (sem reCAPTCHA).
4. Depois de enviar: tela de confirmação + botão "Prefiro falar agora pelo WhatsApp" com mensagem pré-montada.
5. Notificação para a recepção por e-mail (Resend ou SMTP) e aviso no painel.
6. Retenção: apagar ou anonimizar solicitações com mais de **90 dias** (pg_cron). Prazo padrão, alinhado ao FUNNEL-ANALYSIS e ao princípio de minimização da LGPD; a clínica pode ajustar no painel.

---

## 7. Migração

1. `scripts/seed-from-scrape.ts` lê `scrape/emcorr/pages_clean/*.md` e `media/` e popula especialidades, exames (FAQs de 5 perguntas → campos estruturados), profissionais, convênios e depoimentos. **Revisão humana obrigatória** dos textos (erros de tradução listados no CONTENT-INVENTORY).
2. Imagens migradas para o Supabase Storage. Substituir quando chegarem os originais.
3. `vercel.json` com os 301 do CONTENT-INVENTORY §10.
4. DNS: domínio no Cloudflare → apontar para a Vercel (manter o proxy do Cloudflare desligado ou em modo compatível) no dia do lançamento. Os subdomínios de resultados (`resultados.emcorr.com.br`) continuam onde estão.
5. Search Console: enviar o novo sitemap e acompanhar os 404.

---

## 8. Ambientes e segurança

- Ambientes: `preview` (branch, Supabase de staging) e `production`.
- Variáveis: `SUPABASE_URL`, `SUPABASE_ANON_KEY` (público), `SUPABASE_SERVICE_ROLE_KEY` (**só no build e nas API routes**), `VERCEL_DEPLOY_HOOK_URL`, `TURNSTILE_SECRET`, `RESEND_API_KEY`.
- Cabeçalhos: CSP, HSTS, `X-Frame-Options: DENY` no /admin, `Referrer-Policy`.
- Backups: backup diário do Supabase (plano Pro) ou `pg_dump` agendado.
- Dados de saúde: o site **não** coleta dados clínicos. Resultados de exame ficam nos portais dos laboratórios.
