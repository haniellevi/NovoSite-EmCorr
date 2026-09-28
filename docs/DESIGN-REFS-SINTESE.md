# Síntese de inspiração visual — redesign EmCORR Centro Clínico

**Data:** 28/09/2026 · **Base:** BRAND-VOICE.md, LANDING-CRO.md, CONTENT-INVENTORY.md + pesquisa real (Firecrawl search/branding/scrape + navegador embutido).
**Identidade que se mantém:** vermelho `#EB1A20` · vermelho escuro `#C0090E` · acento `#C21419` · texto `#383838` · branco · Poppins 400/500/600 · logo "EC" · cards brancos ~20px sobre faixas vermelhas · ícones de linha vermelhos · botões pill vermelhos e de contorno.

---

## 1. O que foi pesquisado

**Candidatos analisados (branding extraído via Firecrawl):**
| Site | Primária | Observação | Status |
|---|---|---|---|
| One Medical — onemedical.com | `#005450` | atenção primária premium | **escolhido** |
| Tia — asktia.com | `#F6544A` (coral-vermelho) | vermelho quente + creme | **escolhido** |
| Sabin — sabin.com.br | `#E51518` (vermelho) | BR, exames, ícones de linha vermelhos | **escolhido** |
| Parsley Health — parsleyhealth.com | `#BF7E3D` | editorial quente | **escolhido** |
| Fleury — fleury.com.br | `#ED0F69` | BR premium, fases da vida, CTA fixo mobile | **escolhido** |
| AmorSaúde — amorsaude.com.br | `#CD210B` (vermelho) | BR, medicina + odonto + exames | **escolhido** (arquitetura; visual como anti-referência) |
| Carbon Health — carbonhealth.com | `#56336E` roxo | booking bom, mas roxo | descartado |
| Oak Street Health — oakstreethealth.com | `#00694C` | foco Medicare | descartado |
| CloseKnit — closeknit.com | `#C34A00` laranja | pouco material | descartado |
| Clínica SiM — clinicasim.com | `#065C41` verde | BR popular | descartado |
| Dr. Consulta — drconsulta.com | `#3A10E0` | UI de app, fria | descartado |
| Bradesco Saúde — bradescosaude.com.br | `#CC092F` vermelho | seguradora, não clínica | descartado |
| Kry/Livi, Lavoisier, Alta (Dasa), MinuteClinic | azuis/turquesa | frios/corporativos | descartados |
| Einstein — einstein.br | — | Firecrawl bloqueado ("All scraping engines failed") | não acessado |

**Galerias:** Awwwards (lista "healthcare" e indicados: Institute of Health, AXEL Clinic, Elevate Medical, Roczen Health, One Medical for Business — a página não retornou conteúdo útil via scrape), Land-book (só templates Webflow/Framer, ex.: "Sophia Healthcare", "HealthWell", "Clinova" — genéricos, não usados), Siteinspire "Health & Fitness" (majoritariamente bem-estar/DTC: Mindbloom, Hims & Hers, Breathpod — pouco aplicável a clínica local). Mobbin e Pinterest exigem login: **não acessados** (regra de não logar).

**Screenshots** (`screens/`): desktop 1920×1080 salvos em disco para as 6 referências + páginas internas (15 PNG). **Mobile (375px)** foi visto no navegador embutido, que não grava em disco; os padrões estão descritos em cada `<referência>.md` e resumidos abaixo.

---

## 2. As 6 referências
1. **Tia Health** — https://asktia.com/ → `tia.md`
2. **Amazon One Medical** — https://www.onemedical.com/ → `one-medical.md`
3. **Sabin Diagnóstico e Saúde** — https://www.sabin.com.br/ → `sabin.md`
4. **Parsley Health** — https://www.parsleyhealth.com/ → `parsley-health.md`
5. **Fleury Medicina e Saúde** — https://www.fleury.com.br/ → `fleury.md`
6. **AmorSaúde** — https://www.amorsaude.com.br/ → `amorsaude.md`

---

## 3. O que roubar de cada uma → onde aplicar no site EmCORR

| # | Padrão concreto (fonte) | Onde aplicar na EmCORR |
|---|---|---|
| 1 | Vermelho de CTA sobre **fundo creme**, não branco puro (Tia `#F6544A` sobre `#FCF4E9`; Sabin `#E51518` sobre `#EEEDE7`) | Fundos de seção da home e páginas internas em neutro quente; o `#EB1A20` continua igual, só "esquenta" |
| 2 | Hero meio a meio: título + 4–5 benefícios com check + 2 CTAs; **foto real do interior da clínica** (Tia) | Home: H1 "Cuidando de você e de quem você ama…", checks (Toda a família · Consulta e exame no mesmo lugar · Convênios · Aqui em Corrente), CTA "Agendar pelo WhatsApp" + contorno "Ver meu resultado", foto da recepção da EmCORR |
| 3 | **Barra fixa inferior com 2 botões** no mobile (Fleury) | Todas as páginas no mobile: "Agendar pelo WhatsApp" (cheio) + "Resultado" ou "Ligar" (contorno) |
| 4 | Header mobile = logo + CTA + hambúrguer; menu em tela cheia com **acordeões + CTA no pé** (Tia) | Header e menu mobile |
| 5 | **Grade de atalhos com ícone de linha vermelho** ("Facilidades mais buscadas", Sabin) | Logo abaixo do hero: Agendar · Resultado de exames · Preparo de exames · Convênios · Como chegar |
| 6 | **Faixa de selos com borda fina + ícone encaixado na borda** (Parsley) | Faixa de 4 propostas pedida no LANDING-CRO |
| 7 | **"Cuidado para cada fase da vida"** — 6 retratos verticais com rótulo (Fleury) | Home: Bebês · Crianças · Adolescentes · Adultos · Mulher/Gestante · 60+ → cada um leva às especialidades certas |
| 8 | **Menu por área com ícone** + "como funciona" em 4 passos (AmorSaúde) | Menu: Consultas · Odontologia · Exames · Corpo clínico; seção "Como é ser atendido aqui" (WhatsApp → recepção → consulta/exame → retorno) |
| 9 | Diretório de profissionais com **busca + filtros em pílula** e fotos circulares padronizadas (One Medical) | /corpo-clinico: filtros Especialidade · Atende crianças · Dia da semana; foto com mesmo fundo e luz; CRM/CRO/RQE visível |
| 10 | Página de profissional: foto recortada, nome, cargo, bio curta, **"Fale com ele(a) sobre…"**, onde atende (Tia) | /corpo-clinico/[nome]: + dias de atendimento + CTA "Agendar com Dra. X pelo WhatsApp" com mensagem pronta |
| 11 | Página de exame com **"Quem deve fazer?" + "Orientações/preparo" + FAQ específica + "Enviar por WhatsApp"** (Sabin) | /exames/[exame]: substitui as FAQs genéricas de 5 perguntas; preparo em checklist; CTA do exame |
| 12 | Lista de exames com **busca + chips de filtro** (Fleury) | /exames: chips por grupo (Imagem · Laboratório · Coração · Mulher · Audição) |
| 13 | Blog com **abas de categoria em pílula** + artigo em destaque com eyebrow (Parsley); artigo com **sumário clicável, data "Atualizado em", autor** (Tia) e "Outras publicações" ao lado (Fleury) | /blog "Saúde em Família": categorias Crianças · Mulher · Coração · Sorriso · Exames; artigo assinado por profissional com CRM (E-E-A-T) |
| 14 | Faixa rolante de **condições/sintomas** que atendem (One Medical) | Home ou /especialidades: "Febre em criança · Dor de dente · Pressão alta · Ansiedade · Rouquidão…" → links para especialidades |
| 15 | Barra de aviso fina no topo (One Medical) | Campanhas do mês (Outubro Rosa → mamografia; Setembro Amarelo → psicologia) |
| 16 | Links de **Acessibilidade/Libras** no topo (Sabin) | Barra utilitária (sinal de cuidado; baixo custo) |

**Microinterações sugeridas (vistas nas refs, todas discretas):** hover de botão pill = escurecer para `#C0090E` + seta deslizando 4px; cards com elevação leve no hover (sombra quente) e foto com zoom 1.03; acordeão com rotação do chevron; texto rotativo na faixa de condições; contador/data em chip. Respeitar `prefers-reduced-motion`.

---

## 4. Anti-padrões a evitar
- **Estética hospitalar fria:** cinzas médios como botão/fundo (Fleury `#C8C8C8`, faixa `#3A3A3A`), azul-turquesa "clínico", branco puro em tudo. → Usar neutros **quentes**.
- **Stock photos genéricas:** médico de jaleco sorrindo para a câmera, mãos de luva, equipamentos. → Fotos reais da EmCORR, da equipe e de famílias de Corrente (com autorização), luz natural.
- **Carrossel de banners como hero** (Sabin, Fleury, AmorSaúde): mensagem difusa, pesa no mobile.
- **Banner de varejo** (AmorSaúde): caixa alta gritada, amarelo/laranja saturado, celebridade, letra miúda de condição comercial.
- **Gradientes roxos/azuis "de IA"**, blobs de gradiente aleatórios, ícones 3D brilhantes.
- **Glassmorphism excessivo** (cartões translúcidos com blur sobre foto) — ilegível e pesado.
- **Modal bloqueando a entrada** (seletor de cidade da Sabin) e pop-ups de newsletter.
- **Duas cores fortes concorrendo** com o vermelho (turquesa da AmorSaúde, verde da Sabin, magenta da Tia).
- **Serifada decorativa em todo lugar** — se entrar, só em títulos editoriais (ver Direção 2).

---

## 5. Três direções visuais (todas mantêm vermelho EmCORR + Poppins)

### Direção 1 — "Calor familiar"  *(Tia + Parsley)*
Sensação: sala de estar acolhedora; afetiva, próxima, "a clínica que conhece você pelo nome".
- **Paleta estendida**
  | Papel | Hex |
  |---|---|
  | Vermelho primário (CTA) | `#EB1A20` |
  | Vermelho escuro (hover, faixas) | `#C0090E` |
  | Acento | `#C21419` |
  | Creme (fundo principal) | `#FBF5EE` |
  | Areia (faixas alternadas) | `#F2E6D9` |
  | Rosa-chá (fundo de ícone/badge, tint do vermelho) | `#FCE4E1` |
  | Borda quente | `#E7DACB` |
  | Cacau (títulos) | `#2B2220` |
  | Texto | `#383838` |
- **Tipografia:** Poppins 600 títulos / 400 corpo; ênfase em **Poppins 500 itálico** numa palavra-chave ("de quem você *ama*"), à la Tia. Sem fonte extra.
- **Foto:** luz natural quente, famílias reais, crianças no colo, avós; retratos de profissionais recortados em **forma orgânica** sobre areia.
- **Componentes:** botões pill; cards 24px sem sombra (contraste por fundo); divisores de seção em **onda suave**; ícones de linha 1.5px vermelhos em círculo rosa-chá; checks vermelhos nas listas.
- **Risco:** pode ficar "lifestyle" demais e perder autoridade técnica em exames (tomografia, mamografia).

### Direção 2 — "Clínico editorial"  *(Parsley + One Medical + artigo Fleury)*
Sensação: revista de saúde séria; autoridade, conteúdo, confiança técnica.
- **Paleta estendida**
  | Papel | Hex |
  |---|---|
  | Vermelho primário (só CTA, links, eyebrows) | `#EB1A20` |
  | Vermelho escuro | `#C0090E` |
  | Acento | `#C21419` |
  | Off-white (fundo) | `#F7F5F2` |
  | Linha/grade | `#E4DFD8` |
  | Tinta (títulos) | `#1E1A1A` |
  | Texto | `#383838` |
  | Vinho (faixa escura de blog/rodapé — tom de apoio) | `#5A0B0F` |
- **Tipografia:** **Fraunces** (ou Newsreader) 400/500 só em H1/H2 e títulos de artigo + **Poppins** em corpo, UI, botões e números. Justificativa: blog e páginas de exame longas ganham ritmo editorial. Custo: uma fonte a mais (~30 KB, subset latin).
- **Foto:** retratos de estúdio com fundo neutro uniforme, leve dessaturação; fotos de exame com enquadramento limpo.
- **Componentes:** raio 12–16px, bordas 1px em vez de sombras, grid de 12 colunas visível, eyebrows em caixa alta espaçada, vermelho usado com parcimônia.
- **Risco:** afasta-se das "faixas vermelhas + cards brancos" atuais e do tom "cuidadora"; pode parecer frio para o público de Corrente.

### Direção 3 — "Moderno acolhedor"  *(Sabin + Fleury + Tia)* — **RECOMENDADA**
Sensação: a EmCORR de hoje, evoluída — mesmas faixas vermelhas e cards brancos, só que com respiro, neutros quentes, fotos reais e UX de agendamento de primeira.
- **Paleta estendida**
  | Papel | Hex | Uso |
  |---|---|---|
  | Vermelho primário | `#EB1A20` | CTAs, faixas de destaque, ícones |
  | Vermelho escuro | `#C0090E` | hover, faixa vermelha principal (texto branco 6,4:1) |
  | Acento | `#C21419` | links, estados ativos |
  | Vinho (apoio) | `#6E0A0E` | rodapé e faixa final de CTA — profundidade sem preto |
  | Branco | `#FFFFFF` | cards |
  | Neutro quente (fundo de seção) | `#F6F2EE` | alterna com branco; vermelho sobre ele ≈ 4,7:1 |
  | Areia (bordas, card secundário) | `#EAE3DC` | divisórias, inputs |
  | Rosado (tint) | `#FDECEC` | fundo de ícone, badges, chip ativo |
  | Título | `#231F1F` | H1–H3 |
  | Texto | `#383838` | corpo |
  | Texto suave | `#6B6360` | legendas (≥ 4,5:1 sobre branco) |
  | Sucesso (só estado) | `#1E8E5A` | confirmação de formulário |
- **Tipografia:** **só Poppins** (400 corpo · 500 UI/botões · 600 títulos). Escala sugerida: 14 · 16 · 18 (corpo) · 22 · 28 · 36 · 48 · 60 (H1 desktop; 36 no mobile), entrelinha 1,6 no corpo e 1,15 nos títulos, tracking −1% em H1/H2. Fonte de apoio **não é necessária**.
- **Foto:** reais e locais (recepção, consultórios, equipe com uniforme da marca, famílias de Corrente com autorização), luz natural quente, pessoas olhando umas para as outras (cuidado) e não para a câmera; retratos da equipe padronizados (mesmo fundo neutro quente, recorte circular ou 4:5 com raio 24px).
- **Forma dos componentes:**
  - **Faixas vermelhas preservadas**, mas como "faixa-cartão" com cantos de 32px e margem lateral no desktop (menos "bloco chapado").
  - Cards brancos 20–24px, sombra quente suave `0 8px 24px rgba(60,20,20,.08)` só onde há clique.
  - Botões pill 48px de altura (vermelho cheio / contorno vermelho 1.5px); ícone WhatsApp no botão principal.
  - Ícones de linha 1.75px vermelhos dentro de círculo `#FDECEC`.
  - Chips/pílulas para filtros (exames, corpo clínico, blog).
  - **Barra fixa inferior no mobile** (WhatsApp + Resultado) e header mobile logo + WhatsApp + menu.
  - Selos de confiança com borda fina (Parsley) e cards "fases da vida" (Fleury).
- **Por que é a recomendada:** mantém tudo o que a marca já tem de reconhecível (vermelho, Poppins, cards brancos sobre faixas vermelhas, ícones de linha, botões pill), resolve o "hospitalar/template" com neutros quentes e fotos reais, e traz os padrões de conversão que o LANDING-CRO pede (WhatsApp sempre à mão, atalhos, páginas de exame e de profissional completas). Tem o menor risco de estranhamento para o público atual e é a mais simples de implementar (uma família tipográfica).
- **Empréstimos pontuais das outras direções:** itálico de ênfase da Direção 1 no H1 da home; eyebrows e sumário clicável da Direção 2 no blog.

---

## 6. Próximos passos sugeridos
1. Validar a Direção 3 com a clínica mostrando `screens/tia-desktop.png`, `screens/sabin-desktop.png` e `screens/fleury-desktop.png` como "clima".
2. Sessão de fotos real (recepção, equipe, 5–6 famílias por fase da vida) — é o item que mais muda a percepção de "premium".
3. Montar tokens (CSS custom properties) com a paleta acima e testar contraste AA em todos os pares.

---

## Rodada 2 — qualidade de design de ponta (28/09/2026)

**Objetivo:** elevar a Direção 3 "Moderno acolhedor" com sites premiados/curados, sem trocar a identidade (vermelho `#EB1A20`, Poppins, cards brancos, faixas vermelhas).

### O que foi pesquisado
- **Galerias:** Awwwards "Health" (https://www.awwwards.com/websites/health/ — Function Health, Institute of Health, Sol Health, Allia, Heva etc.), One Page Love "medical" (https://onepagelove.com/tag/medical — majoritariamente one-pagers de biotech), Lapa Ninja "health-fitness" (https://www.lapa.ninja/category/health-fitness/ — Superpower, Daylight Health, Maxima Therapy), Siteinspire (filtro de saúde retorna só categorias genéricas), godly.website (hoje redireciona para recent.design, sem filtro de saúde útil).
- **Marcas avaliadas (branding via Firecrawl):** Function Health `#B05A36`, Maven `#013126/#58EDA2`, Blueberry `#235AFF` (Poppins), Sami `#FF5751`, Alice `#BE0380/#40002D`, Dentologie `#2A2622` + menta/pêssego, Superpower `#FC5F2B`, Oura `#2A72DE` (Editorial New 110px), Hims `#1C3E56`, Headway `#0B663D`, Zocdoc `#FFF04B`, Kaia `#0F2D5A`, Brightside `#6AE1E5`, Beep `#00AFAA`, Oral Sin `#FF0075`, OdontoCompany `#FFDF00`, Sorridents `#302784`, Hapvida `#0435AC`.
- **Descartados:** Superpower (entra com modal "free retest" bloqueando a home — anti-padrão já listado), Oura (produto, não clínica), Tend (hellotend.com bloqueado por Cloudflare; tend.com hoje é software agrícola), Oral Sin / OdontoCompany / Sorridents (visual de varejo, imagens quebradas), Forward (encerrada), Zocdoc/Headway (marketplace, UI de app).
- **Screenshots:** Playwright (Chromium) desktop 1440px e mobile 390px full-page, salvos em `screens/` (cookies recusados/ocultos; `prefers-reduced-motion` ligado para evitar blocos vazios de animação).

### As 6 novas referências
| # | Referência | URL | Por que | Arquivo | Screens |
|---|---|---|---|---|---|
| 7 | **Function Health** | https://www.functionhealth.com/ | Awwwards; uma cor quente (terracota) + serifada 80px com itálico de ênfase | `function-health.md` | `function-health-desktop/mobile.png` |
| 8 | **Maven Clinic** | https://www.mavenclinic.com/ | Foto de família de nível editorial; cards de fase da vida; página de serviço exemplar | `maven-clinic.md` | `maven-desktop/mobile.png`, `maven-servico-desktop.png` |
| 9 | **Dentologie** (odonto) | https://www.dentologie.com/ | Odonto premium: foto do espaço real no hero, serviços com CTA no card, faixa de convênios | `dentologie.md` | `dentologie-desktop/mobile.png`, `dentologie-servico-desktop.png` |
| 10 | **Blueberry Pediatrics** | https://www.blueberrypediatrics.com/ | Pediatria premium **em Poppins** 64px; "o que tratamos" com chips; equipe com chip humano | `blueberry-pediatrics.md` | `blueberry-desktop/mobile.png` |
| 11 | **Sami Saúde** (BR) | https://www.samisaude.com.br/ | Coral-vermelho `#FF5751` como única cor forte, em pt-BR; cards coral com número branco | `sami-saude.md` | `sami-desktop/mobile.png`, `sami-blog-desktop.png` |
| 12 | **Alice** (BR) | https://www.alice.com.br/ | Editorial BR: cor forte + vinho (mesma lógica EmCORR), números grandes leves, blocos 50/50 | `alice.md` | `alice-desktop/mobile.png`, `alice-servico-desktop.png` |

### Padrão → onde aplicar na EmCORR
| # | Padrão (origem) | Onde aplicar |
|---|---|---|
| R1 | **Meia frase de H1/H2 em itálico/cor de ênfase** (Function, Alice, Maven, Dentologie) | Todos os H2 da home e H1 internos: Poppins 500 itálico em `--red-700` ("Cuidado para *toda a família*"). Uma ênfase por título. |
| R2 | **Números-prova no pé do hero separados por fios** (Function) | Hero da home: "Desde 2020 · [[N]] especialidades · Consulta + exame no mesmo lugar" |
| R3 | **Hero em faixa-cartão com foto real** (Maven, Alice) + **foto panorâmica da recepção** (Dentologie) | Home: foto 4:5 vira faixa-cartão raio 32 no desktop; página Odontologia: recepção/consultório em panorâmica sob o H1 |
| R4 | **Cards de fase da vida 3:4 com título sobreposto** (Maven) | Bloco "Fases da vida" da home: 6 cards-foto, gradiente escuro só na base, carrossel com snap no mobile |
| R5 | **Cards de serviço com foto + CTA dentro** (Dentologie) | /odontologia e /especialidades: foto no topo, título, 2 linhas, botão "Agendar" pequeno no card |
| R6 | **Faixa de convênios com logos em pílulas + "Não achou o seu?"** (Dentologie, Sami) | Home (abaixo do hero ou antes do CTA final) e /convenios |
| R7 | **"O que tratamos" com chips por sintoma agrupados** (Blueberry) + **cards de sintoma altos** (Maven) | Páginas de especialidade e /especialidades (Criança: febre · otite · alergia…) |
| R8 | **Abas âncora fixas na página de serviço** (Maven) | Especialidade/exame: Quando procurar · Como é · Profissionais · Preparo · Dúvidas |
| R9 | **Blocos 50/50 em vinho com foto real** (Alice) | Destaques: Tomografia, Odontologia, Médico da família — substitui a 2ª faixa vermelha que o DESIGN.md proíbe |
| R10 | **Card vermelho cheio com número branco grande** (Sami) | Um único bloco de estatísticas da home, sobre `--red-700` (AA) |
| R11 | **Números grandes em peso leve com rótulo pequeno** (Alice, Function) | Página Sobre e faixa de confiança (nota Google, anos, atendimentos) |
| R12 | **Frase-manifesto isolada entre seções** (Alice) | Home, entre serviços e equipe: "Consulta e exame. No mesmo lugar. *Perto de você.*" |
| R13 | **Colunas editoriais com fio vertical** (Function) | /exames: Imagem · Laboratório · Cardiologia com lista de exames |
| R14 | **Mosaico de rostos da equipe / retrato com chip humano** (Alice, Blueberry) | Home (prova de corpo clínico) e cards de /corpo-clinico ("Pediatra · Atende crianças") |
| R15 | **H1 local em página de serviço + tabela "aqui x lá"** (Dentologie) | "Implante dentário em Corrente-PI"; tabela "Na EmCORR x viajar para Teresina/Barreiras" (tempo, deslocamento) |
| R16 | **Faixa rolante com botão "pausar"** (Function) | Faixa de condições/sintomas já prevista (item 14 da rodada 1) |
| R17 | **CTA duplo grafite + vermelho** (Sami) | Hero: "Agendar pelo WhatsApp" (vermelho) + "Ver especialidades" (grafite/contorno) — evita dois vermelhos |

**Anti-padrões novos:** modal de oferta cobrindo a home (Superpower); excesso de CTAs repetidos e faixas de cores concorrendo (Blueberry); blog WordPress genérico com lateral "populares" (Sami); animações de entrada que deixam seções em branco sem JS/reduced-motion (Sami, Superpower) — **todo conteúdo deve estar visível sem animação**.

### 3 decisões que a Rodada 2 muda/fortalece na Direção 3
1. **Escala tipográfica maior + ênfase editorial em Poppins.** Display da home sobe de 60 → **72px** (desktop, 600, tracking −2%, entrelinha 1,05) e H2 de 36 → **44px**; mobile 40/30. Toda seção ganha **uma meia frase em Poppins 500 itálico `--red-700`** (Function, Alice, Maven, Dentologie). Continua **sem fonte extra** — Blueberry prova que Poppins sustenta 64px+.
2. **Profundidade por faixa-cartão e vinho, não por mais vermelho.** Hero e destaques viram **faixas-cartão** (raio 32, margem lateral); os destaques de serviço usam **blocos 50/50 em vinho `#6E0A0E` com foto real** (Alice/Maven). O vermelho cheio fica restrito a CTA, à faixa vermelha única e a um card de estatística (Sami). Grid editorial: colunas com fio vertical e números grandes leves.
3. **Fotografia como sistema + microinteração contida.** Foto real em 3 formatos fixos: **panorâmica do espaço** (hero de serviço), **3:4 de fase da vida com título sobreposto** e **retrato 4:5 padronizado**; luz quente, pessoas interagindo. Microinterações: foto com zoom 1.03 e gradiente de base no hover dos cards-foto, carrossel com snap, **botão pausar** em faixas rolantes e conteúdo 100% visível com `prefers-reduced-motion`.
