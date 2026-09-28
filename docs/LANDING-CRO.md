# Análise CRO da Landing Page (Home)
## https://emcorr.com.br/
### Data da análise: 28/09/2026

**Fontes:** HTML da home e da página /agendar (coletados em 28/09/2026); navegação no navegador embutido em 800px e 375px (mobile); [COMPETITOR-REPORT.md](COMPETITOR-REPORT.md); [BRAND-VOICE.md](BRAND-VOICE.md).
**Limites:** sem acesso a Analytics, Search Console, mapas de calor ou volume real de agendamentos. Taxas de conversão abaixo são **estimativas** baseadas em benchmark, não em dados da clínica.

---

## Nota CRO geral: **31/100**

| Seção | Peso | Nota | Ponderado |
|---|---|---|---|
| 1. Hero | 25% | 3/10 | 0,75 |
| 2. Proposta de valor | 20% | 3/10 | 0,60 |
| 3. Prova social | 15% | 3/10 | 0,45 |
| 4. Serviços e benefícios | 15% | 3/10 | 0,45 |
| 5. Tratamento de objeções | 10% | 2/10 | 0,20 |
| 6. CTA | 10% | 4/10 | 0,40 |
| 7. Rodapé e secundários | 5% | 5/10 | 0,25 |
| **Total** | | | **3,1/10 → 31/100** |

## Tipo de página: **Agendamento de consulta/exame** (clínica local, conversão principal = conversa no WhatsApp ou formulário /agendar)
## Conversão estimada atual: **1–2%** das visitas iniciam agendamento (sem WhatsApp clicável, CTA leva a formulário de 7 campos com CPF)
## Meta realista após o redesign: **5–8%** (benchmark "bom" do segmento: 5–10%)

> Como traduzir em pacientes: com 1.000 visitas/mês (estimativa, verificar no Analytics), passar de ~15 para ~60 contatos/mês. Mesmo que só metade vire consulta, são ~20–25 atendimentos a mais por mês vindos do site.

---

## O que a home mostra hoje (ordem real, mobile 375px)

1. Logo + menu (hambúrguer) · botão **AGENDAR** · botão **RESULTADOS** · campo **Pesquisar** (3 elementos antes do conteúdo)
2. Carrossel com banner **"Tomografia Computadorizada — aparelho moderno | excelente resolução | diagnóstico preciso de doenças"** (texto dentro da imagem)
3. **Convênios** (logos Medplan, Humana Saúde, Camed, em carrossel)
4. Faixa vermelha de números: **"0+ Anos de Experiência / 0 K+ Atendimentos / 0+ Profissionais"** + botão Agendar
5. "Centro Clínico Referência Em Corrente — Atendimento Humanizado e Qualificado."
6. "Especialidades EmCORR — Cuidados diligentes tomados para manter ou restaurar sua autonomia" + 6 cards: Cardiologia Clínica, Fisioterapia, Cirurgia Geral, Otorrino Laringologia, Odontologia, **Mamografia** (exame listado como especialidade)
7. Equipe Médica: 2 profissionais (Dra. Ludmilla Nery, CRM-PI 5888 RQE 2142; Dr. Igor Rafael, CRO-PI 2031)
8. "O que nossos Clientes Falam" — 2 depoimentos (Marta, Suele) + um terceiro bloco que na verdade é **texto de template** ("A Clínica EMCORR oferece uma gama de habilidades e ferramentas...")
9. Rodapé: tagline "Cuidando de Você e de Quem Você Ama!", **newsletter por e-mail**, endereço, e-mail, telefone **não clicável**; popup "Resultados" com 3 portais (uniexames, entregadeexames, resultados.emcorr)

Página com ~6.900px de altura no mobile. **Não há H1** na home (o título só existe na aba do navegador). **Não há nenhum link de WhatsApp nem `tel:`** na home.

---

## Análise Seção por Seção

### 1. Hero [Nota: 3/10]
**Achados:**
- A primeira dobra no mobile é ocupada por navegação: dois botões grandes + busca. O visitante precisa rolar ~350px para ver qualquer mensagem.
- A mensagem principal é um **banner-imagem de tomografia**. O texto está "queimado" na imagem: não é lido por Google, leitor de tela nem tradução, e fica pequeno no celular.
- O banner comunica **um exame**, não a clínica. Quem procura pediatra ou dentista não se reconhece.
- A frase "diagnóstico preciso de doenças" no banner é afirmação de resultado sem prova. Risco ético (CFM 2.336/2023 veda sensacionalismo e promessa de resultado). Trocar por descrição objetiva do equipamento.
- Na primeira carga em 800px, o carrossel ficou **em branco por ~3 s** antes da imagem aparecer (velocidade percebida ruim).
- O posicionamento ("toda a família em um só lugar") não aparece em lugar nenhum da home. Ele só existe no Instagram.
- Não há prova de confiança na primeira dobra (convênios vêm logo abaixo, o que é bom, mas fora da tela).

**Correções:**
- **ALTA:** Hero em HTML (texto real, H1) com a promessa da família: *"Cuidando de você e de quem você ama, do bebê aos avós, em um só lugar."* Subtítulo: *"Consultas, odontologia e exames aqui em Corrente. Atendemos Medplan, Humana Saúde, Camed e particular."*
- **ALTA:** CTA primário **"Agendar pelo WhatsApp"** dentro do hero; secundário "Ver meu resultado".
- **ALTA:** Tirar a busca do topo no mobile (vai para dentro do menu). Header mobile = logo + WhatsApp + menu.
- **MÉDIA:** Foto real (recepção, equipe, família sendo atendida com autorização) em vez de banner de equipamento. A tomografia vira um card de destaque logo abaixo.
- **MÉDIA:** Remover o carrossel. Carrosséis de home têm baixa taxa de clique além do 1º slide e atrasam a exibição.

### 2. Proposta de Valor [Nota: 3/10]
**Achados:**
- "Centro Clínico Referência Em Corrente / Atendimento Humanizado e Qualificado" é genérico. Qualquer clínica poderia assinar. E "referência" sem dado ao lado viola a própria regra do BRAND-VOICE.
- O diferencial real (único em Corrente com pediatria + odontologia + nutrição + psicologia + tomografia no mesmo lugar, segundo o COMPETITOR-REPORT) **não é dito**.
- O público não é nomeado ("famílias de Corrente e região") e não há âncora local além do nome da cidade.
- 4U: Útil **sim** · Urgente **não** · Único **não comunicado** · Ultraespecífico **não**.
- A melhor frase da marca ("cada consulta é uma oportunidade de entender quem você é...") está enterrada no rodapé.

**Correções:**
- **ALTA:** Faixa de 3–4 propostas logo abaixo do hero: *Toda a família, um só endereço* · *Consulta e exame no mesmo lugar* · *Gente que conhece você pelo nome* · *Aceitamos seu convênio*.
- **MÉDIA:** Subir o texto do rodapé para a seção "Sobre" da home.

### 3. Prova Social [Nota: 3/10]
**Achados:**
- **Faixa de números com animação quebrada:** o HTML entrega "0+ / 0 K+ / 0+". Os valores reais (4, 30K, 14) só aparecem se o JavaScript rodar e a faixa entrar na tela. Buscadores, pré-visualizações e quem rola rápido veem **zero**. Além disso, "4 anos" está **desatualizado** (fundada em 2020 → 6 anos).
- Só 2 depoimentos reais, com foto, sem contexto (qual serviço, cidade). O terceiro "depoimento" é texto de template, o que destrói credibilidade de quem lê.
- Instagram com 6.003 seguidores (maior da cidade) e destaques de depoimentos: nada disso aparece no site.
- Sem nota/quantidade de avaliações do Google.
- Corpo clínico: só 2 profissionais na home, e um tem foto de placeholder ("profissional-emcorr-teste.png").
- Grafias misturadas: "EMCORR", "EmCorr", "EmCORR"; "Ludmilla" (home) × "ludmila" (URL).

**Correções:**
- **ALTA (esta semana):** Números estáticos no HTML, sem animação de contagem: "Desde 2020", "+30 mil atendimentos" (confirmar com a clínica), "14 profissionais", "X especialidades".
- **ALTA:** Remover o bloco de template dos depoimentos.
- **MÉDIA:** 6–8 depoimentos com autorização escrita, nome, cidade e serviço, **sem relato de resultado clínico** (CFM). Ex.: sobre acolhimento, pontualidade, facilidade de agendar.
- **MÉDIA:** Selo "Nota X no Google · N avaliações" com link (levantar manualmente).
- **MÉDIA:** Faixa do corpo clínico com todos os profissionais, foto real, CRM/CRO/RQE.

### 4. Serviços e Benefícios [Nota: 3/10]
**Achados:**
- Os 6 cards trazem texto enciclopédico e às vezes estranho: "Cirurgia Geral — São essenciais em emergências e áreas rurais devido à sua variedade de habilidades" (fala de cirurgiões em geral, não da EmCORR).
- **Mamografia** aparece como especialidade. Mistura exame e especialidade e confunde a navegação.
- A home não mostra **Pediatria, Endocrinologia, Nutrição, Psicologia** nos cards, justamente o núcleo "família". O formulário /agendar lista 21 exames (ECO, Holter, MAPA, ergométrico, EEG, espirometria, USG, raio-X, teste da orelhinha...) que **a home não menciona**.
- Todos os cards levam a "Ver Mais" (CTA fraco, sem benefício).
- Ícones SVG com `alt` vazio e um ícone reaproveitado de "covid-19".

**Correções:**
- **ALTA:** Organizar por **fase da vida da família** (Crianças · Adultos · Mulheres · Sorriso · Mente e nutrição) e, separado, **Exames**.
- **ALTA:** Texto de card = benefício + como é na EmCORR (ex.: *"Pediatria — seu filho acompanhado do primeiro mês à adolescência, com tempo para ouvir e explicar."*).
- **MÉDIA:** CTA do card: "Conhecer a especialidade" + ícone de WhatsApp com mensagem pronta daquele serviço.

### 5. Tratamento de Objeções [Nota: 2/10]
**Achados:** nenhuma seção responde às dúvidas que fazem a pessoa desistir ou ligar para a recepção:
- "Aceita meu convênio?" (só logos, sem explicar particular)
- "Qual o horário?" (não aparece em lugar nenhum)
- "Quanto tempo para marcar? E para sair o resultado?"
- "Precisa de preparo para o exame?"
- "Onde fica / tem estacionamento / acessibilidade?"
- "Por que pagar se o SUS agora tem tomografia?" (ameaça real desde 2024/2026, sem depreciar o SUS)
- Sem política de privacidade visível perto do formulário, que pede **CPF**.

**Correções:**
- **ALTA:** FAQ curta (6 perguntas) na home, com schema `FAQPage`.
- **ALTA:** Bloco "Como chegar" com horário, mapa, endereço clicável.
- **MÉDIA:** Microcopy de risco zero no CTA: "Resposta da recepção em horário comercial · sem compromisso".

### 6. Call-to-Action [Nota: 4/10]
**Achados:**
- "AGENDAR" está visível e com bom contraste (vermelho da marca). É o ponto mais forte da página.
- Mas leva para **/agendar**, formulário com **7 campos** (Nome, **CPF**, WhatsApp, E-mail, Tipo, Exame/Consulta, Informações) e botão **"Enviar"**. CPF no primeiro contato é atrito alto e dado sensível (LGPD).
- **Não existe botão de WhatsApp** na home. O público de Corrente agenda por WhatsApp (a Policlínica já tem).
- "RESULTADOS" abre popup com **3 portais** sem explicar qual usar: gera ligação para a recepção.
- "Ver Mais" em todos os cards; newsletter "Enviar" no rodapé compete com o agendamento e não entrega valor claro.
- O telefone no rodapé não é clicável.

**Correções:**
- **ALTA:** Botão flutuante **"Agendar pelo WhatsApp"** em todas as telas, com mensagem pronta (`wa.me/5589999331133?text=...`).
- **ALTA:** Formulário /agendar com 3 campos (nome, WhatsApp, serviço) que abre o WhatsApp; CPF só na confirmação, pela recepção.
- **ALTA:** "Ver meu resultado" → página-ponte com 3 cards claros (Laboratório / Imagem / Outros) e instrução de login de cada um.
- **MÉDIA:** Trocar a newsletter por "Receber lembretes de saúde pelo WhatsApp" ou remover.

### 7. Rodapé e Secundários [Nota: 5/10]
**Achados:** endereço, e-mail e telefone presentes (bom); link de Privacidade presente; tagline forte. Faltam horário, WhatsApp clicável, mapa, CNPJ/responsável técnico (exigido pelo CFM em publicidade médica: nome e CRM do diretor técnico), CTA final.
**Correções:** **ALTA:** CTA final + horário + responsável técnico com CRM. **MÉDIA:** `tel:` e `wa.me` clicáveis; ícones de Instagram/Facebook discretos.

---

## Nota da Copy: **34/100**
| Dimensão | Nota | Observação |
|---|---|---|
| Clareza | 4/10 | Dá para entender que é clínica, mas não quais serviços nem para quem |
| Urgência | 2/10 | Nenhum motivo para agir hoje (e em saúde a urgência deve ser leve: "agenda da semana", nunca medo) |
| Especificidade | 3/10 | Sem horário, prazo, números reais; cards genéricos |
| Prova | 3/10 | 2 depoimentos, 2 registros de conselho, números vazios no HTML |
| Orientação à ação | 5/10 | "Agendar" visível, mas o caminho é longo e sem WhatsApp |

---

## Auditoria de Formulário (/agendar)
| Item | Atual | Recomendado |
|---|---|---|
| Nº de campos | 7 (+ selects condicionais) | 3: Nome · WhatsApp · Serviço |
| CPF | Obrigatório | Remover do site; pedir na confirmação |
| E-mail | Pedido | Opcional ou remover |
| Botão | "Enviar" | "Pedir meu horário pelo WhatsApp" |
| Tipo de campo | Verificar `type=tel` no WhatsApp | `type=tel`, `autocomplete=tel`, máscara leve |
| Pós-envio | Promete "confirmaremos rapidamente" (prazo vago) | "A recepção responde em até X min em horário comercial (seg–sex, X–Yh)" |
| Privacidade | Não visível | Linha "Usamos seus dados só para agendar. Ver política." |

Cada campo a mais reduz a conversão em ~7%; tirar 4 campos (incluindo CPF) é a mudança de maior impacto com menor esforço.

---

## Auditoria Mobile
- [ ] **CTA ao alcance do polegar:** não. O único CTA está no topo e some ao rolar. → barra fixa inferior com WhatsApp.
- [x] Texto legível sem zoom (fonte Poppins, tamanho adequado).
- [ ] **Texto do hero legível:** não, está dentro da imagem.
- [x] Sem rolagem horizontal.
- [ ] **Click-to-call:** não há `tel:` nem `wa.me`.
- [ ] **Primeira dobra útil:** não. Logo, 2 botões e busca ocupam ~350px antes do conteúdo.
- [ ] Página longa (~6.900px) com carrosséis de convênios e depoimentos: conteúdo importante escondido em slides.

## Velocidade Percebida
- TTFB medido **~0,9–1,0 s** (servidor lento para uma página HTML de 126 KB); DOMContentLoaded ~1,0 s; ~84 requisições. Stack WordPress + Elementor Pro + JetElements/JetEngine/JetBlocks + plugin de máscara.
- Carrossel do hero apareceu **em branco por ~3 s** na primeira visita (800px). Isso pesa mais que o tempo de carga medido: a pessoa vê um espaço vazio.
- Imagens de conteúdo usam lazy-load com GIF placeholder (bom), e o banner já está em WebP (bom).
- **Recomendações:** hero em HTML/CSS com imagem otimizada e `fetchpriority="high"`; remover carrosséis; reduzir plugins Jet; cache de página + CDN; meta alvo: LCP < 2,5 s em 4G.

---

## Recomendações de Teste A/B
(Rodar só depois de o novo site estar no ar e com rastreamento de clique no WhatsApp via GA4/GTM.)
1. Se trocarmos o título "Centro Clínico Referência em Corrente" por "Cuidando de você e de quem você ama, do bebê aos avós, em um só lugar", então o clique no CTA do hero vai aumentar, porque o visitante se reconhece na promessa em vez de ler uma frase genérica.
2. Se o CTA principal for "Agendar pelo WhatsApp" em vez de "Agendar" (formulário), então os contatos iniciados vão aumentar, porque o WhatsApp é o canal que o público já usa e elimina o formulário de 7 campos.
3. Se colocarmos a linha de convênios dentro do hero (texto) em vez de só logos abaixo, então a taxa de rolagem até o CTA vai subir, porque "aceita meu convênio?" é a primeira objeção.
4. Se a seção de serviços for organizada por fase da vida (Crianças/Adultos/Mulheres/Sorriso) em vez de lista de especialidades, então os cliques em especialidade vão aumentar, porque o visitante encontra o próprio caso mais rápido.
5. Se mostrarmos "Nota X no Google · N avaliações" ao lado do CTA final, então a conversão do rodapé vai subir, porque prova social perto da decisão reduz a hesitação.

---

## Guia de Mapa de Calor (previsão, sem dados reais)
- **Padrão de leitura:** F no mobile. Atenção concentrada no header e no 1º slide; queda forte depois da faixa de números.
- **Profundidade prevista:** ~50% chegam aos cards de especialidade; <25% chegam aos depoimentos e rodapé (onde está o telefone).
- **Zonas de clique:** "Agendar" e "Resultados" no topo; setas do carrossel.
- **Cliques de frustração previstos:** banner de tomografia (parece clicável e não é); logos de convênio; telefone do rodapé (não clicável).
- **Zonas mortas:** texto "Centro Clínico Referência", 3º depoimento, newsletter.

---

## Lista Priorizada de Correções

### Vitórias rápidas (esta semana, no site atual)
1. Números estáticos e corretos na faixa (Desde 2020 · +30 mil atendimentos · 14 profissionais), sem animação. Tira o "0+" de buscadores e prints.
2. Remover o "depoimento" de template e a frase "Cuidados diligentes...".
3. Botão flutuante de WhatsApp com mensagem pronta + `tel:` no rodapé. **Maior impacto isolado.**
4. Tirar CPF e e-mail do /agendar; botão "Pedir meu horário".
5. Adicionar H1 real e trocar "diagnóstico preciso de doenças" no banner por descrição objetiva.
6. Horário de funcionamento e responsável técnico (nome + CRM) no rodapé.

### Médio prazo (este mês, no redesign)
1. Nova home no wireframe abaixo (hero da família, jornada por idade, exames, equipe completa).
2. Página-ponte "Ver meu resultado" única.
3. FAQ com schema; bloco "Como chegar" com mapa.
4. 6–8 depoimentos autorizados; nota Google.
5. Expor 100% do portfólio (pediatria, endocrino, nutrição, psicologia, dermato, fono, fisio, odontopediatria, 21 exames do formulário).

### Estratégico (este trimestre)
1. Páginas por exame e especialidade (tomografia primeiro) com preparo, prazo, convênio, profissional.
2. Página "Particular ou SUS: quando faz sentido" (neutra, sem depreciar o SUS).
3. Check-up família com "a partir de" (validar com a clínica e CFM).
4. Migração para um único portal de resultados.
5. Rastreamento GA4 de cliques em WhatsApp/telefone/formulário para medir e testar.

---

## Wireframe Textual da Nova Home

**Princípios:** uma promessa (família em um só lugar), um CTA dominante (WhatsApp), prova sempre ao lado da afirmação, voz de Amigo + Guia (BRAND-VOICE), nenhuma promessa de resultado, nenhum antes/depois, nenhuma comparação com concorrentes ou SUS.

**Elementos fixos em todas as telas**
- **Header (desktop):** Logo EmCORR · Especialidades · Exames · Corpo clínico · Convênios · Sobre · [Ver meu resultado] (botão contorno) · [Agendar pelo WhatsApp] (botão cheio vermelho).
- **Header (mobile):** Logo · ícone WhatsApp · menu. Busca vai para dentro do menu.
- **Barra fixa inferior (mobile):** [Agendar pelo WhatsApp] (70%) · [Ligar] (30%).

---

### Seção 1 — Hero
- **Objetivo:** em 5 segundos o visitante entende quem é, para quem é e como agendar.
- **Conteúdo:**
  - Sobretítulo: *Centro Clínico em Corrente-PI · desde 2020*
  - **H1:** *Cuidando de você e de quem você ama, do bebê aos avós, em um só lugar.*
  - Subtítulo: *Consultas médicas, odontologia e exames aqui em Corrente. Atendemos Medplan, Humana Saúde, Camed e particular.*
  - Imagem: foto real da equipe ou de uma família na recepção (com autorização de uso de imagem). No mobile, foto abaixo do texto.
- **CTA:** [Agendar pelo WhatsApp] · link secundário "Ver meu resultado →"
- **Microcopy:** *A recepção responde de segunda a sexta, das X às Yh.* (preencher)
- **Prova:** linha com 3 itens pequenos logo abaixo: *Desde 2020 · 14 profissionais · Nota X no Google* (só números confirmados).

### Seção 2 — Faixa de confiança (convênios + números)
- **Objetivo:** responder "aceita meu convênio?" e dar escala, antes de qualquer lista.
- **Conteúdo:** logos estáticos (sem carrossel) Medplan · Humana Saúde · Camed · "Particular". Ao lado, 3 números estáticos no HTML: *Desde 2020 em Corrente* · *+30 mil atendimentos* · *X especialidades*.
- **CTA:** link "Ver convênios e como usar →" (/convenios)
- **Prova:** os próprios números (validar com a clínica antes de publicar; se não houver dado, esconder o bloco).

### Seção 3 — "Para toda a sua família" (jornada por fase da vida)
- **Objetivo:** provar o posicionamento; o visitante encontra o seu caso.
- **Conteúdo:** título *Um só lugar para cada fase da sua família*. 5 cards com ícone + 1 frase de benefício + especialidades:
  - **Crianças:** *Do primeiro mês à adolescência, acompanhados de perto.* Pediatria · Odontopediatria · Fono · teste da orelhinha
  - **Adultos:** *Coração, hormônios e check-up com calma.* Cardiologia · Endocrinologia · Clínico geral · Otorrino
  - **Mulheres:** *Exames de rotina sem precisar viajar.* Mamografia · Ultrassonografia
  - **Sorriso:** *Do primeiro dentinho ao aparelho.* Odontologia · Ortodontia
  - **Corpo e mente:** *Cuidado que vai além do consultório.* Nutrição · Psicologia · Fisioterapia · Dermatologia
  (Confirmar lista final com a clínica.)
- **CTA:** em cada card, "Conhecer →" + ícone WhatsApp com mensagem pronta ("Olá, quero agendar Pediatria").
- **Prova:** nomes dos profissionais de cada área em texto pequeno.

### Seção 4 — Consulta e exame no mesmo lugar
- **Objetivo:** mostrar o segundo diferencial (diagnóstico local) e capturar busca por exames.
- **Conteúdo:** título *Precisa de exame? Dá para fazer aqui mesmo.* Texto: *Laboratório, tomografia, ultrassom, eletrocardiograma e mais, sem precisar ir a outra cidade.* Grade com 6 exames mais procurados (Tomografia, Exames de sangue, Ultrassonografia, Eletrocardiograma/Holter/MAPA, Raio-X, Mamografia) + "Ver todos os exames". Card de destaque da tomografia com descrição objetiva: *Tomógrafo GE Revolution ACT · laudo em até X dias* (sem "diagnóstico preciso").
- **CTA:** [Agendar meu exame pelo WhatsApp] · "Como me preparar? →" (páginas de exame)
- **Prova:** prazo de laudo e modelo do equipamento (dados verificáveis).

### Seção 5 — Como funciona (3 passos)
- **Objetivo:** reduzir a incerteza de "como eu marco?".
- **Conteúdo:** 1. *Chame no WhatsApp e diga o que precisa.* 2. *A recepção confirma dia, horário e preparo.* 3. *Você é atendido e acessa o resultado pelo site.*
- **CTA:** [Agendar pelo WhatsApp]
- **Prova:** tempo médio de resposta da recepção (se medido).

### Seção 6 — Corpo clínico
- **Objetivo:** confiança por pessoas reais (Autoridade com prova, sem superlativo).
- **Conteúdo:** título *Quem vai cuidar de você.* Carrossel horizontal no mobile / grade no desktop com todos os profissionais: foto real, nome na grafia do conselho, especialidade, **CRM/CRO + RQE**. Frase de apoio (texto atual, que é bom): *Nossos especialistas estão comprometidos não apenas em tratar, mas em acompanhar sua jornada.*
- **CTA:** "Ver corpo clínico completo →"
- **Prova:** registros de conselho. Nada de "renomados".

### Seção 7 — Depoimentos
- **Objetivo:** prova social na linguagem do público.
- **Conteúdo:** título *O que as famílias de Corrente e região dizem.* 6 depoimentos curtos (autorizados por escrito) com nome, cidade, foto opcional; foco em acolhimento, atenção, facilidade. Manter a linguagem do paciente ("Deus abençoe"). **Sem relato de cura ou melhora clínica.** Selo "Nota X no Google · N avaliações" com link.
- **CTA:** "Ver avaliações no Google →"
- **Prova:** avaliações públicas verificáveis.

### Seção 8 — Sobre a EmCORR (a voz da marca)
- **Objetivo:** emoção e diferenciação (território Amigo).
- **Conteúdo:** foto da Dra. Ludmilla Nery ou da fachada. Texto curto: *Desde 2020, a EmCORR reúne em Corrente o cuidado que antes exigia viagem. Aqui, cada consulta é uma oportunidade de entender quem você é, ouvir suas preocupações e encontrar a melhor forma de cuidar de você.*
- **CTA:** "Conhecer nossa história →"
- **Prova:** ano de fundação.

### Seção 9 — Perguntas frequentes
- **Objetivo:** matar objeções antes do WhatsApp.
- **Conteúdo (6 perguntas):** Quais convênios vocês aceitam? · Como agendo? · Qual o horário? · Preciso de preparo para exame de sangue ou tomografia? · Como vejo meu resultado? · Vocês atendem pacientes de outras cidades?
- **CTA:** "Não achou sua dúvida? Falar com a recepção"
- **Prova:** respostas com dado concreto (horário, prazo).

### Seção 10 — Resultados de exames (faixa curta)
- **Objetivo:** atender o paciente que já é cliente sem poluir o funil de agendamento.
- **Conteúdo:** *Seu resultado já está disponível? Acesse aqui.* 3 cards: Laboratório · Imagem · Outros exames, cada um com "o que você precisa para entrar" (ex.: código do protocolo).
- **CTA:** [Ver meu resultado]

### Seção 11 — Como chegar + CTA final
- **Objetivo:** fechar a conversão e dar segurança física.
- **Conteúdo:** mapa incorporado leve (imagem estática com link para Google Maps), endereço clicável (Rua Getúlio Vargas, 471, Centro, Corrente-PI), horário, telefone e WhatsApp clicáveis. Título: *Estamos aqui, no centro de Corrente.*
- **CTA:** [Agendar pelo WhatsApp] · [Traçar rota]
- **Prova:** logos dos convênios repetidos em linha pequena.

### Seção 12 — Rodapé
- Tagline: *Cuidando de você e de quem você ama.*
- Links: Especialidades · Exames · Corpo clínico · Convênios · Sobre · Privacidade.
- **Responsável técnico:** Nome · CRM-PI (exigência CFM para publicidade médica). CNPJ.
- Instagram e Facebook (ícones discretos).
- Sem newsletter.

---

## Antes × Depois (resumo)
| | Antes | Depois |
|---|---|---|
| 1ª dobra mobile | Logo + Agendar + Resultados + busca; banner de tomografia | H1 da família + convênios em texto + WhatsApp |
| Promessa | "Centro Clínico Referência" | "Do bebê aos avós, em um só lugar" |
| Serviços | 6 cards genéricos, sem pediatria | 5 fases da vida + bloco de exames |
| Prova | "0+" no HTML, 2 depoimentos, 2 profissionais | Números estáticos, 6 depoimentos, Google, equipe com CRM/RQE |
| Agendamento | Formulário de 7 campos com CPF | WhatsApp com mensagem pronta; formulário de 3 campos |
| Resultados | Popup com 3 portais | Página-ponte com 3 cards explicados |
| Objeções | Nenhuma | FAQ + como funciona + como chegar |

**Checklist de conformidade (CFM 2.336/2023 · CFO):** sem promessa de resultado · sem antes/depois · sem superlativo sem prova · depoimentos sem relato clínico e com autorização · responsável técnico com CRM no rodapé · nenhuma comparação com concorrentes ou SUS · preços, se publicados, como "a partir de" e validados pela clínica.
