# Copy do Site Institucional: EmCORR – Centro Clínico
**Versão:** 2 (reescrita) · **Data:** 28/09/2026 · **Regra-mãe:** [GUIA-DE-ESTILO-COPY.md](GUIA-DE-ESTILO-COPY.md)
**Base:** [BRAND-VOICE.md](BRAND-VOICE.md) · [LANDING-CRO.md](LANDING-CRO.md) · [FUNNEL-ANALYSIS.md](FUNNEL-ANALYSIS.md) · [SEO-AUDIT.md](SEO-AUDIT.md) · [AUDIENCE-PERSONAS.md](AUDIENCE-PERSONAS.md) · [CONTENT-INVENTORY.md](CONTENT-INVENTORY.md) · captura do site atual em `scrape/emcorr/`.

---

## Como usar este documento

- **Texto entre aspas ou em bloco** é a copy final. Cole no componente sem mudar.
- **`{variavel}`** é um dado que vem do painel admin. Se o campo estiver vazio, o componente esconde a linha ou o bloco inteiro. A chave nunca aparece para o paciente.
- **`[[REVISÃO JURÍDICA]]`** e **`[[REVISÃO ÉTICA]]`** marcam texto que só vai ao ar com parecer.
- Grafia única: **EmCORR**. Nome da médica: **Dra. Ludmilla Nery**, com "ll".
- Número único de contato: **(89) 9 9933-1133**, o mesmo do site atual e do Linktree. Link: `https://wa.me/5589999331133?text=<mensagem URL-encoded>`. Ligação: `tel:+5589999331133`.
- Titles com até 60 caracteres. Meta descriptions entre 120 e 160 caracteres. Campos editáveis no admin: `seo_title`, `seo_description`.
- Trechos do site antigo com termos vetados aparecem grafados com "·" no meio da palavra (ex.: "exce·lência"). Assim, a busca no arquivo só encontra o texto novo.

### Fatos fixos (fonte: site atual emcorr.com.br)
| Dado | Valor |
|---|---|
| Nome | EmCORR – Centro Clínico |
| Abertura | 2020 |
| Endereço | Av. Getúlio Vargas, 471, Centro, Corrente-PI, 64980-000 |
| WhatsApp | (89) 9 9933-1133 |
| E-mail | atendimento@emcorr.com.br |
| Instagram | @centro_clinico_emcorr |
| Convênios | Medplan, Humana Saúde, Camed + particular |
| Contador do site | 30 mil atendimentos · 14 profissionais |
| Tomógrafo | GE ACT Revolution |
| Portais de resultado | Laboratório: emcorr.uniexames.com.br · Radiologia: entregadeexames.com.br · Outros: resultados.emcorr.com.br |
| Registros publicados | Dra. Ludmilla Nery, cardiologista, CRM-PI 5888, RQE 2142 · Dr. Igor Rafael, cirurgião-dentista, ortodontia e implantodontia, CRO-PI 2031 |
| Depoimentos reais | Marta e Suele (texto integral na seção 5, bloco 7) |

### Variáveis do painel (o que só a clínica informa)
| Variável | O que é | Onde aparece | Se vazio |
|---|---|---|---|
| `{horario_semana}` | Ex.: "segunda a sexta, das 7h às 18h" | Rodapé, contato, FAQ | Esconde a linha |
| `{horario_sabado}` | Ex.: "sábado, das 7h às 12h" | Rodapé, contato | Esconde a linha |
| `{horario_domingo_feriado}` | Ex.: "fechado" | Contato | Esconde a linha |
| `{horario_hoje}` | Calculado a partir dos campos acima. Ex.: "hoje até as 18h" ou "amanhã a partir das 7h" | Hero, balão do WhatsApp, agendar | Troca por "no horário de atendimento" |
| `{horario_coleta}` | Horário da coleta de laboratório | Contato, cidades, exames | Esconde a linha |
| `{tempo_resposta}` | Tempo médio medido de resposta no WhatsApp. Ex.: "15 minutos" | Como funciona, obrigado | Esconde a frase |
| `{prazo_resultado}` | Prazo por exame, cadastrado em cada exame | Resultados, exames | "O prazo é informado quando você agenda." |
| `{prazo_laudo_tc}` | Prazo do laudo de tomografia | Home (card de tomografia) | Esconde o item |
| `{nota_google}` · `{total_avaliacoes}` | Nota e número de avaliações no Google | Hero, depoimentos | Troca pelo item "Medplan, Humana Saúde e Camed" |
| `{rt_medico_nome}` · `{rt_medico_crm}` | Responsável técnico médico | Rodapé, Sobre | **Preenchido:** Dra. Ludmilla Nery Custódio, CRM-PI 5888, RQE 2142 (vídeo institucional) |
| `{rt_odonto_nome}` · `{rt_odonto_cro}` | Responsável técnico odontológico | Rodapé, Sobre | Esconde a linha |
| `{nome_oficial}` | Nome do profissional como está no conselho | Corpo clínico | Usa o nome cadastrado |
| `{conselho_registro}` | Ex.: "CRM-PI 0000" | Corpo clínico, blog | Card não é publicado |
| `{rqe}` | RQE do médico especialista | Corpo clínico, blog | Especialidade não aparece |
| `{especialidade}` | Especialidade registrada | Corpo clínico, menus | Não aparece sem `{rqe}` (médico) ou registro no CRO (dentista) |
| `{dias_atendimento}` | Dias e horários por profissional | Perfis, cards | "Consulte os dias com a recepção." |
| `{publico_atendido}` | Crianças, adultos, idosos | Perfis | Esconde a linha |
| `{formacao}` · `{bio}` | Formação e texto aprovado pelo profissional | Perfis | Esconde o bloco |
| `{especialidades_ativas}` | Lista das especialidades com profissional atendendo | Menu, home | Item some do menu |
| `{cobertura_medplan}` · `{cobertura_humana}` · `{cobertura_camed}` | O que cada plano cobre na EmCORR | Convênios | "Consultas e exames conforme o seu plano." |
| `{formas_pagamento}` | Ex.: "Pix, cartão de débito e crédito" | Convênios | Esconde a linha |
| `{recibo_reembolso}` (sim/não) | A clínica emite recibo para reembolso? | Convênios | Esconde a pergunta |
| `{atende_sus}` (sim/não) | Atende pelo SUS? | Convênios, Particular ou SUS | Esconde a pergunta |
| `{aceita_pedido_externo}` (sim/não) | Aceita pedido médico de outro serviço? | Particular ou SUS, cidades | Esconde a pergunta |
| `{laboratorio_tipo}` | "laboratório próprio" ou "posto de coleta do laboratório parceiro" | Sobre, exames | Usa "coleta de exames de laboratório" |
| `{como_achar}` | Ponto conhecido perto da clínica | Home, contato | Esconde a frase |
| `{estacionamento}` · `{acessibilidade}` | Onde parar o carro; rampa, elevador | Home, contato, cidades | Esconde a linha |
| `{acesso_portal_lab}` · `{acesso_portal_imagem}` · `{acesso_portal_outros}` | Como entrar em cada portal | Resultados | "A recepção envia o acesso pelo WhatsApp." |
| `{resultado_impresso}` | Se e onde retirar o resultado em papel | Resultados | Esconde a pergunta |
| `{cidade_autor}` | Cidade de quem deu o depoimento | Depoimentos | Mostra só o nome |
| `{distancia_km}` · `{tempo_carro}` | Medidos pela clínica no Google Maps, por cidade | Cidades atendidas | Linha da cidade não é publicada |
| `{historia_fundacao}` | Texto da Dra. Ludmilla, aprovado por ela | Sobre | Usa o texto factual da seção 6 |
| `{encarregado_dados}` · `{email_privacidade}` | Encarregado LGPD | Privacidade | Bloqueia a publicação da página |
| `{politica_data}` · `{politica_versao}` | Controle da política | Privacidade | Bloqueia a publicação da página |
| `{retencao_pedidos_dias}` | Prazo para apagar pedidos não atendidos | Agendar, Privacidade | Bloqueia o formulário |
| `{ferramenta_analytics}` · `{provedores_tecnologia}` | Ex.: Vercel Web Analytics; Vercel e Supabase | Privacidade | Bloqueia a publicação da página |

### Conformidade aplicada a todo o texto (CFM 2.336/2023 · CFO)
- Nenhum superlativo sem prova: nada de "o melhor", "renomado", "moderno", "de última geração".
- Nenhuma promessa de resultado: nada de "cura", "garantido", "sem dor", "diagnóstico preciso".
- Odontologia: sem preço, sem antes e depois, sem "sorriso perfeito".
- Depoimento só com autorização por escrito e sem relato de melhora clínica.
- Nome e registro do responsável técnico no rodapé de todas as páginas.
- Especialidade médica só aparece junto de CRM e RQE. Sem isso, o nome aparece sem título de especialista.
- Nenhuma comparação com concorrentes nem com o SUS.
- "Sem precisar viajar" é permitido, porque é fato. "Sem fila", "rápido" e prazo de laudo só entram com dado do painel.

---

# PARTE 1: Diagnóstico

## 1.1 Copy atual (home)

| Elemento | Texto atual |
|---|---|
| Title | "EmCORR – Centro Clínico Refe·rência Em Corrente" |
| H1 | Não existe. Há dois H2 soltos com o mesmo autoelogio. |
| Subtítulo | "Atendimento Huma·nizado e Qualificado." |
| Hero | Banner de tomografia com o texto "aparelho moderno, excelente resolução, diagnóstico preciso de doenças" |
| Números | "0+ Anos de Experi·ência / 0 K+ Atendimentos / 0+ Profissionais" (a animação só roda com JavaScript) |
| Serviços | "Cuidados diligentes tomados para manter ou restaurar sua autonomia" + 6 cards "Ver Mais" |
| Depoimentos | 2 reais (Marta e Suele) + 1 texto de template |
| CTAs | "AGENDAR", "RESULTADOS", "Ver Mais", "Enviar" |
| Meta description | Não existe |

**Tipo de página:** home de clínica local. A conversão principal é abrir uma conversa no WhatsApp. As secundárias são o formulário e o acesso a resultados.

## 1.2 Perfil de voz (atual → meta)

| Dimensão (1–5) | Hoje | Meta | Como chegar lá |
|---|---|---|---|
| Formalidade | 3 | 3 | "Você" e "nós", sem gíria |
| Emoção | 3 | 3 | Calor na escolha de palavras, sem melodrama |
| Complexidade | 3 | 2 | Termo técnico traduzido na mesma frase |
| Humor | 1 | 1 | Saúde pede tom sério |
| Autoridade | 3, em adjetivos | 3, em fatos | Trocar adjetivo por CRM, ano, convênio e prazo |

Arquétipo: **Amigo + Guia** (BRAND-VOICE). O tom é o da recepcionista que conhece o paciente pelo nome: educada, segura e direta.

## 1.3 Nota da copy atual

```
Copy Score: 15/50 (30/100)
  Clareza:        4/10  diz que é clínica, mas não o que oferece nem para quem
  Persuasão:      2/10  nenhuma objeção respondida; autoelogio sem prova
  Especificidade: 2/10  sem horário, sem prazo, números zerados, cards genéricos
  Emoção:         4/10  a boa assinatura ("de quem você ama") está escondida no rodapé
  Ação:           3/10  "Agendar" leva a formulário com CPF; nenhum WhatsApp clicável
```

## 1.4 Proposta de valor

| Elemento | Conteúdo |
|---|---|
| Quem decide | A mãe, ou a filha que cuida dos pais, de Corrente e região |
| Problema | Viajar para fazer exame ou ver especialista, e marcar cada coisa num lugar diferente |
| O que a EmCORR resolve | Consulta médica, dentista, laboratório e exame de imagem no mesmo endereço, no centro de Corrente |
| Prova | Desde 2020 · 14 profissionais · 30 mil atendimentos · tomógrafo GE ACT Revolution · Medplan, Humana Saúde e Camed · CRM e CRO publicados |
| Próximo passo | Uma mensagem no WhatsApp (89) 9 9933-1133 |

## 1.5 Headlines do hero: 10 alternativas ranqueadas

| # | Headline | Ângulo | Uso |
|---|---|---|---|
| **1** | **Consulta, dentista e exame no mesmo endereço, aqui em Corrente.** | Funcional, o que tem + onde | **Variante A (controle)** |
| **2** | **Do pediatra à tomografia, a família inteira atendida no centro de Corrente.** | Amplitude, do filho aos pais | **Variante B** |
| **3** | **Cuidando de você e de quem você ama, com consulta e exame aqui em Corrente.** | Assinatura da marca + fato | **Variante C** |
| 4 | Tem pedido de exame? Faça aqui em Corrente, sem viajar. | Pergunta-gancho do Instagram | Página de exames, anúncio |
| 5 | Médico, dentista, laboratório e tomografia num endereço só, em Corrente-PI. | Lista concreta | Google Business, anúncio |
| 6 | 14 profissionais e 30 mil atendimentos no centro de Corrente, desde 2020. | Prova | Sobretítulo ou faixa de números |
| 7 | Tomografia em Corrente, com convênio ou particular. | Serviço-âncora | Anúncio de busca |
| 8 | Medplan, Humana Saúde, Camed ou particular: consulta e exame em Corrente. | Objeção do convênio | Anúncio para quem tem plano |
| 9 | Do teste do pezinho ao ecocardiograma dos avós, no mesmo endereço. | Fases da família | Campanha de Instagram |
| 10 | Resultado do exame no celular, consulta no centro de Corrente. | Conveniência | Fraca como H1; serve em post |

### Teste A/B/C do hero

| | Variante A (controle) | Variante B | Variante C |
|---|---|---|---|
| Sobretítulo | Centro Clínico em Corrente-PI · desde 2020 | Centro Clínico em Corrente-PI · desde 2020 | Centro Clínico em Corrente-PI · desde 2020 |
| H1 | Consulta, dentista e exame no mesmo endereço, aqui em Corrente. | Do pediatra à tomografia, a família inteira atendida no centro de Corrente. | Cuidando de você e de quem você ama, com consulta e exame aqui em Corrente. |
| Subtítulo | Atendemos Medplan, Humana Saúde, Camed e particular. Você marca pelo WhatsApp e a recepção confirma o horário. | Médicos, dentistas, laboratório e tomografia na Av. Getúlio Vargas, 471. Medplan, Humana Saúde, Camed e particular. | 14 profissionais, laboratório e tomografia no mesmo endereço. Medplan, Humana Saúde, Camed e particular. |
| CTA | Agendar pelo WhatsApp | Agendar pelo WhatsApp | Agendar pelo WhatsApp |

- **Hipótese:** A ganha de quem chega do Google com uma necessidade definida. B ganha de quem cuida de filho e de pai ao mesmo tempo. C ganha de quem já conhece a marca pelo Instagram.
- **Métrica principal:** `whatsapp_click` com `local=hero` dividido por visitantes da home. **Secundária:** rolagem até a seção 3.
- **Regra:** divisão 34/33/33, no mínimo 6 semanas ou 450 cliques no total, o que vier por último. Resultado segmentado por origem (Instagram × Google). O teste só começa com o rastreamento de cliques validado.

## 1.6 Antes e depois (5 pares)

**1. Headline**
- ANTES: "Centro Clínico Refe·rência Em Corrente"
- DEPOIS: "Consulta, dentista e exame no mesmo endereço, aqui em Corrente."
- POR QUÊ: o antes é autoelogio sem prova, vetado pelo CFM. O depois diz o que a pessoa encontra e onde.

**2. Subtítulo**
- ANTES: "Atendimento Huma·nizado e Qualificado."
- DEPOIS: "Atendemos Medplan, Humana Saúde, Camed e particular. Você marca pelo WhatsApp e a recepção confirma o horário."
- POR QUÊ: troca dois adjetivos por dois fatos. Responde "aceita meu convênio?" e "como eu marco?".

**3. CTA principal**
- ANTES: "AGENDAR" → formulário de 8 campos com CPF
- DEPOIS: "Agendar pelo WhatsApp" → conversa com mensagem pronta. Abaixo: "A recepção responde {horario_hoje}."
- POR QUÊ: o público já marca pelo WhatsApp. O botão diz o canal e a linha de apoio diz quando vem a resposta.

**4. Parágrafo de serviços**
- ANTES: "Cuidados diligentes tomados para manter ou restaurar sua autonomia"
- DEPOIS: "Escolha para quem é o atendimento. Cada grupo mostra as especialidades, os exames e quem atende."
- POR QUÊ: o antes parece tradução de template. O depois diz o que fazer na tela.

**5. Meta description**
- ANTES: (não existe; o Google mostra o texto do menu)
- DEPOIS: "Consulta, dentista, laboratório e tomografia no mesmo endereço, no centro de Corrente-PI. Medplan, Humana Saúde, Camed e particular. Agende pelo WhatsApp."
- POR QUÊ: cidade, serviços mais buscados, convênios e ação em 155 caracteres.

---

# PARTE 2: Elementos globais

## 2. Cabeçalho e menu

### Desktop
- Logo EmCORR (link para `/`, `aria-label="EmCORR – Centro Clínico, página inicial"`)
- Menu: **Especialidades** · **Exames** · **Corpo clínico** · **Convênios** · **Sobre** · **Blog**
- Botão contorno: **Ver meu resultado** → `/resultados`
- Botão cheio (vermelho): **Agendar pelo WhatsApp** → WhatsApp (mensagem "Genérico")

**Submenu Especialidades (3 colunas, itens gerados de `{especialidades_ativas}`):**
- *Crianças:* Pediatria · Odontopediatria · Fonoaudiologia
- *Adultos:* Cardiologia · Endocrinologia · Neurologia · Otorrinolaringologia · Dermatologia · Cirurgia geral · Psiquiatria
- *Dentes, corpo e mente:* Odontologia · Ortodontia · Nutrição · Psicologia · Fisioterapia
- Rodapé do submenu: "Ver todas as especialidades"
- Regra: a lista acima é a carga inicial, tirada do site atual. Especialidade sem profissional ativo no painel sai do menu sozinha.

**Submenu Exames:**
- *Laboratório:* Exames de sangue · Teste do pezinho · Toxicológico
- *Imagem:* Tomografia · Ultrassom · Raio-X · Mamografia
- *Coração:* Eletrocardiograma · Ecocardiograma · Holter · MAPA
- Rodapé do submenu: "Ver todos os exames"

### Mobile
- Barra superior: Logo · ícone WhatsApp (`aria-label="Agendar pelo WhatsApp"`) · botão **Menu**
- Menu aberto (tela cheia), nesta ordem:
  1. Botão cheio **Agendar pelo WhatsApp**
  2. Botão contorno **Ver meu resultado**
  3. Especialidades · Exames · Corpo clínico · Convênios · Vem de outra cidade? · Sobre · Blog · Contato
  4. Linha final: "Av. Getúlio Vargas, 471, Centro, Corrente-PI" · "Ligar: (89) 9 9933-1133"
- Botão fechar: "Fechar menu"

### Link de pular navegação
"Pular para o conteúdo"

---

## 3. Botão flutuante de WhatsApp e barra fixa inferior

### Desktop: botão flutuante (canto inferior direito)
- Ícone do WhatsApp + rótulo no hover: **"Agendar pelo WhatsApp"**
- `aria-label`: "Agendar pelo WhatsApp (abre o WhatsApp)"
- Balão, uma vez por sessão, depois de 20 s ou 50% de rolagem: **"Quer marcar uma consulta ou exame? A recepção responde por aqui."** Botão: "Fechar aviso".
- Fora do horário (calculado pelo painel): **"A recepção volta {horario_hoje}. Deixe sua mensagem e ela responde na ordem de chegada."**

### Mobile: barra fixa inferior (substitui o botão flutuante)
| Botão | Largura | Texto | Destino |
|---|---|---|---|
| Principal | 70% | **Agendar pelo WhatsApp** | wa.me com a mensagem da página atual |
| Secundário (contorno) | 30% | **Ligar** | `tel:+5589999331133` |

- Dentro de `/agendar`, a barra some enquanto um campo do formulário estiver em foco. Assim ela não cobre o teclado.
- A mensagem do WhatsApp segue a página. Em `/especialidades/pediatria`, sai a mensagem de pediatria (seção 20).

---

## 4. Rodapé

**Bloco 1: marca**
- Logo EmCORR
- **Cuidando de você e de quem você ama.**
- "Consulta, dentista e exame no centro de Corrente, desde 2020."

**Bloco 2: atendimento**
- **Endereço:** Av. Getúlio Vargas, 471, Centro, Corrente-PI, 64980-000 · link "Como chegar" (Google Maps)
- **WhatsApp e telefone:** (89) 9 9933-1133 (link wa.me e link tel:)
- **E-mail:** atendimento@emcorr.com.br
- **Horário:** {horario_semana} · {horario_sabado}

**Bloco 3: navegação**
Especialidades · Exames · Corpo clínico · Convênios · Resultados de exames · Vem de outra cidade? · Particular, convênio ou SUS · Blog · Sobre · Contato

**Bloco 4: redes**
Instagram @centro_clinico_emcorr · Facebook. Ícones discretos, com `aria-label` "EmCORR no Instagram" e "EmCORR no Facebook".

**Faixa legal (letra menor, sempre visível):**
> EmCORR – Centro Clínico · CNPJ 26.343.832/0001-02
> Responsável técnica: Dra. Ludmilla Nery Custódio · CRM-PI 5888 · RQE 2142
> Responsável técnico odontológico: {rt_odonto_nome} · {rt_odonto_cro}
> Em caso de emergência, ligue 192 (SAMU) ou vá ao pronto-socorro mais próximo.
> As informações deste site são educativas e não substituem a consulta.
> Política de privacidade · Termos de uso · © 2026 EmCORR

**Sem newsletter.** O FUNNEL-ANALYSIS recomenda tirar o campo de e-mail do rodapé.

---

# PARTE 3: Páginas

## 5. Home (`/`)

- **Title:** Clínica médica e odontológica em Corrente-PI | EmCORR
- **Meta description:** Consulta, dentista, laboratório e tomografia no mesmo endereço, no centro de Corrente-PI. Medplan, Humana Saúde, Camed e particular. Agende pelo WhatsApp.
- **og:title:** Consulta, dentista e exame no mesmo endereço, em Corrente
- **og:image:** fachada da clínica (foto aérea ao pôr do sol, original em alta) com o logo, 1200×630

### Seção 1: Hero
- **Sobretítulo:** Centro Clínico em Corrente-PI · desde 2020
- **H1 (A):** Consulta, dentista e exame no mesmo endereço, aqui em Corrente.
- **H1 (B):** Do pediatra à tomografia, a família inteira atendida no centro de Corrente.
- **H1 (C):** Cuidando de você e de quem você ama, com consulta e exame aqui em Corrente.
- **Subtítulo (A):** Atendemos Medplan, Humana Saúde, Camed e particular. Você marca pelo WhatsApp e a recepção confirma o horário.
- **Subtítulo (B):** Médicos, dentistas, laboratório e tomografia na Av. Getúlio Vargas, 471. Medplan, Humana Saúde, Camed e particular.
- **Subtítulo (C):** 14 profissionais, laboratório e tomografia no mesmo endereço. Medplan, Humana Saúde, Camed e particular.
- **CTA primário:** Agendar pelo WhatsApp
- **CTA secundário (link de texto):** Ver meu resultado
- **Microcopy abaixo do botão:** A recepção responde {horario_hoje}.
- **Linha de prova (3 itens com ícone):** Desde 2020 em Corrente · 14 profissionais · Nota {nota_google} no Google
  - Sem nota no painel, o 3º item vira "Medplan, Humana Saúde e Camed".
- **Imagem:** foto real da recepção com uma família sendo atendida (mãe, criança e avó, com termo de uso de imagem) ou a equipe na fachada. No mobile, a foto vai abaixo do texto. Alt: "Recepção da EmCORR, no centro de Corrente-PI". Sem foto de banco de imagens.

### Seção 2: Faixa de confiança
- **H2 (visualmente discreto):** Convênios aceitos
- **Logos (estáticos, sem carrossel):** Medplan · Humana Saúde · Camed · selo em texto "Particular"
- **Números (texto fixo no HTML, sem animação de contagem):**
  - **2020** · ano de abertura, na Av. Getúlio Vargas
  - **30 mil** · atendimentos registrados
  - **14** · profissionais no mesmo endereço
- **Link:** Ver convênios e o que levar

### Seção 3: Para quem é o atendimento
- **H2:** Para quem você está marcando?
- **Intro:** Escolha o grupo. Cada um mostra as especialidades, os exames e quem atende.

| Card | Título | Frase | Especialidades e exames (links) | CTA |
|---|---|---|---|---|
| 1 | **Crianças** | Consulta, dentista e os testes do recém-nascido no mesmo endereço. | Pediatria · Odontopediatria · Fonoaudiologia · Teste do pezinho, da orelhinha e da linguinha | Ver atendimento infantil |
| 2 | **Adultos** | Consulta com especialista e o exame pedido feito no mesmo prédio. | Cardiologia · Endocrinologia · Neurologia · Otorrino · Dermatologia · Cirurgia geral | Ver especialidades |
| 3 | **Mulheres** | Mamografia e ultrassom, inclusive o morfológico da gestação, sem viajar. | Mamografia · Ultrassonografia · Ultrassom morfológico | Ver exames |
| 4 | **Dentes** | Avaliação, aparelho e implante, com raio-X panorâmico e tomografia odontológica no local. | Odontologia · Ortodontia · Odontopediatria | Ver odontologia |
| 5 | **Corpo e mente** | Conversa em sala reservada, sob sigilo profissional. | Psicologia · Psiquiatria · Nutrição · Fisioterapia | Ver atendimentos |

- Cada card tem um ícone de WhatsApp com `aria-label` "Agendar para [grupo] pelo WhatsApp" e mensagem pronta (seção 20).
- Abaixo do título do card, em texto pequeno, os nomes dos profissionais da área, puxados do painel. Só entra quem tem `{conselho_registro}` preenchido.
- Os itens de cada card vêm de `{especialidades_ativas}`. Item sem profissional ativo some.
- **Imagem:** ícones de linha no vermelho da marca (set `emcorr-*.svg`). Sem fotos nesta seção.

### Seção 4: Consulta e exame no mesmo lugar
- **H2:** O exame que o médico pediu, feito aqui mesmo
- **Texto:** Laboratório, tomografia, ultrassom, raio-X e exames do coração ficam no mesmo prédio da consulta. Você faz o exame sem viajar e vê o resultado pelo celular.
- **Grade com 6 exames (link para cada página):**
  - **Exames de sangue** · Veja se precisa de jejum antes de vir.
  - **Tomografia** · Tomógrafo GE ACT Revolution, aqui em Corrente.
  - **Ultrassom** · Abdome, tireoide, pélvico, obstétrico e outros.
  - **Exames do coração** · Eletrocardiograma, ecocardiograma (o ultrassom do coração), Holter e MAPA.
  - **Raio-X** · Inclusive o panorâmico, que o dentista pede.
  - **Mamografia** · Com as orientações de preparo antes do exame.
- **Card de destaque (tomografia):**
  > **Tomografia computadorizada em Corrente**
  > Tomógrafo GE ACT Revolution · laudo em até {prazo_laudo_tc} · convênio e particular
  > Tem o pedido médico? Mande uma foto pelo WhatsApp. A recepção confirma o preparo e o horário.
  > [Agendar minha tomografia]
- **CTA primário:** Agendar meu exame
- **CTA secundário:** Ver preparo dos exames
- **Imagem:** foto real da sala de tomografia, sem paciente. Alt: "Sala de tomografia da EmCORR, com o tomógrafo GE ACT Revolution".

### Seção 5: Como funciona
- **H2:** Como marcar
- **Passo 1: Mande uma mensagem.** Diga o que precisa: consulta, dentista ou exame. Se tiver pedido médico, mande a foto.
- **Passo 2: A recepção confirma.** Você recebe o dia, o horário, o preparo e o que levar.
- **Passo 3: Você é atendido e vê o resultado online.** Quando o exame fica pronto, o resultado abre pelo celular.
- **CTA:** Agendar pelo WhatsApp
- **Linha de apoio:** Prefere que a recepção chame você? Preencha o formulário. (`/agendar`)
- **Prova (só com dado medido):** "No horário de atendimento, a recepção responde em cerca de {tempo_resposta}."

### Seção 6: Corpo clínico
- **H2:** Quem atende na EmCORR
- **Texto:** São 14 profissionais. Cada card mostra o registro no conselho e os dias de atendimento.
- **Cards (grade no desktop, rolagem horizontal no mobile):** foto · `{nome_oficial}` · `{especialidade}` · `{conselho_registro}` · `{rqe}` · link "Ver perfil"
- **CTA:** Ver todos os profissionais
- **Regra:** card sem `{conselho_registro}` não aparece. Especialidade médica sem `{rqe}` não aparece.
- **Imagem:** retratos reais, mesmo fundo e mesma luz. Alt do exemplo: "Dra. Ludmilla Nery, cardiologista, CRM-PI 5888, RQE 2142".

### Seção 7: Depoimentos
- **H2:** O que dizem os pacientes
- **Depoimentos (texto dos pacientes, com autorização por escrito):**
  > "É reconfortante saber que temos esse recurso para os moradores e visitantes de Corrente e região. Que Deus os abençoe e os direcione sempre."
  > Marta, {cidade_autor}

  > "Gratidão EmCORR e seus colaboradores por cuidar tão bem e com carinho dos meus entes queridos. Em especial, à minha mãe, que necessitou de um longo tratamento. Muito obrigada a cada um. Deus abençoe vocês."
  > Suele, {cidade_autor}

- **Novos depoimentos:** entram pelo painel, com a autorização anexada. A seção mostra até 6 aprovados.
- **Selo:** Nota {nota_google} no Google · {total_avaliacoes} avaliações → link "Ver avaliações no Google"
- **Nota da seção (pequena):** Depoimentos publicados com autorização dos pacientes.
- **Regras:** nenhum relato de melhora clínica ou diagnóstico. A linguagem do paciente fica como ele escreveu. O texto de template do site antigo sai.
- **Imagem:** fotos `marta.jpg` e `suele.jpg`, com autorização. Sem ela, inicial do nome em círculo.

### Seção 8: Sobre a EmCORR
- **H2:** Desde 2020 na Av. Getúlio Vargas, no centro de Corrente
- **Texto:** A EmCORR abriu para reunir em Corrente consulta, dentista e exame que antes pediam viagem. Hoje são 14 profissionais e 30 mil atendimentos registrados.
- **CTA:** Conhecer a clínica
- **Imagem:** Dra. Ludmilla Nery na fachada (pedir o original em alta). Alt: "Dra. Ludmilla Nery, cardiologista, CRM-PI 5888, RQE 2142, em frente à EmCORR".

### Seção 9: Perguntas frequentes
- **H2:** Perguntas frequentes
- Usar `<details>` + schema `FAQPage`.

**Quais convênios vocês aceitam?**
Medplan, Humana Saúde e Camed, e também particular. A cobertura muda de um plano para outro. Antes de vir, confirme pelo WhatsApp se a sua consulta ou exame está incluído. [Ver convênios]

**Como faço para agendar?**
Mande uma mensagem para (89) 9 9933-1133 dizendo o que precisa. A recepção confirma o dia e o horário. Se preferir, preencha o formulário do site e a recepção chama você.

**Qual é o horário de atendimento?**
{horario_semana}. {horario_sabado}. Os dias de cada profissional aparecem na página dele.

**Preciso de preparo para exame de sangue ou tomografia?**
Depende do exame. Alguns exames de sangue pedem jejum. A tomografia com contraste tem orientações próprias. Cada página de exame explica o preparo, e a recepção confirma quando você marca. [Ver exames]

**Como vejo o resultado do meu exame?**
Pelo celular. Na página Resultados, você escolhe o tipo de exame e o site mostra o portal certo e onde está sua senha. [Ver meu resultado]

**Vocês atendem pacientes de outras cidades?**
Sim, de Corrente e de toda a região. Pergunte pelo WhatsApp se dá para marcar consulta e exame no mesmo dia. O resultado sai online, então você não volta só para buscar. [Vem de outra cidade?]

- **CTA:** Não achou sua dúvida? Falar com a recepção

### Seção 10: Resultados de exames
- **H2:** Seu resultado já saiu?
- **Texto:** Veja pelo celular, sem vir à clínica. Escolha o tipo de exame:
- **3 cards (links para âncoras de `/resultados`):**
  - **Laboratório** · Sangue, urina, fezes, teste do pezinho
  - **Imagem** · Tomografia, raio-X, ultrassom, mamografia
  - **Outros exames** · Eletrocardiograma, Holter, MAPA, audiometria
- **CTA:** Ver meu resultado
- **Imagem:** nenhuma (faixa curta, fundo claro).

### Seção 11: Como chegar + CTA final
- **H2:** Av. Getúlio Vargas, 471, no centro de Corrente
- **Texto:** {como_achar}
- **Horário:** {horario_semana} · {horario_sabado}
- **Estacionamento e acessibilidade:** {estacionamento} · {acessibilidade}
- **CTA primário:** Agendar pelo WhatsApp
- **CTA secundário:** Traçar rota
- **Linha de convênios:** Medplan · Humana Saúde · Camed · Particular
- **Imagem:** mapa estático com link para o Google Maps, sem iframe (evita cookies de terceiros). Alt: "Mapa com a localização da EmCORR no centro de Corrente-PI".

### Seção 12: Rodapé
Ver seção 4.

---

## 6. Sobre (`/sobre`)

- **Title:** Sobre a EmCORR: centro clínico em Corrente desde 2020
- **Meta description:** A EmCORR atende em Corrente-PI desde 2020: 14 profissionais, consulta, dentista, laboratório e tomografia no mesmo endereço. Veja a estrutura e a equipe.
- **H1:** Sobre a EmCORR, centro clínico em Corrente
- **Breadcrumb:** Início › Sobre

**Abertura**
> A EmCORR abriu em 2020 na Av. Getúlio Vargas, 471, no centro de Corrente. Aqui você faz consulta médica, vai ao dentista e faz exames no mesmo endereço.

**H2: Como a clínica começou**
> Bloco alimentado por `{historia_fundacao}`: texto em primeira pessoa da Dra. Ludmilla Nery, gravado em conversa e aprovado por ela.
> Roteiro da conversa: (1) o que faltava em Corrente em 2020; (2) quais atendimentos havia na abertura; (3) quando chegaram a odontologia, o laboratório e o tomógrafo, com o ano de cada um; (4) um caso de família atendida que ela autorize contar, sem dado clínico.
> Assinatura do bloco: Dra. Ludmilla Nery, cardiologista · CRM-PI 5888 · RQE 2142

> **Texto enquanto o campo estiver vazio (só fatos):**
> A clínica abriu em 2020. Hoje são 14 profissionais e 30 mil atendimentos registrados. Consulta, dentista, laboratório e tomografia ficam no mesmo prédio, para a família não precisar viajar.

**H2: Por que a EmCORR existe**
- **O objetivo:** resolver o máximo possível num lugar só, para ninguém precisar viajar para fazer um exame.
- **Como a equipe trabalha:**
  - **Tempo para ouvir.** A consulta começa pela sua história.
  - **Próximo passo claro.** Você sai sabendo o exame, o preparo e o retorno.
  - **Sigilo.** O que você conta fica com a equipe que atende você.
  - **Perto de casa.** Especialista e exame sem sair de Corrente.

**H2: O que tem no prédio**
> No mesmo endereço, no centro de Corrente:
> - Consultórios médicos e odontológicos
> - Coleta de exames de laboratório ({laboratorio_tipo})
> - Tomografia computadorizada (GE ACT Revolution), raio-X, ultrassom e mamografia
> - Exames do coração, do ouvido e da respiração
> - {acessibilidade}

**H2: A equipe**
> 14 profissionais, cada um com o registro do conselho publicado ao lado do nome. [Ver todos os profissionais]

**H2: Responsável técnico**
> Responsável técnico médico: {rt_medico_nome} · {rt_medico_crm}. Responsável técnico odontológico: {rt_odonto_nome} · {rt_odonto_cro}.

**CTA final**
- **H2:** Como chegar
- **Texto:** Av. Getúlio Vargas, 471, Centro de Corrente. Veja no mapa.
- **Botões:** Traçar rota · Agendar pelo WhatsApp

**Imagens:** foto aérea da fachada ao pôr do sol (pedir o original); Dra. Ludmilla na fachada; equipe reunida; recepção; sala de tomografia sem paciente.

---

## 7. Corpo clínico

### 7.1 Índice (`/corpo-clinico`)
- **Title:** Médicos e dentistas da EmCORR em Corrente-PI
- **Meta description:** Veja os profissionais da EmCORR em Corrente-PI, com registro no conselho publicado e os dias de atendimento. Escolha com quem marcar e agende pelo WhatsApp.
- **H1:** Profissionais da EmCORR em Corrente
- **Intro:** Médicos, dentistas e psicóloga que atendem no mesmo endereço. O registro no conselho aparece ao lado de cada nome.
- **Filtro (chips):** Todos · Crianças · Coração · Hormônios · Ouvido, nariz e garganta · Dentes · Mente · Nutrição · Outras áreas
- **Card:** foto · `{nome_oficial}` · `{especialidade}` · `{conselho_registro}` · `{rqe}` · `{dias_atendimento}` · botões "Ver perfil" e "Agendar"

**Cadastro atual no painel:**

| Nome | Linha publicada | Registro | Dias | Nota interna (não publicar) |
|---|---|---|---|---|
| Dra. Ludmilla Nery | Cardiologista | CRM-PI 5888 · RQE 2142 | `{dias_atendimento}` | Pronto para publicar |
| Dr. Igor Rafael | Cirurgião-dentista · atua em ortodontia e implantodontia | CRO-PI 2031 | `{dias_atendimento}` | Se ortodontia e implantodontia estiverem registradas no CRO, o painel troca "atua em" por "especialista em" |
| Dra. Thalma Muniz | `{especialidade}` | `{conselho_registro}` · `{rqe}` | `{dias_atendimento}` | Área informada: endocrinologia |
| Dra. Osyanne Timóteo | `{especialidade}` | `{conselho_registro}` · `{rqe}` | `{dias_atendimento}` | Área informada: otorrino |
| Dr. Danilo Lustosa | `{especialidade}` | `{conselho_registro}` · `{rqe}` | `{dias_atendimento}` | Área informada: ortopedia e traumatologia |
| Dr. Dhiogo Melo | `{especialidade}` | `{conselho_registro}` · `{rqe}` | `{dias_atendimento}` | Médico; grafia em `{nome_oficial}` |
| Dr. Jeam Félix | `{especialidade}` | `{conselho_registro}` · `{rqe}` | `{dias_atendimento}` | Médico |
| Dr. Jordão Aires | `{especialidade}` | `{conselho_registro}` · `{rqe}` | `{dias_atendimento}` | Médico; grafia em `{nome_oficial}` |
| Dr. Vinícius Coelho | `{especialidade}` | `{conselho_registro}` · `{rqe}` | `{dias_atendimento}` | Médico |
| Dra. Mariana Vargas | `{especialidade}` | `{conselho_registro}` | `{dias_atendimento}` | Dentista |
| Anaeliza Petersen | `{especialidade}` | `{conselho_registro}` | `{dias_atendimento}` | Psicóloga (CRP) |

- **Regra de publicação:** sem `{conselho_registro}`, o card e o perfil não vão ao ar. Com CRM e sem RQE, o médico aparece como "Médico(a)", sem título de especialista (CFM 2.336/2023).
- **"Clínico geral":** só com RQE de Clínica Médica.
- **CTA final:** Não sabe com quem marcar? Diga à recepção o que você precisa. Ela indica o profissional. [Falar com a recepção]
- **Imagem:** grade de retratos reais, mesmo fundo neutro.

### 7.2 Template de perfil (`/corpo-clinico/[slug]`)
- **Title:** `{nome_oficial}, {especialidade} em Corrente-PI`
  - Exemplo: "Dra. Ludmilla Nery, cardiologista em Corrente-PI" (49 caracteres)
- **Meta description:** `{especialidade} · {conselho_registro} · RQE {rqe}. Atende na EmCORR, em Corrente-PI, {dias_atendimento}. Veja formação e agende pelo WhatsApp.`
- **Breadcrumb:** Início › Corpo clínico › `{nome_oficial}`
- **H1:** `{nome_oficial}`
- **Linha abaixo do H1:** `{especialidade}` · `{conselho_registro}` · `RQE {rqe}`

**Bloco "Atende na EmCORR"**
- **Dias e horários:** `{dias_atendimento}`
- **Atende:** `{publico_atendido}`
- **Convênios:** Medplan, Humana Saúde, Camed e particular (conforme o cadastro do profissional)
- **Botão:** Agendar com `{nome_oficial}` (mensagem "Profissional", seção 20)

**H2: Sobre `{nome_oficial}`**
> `{bio}`: 60 a 120 palavras, escritas ou aprovadas pelo profissional. Roteiro: onde se formou, residência ou especialização, desde quando atende em Corrente, como conduz a consulta.
> Tom de exemplo: "Na consulta, gosto de ouvir a história inteira antes de pedir qualquer exame. O paciente sai sabendo o que vai acontecer."

**H2: Formação** (lista vinda de `{formacao}`)
- Graduação · instituição · ano
- Residência ou especialização · instituição
- Título de especialista · sociedade

**H2: O que atende** (4 a 8 itens, na língua do paciente, sem promessa)
- Exemplo em cardiologia: "Pressão alta", "Palpitação e cansaço ao subir escada", "Avaliação antes de cirurgia (risco cirúrgico)", "Acompanhamento de quem já tem doença do coração".

**H2: Exames feitos aqui** (links automáticos pela relação especialidade–exame)

**H2: Especialidade** → link para `/especialidades/[slug]`

**CTA final:** Quer marcar com `{nome_oficial}`? [Agendar pelo WhatsApp]

- **Sem dias cadastrados:** "Consulte os dias de atendimento com a recepção." + botão WhatsApp.
- **Imagem:** retrato, ombros para cima, fundo neutro. Alt: "`{nome_oficial}`, `{especialidade}`, `{conselho_registro}`".
- **Vetado no perfil:** "renomado", "o melhor", número de pacientes curados, antes e depois, preço de procedimento.

---

## 8. Convênios (`/convenios`)

- **Title:** Convênios aceitos na EmCORR em Corrente-PI
- **Meta description:** A EmCORR atende Medplan, Humana Saúde, Camed e particular em Corrente-PI. Veja o que levar no dia, como confirmar a cobertura e agende pelo WhatsApp.
- **H1:** Convênios aceitos na EmCORR, em Corrente
- **Intro:** Medplan, Humana Saúde, Camed e particular. Veja como usar o seu plano e o que levar no dia.

**Cards (um por convênio):**
| Convênio | Texto |
|---|---|
| **Medplan** | {cobertura_medplan} |
| **Humana Saúde** | {cobertura_humana} |
| **Camed** | {cobertura_camed} |
| **Particular** | Qualquer consulta ou exame, sem plano. Pergunte o valor pelo WhatsApp antes de marcar. Formas de pagamento: {formas_pagamento}. |

- Botão em cada card: Confirmar meu convênio

**H2: Como usar seu convênio**
1. **Mande uma mensagem** com o nome do plano e o que você precisa.
2. **A recepção confirma a cobertura.** Se o plano pedir autorização, ela explica como pedir.
3. **No dia, traga** a carteirinha, um documento com foto e o pedido médico (para exame).

**H2: O que levar no dia**
- Carteirinha do convênio (física ou no aplicativo)
- Documento com foto
- Pedido médico, se for fazer exame
- Exames anteriores sobre o mesmo problema, se tiver

**H2: Perguntas frequentes**
- **Meu convênio não está na lista. Posso ser atendido?** Sim, como particular. {recibo_reembolso = sim → "Se o seu plano reembolsa, peça o recibo na recepção."}
- **Todo exame é coberto pelo meu plano?** Depende do plano. Por isso, confirme pelo WhatsApp antes de vir.
- **Preciso de autorização prévia?** Alguns exames pedem. A recepção avisa quando for o caso e explica como pedir.
- **A EmCORR atende pelo SUS?** {atende_sus = não → "Não. Atendemos por convênio e particular. Para comparar as opções, veja o guia Particular, convênio ou SUS."}

- **CTA final:** Confirmar meu convênio pelo WhatsApp
- **Imagem:** logos vetoriais dos convênios. Nenhuma foto.

---

## 9. Resultados (`/resultados`)

- **Title:** Resultado de exames EmCORR: acesse online
- **Meta description:** Veja o resultado dos seus exames da EmCORR pelo celular: laboratório, imagem e outros. Saiba qual portal usar, onde está a senha e como pedir ajuda.
- **H1:** Resultado do seu exame
- **Intro:** Escolha o tipo de exame que você fez. Mostramos o portal certo e onde está sua senha.
- **Nota de privacidade (logo abaixo):** O site da EmCORR não pede nem guarda seus dados. Ele só leva você ao portal onde o resultado está.

**H2: Que exame você fez?**

**Card 1: Laboratório**
- Exemplos: sangue, urina, fezes, teste do pezinho, toxicológico
- **Como entrar:** {acesso_portal_lab}
- **Prazo:** {prazo_resultado}
- **Botão:** Abrir portal do laboratório (`emcorr.uniexames.com.br`, abre em nova aba)

**Card 2: Imagem (radiologia)**
- Exemplos: tomografia, raio-X, ultrassom, mamografia
- **Como entrar:** {acesso_portal_imagem}
- **Aviso:** O portal de imagem se chama "Entrega de Exames". É o sistema que a EmCORR usa para os laudos de radiologia.
- **Prazo:** {prazo_resultado}
- **Botão:** Abrir portal de imagem (`entregadeexames.com.br`, abre em nova aba)

**Card 3: Outros exames**
- Exemplos: eletrocardiograma, Holter, MAPA, ecocardiograma, audiometria, espirometria
- **Como entrar:** {acesso_portal_outros}
- **Prazo:** {prazo_resultado}
- **Botão:** Abrir portal EmCORR (`resultados.emcorr.com.br`, abre em nova aba)

**H2: Não encontrou seu resultado?**
> Ele pode não estar pronto, ou a senha pode ter se perdido. Mande uma mensagem com seu nome completo e a recepção ajuda.
> [Não encontrei meu resultado] (WhatsApp, mensagem "Resultados")

**H2: Perguntas frequentes**
- **Perdi minha senha. O que faço?** Mande seu nome completo pelo WhatsApp. Por segurança, a recepção confirma alguns dados antes de enviar o acesso.
- **Posso ver o resultado de um familiar?** `[[REVISÃO JURÍDICA: regra para menores e responsáveis]]` Para exame de criança, use o acesso entregue ao responsável no dia.
- **Preciso levar o resultado ao médico?** Sim. Leve o laudo impresso ou no celular na consulta de retorno. Quem interpreta o resultado é o médico que pediu o exame.
- **Tem resultado impresso?** {resultado_impresso}

- **Imagem:** nenhuma. Três cards com ícones (tubo de ensaio, imagem, coração).

---

## 10. Agendar (`/agendar`)

- **Title:** Agendar consulta ou exame na EmCORR em Corrente-PI
- **Meta description:** Marque consulta, dentista ou exame na EmCORR, em Corrente-PI, pelo WhatsApp (89) 9 9933-1133 ou pelo formulário. A recepção confirma dia, horário e preparo.
- **H1:** Agendar consulta ou exame na EmCORR
- **Intro:** Escolha o canal. A recepção confirma o dia, o horário e o preparo.

### Bloco de escolha (dois cards lado a lado; no mobile, um sobre o outro)
| Card | Título | Texto | Botão |
|---|---|---|---|
| 1 (destaque) | **Pelo WhatsApp** | Você conversa direto com a recepção e já sai com o horário. | Agendar pelo WhatsApp |
| 2 | **Pelo formulário** | Deixe seu contato e a recepção chama você. | Preencher o formulário |

Linha abaixo: Prefere ligar? (89) 9 9933-1133 · {horario_semana}

### Formulário
**Título (H2):** Deixe seu contato e a recepção chama você

| # | Rótulo | Tipo | Obrig. | Ajuda / placeholder |
|---|---|---|---|---|
| 1 | **Seu nome** | texto, `autocomplete="name"` | sim | Placeholder: "Como prefere ser chamado?" |
| 2 | **WhatsApp com DDD** | tel, `inputmode="tel"`, máscara | sim | Placeholder: "(89) 9 0000-0000" · Ajuda: "A recepção vai falar com você por este número." |
| 3 | **O que você quer marcar?** | select agrupado (Consultas · Odontologia · Exames de laboratório · Exames de imagem · Outros exames · "Ainda não sei") | sim | Primeira opção: "Escolha uma opção" (sem valor). Vem preenchido quando a pessoa chega de uma página de serviço. |
| 4 | **Convênio ou particular?** | rádio | sim | "Particular" · "Medplan" · "Humana Saúde" · "Camed" · "Ainda não sei" |
| 5 | **Melhor período** | rádio | não | "Manhã" · "Tarde" · "Tanto faz" |
| 6 | **É para uma criança?** | checkbox | não | Rótulo: "Sim, é para uma criança" · Ajuda: "A recepção já separa o horário certo." |

**Aviso fixo acima do botão (caixa em destaque, ícone de cadeado):**
> **Não escreva sintomas, diagnósticos ou resultados de exames aqui.** Você conta isso no atendimento, com sigilo.

**Consentimento (checkbox desmarcado, obrigatório):** `[[REVISÃO JURÍDICA]]`
> ☐ Autorizo a EmCORR a usar meu nome e meu WhatsApp para responder a este pedido, conforme a [Política de Privacidade](/privacidade).

**Linha pequena abaixo do consentimento:**
> Seus dados servem só para responder este pedido. Se o atendimento não acontecer, eles são apagados em até {retencao_pedidos_dias} dias.

**Botões:**
- Primário: **Enviar e continuar no WhatsApp** (abre o WhatsApp com a mensagem montada e grava o pedido, se houver consentimento)
- Secundário (link): **Prefiro que me chamem** (só grava e mostra a confirmação)
- `[[DECISÃO TÉCNICA: o FUNNEL-ANALYSIS sugere que, no celular, o caminho padrão abra o WhatsApp sem gravar no servidor. Nesse caso, o botão primário vira "Continuar no WhatsApp" e o consentimento só é exigido em "Prefiro que me chamem".]]`

**Mensagem montada no WhatsApp:**
`Olá, meu nome é {nome}. Quero marcar {serviço}. Atendimento: {particular/convênio}. Melhor período: {período}. [site-form]`

### Mensagens de validação (abaixo de cada campo, com `aria-live="polite"`)
| Campo | Situação | Mensagem |
|---|---|---|
| Nome | vazio | Escreva seu nome para a recepção saber com quem vai falar. |
| Nome | 1 letra | Escreva seu nome completo ou como prefere ser chamado. |
| WhatsApp | vazio | Informe seu WhatsApp com DDD. |
| WhatsApp | incompleto | Confira o número. Ele precisa ter DDD e 9 dígitos, como (89) 9 9933-1133. |
| Serviço | não escolhido | Escolha o que quer marcar. Se não souber, marque "Ainda não sei". |
| Atendimento | não escolhido | Diga se é particular ou convênio. Se não souber, marque "Ainda não sei". |
| Consentimento | desmarcado | Para responder, a recepção precisa da sua autorização. Marque a caixa acima. |
| Resumo no topo (mais de um erro) | — | Faltam algumas informações. Confira os campos marcados em vermelho. |

### Estados do envio
- **Enviando (botão):** Enviando...
- **Sucesso (substitui o formulário ou vai para `/obrigado`):**
  > **Pedido recebido, {primeiro nome}.**
  > A recepção vai chamar você no WhatsApp {número digitado}, {horario_hoje}. No horário de atendimento, a resposta costuma vir em cerca de {tempo_resposta}.
  > Quer adiantar? [Chamar a recepção agora] (mensagem "Obrigado")
  > Enquanto isso: [Ver preparo do exame] (se o serviço for exame) · [Como chegar]
- **Erro de servidor:**
  > O pedido não foi enviado. Seus dados continuam no formulário: tente de novo ou fale direto com a recepção. [Tentar de novo] [Agendar pelo WhatsApp]
- **Sem internet:**
  > A conexão caiu. Confira sua internet e toque em "Tentar de novo".
- **Muitos envios (limite anti-spam):**
  > Este aparelho enviou vários pedidos em pouco tempo. Espere alguns minutos ou chame a recepção pelo WhatsApp.
- **Honeypot:** campo oculto com rótulo "Deixe este campo em branco" (`aria-hidden`, fora da tela).

### Página `/obrigado` (noindex)
- **Title:** Pedido recebido | EmCORR
- **H1:** Pedido recebido
- Texto igual ao estado de sucesso acima.
- **CTA primário:** Adiantar pelo WhatsApp
- **CTA secundário:** Voltar para o início

### FAQ curta da página
- **O horário já fica marcado quando envio o formulário?** Ainda não. O formulário é um pedido de contato. A consulta ou o exame só ficam marcados quando a recepção confirma com você.
- **Por que não pedem CPF aqui?** Porque não é preciso para pedir um horário. Se o convênio ou o exame exigir, a recepção pede na confirmação.
- **Posso marcar para outra pessoa?** Sim. Coloque o seu nome e o seu WhatsApp e, na conversa, diga para quem é.

- **Imagem:** foto da recepção (atendente ao telefone ou ao computador, com autorização). No mobile, nenhuma imagem acima do formulário.

---

## 11. Contato (`/contato`)

- **Title:** Contato, endereço e horário da EmCORR em Corrente-PI
- **Meta description:** Av. Getúlio Vargas, 471, Centro, Corrente-PI. WhatsApp (89) 9 9933-1133. Veja horário de atendimento, mapa e como chegar à EmCORR.
- **H1:** Contato da EmCORR em Corrente
- **Intro:** A clínica fica no centro de Corrente. Pelo WhatsApp, a recepção marca horário, tira dúvidas e ajuda com resultados.

**Cards de contato (cada um clicável):**
| Card | Texto | Ação |
|---|---|---|
| **WhatsApp** | (89) 9 9933-1133 · agendamento, dúvidas e resultados | Chamar no WhatsApp |
| **Telefone** | (89) 9 9933-1133 | Ligar agora |
| **E-mail** | atendimento@emcorr.com.br · assuntos administrativos, empresas e parcerias | Enviar e-mail |
| **Endereço** | Av. Getúlio Vargas, 471, Centro, Corrente-PI, 64980-000 | Traçar rota |

**H2: Horário de atendimento**
- {horario_semana}
- {horario_sabado}
- Domingo e feriados: {horario_domingo_feriado}
- Coleta de laboratório: {horario_coleta}

**H2: Como chegar**
> {como_achar} {estacionamento} {acessibilidade}
> Vem de outra cidade? [Veja como organizar a viagem](/cidades-atendidas)

**Mapa:** imagem estática com link para o Google Maps. Alt: "Mapa da EmCORR na Av. Getúlio Vargas, 471, Centro, Corrente-PI".

**Aviso:** Em caso de emergência, ligue 192 (SAMU) ou vá ao pronto-socorro mais próximo.

**CTA final:** Quer marcar? [Agendar pelo WhatsApp] · [Preencher o formulário]
- Sem formulário próprio nesta página. Um formulário só para o mesmo objetivo.
- **Imagem:** fachada vista da rua, para quem vem de fora reconhecer o prédio. Alt: "Fachada da EmCORR na Av. Getúlio Vargas, 471".

---

## 12. Particular, convênio ou SUS (`/particular-ou-sus`)

> **Página de decisão, neutra.** Ajuda a pessoa a escolher, sem depreciar o SUS, sem prometer prazo e sem comparar qualidade. Não anunciar esta página ("SUS" é palavra negativa nos anúncios).

- **Title:** Particular, convênio ou SUS: como escolher | EmCORR
- **Meta description:** Vai fazer consulta ou exame e não sabe se usa o SUS, o convênio ou paga particular? Veja o que pesar em cada caso, em linguagem simples, e tire dúvidas.
- **H1:** Particular, convênio ou SUS: como escolher onde fazer consulta ou exame
- **Breadcrumb:** Início › Particular, convênio ou SUS

**Resposta direta (primeiro parágrafo):**
> As três opções são válidas. O SUS é gratuito e atende todas as pessoas. O convênio cobre o que está no seu plano. No particular, você paga e escolhe dia, horário e profissional. A escolha depende do seu caso, do seu orçamento e do prazo que você tem.

**H2: Primeiro: é emergência?**
> Se for, não espere agendamento. Ligue 192 (SAMU) ou vá ao pronto-socorro mais próximo. Esta página é para consultas e exames marcados.

**H2: O SUS**
> O SUS é um direito de todos e oferece consulta, exame e tratamento sem custo. O caminho começa na unidade básica de saúde do seu bairro, que encaminha quando precisa. Leve o Cartão SUS e um documento com foto.

**H2: O convênio**
> Se você tem plano de saúde, confira se a consulta ou o exame estão cobertos. A EmCORR atende Medplan, Humana Saúde e Camed. Alguns exames pedem autorização do plano antes.
> [Ver convênios aceitos]

**H2: O particular**
> Muita gente paga a consulta ou o exame para marcar num horário que encaixe na rotina, escolher o profissional ou fazer consulta e exame no mesmo lugar. O valor muda de um serviço para outro. Pergunte antes de marcar.

**H2: Perguntas para decidir** (tabela)
| Pergunta | Se a resposta for "sim" |
|---|---|
| O custo pesa muito agora? | O SUS é o caminho sem custo. Procure a unidade de saúde do seu bairro. |
| Você já tem plano de saúde? | Confira se o serviço está coberto antes de pagar. |
| Precisa de um dia ou horário específico? | Convênio e particular costumam deixar você escolher o horário. |
| Vem de outra cidade e quer resolver tudo numa viagem? | Pergunte à clínica se dá para fazer consulta e exame no mesmo dia. |
| Já tem o pedido médico? | Com o pedido em mãos, a clínica informa preparo e prazo. |

**H2: O pedido médico do SUS vale na EmCORR?**
> {aceita_pedido_externo = sim → "Sim. Para exame particular, a EmCORR aceita pedido médico de qualquer serviço de saúde, público ou privado, se estiver legível e dentro da validade."} `[[REVISÃO ÉTICA]]`

**H2: Como é na EmCORR**
> {atende_sus = não → "A EmCORR é uma clínica particular que atende convênios. Não atende pelo SUS."} Se decidir fazer aqui, a recepção informa pelo WhatsApp o valor, o preparo e o prazo do resultado antes de você vir.

**FAQ (schema FAQPage):**
- **Particular é melhor do que o SUS?** Não se trata de melhor ou pior. São formas diferentes de acesso. A escolha depende do seu orçamento, do seu plano e do prazo que você tem.
- **Posso começar pelo SUS e fazer um exame no particular?** Sim. Leve o resultado para o médico que acompanha você.
- **Quanto custa uma consulta ou exame particular na EmCORR?** Os valores mudam por serviço. Pergunte pelo WhatsApp antes de marcar.

**CTA final (discreto):**
> Ficou alguma dúvida? A recepção explica valores, convênios e preparo antes de você decidir. [Tirar dúvidas pelo WhatsApp]

- **Imagem:** ilustração simples de três caminhos (sem logos, sem pessoas), ou nenhuma.
- **Revisão:** `[[REVISÃO ÉTICA: o responsável técnico valida o texto antes de publicar]]`
- **Vetado nesta página:** "fila do SUS", "demora", "sem esperar", "qualidade superior", nome de hospital público.

---

## 13. Cidades atendidas (`/cidades-atendidas`)

- **Title:** Pacientes de Corrente e região sul do Piauí | EmCORR
- **Meta description:** Vem de Cristalândia, Parnaguá, Gilbués, Riacho Frio ou da Bahia? Veja como organizar a viagem para consulta e exame na EmCORR e ver o resultado online.
- **H1:** Vem de outra cidade para a EmCORR, em Corrente?
- **Intro:** Pacientes de toda a região vêm à EmCORR. Para a viagem render, confirme antes pelo WhatsApp o horário, o preparo e o que levar.

**H2: Como aproveitar a viagem**
1. **Confirme antes de sair de casa.** A recepção confirma o horário, o preparo (jejum, por exemplo) e o valor ou a cobertura do plano.
2. **Traga tudo de uma vez:** documento com foto, carteirinha do convênio, pedido médico e exames anteriores.
3. **Tente resolver numa viagem só.** Pergunte se dá para marcar consulta e exame no mesmo dia.
4. **Não volte só para buscar resultado.** Ele sai pela internet. [Ver como acessar]

**H2: De onde vêm os pacientes**
Tabela. Só vai ao ar a linha com distância medida pela clínica no Google Maps.

| Cidade | Distância até a EmCORR | Tempo de carro |
|---|---|---|
| Cristalândia do Piauí (PI) | {distancia_km} | {tempo_carro} |
| Sebastião Barros (PI) | {distancia_km} | {tempo_carro} |
| Parnaguá (PI) | {distancia_km} | {tempo_carro} |
| Riacho Frio (PI) | {distancia_km} | {tempo_carro} |
| Gilbués (PI) | {distancia_km} | {tempo_carro} |
| Monte Alegre do Piauí (PI) | {distancia_km} | {tempo_carro} |
| Barreiras do Piauí (PI) | {distancia_km} | {tempo_carro} |
| Júlio Borges (PI) | {distancia_km} | {tempo_carro} |
| Avelino Lopes (PI) | {distancia_km} | {tempo_carro} |
| Curimatá (PI) | {distancia_km} | {tempo_carro} |
| Formosa do Rio Preto (BA) | {distancia_km} | {tempo_carro} |

- Cidade sem fluxo real de pacientes: a clínica desmarca no painel e a linha some.

**Parágrafo corrido (SEO local, sem lista de palavras-chave):**
> A EmCORR atende famílias de Corrente e de cidades vizinhas como Cristalândia do Piauí, Sebastião Barros, Parnaguá, Riacho Frio, Gilbués e Formosa do Rio Preto, na Bahia. Muitas vêm para consulta com especialista, tomografia, ultrassom e exame de laboratório.

**H2: O que mais procuram os pacientes de fora**
Tomografia · Ultrassom · Exames de sangue · Exames do coração · Pediatria · Ortodontia (cada item com link; ordem definida no painel)

**H2: Dicas para o dia**
- Coleta de laboratório: {horario_coleta}. Se o exame pede jejum, marque para cedo.
- Onde parar o carro: {estacionamento}
- Acessibilidade: {acessibilidade}

**FAQ:**
- **Dá para fazer consulta e exame no mesmo dia?** Depende do exame e da agenda do profissional. Pergunte pelo WhatsApp antes de viajar.
- **Preciso voltar para pegar o resultado?** Não. O resultado sai pela internet. Veja [como acessar].
- **Vocês aceitam pedido médico de outra cidade?** {aceita_pedido_externo = sim → "Sim, se estiver legível e dentro da validade."}

**CTA final:** Organizar minha vinda → mensagem: "Olá, moro em ____ e quero marcar ____. Podem me ajudar a organizar a viagem? [site-cidades]"

- **Imagem:** foto aérea da EmCORR com a serra ao fundo (já existe). Alt: "Vista aérea da EmCORR, em Corrente-PI".
- **Páginas de cidade individuais:** só quando houver conteúdo próprio (distância medida, serviços procurados, depoimento de morador). Ver SEO-AUDIT 2.2.

---

## 14. Blog

### 14.1 Índice (`/blog`)
- **Title:** Blog de saúde da EmCORR: dicas para a família
- **Meta description:** Exames, saúde das crianças, coração, dentes e alimentação explicados por profissionais da EmCORR, em Corrente-PI. Cada artigo traz autor e registro.
- **H1:** Blog de saúde da EmCORR
- **Intro:** Respostas para as dúvidas que mais chegam à recepção, escritas e revisadas por profissionais da EmCORR.
- **Filtro de categorias (chips):** Todos · Família e crianças · Coração e metabolismo · Exames explicados · Mente e nutrição · Saúde bucal
- **Card do post:** imagem · categoria · título · resumo de 1 linha · "Por {autor_nome} · {autor_registro}" · data · "Ler artigo"
- **Post em destaque (topo):** o mais recente da Onda 1 (ex.: "Tomografia em Corrente: como marcar, preparo e prazo do laudo").
- **Aviso fixo (rodapé do índice):** Os artigos são educativos e não substituem a consulta.
- **Estado vazio:** ver seção 18.

### 14.2 Categorias (`/blog/categoria/[slug]`)
Title padrão: `[Categoria]: artigos de saúde | EmCORR`

| Slug | H1 | Descrição (topo da página) | Meta description |
|---|---|---|---|
| `familia-e-criancas` | Família e crianças | Do teste do pezinho à adolescência: o que observar em cada fase, quando levar ao pediatra e como preparar a criança para o exame. | Saúde do bebê e da criança, testes do recém-nascido e cuidados em casa, explicados por profissionais da EmCORR, em Corrente-PI. Leia e compartilhe. |
| `coracao-e-metabolismo` | Coração e metabolismo | Pressão, colesterol, diabetes e tireoide em linguagem simples, com os exames que acompanham cada um. | Pressão alta, diabetes, tireoide e colesterol explicados por profissionais da EmCORR, em Corrente-PI. Entenda seus exames e quando marcar consulta. |
| `exames-explicados` | Exames explicados | Para que serve cada exame, como se preparar e o prazo do resultado na EmCORR. | Preparo, duração e prazo de tomografia, ultrassom, exames de sangue e outros, explicados pela equipe da EmCORR, em Corrente-PI. Veja antes de marcar. |
| `mente-e-nutricao` | Mente e nutrição | Ansiedade, sono e alimentação, com orientação de quem atende esses casos toda semana. | Saúde mental e alimentação para a família: artigos de psicólogos, psiquiatras e nutricionistas da EmCORR, em Corrente-PI. Leia e compartilhe. |
| `saude-bucal` | Saúde bucal | Do primeiro dente ao aparelho: cuidado em casa, quando ir ao dentista e como cada tratamento funciona. | Cuidado com os dentes de crianças e adultos, aparelho ortodôntico e prevenção, explicados por dentistas da EmCORR, em Corrente-PI. Leia e compartilhe. |

- **CTA no fim de cada categoria:** Família e crianças → "Agendar pediatra"; Saúde bucal → "Agendar avaliação odontológica"; Exames explicados → "Agendar meu exame"; demais → "Agendar pelo WhatsApp".
- **Regra de conteúdo:** autor e revisor com registro no conselho, data de revisão, resposta direta nas primeiras 60 palavras, caixa "Na EmCORR" com prazo e convênio, sem promessa de resultado. Saúde bucal: sem preço e sem antes e depois.
- **Imagem:** ícone da categoria no vermelho da marca. Posts com foto real da clínica ou ilustração.

### 14.3 Template do post (microcopy)
- Linha do autor: "Escrito por {autor_nome}, {autor_especialidade} · {autor_registro}"
- Linha de revisão: "Revisado em {data_revisao}"
- Índice: "Neste artigo"
- Caixa "Na EmCORR": "**Na EmCORR:** {servico} com Medplan, Humana Saúde, Camed e particular. Prazo do resultado: {prazo_resultado}. [Agendar pelo WhatsApp]"
- Fim do post: "Este conteúdo é educativo e não substitui a consulta. Se tiver sintomas, procure um profissional de saúde."
- Relacionados: "Leia também"
- Compartilhar: "Enviar pelo WhatsApp" · "Copiar link" (aviso: "Link copiado")

---

## 15. Privacidade (`/privacidade`)

> **`[[REVISÃO JURÍDICA]]` obrigatória antes de publicar.** Abaixo, a estrutura e os pontos-chave em linguagem simples. O advogado valida bases legais, prazos e o encarregado.

- **Title:** Política de privacidade | EmCORR
- **Meta description:** Como a EmCORR coleta, usa e protege seus dados pessoais e de saúde, conforme a LGPD. Veja seus direitos e como pedir acesso, correção ou exclusão.
- **H1:** Política de privacidade da EmCORR
- **Linha abaixo do H1:** Última atualização: {politica_data} · Versão {politica_versao}
- **Resumo em destaque (caixa no topo):**
  > **Em poucas palavras:** usamos seus dados para marcar e fazer seu atendimento. Não vendemos dados. Dado de saúde fica no prontuário, sob sigilo. O site não usa cookies de rastreamento. Você pode pedir acesso, correção ou exclusão quando quiser.

**Estrutura e pontos-chave**
1. **Quem somos.** EmCORR – Centro Clínico, CNPJ 26.343.832/0001-02, Av. Getúlio Vargas, 471, Centro, Corrente-PI. Somos a controladora dos dados.
2. **Encarregado (DPO).** {encarregado_dados} · {email_privacidade}
3. **Que dados o site coleta.**
   - Formulário de agendamento: nome, WhatsApp, serviço, tipo de atendimento (particular ou convênio), período e se é para uma criança.
   - **O site não coleta:** CPF, data de nascimento, sintomas, diagnósticos ou resultados de exames.
   - Navegação: estatísticas de visita sem cookies e sem identificar você ({ferramenta_analytics}).
4. **Para que usamos.** Para responder ao seu pedido e melhorar o site com números agregados. Não fazemos publicidade direcionada.
5. **Base legal.** Consentimento para o contato de agendamento (LGPD, art. 7º, I). Dados de saúde do atendimento, para tutela da saúde (art. 11, II, "f"). `[[REVISÃO JURÍDICA]]`
6. **Dados de saúde.** Ficam no prontuário e nos sistemas de exames. Só a equipe que atende você tem acesso, sob sigilo profissional.
7. **Com quem compartilhamos.** Operadoras de convênio (quando você usa o plano), laboratórios e sistemas de laudo parceiros, e as empresas que hospedam o site e o banco de dados ({provedores_tecnologia}). Não vendemos dados.
8. **Portais de resultados.** Os resultados ficam em sistemas de fornecedores (emcorr.uniexames.com.br, entregadeexames.com.br e resultados.emcorr.com.br), cada um com a própria política. O site da EmCORR só leva você até eles.
9. **Por quanto tempo guardamos.** Pedidos feitos pelo site: até {retencao_pedidos_dias} dias, se o atendimento não acontecer. Prontuário: pelo prazo que as normas médicas exigem. `[[REVISÃO JURÍDICA: prazo legal do prontuário]]`
10. **Segurança.** Acesso restrito por perfil, conexão criptografada (HTTPS) e registro de quem abre cada pedido.
11. **Cookies.** O site não usa cookies de publicidade nem de rastreamento. Se entrar mapa ou vídeo de terceiros, ele é listado aqui.
12. **Seus direitos.** Saber se tratamos seus dados, acessar, corrigir, pedir exclusão ou anonimização, revogar o consentimento e saber com quem compartilhamos. Como pedir: {email_privacidade} ou WhatsApp (89) 9 9933-1133. Prazo de resposta: `[[REVISÃO JURÍDICA]]`.
13. **Crianças e adolescentes.** Dados de menores são tratados com o consentimento de um dos pais ou do responsável, no melhor interesse da criança.
14. **Mudanças nesta política.** Avisamos no site quando houver mudança relevante. A versão e a data ficam no topo.
15. **Fale conosco.** {email_privacidade} · WhatsApp (89) 9 9933-1133 · Autoridade Nacional de Proteção de Dados (ANPD): gov.br/anpd

- **Imagem:** nenhuma.
- **Página irmã `/termos`:** estrutura curta (uso do site, caráter informativo, o formulário não confirma horário, links externos, foro). `[[REVISÃO JURÍDICA]]`

---

## 16. Página 404

- **Title:** Página não encontrada | EmCORR
- **Meta:** `noindex`
- **H1:** Esta página não existe mais
- **Texto:** O endereço pode ter mudado com o site novo. Escolha um caminho abaixo ou fale com a recepção pelo WhatsApp (89) 9 9933-1133.
- **Links rápidos (botões):** Especialidades · Exames · Ver meu resultado · Voltar para o início
- **CTA:** Falar com a recepção
- **Busca (opcional):** rótulo "Procure uma especialidade ou exame" · placeholder "Ex.: pediatra, tomografia"
- **Imagem:** ícone de linha da marca (placa de direção). Sem piada.

---

# PARTE 4: Banco de microcopy

## 17. CTAs

### Primários (conversão)
| Contexto | Texto do botão |
|---|---|
| Global / hero | Agendar pelo WhatsApp |
| Especialidade | Agendar [especialidade] (ex.: "Agendar pediatra") |
| Exame | Agendar meu exame (ou "Agendar minha tomografia") |
| Profissional | Agendar com `{nome_oficial}` |
| Convênios | Confirmar meu convênio |
| Cidades | Organizar minha vinda |
| Formulário | Enviar e continuar no WhatsApp |
| Obrigado | Adiantar pelo WhatsApp |

### Secundários
| Contexto | Texto |
|---|---|
| Resultados | Ver meu resultado |
| Exames | Ver preparo do exame |
| Serviços | Ver especialidade · Ver todos os exames |
| Formulário | Prefiro que me chamem |
| Localização | Como chegar · Traçar rota |
| Telefone | Ligar agora |
| Sobre | Conhecer a clínica |
| Corpo clínico | Ver perfil · Ver todos os profissionais |
| Dúvidas | Falar com a recepção · Tirar dúvidas pelo WhatsApp |
| Resultados (ajuda) | Não encontrei meu resultado |
| Blog | Ler artigo · Leia também |

### Nunca usar
"Ver Mais" · "Clique aqui" · "Enviar" (sozinho) · "Saiba mais" (sozinho) · "Compre já" · "Garanta sua vaga" · qualquer urgência artificial ("últimas vagas").

## 18. Estados vazios e de sistema

| Situação | Texto |
|---|---|
| Busca de exame sem resultado | Não achamos "{termo}" na lista de exames. Ele pode ter outro nome. [Perguntar pelo WhatsApp] |
| Filtro do corpo clínico vazio | Nenhum profissional desta área atende agora. A recepção indica quem pode ajudar. [Falar com a recepção] |
| Categoria do blog sem posts | Os primeiros artigos desta categoria estão em produção. Veja os mais recentes: [Ver todos os artigos] |
| Profissional sem dias cadastrados | Consulte os dias de atendimento com a recepção. |
| Exame sem prazo cadastrado | O prazo do resultado é informado quando você marca. |
| Especialidade sem profissional ativo | (página não publicada; redireciona para `/especialidades`) |
| Carregando | Carregando... |
| Link externo (portais) | Abre em nova aba |
| Link copiado | Link copiado |
| Fora do horário (balão do WhatsApp) | A recepção volta {horario_hoje}. Deixe sua mensagem e ela responde na ordem de chegada. |
| Erro genérico | Algo falhou do nosso lado. Tente de novo em instantes ou fale com a recepção pelo WhatsApp. |
| Sem conexão | A conexão caiu. Confira sua internet e tente de novo. |

## 19. Avisos fixos

| Onde | Texto |
|---|---|
| Rodapé (todas as páginas) | Em caso de emergência, ligue 192 (SAMU) ou vá ao pronto-socorro mais próximo. |
| Rodapé (todas as páginas) | As informações deste site são educativas e não substituem a consulta. |
| Formulário | Não escreva sintomas, diagnósticos ou resultados de exames aqui. |
| Resultados | O site da EmCORR não pede nem guarda seus dados. Ele só leva você ao portal onde o resultado está. |
| Depoimentos | Depoimentos publicados com autorização dos pacientes. |
| Preços (se a clínica publicar "a partir de" em exames) | Valor para pagamento particular, sujeito a mudança. Confirme com a recepção antes de marcar. (Nunca em odontologia.) |

### Analytics sem cookies
**Não precisa de banner de cookies** se o site usar só analytics sem cookies ({ferramenta_analytics}), sem identificar o visitante e sem mapa ou vídeo de terceiros. Por isso a home usa mapa estático com link.
- **Linha opcional no rodapé, ao lado de "Política de privacidade":** "Este site não usa cookies de rastreamento."
- **Se um dia entrar Google Analytics, Meta Pixel ou mapa incorporado,** usar banner com "Recusar" do mesmo tamanho de "Aceitar":
  > Usamos cookies para medir o uso do site. Você pode aceitar ou recusar. [Recusar] [Aceitar] · [Ver política de privacidade]
  > `[[REVISÃO JURÍDICA]]`

## 20. Mensagens prontas de WhatsApp

Base: FUNNEL-ANALYSIS. Texto curto, sem dado de saúde, sem exclamação, terminando com o código de origem. Número único: (89) 9 9933-1133.

| Contexto | Mensagem |
|---|---|
| Genérico (botão flutuante) | Olá, vim pelo site da EmCORR e quero marcar um atendimento. [site] |
| Home, hero | Olá, quero marcar uma consulta ou exame na EmCORR. [site-home] |
| Card "Crianças" / Pediatria | Olá, quero marcar consulta de pediatria para meu filho. Quais os próximos horários? [site-ped] |
| Card "Adultos" | Olá, quero marcar consulta com especialista. Podem me ajudar a escolher? [site-adultos] |
| Card "Mulheres" | Olá, quero marcar mamografia ou ultrassom. Quais os horários e o preparo? [site-mulheres] |
| Card "Dentes" / Odontologia | Olá, quero marcar uma avaliação com o dentista. Quais os horários? [site-odonto] |
| Card "Corpo e mente" | Olá, quero informações para marcar psicologia, nutrição ou fisioterapia. [site-corpo-mente] |
| Especialidade (modelo) | Olá, quero marcar consulta de {especialidade}. Quais os horários? [site-{slug}] |
| Profissional | Olá, quero marcar com {nome_oficial}. Quais os próximos dias? [site-cc-{slug}] |
| Exames (home) | Olá, tenho um pedido médico e quero marcar um exame. [site-exames] |
| Tomografia | Olá, tenho pedido médico e quero marcar uma tomografia. Quais os horários e o preparo? [site-tc] |
| Convênios | Olá, quero confirmar se a EmCORR atende meu convênio: ____. [site-conv] |
| Resultados | Olá, fiz um exame na EmCORR e não consigo abrir o resultado. [site-res] |
| Cidades atendidas | Olá, moro em ____ e quero marcar ____. Podem me ajudar a organizar a viagem? [site-cidades] |
| Particular ou SUS | Olá, quero tirar dúvidas sobre valores e convênios antes de marcar. [site-decisao] |
| 404 | Olá, não encontrei uma página no site. Podem me ajudar? [site-404] |
| Obrigado | Olá, acabei de enviar um pedido pelo site para {serviço}. Posso adiantar por aqui? [site-form] |

## 21. Rótulos de acessibilidade (aria-label e alt)

| Elemento | Texto |
|---|---|
| Logo | EmCORR – Centro Clínico, página inicial |
| Botão menu (fechado/aberto) | Abrir menu / Fechar menu |
| WhatsApp flutuante | Agendar pelo WhatsApp (abre o WhatsApp) |
| Ícone de telefone | Ligar para a EmCORR |
| Links de portais | Abrir portal do laboratório (abre em nova aba) |
| Instagram / Facebook | EmCORR no Instagram / EmCORR no Facebook |
| FAQ (`<summary>`) | o próprio texto da pergunta |
| Ícones decorativos | `alt=""` (vazio, de propósito) |

---

# PARTE 5: Swipe file e prioridades

## 22. Swipe file

**Subtítulos alternativos (5)**
1. Atendemos Medplan, Humana Saúde, Camed e particular. Você marca pelo WhatsApp e a recepção confirma o horário.
2. Do pediatra ao cardiologista, do dentista à tomografia, sem precisar viajar.
3. Médico, dentista e exame no mesmo endereço, para você não perder o dia na estrada.
4. Desde 2020 no centro de Corrente, com 14 profissionais e 30 mil atendimentos.
5. Mande uma mensagem e marque consulta e exame no mesmo lugar.

**CTAs alternativos (5)**
1. Agendar pelo WhatsApp
2. Marcar meu horário
3. Falar com a recepção
4. Quero marcar
5. Tirar dúvidas antes de marcar

**Meta descriptions alternativas da home (3)**
1. Consulta, dentista, laboratório e tomografia no mesmo endereço, no centro de Corrente-PI. Medplan, Humana Saúde, Camed e particular. Agende pelo WhatsApp.
2. Centro clínico em Corrente-PI desde 2020: 14 profissionais, odontologia, exames de sangue e tomografia GE ACT Revolution. Agende pelo WhatsApp.
3. Precisa de médico, dentista ou exame em Corrente-PI? Na EmCORR tem tudo no mesmo endereço, com convênio ou particular. Chame a recepção no WhatsApp.

**Provas sociais prontas (3)**
1. "Desde 2020 em Corrente · 14 profissionais · Nota {nota_google} no Google"
2. "30 mil atendimentos registrados em Corrente e região"
3. "O que dizem os pacientes" + depoimentos com nome e cidade

**Página de preços:** não se aplica (ética médica e variação por convênio). O papel dela fica com `/convenios` + "Particular: pergunte o valor pelo WhatsApp".

## 23. Ordem de implementação

1. **Globais:** cabeçalho, barra fixa e botão de WhatsApp com mensagens por contexto, rodapé com responsável técnico e aviso de emergência.
2. **Home** (12 seções). O teste A/B/C do hero só começa com o rastreamento de cliques validado.
3. **Agendar + `/obrigado`** e **Privacidade** (depois da revisão jurídica). Uma não vai ao ar sem a outra.
4. **Resultados** (tira ligações do balcão logo no lançamento).
5. **Convênios** e **Contato**.
6. **Corpo clínico** (índice + perfis), só com perfis de registro completo.
7. **Sobre** (depende da conversa com a Dra. Ludmilla).
8. **Cidades atendidas**, **Particular ou SUS** e **Blog**, junto com os 8 posts da Onda 1.

## 24. Campos do painel a preencher antes do lançamento (uma conversa com a clínica)

| # | Campos | Onde aparece |
|---|---|---|
| 1 | `{horario_semana}`, `{horario_sabado}`, `{horario_domingo_feriado}`, `{horario_coleta}` | Hero, rodapé, contato, FAQ, balão do WhatsApp |
| 2 | `{tempo_resposta}` (medido em uma semana de WhatsApp) | Como funciona, obrigado |
| 3 | `{rt_medico_nome}`, `{rt_medico_crm}`, `{rt_odonto_nome}`, `{rt_odonto_cro}` | Rodapé, Sobre |
| 4 | `{nome_oficial}`, `{conselho_registro}`, `{rqe}`, `{especialidade}`, `{dias_atendimento}`, `{formacao}`, `{bio}` dos 9 profissionais sem registro publicado | Corpo clínico |
| 5 | `{especialidades_ativas}` (neurologia, cirurgia geral, dermatologia, odontopediatria, fisioterapia, ortopedia) | Menu, home |
| 6 | `{nota_google}`, `{total_avaliacoes}` | Hero, depoimentos |
| 7 | `{prazo_resultado}` por exame e `{prazo_laudo_tc}` | Home, Resultados, exames |
| 8 | `{acesso_portal_lab}`, `{acesso_portal_imagem}`, `{acesso_portal_outros}`, `{resultado_impresso}` | Resultados |
| 9 | `{cobertura_*}`, `{formas_pagamento}`, `{recibo_reembolso}`, `{atende_sus}`, `{aceita_pedido_externo}` | Convênios, Particular ou SUS |
| 10 | `{distancia_km}`, `{tempo_carro}` por cidade | Cidades atendidas |
| 11 | `{como_achar}`, `{estacionamento}`, `{acessibilidade}`, `{laboratorio_tipo}` | Home, contato, Sobre |
| 12 | Autorização escrita de Marta e Suele + `{cidade_autor}` | Home |
| 13 | `{historia_fundacao}` | Sobre |
| 14 | `{encarregado_dados}`, `{email_privacidade}`, `{politica_data}`, `{politica_versao}`, `{retencao_pedidos_dias}`, `{ferramenta_analytics}`, `{provedores_tecnologia}` | Privacidade, Agendar |
| 15 | Fotos em alta: fachada, recepção, equipe, salas sem paciente | Todas |

---

# Checagem

### (a) Expressões vetadas removidas do texto antigo (amostra de 15)
Grafadas com "·" para não contaminar a busca no arquivo.

| # | Onde estava | Texto antigo | Regra do guia |
|---|---|---|---|
| 1 | Home, seção 6 | "acompanhar sua jor·nada" | Clichê |
| 2 | Home, seção 6 | "comprometidos não a·penas em tratar, mas em acompanhar" | Estrutura "não é a·penas X, é Y" |
| 3 | Sobre, abertura | "Somos mais do que uma clí·nica" | Clichê |
| 4 | Sobre, abertura | "parceiros na sua jor·nada de saúde" | Clichê |
| 5 | Home, seção 3 (card Corpo e mente) | "Um cuidado que vai a·lém do consultório" | Clichê "vai a·lém" |
| 6 | Diagnóstico, title citado | "Centro Clínico Refe·rência" | Clichê + autoelogio (CFM) |
| 7 | Diagnóstico, subtítulo citado | "Atendimento Huma·nizado e Qualificado" | Clichê sem prova |
| 8 | Checklist de conformidade | "refe·rência", "de pon·ta", "exce·lência" usados como exemplos soltos | Clichês |
| 9 | Home, seção 5 / FAQ | "O jeito mais rápido é pelo WhatsApp" | Superlativo sem prova |
| 10 | Home, seção 8 | "encontrar a me·lhor forma de cuidar de você" | Superlativo |
| 11 | Sobre, história | "nossa prioridade continua a mesma" | Variação de "seu bem-estar é nossa prioridade" |
| 12 | Sobre, CTA | "Venha nos conhecer" | Abertura de folheto (par com "desc·ubra" no guia) |
| 13 | Home, seção 3 (card Corpo e mente) | "em ambiente acolhedor e sigiloso" | Adjetivo no lugar de fato |
| 14 | Seção 19 (banner de cookies) | "melhorar sua experi·ência" | Clichê de "experi·ência" |
| 15 | Seção 20 (mensagens) | "Olá!" e "Olá, EmCORR!" em 17 mensagens | Exclamação vetada |

Também saíram: títulos com travessão em série ("Seção 1 — Hero"), o telefone fixo não usado no site, todos os marcadores de preenchimento (trocados por fatos ou por variáveis do painel) e a especialidade como título de médicos sem registro publicado.

### (b) Contagem final no arquivo inteiro
Busca sem diferenciar maiúsculas, com os termos escritos por extenso. Na tabela, eles aparecem com "·" para a própria tabela não entrar na conta.

| Termo | Ocorrências |
|---|---|
| jor·nada | 0 |
| exce·lência | 0 |
| huma·nizado | 0 |
| refe·rência | 0 |
| desc·ubra | 0 |
| além d·isso | 0 |
| "não é a·penas" | 0 |
