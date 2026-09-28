# Plano de Construção — Novo site EmCORR
**Data:** 28/09/2026 · **Go-live alvo:** terça, 10/11/2026 (DNS às 6h), com anúncio público em 11/11 (LAUNCH-PLAYBOOK.md)
**Stack:** Astro 7.3 · Tailwind 4.3 · Vercel · Supabase (Postgres, Auth, Storage) · painel `/admin` próprio · blog
**Direção visual:** DESIGN.md ("Moderno acolhedor": vermelho EmCORR + Poppins + neutros quentes)

---

## 0. Fontes de verdade (o que cada arquivo decide)
| Assunto | Arquivo |
|---|---|
| Conteúdo existente e mídia | CONTENT-INVENTORY.md + `scrape/emcorr/` |
| Voz e mensagens | BRAND-VOICE.md |
| Visual, tokens e componentes | DESIGN.md (+ DESIGN-REFS/) |
| Arquitetura, banco e admin | ARQUITETURA.md |
| URLs, títulos, metas, 301, cidades | SEO-AUDIT.md |
| Palavra-chave → página, pautas | KEYWORD-STRATEGY.md |
| Schema, llms.txt, requisitos técnicos | GEO-AUDIT-REPORT.md (seção final) |
| Home (wireframe e conversão) | LANDING-CRO.md |
| Jornada, CTAs, WhatsApp e eventos | FUNNEL-ANALYSIS.md |
| Personas | AUDIENCE-PERSONAS.md |
| Copy das páginas | COPY-SITE-INSTITUCIONAL.md · COPY-ESPECIALIDADES-EXAMES.md (YAML, pronto para o seed) |
| NAP e citações | BRAND-MENTIONS.md |
| Redes e blog (90 dias) | SOCIAL-CALENDAR.md |
| Lançamento | LAUNCH-PLAYBOOK.md |
| Concorrência | COMPETITOR-REPORT.md |

**Conflitos já resolvidos:**
- Fundação da marca: 2020.
- Retenção de pedidos de agendamento: 90 dias.
- Data de lançamento: 10/11 (o SOCIAL-CALENDAR propunha 09/11 → mover os posts de lançamento para 11/11).
- `/nasofibrolaringoscopia` redireciona para `/nasofibroscopia`.
- Mamografia é exame, não especialidade.

---

## 1. Cronograma (6 semanas)

| Semana | Datas | Entrega | Critério de pronto |
|---|---|---|---|
| **S0** | 29/09–03/10 | Setup + pendências | Repo, Vercel (preview), Supabase staging, migrations e RLS; lista de pendências enviada à clínica; sessão de fotos agendada |
| **S1** | 06/10–10/10 | Design system + layout | Tokens, fontes, Header/Footer/barra mobile, os 20 componentes do DESIGN.md numa página `/_kit`; aprovação da clínica |
| **S2** | 13/10–17/10 | Páginas públicas com dados | Seed a partir das COPY-*.md; home, especialidades, exames, corpo clínico, convênios, resultados, agendar, contato, sobre, particular-ou-sus, cidades-atendidas, 404; schema e SEO por página |
| **S3** | 20/10–24/10 | Painel admin | Auth e papéis, CRUD de conteúdo, solicitações de agendamento, mídia, configurações, botão Publicar (deploy hook) |
| **S4** | 27/10–31/10 | Blog + conteúdo | Editor, agendamento de posts (pg_cron), categorias, RSS; 6–12 posts de lançamento revisados por profissional; fotos reais aplicadas |
| **S5** | 03/11–07/11 | QA + migração | Lighthouse ≥ 95, WCAG AA, Playwright dos fluxos, 301 testados, conteúdo final sem marcadores, treinamento da recepção no painel (1h) |
| **Go-live** | 10/11 | DNS → Vercel | Checklist do LAUNCH-PLAYBOOK; rollback pronto |

> Se as pendências críticas (§4) não chegarem até 24/10, o go-live vai para 17/11. É o critério de adiamento do playbook.

---

## 2. Backlog por fase

### S0 — Setup
- [ ] `pnpm create astro@latest emcorr-site` (template minimal, TypeScript strict)
- [ ] `astro add vercel mdx sitemap` + Tailwind 4 (`@tailwindcss/vite`)
- [ ] Supabase: projeto staging + produção; migrations do ARQUITETURA §3; RLS; buckets `public-media` e `private`
- [ ] `scripts/seed-from-copy.ts`: parse do YAML de COPY-ESPECIALIDADES-EXAMES.md + CONTENT-INVENTORY → inserts; upload de `scrape/emcorr/media/` para o Storage
- [ ] Vercel: projeto, variáveis de ambiente, deploy hook, domínio de preview
- [ ] Instalar ferramentas de design e QA (§5)

### S1 — Design system
- [ ] `src/styles/tokens.css` com o `@theme` do DESIGN.md §9
- [ ] Poppins self-hosted (400/500/600/500i)
- [ ] Componentes: Button, Header, MobileMenu, MobileBottomBar, UtilityBar, Hero, ShortcutGrid, TrustStrip, LifeStageCard, SpecialtyCard, RedBand, ExamRow + filtro, ProfessionalCard, FAQ, Testimonials, Steps, Form + Field, Chip, Breadcrumb, Footer, WhatsAppFab
- [ ] Página `/_kit` (noindex) para revisão e aprovação
- [ ] `/impeccable init` com DESIGN.md como contexto; `/impeccable audit` no kit

### S2 — Páginas públicas
- [ ] Layout Base: SEO (title/meta/canonical/OG), JSON-LD por tipo (ARQUITETURA §4), analytics e eventos (FUNNEL-ANALYSIS)
- [ ] Home (12 seções, LANDING-CRO + COPY-SITE-INSTITUCIONAL)
- [ ] `/especialidades` e `[slug]` · `/exames` (busca + chips) e `[slug]` · `/corpo-clinico` e `[slug]`
- [ ] `/convenios` · `/resultados` (ponte para os 3 portais) · `/agendar` (form + API + Turnstile) · `/contato` · `/sobre` · `/particular-ou-sus` · `/cidades-atendidas` · `/links` (bio do Instagram) · `/privacidade` · 404
- [ ] `robots.txt`, `sitemap`, `llms.txt` gerados
- [ ] `vercel.json` com todos os 301 (SEO-AUDIT + CONTENT-INVENTORY §10)
- [ ] `/geo-schema` para validar e completar o JSON-LD; `fixing-metadata`

### S3 — Admin
- [ ] Middleware + `@supabase/ssr`, login e convite, papéis admin/editor/autor/recepcao
- [ ] Módulos: Solicitações · Especialidades · Exames · Corpo clínico · Convênios · Depoimentos (com consentimento) · Home/Configurações · Mídia · Redirecionamentos · Usuários
- [ ] Botão "Publicar alterações" + status do deploy
- [ ] Pré-visualização de rascunho
- [ ] `audit_log` em todas as escritas

### S4 — Blog
- [ ] Editor Tiptap (títulos, listas, imagem, citação, callout, tabela, FAQ) → HTML sanitizado
- [ ] Autor e revisor médico (profissional com registro), "Atualizado em", tempo de leitura, sumário
- [ ] Status rascunho/revisão/agendado/publicado + pg_cron + deploy hook
- [ ] Categorias: Família e crianças · Coração e metabolismo · Exames explicados · Mente e nutrição · Sorriso
- [ ] Posts de lançamento a partir das pautas P1 do KEYWORD-STRATEGY e SEO-AUDIT (ex.: tomografia, teste do pezinho/orelhinha/linguinha, pressão alta, tireoide, primeira consulta no dentista, particular ou SUS)

### S5 — QA e migração
- [ ] `fixing-accessibility`, `baseline-ui`, `fixing-motion-performance`, `/impeccable polish`
- [ ] Playwright: agendar (sucesso e erro), clique no WhatsApp com mensagem correta, resultados → 3 portais, menu mobile, filtro de exames, login no admin → editar → publicar
- [ ] Lighthouse mobile ≥ 95 em home, especialidade, exame e post
- [ ] Varredura: nenhum `[[PREENCHER]]`/`[[CONFIRMAR]]` no build (o build falha se encontrar)
- [ ] Teste de todos os 301 com a lista de URLs antigas (`scrape/emcorr/pages.json`)
- [ ] Backup completo do WordPress (arquivos + banco) antes da troca
- [ ] Treinamento da recepção: painel de solicitações + WhatsApp

### Pós-lançamento
- Semanas 1–4: plano de citações e NAP (BRAND-MENTIONS + LAUNCH-PLAYBOOK) e Google Business Profile
- Blog: 1–2 posts por semana seguindo o SOCIAL-CALENDAR
- +30 dias: `/geo-compare` contra GEO-AUDIT-REPORT (baseline 29/100) e `/market-seo` de novo (baseline 31/100)

---

## 3. Metas mensuráveis
| Métrica | Hoje | Meta em 90 dias |
|---|---|---|
| GEO score | 29/100 | ≥ 70 |
| SEO score | 31/100 | ≥ 80 |
| CRO da home | 31/100 | ≥ 75 |
| Visitas que iniciam contato (WhatsApp/form) | ~1–2% (estimativa) | 5–8% |
| URLs antigas em 404 | várias | 0 |
| Lighthouse mobile | não medido | ≥ 95 |
| NAP consistente | 6 variações | 1 variação em 15 locais |

---

## 4. Pendências da clínica (bloqueiam o lançamento)
**Críticas (até 24/10):**
1. **Endereço oficial:** "Rua" ou "Avenida" Getúlio Vargas, 471.
2. **Números oficiais:** WhatsApp de consultas, WhatsApp de exames/radiologia, telefone fixo.
3. **Profissionais:** conselho, número de registro, RQE, especialidades e dias de atendimento dos 11. Hoje só há registro publicável da Dra. Ludmilla (CRM-PI 5888, RQE 2142) e do Dr. Igor (CRO-PI 2031).
4. **Responsável técnico** (nome + CRM) para o rodapé.
5. **Serviços ativos:** Pediatria (não há pediatra no corpo clínico atual), Mamografia, Neurologia, Psiquiatria, Cirurgia Geral, Dermatologia, Ortopedia, Covid-19.
6. **Por exame:** preparo, duração, prazo do resultado, convênios aceitos.
7. **Horário de funcionamento.**
8. **Logo em vetor.**

**Importantes:**
9. Fotos originais em alta ou sessão de fotos (fachada, recepção, salas, tomógrafo, equipe).
10. Números reais para a faixa de confiança (atendimentos, profissionais).
11. Consentimento escrito dos depoimentos (Marta, Suele) e novos depoimentos.
12. Revisão dos termos "hipertrofia" e "soroterapia/injetáveis" do perfil da endocrinologia (CFM 2.333/2023).
13. Acessos: Cloudflare/DNS, Google Business Profile, Search Console, Meta Business.
14. Revisão jurídica da Política de Privacidade.

Lista completa e detalhada: COPY-SITE-INSTITUCIONAL.md §24 e marcadores nos arquivos COPY-* (104 + 264 ocorrências).

---

## 5. Ferramentas de design e QA (instalar numa sessão interativa do `claude`)
| Ferramenta | Como | Uso |
|---|---|---|
| Impeccable | `/plugin marketplace add pbakaus/impeccable` → `/plugin` → instalar → `/impeccable init` | typeset, layout, polish e audit dos componentes |
| Playwright MCP | `claude mcp add playwright -- npx @playwright/mcp@latest` | testes de fluxo e comparação visual |
| design-inspiration-mcp | clonar `notsointresting/design-inspiration-mcp` e `claude mcp add design-inspiration -- node <caminho>/src/index.js` | inspiração extra (opcional: as referências já estão em DESIGN-REFS) |
| Mobbin / Pinterest | login feito **por você** no navegador embutido | referências adicionais, se quiser |

---

## 6. Riscos
| Risco | Mitigação |
|---|---|
| Pendências da clínica atrasam | Placeholder bloqueia o build; data de adiamento em 17/11 |
| Fotos ruins derrubam o "premium" | Sessão de fotos em S1–S2; enquanto isso, ilustração de linha (nunca stock de "paciente") |
| Publicidade médica irregular | Checklist CFM 2.336/2023 e CFO; CRM/RQE obrigatórios no schema do banco |
| Perda de ranking na troca | 301 completos, Search Console, monitoramento de 404 por 30 dias |
| Recepção não usa o painel | Painel simples, treinamento, notificação por e-mail |
