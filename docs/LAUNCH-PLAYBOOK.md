# Playbook de Lançamento: novo site da EmCORR – Centro Clínico
## Data de lançamento proposta: **terça-feira, 10/11/2026 (D-0)**
## Tipo de lançamento: **híbrido local** (troca técnica controlada + comunicação orgânica no Instagram, Facebook, WhatsApp e balcão + citações locais). Sem anúncio pago obrigatório e sem gancho de aniversário.
## Objetivo principal: **fazer o site virar o caminho de agendamento.** Meta: em 90 dias, pelo menos 7% dos visitantes iniciam uma conversa (clique no WhatsApp ou formulário enviado), com zero perda de páginas indexadas e o NAP igual em 15 lugares.

**Elaborado em:** 28/09/2026 · **Base:** PLANO-MESTRE, ARQUITETURA, SEO-AUDIT (mapa de 301 e GBP), GEO-AUDIT-REPORT, BRAND-MENTIONS (NAP e citações), FUNNEL-ANALYSIS (eventos, WhatsApp, formulário), KEYWORD-STRATEGY (restrições CFM/CFO), AUDIENCE-PERSONAS, BRAND-VOICE, COMPETITOR-REPORT, CONTENT-INVENTORY e LANDING-CRO. O SOCIAL-CALENDAR.md ainda não existia quando este plano foi escrito. Quando ele ficar pronto, os posts das seções 3 e 5 devem ser encaixados nele, sem duplicar.

> **Como adaptamos a skill `market-launch`.** A skill foi feita para lançar produto, com lista de e-mail, preço de lançamento e escassez. Numa clínica, isso não serve e em parte é proibido. Por isso:
> - **Sem urgência artificial, desconto, "vagas limitadas" nem brinde.** Na odontologia, o CFO proíbe anunciar preço, desconto e gratuidade. A CFM 2.336/2023 proíbe sensacionalismo e promessa de resultado. O gancho do lançamento é **utilidade**: preparo de exame, resultado em um só lugar e WhatsApp certo para cada serviço.
> - **O e-mail vira WhatsApp.** A clínica vive de WhatsApp (o PLANO-MESTRE descartou `market-emails`). A "sequência de e-mails" virou uma sequência de Status, lista de transmissão (só com opt-in) e mensagem da recepção.
> - **Os beta testers são a equipe e pacientes próximos**, sem expor dados de saúde de ninguém.
> - **Os "parceiros" são a imprensa local, os diretórios e os profissionais do corpo clínico.** Não há influenciadores pagos.
> - **As datas são relativas a D-0.** Se o lançamento mudar, todo o cronograma anda junto. Evite lançar em véspera de feriado. Em 2026, 15/11 cai num domingo e 20/11 (Consciência Negra, feriado nacional) cai numa sexta. Confirme os feriados municipais de Corrente.

---

## Sumário
0. [Pré-requisitos que travam o lançamento (go/no-go)](#0-pré-requisitos-que-travam-o-lançamento-gono-go)
1. [Checklist técnico de go-live](#1-checklist-técnico-de-go-live)
2. [Plano de comunicação do lançamento](#2-plano-de-comunicação-do-lançamento)
3. [Textos prontos para adaptar](#3-textos-prontos-para-adaptar)
4. [Plano de citações locais (4 primeiras semanas)](#4-plano-de-citações-locais-4-primeiras-semanas)
5. [Cronograma: pré-lançamento, semana de lançamento dia a dia e 4 semanas seguintes](#5-cronograma)
6. [KPIs e metas de 30/60/90 dias](#6-kpis-e-metas-306090-dias)
7. [Riscos e mitigação](#7-riscos-e-mitigação)
8. [Orçamento](#8-orçamento)
9. [Lançamento mínimo viável](#9-lançamento-mínimo-viável)
10. [Pós-lançamento e retrospectiva](#10-pós-lançamento-e-retrospectiva)

---

## Posicionamento do lançamento

> **Para famílias de Corrente e região** que perdem tempo procurando o número certo, o preparo do exame ou o portal do resultado, **o novo site da EmCORR** reúne em um só lugar o agendamento pelo WhatsApp, as orientações de preparo e o acesso aos resultados. **Diferente de** ligar para o balcão ou procurar no Linktree, cada página já leva você ao WhatsApp certo, com a mensagem pronta.

- **Mensagem central:** "Agora ficou mais fácil cuidar da sua família com a EmCORR: agende, veja o preparo do seu exame e encontre seu resultado, tudo em emcorr.com.br."
- **Assinatura:** "Cuidando de você e de quem você ama." (BRAND-VOICE)
- **Linha de apoio:** "Saúde para toda a família, em um só lugar, aqui em Corrente."
- **Três provas úteis para mostrar em toda peça:** (1) página de preparo de cada exame; (2) página única `/resultados`; (3) botão de WhatsApp com a mensagem pronta em cada especialidade.
- **Palavras proibidas em toda peça** (KEYWORD-STRATEGY): melhor, referência (sem prova), de ponta, renomado, garantido, cura, 100%, sem dor, sorriso perfeito, grátis, promoção, desconto, antes e depois.

---

## 0. Pré-requisitos que travam o lançamento (go/no-go)

Nenhum item abaixo é técnico no sentido de código, mas **sem eles o site não pode ir ao ar** sem risco ético, legal ou de SEO. Revisão em D-7 (terça, 03/11). Se algum item crítico estiver aberto, adie D-0 em uma semana. Não lance com a pendência.

| # | Item | Dono | Crítico? | Fonte |
|---|---|---|---|---|
| 1 | **NAP canônico decidido e assinado pela clínica:** "Rua" ou "Avenida" Getúlio Vargas, 471 – Centro (conferir Correios/prefeitura e cartão CNPJ); quais telefones aparecem e em que ordem; horário real (inclusive sábado) | Clínica + projeto | **Sim** | BRAND-MENTIONS §5.1 |
| 2 | **Qual WhatsApp atende o quê.** Hoje o Linktree tem 2 números ("radiologia" e "consultas") e o site mostra um terceiro, (89) 9 9933-1133. Definir: Consultas/odonto/lab × Imagem × Resultados | Clínica | **Sim** | FUNNEL §Resumo |
| 3 | **Diretor técnico médico** (nome + CRM + RQE) no rodapé de todas as páginas; **responsável técnico odontológico** (nome + CRO) nas páginas de odonto; CRP na psicologia | Clínica | **Sim** (CFM 2.336/2023, CFO) | KEYWORD-STRATEGY, GEO-AUDIT #11 |
| 4 | **Registro de cada profissional publicado** (conselho, número, RQE, especialidade). Profissional sem dado confirmado **não entra** no ar (fica como rascunho no admin) | Clínica | **Sim** | CONTENT-INVENTORY §5 |
| 5 | **Lista real de especialidades e exames ativos.** Serviço que não é oferecido não é publicado (Covid-19? Mamografia própria? Dermatologia? Ortopedia? Odontopediatria?) | Clínica | **Sim** | SEO-AUDIT Críticas #5 |
| 6 | **Política de Privacidade e Termos** revisados (LGPD), com a versão do consentimento do formulário | Clínica + jurídico | **Sim** | GEO-AUDIT #3 |
| 7 | **Consentimento por escrito** dos depoimentos (Marta, Suele). Sem consentimento, a seção sai do ar | Clínica | **Sim** | CONTENT-INVENTORY §7 |
| 8 | **Números reais** para a faixa de estatísticas (anos, atendimentos, profissionais). Sem número confirmado, o bloco fica oculto (nunca "0+") | Clínica | Não (bloco some) | BRAND-VOICE |
| 9 | **Prazo de retenção** das solicitações do formulário. A ARQUITETURA diz 180 dias e o FUNNEL diz 90. Decidir **um** valor e colocar o mesmo na Política | Projeto + clínica | Sim | ARQUITETURA §6 × FUNNEL |
| 10 | **Acessos em mãos:** Cloudflare (DNS), hospedagem do WordPress, Google Business Profile (dono ou administrador), Search Console, Vercel, Supabase, Meta Business (Instagram/Facebook), WhatsApp Business | Clínica | **Sim** | CONTENT-INVENTORY §11 |
| 11 | **Fotos reais** (fachada, recepção, salas, equipamentos, equipe com autorização). Mínimo para o dia: fachada + recepção + 1 por profissional | Clínica | Não (usar provisórias) | PLANO-MESTRE §7 |
| 12 | **Pessoa responsável pelas solicitações** do formulário e pelo WhatsApp em D-0 a D+7, com tempo de resposta combinado (meta: 30 min em horário comercial) | Clínica | **Sim** | FUNNEL |

---

## 1. Checklist técnico de go-live

Convenções: **D-0 = terça, 10/11/2026.** A troca de DNS acontece às **06h00** (menor movimento). A comunicação pública começa em **D+1**, depois de 24 h de estabilidade. Responsáveis sugeridos: **[DEV]** quem constrói o site, **[CLÍNICA]** gestão/recepção, **[MKT]** redes sociais.

### 1.1 Backup do WordPress antigo (D-14 a D-1)
- [ ] **[DEV] D-14:** backup completo pela hospedagem: arquivos (`wp-content/` inteiro), banco (dump `.sql`) e `.htaccess`. Guardar em 2 lugares (drive da clínica + cópia do projeto), com data no nome.
- [ ] **[DEV] D-14:** exportar pelo WordPress (Ferramentas → Exportar → Todo o conteúdo) em `.xml`, como redundância.
- [ ] **[DEV] D-14:** conferir que `scrape/emcorr/` (64 páginas HTML, textos, 31 mídias, `media-manifest.json`) está completo. É o "espelho estático" do site antigo.
- [ ] **[DEV] D-14:** exportar a lista de URLs indexadas: Search Console (Páginas → exportar), `site:emcorr.com.br` e o `wp-sitemap.xml`. Essa lista vira a planilha de teste de 301.
- [ ] **[DEV] D-7:** listar os destinos dos formulários do WordPress (/agendar e a newsletter do rodapé). Exportar e **entregar à clínica** as solicitações e os e-mails já coletados, que depois serão apagados no servidor antigo conforme a Política (LGPD). Não migrar a lista da newsletter para o WhatsApp: não houve consentimento para esse canal.
- [ ] **[DEV] D-1:** backup final (arquivos + banco) com o site congelado, sem edições depois disso.
- [ ] **[CLÍNICA]** **Não cancelar a hospedagem do WordPress antes de D+60.** Manter o site antigo acessível só pelo IP/URL temporária da hospedagem (ou em `antigo.emcorr.com.br` com senha e `noindex`) para um rollback rápido.

### 1.2 Pré-produção na Vercel (D-14 a D-2)
- [ ] **[DEV]** Projeto de produção na Vercel ligado ao repositório. Variáveis de ambiente de **production** conferidas: `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` (só build/API), `VERCEL_DEPLOY_HOOK_URL`, `TURNSTILE_SECRET`, `RESEND_API_KEY`. Nenhuma chave de staging em produção.
- [ ] **[DEV]** Supabase de produção **no plano pago** (ou com backup diário garantido). No plano gratuito, projetos inativos são pausados, e o build do site depende do banco.
- [ ] **[DEV]** `site: 'https://emcorr.com.br'` no `astro.config`, `trailingSlash: 'never'` e `trailingSlash: false` no `vercel.json`. Canônico **sem www** (SEO-AUDIT §2.3).
- [ ] **[DEV]** `robots.txt` de produção: liberar tudo, bloquear `/admin` e `/api`, liberar os robôs de IA (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) e apontar o `sitemap-index.xml`. **Conferir que o `noindex` do preview não vazou para produção.**
- [ ] **[DEV]** `llms.txt` gerado do banco, com o NAP canônico.
- [ ] **[DEV]** JSON-LD validado no Rich Results Test e no validator.schema.org: `MedicalClinic` (+ `Dentist`) com `foundingDate: "2020"`, `address`, `geo`, `openingHoursSpecification`, `telephone`, `sameAs` (Instagram, Facebook e GBP), `Physician`/`Dentist` com `identifier` (CRM/CRO), `FAQPage`, `BreadcrumbList` e `Article`.
- [ ] **[DEV]** Página 404 útil (texto do BRAND-VOICE + links para Especialidades, Exames e WhatsApp).
- [ ] **[DEV]** Cabeçalhos de segurança: CSP, HSTS, `Referrer-Policy`, `X-Frame-Options: DENY` no `/admin`.
- [ ] **[DEV]** Lighthouse mobile ≥ 95 nas 10 páginas principais. Metas: LCP < 2,0 s em 4G, CLS < 0,05 e INP < 150 ms (ARQUITETURA §4).
- [ ] **[DEV]** Acessibilidade WCAG 2.2 AA (`fixing-accessibility`). Vermelho #C0090E em texto pequeno.
- [ ] **[DEV]** Revisão de conteúdo por uma pessoa: nenhum "Ludmila" (a grafia correta é **Ludmilla**), nenhum "0+", nenhum texto de template, erros de tradução corrigidos (CONTENT-INVENTORY §4) e todas as páginas com "Corrente-PI" no title/H1.
- [ ] **[DEV]** Admin: usuários convidados com o papel certo (admin, editor, recepção), senha forte e 2FA se disponível. Testar publicar → deploy hook → site atualizado.

### 1.3 Redirecionamentos 301 (D-7 a D+1)
- [ ] **[DEV]** Implementar em `vercel.json` (`permanent: true`) **todo** o mapa do SEO-AUDIT §2.3: 52 URLs do WordPress + `/author/*`, `/feed/`, `/wp-json/*`, `/xmlrpc.php`, `/?s=*` + legado Joomla `/index.php/*`.
- [ ] **[DEV]** Regra para **`www.emcorr.com.br/*` → `https://emcorr.com.br/*`** (301, preservando o caminho). O legado Joomla está indexado em `www.`.
- [ ] **[DEV]** Evitar cadeias: `/index.php/especialidades/cardiologiaclinica` deve ir **direto** a `/especialidades/cardiologia` (hoje termina em 404), não em dois saltos.
- [ ] **[DEV] D-2 (no domínio de preview da Vercel):** script que lê a planilha de URLs antigas e faz `curl -sI` em cada uma. Resultado esperado: **um** 301 → destino com **200**. Salvar o relatório.
- [ ] **[DEV] D-0 +30 min:** rodar o mesmo script contra `https://emcorr.com.br`. **0 URLs antigas com 404** é critério de go.
- [ ] **[DEV] D+1 a D+30:** acompanhar os 404 em Search Console → Páginas e nos logs da Vercel. Toda URL nova com 404 recebe 301 em até 48 h (tabela de redirecionamentos do admin).

### 1.4 DNS: Cloudflare → Vercel (D-7 a D+2)
> O domínio continua registrado e com DNS no Cloudflare. Só mudam os registros do site. **E-mail e subdomínios de resultado não podem ser tocados.**

- [ ] **[DEV] D-7:** **exportar a zona DNS inteira do Cloudflare** (DNS → Exportar) e guardar como `dns-antes-AAAA-MM-DD.txt`. É a base do rollback.
- [ ] **[DEV] D-7:** anotar os valores atuais de `A`/`AAAA`/`CNAME` de `emcorr.com.br` e `www` (IP da hospedagem WordPress).
- [ ] **[DEV] D-7:** listar e **não alterar**: `MX`, `TXT` de SPF/DKIM/DMARC (o e-mail atendimento@emcorr.com.br), `resultados.emcorr.com.br` e qualquer outro subdomínio. `emcorr.uniexames.com.br` e `entregadeexames.com.br` são domínios de terceiros e não mudam.
- [ ] **[DEV] D-3:** baixar o TTL dos registros `@` e `www` para **300 s** (Auto no Cloudflare já é 300 com proxy desligado). Isso permite voltar atrás em minutos.
- [ ] **[DEV] D-3:** na Vercel, adicionar `emcorr.com.br` e `www.emcorr.com.br` ao projeto (www redirecionando para o domínio sem www). Se a Vercel pedir, criar o `TXT` de verificação no Cloudflare.
- [ ] **[DEV] D-3:** e-mail transacional (Resend): criar os registros de verificação num **subdomínio de envio** (ex.: `send.emcorr.com.br`) para não conflitar com o SPF/MX atual. Testar o envio.
- [ ] **[DEV] D-0 06h00:** trocar `A @` e `CNAME www` para os valores que a Vercel mostrar no painel (hoje costuma ser `A 76.76.21.21` e `CNAME cname.vercel-dns.com`, mas **use os do painel**). **Proxy do Cloudflare desligado (nuvem cinza, "DNS only")**, como decidido na ARQUITETURA §7. Se mais tarde quiserem o proxy ligado, SSL/TLS em **Full (strict)**, nunca "Flexible" (causa loop de redirecionamento).
- [ ] **[DEV] D-0:** desligar no Cloudflare as regras que possam brigar com a Vercel: Page Rules/Redirect Rules antigas, "Always Use HTTPS" duplicado, cache de HTML e Rocket Loader.
- [ ] **[DEV] D-0:** esperar o certificado SSL da Vercel ficar "Valid". Testar `https://emcorr.com.br`, `http://emcorr.com.br`, `https://www.emcorr.com.br` e `http://www.emcorr.com.br`. Todos devem terminar em `https://emcorr.com.br/` com um único salto.
- [ ] **[DEV] D-0:** conferir a propagação (`dig emcorr.com.br @1.1.1.1` e `@8.8.8.8`) e testar por 4G (fora do Wi-Fi da clínica).
- [ ] **[DEV] D-0:** mandar e receber um e-mail de teste em atendimento@emcorr.com.br (o MX continua funcionando).
- [ ] **[DEV] D-0:** abrir os 3 portais de resultado pelos links da página `/resultados`.
- [ ] **[DEV] D+2:** se estiver tudo estável, subir o TTL para 1 h (ou Auto).

### 1.5 Google Search Console, Bing e sitemap (D-3 a D+30)
- [ ] **[DEV] D-3:** propriedade de **domínio** (`emcorr.com.br`) verificada por `TXT` no Cloudflare. Se já houver uma propriedade de prefixo de URL, mantê-la: o histórico serve como linha de base.
- [ ] **[DEV] D-3:** anotar a **linha de base** (últimos 3 meses): cliques, impressões, páginas indexadas, top 20 consultas e top 20 páginas. Exportar para planilha.
- [ ] **[DEV] D-0:** enviar `https://emcorr.com.br/sitemap-index.xml` e remover o `wp-sitemap.xml` antigo (ele vai responder 301/404, e isso é o esperado).
- [ ] **[DEV] D-0:** inspecionar a URL e **solicitar indexação** das 20 URLs principais (home, `/agendar`, `/resultados`, `/contato`, `/convenios`, as especialidades e os exames mais buscados: tomografia, ultrassonografia, exames laboratoriais, pediatria, odontologia, ortodontia, cardiologia).
- [ ] **[DEV] D-0:** **não** usar "Mudança de endereço" (o domínio é o mesmo).
- [ ] **[DEV] D-0:** Bing Webmaster Tools (importar do Search Console) + envio do sitemap + **IndexNow** (chave no site, ping a cada publicação do admin, se implementado).
- [ ] **[DEV] D+1, D+3, D+7, D+14, D+30:** checar Páginas (Não encontrado 404, Redirecionamento, Rastreada mas não indexada), Experiência na página e Melhorias (dados estruturados). Corrigir e validar.

### 1.6 Google Business Profile (D-10 a D+7)
> Mudanças grandes no GBP (nome + endereço + categoria de uma vez) podem acionar nova verificação ou suspensão. **Separe as edições.**

- [ ] **[CLÍNICA] D-10:** confirmar quem é **proprietário** da ficha e adicionar o gestor do projeto como administrador. Anotar a **nota e o nº de avaliações** da EmCORR e da Policlínica (linha de base, que nunca foi coletada).
- [ ] **[CLÍNICA] D-10 (1ª leva, sem mexer no site):** horário real, telefones (WhatsApp principal + fixo adicional), atributos (acessibilidade, estacionamento, Wi-Fi), descrição (boilerplate do BRAND-VOICE, até 750 caracteres, com a frase "Atendemos Corrente e região...") e **30+ fotos reais** (sem pacientes).
- [ ] **[CLÍNICA] D-7 (2ª leva):** nome exatamente "**EmCORR – Centro Clínico**" (se a fachada disser isso; sem palavras-chave extras) e **endereço canônico** com o pin conferido na porta.
- [ ] **[CLÍNICA] D-7:** categoria principal "Clínica médica" (ou "Centro médico"). Secundárias só as oferecidas de fato (Dentista/Clínica odontológica, Ortodontista, Centro de diagnóstico por imagem, Laboratório médico...). **Tirar "Hospital universitário"** se estiver lá (BRAND-MENTIONS).
- [ ] **[CLÍNICA] D-0 (depois do DNS estável):** Site → `https://emcorr.com.br/?utm_source=google&utm_medium=organic&utm_campaign=gbp`. Link de agendamento → `https://emcorr.com.br/agendar?utm_source=google&utm_medium=organic&utm_campaign=gbp-agendar`.
- [ ] **[CLÍNICA] D+1:** **Serviços**: cadastrar cada especialidade e exame ativo com descrição curta e link da página.
- [ ] **[MKT] D+1:** primeiro **post no GBP** sobre o site novo (texto na seção 3.6).
- [ ] **[CLÍNICA] D+1:** gerar o **link curto de avaliação** (GBP → "Pedir avaliações") e o QR code de avaliação para o balcão.
- [ ] **[CLÍNICA]** Perfis individuais de profissionais no Google ficam **para depois de D+60** e só para profissionais fixos (SEO-AUDIT §2.8).

### 1.7 NAP unificado (D-7 a D+1)
Aplicar o NAP canônico decidido no item 0.1, **idêntico caractere por caractere**:
- [ ] **[DEV]** Site: rodapé de todas as páginas, `/contato`, `/sobre`, schema JSON-LD, `llms.txt` e mapa incorporado.
- [ ] **[CLÍNICA]** GBP (seção 1.6).
- [ ] **[MKT] D-0:** Instagram (bio com endereço, botão de contato e **link `emcorr.com.br/links?utm_source=instagram&utm_medium=bio` no lugar do Linktree**).
- [ ] **[MKT] D-0:** Facebook (Sobre: nome, endereço, telefones, horário, site com UTM de facebook).
- [ ] **[CLÍNICA] D-0:** perfil do WhatsApp Business de **cada** número: descrição, endereço, horário e site com UTM de whatsapp.
- [ ] **[CLÍNICA] D+1:** Linktree: manter por 30 dias apenas com um botão "Novo site da EmCORR" → `/links`, depois desativar. Assim ninguém cai num link morto que ficou salvo em algum lugar.
- [ ] Diretórios externos: ver a seção 4.

### 1.8 Analytics e eventos (D-10 a D+7)
- [ ] **[DEV]** Vercel Web Analytics (sem cookies) ou Plausible. **Conferir se o plano da Vercel permite eventos personalizados** (hoje exige plano pago). Se não permitir, usar Plausible para os eventos.
- [ ] **[DEV]** Implementar os eventos do FUNNEL-ANALYSIS: `whatsapp_click` (`local`, `pagina_tipo`, `servico`, `numero`), `phone_click`, `agendar_cta_click`, `form_start`, `form_field_error` (nome do campo, **nunca o valor**), `form_submit`, `form_to_whatsapp`, `results_portal_click`, `results_help_click`, `directions_click`, `convenio_view`, `prep_view`, `scroll_75`, `links_page_click`, `blog_cta_click`.
- [ ] **[DEV]** Nenhum evento carrega nome, telefone, texto de mensagem ou termo livre de busca (LGPD).
- [ ] **[DEV]** Todo link de WhatsApp termina com o código de origem (`[site-ped]`, `[site-tc]`...), para a recepção etiquetar a conversa no WhatsApp Business.
- [ ] **[DEV] D-2:** QA de eventos no preview: clicar em cada tipo de CTA (1 especialidade, 1 exame de imagem, 1 de laboratório, 1 profissional, float, `/links`, `/resultados`) e conferir no painel que o evento chegou com as propriedades certas.
- [ ] **[DEV]** Padronizar as UTMs (tabela abaixo) e gerar os QR codes **a partir dessas URLs**.

| Onde | URL |
|---|---|
| Bio do Instagram | `/links?utm_source=instagram&utm_medium=bio&utm_campaign=lancamento-site` |
| Stories (link) | `/<pagina>?utm_source=instagram&utm_medium=stories&utm_campaign=lancamento-site` |
| Facebook | `?utm_source=facebook&utm_medium=social&utm_campaign=lancamento-site` |
| Status/lista do WhatsApp | `?utm_source=whatsapp&utm_medium=status` ou `utm_medium=lista` |
| QR do balcão | `/links?utm_source=qr&utm_medium=balcao&utm_campaign=lancamento-site` |
| QR da sala de espera | `/links?utm_source=qr&utm_medium=sala-espera&utm_campaign=lancamento-site` |
| QR do preparo de exame (impresso da recepção) | `/exames/<slug>?utm_source=qr&utm_medium=preparo` |
| Matéria na imprensa | `?utm_source=portalcorrente&utm_medium=referral&utm_campaign=lancamento-site` |
| GBP | ver 1.6 |

- [ ] **[CLÍNICA]** Planilha simples (ou etiquetas do WhatsApp Business) para a recepção marcar, por código `[site-…]`: **conversa → agendou → compareceu**. É o que fecha a conta de conversão sem rastrear o paciente.

### 1.9 Testes de formulário e de conversão (D-5 a D-0)
Rodar **no preview** em D-5 e **em produção** em D-0 (depois do DNS), com dados fictícios identificados como TESTE. Usar Playwright (`firecrawl-qa` ou o navegador embutido) para registrar.

| # | Teste | Esperado |
|---|---|---|
| 1 | Enviar o formulário de `/agendar` completo (celular Android + iPhone + desktop) | Linha criada em `appointment_requests` com `status=novo`, versão e data do consentimento; tela `/obrigado` com o prazo de retorno |
| 2 | Notificação à recepção | E-mail chega em < 2 min (conferir se não caiu no spam) + aviso no painel admin |
| 3 | Enviar sem marcar o consentimento | Bloqueado, com mensagem clara |
| 4 | Honeypot preenchido / 10 envios seguidos do mesmo IP | Rejeitado / limitado |
| 5 | Turnstile | Aparece sem travar a tela no 4G |
| 6 | `?servico=pediatria` na URL | Select já vem preenchido |
| 7 | Caminho "abrir no WhatsApp" do formulário | Abre `wa.me` com nome + serviço + convênio + período, sem sintomas |
| 8 | **Cada** botão de WhatsApp (1 por especialidade, exame e profissional) | Abre o **número certo por finalidade** com a mensagem certa e o código `[site-…]` |
| 9 | `tel:` e "Como chegar" | Discador / Google Maps com o pin certo |
| 10 | `/resultados`: cada cartão | Abre o portal certo em nova aba; "Não encontrei" abre o WhatsApp de resultados |
| 11 | Perfil **recepção** no admin | Vê e muda o status das solicitações; não vê a configuração |
| 12 | Acesso anônimo à tabela pela chave pública (RLS) | `select` negado |
| 13 | Job de retenção (pg_cron) | Com a data forçada no staging, apaga/anonimiza conforme o prazo decidido |
| 14 | Publicar um post no admin | Deploy dispara; post aparece em < 5 min; sitemap atualizado |
| 15 | Prévia de link no WhatsApp/Instagram (Open Graph) | Título, descrição e imagem corretos |
| 16 | **Recepção real** recebe 3 solicitações de teste e responde pelo fluxo combinado | Tempo registrado; roteiro validado |

Depois dos testes em produção: **apagar as solicitações de teste** pelo admin.

### 1.10 Plano de rollback
**Gatilhos (qualquer um):** site fora do ar por mais de 15 min · SSL inválido · e-mail parado · mais de 10% das URLs antigas com 404 que não dá para corrigir em 1 h · formulário perdendo solicitações · erro de build que impede publicar conteúdo crítico (ex.: um telefone errado).

| Nível | Situação | Ação | Tempo |
|---|---|---|---|
| 1 | Bug de conteúdo ou de página | Corrigir no admin e republicar | minutos |
| 2 | Deploy quebrado | **Vercel → Deployments → "Instant Rollback"** para o último deploy bom | < 5 min |
| 3 | 301 faltando | Adicionar a regra na tabela de redirecionamentos do admin ou no `vercel.json` e republicar | < 1 h |
| 4 | Formulário falhando | Esconder o formulário (flag no admin) e deixar só o WhatsApp; avisar a recepção | < 15 min |
| 5 | Problema grave de domínio/SSL/infra | **Voltar o DNS:** restaurar `A @` e `CNAME www` para os valores do export de D-7 (o WordPress continua na hospedagem). Com TTL de 300 s, o efeito leva ~5–30 min | < 30 min |
| 6 | E-mail parado | Restaurar MX/SPF/DKIM do export de D-7 (não deveriam ter mudado) | < 30 min |

- **Quem decide o rollback:** o [DEV] responsável, avisando a clínica. **Quem executa:** o [DEV] com acesso ao Cloudflare.
- **Janela:** o WordPress antigo fica pronto para voltar até **D+60**. Até lá, nada de cancelar a hospedagem, apagar o banco ou renovar só o domínio.
- **Comunicação em caso de rollback:** as postagens públicas só começam em D+1, então um rollback em D-0 não precisa de explicação ao público.

---

## 2. Plano de comunicação do lançamento

### 2.1 Regras que valem para todas as peças (CFM, CFO e LGPD)
1. **Nada de preço, desconto, "grátis", brinde, sorteio ou "vagas limitadas".** No lançamento de um site, o gancho é utilidade.
2. **Médico aparece com nome + "MÉDICO(A)" + CRM + RQE** (quando especialista). Dentista com CRO. Psicólogo com CRP. Toda peça institucional mostra o **diretor técnico** (nome + CRM) no rodapé da arte ou na legenda.
3. **Sem paciente real em foto ou vídeo** sem termo de consentimento assinado. Nunca antes/depois. Nunca selfie com paciente.
4. **Depoimento** só com autorização por escrito, e sem citar diagnóstico nem resultado de tratamento.
5. **Sem comparação** com a Policlínica, o SUS ou outras clínicas.
6. **WhatsApp:** enviar mensagem só para quem já é contato e **aceitou receber novidades** (opt-in registrado). Sem compra de lista, sem adicionar gente em grupo sem pedir e sem mensagem para a lista antiga da newsletter do site.
7. **Nenhuma peça pede dado de saúde.** "Mande sua dúvida nos comentários" vale só para dúvidas gerais (preparo, horário, convênio). Caso clínico se responde no privado, com a recepção.
8. **Voz:** acolhedora, clara e local ("aqui em Corrente"). Grafia **EmCORR**. Frases de até ~20 palavras (BRAND-VOICE).

### 2.2 Instagram (@centro_clinico_emcorr, ~6.000 seguidores)
Principal canal: é daqui que vem a maior parte dos agendamentos hoje (Instagram → Linktree → WhatsApp).

| Momento | Formato | Conteúdo | Link/CTA |
|---|---|---|---|
| D-7 (ter 03/11) | Story com enquete | "O que mais te dá trabalho na hora de marcar consulta ou exame? (achar o número certo · saber o preparo · pegar resultado)" | — (aquece e dá pauta) |
| D-3 (sáb 07/11) | Story | Bastidor: equipe conferindo as páginas no celular (sem tela com dado de paciente) | — |
| D+1 (qua 11/11) 11h30 | **Carrossel fixado** | "Nosso site novo chegou" — 6 telas: (1) capa; (2) agende pelo WhatsApp em 1 toque; (3) preparo de cada exame; (4) resultado em um só lugar; (5) convênios e horário; (6) emcorr.com.br + QR | Link na bio → `/links` |
| D+1 | Stories (sequência de 4) | Tela do celular navegando: home → especialidade → botão WhatsApp → `/resultados` | Figurinha de link com UTM de stories |
| D+1 | Bio | Link trocado para `/links`; endereço canônico; botão de contato | — |
| D+2 (qui 12/11) 18h | **Reel 20–30 s** | "Em 3 toques": agendar tomografia pelo site (tela gravada, sem dados reais), com legenda na tela | `/exames/tomografia-computadorizada` |
| D+4 (sáb 14/11) | Story | Caixinha "Tem dúvida sobre o preparo de algum exame?" → respostas no dia seguinte com link para a página do exame | páginas de exame |
| D+6 (seg 16/11) | Carrossel | "Vem de outra cidade? Consulta e exame no mesmo dia" (persona Edivaldo) | `/agendar` |
| D+8 (qua 18/11) | Reel com profissional | Profissional explica 1 preparo de exame (com nome + CRM/RQE na tela) e diz que o guia completo está no site | página do exame |
| Semanal a partir de D+7 | Post/reel do blog | Cada post da Onda 1 vira 1 carrossel ou reel (KEYWORD-STRATEGY/SEO-AUDIT §2.12) | post do blog |
| D+14 e D+28 | Destaque (highlight) | Criar os destaques "Site", "Preparo de exames" e "Resultados" | — |

**Horários:** manhã entre 11h30 e 12h30 e noite entre 18h e 20h (confirmar no Insights da conta). **Legenda:** 3–5 hashtags locais (#Corrente #CorrentePI #SulDoPiaui #EmCORR), não 20.

### 2.3 Facebook (emcorrcentroclinico)
Público mais velho (personas Seu Antônio/Dona Rosa e Cláudia, a filha cuidadora).
- **D+1:** mesmo carrossel do Instagram adaptado como álbum, com um texto um pouco mais explicativo (seção 3.2). Fixar no topo da página.
- **D+1:** trocar o botão da página para "Enviar mensagem no WhatsApp" ou "Agendar" → `/agendar?utm_source=facebook`.
- **D+3:** vídeo curto "Como ver o resultado do seu exame pelo site" (tela gravada, sem dados de paciente). Mostrar `/resultados`.
- **D+10:** post "Cuidar dos pais ficou mais fácil": marcar consulta e exame, ver o preparo, acompanhar o resultado (persona Cláudia).
- **Grupos locais de Corrente:** só se a clínica já participa como página e se a regra do grupo permitir divulgação. Um único post informativo, sem repetir.

### 2.4 WhatsApp da clínica (Business)
> **Opt-in primeiro.** Listas de transmissão só chegam a quem salvou o número da clínica. Mesmo assim, mande só para quem **aceitou receber novidades**. Registre o aceite (data e canal) numa etiqueta "Aceita novidades" do WhatsApp Business.

**Como formar a lista (a partir de D-14):**
1. Na recepção e no fim de cada atendimento pelo WhatsApp: "Você quer receber da EmCORR avisos úteis, como novidades de atendimento, horários e lembretes? É só responder SIM. Para sair, responda SAIR a qualquer momento." → quem responde SIM ganha a etiqueta.
2. No site (`/links` e rodapé): "Receber avisos da EmCORR pelo WhatsApp" → abre `wa.me` com a mensagem "Quero receber avisos da EmCORR" (o próprio paciente inicia a conversa, o que já é um opt-in).
3. **Não** importar contatos de planilhas antigas nem da newsletter do WordPress.

**Sequência (a "sequência de e-mails" da skill, adaptada):**

| Quando | Canal | Mensagem | Objetivo |
|---|---|---|---|
| D+1 | **Status** de todos os números | Arte do carrossel + "Nosso site novo está no ar: emcorr.com.br" | Alcance sem mensagem direta |
| D+2 (qui 12/11) 10h | **Lista de transmissão (opt-in)** | Mensagem de lançamento (seção 3.3, msg 1) | Visitas + agendamentos |
| D+9 (qua 18/11) | Status | "Sabia que o preparo do seu exame está no site?" + link `/exames` | Uso de preparo |
| D+16 (qua 25/11) | Lista (opt-in) | Mensagem útil (seção 3.3, msg 2): resultados em um só lugar | Uso de `/resultados` |
| Contínuo, a partir de D+1 | **Mensagem 1-a-1 da recepção** | Confirmação de agendamento com o link do preparo; aviso de resultado pronto com o link de `/resultados`; 48 h depois, link de avaliação no Google | Operação (base legal: o próprio atendimento) |

Frequência máxima da lista: **2 mensagens por mês**. Toda mensagem termina com "Para não receber mais, responda SAIR". Quem pedir para sair perde a etiqueta **no mesmo dia**.

**Respostas rápidas do WhatsApp Business (criar em D-2):** `/site` (link do site), `/preparo` (link de `/exames`), `/resultado` (link de `/resultados`), `/endereco` (NAP + link do mapa), `/avaliacao` (link curto do Google, só depois do atendimento).

### 2.5 Recepção e balcão
- **D-3 (sex 06/11): treino de 30 min com a recepção.** Mostrar o site no celular; como ver as solicitações no admin; o que fazer com cada status; o prazo de resposta (30 min em horário comercial); os códigos `[site-…]` nas mensagens; as respostas rápidas; o que dizer quando o paciente pergunta do site; como pedir avaliação sem incentivo.
- **Roteiro de balcão (fala de 15 s):** "A gente lançou um site novo. Por ele você marca pelo WhatsApp, vê o preparo dos exames e pega seus resultados num lugar só. É só apontar a câmera aqui [QR]."
- **Material impresso (encomendar em D-10, entregar em D-2):**
  - **Display de acrílico A5 no balcão**, com 2 QR codes separados e rotulados: "Nosso site" (`/links?utm_source=qr&utm_medium=balcao`) e "Avalie seu atendimento no Google" (link curto do GBP).
  - **Cartaz A3 na sala de espera** com o QR do site e 3 ícones: Agendar · Preparo · Resultados.
  - **Cartão de visita/lembrete** entregue com o protocolo de exame: "Seu resultado: emcorr.com.br/resultados" + QR. Substitui explicar 3 portais no balcão.
  - **Adesivo pequeno com QR** na porta dos consultórios e da sala de exames, apontando para o preparo e as orientações. Sem dado de paciente.
- **No verso da folha de preparo impressa:** QR para a página do exame (`utm_medium=preparo`).
- **Regra de avaliação:** pedir a **todos** os pacientes atendidos (não só aos satisfeitos), sem brinde e sem desconto. Nunca pedir avaliação dentro do consultório durante o atendimento.

### 2.6 QR code no consultório
- Gerar os QR codes em alta resolução (SVG) a partir das URLs com UTM da seção 1.8. **Testar cada um em 3 celulares** antes de imprimir.
- Usar uma URL curta e estável (`emcorr.com.br/links`), para o impresso não "morrer" quando uma página mudar. Os destinos do `/links` são editados no admin.
- Legenda sempre com a URL escrita por extenso, para quem não sabe usar QR.
- Posição: altura dos olhos, perto de onde o paciente espera sentado, longe de reflexo.
- Nenhum QR leva a um formulário que peça dado de saúde.

### 2.7 Imprensa local (Portal Corrente e outros)
**Ângulo:** serviço para a cidade, e não autopromoção. Título sugerido: *"EmCORR lança site com orientações de preparo de exames e acesso unificado a resultados em Corrente"*. O Portal Corrente já publicou matérias sobre a Policlínica e o Lab Vida (BRAND-MENTIONS). A EmCORR tem **zero** matérias hoje.

- **D-10:** [CLÍNICA] identificar o contato de pauta do Portal Corrente (e de outros veículos do sul do PI, **a verificar**: rádios e blogs locais).
- **D+2 (qui 12/11):** [CLÍNICA] **a própria clínica envia** o release (seção 3.5) + 3 fotos reais em alta (fachada, recepção, equipe autorizada) + contato para entrevista (diretor técnico ou Dra. Ludmilla Nery, com CRM). Este plano **não envia** nada.
- **D+9:** um único follow-up educado, se não houver resposta.
- **Pautas de reserva** para o mês 2 (BRAND-MENTIONS): o preparo correto de exames de imagem, testes do recém-nascido, a chegada de uma nova especialidade (quando houver).
- **Na matéria, pedir:** o nome exato "EmCORR – Centro Clínico", o endereço canônico e o link `emcorr.com.br` (vira citação local e backlink).
- **Entrevista:** o profissional fala sobre o serviço (preparo, acesso), sem promessa de resultado e sem comparação. Revisar a citação antes de publicar, se o veículo permitir.

### 2.8 Equipe e corpo clínico (os "parceiros" do lançamento)
- **D-5:** mandar aos profissionais o link da própria página (`/corpo-clinico/[slug]`) para eles conferirem o registro, os dias e a foto. **Nada vai ao ar sem o "ok" do profissional.**
- **D+1:** kit com 1 story pronto ("Agora você me encontra também em emcorr.com.br") e o link da página de cada um, para quem **quiser** repostar no perfil pessoal. O story inclui nome + CRM/RQE ou CRO.
- **D+7:** convidar os profissionais para autoria/revisão dos posts da Onda 2 do blog.

---

## 3. Textos prontos para adaptar

> Revisar os números e o horário antes de publicar. Onde houver `[ ]`, preencher com o dado confirmado. Rodapé de toda arte institucional: **"Diretor técnico: Dr(a). [Nome] – CRM-PI [nº] – RQE [nº]"**.

### 3.1 Carrossel do Instagram (D+1)
- **Tela 1:** "Nosso site novo chegou 💙" / emcorr.com.br
- **Tela 2:** "Agendar ficou mais fácil. Escolha a especialidade ou o exame e fale com a gente no WhatsApp, com a mensagem pronta."
- **Tela 3:** "Vai fazer exame? Cada exame tem uma página com o preparo, a duração e o que levar."
- **Tela 4:** "Resultado em um só lugar. Entre em emcorr.com.br/resultados e a gente mostra o caminho certo para o seu exame."
- **Tela 5:** "Convênios Medplan, Humana Saúde e Camed, além de particular. Endereço, horário e mapa para quem vem de outra cidade."
- **Tela 6:** "Cuidando de você e de quem você ama. emcorr.com.br" + QR

**Legenda:**
> Nosso site novo está no ar! 🎉
> Agora, em emcorr.com.br, você:
> ✅ agenda consulta ou exame pelo WhatsApp em um toque
> ✅ vê o preparo do seu exame antes de sair de casa
> ✅ encontra seu resultado sem precisar ligar
>
> Tudo pensado para as famílias de Corrente e região.
> O link está na bio. 💙
>
> #EmCORR #Corrente #CorrentePI #SulDoPiaui
> Diretor técnico: Dr(a). [Nome] – CRM-PI [nº] – RQE [nº]

### 3.2 Post do Facebook (D+1)
> A EmCORR – Centro Clínico está com site novo: emcorr.com.br
>
> Pensamos em quem cuida da família inteira. No site você encontra todas as especialidades e exames, com o preparo de cada um, os convênios aceitos (Medplan, Humana Saúde e Camed) e o horário. Na hora de agendar, é só tocar no botão do WhatsApp: a mensagem já vai pronta para a nossa recepção.
>
> Fez exame com a gente? Em emcorr.com.br/resultados você descobre em qual portal está o seu resultado e como entrar.
>
> Estamos na [Rua/Avenida] Getúlio Vargas, 471 – Centro, Corrente-PI.
> Cuidando de você e de quem você ama.

### 3.3 WhatsApp
**Msg 1: lista de transmissão (opt-in), D+2**
> Olá! Aqui é a EmCORR – Centro Clínico. 💙
> Nosso site novo está no ar: https://emcorr.com.br/?utm_source=whatsapp&utm_medium=lista
> Por lá você agenda pelo WhatsApp, vê o preparo do seu exame e encontra seus resultados num lugar só.
> Qualquer dúvida, é só responder aqui.
> _Para não receber mais avisos, responda SAIR._

**Msg 2: lista (opt-in), D+16**
> Olá! Uma dica da EmCORR: para ver o resultado do seu exame, entre em https://emcorr.com.br/resultados. Lá mostramos o portal certo para cada tipo de exame e onde está a sua senha.
> Não encontrou? Responda aqui que a gente ajuda.
> _Para não receber mais avisos, responda SAIR._

**Msg de confirmação da recepção (1-a-1, operação)**
> Olá, [nome]! Seu atendimento está confirmado para [dia], às [hora], na EmCORR ([Rua/Avenida] Getúlio Vargas, 471 – Centro).
> Orientações de preparo: [link da página do exame]
> Precisa remarcar? É só responder aqui.

**Msg de avaliação (1-a-1, 48 h depois, sem incentivo)**
> Olá! Obrigado por escolher a EmCORR. Se puder, conte como foi o seu atendimento no Google. Leva menos de 1 minuto e ajuda outras famílias da região: [link curto]
> Se algo não saiu como esperado, fale com a gente por aqui.

**Pedido de opt-in (recepção)**
> Você gostaria de receber pelo WhatsApp avisos úteis da EmCORR, como novidades de atendimento e horários? Se sim, responda SIM. Você pode sair quando quiser respondendo SAIR.

### 3.4 Status do WhatsApp (D+1, D+9)
- "Site novo no ar 💙 emcorr.com.br — agende, veja o preparo e encontre seu resultado."
- "Vai fazer exame? O preparo está aqui: emcorr.com.br/exames"

### 3.5 Release para a imprensa (a clínica envia)
**Título:** EmCORR lança site com orientações de preparo de exames e acesso unificado a resultados em Corrente
**Linha fina:** Nova página reúne especialidades, exames, convênios e agendamento pelo WhatsApp para moradores de Corrente e região

**Corrente (PI), [data]:** A EmCORR – Centro Clínico, clínica médica e odontológica que atende em Corrente desde 2020, colocou no ar o seu novo site, emcorr.com.br. A página reúne as especialidades e os exames oferecidos, as orientações de preparo de cada exame, os convênios aceitos e o horário de atendimento, além de um espaço que indica em qual portal cada paciente encontra o resultado do seu exame.

"[Citação do(a) diretor(a) técnico(a), 2 frases sobre facilitar a vida de quem vem de outras cidades e de quem cuida da família, sem superlativo e sem promessa]", afirma [Nome], [médico(a)], CRM-PI [nº], diretor(a) técnico(a) da clínica.

Pelo site, o paciente escolhe a especialidade ou o exame e fala com a recepção pelo WhatsApp, com a mensagem já preenchida. Quem prefere pode pedir que a clínica entre em contato. O formulário não pede CPF nem informações de saúde.

A EmCORR atende particular e os convênios Medplan, Humana Saúde e Camed. Oferece consultas em [lista confirmada de especialidades] e exames [laboratoriais e de imagem, incluindo tomografia computadorizada — confirmar].

**Sobre a EmCORR:** [boilerplate do BRAND-VOICE com o NAP canônico]
**Contato para imprensa:** [nome, função, WhatsApp]

### 3.6 Post no Google Business Profile (D+1)
> Nosso site novo está no ar! Em emcorr.com.br você agenda pelo WhatsApp, confere o preparo de cada exame e encontra o portal do seu resultado. Atendemos Corrente e região, particular e convênios Medplan, Humana Saúde e Camed.
> Botão: "Saiba mais" → `https://emcorr.com.br/?utm_source=google&utm_medium=organic&utm_campaign=gbp-post`

---

## 4. Plano de citações locais (4 primeiras semanas)

Base: BRAND-MENTIONS §5.2. **Regra de ouro:** o NAP é copiado do bloco canônico, sem nenhuma variação ("EmCORR – Centro Clínico", nunca "Saúde em Corrente" nem "Centro Médico"; sempre com o bairro; telefones na mesma ordem). Registre cada cadastro numa planilha com: plataforma, URL da ficha, login (guardado no gerenciador de senhas da clínica), data, NAP 100% igual (sim/não), status.

> **Quem cria as contas e faz os cadastros é a clínica (ou o gestor com acesso delegado).** Algumas plataformas pedem verificação por telefone ou documento do responsável.

| Semana | Data | Plataforma / ação | Tipo | Dono | Observação |
|---|---|---|---|---|---|
| **S0** | D-10 a D-0 | Google Business Profile (seção 1.6) | Mapa | Clínica | Principal fator do local pack |
| S0 | D-0 | Site (rodapé, `/contato`, schema, `llms.txt`) | Próprio | DEV | `sameAs` com IG, FB e GBP |
| S0 | D-0 | Instagram, Facebook e WhatsApp Business (perfis) | Social | MKT/Clínica | Link trocado do Linktree para `/links` |
| **S1** | 16–20/11 | **Apple Business Connect** (Apple Maps) | Mapa | Clínica | Criar/reivindicar; verificação pode levar dias |
| S1 | 16–20/11 | **Bing Places** (importar do GBP) | Mapa | Clínica | Rápido pela importação |
| S1 | 16–20/11 | **CNES**: pedir ao responsável técnico a atualização de telefones, horário, especialidades e "atende convênio" (hoje diz "somente particular" e lista só cardiologia, imagem e audiologia) | Oficial | Clínica | Os agregadores (Agendar Consulta, Diário Cidade) copiam o CNES. O prazo depende da Secretaria de Saúde |
| S1 | 16/11 | **Decidir sobre a Receita Federal:** se o padrão for "Rua" e o CNPJ disser "Avenida", abrir o pedido de alteração cadastral com o contador | Oficial | Clínica + contador | Se for "Avenida", nada muda na Receita |
| **S2** | 23–27/11 | **GuiaMais**, **Apontador** | Diretório geral | Clínica | A Policlínica está em todos (BRAND-MENTIONS §3) |
| S2 | 23–27/11 | **Telelistas**, **Página Amarela** | Diretório geral | Clínica | |
| S2 | 23–27/11 | **Doctoralia**: reivindicar/criar a ficha da clínica + convidar os profissionais a ligarem o perfil ao endereço da EmCORR | Saúde | Clínica + profissionais | Registro no conselho visível em cada perfil |
| **S3** | 30/11–04/12 | **Guia Fácil**, **Guiatelefone** | Diretório geral | Clínica | |
| S3 | 30/11–04/12 | **Agendar Consulta** (guia.agendarconsulta.com): reivindicar a ficha "EMCORR SAUDE EM CORRENTE", corrigir o nome, o logradouro, o site e o horário | Saúde | Clínica | Hoje: sem site, 0 avaliações |
| S3 | 30/11–04/12 | **CatalogoMed** e **Fácil Consulta**: ficha da clínica e perfis dos profissionais | Saúde | Clínica | Aderir ao marketplace é decisão comercial à parte (COMPETITOR-REPORT) |
| **S4** | 07–11/12 | **Diário Cidade / DescubraOnline**: pedir correção do nome e inclusão do site e do WhatsApp | Agregador | Clínica | Pode depender do CNES atualizado |
| S4 | 07–11/12 | **Guia/matéria do Portal Corrente**: confirmar que a matéria (se publicada) usa o NAP canônico; pedir inclusão no guia comercial, se houver | Imprensa local | Clínica | |
| S4 | 07–11/12 | **Auditoria de NAP:** buscar "EmCORR Corrente", "Emcorr Saúde em Corrente", "(89) 3573-1881" e "(89) 3573-2877" e listar o que ainda está divergente | Controle | MKT | Mede a meta de 8 citações 100% iguais em D+30 |
| S4 | 07–11/12 | Atualizar o `sameAs` do schema com as fichas novas (Apple, Bing, Doctoralia) | Próprio | DEV | |
| Mês 2–3 | — | YouTube (canal com os Reels já existentes como Shorts), LinkedIn (página básica) e Wikidata (avaliar) | Entidade | MKT | BRAND-MENTIONS §5.2, itens 12–13 |

**Telefone (89) 3573-2877:** confirmar se ainda existe. Se não existir, pedir a remoção em cada diretório onde aparecer. **Atenção à confusão com a Policlínica**, cujo fixo é (89) 3573-1851, um dígito de diferença do (89) 3573-1881: conferir cada ficha duas vezes.

---

## 5. Cronograma

### 5.1 Pré-lançamento (semanas até D-0)
| Semana | Datas | Entregas-chave |
|---|---|---|
| P-6 | 28/09–04/10 | Pedir à clínica os itens do go/no-go (seção 0). Levantar a linha de base: nota e nº de avaliações no GBP (EmCORR × Policlínica), Search Console dos últimos 3 meses, teste de IA ("clínica em Corrente PI" em ChatGPT, Gemini, Perplexity e Copilot). Se possível, instalar analytics sem cookies e um botão `wa.me` no WordPress atual, para ter linha de base (FUNNEL, Prioridade 1) |
| P-5 | 05–11/10 | Construção (Fase 6 do PLANO-MESTRE). Outubro Rosa: conteúdo educativo sobre mamografia no Instagram, sem citar o site ainda |
| P-4 | 12–18/10 | Construção. Começar a formar a lista de WhatsApp com opt-in (seção 2.4). 18/10 é o Dia do Médico: post de agradecimento ao corpo clínico, com CRM/RQE |
| P-3 | 19–25/10 | Conteúdo no admin (especialidades, exames, profissionais). Revisão dos profissionais. 8 posts da Onda 1 do blog em rascunho |
| P-2 | 26/10–01/11 | QA completo (Lighthouse, acessibilidade, schema, metadata). Planilha de 301. Backup do WordPress (D-14 = 27/10). Gerar os QR codes |
| P-1 | 02–08/11 | Finados (02/11). **D-10 (31/10):** GBP 1ª leva, encomenda dos impressos, contato de imprensa. **D-7 (03/11): reunião de go/no-go**, export do DNS, 2ª leva do GBP. **D-5 (05/11):** testes de formulário no preview; profissionais conferem suas páginas. **D-3 (07/11):** TTL em 300 s, domínio na Vercel, Search Console verificado, e-mail transacional testado. **D-3 (06/11, sexta):** treino da recepção. **D-2 (08/11):** QA de eventos e 301 no preview; impressos entregues; respostas rápidas do WhatsApp criadas |

> Observação: as datas de D-3 (sábado, 07/11) caem num fim de semana. Adiante para sexta, 06/11, as tarefas que dependem da clínica.

### 5.2 Semana de lançamento: dia a dia (09/11 a 15/11)

**Segunda, 09/11 (D-1): congelamento**
- [DEV] Congelar o conteúdo (só correções críticas). Backup final do WordPress. Último deploy de produção validado no domínio `*.vercel.app`.
- [DEV] Rodar o script de 301 no preview (100% em um salto → 200).
- [CLÍNICA] Confirmar quem estará de plantão em D-0 e D+1 (recepção + DEV) e o número de contato de emergência.
- [MKT] Deixar prontas as artes do carrossel, os stories, o reel e o post do GBP (não agendar a publicação antes de D+1).

**Terça, 10/11 (D-0): go-live técnico, sem anúncio público**
| Hora | Ação | Dono |
|---|---|---|
| 06h00 | Trocar `A @` e `CNAME www` no Cloudflare (DNS only) | DEV |
| 06h15 | Checar SSL na Vercel; testar as 4 variações de URL; `dig` em 2 resolvedores | DEV |
| 06h30 | Script de 301 em produção; 10 páginas principais no 4G | DEV |
| 07h00 | E-mail de teste (MX); 3 portais de resultado; formulário de teste em produção; eventos chegando | DEV |
| 07h30 | **Decisão go/rollback** (critérios da seção 1.10) | DEV + clínica |
| 08h00 | Recepção abre com o site novo; solicitações de teste apagadas | Clínica |
| 09h00 | Search Console: enviar o sitemap e pedir indexação das 20 URLs; Bing + IndexNow | DEV |
| 10h00 | GBP: trocar o site e o link de agendamento para as URLs com UTM | Clínica |
| 10h30 | Instagram/Facebook/WhatsApp Business: bio, Sobre e site com o NAP canônico (sem anúncio ainda) | MKT/Clínica |
| 12h00 | **Soft launch interno:** a equipe e os profissionais usam o site e reportam erros num grupo interno | Todos |
| 14h00 | Correções da manhã; conferir os 404 nos logs da Vercel | DEV |
| 17h00 | Balanço do dia: erros, solicitações recebidas, tempo de resposta | DEV + clínica |

**Quarta, 11/11 (D+1): anúncio público**
- 08h: [DEV] checagem rápida (uptime, 404, formulário e eventos das últimas 24 h).
- 10h: [MKT] Status do WhatsApp em todos os números. [CLÍNICA] Linktree reduzido a um botão para `/links`.
- 11h30: [MKT] carrossel fixado no Instagram + stories com link; álbum no Facebook, fixado.
- 12h: [MKT] post no GBP. [CLÍNICA] cadastrar os Serviços no GBP.
- Tarde: [CLÍNICA] recepção usa o roteiro de balcão e as respostas rápidas; display de QR no balcão e cartaz na sala de espera.
- Todo o dia: [MKT] responder cada comentário em até 2 h (dúvida clínica vai para o privado).
- 17h: [DEV] relatório D+1: visitas por origem, `whatsapp_click`, `form_submit`, 404.

**Quinta, 12/11 (D+2): WhatsApp + imprensa**
- 10h: [CLÍNICA] mensagem da lista de transmissão (opt-in).
- 10h: [CLÍNICA] enviar o release ao Portal Corrente (e a outros veículos verificados).
- 18h: [MKT] Reel "Em 3 toques" (agendar tomografia pelo site).
- [DEV] Search Console: primeiros sinais de rastreamento; corrigir 404 novos.
- [CLÍNICA] Começar os pedidos de avaliação 48 h após o atendimento.

**Sexta, 13/11 (D+3): prova de uso e objeções**
- [MKT] Stories respondendo às 3 dúvidas mais frequentes que chegaram (ex.: "precisa de pedido médico?", "aceita meu convênio?", "onde pego o resultado?"), cada uma com o link da página.
- [MKT] Vídeo no Facebook: "Como ver seu resultado pelo site".
- [DEV] Revisar os eventos: há algum botão sem clique nenhum? Algum `form_field_error` muito alto?
- [CLÍNICA] Revisar com a recepção: tempo de resposta real e solicitações sem retorno.

**Sábado, 14/11 (D+4)**
- [MKT] Caixinha de perguntas "Dúvida sobre preparo de exame?".
- [DEV] Monitoramento leve (uptime e formulário).
- [CLÍNICA] Se a clínica abre aos sábados: conferir se o horário do site e do GBP está certo.

**Domingo, 15/11 (D+5, feriado): só monitoramento**
- [DEV] Consolidar a **planilha da semana de lançamento** (seção 6.4) para a reunião de segunda.

### 5.3 As 4 semanas seguintes: dia a dia

**Semana 1 (16/11–22/11): estabilizar e citar**
| Dia | Ações |
|---|---|
| Seg 16/11 | **Reunião de 30 min da semana de lançamento** (números, erros, recepção). [MKT] carrossel "Vem de outra cidade?". [CLÍNICA] Apple Business Connect + Bing Places. Decisão sobre a Receita (Rua × Av.) |
| Ter 17/11 | [CLÍNICA] Pedir a atualização do CNES ao responsável técnico. [DEV] Search Console: Páginas/404 → corrigir. [MKT] responder às perguntas da caixinha de sábado |
| Qua 18/11 | [MKT] Reel de um profissional sobre preparo de exame (nome + CRM/RQE). [MKT] Status "preparo está no site". [DEV] publicar o post 1 da Onda 1 (se não entrou em D-0) |
| Qui 19/11 | [CLÍNICA] Follow-up da imprensa (se não houve resposta). [DEV] Validar a melhoria de dados estruturados no Search Console. [MKT] carrossel do post do blog |
| Sex 20/11 | **Feriado (Consciência Negra):** sem publicação comercial; só monitoramento |
| Sáb 21/11 | [MKT] Story com um bastidor da equipe (com autorização) |
| Dom 22/11 | — |

**Semana 2 (23/11–29/11): diretórios gerais + Doctoralia**
| Dia | Ações |
|---|---|
| Seg 23/11 | [CLÍNICA] GuiaMais + Apontador. [DEV] Relatório D+14 (visitas, conversas, 404, indexação) |
| Ter 24/11 | [CLÍNICA] Telelistas + Página Amarela. [MKT] post no GBP (reaproveitando um post do blog) |
| Qua 25/11 | [CLÍNICA] Lista de transmissão, msg 2 (resultados). [MKT] carrossel do post 2 do blog |
| Qui 26/11 | [CLÍNICA] Doctoralia: ficha da clínica + convite aos profissionais. [DEV] publicar os posts 5–6 da Onda 1 (se estiverem em rascunho) |
| Sex 27/11 | [MKT] Reel curto "Resultado em um só lugar". [CLÍNICA] Responder a todas as avaliações novas do Google (sem confirmar que a pessoa é paciente e sem dado de saúde) |
| Sáb 28/11 | [MKT] Story de dúvida frequente → link da página |
| Dom 29/11 | — |

**Semana 3 (30/11–06/12): diretórios de saúde e ajustes de conversão**
| Dia | Ações |
|---|---|
| Seg 30/11 | [CLÍNICA] Guia Fácil + Guiatelefone. [DEV] Análise de CTA: páginas com muita visita e pouco `whatsapp_click` → ajustar o texto/posição do botão |
| Ter 01/12 | [CLÍNICA] Reivindicar e corrigir a ficha do Agendar Consulta. [MKT] post no GBP |
| Qua 02/12 | [CLÍNICA] CatalogoMed + Fácil Consulta (fichas). [MKT] carrossel do post 7 (convênios) |
| Qui 03/12 | [DEV] Revisão de Core Web Vitals (dados reais do Speed Insights). [MKT] Reel de um profissional (dezembro: tema sazonal escolhido no SOCIAL-CALENDAR) |
| Sex 04/12 | [CLÍNICA] Balanço das avaliações pedidas × recebidas. [DEV] Corrigir 404 remanescentes |
| Sáb 05/12 | [MKT] Story |
| Dom 06/12 | — |

**Semana 4 (07/12–13/12): auditoria e relatório de 30 dias**
| Dia | Ações |
|---|---|
| Seg 07/12 | [CLÍNICA] Diário Cidade/DescubraOnline (pedido de correção). [MKT] **Auditoria de NAP** (busca por variações de nome e telefone) |
| Ter 08/12 | Conferir se é feriado municipal (Imaculada Conceição em algumas cidades do PI). [DEV] atualizar o `sameAs` com as fichas novas |
| Qua 09/12 | [MKT] post no GBP + carrossel do post 8 ("Vem de outra cidade?"). [CLÍNICA] Portal Corrente: conferir o NAP da matéria/guia |
| Qui 10/12 | **D+30:** [DEV] relatório de 30 dias (seção 6) + teste de IA repetido + planilha de citações. Rodar `/geo-compare` |
| Sex 11/12 | **Retrospectiva de 30 dias** (seção 10) com a clínica: o que manter, o que mudar, próximos 60 dias |
| Sáb 12/12 | [MKT] Story |
| Dom 13/12 | — |

Depois de D+30: **2 posts de blog por semana** até completar a Onda 2 (SEO-AUDIT §2.12), 1 post semanal no GBP, relatório mensal e revisão das citações a cada trimestre.

---

## 6. KPIs e metas de 30/60/90 dias

> **Linha de base primeiro.** Hoje nada é medido (FUNNEL-ANALYSIS). As metas abaixo usam as estimativas da FUNNEL-ANALYSIS e da LANDING-CRO e devem ser **recalibradas em D+30** com os dados reais. Marcos: **D+30 = 10/12/2026 · D+60 = 09/01/2027 · D+90 = 08/02/2027.**

### 6.1 Saúde técnica e SEO
| KPI | Linha de base | D+30 | D+60 | D+90 | Fonte |
|---|---|---|---|---|---|
| URLs antigas com 404 | (medir em D-0) | **0** | 0 | 0 | Script de 301 + Search Console |
| Páginas do sitemap indexadas | — | ≥ 70% | ≥ 85% | ≥ 90% | Search Console → Páginas |
| Cliques orgânicos/mês (Search Console) | últimos 3 meses | ≥ 100% da linha de base (sem queda) | +20% | +40% | Search Console |
| Impressões com "Corrente" na consulta | linha de base | +30% | +60% | +100% | Search Console |
| Lighthouse mobile (10 páginas principais) | 31/100 no SEO do site atual | ≥ 95 | ≥ 95 | ≥ 95 | Lighthouse |
| Core Web Vitals (dados reais) | não medido | LCP < 2,5 s, INP < 200 ms, CLS < 0,1 | idem | idem | Speed Insights |
| Erros de dados estruturados | — | 0 | 0 | 0 | Search Console |
| Disponibilidade | — | ≥ 99,9% | ≥ 99,9% | ≥ 99,9% | monitor de uptime |

### 6.2 Conversão (o objetivo principal)
| KPI | Linha de base (est.) | D+30 | D+60 | D+90 | Fonte |
|---|---|---|---|---|---|
| **Taxa de conversa** (`whatsapp_click` + `form_submit`) ÷ visitantes | 1–3% | **≥ 4%** | ≥ 5,5% | **≥ 7%** | Analytics |
| Conclusão do formulário (`form_submit` ÷ `form_start`) | 5–15% | ≥ 25% | ≥ 30% | ≥ 35% | Analytics |
| Conversas com código `[site-…]` que viram agendamento | 50–70% | registrar | ≥ 65% | ≥ 70% | Planilha/etiquetas da recepção |
| Tempo mediano de resposta a solicitação (horário comercial) | desconhecido | ≤ 30 min | ≤ 30 min | ≤ 20 min | Admin (status) |
| Atendimentos atribuídos ao site/mês | ~10 (est.) | registrar | ≥ 25 | ≥ 40 | Planilha da recepção |
| Uso de `/resultados` (`results_portal_click`) | — | registrar | +20% | +40% | Analytics |
| Ligações ao balcão pedindo resultado | contar 1 semana antes de D-0 | −15% | −25% | −30% | Contagem manual da recepção |

### 6.3 Local, reputação e entidade
| KPI | Linha de base | D+30 | D+60 | D+90 | Fonte |
|---|---|---|---|---|---|
| Citações com NAP 100% idêntico | ~0 | **8** | 12 | **15** | Planilha de citações |
| Avaliações novas no Google | levantar em D-10 | +15 | +35 | +60 | GBP |
| Pacientes que recebem o pedido de avaliação | 0% | ≥ 60% | ≥ 70% | ≥ 80% | Recepção |
| Nota média no Google | levantar | manter ≥ linha de base | idem | idem | GBP |
| Avaliações respondidas em até 48 h | — | 100% | 100% | 100% | GBP |
| Ações no GBP (cliques no site, rotas, ligações) | levantar no GBP (Desempenho) | +20% | +35% | +50% | GBP → Desempenho |
| Posição no local pack: "clínica Corrente PI", "dentista Corrente PI", "tomografia Corrente PI", "pediatra Corrente PI" | medir em D-10 (aba anônima, no centro da cidade) | top 3 em 1 termo | top 3 em 2 | top 3 em 3 | Busca manual/rastreador local |
| Matérias na imprensa local | 0 | 1 | 1–2 | 2 | Busca |
| Teste de IA (4 assistentes): a EmCORR aparece com o NAP certo em "clínica em Corrente PI" | medir em P-6 | registrar | 1 de 4 | 2 de 4 | Teste manual |

### 6.4 Comunicação do lançamento (janela D-0 a D+14)
| KPI | Meta |
|---|---|
| Alcance do carrossel de lançamento no Instagram | ≥ 50% dos seguidores (~3.000 contas) |
| Cliques no link da bio (`utm_source=instagram`) nos 14 dias | ≥ 300 |
| Visitas vindas do QR (`utm_source=qr`) nos 30 dias | ≥ 150 |
| Contatos na lista do WhatsApp com opt-in até D+2 | ≥ 300 (formar desde P-4) |
| Pedidos de SAIR por envio da lista | < 3% (acima disso, reduzir a frequência) |
| Denúncias/bloqueios do número no WhatsApp | 0 |

### 6.5 Painel
Uma planilha única (ou uma página no admin) com uma aba por semana: visitantes por origem, conversas, solicitações por status, avaliações, citações e 404. **Atualização:** diária de D-0 a D+7, semanal até D+30 e mensal depois disso.

---

## 7. Riscos e mitigação

| # | Risco | Prob. | Impacto | Mitigação | Sinal de alerta |
|---|---|---|---|---|---|
| 1 | **E-mail para de funcionar** na troca de DNS (MX/SPF apagados sem querer) | Baixa | Alto | Export da zona em D-7; mexer **só** em `@` e `www`; e-mail de teste às 07h de D-0 | E-mail de teste não chega |
| 2 | **Loop de redirecionamento/SSL** (proxy do Cloudflare em "Flexible") | Média | Alto | DNS only (nuvem cinza); se ligar o proxy, Full (strict); desligar as Page Rules antigas | "Too many redirects" |
| 3 | **Queda de tráfego orgânico** por 301 faltando ou em cadeia | Média | Alto | Mapa completo do SEO-AUDIT + regra de www + script `curl` antes e depois; 404 corrigidos em 48 h | 404 no Search Console; cliques < 80% da linha de base |
| 4 | **Suspensão ou nova verificação do GBP** por muitas edições de uma vez | Média | Alto | Edições em 2 levas (D-10 e D-7), nome igual à fachada, sem palavra-chave no nome | E-mail do Google pedindo verificação |
| 5 | **NAP indefinido** (Rua × Avenida) no dia | Média | Médio | Item crítico do go/no-go; se não houver decisão, **adiar** | — |
| 6 | **Descumprimento da CFM/CFO** (profissional sem CRM/RQE, depoimento sem consentimento, "melhor", preço na odonto) | Média | Alto | Go/no-go itens 3, 4 e 7; revisão das peças contra a lista de palavras proibidas; profissional aprova a própria página | Denúncia ao conselho; comentário público |
| 7 | **Solicitações perdidas** (e-mail da recepção no spam, ninguém olhando o painel) | Média | Alto | Teste 16 da seção 1.9; responsável nomeado; aviso no painel; e-mail em subdomínio verificado | Solicitação "nova" com mais de 2 h |
| 8 | **Recepção sobrecarregada** no D+1/D+2 | Média | Médio | Treino em D-3; respostas rápidas; mensagem da lista só em D+2 (não junto com o anúncio); prazo de resposta honesto no `/obrigado` | Tempo de resposta > 1 h |
| 9 | **Número do WhatsApp banido/restrito** por envio em massa ou denúncias | Baixa | Alto | Só opt-in; máx. 2 mensagens/mês; SAIR respeitado no mesmo dia; nada de grupo sem convite aceito | Aviso do WhatsApp; aumento de bloqueios |
| 10 | **Violação da LGPD** (dado de saúde em formulário/evento, lista antiga reaproveitada) | Baixa | Alto | Sem campo livre de sintoma; eventos sem PII; RLS testado; retenção automática; newsletter antiga não migrada | Qualquer dado pessoal no analytics |
| 11 | **Build quebra** porque o Supabase pausou ou atingiu limite | Baixa | Alto | Plano pago de produção; alerta de falha de deploy; Instant Rollback | Deploy vermelho na Vercel |
| 12 | **Portais de resultado inacessíveis** pelo site (link errado, subdomínio alterado) | Baixa | Médio | Não tocar em `resultados.emcorr.com.br`; testar os 3 portais em D-0 | `results_help_click` alto |
| 13 | **Dois (ou três) WhatsApps confundem o paciente** | Alta | Médio | Número por finalidade definido no go/no-go; mesmo número por finalidade em site, bio, GBP e impressos | Recepção relata "mandei no número errado" |
| 14 | **Confusão com a Policlínica** (telefone com 1 dígito de diferença) ou com a EMCOR Group (entidade) | Média | Baixo | Conferir cada ficha duas vezes; schema com `sameAs` e endereço completo | Ligações trocadas; IA citando a empresa errada |
| 15 | **Avaliações negativas** no pico de atenção | Média | Médio | Responder em 48 h, com cordialidade, sem confirmar vínculo nem dado de saúde, e levar a conversa para o privado | Nota caindo |
| 16 | **Conteúdo incompleto** (serviço sem preparo, profissional sem dias) | Alta | Médio | Publicar só o que está completo; o resto fica em rascunho; lista de pendências com prazo | Páginas "finas" no Search Console |
| 17 | **Hospedagem antiga cancelada cedo** (sem rollback) | Baixa | Alto | Só cancelar depois de D+60, com aprovação escrita | — |
| 18 | **Lançamento colado em feriado** (15/11 e 20/11) | Certa | Baixo | Anúncio em D+1 (quarta); nada de publicação comercial nos feriados | — |
| 19 | **QR code impresso com URL errada** | Baixa | Médio | Usar `/links` (destino editável); testar em 3 celulares antes de imprimir | `utm_source=qr` zerado |
| 20 | **Imprensa não publica** | Média | Baixo | Pautas de reserva para o mês 2; a citação vem também dos diretórios | — |

---

## 8. Orçamento

Perfil **enxuto** (o que a skill chama de "bootstrapped"): 100% orgânico. Valores estimados, a cotar em Corrente.

| Item | Estimativa | Obrigatório? |
|---|---|---|
| Display de acrílico A5 para o balcão (1–2 un.) | R$ 60–150 | Sim |
| Cartaz A3 da sala de espera (2–3 un.) | R$ 30–80 | Sim |
| Cartões "Seu resultado: emcorr.com.br/resultados" (1.000 un.) | R$ 80–150 | Recomendado |
| Adesivos com QR para as portas (20 un.) | R$ 40–80 | Opcional |
| Plano pago do Supabase (produção) | cerca de US$ 25/mês | Sim (risco 11) |
| Plano da Vercel com eventos personalizados, ou Plausible | cerca de US$ 9–20/mês | Sim, se quiser os eventos |
| Impulsionar o carrossel de lançamento no Instagram/Facebook (opcional) | R$ 150–400 | Não. Se usar: raio de ~60 km de Corrente, público amplo, **sem segmentação por condição de saúde**, sem remarketing de páginas de especialidade (políticas da Meta/Google para saúde) |
| Sessão de fotos profissional (se não houver fotos) | R$ 500–1.500 | Recomendado (GBP e site) |

---

## 9. Lançamento mínimo viável

Se faltar tempo ou equipe, faça **só isto**, nesta ordem:
1. Os itens críticos do go/no-go (seção 0).
2. Backup + 301 completos + DNS com rollback pronto (seções 1.1, 1.3, 1.4 e 1.10).
3. Search Console com sitemap (1.5) e GBP com o site novo e o NAP canônico (1.6).
4. Botões de WhatsApp testados, um por finalidade (1.9, testes 8–10).
5. Bio do Instagram trocada para `/links` + 1 carrossel + Status do WhatsApp (2.2 e 2.4).
6. QR no balcão (2.5).
7. Nas 4 semanas seguintes: Apple, Bing, CNES e 4 diretórios gerais (seção 4).

---

## 10. Pós-lançamento e retrospectiva

**Rotina contínua (depois de D+30):**
- 2 posts de blog por semana até terminar a Onda 2; depois, 1 por semana. Cada post vira 1 carrossel/reel e 1 post no GBP.
- 4+ fotos novas por mês no GBP.
- Pedido de avaliação a todos os atendidos, 48 h depois.
- Lembretes de retorno (puericultura, ortodontia, check-up anual, mamografia anual) **só com opt-in explícito** (FUNNEL, Prioridade 3).
- Relatório mensal: conversas por canal × agendados × comparecidos.
- `/geo-compare` em D+30 e D+90; `firecrawl-monitor` nas páginas da Policlínica.
- Em D+60: decidir o cancelamento da hospedagem do WordPress (depois de guardar o backup final em 2 lugares) e se vale criar perfis individuais de profissionais no Google.

**Retrospectiva de D+30 (sexta, 11/12) e D+90 (08/02/2027):**
1. **Meta × realizado:** taxa de conversa, 404, indexação, avaliações e citações.
2. **Canais:** que origem (Instagram, Google, GBP, QR, WhatsApp, imprensa) gerou mais conversas e mais agendamentos?
3. **WhatsApp:** respostas, pedidos de SAIR e agendamentos por mensagem da lista.
4. **Páginas que mais converteram** e páginas com muita visita e pouco clique.
5. **O que a recepção ouviu dos pacientes** sobre o site.
6. **Três coisas que funcionaram.**
7. **Três coisas para mudar.**
8. **Surpresas nos dados.**
9. **Próximas ações** (com dono e data).

---

### Lembretes finais
- Este playbook **não envia mensagens nem publica nada.** Todas as publicações, envios de WhatsApp, cadastros em diretórios e o envio do release são feitos pela clínica ou pelo gestor autorizado, nas datas indicadas.
- Onde está escrito **(verificar)** ou `[ ]`, o dado precisa ser confirmado com a clínica antes do uso.
- Se a data D-0 mudar, desloque todo o cronograma e confira de novo os feriados da nova janela.
