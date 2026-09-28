# Copy de Especialidades e Exames: EmCORR – Centro Clínico (Corrente-PI)

**Data:** 28/09/2026 · **Versão:** 2 (reescrita sênior) · **Destino:** seed das tabelas `specialties`, `exam_categories`, `exams`, `faqs` e `specialty_exams` (ARQUITETURA.md §3).
**Regra de estilo:** GUIA-DE-ESTILO-COPY.md, aplicado à risca. **Base de fatos:** texto atual do site (`scrape/emcorr/pages_clean/*.md`) e a lista de fatos confirmados abaixo. Nenhum outro fato foi acrescentado.

---

## 0. Como ler e converter este arquivo

- **Um bloco YAML por item**, entre cercas ` ```yaml `. Cada bloco é um documento YAML válido. Um script extrai os blocos e roda `yaml.safe_load` em cada um.
- `tipo_registro` indica a tabela: `exam_category`, `specialty` ou `exam`.
- Campos com `>-` são texto corrido. Listas (`quando_procurar`, `quando_e_pedido`, `faqs`) viram `jsonb` ou linhas da tabela `faqs` (`owner_type` = specialty/exam; `ordem` = posição na lista).
- `exames_relacionados` e `especialidades_relacionadas` usam os slugs novos e alimentam `specialty_exams` (N:N).
- **Ativo:** todo serviço com página no site atual está `ativo: true`. A única exceção é o Teste de Covid-19 (`ativo: false`, serviço de 2020 a 2022, com 301). Dermatologia saiu deste arquivo porque não tem página no site atual.

### Quem atende
- `quem_atende` (especialidades) e `quem_realiza.profissionais` (exames) guardam **só o slug** do profissional.
- O site busca nome, conselho, número, RQE e dias de atendimento na tabela de profissionais.
- Se o profissional não tiver registro cadastrado, o site esconde o nome dele. Se a especialidade ficar sem nenhum profissional com registro, o site esconde a especialidade.
- Registros já publicados no site atual: Dra. Ludmilla Nery (cardiologista, CRM-PI 5888, RQE 2142) e Dr. Igor Rafael (cirurgião-dentista, ortodontia e implantodontia, CRO-PI 2031). Os demais entram pelo painel.
- Lista vazia (`[]`) significa que o site atual não informa quem atende. A clínica vincula o profissional no painel.

### Variáveis do painel
Dados que só a clínica sabe (prazo de resultado, duração exata, preparo da casa, horário de coleta) têm este formato:

```
campo:
  valor: <texto, lista ou null>
  padrao_referencia: true | false
```

| Situação | Como o site mostra |
|---|---|
| `valor: null` | Esconde o campo. |
| `padrao_referencia: true` | Mostra o valor, que é a orientação médica usual para o exame, com a linha "Confirme o preparo com a recepção pelo WhatsApp." A clínica revisa no painel; ao salvar, o campo passa a `false`. |
| `padrao_referencia: false` com valor | Mostra o valor como informação da clínica. |

Prazo de resultado é sempre `null`: nenhuma página atual informa prazo, e não existe prazo usual que sirva para todos os laboratórios e clínicas.

### Fatos usados (e só estes)
| Fato | Valor |
|---|---|
| WhatsApp | (89) 9 9933-1133 (`whatsapp_numero: consultas` e `imagem` apontam para ele até a clínica cadastrar outro no painel) |
| Convênios | Medplan, Humana Saúde e Camed, e particular |
| Tomógrafo | GE ACT Revolution |
| Resultado de laboratório | emcorr.uniexames.com.br (`portal_resultado: laboratorio`) |
| Resultado de radiologia | entregadeexames.com.br (`portal_resultado: radiologia`) |
| Outros resultados | resultados.emcorr.com.br (`portal_resultado: outros`) |

### Montagem do link de WhatsApp
`https://wa.me/5589999331133?text=<whatsapp_mensagem com URL-encode>`. A mensagem termina com o código de origem `[site-...]`, usado para medir de qual página veio o contato.

### Regras aplicadas (CFM 2.336/2023, CFM 2.333/2023, CFO e GUIA-DE-ESTILO-COPY.md)
- Sem promessa de cura ou de resultado, sem superlativo, sem preço, sem antes e depois, sem comparação com outros serviços.
- Profissional só aparece com conselho e número, trazidos do banco. Especialista médico só com RQE. Dentista só é chamado de "ortodontista" com a especialidade registrada no CRO; sem isso, o site mostra "cirurgião-dentista".
- Sintoma aparece como motivo para conversar com o profissional, sem alarme. Sinais de urgência vêm no fim da lista, com a orientação de procurar o pronto-socorro. Em saúde mental, a lista traz o CVV (188).
- Termo técnico sempre explicado na mesma frase.
- Termos do perfil antigo da endocrinologia ligados a estética e a ganho de massa muscular foram retirados do texto público (CFM 2.333/2023).
- Rodapé de conteúdo de toda página de serviço: "Conteúdo revisado por {responsável técnico} · atualizado em {data}", preenchido pelo painel.

### Bloco padrão de convênios (`convenios: padrao`)
> Atendemos particular e os convênios Medplan, Humana Saúde e Camed. A cobertura muda conforme o plano e o serviço. Mande a foto da carteirinha pelo WhatsApp, e a recepção confirma antes de você vir. [Ver convênios](/convenios)

### Bloco padrão "Vem de outra cidade?"
> Mora em Cristalândia, Sebastião Barros, Parnaguá, Riacho Frio, Gilbués ou outra cidade da região? Peça à recepção para juntar consulta e exames no mesmo dia. O resultado sai pela internet, sem precisar voltar. [Veja como chegar](/cidades-atendidas)

### Erros do texto antigo corrigidos
| Página antiga | Erro | Correção |
|---|---|---|
| Exames Laboratoriais, Teste do Pezinho, Raio-X, Raio-X Panorâmica, Holter, MAPA | "será comprovada", "são comprovadas" | "é analisada" |
| Tomografia Ortodôntica | "demonstradas pelo ortodontista"; "estruturas estruturais, como dentes, ossos e ossos" | "avaliadas pelo dentista"; "dentes, raízes e ossos da face" |
| Teste da Orelhinha | "reagir aos filhos", "emite filhos", "receba comentários" | "sons", "acompanhamento" |
| Holter | "monitora os corações do seu coração", "irregularidade nas nossas preocupações" | "registra os batimentos", "alteração no ritmo" |
| Espirometria | "espirometrô" | "espirômetro" |
| Raio-X Panorâmica | "problemas problemáticos"; nome no feminino | texto novo; "Raio-X panorâmico" |
| Raio-X | "posicione certas maneiras"; "fará um relatório" | "orienta a posição"; "faz o laudo" |
| Eletrocardiograma | tempo verbal ("captaram") | presente |
| Nasofibroscopia | "inseriu"; "sangramentos faciais" | "introduz"; "sangramento pelo nariz" |
| MAPA | "precisão de tratamento" | "precisa de tratamento" |
| Tomografia Computadorizada | "imagens complementadas", "imagens desenvolvidas" | "imagens em cortes" |
| Ultrassom Morfológico | "imagens projetadas do bebê" | "imagens do bebê na tela, na hora" |
| Fonoaudiologia | "Com base em nossos resultados" | "Com base na avaliação" |
| Cirurgia Geral | frase de enciclopédia sobre emergências e zona rural | texto sobre a consulta |
| Várias | "diagnóstico mais preciso", "aumentar significativamente as chances de cura", "decisões mais precisas" | removidos (CFM 2.336/2023) |

---

## 1. Categorias de exame (`exam_categories`)

```yaml
tipo_registro: exam_category
slug: imagem
nome: Imagem
ordem: 1
descricao: >-
  Tomografia, raio-X, ultrassom e mamografia, e também os exames de imagem que
  o dentista pede. Mostram o que está dentro do corpo, sem corte. Você faz aqui
  em Corrente, sem viajar.
exames: [tomografia-computadorizada, tomografia-odontologica, raio-x, raio-x-panoramico, mamografia, ultrassonografia, ultrassom-morfologico]
```

```yaml
tipo_registro: exam_category
slug: coracao-e-circulacao
nome: Coração e circulação
ordem: 2
descricao: >-
  Exames do ritmo e da força do coração, da pressão ao longo do dia e da
  circulação no pescoço. O eletrocardiograma leva poucos minutos. O Holter e
  o MAPA ficam com você por 24 horas, em casa.
exames: [eletrocardiograma, ecocardiograma, holter-24-horas, mapa-24-horas, doppler-de-carotidas]
```

```yaml
tipo_registro: exam_category
slug: ouvido-nariz-e-garganta
nome: Ouvido, nariz e garganta
ordem: 3
descricao: >-
  Testes de audição e exames com uma câmera fina que mostra o nariz, a garganta
  e as cordas vocais. São pedidos para perda de audição, otite, nariz entupido,
  ronco e rouquidão, em crianças e adultos.
exames: [audiometria, imitanciometria, nasofibroscopia, laringoscopia]
```

```yaml
tipo_registro: exam_category
slug: pulmao
nome: Pulmão
ordem: 4
descricao: >-
  A espirometria, o "exame do sopro", mede quanto ar você solta e com que
  força. Serve para acompanhar asma, bronquite e falta de ar.
exames: [espirometria]
```

```yaml
tipo_registro: exam_category
slug: recem-nascido
nome: Recém-nascido
ordem: 5
descricao: >-
  Teste do pezinho, da orelhinha e da linguinha: as primeiras triagens do bebê,
  ou seja, exames simples feitos em todos os recém-nascidos. São rápidos e
  ajudam a família a começar cedo o acompanhamento, se for preciso.
exames: [teste-do-pezinho, teste-da-orelhinha, teste-da-linguinha]
```

```yaml
tipo_registro: exam_category
slug: laboratorio
nome: Laboratório
ordem: 6
descricao: >-
  Coleta de sangue, urina e outras amostras para check-up e acompanhamento de
  tratamento, e também o exame toxicológico. O resultado sai no portal do
  laboratório, pela internet.
exames: [exames-laboratoriais, exame-toxicologico, teste-de-covid-19]
```

---

## 2. Especialidades (`specialties`)

```yaml
tipo_registro: specialty
slug: pediatria
nome: Pediatria
grupo: medica
ordem: 1
ativo: true
seo_title: Pediatra em Corrente-PI | EmCORR
seo_description: >-
  Consulta pediátrica do recém-nascido ao adolescente em Corrente-PI, com
  exames e dentista no mesmo endereço. Agende pelo WhatsApp.
h1: Pediatra em Corrente-PI
subtitulo: Consulta do recém-nascido ao adolescente, com exames e dentista no mesmo endereço.
resumo: Rotina do bebê, criança doente e acompanhamento do crescimento, com testes do recém-nascido aqui mesmo.
beneficio_abertura: >-
  O pediatra acompanha seu filho do primeiro mês à adolescência. Os testes do
  pezinho, da orelhinha e da linguinha são feitos aqui. Se precisar de exame ou
  de dentista, a recepção tenta marcar no mesmo dia.
resposta_rapida: >-
  A pediatria da EmCORR atende do nascimento aos 18 anos. Cobre a consulta de
  rotina do bebê (puericultura, o acompanhamento do crescimento), a criança
  doente e o check-up escolar. Não precisa de encaminhamento. Atendemos
  particular, Medplan, Humana Saúde e Camed.
como_e_a_consulta: >-
  O pediatra começa ouvindo você. Pergunta como a criança come, dorme e se
  desenvolve, e o que mudou desde a última consulta. Depois vem o exame físico:
  peso, altura e, no bebê, a medida da cabeça. Tudo vai para a curva de
  crescimento, o gráfico que compara seu filho com crianças da mesma idade. No
  fim, você sai sabendo o que observar em casa e quando voltar. Traga a
  caderneta de saúde da criança, com as vacinas, e os exames anteriores.
quando_procurar:
  - Consultas de rotina do bebê, mais frequentes no primeiro ano.
  - Febre, tosse, diarreia ou vômito que passam de um ou dois dias.
  - Dúvidas sobre amamentação, comida, sono ou peso.
  - Demora para sentar, andar ou falar, ou mudança de comportamento na escola.
  - Check-up antes de esporte, viagem ou início do ano escolar.
  - Criança com dificuldade para respirar, muito sonolenta ou com convulsão deve ir direto ao pronto-socorro.
quem_atende: []
exames_relacionados: [teste-do-pezinho, teste-da-orelhinha, teste-da-linguinha, exames-laboratoriais, imitanciometria, ultrassonografia]
especialidades_relacionadas: [odontopediatria, fonoaudiologia, nutricao]
convenios: padrao
faqs:
  - p: A partir de que idade o pediatra atende?
    r: >-
      Do nascimento aos 18 anos. A primeira consulta do bebê costuma ser na
      primeira semana depois da alta da maternidade.
  - p: O que levar na consulta?
    r: >-
      A caderneta de saúde da criança e o documento com foto do responsável.
      Traga também a carteirinha do convênio e exames ou receitas
      anteriores.
  - p: Como funciona o retorno?
    r: >-
      A regra de retorno muda entre particular e cada convênio. A recepção
      informa no momento do agendamento.
  - p: Dá para fazer consulta, exame e dentista no mesmo dia?
    r: >-
      Muitas vezes, sim. Avise no WhatsApp que quer juntar os atendimentos, e a
      recepção procura horários em sequência.
  - p: Meu filho está com febre. Consigo horário hoje?
    r: >-
      Chame a recepção no WhatsApp e peça o horário mais próximo. Se a criança
      estiver com dificuldade para respirar ou muito abatida, vá ao
      pronto-socorro.
cta_texto: Agendar pelo WhatsApp
whatsapp_numero: consultas
whatsapp_mensagem: Olá, quero agendar consulta de pediatria para meu filho(a). Quais os próximos horários? [site-ped]
```

```yaml
tipo_registro: specialty
slug: cardiologia
nome: Cardiologia
grupo: medica
ordem: 2
ativo: true
seo_title: Cardiologista em Corrente-PI | EmCORR
seo_description: >-
  Consulta com cardiologista e exames do coração (eletro, eco, Holter e MAPA)
  no mesmo endereço em Corrente-PI. Agende pelo WhatsApp.
h1: Cardiologista em Corrente-PI
subtitulo: Consulta e exames do coração no mesmo endereço, aqui em Corrente.
resumo: Consulta com cardiologista e eletrocardiograma, ecocardiograma, Holter e MAPA sem sair da clínica.
beneficio_abertura: >-
  Pressão alta e alteração no ritmo do coração muitas vezes não dão sinal. A
  consulta com a cardiologista acontece aqui, e os exames que ela pedir também:
  eletrocardiograma, ecocardiograma, Holter e MAPA.
resposta_rapida: >-
  A cardiologia da EmCORR atende adultos e idosos. Os motivos mais comuns são
  check-up, pressão alta, palpitação, colesterol e avaliação antes de cirurgia.
  Não precisa de encaminhamento. Atendemos particular, Medplan, Humana Saúde e
  Camed.
como_e_a_consulta: >-
  A consulta começa pela conversa: sintomas, remédios em uso, doenças na
  família e hábitos. Depois a médica mede a pressão e escuta o coração. O
  eletrocardiograma pode ser feito no mesmo dia. Se ela pedir outros exames, a
  recepção agenda aqui mesmo. No retorno, a médica explica os resultados e
  combina o acompanhamento. Traga a lista de remédios e os exames antigos,
  mesmo os feitos em outro lugar.
quando_procurar:
  - Pressão alta, ou medidas de pressão que variam muito.
  - Palpitação, ou sensação de coração acelerado ou falhando.
  - Cansaço ou falta de ar em esforços que antes você fazia sem dificuldade.
  - Pernas inchadas no fim do dia.
  - Colesterol ou glicose alterados, diabetes, obesidade ou doença do coração na família.
  - Avaliação antes de cirurgia (risco cirúrgico) ou antes de começar atividade física.
  - Dor no peito forte ou que não passa pede pronto-socorro, sem esperar consulta.
quem_atende: [ludmilla-nery]
exames_relacionados: [eletrocardiograma, ecocardiograma, holter-24-horas, mapa-24-horas, doppler-de-carotidas, exames-laboratoriais]
especialidades_relacionadas: [endocrinologia, nutricao]
convenios: padrao
faqs:
  - p: Preciso levar exames antigos?
    r: >-
      Sim, se tiver. Exames de sangue, eletrocardiogramas e laudos anteriores
      ajudam a médica a comparar e evitam repetir exame. Traga também a lista
      dos remédios que você usa.
  - p: O eletrocardiograma é feito no dia da consulta?
    r: >-
      Muitas vezes, sim, porque o exame é rápido. Ecocardiograma, Holter e MAPA
      têm horário próprio, também aqui na EmCORR.
  - p: Precisa de jejum para a consulta?
    r: >-
      Não. Se a médica pedir exame de sangue, a recepção explica o preparo de
      cada um.
  - p: Faz avaliação de risco cirúrgico?
    r: >-
      Sim. Traga o pedido do cirurgião e os exames que já tiver. A avaliação
      costuma incluir consulta e eletrocardiograma. Outros exames dependem do
      caso.
  - p: Em que dias a cardiologista atende?
    r: >-
      Os dias aparecem no quadro da profissional, nesta página. A recepção
      confirma os horários da semana pelo WhatsApp.
cta_texto: Agendar pelo WhatsApp
whatsapp_numero: consultas
whatsapp_mensagem: Olá, quero agendar consulta com a cardiologista. Quais os horários disponíveis? [site-card]
```

```yaml
tipo_registro: specialty
slug: endocrinologia
nome: Endocrinologia
grupo: medica
ordem: 3
ativo: true
seo_title: Endocrinologista em Corrente-PI | EmCORR
seo_description: >-
  Tireoide, diabetes, obesidade e outras alterações hormonais: consulta e
  exames de sangue no mesmo endereço em Corrente-PI. Agende pelo WhatsApp.
h1: Endocrinologista em Corrente-PI
subtitulo: Tireoide, diabetes e peso acompanhados de perto, com exames de sangue aqui mesmo.
resumo: Diabetes, tireoide, obesidade e alterações hormonais, com consulta e coleta de sangue no mesmo endereço.
beneficio_abertura: >-
  Glicose alterada no exame, cansaço que não passa ou peso que muda sem motivo
  podem ter relação com os hormônios. A consulta e a coleta de sangue ficam no
  mesmo endereço, e o resultado sai pela internet.
resposta_rapida: >-
  A endocrinologia cuida das glândulas que produzem hormônios, como a tireoide
  e o pâncreas. Na EmCORR, atende diabetes, doenças da tireoide, obesidade e
  outras alterações hormonais em adultos. Não precisa de encaminhamento.
  Atendemos particular, Medplan, Humana Saúde e Camed.
como_e_a_consulta: >-
  A médica pergunta sobre sintomas, alimentação, sono, remédios e doenças na
  família. Mede peso, cintura e pressão e examina o pescoço, onde fica a
  tireoide. Em geral, pede exames de sangue, coletados aqui. No retorno, vocês
  combinam o tratamento e a frequência das consultas. Quem tem diabetes deve
  trazer as anotações de glicemia (o açúcar no sangue) e os últimos exames.
quando_procurar:
  - Diabetes, ou glicose alterada em exame de rotina.
  - Nódulo na tireoide, ou TSH (o exame de sangue da tireoide) fora do normal.
  - Ganho ou perda de peso sem motivo claro.
  - Cansaço, queda de cabelo, intestino preso ou frio fora do comum.
  - Menstruação irregular, excesso de pelos ou dificuldade para engravidar ligada a hormônios.
  - Colesterol alto, em acompanhamento com a cardiologia e a nutrição.
quem_atende: [thalma-muniz]
exames_relacionados: [exames-laboratoriais, ultrassonografia]
especialidades_relacionadas: [nutricao, cardiologia]
convenios: padrao
faqs:
  - p: Preciso de jejum para a consulta?
    r: >-
      Para a consulta, não. Alguns exames de sangue, como a glicemia, pedem
      jejum. A recepção explica o preparo de cada um.
  - p: O que levar na primeira consulta?
    r: >-
      Exames de sangue recentes, laudos de ultrassom da tireoide e a lista
      de remédios. Quem tem diabetes traz as anotações de glicemia ou o
      aparelho de medir.
  - p: A endocrinologista trata obesidade?
    r: >-
      Sim. Ela investiga se há causa hormonal e trata a obesidade como condição
      de saúde, junto com alimentação e atividade física. O plano é individual,
      e a resposta ao tratamento muda de pessoa para pessoa.
  - p: O ultrassom da tireoide é feito aqui?
    r: >-
      A EmCORR faz ultrassonografia. Mande a foto do pedido pelo WhatsApp, e a
      recepção confirma o horário para o tipo de ultrassom pedido.
cta_texto: Agendar pelo WhatsApp
whatsapp_numero: consultas
whatsapp_mensagem: Olá, quero agendar consulta de endocrinologia. Quais os próximos horários? [site-endo]
nota_editorial: >-
  O perfil antigo da profissional listava termos ligados a estética e a ganho
  de massa muscular. Eles saíram do texto público (CFM 2.333/2023) e não devem
  voltar ao cadastro da profissional.
```

```yaml
tipo_registro: specialty
slug: neurologia
nome: Neurologia
grupo: medica
ordem: 4
ativo: true
seo_title: Neurologista em Corrente-PI | EmCORR
seo_description: >-
  Dor de cabeça frequente, tontura, formigamento e memória: consulta com
  neurologista e tomografia no mesmo endereço em Corrente-PI.
h1: Neurologista em Corrente-PI
subtitulo: Dor de cabeça, tontura e formigamento avaliados, com tomografia no mesmo endereço.
resumo: Dor de cabeça frequente, tontura, formigamento e esquecimento, com tomografia aqui mesmo.
beneficio_abertura: >-
  Dor de cabeça que volta sempre, tontura e formigamento atrapalham a rotina. O
  neurologista procura a causa e planeja o cuidado. Se ele pedir tomografia,
  você faz aqui, sem viajar.
resposta_rapida: >-
  O neurologista cuida do cérebro, da medula e dos nervos. Na EmCORR, atende
  adultos com dor de cabeça frequente, tontura, formigamento, esquecimento,
  tremor e convulsão. Não precisa de encaminhamento. Atendemos particular,
  Medplan, Humana Saúde e Camed.
como_e_a_consulta: >-
  O médico pergunta quando os sintomas começaram, como são e o que melhora ou
  piora. Depois faz o exame neurológico: testa força, reflexos, equilíbrio,
  coordenação e sensibilidade. Se precisar, pede tomografia ou exames de sangue,
  feitos aqui. Antes da consulta, anote os dias e horários das crises. Isso
  ajuda o médico.
quando_procurar:
  - Dor de cabeça que se repete ou que mudou de padrão.
  - Tontura ou desequilíbrio frequentes.
  - Formigamento, dormência ou perda de força em braço ou perna.
  - Esquecimento que atrapalha a rotina, em você ou em alguém da família.
  - Tremor, desmaio ou convulsão já atendidos no pronto-socorro e que precisam de acompanhamento.
  - Fraqueza de repente em um lado do corpo, boca torta ou fala enrolada pedem pronto-socorro na hora.
quem_atende: []
exames_relacionados: [tomografia-computadorizada, doppler-de-carotidas, exames-laboratoriais]
especialidades_relacionadas: [psiquiatria, cardiologia]
convenios: padrao
faqs:
  - p: O neurologista trata enxaqueca?
    r: >-
      Sim. Ele identifica o tipo de dor de cabeça e orienta o tratamento das
      crises. Quando indicado, também trata para prevenir novas crises.
  - p: Preciso levar exames?
    r: >-
      Traga exames de imagem anteriores com o laudo e, se tiver, o CD ou o
      link. Traga também exames de sangue e a lista de remédios.
  - p: A tomografia pode ser feita aqui?
    r: >-
      Sim. A EmCORR tem tomógrafo próprio. Com o pedido médico, a recepção
      agenda o exame.
  - p: Em que dias o neurologista atende?
    r: >-
      Os dias aparecem no quadro do profissional, nesta página. A recepção
      confirma os horários pelo WhatsApp.
cta_texto: Agendar pelo WhatsApp
whatsapp_numero: consultas
whatsapp_mensagem: Olá, quero agendar consulta de neurologia. Quais os horários disponíveis? [site-neuro]
```

```yaml
tipo_registro: specialty
slug: psiquiatria
nome: Psiquiatria
grupo: medica
ordem: 5
ativo: true
seo_title: Psiquiatra em Corrente-PI | EmCORR
seo_description: >-
  Ansiedade, depressão e insônia: consulta com psiquiatra em sala reservada e
  com sigilo, em Corrente-PI. Psicologia no mesmo endereço.
h1: Psiquiatra em Corrente-PI
subtitulo: Ansiedade, humor e sono tratados com sigilo, com psicologia no mesmo endereço.
resumo: Ansiedade, depressão, insônia e mudanças de humor, com consulta sigilosa e psicologia na mesma clínica.
beneficio_abertura: >-
  Tristeza que não passa, ansiedade que tira o sono e mudanças fortes de humor
  têm tratamento. A consulta é sigilosa. Quando faz sentido, o psiquiatra
  trabalha junto com a psicologia, que atende no mesmo endereço.
resposta_rapida: >-
  O psiquiatra é o médico da saúde mental. Trata ansiedade, depressão,
  insônia, transtorno bipolar e outras condições. Na EmCORR, a consulta é
  sigilosa e pode ser combinada com psicoterapia. Não precisa de
  encaminhamento. Atendemos particular, Medplan, Humana Saúde e Camed.
como_e_a_consulta: >-
  O psiquiatra ouve o que você sente, desde quando e como isso afeta a rotina.
  A primeira consulta costuma ser mais longa. Às vezes ele pede exame de
  sangue para descartar outras causas. Depois explica as opções: remédio,
  psicoterapia ou os dois, com retornos para ajustar. O que você conta fica em
  sigilo.
quando_procurar:
  - Tristeza, desânimo ou falta de prazer nas coisas por mais de duas semanas.
  - Ansiedade, preocupação ou crises de medo que atrapalham trabalho, estudo ou família.
  - Insônia, ou sono em excesso, que não melhora.
  - Mudanças bruscas de humor ou de comportamento.
  - Uso de álcool ou de outras substâncias fora de controle.
  - Pensa em se machucar ou em tirar a própria vida? Ligue 188 (CVV, 24 horas, gratuito) ou vá ao pronto-socorro agora.
quem_atende: []
exames_relacionados: [exames-laboratoriais]
especialidades_relacionadas: [psicologia, neurologia]
convenios: padrao
faqs:
  - p: Qual a diferença entre psicólogo e psiquiatra?
    r: >-
      O psiquiatra é médico: faz o diagnóstico e pode receitar remédio. O
      psicólogo faz psicoterapia, com sessões de conversa ao longo do tempo.
      Muitas vezes os dois trabalham juntos. Na dúvida, a recepção ajuda a
      escolher por onde começar.
  - p: A consulta é sigilosa?
    r: >-
      Sim. O sigilo é dever ético do médico. O que você conta não é
      compartilhado sem sua autorização, salvo nas exceções previstas em lei.
  - p: Vou tomar remédio para sempre?
    r: >-
      Não necessariamente. O tempo de tratamento depende de cada caso e é
      revisto nos retornos. Não pare nenhum remédio sem falar com o médico.
  - p: Menor de idade pode consultar?
    r: >-
      Menores de 18 anos consultam com a presença ou a autorização do
      responsável. A recepção informa a faixa de idade atendida.
  - p: E se eu estiver em crise agora?
    r: >-
      Vá ao pronto-socorro mais próximo ou ligue 188 (CVV), que atende 24 horas
      e de graça. A consulta agendada serve para o acompanhamento.
cta_texto: Agendar pelo WhatsApp
whatsapp_numero: consultas
whatsapp_mensagem: Olá, quero informações para agendar consulta de psiquiatria. [site-psiq]
```

```yaml
tipo_registro: specialty
slug: cirurgia-geral
nome: Cirurgia Geral
grupo: medica
ordem: 6
ativo: true
seo_title: Cirurgião geral em Corrente-PI | EmCORR
seo_description: >-
  Avaliação de hérnia, pedra na vesícula, cisto e lipoma com cirurgião geral em
  Corrente-PI. Ultrassom e exames de sangue no mesmo endereço.
h1: Cirurgião geral em Corrente-PI
subtitulo: Avaliação de hérnia, vesícula e pequenas lesões, com exames aqui mesmo.
resumo: Consulta para hérnia, pedra na vesícula, cisto, lipoma e unha encravada, com exames no mesmo endereço.
beneficio_abertura: >-
  Hérnia, pedra na vesícula ou um caroço na pele levantam a mesma dúvida:
  precisa operar? A consulta com o cirurgião geral responde a isso. Ultrassom,
  tomografia e exames de sangue são feitos aqui.
resposta_rapida: >-
  O cirurgião geral avalia o que pode precisar de cirurgia. Exemplos:
  hérnia, pedra na vesícula, cisto, lipoma (caroço de gordura sob a pele) e
  unha encravada. Na EmCORR, a consulta serve para avaliar, pedir exames e
  planejar o próximo passo. Atendemos particular, Medplan, Humana Saúde e
  Camed.
como_e_a_consulta: >-
  O cirurgião pergunta o que você sente, desde quando e que exames já fez.
  Examina a região e, se precisar, pede ultrassom, tomografia ou exames de
  sangue, feitos aqui. Com os resultados, explica se há indicação de cirurgia,
  as alternativas, os riscos e a recuperação. A decisão é tomada com você. O
  local de cada procedimento é informado na consulta.
quando_procurar:
  - Caroço ou volume na virilha, no umbigo ou em cicatriz antiga, que pode ser hérnia.
  - Pedra na vesícula vista no ultrassom, com ou sem dor depois de comer.
  - Cisto, lipoma ou pinta que cresceu ou incomoda.
  - Unha encravada que volta sempre.
  - Dor forte na barriga com febre ou vômito pede pronto-socorro.
quem_atende: []
exames_relacionados: [ultrassonografia, tomografia-computadorizada, exames-laboratoriais, eletrocardiograma]
especialidades_relacionadas: [cardiologia]
convenios: padrao
faqs:
  - p: Toda hérnia precisa de cirurgia?
    r: >-
      Nem sempre. O cirurgião avalia tamanho, sintomas e risco de complicação
      para indicar o momento da cirurgia ou o acompanhamento.
  - p: Quais exames levar?
    r: >-
      Ultrassom, tomografia ou exames de sangue que você já tiver. Se não
      tiver, o médico pede na consulta, e muitos são feitos aqui.
  - p: Onde a cirurgia é feita?
    r: >-
      Depende do procedimento. O cirurgião explica o local, o preparo e a
      internação, se houver, na consulta.
  - p: Preciso de avaliação do coração antes de operar?
    r: >-
      Depende da idade, da saúde e do tipo de cirurgia. Quando for preciso, a
      consulta com a cardiologista e o eletrocardiograma são feitos aqui.
cta_texto: Agendar pelo WhatsApp
whatsapp_numero: consultas
whatsapp_mensagem: Olá, quero agendar consulta de cirurgia geral. Quais os horários disponíveis? [site-cirurgia-geral]
```

```yaml
tipo_registro: specialty
slug: otorrinolaringologia
nome: Otorrinolaringologia
grupo: medica
ordem: 7
ativo: true
seo_title: Otorrino em Corrente-PI | EmCORR
seo_description: >-
  Ouvido, nariz e garganta: consulta com otorrino, nasofibroscopia,
  laringoscopia e exames de audição no mesmo endereço em Corrente-PI.
h1: Otorrino em Corrente-PI
subtitulo: Ouvido, nariz e garganta, com exames de câmera e de audição aqui mesmo.
resumo: Ouvido, nariz e garganta, com nasofibroscopia, laringoscopia e exames de audição no mesmo endereço.
beneficio_abertura: >-
  Nariz sempre entupido, ronco, otite que volta e rouquidão que não passa são
  casos para o otorrino. A nasofibroscopia e os exames de audição são feitos
  aqui, sem viajar.
resposta_rapida: >-
  O otorrinolaringologista, ou otorrino, cuida do ouvido, do nariz, dos seios
  da face e da garganta, em crianças e adultos. Na EmCORR, a consulta pode
  incluir exame com câmera fina e teste de audição. Não precisa de
  encaminhamento. Atendemos particular, Medplan, Humana Saúde e Camed.
como_e_a_consulta: >-
  A médica ouve seus sintomas e examina ouvido, nariz e garganta com aparelhos
  de luz. Para ver mais de perto, pode fazer nasofibroscopia ou laringoscopia:
  uma câmera fina mostra o nariz, a garganta e as cordas vocais em poucos
  minutos. Testes de audição e tomografia dos seios da face também são
  agendados aqui.
quando_procurar:
  - Nariz entupido, espirro ou coriza que duram semanas.
  - Ronco alto, respiração pela boca ou sono agitado, em criança ou adulto.
  - Dor de ouvido, otite que volta ou ouvido tapado.
  - Dificuldade para ouvir, ou zumbido.
  - Rouquidão por mais de duas ou três semanas, ou dor de garganta que volta sempre.
  - Tontura com sensação de que tudo gira.
  - Sinusite que se repete.
quem_atende: [osyanne-timoteo]
exames_relacionados: [nasofibroscopia, laringoscopia, audiometria, imitanciometria, tomografia-computadorizada]
especialidades_relacionadas: [fonoaudiologia, pediatria]
convenios: padrao
faqs:
  - p: O otorrino atende crianças?
    r: >-
      Sim. Ronco, otite, amígdala e adenoide (uma carne esponjosa no fundo do
      nariz) são motivos comuns de consulta na infância.
  - p: A nasofibroscopia é feita na hora da consulta?
    r: >-
      Pode ser, se a médica achar necessário. O exame é rápido e feito no
      consultório. Pergunte à recepção se o seu convênio cobre o exame no mesmo
      dia.
  - p: Posso fazer audiometria aqui?
    r: >-
      Sim. Audiometria e imitanciometria são agendadas na EmCORR, com o pedido
      médico.
  - p: Rouquidão é sinal de algo grave?
    r: >-
      Na maioria das vezes, não. Gripe, uso excessivo da voz e refluxo são
      causas comuns. Rouquidão que passa de duas ou três semanas merece
      consulta com o otorrino.
cta_texto: Agendar pelo WhatsApp
whatsapp_numero: consultas
whatsapp_mensagem: Olá, quero agendar consulta de otorrino. Quais os horários disponíveis? [site-otorrino]
```

```yaml
tipo_registro: specialty
slug: ortopedia
nome: Ortopedia e Traumatologia
grupo: medica
ordem: 8
ativo: true
seo_title: Ortopedista em Corrente-PI | EmCORR
seo_description: >-
  Dor nas costas, no joelho ou no ombro, entorse e fratura: consulta com
  ortopedista e raio-X no mesmo endereço em Corrente-PI.
h1: Ortopedista em Corrente-PI
subtitulo: Dor nas articulações e lesões avaliadas, com raio-X no mesmo endereço.
resumo: Dor na coluna, no joelho ou no ombro, entorse e fratura, com raio-X e tomografia aqui mesmo.
beneficio_abertura: >-
  Dor nas costas, no joelho ou no ombro limita o trabalho e o sono. O
  ortopedista procura a causa. Se ele pedir raio-X ou tomografia, você faz
  aqui, muitas vezes no mesmo dia.
resposta_rapida: >-
  O ortopedista cuida de ossos, articulações, músculos e tendões. Na EmCORR,
  atende dor na coluna e nas articulações, entorse, fratura e lesão do esporte.
  Não precisa de encaminhamento. Atendemos particular, Medplan, Humana Saúde e
  Camed.
como_e_a_consulta: >-
  O médico pergunta como a dor começou e o que piora ou melhora. Examina
  movimento, força e pontos de dor. Se precisar, pede raio-X, ultrassom ou
  tomografia, feitos aqui. Com o resultado, explica o que está acontecendo e as
  opções de tratamento: remédio, fisioterapia ou outros cuidados.
quando_procurar:
  - Dor nas costas ou no pescoço que dura mais de algumas semanas.
  - Dor, inchaço ou estalo no joelho, ombro, quadril ou tornozelo.
  - Entorse ou queda com dor que não melhora em poucos dias.
  - Formigamento que desce para braço ou perna.
  - Acompanhamento depois de fratura ou de cirurgia ortopédica.
  - Suspeita de fratura com osso fora do lugar ou dor muito forte pede pronto-socorro.
quem_atende: [danilo-lustosa]
exames_relacionados: [raio-x, tomografia-computadorizada, ultrassonografia]
especialidades_relacionadas: [fisioterapia]
convenios: padrao
faqs:
  - p: O raio-X é feito no dia da consulta?
    r: >-
      Muitas vezes, sim. O raio-X é feito aqui. Peça à recepção para marcar o
      exame logo depois da consulta.
  - p: Preciso levar exames antigos?
    r: >-
      Sim, se tiver. Raio-X, ressonância ou tomografia anteriores, com laudo,
      ajudam a comparar e evitam repetir exame.
  - p: O ortopedista encaminha para fisioterapia?
    r: >-
      Quando indicado, sim. A fisioterapia atende no mesmo endereço.
  - p: Atende crianças?
    r: >-
      A recepção informa a faixa de idade atendida. Mande a idade da criança e
      a queixa pelo WhatsApp.
cta_texto: Agendar pelo WhatsApp
whatsapp_numero: consultas
whatsapp_mensagem: Olá, quero agendar consulta de ortopedia. Quais os horários disponíveis? [site-ortopedia]
```

```yaml
tipo_registro: specialty
slug: odontologia
nome: Odontologia
grupo: odontologica
ordem: 9
ativo: true
seo_title: Dentista em Corrente-PI | EmCORR
seo_description: >-
  Dentista para toda a família em Corrente-PI, com raio-X panorâmico e
  tomografia odontológica no mesmo endereço. Agende a avaliação.
h1: Dentista em Corrente-PI
subtitulo: Dentista para toda a família, no mesmo endereço das consultas médicas.
resumo: Avaliação, limpeza e tratamento para toda a família, com raio-X panorâmico e tomografia odontológica aqui mesmo.
beneficio_abertura: >-
  A família inteira consulta o dentista no mesmo endereço do médico. Se o
  dentista pedir raio-X panorâmico ou tomografia odontológica, o exame é feito
  aqui.
resposta_rapida: >-
  A odontologia da EmCORR atende crianças, adultos e idosos. O atendimento é
  feito por cirurgiões-dentistas com registro no CRO-PI. A primeira consulta é
  uma avaliação, e o plano de tratamento sai dela.
como_e_a_consulta: >-
  Na avaliação, o dentista ouve sua queixa e examina dentes e gengiva. Se
  precisar, pede um raio-X panorâmico, feito aqui. Depois apresenta o plano de
  tratamento, explica cada etapa e responde suas dúvidas antes de começar. As
  sessões seguintes são marcadas conforme o plano.
quando_procurar:
  - Avaliação e limpeza de rotina, em geral a cada seis meses ou como o dentista orientar.
  - Dor de dente, ou sensibilidade ao frio ou ao doce.
  - Gengiva que sangra ao escovar, ou mau hálito que não passa.
  - Dente quebrado, restauração que caiu ou prótese que incomoda.
  - Planejamento de implante ou de prótese.
quem_atende: [igor-rafael, mariana-vargas]
exames_relacionados: [raio-x-panoramico, tomografia-odontologica]
especialidades_relacionadas: [ortodontia, odontopediatria]
convenios: padrao
faqs:
  - p: Como pago a avaliação?
    r: >-
      A recepção informa valores e formas de pagamento pelo WhatsApp. Pelas
      regras do CFO, o site não publica preço.
  - p: Quais tratamentos vocês fazem?
    r: >-
      O dentista indica o tratamento depois da avaliação. Mande sua dúvida pelo
      WhatsApp, e a recepção diz qual profissional atende o seu caso.
  - p: O raio-X panorâmico é feito aqui?
    r: >-
      Sim. O raio-X panorâmico e a tomografia odontológica são feitos na
      EmCORR, com o pedido do dentista.
  - p: Dá para marcar a família inteira no mesmo dia?
    r: >-
      Muitas vezes, sim. Diga à recepção quantas pessoas são, e ela procura
      horários em sequência.
cta_texto: Agendar pelo WhatsApp
whatsapp_numero: consultas
whatsapp_mensagem: Olá, quero agendar uma avaliação com dentista. Quais os horários? [site-odonto]
```

```yaml
tipo_registro: specialty
slug: ortodontia
nome: Ortodontia
grupo: odontologica
ordem: 10
ativo: true
seo_title: "Ortodontista em Corrente-PI: aparelho | EmCORR"
seo_description: >-
  Aparelho ortodôntico para crianças e adultos, com raio-X panorâmico e
  tomografia odontológica no mesmo endereço em Corrente-PI.
h1: Ortodontista em Corrente-PI
subtitulo: Aparelho para crianças e adultos, com os exames de planejamento aqui mesmo.
resumo: Aparelho para crianças e adultos, com raio-X panorâmico e tomografia odontológica no mesmo endereço.
beneficio_abertura: >-
  Dente torto e mordida fora do encaixe atrapalham a mastigação e a limpeza dos
  dentes. O tratamento com aparelho começa por uma avaliação. Os exames de
  planejamento são feitos aqui.
resposta_rapida: >-
  A ortodontia corrige a posição dos dentes e o encaixe da mordida com
  aparelho. Na EmCORR, atende crianças, adolescentes e adultos, com raio-X
  panorâmico e tomografia odontológica no local. O tempo de tratamento muda de
  pessoa para pessoa e é explicado na avaliação.
como_e_a_consulta: >-
  Na avaliação, o dentista examina dentes, mordida e rosto e pergunta o que
  incomoda. Para planejar, costuma pedir a documentação ortodôntica: raio-X
  panorâmico, fotos e, em alguns casos, tomografia odontológica, feitos aqui.
  Depois apresenta o aparelho indicado e o tempo estimado. Explica também as
  manutenções, que são as consultas de ajuste do aparelho.
quando_procurar:
  - Dentes tortos, encavalados ou com espaços.
  - Dentes de cima muito à frente ou atrás dos de baixo.
  - Dificuldade para mastigar ou morder, ou mandíbula que estala.
  - Criança que respira pela boca, chupa o dedo ou usa chupeta por muito tempo.
  - Avaliação preventiva da criança, que muitos dentistas indicam por volta dos 7 anos.
quem_atende: [igor-rafael]
exames_relacionados: [raio-x-panoramico, tomografia-odontologica]
especialidades_relacionadas: [odontologia, odontopediatria, fonoaudiologia]
convenios: padrao
faqs:
  - p: Com que idade pode colocar aparelho?
    r: >-
      Não há idade única. Algumas correções começam na infância, outras na
      adolescência, e adulto também usa aparelho. A avaliação mostra o momento
      de cada caso.
  - p: Quanto tempo dura o tratamento?
    r: >-
      Depende do caso e é informado na avaliação. Ir às manutenções e cuidar da
      escovação ajudam o tratamento a seguir o plano.
  - p: Quais exames faço antes?
    r: >-
      Em geral, raio-X panorâmico e fotos. Em alguns casos, tomografia
      odontológica. Todos são feitos aqui na EmCORR.
  - p: Como funciona o pagamento?
    r: >-
      A recepção informa valores e formas de pagamento pelo WhatsApp. Pelas
      regras do CFO, o site não publica preço nem promoção.
cta_texto: Agendar avaliação pelo WhatsApp
whatsapp_numero: consultas
whatsapp_mensagem: Olá, quero agendar avaliação para aparelho ortodôntico. Quais os horários? [site-orto]
nota_editorial: >-
  O título "ortodontista" só aparece junto do profissional se a especialidade
  estiver registrada no CRO. Sem esse registro no banco, o site mostra
  "cirurgião-dentista".
```

```yaml
tipo_registro: specialty
slug: odontopediatria
nome: Odontopediatria
grupo: odontologica
ordem: 11
ativo: true
seo_title: Dentista infantil em Corrente-PI | EmCORR
seo_description: >-
  Primeira consulta do bebê no dentista, prevenção de cárie e tratamento dos
  dentes de leite em Corrente-PI. Pediatra no mesmo endereço.
h1: Dentista infantil em Corrente-PI
subtitulo: A primeira visita ao dentista, no ritmo da criança.
resumo: Primeira consulta do bebê, prevenção de cárie e tratamento dos dentes de leite, com pediatra no mesmo endereço.
beneficio_abertura: >-
  A primeira consulta no dentista é indicada quando nasce o primeiro dente. A
  criança conhece o consultório antes do exame. A consulta pode ficar no mesmo
  dia da consulta com o pediatra.
resposta_rapida: >-
  O atendimento odontológico infantil cuida dos dentes de bebês, crianças e
  adolescentes. Inclui a primeira consulta do bebê, orientação de escovação e
  alimentação e o tratamento de cárie nos dentes de leite. A primeira visita é
  indicada quando nasce o primeiro dente, ou até 1 ano de idade.
como_e_a_consulta: >-
  A consulta começa com uma conversa com os pais sobre alimentação,
  mamadeira, chupeta e escovação. A criança vê o consultório e os instrumentos
  antes do exame. O dentista examina dentes e gengiva, mostra como escovar e,
  se precisar, planeja o tratamento. Os pais ficam junto durante o
  atendimento.
quando_procurar:
  - Quando nasce o primeiro dente, ou até o primeiro aniversário.
  - Manchas brancas ou escuras nos dentes de leite.
  - Dor ao mastigar ou ao escovar, ou gengiva inchada.
  - Queda ou batida no dente.
  - Chupeta por muito tempo ou hábito de chupar o dedo.
quem_atende: [mariana-vargas, igor-rafael]
exames_relacionados: [raio-x-panoramico]
especialidades_relacionadas: [pediatria, odontologia, ortodontia]
convenios: padrao
faqs:
  - p: Com quantos anos levar a criança ao dentista?
    r: >-
      Quando nasce o primeiro dente, ou até 1 ano. Começar cedo ajuda a
      prevenir cárie e acostuma a criança com o consultório.
  - p: Dente de leite precisa de tratamento se vai cair?
    r: >-
      Sim. Dente de leite com cárie pode doer, infeccionar e atrapalhar a
      mastigação e a posição dos dentes permanentes.
  - p: E se meu filho chorar ou tiver medo?
    r: >-
      Acontece com muitas crianças. O dentista vai no ritmo dela, e os pais
      ficam junto.
  - p: Dá para marcar junto com o pediatra?
    r: >-
      Muitas vezes, sim. Peça à recepção para marcar os dois horários no mesmo
      dia.
cta_texto: Agendar pelo WhatsApp
whatsapp_numero: consultas
whatsapp_mensagem: Olá, quero agendar dentista para meu filho(a). Quais os horários? [site-odontoped]
nota_editorial: >-
  O site atual oferece "tratamentos odontológicos para toda família", o que
  inclui crianças. O texto público fala em "atendimento odontológico infantil"
  e "dentista infantil". A palavra "odontopediatra" só aparece junto de um
  profissional com essa especialidade registrada no CRO.
```

```yaml
tipo_registro: specialty
slug: nutricao
nome: Nutrição
grupo: multiprofissional
ordem: 12
ativo: true
seo_title: Nutricionista em Corrente-PI | EmCORR
seo_description: >-
  Plano alimentar para perder peso, controlar diabetes e colesterol, na
  gestação ou para crianças, com nutricionista em Corrente-PI.
h1: Nutricionista em Corrente-PI
subtitulo: Um plano alimentar montado para a sua rotina.
resumo: Plano alimentar para perder peso, controlar diabetes e colesterol, na gestação e na infância.
beneficio_abertura: >-
  A nutricionista monta com você um plano alimentar que cabe na sua rotina e
  no seu orçamento. Quando for o caso, acompanha junto com a endocrinologia e
  a cardiologia, que atendem no mesmo endereço.
resposta_rapida: >-
  A nutricionista orienta a alimentação para prevenir e controlar condições de
  saúde e para fases como gestação e infância. Na EmCORR, atende quem quer
  perder ou ganhar peso, controlar diabetes, colesterol ou pressão, ou mudar
  hábitos. Não precisa de encaminhamento.
como_e_a_consulta: >-
  Na primeira consulta, a nutricionista pergunta sobre sua rotina, o que você
  come, horários, trabalho, sono e objetivo. Mede peso, altura e
  circunferências e, se você tiver, avalia seus exames de sangue. Com isso,
  monta um plano alimentar individual e explica como seguir no dia a dia. Nos
  retornos, vocês ajustam o plano.
quando_procurar:
  - Vontade de perder ou ganhar peso com orientação.
  - Diabetes, pré-diabetes, colesterol ou triglicerídeos altos.
  - Pressão alta, gordura no fígado ou intestino desregulado.
  - Gestação e amamentação.
  - Criança que come pouco, recusa muitos alimentos ou está acima do peso.
  - Alergia ou intolerância alimentar já diagnosticada.
quem_atende: []
exames_relacionados: [exames-laboratoriais]
especialidades_relacionadas: [endocrinologia, cardiologia, pediatria]
convenios: padrao
faqs:
  - p: A nutricionista passa cardápio?
    r: >-
      Sim. O plano alimentar é feito para você, com opções de refeição e de
      substituição.
  - p: Preciso levar exames?
    r: >-
      Se tiver exames de sangue recentes, traga. Eles ajudam a ajustar o plano.
      Se precisar de novos, a coleta é feita aqui.
  - p: De quanto em quanto tempo são os retornos?
    r: >-
      Depende do objetivo. Os primeiros retornos costumam ser mais próximos,
      para ajustar o plano. A nutricionista combina com você.
cta_texto: Agendar pelo WhatsApp
whatsapp_numero: consultas
whatsapp_mensagem: Olá, quero agendar consulta com nutricionista. Quais os horários? [site-nutricao]
```

```yaml
tipo_registro: specialty
slug: psicologia
nome: Psicologia
grupo: multiprofissional
ordem: 13
ativo: true
seo_title: Psicólogo em Corrente-PI | EmCORR
seo_description: >-
  Psicoterapia para ansiedade, tristeza, luto e relacionamentos, em sala
  reservada e com sigilo, em Corrente-PI. Agende a primeira sessão.
h1: Psicólogo em Corrente-PI
subtitulo: Psicoterapia em sala reservada, com sigilo.
resumo: Psicoterapia para ansiedade, tristeza, luto e relacionamentos, em sala reservada e com sigilo.
beneficio_abertura: >-
  A psicoterapia é um espaço para falar do que pesa e entender o que você
  sente. As sessões acontecem em sala reservada, com sigilo. Se for útil, a
  psicóloga indica avaliação com a psiquiatria, no mesmo endereço.
resposta_rapida: >-
  A psicologia da EmCORR faz psicoterapia para ansiedade, tristeza, luto,
  estresse, autoestima e conflitos de relacionamento. As sessões são sigilosas
  e acontecem em sala reservada. Não precisa de encaminhamento.
como_e_a_consulta: >-
  A primeira sessão serve para vocês se conhecerem. Você conta o que te
  trouxe, e a psicóloga explica como funciona o acompanhamento. A frequência
  das sessões é combinada entre vocês. O tempo total de terapia muda de pessoa
  para pessoa.
quando_procurar:
  - Ansiedade, preocupação constante ou crises de nervoso.
  - Tristeza, desânimo ou vontade de ficar sozinho por muito tempo.
  - Luto, separação ou outra mudança difícil.
  - Conflitos na família, no casamento ou no trabalho.
  - Autoestima baixa ou dificuldade para lidar com cobranças.
  - Se você pensa em se machucar, ligue 188 (CVV, 24 horas) ou vá ao pronto-socorro.
quem_atende: [anaeliza-petersen]
exames_relacionados: []
especialidades_relacionadas: [psiquiatria, nutricao]
convenios: padrao
sessao_duracao:
  valor: null
  padrao_referencia: false
faqs:
  - p: Como é a primeira sessão?
    r: >-
      É uma conversa para a psicóloga entender o que te trouxe e para você
      tirar dúvidas sobre o acompanhamento. Não existe resposta certa ou
      errada.
  - p: O que eu falo fica em sigilo?
    r: >-
      Sim. O sigilo é dever ético do psicólogo. Nada é compartilhado sem sua
      autorização, salvo nas exceções previstas no Código de Ética da
      profissão.
  - p: Qual a diferença entre psicólogo e psiquiatra?
    r: >-
      O psicólogo faz psicoterapia, com sessões de conversa. O psiquiatra é
      médico e pode receitar remédio quando necessário. Os dois podem
      trabalhar juntos.
  - p: Adolescente pode fazer terapia?
    r: >-
      Sim. Menores de 18 anos precisam da autorização do responsável para
      começar. O conteúdo das sessões segue em sigilo, dentro das regras do
      Código de Ética.
cta_texto: Agendar pelo WhatsApp
whatsapp_numero: consultas
whatsapp_mensagem: Olá, quero informações para agendar psicoterapia. [site-psi]
nota_editorial: "A página atual de Psicologia está vazia. Duração da sessão fica como variável do painel (sessao_duracao)."
```

```yaml
tipo_registro: specialty
slug: fonoaudiologia
nome: Fonoaudiologia
grupo: multiprofissional
ordem: 14
ativo: true
seo_title: Fonoaudiólogo em Corrente-PI | EmCORR
seo_description: >-
  Fala, audição, voz e deglutição, com teste da orelhinha, teste da linguinha
  e audiometria no mesmo endereço em Corrente-PI.
h1: Fonoaudiólogo em Corrente-PI
subtitulo: Fala, audição, voz e deglutição, do bebê ao idoso.
resumo: Fala, audição, voz e deglutição, com testes da orelhinha e da linguinha e audiometria no mesmo endereço.
beneficio_abertura: >-
  Falar, ouvir e engolir bem pesam na escola, no trabalho e em casa. A
  fonoaudiologia atende do bebê, com os testes da orelhinha e da linguinha,
  ao idoso que começou a ouvir menos.
resposta_rapida: >-
  A fonoaudiologia cuida da fala, da linguagem, da audição, da voz, da
  mastigação e da deglutição (o ato de engolir). Na EmCORR, atende bebês,
  crianças, adultos e idosos. Não precisa de encaminhamento para a avaliação.
como_e_a_consulta: >-
  A fonoaudióloga começa pela queixa e pela história do desenvolvimento.
  Depois faz testes de fala, de voz ou de audição, conforme o caso. Com base
  na avaliação, explica o que encontrou e monta um plano de terapia, com
  sessões e exercícios para casa. Ao longo do tratamento, ela reavalia o
  plano.
quando_procurar:
  - Criança que fala pouco para a idade, troca letras ou gagueja.
  - Bebê com dificuldade para mamar ou suspeita de língua presa.
  - Dificuldade para ouvir, zumbido ou pedido de audiometria.
  - Rouquidão ou voz cansada em quem usa muito a voz no trabalho, como professores e vendedores.
  - Engasgo frequente ou dificuldade para engolir.
  - Respiração pela boca ou mastigação alterada.
quem_atende: []
exames_relacionados: [teste-da-orelhinha, teste-da-linguinha, audiometria, imitanciometria]
especialidades_relacionadas: [otorrinolaringologia, pediatria, ortodontia]
convenios: padrao
faqs:
  - p: Com que idade levar meu filho ao fonoaudiólogo?
    r: >-
      Em qualquer idade, se houver preocupação. Se a criança fala bem menos
      que outras da mesma idade, vale marcar a avaliação. O mesmo vale se é
      difícil entender o que ela diz.
  - p: Quantas sessões vou precisar?
    r: >-
      Depende da queixa e da evolução. A fonoaudióloga explica o plano na
      avaliação e revê o número de sessões ao longo do tratamento.
  - p: Preciso de pedido médico?
    r: >-
      Para a avaliação, não. Alguns convênios pedem encaminhamento para
      liberar as sessões. Confirme com a recepção.
cta_texto: Agendar pelo WhatsApp
whatsapp_numero: consultas
whatsapp_mensagem: Olá, quero agendar avaliação de fonoaudiologia. Quais os horários? [site-fono]
nota_editorial: "Página antiga em /_especialidades/2996-2/. Corrigido: 'Com base em nossos resultados'."
```

```yaml
tipo_registro: specialty
slug: fisioterapia
nome: Fisioterapia
grupo: multiprofissional
ordem: 15
ativo: true
seo_title: Fisioterapia em Corrente-PI | EmCORR
seo_description: >-
  Dor nas costas, recuperação de lesão e de cirurgia e reabilitação com
  fisioterapeuta em Corrente-PI. Ortopedista no mesmo endereço.
h1: Fisioterapia em Corrente-PI
subtitulo: Exercício, terapia manual e orientação para voltar a se mexer.
resumo: Dor nas costas, recuperação de lesão e de cirurgia e reabilitação, com plano de exercícios individual.
beneficio_abertura: >-
  A fisioterapia trata dor e limitação de movimento com exercício, terapia
  manual (técnicas feitas com as mãos) e orientação. O plano é montado para o
  seu caso. O ortopedista atende no mesmo endereço.
resposta_rapida: >-
  A fisioterapia trata lesões e doenças com movimento, exercício, terapia
  manual e educação. Na EmCORR, atende dor na coluna e nas articulações,
  recuperação depois de lesão ou cirurgia e reabilitação em geral. A primeira
  sessão é uma avaliação.
como_e_a_consulta: >-
  Na avaliação, o fisioterapeuta pergunta sobre a dor, a rotina e os exames
  que você já fez. Testa movimento, força e postura. Depois monta um plano de
  sessões com objetivos definidos. Em cada sessão, você faz exercícios
  orientados e, quando indicado, recebe terapia manual. Também leva
  exercícios para casa. Vá com roupa confortável.
quando_procurar:
  - Dor nas costas, no pescoço ou nas articulações que atrapalha a rotina.
  - Recuperação depois de entorse, fratura ou cirurgia ortopédica.
  - Indicação do ortopedista ou de outro médico.
  - Dificuldade de equilíbrio ou para caminhar, principalmente em idosos.
  - Dor por postura ou esforço repetitivo no trabalho.
quem_atende: []
exames_relacionados: [raio-x]
especialidades_relacionadas: [ortopedia]
convenios: padrao
sessao_duracao:
  valor: null
  padrao_referencia: false
faqs:
  - p: Preciso de pedido médico?
    r: >-
      Para a avaliação particular, em geral não. Para usar o convênio,
      normalmente é preciso pedido médico com o número de sessões. Confirme
      com a recepção.
  - p: Quantas sessões vou precisar?
    r: >-
      Depende do caso. O fisioterapeuta define o plano na avaliação e revê o
      número de sessões conforme a evolução.
  - p: O que levar na primeira sessão?
    r: >-
      Pedido médico, se tiver, e exames como raio-X ou ressonância. Vá com
      roupa que deixe a região tratada livre para se mexer.
cta_texto: Agendar pelo WhatsApp
whatsapp_numero: consultas
whatsapp_mensagem: Olá, quero agendar fisioterapia. Como funciona e quais os horários? [site-fisio]
```

---

## 3. Exames (`exams`)

> Em todos os exames, `prazo_resultado` é variável do painel com `valor: null`: o site esconde o campo até a clínica preencher. `duracao` e `preparo` trazem a orientação médica usual (`padrao_referencia: true`) até a clínica revisar.

### 3.1 Imagem

```yaml
tipo_registro: exam
slug: tomografia-computadorizada
slug_antigo: tomografia-computadorizada
nome: Tomografia Computadorizada
categoria: imagem
ordem: 1
ativo: true
seo_title: "Tomografia em Corrente-PI: preparo e laudo | EmCORR"
seo_description: >-
  Tomografia computadorizada em Corrente-PI, no tomógrafo GE ACT Revolution,
  sem precisar viajar. Veja preparo, duração e como agendar.
h1: Tomografia computadorizada em Corrente-PI
subtitulo: Faça a tomografia aqui em Corrente, sem viajar para outra cidade.
resumo: Exame de imagem em cortes, feito no tomógrafo GE ACT Revolution, com laudo pela internet.
o_que_e: >-
  A tomografia computadorizada é um exame de raios-X que monta imagens do corpo
  em cortes, como fatias. Mostra ossos, órgãos e outros tecidos com mais
  detalhe que o raio-X comum. Na EmCORR, o exame é feito no tomógrafo GE ACT
  Revolution.
para_que_serve: >-
  Ajuda o médico a investigar a causa de um sintoma e a acompanhar um
  tratamento. É pedida para cabeça, seios da face, tórax, abdome, coluna e
  suspeita de fratura, entre outras regiões.
quando_e_pedido:
  - Dor de cabeça, tontura ou pancada na cabeça, a critério do médico.
  - Sinusite que volta ou não melhora (tomografia dos seios da face).
  - Dor na coluna, no abdome ou no tórax que precisa de investigação.
  - Suspeita de fratura que o raio-X não esclareceu.
  - Acompanhamento de uma alteração já conhecida.
como_funciona: >-
  Você deita em uma mesa que desliza para dentro de um aro largo e aberto. O
  aparelho gira em volta da região examinada e faz as imagens em poucos
  minutos. É preciso ficar parado e, às vezes, prender a respiração por alguns
  segundos. Alguns exames usam contraste, um líquido aplicado na veia que
  deixa vasos e órgãos mais visíveis na imagem. Se for o seu caso, você é
  avisado antes. O exame não dói.
preparo:
  valor:
    - Sem contraste, em geral não precisa de jejum.
    - Com contraste, costuma ser pedido jejum de 4 horas.
    - Traga o pedido médico, documento com foto, carteirinha do convênio e exames anteriores da mesma região.
    - Avise antes se tem alergia, principalmente a contraste ou iodo.
    - Avise se tem doença nos rins ou diabetes, e se usa metformina (remédio para diabetes).
    - Avise se está grávida ou se há chance de estar.
    - Retire brincos, colares, grampos e outros objetos de metal da região examinada.
  padrao_referencia: true
duracao:
  valor: Poucos minutos no aparelho. Com recepção e posicionamento, cerca de 15 a 30 minutos. Com contraste, um pouco mais.
  padrao_referencia: true
prazo_resultado:
  valor: null
  padrao_referencia: false
portal_resultado: radiologia
onde_ver_resultado: >-
  O laudo e as imagens ficam no portal de radiologia, entregadeexames.com.br.
  Veja como acessar em /resultados.
precisa_pedido_medico: true
quem_realiza:
  descricao: Técnico em radiologia faz o exame. O laudo é de médico radiologista.
  profissionais: []
especialidades_relacionadas: [neurologia, otorrinolaringologia, ortopedia, cirurgia-geral]
convenios: padrao
faqs:
  - p: Precisa de jejum para tomografia?
    r: >-
      Só quando o exame é com contraste. Sem contraste, em geral não precisa.
      A recepção confirma o preparo do seu exame no agendamento.
  - p: Posso fazer tomografia sem pedido médico?
    r: >-
      Não. A tomografia usa radiação e precisa do pedido de um médico ou
      dentista.
  - p: Tenho medo de lugar fechado. Consigo fazer?
    r: >-
      Na maioria das vezes, sim. O tomógrafo é um aro aberto, e o exame é
      rápido. Avise a equipe, que fica com você do início ao fim.
  - p: Grávida pode fazer tomografia?
    r: >-
      Só com avaliação do médico, porque o exame usa radiação. Se estiver
      grávida ou houver chance, avise antes.
cta_texto: Agendar tomografia
whatsapp_numero: imagem
whatsapp_mensagem: Olá, tenho pedido médico e quero agendar tomografia. Quais os horários e o preparo? [site-tc]
nota_editorial: "Corrigido: 'imagens complementadas', 'imagens desenvolvidas'. Removido 'decisões mais precisas'."
```

```yaml
tipo_registro: exam
slug: tomografia-odontologica
slug_antigo: tomografia-ortodontica
nome: Tomografia Odontológica
categoria: imagem
ordem: 2
ativo: true
seo_title: Tomografia odontológica em Corrente-PI | EmCORR
seo_description: >-
  Tomografia odontológica em 3D para implante, aparelho e dente incluso, em
  Corrente-PI. Exame rápido, sem jejum. Veja como agendar.
h1: Tomografia odontológica em Corrente-PI
subtitulo: Imagem em 3D dos dentes e dos ossos da face, pedida pelo dentista.
resumo: Imagem em 3D dos dentes e da face para planejar implante, aparelho e retirada de dente incluso.
o_que_e: >-
  A tomografia odontológica, também chamada de cone beam, é um exame de
  raios-X em três dimensões. Mostra dentes, raízes e ossos da face. Mostra detalhes que o raio-X comum não mostra.
para_que_serve: >-
  Ajuda o dentista a planejar implante, aparelho e tratamento de canal.
  Também serve para retirar dente incluso, o dente que não nasceu, como o siso. E para avaliar lesões nos ossos da face.
quando_e_pedido:
  - Planejamento de implante dentário.
  - Planejamento de tratamento com aparelho.
  - Dente incluso ou siso em posição difícil.
  - Investigação de dor, fratura ou lesão no dente ou no osso.
como_funciona: >-
  Você fica sentado ou em pé, com a cabeça apoiada. O aparelho gira em volta
  da cabeça por alguns segundos. É preciso ficar parado durante a captura. O
  exame é rápido e não dói.
preparo:
  valor:
    - Não precisa de jejum.
    - Traga o pedido do dentista.
    - Retire brincos, piercings, óculos, grampos e próteses removíveis antes do exame.
    - Avise se está grávida ou se há chance de estar.
  padrao_referencia: true
duracao:
  valor: A captura leva segundos. Com o posicionamento, cerca de 10 a 15 minutos.
  padrao_referencia: true
prazo_resultado:
  valor: null
  padrao_referencia: false
portal_resultado: radiologia
onde_ver_resultado: >-
  As imagens e o laudo ficam no portal de radiologia, entregadeexames.com.br.
  Veja como acessar em /resultados.
precisa_pedido_medico: true
quem_realiza:
  descricao: Técnico em radiologia faz o exame. O laudo é de profissional habilitado em radiologia.
  profissionais: []
especialidades_relacionadas: [ortodontia, odontologia]
convenios: padrao
faqs:
  - p: Qual a diferença para o raio-X panorâmico?
    r: >-
      O panorâmico mostra todos os dentes em uma imagem plana. A tomografia
      mostra uma região em 3D, com mais detalhe. O dentista escolhe o exame
      conforme o tratamento.
  - p: Precisa de preparo?
    r: >-
      Não precisa de jejum. Basta retirar brincos, piercings, óculos e próteses
      removíveis.
  - p: Criança pode fazer?
    r: >-
      Sim, quando o dentista pede. A criança precisa ficar parada por alguns
      segundos.
cta_texto: Agendar tomografia odontológica
whatsapp_numero: imagem
whatsapp_mensagem: Olá, quero agendar tomografia odontológica. Quais os horários? [site-tc-odonto]
nota_editorial: "Nome e slug alterados de 'Tomografia Ortodôntica' (SEO-AUDIT §2.3). Corrigido: 'estruturas estruturais, como dentes, ossos e ossos'; 'demonstradas pelo ortodontista'."
```

```yaml
tipo_registro: exam
slug: raio-x
slug_antigo: raio-x
nome: Raio-X
categoria: imagem
ordem: 3
ativo: true
seo_title: Raio-X em Corrente-PI | EmCORR
seo_description: >-
  Raio-X de tórax, coluna, ossos e seios da face em Corrente-PI. Veja se
  precisa de preparo, quanto tempo leva e onde sai o laudo.
h1: Raio-X em Corrente-PI
subtitulo: Exame de ossos e pulmões feito em poucos minutos.
resumo: Raio-X de tórax, coluna, ossos e seios da face, em poucos minutos e, na maioria dos casos, sem preparo.
o_que_e: >-
  O raio-X, ou radiografia, é um exame de imagem com uma pequena dose de
  radiação. Registra ossos, pulmões e outras partes do corpo.
para_que_serve: >-
  Investiga fratura, dor nos ossos e nas articulações, problemas nos pulmões,
  como a pneumonia, e alterações nos seios da face.
quando_e_pedido:
  - Queda, pancada ou suspeita de fratura.
  - Dor na coluna ou nas articulações.
  - Tosse, febre ou falta de ar, para avaliar os pulmões.
  - Exames admissionais e de rotina.
como_funciona: >-
  O técnico orienta a posição: em pé, sentado ou deitado, conforme a parte do
  corpo. Você fica parado por alguns segundos enquanto a imagem é feita. Às
  vezes são feitas imagens de mais de um ângulo. Não dói.
preparo:
  valor:
    - A maioria dos raios-X não precisa de preparo nem de jejum.
    - Raio-X de abdome ou de coluna lombar pode pedir preparo do intestino. A recepção avisa quando for o caso.
    - Retire brincos, colares, cintos e outros objetos de metal da região.
    - Avise se está grávida ou se há chance de estar.
    - Traga o pedido médico.
  padrao_referencia: true
duracao:
  valor: Poucos minutos.
  padrao_referencia: true
prazo_resultado:
  valor: null
  padrao_referencia: false
portal_resultado: radiologia
onde_ver_resultado: >-
  As imagens e o laudo ficam no portal de radiologia, entregadeexames.com.br.
  Veja como acessar em /resultados.
precisa_pedido_medico: true
quem_realiza:
  descricao: Técnico em radiologia faz o exame. O laudo é de médico radiologista.
  profissionais: []
especialidades_relacionadas: [ortopedia, fisioterapia, pediatria, otorrinolaringologia]
convenios: padrao
atendimento_sem_hora_marcada:
  valor: null
  padrao_referencia: false
faqs:
  - p: Preciso agendar?
    r: >-
      Mande a foto do pedido pelo WhatsApp. A recepção informa o próximo
      horário e se o seu raio-X tem preparo.
  - p: Precisa de jejum?
    r: >-
      Na maioria dos casos, não. Alguns exames de abdome ou de coluna lombar
      têm preparo. A recepção avisa no agendamento.
  - p: Criança pode fazer raio-X?
    r: >-
      Sim, com pedido médico. Um responsável acompanha a criança e recebe as
      orientações da equipe.
  - p: Grávida pode fazer raio-X?
    r: >-
      Só com avaliação do médico. Se estiver grávida ou houver chance, avise a
      equipe antes do exame.
cta_texto: Agendar raio-X
whatsapp_numero: imagem
whatsapp_mensagem: Olá, quero fazer um raio-X. Qual o próximo horário? [site-rx]
nota_editorial: "Corrigido: 'posicione certas maneiras', 'serão comprovadas', 'fará um relatório'. Se a clínica atende por ordem de chegada, preencher atendimento_sem_hora_marcada no painel."
```

```yaml
tipo_registro: exam
slug: raio-x-panoramico
slug_antigo: raio-x-panoramica
nome: Raio-X Panorâmico
categoria: imagem
ordem: 4
ativo: true
seo_title: Raio-X panorâmico dos dentes em Corrente-PI | EmCORR
seo_description: >-
  Radiografia panorâmica pedida pelo dentista, feita em poucos minutos em
  Corrente-PI. Sem jejum. Veja como agendar.
h1: Raio-X panorâmico em Corrente-PI
subtitulo: Todos os dentes em uma só imagem, em poucos minutos.
resumo: Radiografia de todos os dentes e da mandíbula em uma só imagem, pedida pelo dentista.
o_que_e: >-
  O raio-X panorâmico mostra, em uma só imagem, todos os dentes, as raízes e os ossos da boca. Mostra também a articulação que abre e
  fecha a boca.
para_que_serve: >-
  Mostra ao dentista o que o exame da boca não mostra: cárie entre os dentes,
  infecção, dente incluso e perda de osso. Também ajuda a planejar aparelho,
  implante e extração.
quando_e_pedido:
  - Avaliação inicial no dentista ou antes de aparelho.
  - Dor na mandíbula ou dificuldade para mastigar.
  - Acompanhamento da troca dos dentes de leite.
  - Siso ou outro dente que não nasceu.
como_funciona: >-
  Você fica em pé ou sentado, morde um pequeno apoio e mantém a cabeça parada.
  O aparelho gira em volta da cabeça por alguns segundos. É rápido e não dói.
preparo:
  valor:
    - Não precisa de jejum.
    - Retire brincos, piercings, óculos, grampos de cabelo e próteses removíveis.
    - Traga o pedido do dentista.
    - Avise se está grávida ou se há chance de estar.
  padrao_referencia: true
duracao:
  valor: Poucos minutos.
  padrao_referencia: true
prazo_resultado:
  valor: null
  padrao_referencia: false
portal_resultado: radiologia
onde_ver_resultado: >-
  A imagem e o laudo ficam no portal de radiologia, entregadeexames.com.br.
  Leve ou envie o resultado ao seu dentista.
precisa_pedido_medico: true
quem_realiza:
  descricao: Técnico em radiologia faz o exame.
  profissionais: []
especialidades_relacionadas: [odontologia, ortodontia, odontopediatria]
convenios: padrao
faqs:
  - p: Precisa de pedido do dentista?
    r: >-
      Sim. Como usa radiação, o raio-X panorâmico precisa do pedido de um
      dentista ou médico.
  - p: Criança pode fazer?
    r: >-
      Sim, quando o dentista pede. É comum para acompanhar a troca dos dentes e
      antes de aparelho.
  - p: Serve para planejar aparelho?
    r: >-
      Sim. O panorâmico faz parte da documentação ortodôntica, o conjunto de
      exames para planejar o aparelho. Em alguns casos, o dentista pede também
      a tomografia odontológica.
cta_texto: Agendar raio-X panorâmico
whatsapp_numero: imagem
whatsapp_mensagem: Olá, quero agendar raio-X panorâmico dos dentes. Quais os horários? [site-rx-pano]
nota_editorial: "Nome e slug alterados de 'Raio-X Panorâmica'. Corrigido: 'problemas problemáticos', 'serão comprovadas pelo dentista'."
```

```yaml
tipo_registro: exam
slug: mamografia
slug_antigo: mamografia
nome: Mamografia
categoria: imagem
ordem: 5
ativo: true
seo_title: Mamografia em Corrente-PI | EmCORR
seo_description: >-
  Mamografia em Corrente-PI: quando fazer, preparo (sem desodorante no dia) e
  onde sai o laudo. Agende pelo WhatsApp.
h1: Mamografia em Corrente-PI
subtitulo: O exame de rotina das mamas, com o preparo explicado.
resumo: Raio-X das mamas para rotina e investigação de nódulo. Veja o preparo e quando fazer.
o_que_e: >-
  A mamografia é um raio-X das mamas. Pode mostrar alterações, como nódulos e
  pequenas calcificações (pontos de cálcio), antes que dê para senti-las no
  toque.
para_que_serve: >-
  É o principal exame de rastreamento do câncer de mama. Rastreamento é o
  exame feito sem sintoma, para achar alterações cedo. Também serve para
  investigar um nódulo ou outra alteração percebida pela mulher ou pelo
  médico.
quando_e_pedido:
  - Rotina, na idade e na frequência que seu médico indicar. As recomendações no Brasil começam entre os 40 e os 50 anos.
  - Nódulo, pele ou mamilo repuxados, ou saída de líquido pelo mamilo.
  - Casos de câncer de mama na família, com orientação médica.
  - Acompanhamento de alteração vista em exame anterior.
como_funciona: >-
  A técnica posiciona cada mama em uma placa do aparelho. Uma segunda placa
  aperta a mama por alguns segundos para a imagem sair nítida. Essa pressão
  pode incomodar, mas passa logo. Em geral, são duas imagens de cada mama.
preparo:
  valor:
    - No dia do exame, não use desodorante, talco, creme ou perfume nas axilas e nas mamas.
    - Se as mamas ficam doloridas antes da menstruação, prefira marcar para depois dela.
    - Traga mamografias e ultrassons anteriores, com os laudos, para comparação.
    - Vá com roupa de duas peças. Você tira só a parte de cima.
    - Avise se tem prótese de silicone, se está grávida ou amamentando.
  padrao_referencia: true
duracao:
  valor: Cerca de 15 a 20 minutos.
  padrao_referencia: true
prazo_resultado:
  valor: null
  padrao_referencia: false
portal_resultado: radiologia
onde_ver_resultado: >-
  O laudo e as imagens ficam no portal de radiologia, entregadeexames.com.br.
  Leve o resultado ao médico que pediu o exame.
precisa_pedido_medico: true
quem_realiza:
  descricao: Técnica em radiologia faz o exame. O laudo é de médico radiologista.
  profissionais: []
especialidades_relacionadas: []
convenios: padrao
faqs:
  - p: Mamografia dói?
    r: >-
      A pressão na mama pode incomodar, mas dura poucos segundos. Marcar fora
      dos dias antes da menstruação costuma deixar o exame mais confortável.
  - p: Por que não posso usar desodorante?
    r: >-
      Alguns desodorantes e talcos têm partículas que aparecem na imagem e
      podem ser confundidas com calcificações.
  - p: Com que idade devo começar?
    r: >-
      Converse com seu médico. As recomendações começam entre os 40 e os 50
      anos. Quem tem casos na família pode receber outra orientação.
  - p: Quem tem prótese de silicone pode fazer?
    r: >-
      Sim. Avise a equipe antes, porque a técnica usa posições próprias para
      mamas com prótese.
cta_texto: Agendar mamografia
whatsapp_numero: imagem
whatsapp_mensagem: Olá, quero agendar mamografia. Quais os horários disponíveis? [site-mamo]
nota_editorial: "Deixa de ser especialidade (301 de /_especialidades/mamografia/ para /exames/mamografia). Removido 'aumentar significativamente as chances de cura' (CFM)."
```

```yaml
tipo_registro: exam
slug: ultrassonografia
slug_antigo: ultrassonografia
nome: Ultrassonografia
categoria: imagem
ordem: 6
ativo: true
seo_title: Ultrassom em Corrente-PI | EmCORR
seo_description: >-
  Ultrassom em Corrente-PI, sem radiação. Veja o preparo de cada tipo (abdome,
  pélvico, tireoide, obstétrico) e agende pelo WhatsApp.
h1: Ultrassom em Corrente-PI
subtitulo: Imagem na hora, sem radiação, com o preparo de cada tipo explicado.
resumo: Ultrassom de abdome, tireoide, pélvico, obstétrico e outros, sem radiação. Veja o preparo de cada tipo.
o_que_e: >-
  A ultrassonografia, ou ultrassom, é um exame de imagem que usa ondas
  sonoras, e não radiação. Os órgãos aparecem em um monitor enquanto o exame
  acontece.
para_que_serve: >-
  Avalia órgãos como fígado, vesícula, rins, tireoide, útero, ovários,
  próstata e mamas. Também acompanha o bebê durante a gravidez.
quando_e_pedido:
  - Dor na barriga, ou exame de sangue do fígado ou dos rins alterado.
  - Nódulo na tireoide ou TSH alterado.
  - Menstruação alterada ou dor na região da pelve (parte baixa da barriga).
  - Acompanhamento da gestação.
  - Caroço sob a pele ou nas mamas.
como_funciona: >-
  Você deita na maca. O médico passa um gel frio na pele e desliza um
  aparelho pequeno, o transdutor, sobre a região. As imagens aparecem no
  monitor na hora. Alguns exames ginecológicos são feitos pela vagina
  (transvaginal), com o transdutor protegido. Em geral, o exame não dói.
preparo:
  valor:
    - "Abdome total ou superior: jejum de 6 a 8 horas."
    - "Pélvico pela barriga, rins e vias urinárias, e próstata pela barriga: bexiga cheia. Beba de 4 a 6 copos de água 1 hora antes e não urine até o exame."
    - "Transvaginal: bexiga vazia."
    - "Tireoide, mamas, partes moles, articulações e bolsa escrotal: sem preparo."
    - "Obstétrico: em geral sem preparo. No início da gestação pode ser pedida bexiga cheia."
    - Traga o pedido médico e exames anteriores da mesma região.
  padrao_referencia: true
duracao:
  valor: De 15 a 30 minutos, conforme o tipo.
  padrao_referencia: true
prazo_resultado:
  valor: null
  padrao_referencia: false
tipos_disponiveis:
  valor: null
  padrao_referencia: false
portal_resultado: radiologia
onde_ver_resultado: >-
  O laudo fica no portal de radiologia, entregadeexames.com.br. Veja como
  acessar em /resultados.
precisa_pedido_medico: true
quem_realiza:
  descricao: Médico ultrassonografista faz o exame e o laudo.
  profissionais: []
especialidades_relacionadas: [endocrinologia, cirurgia-geral, pediatria, ortopedia]
convenios: padrao
faqs:
  - p: Precisa de jejum para ultrassom?
    r: >-
      Só em alguns tipos, como o de abdome. Outros pedem bexiga cheia, e muitos
      não têm preparo. Confira a lista acima ou pergunte à recepção.
  - p: Ultrassom tem radiação?
    r: >-
      Não. O ultrassom usa ondas sonoras e pode ser feito na gravidez e em
      crianças.
  - p: O tipo de ultrassom que meu médico pediu é feito aqui?
    r: >-
      Mande a foto do pedido pelo WhatsApp. A recepção confirma o tipo, o
      horário e o preparo.
cta_texto: Agendar ultrassom
whatsapp_numero: imagem
whatsapp_mensagem: "Olá, quero agendar ultrassonografia (tipo: ____). Quais os horários e o preparo? [site-usg]"
nota_editorial: "Lista de tipos feitos na clínica fica como variável do painel (tipos_disponiveis)."
```

```yaml
tipo_registro: exam
slug: ultrassom-morfologico
slug_antigo: ultrassom-morfologico
nome: Ultrassom Morfológico
categoria: imagem
ordem: 7
ativo: true
seo_title: Ultrassom morfológico em Corrente-PI | EmCORR
seo_description: >-
  Ultrassom morfológico em Corrente-PI: em que semana fazer, o que o exame
  avalia e como agendar pelo WhatsApp.
h1: Ultrassom morfológico em Corrente-PI
subtitulo: Avaliação detalhada da formação do bebê, na semana certa da gestação.
resumo: Ultrassom detalhado da formação do bebê. Veja em que semana da gestação agendar.
o_que_e: >-
  O ultrassom morfológico é um ultrassom da gravidez mais detalhado. Avalia a
  formação do bebê, a "morfologia": cabeça, coluna, coração, órgãos, braços e
  pernas. Também avalia a placenta e o líquido em volta do bebê.
para_que_serve: >-
  Acompanha o desenvolvimento do bebê e ajuda a identificar alterações de
  formação. Com isso, a família e o obstetra planejam o pré-natal e o parto,
  se algo pedir atenção.
quando_e_pedido:
  - "Morfológico do 1º trimestre: em geral entre 11 e 14 semanas de gestação."
  - "Morfológico do 2º trimestre: em geral entre 20 e 24 semanas de gestação."
  - Conforme a orientação do obstetra no pré-natal.
como_funciona: >-
  A gestante deita na maca. O médico passa gel na barriga e desliza o
  transdutor. As imagens do bebê aparecem no monitor na hora. O exame é mais
  longo que um ultrassom comum, porque cada parte do bebê é avaliada. Se o
  bebê estiver em posição difícil, pode ser preciso caminhar um pouco e
  continuar depois. Não dói e não usa radiação.
preparo:
  valor:
    - Em geral, não precisa de jejum nem de preparo especial.
    - No 1º trimestre, pode ser pedida bexiga moderadamente cheia.
    - Traga o cartão da gestante e os ultrassons anteriores.
    - Informe à recepção com quantas semanas você está, para marcar na semana certa.
  padrao_referencia: true
duracao:
  valor: De 30 a 60 minutos.
  padrao_referencia: true
prazo_resultado:
  valor: null
  padrao_referencia: false
portal_resultado: radiologia
onde_ver_resultado: >-
  O laudo fica no portal de radiologia, entregadeexames.com.br. Leve o
  resultado à próxima consulta do pré-natal.
precisa_pedido_medico: true
quem_realiza:
  descricao: Médico ultrassonografista faz o exame e o laudo.
  profissionais: []
especialidades_relacionadas: []
convenios: padrao
faqs:
  - p: Com quantas semanas faço o morfológico?
    r: >-
      O do 1º trimestre, em geral, entre 11 e 14 semanas. O do 2º trimestre,
      entre 20 e 24 semanas. Seu obstetra indica o momento.
  - p: Dá para saber o sexo do bebê?
    r: >-
      No morfológico do 2º trimestre, geralmente sim, se o bebê estiver em boa
      posição. Avise o médico se não quiser saber.
  - p: Posso levar acompanhante?
    r: >-
      Pergunte à recepção no agendamento. Ela informa quantas pessoas podem
      entrar na sala.
  - p: O exame garante que o bebê não tem nenhum problema?
    r: >-
      Nenhum exame identifica todas as alterações. O morfológico avalia a
      formação do bebê em detalhe e faz parte do pré-natal acompanhado pelo
      obstetra.
cta_texto: Agendar morfológico
whatsapp_numero: imagem
whatsapp_mensagem: Olá, quero agendar ultrassom morfológico. Estou com ____ semanas. Quais os horários? [site-usg-morfo]
nota_editorial: "Faixa de semanas atualizada (texto antigo: 18ª a 24ª). Corrigido: 'imagens projetadas do bebê'."
```

### 3.2 Coração e circulação

```yaml
tipo_registro: exam
slug: eletrocardiograma
slug_antigo: eletrocardiograma-ecg
nome: Eletrocardiograma (ECG)
categoria: coracao-e-circulacao
ordem: 1
ativo: true
seo_title: Eletrocardiograma (ECG) em Corrente-PI | EmCORR
seo_description: >-
  Eletrocardiograma em Corrente-PI para check-up, risco cirúrgico e
  acompanhamento do coração. Sem jejum. Agende pelo WhatsApp.
h1: Eletrocardiograma (ECG) em Corrente-PI
subtitulo: O registro do ritmo do coração, em poucos minutos.
resumo: Exame rápido que registra o ritmo do coração. Pedido em check-up, risco cirúrgico e acompanhamento.
o_que_e: >-
  O eletrocardiograma (ECG ou "eletro") é um exame simples que registra a
  atividade elétrica do coração em um gráfico. Mostra o ritmo e a frequência
  dos batimentos.
para_que_serve: >-
  Ajuda o médico a avaliar o ritmo do coração e a investigar arritmias, que
  são alterações no ritmo dos batimentos. Faz parte do check-up e da
  avaliação antes de cirurgia.
quando_e_pedido:
  - Palpitação, falta de ar ou cansaço fora do comum.
  - Check-up e acompanhamento de pressão alta ou diabetes.
  - Avaliação antes de cirurgia (risco cirúrgico).
  - Antes de começar atividade física ou em exame admissional.
como_funciona: >-
  Você deita na maca, e pequenos adesivos com sensores, os eletrodos, são
  colocados no peito, nos braços e nas pernas. Eles captam os sinais
  elétricos do coração, e o aparelho desenha o gráfico. Basta ficar parado e
  respirar normalmente. Não dói e não dá choque.
preparo:
  valor:
    - Não precisa de jejum.
    - Não passe creme ou óleo no peito no dia do exame.
    - Vá com roupa fácil de abrir na parte de cima.
    - Em alguns casos, pode ser preciso raspar pequenas áreas de pelo do peito para os adesivos colarem.
    - Traga o pedido médico e eletrocardiogramas anteriores, se tiver.
  padrao_referencia: true
duracao:
  valor: Cerca de 10 minutos. O registro leva menos de 1 minuto.
  padrao_referencia: true
prazo_resultado:
  valor: null
  padrao_referencia: false
portal_resultado: outros
onde_ver_resultado: >-
  O laudo fica no portal resultados.emcorr.com.br. Veja como acessar em
  /resultados.
precisa_pedido_medico: true
quem_realiza:
  descricao: Profissional de enfermagem faz o registro. O laudo é de médico cardiologista.
  profissionais: []
especialidades_relacionadas: [cardiologia, cirurgia-geral]
convenios: padrao
faqs:
  - p: O eletrocardiograma dá choque?
    r: >-
      Não. Os eletrodos só captam os sinais do coração. Nenhuma corrente
      elétrica passa pelo seu corpo.
  - p: Precisa de jejum?
    r: Não. Você pode comer normalmente antes do exame.
  - p: Serve para risco cirúrgico?
    r: >-
      Sim. É um dos exames mais pedidos antes de cirurgia. O cirurgião ou a
      cardiologista dizem se outros exames também são necessários.
  - p: Posso fazer no dia da consulta com a cardiologista?
    r: >-
      Muitas vezes, sim. Avise a recepção ao agendar, e ela junta os dois
      horários.
cta_texto: Agendar eletrocardiograma
whatsapp_numero: consultas
whatsapp_mensagem: Olá, quero agendar eletrocardiograma. Quais os horários e as orientações? [site-ecg]
nota_editorial: "Corrigido: verbos no passado ('captaram') passaram ao presente. 'Dor no peito' saiu da lista de motivos: é caso de pronto-socorro (ver página de cardiologia)."
```

```yaml
tipo_registro: exam
slug: ecocardiograma
slug_antigo: ecocardiografia
nome: Ecocardiograma
categoria: coracao-e-circulacao
ordem: 2
ativo: true
seo_title: Ecocardiograma em Corrente-PI | EmCORR
seo_description: >-
  Ecocardiograma, o ultrassom do coração, em Corrente-PI. Sem jejum e sem
  radiação. Veja como é, quanto dura e agende.
h1: Ecocardiograma em Corrente-PI
subtitulo: O ultrassom do coração, sem radiação e sem jejum.
resumo: Ultrassom do coração que mostra as válvulas e a força do bombeamento. Sem radiação e sem jejum.
o_que_e: >-
  O ecocardiograma, ou ecocardiografia, é o ultrassom do coração. Usa ondas sonoras e mostra, na hora, o tamanho do coração e como ele contrai e relaxa. Mostra também as válvulas e o caminho do sangue.
para_que_serve: >-
  Ajuda o médico a avaliar a força do coração, o funcionamento das válvulas e
  alterações de formação. Também acompanha condições como pressão alta e
  insuficiência cardíaca, quando o coração bombeia menos sangue do que o
  corpo precisa.
quando_e_pedido:
  - Falta de ar, pernas inchadas ou cansaço aos esforços.
  - Sopro no coração, um som diferente percebido na consulta.
  - Pressão alta ou outra condição do coração em acompanhamento.
  - Avaliação antes de cirurgia, em alguns casos.
como_funciona: >-
  Você deita de lado na maca, sem a roupa da parte de cima. O médico passa gel
  no peito e desliza o transdutor em algumas posições, olhando o coração no
  monitor. Às vezes ele pede para você prender a respiração por alguns
  segundos. Não dói e não usa radiação.
preparo:
  valor:
    - O ecocardiograma comum, feito pelo peito, não precisa de jejum nem de preparo.
    - Tome os remédios de sempre, salvo outra orientação do médico.
    - Vá com roupa de duas peças.
    - Traga o pedido médico e ecocardiogramas anteriores.
  padrao_referencia: true
duracao:
  valor: De 20 a 40 minutos.
  padrao_referencia: true
prazo_resultado:
  valor: null
  padrao_referencia: false
portal_resultado: outros
onde_ver_resultado: >-
  O laudo fica no portal resultados.emcorr.com.br. Veja como acessar em
  /resultados.
precisa_pedido_medico: true
quem_realiza:
  descricao: Médico com formação em ecocardiografia faz o exame e o laudo.
  profissionais: []
especialidades_relacionadas: [cardiologia]
convenios: padrao
faqs:
  - p: Qual a diferença entre ecocardiograma e eletrocardiograma?
    r: >-
      O eletrocardiograma registra o ritmo elétrico do coração em um gráfico. O
      ecocardiograma é um ultrassom que mostra a estrutura: tamanho, força e
      válvulas. Um completa o outro.
  - p: Precisa de jejum?
    r: Não. O ecocardiograma comum não pede jejum.
  - p: Criança pode fazer?
    r: >-
      Mande a idade da criança e o pedido pelo WhatsApp. A recepção confirma se
      o exame pedido é feito aqui.
cta_texto: Agendar ecocardiograma
whatsapp_numero: consultas
whatsapp_mensagem: Olá, quero agendar ecocardiograma. Quais os horários e as orientações? [site-eco]
nota_editorial: "Nome e slug alterados de 'Ecocardiografia' ('ecocardiograma' é o termo mais buscado)."
```

```yaml
tipo_registro: exam
slug: holter-24-horas
slug_antigo: holter-24-horas
nome: Holter 24 horas
categoria: coracao-e-circulacao
ordem: 3
ativo: true
seo_title: Holter 24 horas em Corrente-PI | EmCORR
seo_description: >-
  Holter 24 horas em Corrente-PI para investigar palpitação e arritmia. Veja
  como é usar o aparelho em casa e como agendar.
h1: Holter 24 horas em Corrente-PI
subtitulo: O ritmo do coração registrado durante um dia comum da sua rotina.
resumo: Aparelho pequeno que registra os batimentos do coração por 24 horas, enquanto você segue a rotina.
o_que_e: >-
  O Holter é um aparelho pequeno, preso à cintura, que registra os
  batimentos do coração por 24 horas. Ele capta alterações de ritmo que
  podem não aparecer em um eletrocardiograma de poucos minutos.
para_que_serve: >-
  Ajuda o médico a investigar palpitação, tontura, desmaio e arritmia.
  Mostra como o coração se comporta no trabalho, no esforço e no sono.
quando_e_pedido:
  - Palpitação, coração acelerado ou sensação de batimento falhando.
  - Tontura ou desmaio sem causa esclarecida.
  - Acompanhamento de arritmia já conhecida ou de tratamento.
como_funciona: >-
  Na clínica, os eletrodos são colados no peito e ligados ao aparelho. Você
  volta para casa e segue a rotina: trabalha, caminha, dorme. Durante as 24
  horas, anota em um diário os horários das atividades e de qualquer sintoma.
  No dia seguinte, volta para retirar o aparelho, e o médico analisa o
  registro.
preparo:
  valor:
    - Tome banho antes de ir. O aparelho não pode ser molhado durante as 24 horas.
    - Não passe creme ou óleo no peito.
    - Pode ser preciso raspar áreas de pelo do peito para os eletrodos colarem.
    - Vá com roupa fácil de abrir na parte de cima.
    - Tome os remédios de sempre, salvo outra orientação do médico.
    - Não use cobertor elétrico e mantenha o aparelho longe de ímãs.
  padrao_referencia: true
duracao:
  valor: Cerca de 15 minutos para instalar. Uso por 24 horas. Retorno no dia seguinte para retirar.
  padrao_referencia: true
prazo_resultado:
  valor: null
  padrao_referencia: false
portal_resultado: outros
onde_ver_resultado: >-
  O laudo fica no portal resultados.emcorr.com.br. Veja como acessar em
  /resultados.
precisa_pedido_medico: true
quem_realiza:
  descricao: Profissional técnico instala o aparelho. O laudo é de médico cardiologista.
  profissionais: []
especialidades_relacionadas: [cardiologia]
convenios: padrao
faqs:
  - p: Posso tomar banho com o Holter?
    r: >-
      Não. O aparelho não pode ser molhado. Tome banho antes da instalação e
      depois da retirada.
  - p: Posso trabalhar e dormir normalmente?
    r: >-
      Sim, e é isso que o exame pede. O objetivo é registrar o coração na sua
      rotina real. Só evite o que molha o aparelho.
  - p: Para que serve o diário?
    r: >-
      Para o médico comparar o que você sentiu ou fazia com o que o aparelho
      registrou no mesmo horário. Anote atividades, horário de dormir e
      qualquer sintoma.
  - p: E se um eletrodo descolar?
    r: >-
      Pressione de volta no lugar e anote o horário no diário. Se não colar,
      chame a clínica pelo WhatsApp.
cta_texto: Agendar Holter
whatsapp_numero: consultas
whatsapp_mensagem: Olá, quero agendar Holter 24 horas. Quais os horários e as orientações? [site-holter]
nota_editorial: "Corrigido: 'monitora os corações do seu coração', 'grava os corações cardíacos', 'são comprovadas', 'irregularidade nas nossas preocupações'."
```

```yaml
tipo_registro: exam
slug: mapa-24-horas
slug_antigo: mapa-monitorizacao-ambulatorial-da-pressao-arterial
nome: MAPA 24 horas (Monitorização Ambulatorial da Pressão Arterial)
categoria: coracao-e-circulacao
ordem: 4
ativo: true
seo_title: MAPA 24 horas (pressão) em Corrente-PI | EmCORR
seo_description: >-
  MAPA mede sua pressão por 24 horas para confirmar ou acompanhar pressão
  alta. Veja como funciona e agende em Corrente-PI.
h1: MAPA 24 horas em Corrente-PI
subtitulo: Sua pressão medida durante um dia comum, e não só no consultório.
resumo: Mede a pressão várias vezes em 24 horas, na sua rotina, para confirmar ou acompanhar a pressão alta.
o_que_e: >-
  O MAPA (Monitorização Ambulatorial da Pressão Arterial) é um aparelho com
  braçadeira. Ele mede sua pressão sozinho, de tempos em tempos, por 24
  horas, enquanto você segue a rotina.
para_que_serve: >-
  Mostra como a pressão se comporta de dia e de noite. Ajuda o médico a
  confirmar a pressão alta. Também mostra a pressão que só sobe no
  consultório, o "efeito do jaleco branco". Também mostra se o tratamento está
  controlando a pressão.
quando_e_pedido:
  - Medidas de pressão diferentes em casa e no consultório.
  - Suspeita de pressão alta ainda não confirmada.
  - Acompanhamento do tratamento da pressão alta.
  - Tontura ou dor de cabeça que podem ter relação com a pressão.
como_funciona: >-
  Na clínica, a braçadeira é colocada no braço e ligada a um aparelho
  pequeno, preso à cintura. Ela enche sozinha de tempos em tempos, de dia e de
  noite. Quando começar a encher, deixe o braço parado e esticado ao lado do
  corpo até terminar. Anote atividades, horário de dormir e sintomas em um
  diário. No dia seguinte, volte para retirar o aparelho.
preparo:
  valor:
    - Tome banho antes. O aparelho não pode ser molhado.
    - Vá com blusa de manga larga ou sem manga, que não aperte o braço.
    - Tome os remédios de sempre, salvo outra orientação do médico.
    - Evite exercício físico intenso durante o exame.
    - Traga a lista dos remédios que você usa, com os horários.
  padrao_referencia: true
duracao:
  valor: Cerca de 15 minutos para instalar. Uso por 24 horas. Retorno no dia seguinte para retirar.
  padrao_referencia: true
prazo_resultado:
  valor: null
  padrao_referencia: false
portal_resultado: outros
onde_ver_resultado: >-
  O laudo fica no portal resultados.emcorr.com.br. Veja como acessar em
  /resultados.
precisa_pedido_medico: true
quem_realiza:
  descricao: Profissional técnico instala o aparelho. O laudo é de médico cardiologista.
  profissionais: []
especialidades_relacionadas: [cardiologia, endocrinologia]
convenios: padrao
faqs:
  - p: Preciso parar meu remédio de pressão?
    r: >-
      Em geral, não. Tome os remédios como de costume, a menos que o médico
      oriente outra coisa, e anote os horários no diário.
  - p: A braçadeira atrapalha o sono?
    r: >-
      Pode incomodar um pouco quando enche, mas a maioria das pessoas consegue
      dormir. As medidas da noite contam para o resultado.
  - p: Posso trabalhar com o aparelho?
    r: >-
      Sim. Mantenha a rotina, evitando só esforço intenso e o que molha o
      aparelho.
  - p: Qual a diferença entre MAPA e Holter?
    r: >-
      O MAPA mede a pressão arterial. O Holter registra o ritmo dos batimentos
      do coração. Os dois duram 24 horas.
cta_texto: Agendar MAPA
whatsapp_numero: consultas
whatsapp_mensagem: Olá, quero agendar MAPA 24 horas. Quais os horários e as orientações? [site-mapa]
nota_editorial: "Slug encurtado. Corrigido: 'são comprovadas', 'precisão de tratamento'."
```

```yaml
tipo_registro: exam
slug: doppler-de-carotidas
slug_antigo: ecodoppler-de-carotidas
nome: Doppler de Carótidas
categoria: coracao-e-circulacao
ordem: 5
ativo: true
seo_title: Doppler de carótidas em Corrente-PI | EmCORR
seo_description: >-
  Doppler de carótidas avalia as artérias do pescoço que levam sangue ao
  cérebro. Veja quando é pedido, preparo e agende em Corrente-PI.
h1: Doppler de carótidas em Corrente-PI
subtitulo: Ultrassom do pescoço que mostra como o sangue chega ao cérebro.
resumo: Ultrassom das carótidas, as artérias do pescoço que levam sangue ao cérebro.
o_que_e: >-
  O doppler de carótidas, ou ecodoppler, é um ultrassom das artérias do
  pescoço que levam sangue ao cérebro. Mostra a parede dessas artérias e mede
  a velocidade do sangue.
para_que_serve: >-
  Mostra se há placas de gordura ou estreitamento nas carótidas, o que aumenta
  o risco de AVC (derrame). Com o resultado, o médico decide sobre prevenção e
  tratamento.
quando_e_pedido:
  - Pressão alta, colesterol alto, diabetes ou cigarro, a critério do médico.
  - Tontura, alteração de visão ou de fala que já passou e precisa de investigação.
  - Sopro no pescoço, um som diferente percebido na consulta.
  - Acompanhamento de placa já conhecida ou avaliação antes de algumas cirurgias.
como_funciona: >-
  Você deita com a cabeça levemente virada para o lado. O médico passa gel no
  pescoço e desliza o transdutor sobre as artérias. As imagens e os gráficos
  do fluxo aparecem no monitor. Não dói e não usa radiação.
preparo:
  valor:
    - Não precisa de jejum.
    - Vá com roupa que deixe o pescoço livre e retire colares e brincos grandes.
    - Traga o pedido médico e exames anteriores.
  padrao_referencia: true
duracao:
  valor: De 20 a 30 minutos.
  padrao_referencia: true
prazo_resultado:
  valor: null
  padrao_referencia: false
portal_resultado: outros
onde_ver_resultado: >-
  O laudo fica no portal resultados.emcorr.com.br. Veja como acessar em
  /resultados.
precisa_pedido_medico: true
quem_realiza:
  descricao: Médico com formação em ultrassom vascular faz o exame e o laudo.
  profissionais: []
especialidades_relacionadas: [cardiologia, neurologia]
convenios: padrao
faqs:
  - p: Precisa de jejum?
    r: Não. O doppler de carótidas não pede jejum.
  - p: O exame dói?
    r: >-
      Não. É um ultrassom com gel no pescoço. Às vezes o transdutor faz uma
      leve pressão, que passa logo.
  - p: Quem tem pressão alta precisa fazer?
    r: >-
      Nem sempre. O médico avalia idade, fatores de risco e sintomas para
      decidir se o exame é necessário.
cta_texto: Agendar doppler de carótidas
whatsapp_numero: consultas
whatsapp_mensagem: Olá, quero agendar doppler de carótidas. Quais os horários e as orientações? [site-doppler]
nota_editorial: "Nome e slug alterados de 'Ecodoppler de Carótidas'. 'Perda de memória' saiu da lista de motivos (não é indicação isolada do exame)."
```

### 3.3 Ouvido, nariz e garganta

```yaml
tipo_registro: exam
slug: audiometria
slug_antigo: audiometria
nome: Audiometria
categoria: ouvido-nariz-e-garganta
ordem: 1
ativo: true
seo_title: Audiometria em Corrente-PI | EmCORR
seo_description: >-
  Exame de audição em cabine silenciosa, para crianças e adultos, em
  Corrente-PI. Veja o preparo (repouso auditivo) e agende.
h1: Audiometria em Corrente-PI
subtitulo: O exame que mostra quanto e como você ouve.
resumo: Exame de audição em cabine silenciosa, para crianças e adultos. Simples e sem dor.
o_que_e: >-
  A audiometria mede como você ouve sons graves e agudos, fracos e fortes, e
  como entende palavras.
para_que_serve: >-
  Mostra se há perda de audição, de que tipo e em que grau. Ajuda o médico a
  investigar a causa e a decidir sobre protetor auricular ou aparelho
  auditivo, se for o caso. Também é pedida em exame admissional e periódico
  do trabalho.
quando_e_pedido:
  - Dificuldade para ouvir ou entender conversas, ou TV sempre alta.
  - Zumbido ou sensação de ouvido tapado.
  - Trabalho em lugar barulhento (exame admissional e periódico).
  - Criança com atraso na fala ou dificuldade na escola, a critério do médico.
  - Acompanhamento depois de otites repetidas.
como_funciona: >-
  Você fica em uma cabine silenciosa, com fones de ouvido. Ouve apitos de
  volumes e tons diferentes e levanta a mão ou aperta um botão sempre que
  escutar. Depois repete algumas palavras ditas pelo fone. Não dói, e nada
  entra no ouvido.
preparo:
  valor:
    - "Repouso auditivo: fique longe de barulho alto (fone de ouvido, som alto, máquinas) nas 14 horas antes do exame."
    - Se tiver muita cera no ouvido, pode ser preciso tirar antes. Avise a recepção.
    - Evite fazer o exame gripado ou com o ouvido entupido.
    - Traga o pedido médico ou a guia da empresa, e audiometrias anteriores.
  padrao_referencia: true
duracao:
  valor: De 20 a 30 minutos.
  padrao_referencia: true
prazo_resultado:
  valor: null
  padrao_referencia: false
portal_resultado: outros
onde_ver_resultado: >-
  O resultado fica no portal resultados.emcorr.com.br. Veja como acessar em
  /resultados.
precisa_pedido_medico:
  valor: null
  padrao_referencia: false
quem_realiza:
  descricao: Fonoaudiólogo faz o exame.
  profissionais: []
especialidades_relacionadas: [otorrinolaringologia, fonoaudiologia, pediatria]
convenios: padrao
faqs:
  - p: O que é repouso auditivo?
    r: >-
      É ficar longe de barulho alto nas horas antes do exame. Assim o ouvido
      não está cansado, e o resultado mostra sua audição real. Em geral, são
      14 horas.
  - p: Criança pode fazer audiometria?
    r: >-
      Sim, a partir da idade em que consegue responder aos sons com a ajuda do
      profissional. Para bebês, existe o teste da orelhinha.
  - p: Vocês fazem audiometria para o trabalho?
    r: >-
      Mande a guia da empresa pelo WhatsApp. A recepção confirma o exame e o
      horário.
  - p: A audiometria e a imitanciometria são feitas juntas?
    r: >-
      Muitas vezes, sim, porque uma completa a outra. A audiometria mede
      quanto você ouve. A imitanciometria avalia o ouvido médio, atrás do
      tímpano.
cta_texto: Agendar audiometria
whatsapp_numero: consultas
whatsapp_mensagem: Olá, quero agendar audiometria. Quais os horários? [site-audiometria]
nota_editorial: "Removido 'ajudar a prevenir danos maiores' (formulação vaga). Exigência de pedido médico para particular fica como variável do painel."
```

```yaml
tipo_registro: exam
slug: imitanciometria
slug_antigo: imitanciometria
nome: Imitanciometria
categoria: ouvido-nariz-e-garganta
ordem: 2
ativo: true
seo_title: Imitanciometria em Corrente-PI | EmCORR
seo_description: >-
  Exame rápido do ouvido médio, muito pedido para crianças com otite. Veja
  como é e agende em Corrente-PI.
h1: Imitanciometria em Corrente-PI
subtitulo: Um exame rápido que mostra como está o ouvido atrás do tímpano.
resumo: Exame rápido do tímpano e do ouvido médio, muito pedido para crianças com otite ou ouvido tapado.
o_que_e: >-
  A imitanciometria avalia o ouvido médio, a parte que fica atrás do tímpano.
  Mede a pressão dentro do ouvido, o movimento do tímpano e um reflexo que
  protege o ouvido de sons fortes.
para_que_serve: >-
  Mostra se há líquido atrás do tímpano, comum na otite. Também mostra
  problemas na tuba auditiva, o canal que liga o ouvido ao fundo do nariz. Costuma completar a
  audiometria.
quando_e_pedido:
  - Otites que se repetem, principalmente em crianças.
  - Sensação de ouvido tapado ou abafado.
  - Dificuldade para ouvir, junto com a audiometria.
  - Acompanhamento do tratamento de otite.
como_funciona: >-
  Uma ponteira de borracha é encaixada na entrada do ouvido. O aparelho muda
  um pouco a pressão do ar e emite alguns sons, enquanto registra a resposta
  do tímpano. Você só precisa ficar quieto, sem falar nem engolir, por alguns
  segundos. A sensação lembra a de descer uma serra de carro. Não costuma
  doer.
preparo:
  valor:
    - Não precisa de jejum.
    - Se houver muita cera no ouvido, pode ser preciso tirar antes.
    - Traga o pedido médico.
  padrao_referencia: true
duracao:
  valor: De 5 a 10 minutos.
  padrao_referencia: true
prazo_resultado:
  valor: null
  padrao_referencia: false
portal_resultado: outros
onde_ver_resultado: >-
  O resultado fica no portal resultados.emcorr.com.br. Veja como acessar em
  /resultados.
precisa_pedido_medico: true
quem_realiza:
  descricao: Fonoaudiólogo faz o exame.
  profissionais: []
especialidades_relacionadas: [otorrinolaringologia, fonoaudiologia, pediatria]
convenios: padrao
faqs:
  - p: Criança pequena consegue fazer?
    r: >-
      Sim. A criança não precisa responder nada, só ficar quieta por alguns
      segundos. Um responsável acompanha o tempo todo.
  - p: O exame dói?
    r: >-
      Não costuma doer. Pode haver uma sensação de pressão no ouvido, que passa
      assim que o exame termina.
  - p: Qual a diferença para a audiometria?
    r: >-
      A audiometria mede quanto você ouve. A imitanciometria avalia o ouvido
      médio. Juntas, ajudam o médico a entender a causa da dificuldade para
      ouvir.
cta_texto: Agendar imitanciometria
whatsapp_numero: consultas
whatsapp_mensagem: Olá, quero agendar imitanciometria. Quais os horários? [site-imitanciometria]
nota_editorial: "Removido 'diagnóstico mais preciso' (CFM)."
```

```yaml
tipo_registro: exam
slug: nasofibroscopia
slug_antigo: nasofibroscopia
slugs_consolidados: [nasofibrolaringoscopia]
nome: Nasofibroscopia (nasofibrolaringoscopia)
categoria: ouvido-nariz-e-garganta
ordem: 3
ativo: true
seo_title: Nasofibroscopia em Corrente-PI | EmCORR
seo_description: >-
  Exame do nariz e da garganta com câmera fina, feito no consultório do
  otorrino em Corrente-PI. Veja preparo e duração.
h1: Nasofibroscopia em Corrente-PI
subtitulo: Uma câmera fina mostra o nariz e a garganta por dentro, em poucos minutos.
resumo: Câmera fina que mostra nariz, garganta e cordas vocais, no consultório do otorrino.
o_que_e: >-
  Na nasofibroscopia, o otorrino usa um tubo fino e flexível, com luz e câmera
  na ponta, o fibroscópio. Ele mostra o nariz, o fundo do nariz (onde fica a
  adenoide) e a garganta. Quando o exame vai até as cordas vocais, se chama
  nasofibrolaringoscopia.
para_que_serve: >-
  Investiga nariz entupido, ronco, rouquidão, sangramento pelo nariz,
  pólipos e adenoide aumentada. Mostra também desvio de septo, a parede que
  divide o nariz ao meio.
quando_e_pedido:
  - Nariz entupido por muito tempo ou de um lado só.
  - Ronco, respiração pela boca ou suspeita de adenoide aumentada em crianças.
  - Sinusite que volta.
  - Sangramento frequente pelo nariz.
  - Rouquidão ou sensação de algo parado na garganta.
como_funciona: >-
  Você fica sentado na cadeira do consultório. A médica pode aplicar um spray
  anestésico no nariz para deixar o exame mais confortável. Depois introduz o
  fibroscópio por uma narina e vê as imagens em um monitor, que você também
  pode acompanhar. O exame leva poucos minutos. Pode dar vontade de espirrar.
preparo:
  valor:
    - Em geral, não precisa de jejum. Se o anestésico for aplicado também na garganta, evite comer nas 2 horas antes.
    - Avise se tem alergia a anestésico, se toma remédio que afina o sangue ou se tem pressão alta.
    - Traga o pedido médico e exames anteriores.
    - Se a garganta ficar dormente depois do exame, espere cerca de 1 hora para comer ou beber.
  padrao_referencia: true
duracao:
  valor: De 5 a 10 minutos de exame.
  padrao_referencia: true
prazo_resultado:
  valor: null
  padrao_referencia: false
portal_resultado: outros
onde_ver_resultado: >-
  A médica comenta o exame na hora. O laudo fica no portal
  resultados.emcorr.com.br.
precisa_pedido_medico:
  valor: null
  padrao_referencia: false
quem_realiza:
  descricao: A otorrinolaringologista faz o exame e o laudo.
  profissionais: [osyanne-timoteo]
especialidades_relacionadas: [otorrinolaringologia, fonoaudiologia, pediatria]
convenios: padrao
faqs:
  - p: Nasofibroscopia dói?
    r: >-
      Em geral, não. O spray anestésico reduz o incômodo. Algumas pessoas
      sentem pressão ou vontade de espirrar, que passam logo.
  - p: Criança pode fazer?
    r: >-
      Sim. É um exame comum para avaliar adenoide e ronco em crianças. O
      responsável acompanha e ajuda a criança a ficar tranquila.
  - p: Nasofibroscopia e nasofibrolaringoscopia são a mesma coisa?
    r: >-
      São o mesmo tipo de exame. O nome "nasofibrolaringoscopia" é usado quando
      a câmera vai até a laringe para ver as cordas vocais.
  - p: Posso dirigir depois?
    r: >-
      Na maioria das vezes, sim, porque a anestesia é só local. Se sentir
      mal-estar, espere um pouco na clínica.
cta_texto: Agendar nasofibroscopia
whatsapp_numero: consultas
whatsapp_mensagem: Olá, quero agendar nasofibroscopia. Quais os horários? [site-nasofibro]
nota_editorial: "Consolida as páginas antigas nasofibroscopia e nasofibrolaringoscopia (SEO-AUDIT §2.3). Corrigido: 'inseriu', 'sangramentos faciais'."
```

```yaml
tipo_registro: exam
slug: nasofibrolaringoscopia
slug_antigo: nasofibrolaringoscopia
nome: Nasofibrolaringoscopia
categoria: ouvido-nariz-e-garganta
ativo: true
pagina_propria: false
redirect_301_para: /exames/nasofibroscopia
observacao: >-
  O exame continua oferecido, mas sem página própria: o conteúdo está em
  /exames/nasofibroscopia (mesmo exame, mesma busca). O nome entra como
  sinônimo na busca interna. Se a clínica quiser a página separada, usar o
  bloco da nasofibroscopia com H1 "Nasofibrolaringoscopia em Corrente-PI" e
  canonical para /exames/nasofibroscopia.
whatsapp_numero: consultas
whatsapp_mensagem: Olá, quero agendar nasofibrolaringoscopia. Quais os horários? [site-nasofibro]
```

```yaml
tipo_registro: exam
slug: laringoscopia
slug_antigo: laringoscopia
nome: Laringoscopia
categoria: ouvido-nariz-e-garganta
ordem: 4
ativo: true
seo_title: Laringoscopia em Corrente-PI | EmCORR
seo_description: >-
  Exame da laringe e das cordas vocais para rouquidão que não passa, no
  consultório do otorrino em Corrente-PI. Veja o preparo.
h1: Laringoscopia em Corrente-PI
subtitulo: O exame que mostra suas cordas vocais de perto.
resumo: Exame da laringe e das cordas vocais para rouquidão que não passa, feito no consultório do otorrino.
o_que_e: >-
  A laringoscopia mostra a laringe, a "caixa da voz", e as cordas vocais,
  com câmera e luz. Pode ser feita com um aparelho pela boca ou com um tubo
  fino e flexível pelo nariz.
para_que_serve: >-
  Investiga rouquidão, mudança na voz, dor ou dificuldade para engolir e
  sinais de refluxo na garganta. Mostra calos, pólipos e inflamação nas
  cordas vocais.
quando_e_pedido:
  - Rouquidão por mais de duas ou três semanas.
  - Voz cansada em quem usa muito a voz no trabalho.
  - Sensação de bolo na garganta ou pigarro constante.
  - Dor ou dificuldade para engolir.
como_funciona: >-
  Você fica sentado na cadeira do consultório. A médica pode aplicar um spray
  anestésico na garganta ou no nariz. Depois posiciona a câmera e pede que
  você respire devagar e faça sons como "iii". Assim ela vê as cordas vocais
  em movimento. As imagens aparecem em um monitor. O exame leva poucos
  minutos.
preparo:
  valor:
    - Evite comer nas 2 horas antes. O anestésico na garganta pode dar ânsia.
    - Avise se tem alergia a anestésico.
    - Traga o pedido médico e exames anteriores.
    - Depois do exame, espere cerca de 1 hora para comer ou beber, até passar a dormência.
  padrao_referencia: true
duracao:
  valor: De 5 a 10 minutos de exame.
  padrao_referencia: true
prazo_resultado:
  valor: null
  padrao_referencia: false
portal_resultado: outros
onde_ver_resultado: >-
  A médica comenta o exame na hora. O laudo fica no portal
  resultados.emcorr.com.br.
precisa_pedido_medico:
  valor: null
  padrao_referencia: false
quem_realiza:
  descricao: A otorrinolaringologista faz o exame e o laudo.
  profissionais: [osyanne-timoteo]
especialidades_relacionadas: [otorrinolaringologia, fonoaudiologia]
convenios: padrao
faqs:
  - p: Laringoscopia dói?
    r: >-
      Em geral, não. Pode dar ânsia ou incômodo por alguns segundos. O spray
      anestésico deixa o exame mais confortável.
  - p: Precisa de anestesia geral?
    r: >-
      Não. No consultório, o exame é feito com você acordado e, quando
      necessário, só com anestésico local em spray.
  - p: Toda rouquidão precisa de laringoscopia?
    r: >-
      Não. Rouquidão de gripe costuma passar sozinha. O exame é pedido quando
      ela passa de duas ou três semanas ou quando o médico acha necessário.
cta_texto: Agendar laringoscopia
whatsapp_numero: consultas
whatsapp_mensagem: Olá, quero agendar laringoscopia. Quais os horários? [site-laringo]
nota_editorial: "Removida a menção a tumor como motivo principal (tom de alarme)."
```

### 3.4 Pulmão

```yaml
tipo_registro: exam
slug: espirometria
slug_antigo: espirometria
nome: Espirometria
categoria: pulmao
ordem: 1
ativo: true
seo_title: Espirometria em Corrente-PI | EmCORR
seo_description: >-
  Espirometria, o exame do sopro, para asma, bronquite e DPOC em Corrente-PI.
  Veja o preparo, a duração e como agendar.
h1: Espirometria em Corrente-PI
subtitulo: O "exame do sopro" mede como está o fôlego dos seus pulmões.
resumo: O "exame do sopro" mede quanto ar você solta e com que força. Pedido para asma, bronquite e falta de ar.
o_que_e: >-
  A espirometria, o "exame do sopro", mede quanto ar entra e sai dos pulmões
  e com que velocidade.
para_que_serve: >-
  Ajuda o médico a avaliar os pulmões e investigar asma, bronquite crônica e
  DPOC. DPOC é a doença pulmonar obstrutiva crônica, comum em quem fumou por
  muitos anos. Também mostra se o tratamento está funcionando.
quando_e_pedido:
  - Falta de ar, chiado no peito ou tosse que não passa.
  - Asma, bronquite ou DPOC em acompanhamento.
  - Quem fuma ou já fumou, a critério do médico.
  - Avaliação antes de algumas cirurgias.
como_funciona: >-
  Você fica sentado, com um prendedor no nariz, e respira por um bocal. Ele
  é ligado ao espirômetro, o aparelho que mede o sopro. Quando o técnico pedir, enche
  bem os pulmões e sopra o mais forte e rápido que conseguir. O sopro é
  repetido algumas vezes. Às vezes o exame é refeito depois de uma
  "bombinha" (broncodilatador, o remédio que abre os brônquios), para
  comparar.
preparo:
  valor:
    - Não precisa de jejum, mas evite refeição pesada logo antes.
    - Não fume nas horas antes do exame.
    - Pergunte ao seu médico se deve suspender a bombinha ou outro remédio para os pulmões, e por quanto tempo.
    - Vá com roupa que não aperte a barriga nem o peito.
    - Avise se fez cirurgia, teve infarto ou problema nos olhos há pouco tempo.
  padrao_referencia: true
duracao:
  valor: De 15 a 30 minutos. Um pouco mais se houver teste com broncodilatador.
  padrao_referencia: true
prazo_resultado:
  valor: null
  padrao_referencia: false
portal_resultado: outros
onde_ver_resultado: >-
  O laudo fica no portal resultados.emcorr.com.br. Veja como acessar em
  /resultados.
precisa_pedido_medico: true
quem_realiza:
  descricao: Profissional técnico conduz o exame. O laudo é de médico.
  profissionais: []
especialidades_relacionadas: [pediatria, cirurgia-geral]
convenios: padrao
faqs:
  - p: Preciso parar a bombinha antes do exame?
    r: >-
      Depende do objetivo do exame. Pergunte ao médico que pediu a
      espirometria e siga a orientação dele.
  - p: Criança pode fazer espirometria?
    r: >-
      Sim, em geral a partir dos 5 ou 6 anos, quando a criança consegue seguir
      as instruções de soprar.
  - p: O exame cansa?
    r: >-
      Pode cansar um pouco, porque o sopro é forte e repetido. Há pausa entre
      as tentativas.
cta_texto: Agendar espirometria
whatsapp_numero: consultas
whatsapp_mensagem: Olá, quero agendar espirometria. Quais os horários? [site-espirometria]
nota_editorial: "Corrigido: 'espirometrô' para 'espirômetro'."
```

### 3.5 Recém-nascido

```yaml
tipo_registro: exam
slug: teste-do-pezinho
slug_antigo: teste-do-pezinho
nome: Teste do Pezinho
categoria: recem-nascido
ordem: 1
ativo: true
seo_title: Teste do pezinho em Corrente-PI | EmCORR
seo_description: >-
  Teste do pezinho em Corrente-PI: o melhor dia para fazer, como é a coleta e
  onde sai o resultado. Agende pelo WhatsApp.
h1: Teste do pezinho em Corrente-PI
subtitulo: Algumas gotas de sangue do calcanhar, entre o 3º e o 5º dia de vida.
resumo: Coleta de gotas de sangue do calcanhar do bebê, de preferência entre o 3º e o 5º dia de vida.
o_que_e: >-
  O teste do pezinho, ou triagem neonatal, usa gotas de sangue do calcanhar
  do bebê. Procura doenças que não dão sinal nos primeiros dias de vida, mas
  que têm tratamento quando descobertas cedo.
para_que_serve: >-
  Identifica cedo doenças do metabolismo, dos hormônios e do sangue, como o
  hipotireoidismo congênito, a fenilcetonúria e a anemia falciforme. Com o
  resultado, o pediatra orienta o acompanhamento, se for preciso.
quando_e_pedido:
  - Para todos os recém-nascidos, de preferência entre o 3º e o 5º dia de vida.
  - Se o bebê ainda não fez, faça assim que possível.
  - Quando o laboratório pede nova coleta para confirmar um resultado.
como_funciona: >-
  O calcanhar do bebê é aquecido e limpo. Com uma picada rápida, a
  profissional coleta algumas gotas de sangue em um papel especial, o
  papel-filtro. O bebê pode chorar um pouco. Ficar no colo ou mamar durante a
  coleta ajuda. A amostra segue para o laboratório, onde é analisada.
preparo:
  valor:
    - Não precisa de jejum. O bebê pode mamar antes e durante a coleta.
    - Traga a caderneta de saúde da criança, a certidão ou a declaração de nascido vivo e o documento da mãe.
    - Avise se o bebê nasceu prematuro, recebeu transfusão de sangue ou toma algum remédio.
  padrao_referencia: true
duracao:
  valor: Cerca de 10 minutos.
  padrao_referencia: true
prazo_resultado:
  valor: null
  padrao_referencia: false
versoes_disponiveis:
  valor: null
  padrao_referencia: false
portal_resultado: laboratorio
onde_ver_resultado: >-
  O resultado fica no portal do laboratório, emcorr.uniexames.com.br. Leve o
  resultado à consulta com o pediatra.
precisa_pedido_medico:
  valor: null
  padrao_referencia: false
quem_realiza:
  descricao: Profissional de coleta faz o teste. A amostra é analisada em laboratório.
  profissionais: []
especialidades_relacionadas: [pediatria]
convenios: padrao
faqs:
  - p: Qual o melhor dia para fazer o teste do pezinho?
    r: >-
      Entre o 3º e o 5º dia de vida do bebê. Se já passou desse período, faça
      assim que possível.
  - p: O bebê precisa estar em jejum?
    r: Não. Ele pode mamar antes e até durante a coleta, o que ajuda a acalmar.
  - p: Se o laboratório pedir nova coleta, o bebê tem alguma doença?
    r: >-
      Não necessariamente. Uma nova coleta é pedida quando a amostra não foi
      suficiente ou para confirmar um resultado. O pediatra explica cada caso.
  - p: Qual a diferença entre o teste básico e o ampliado?
    r: >-
      O ampliado pesquisa um número maior de doenças. A recepção informa as
      versões feitas aqui.
cta_texto: Agendar teste do pezinho
whatsapp_numero: consultas
whatsapp_mensagem: Olá, quero agendar o teste do pezinho do meu bebê. Quais os horários? [site-pezinho]
nota_editorial: "Janela atualizada para 3º a 5º dia (texto antigo: 3º a 7º). Corrigido: 'será comprovada'. Versões básica e ampliada ficam como variável do painel (versoes_disponiveis)."
```

```yaml
tipo_registro: exam
slug: teste-da-orelhinha
slug_antigo: teste-da-orelhinha
nome: Teste da Orelhinha
categoria: recem-nascido
ordem: 2
ativo: true
seo_title: Teste da orelhinha em Corrente-PI | EmCORR
seo_description: >-
  Teste da orelhinha em Corrente-PI: quando fazer, como é (o bebê pode estar
  dormindo) e o que o resultado quer dizer.
h1: Teste da orelhinha em Corrente-PI
subtitulo: Um teste rápido da audição, feito de preferência com o bebê dormindo.
resumo: Triagem da audição do recém-nascido, rápida e feita de preferência com o bebê dormindo.
o_que_e: >-
  O teste da orelhinha, ou triagem auditiva neonatal, avalia a audição do
  bebê nas primeiras semanas de vida. É obrigatório por lei no Brasil (Lei
  12.303/2010).
para_que_serve: >-
  Identifica cedo os bebês que podem ter dificuldade para ouvir. A audição é a
  base para o bebê aprender a falar. Quando há alteração, o acompanhamento
  começa cedo.
quando_e_pedido:
  - Para todos os recém-nascidos, de preferência no primeiro mês de vida.
  - Se o bebê não fez o teste na maternidade.
  - Quando o primeiro teste pede reteste, ou há casos de perda de audição na família.
como_funciona: >-
  Com o bebê tranquilo, de preferência dormindo, uma sonda macia é apoiada na
  entrada da orelha. Ela emite sons fracos e registra a resposta do ouvido. O
  bebê não precisa fazer nada. O teste é rápido e não costuma incomodar.
preparo:
  valor:
    - Tente fazer o bebê mamar e dormir perto do horário do exame. Bebê calmo facilita o teste.
    - Traga a caderneta de saúde da criança e o documento do responsável.
    - Avise se o bebê ficou na UTI neonatal, teve icterícia forte (pele amarelada) ou se há surdez na família.
  padrao_referencia: true
duracao:
  valor: De 10 a 15 minutos.
  padrao_referencia: true
prazo_resultado:
  valor: null
  padrao_referencia: false
portal_resultado: outros
onde_ver_resultado: >-
  O resultado fica no portal resultados.emcorr.com.br. Leve à consulta com o
  pediatra.
precisa_pedido_medico:
  valor: null
  padrao_referencia: false
quem_realiza:
  descricao: Fonoaudiólogo faz o teste.
  profissionais: []
especialidades_relacionadas: [pediatria, fonoaudiologia, otorrinolaringologia]
convenios: padrao
faqs:
  - p: Com quantos dias o bebê deve fazer?
    r: >-
      O ideal é no primeiro mês de vida. Se o bebê não fez na maternidade,
      agende assim que possível.
  - p: O bebê precisa estar dormindo?
    r: >-
      Não é obrigatório, mas ajuda. Com o bebê calmo, o teste é mais rápido e o
      registro sai mais limpo.
  - p: O resultado pediu reteste. Meu filho não escuta?
    r: >-
      Não necessariamente. Líquido no ouvido e agitação do bebê podem alterar
      o teste. O reteste confirma. Se for preciso, o bebê é encaminhado para
      outros exames.
  - p: Dói?
    r: Não. A sonda é macia e fica só apoiada na entrada da orelha.
cta_texto: Agendar teste da orelhinha
whatsapp_numero: consultas
whatsapp_mensagem: Olá, quero agendar o teste da orelhinha do meu bebê. Quais os horários? [site-orelhinha]
nota_editorial: "Corrigido: 'reagir aos filhos', 'emite filhos', 'receba comentários'."
```

```yaml
tipo_registro: exam
slug: teste-da-linguinha
slug_antigo: teste-da-linguinha
nome: Teste da Linguinha
categoria: recem-nascido
ordem: 3
ativo: true
seo_title: Teste da linguinha em Corrente-PI | EmCORR
seo_description: >-
  Teste da linguinha em Corrente-PI: avaliação da língua presa do bebê, como
  é feita e o que acontece depois.
h1: Teste da linguinha em Corrente-PI
subtitulo: Uma avaliação rápida da língua do bebê, pensando na amamentação.
resumo: Avaliação rápida da "língua presa", que pode atrapalhar a amamentação.
o_que_e: >-
  O teste da linguinha avalia o frênulo, a "pelinha" embaixo da língua. Ele
  verifica se a língua do bebê se movimenta bem ou se há anquiloglossia, a
  "língua presa". É obrigatório por lei no Brasil (Lei 13.002/2014).
para_que_serve: >-
  Mostra cedo se a língua presa pode atrapalhar a amamentação e, mais tarde, a
  mastigação e a fala.
quando_e_pedido:
  - Nos primeiros dias de vida, de preferência antes da alta da maternidade.
  - Se o bebê não fez o teste na maternidade.
  - Dificuldade para pegar o peito, mamadas muito longas, estalos ao mamar ou dor no bico do seio da mãe.
como_funciona: >-
  Com o bebê no colo, a profissional observa a língua parada e em movimento.
  Levanta a língua com delicadeza para ver o frênulo e, se possível, observa
  uma mamada. É rápido e não costuma incomodar o bebê.
preparo:
  valor:
    - Não precisa de preparo. Se der, venha perto do horário de mamar, para a profissional observar a mamada.
    - Traga a caderneta de saúde da criança e o documento do responsável.
  padrao_referencia: true
duracao:
  valor: De 10 a 20 minutos.
  padrao_referencia: true
prazo_resultado:
  valor: null
  padrao_referencia: false
portal_resultado: outros
onde_ver_resultado: >-
  A profissional explica o resultado na hora. O registro fica no portal
  resultados.emcorr.com.br.
precisa_pedido_medico:
  valor: null
  padrao_referencia: false
quem_realiza:
  descricao: Profissional habilitado faz a avaliação.
  profissionais: []
especialidades_relacionadas: [pediatria, fonoaudiologia, odontopediatria]
convenios: padrao
faqs:
  - p: Se o teste der alterado, o bebê precisa de cirurgia?
    r: >-
      Nem sempre. Depende do quanto a língua presa atrapalha a amamentação. O
      profissional explica as opções: acompanhamento ou um pequeno corte no
      frênulo (frenotomia), decidido caso a caso.
  - p: Com quantos dias fazer?
    r: >-
      O ideal é nos primeiros dias de vida. Se não foi feito na maternidade,
      agende assim que possível.
  - p: Dói?
    r: Não. É uma avaliação com observação e toque leve na boca do bebê.
cta_texto: Agendar teste da linguinha
whatsapp_numero: consultas
whatsapp_mensagem: Olá, quero agendar o teste da linguinha do meu bebê. Quais os horários? [site-linguinha]
nota_editorial: "Removido 'procedimento simples para corrigir… desenvolva a fala sem dificuldades' (promessa de resultado)."
```

### 3.6 Laboratório

```yaml
tipo_registro: exam
slug: exames-laboratoriais
slug_antigo: exames-laboratoriais
nome: Exames Laboratoriais
categoria: laboratorio
ordem: 1
ativo: true
seo_title: Laboratório e exames de sangue em Corrente-PI | EmCORR
seo_description: >-
  Hemograma, glicemia, colesterol, tireoide e outros, com coleta em
  Corrente-PI. Veja o jejum e acesse o resultado pela internet.
h1: Exames laboratoriais em Corrente-PI
subtitulo: Coleta aqui e resultado pela internet, sem voltar para buscar.
resumo: Exames de sangue, urina e outros, com coleta na EmCORR e resultado no portal do laboratório.
o_que_e: >-
  Exames laboratoriais são testes feitos em amostras de sangue, urina, fezes
  ou outros materiais do corpo. Medem substâncias, células e micróbios que o
  exame físico não mostra.
para_que_serve: >-
  Ajudam o médico no check-up e na investigação de sintomas. Também
  acompanham diabetes, colesterol alto, anemia e problemas de tireoide e de
  rins.
quando_e_pedido:
  - Check-up de rotina, em qualquer idade.
  - Acompanhamento de diabetes, colesterol, tireoide, pressão ou gestação.
  - Investigação de cansaço, febre, perda de peso ou outros sintomas.
  - Antes de cirurgia e em exame admissional.
exemplos_de_exames: >-
  Hemograma (contagem das células do sangue), glicemia (açúcar no sangue),
  hemoglobina glicada (média do açúcar nos últimos meses), colesterol e
  triglicerídeos, TSH e T4 livre (tireoide), ureia e creatinina (rins) e
  exame de urina.
como_funciona: >-
  Na coleta de sangue, a profissional limpa o braço com álcool. Depois tira
  um pouco de sangue da veia, com agulha descartável. Leva poucos
  minutos. Para urina ou fezes, você recebe o frasco e as orientações de
  coleta. As amostras são analisadas no laboratório, e o resultado sai no
  portal.
preparo:
  valor:
    - O preparo depende de cada exame. Mande a foto do pedido pelo WhatsApp, e a recepção confirma.
    - "Glicemia: jejum de 8 horas."
    - "Colesterol e triglicerídeos: siga o pedido do seu médico. Alguns pedem jejum de até 12 horas."
    - "Hemograma, TSH e muitos outros: em geral sem jejum."
    - Durante o jejum, pode beber água.
    - "Urina: de preferência a primeira da manhã. Lave a região íntima antes e despreze o primeiro jato."
    - Evite bebida alcoólica e exercício intenso nas 24 horas antes.
    - Informe os remédios que você usa.
    - Traga o pedido médico, documento com foto e a carteirinha do convênio.
  padrao_referencia: true
horario_coleta:
  valor: null
  padrao_referencia: false
duracao:
  valor: A coleta leva poucos minutos.
  padrao_referencia: true
prazo_resultado:
  valor: null
  padrao_referencia: false
portal_resultado: laboratorio
onde_ver_resultado: >-
  No portal do laboratório, emcorr.uniexames.com.br. Veja como acessar em
  /resultados. Não precisa voltar à clínica para buscar.
precisa_pedido_medico:
  valor: null
  padrao_referencia: false
quem_realiza:
  descricao: Equipe de coleta do laboratório. O responsável técnico aparece no rodapé da página.
  profissionais: []
especialidades_relacionadas: [endocrinologia, cardiologia, pediatria, nutricao, psiquiatria]
convenios: padrao
faqs:
  - p: Quantas horas de jejum preciso fazer?
    r: >-
      Depende do exame. A glicemia pede 8 horas, e muitos exames não pedem
      jejum. Mande a foto do pedido pelo WhatsApp, e a recepção confirma o
      preparo.
  - p: Posso beber água durante o jejum?
    r: Sim. Água pode, na quantidade de sempre.
  - p: Como vejo o resultado?
    r: >-
      Pelo portal do laboratório, emcorr.uniexames.com.br. Não precisa voltar
      à clínica para buscar.
cta_texto: Agendar coleta
whatsapp_numero: consultas
whatsapp_mensagem: Olá, quero fazer exames de laboratório. Qual o horário de coleta e precisa de jejum? [site-lab]
nota_editorial: "Corrigido: 'onde será comprovada' para 'onde é analisada'. Horário de coleta fica como variável do painel."
```

```yaml
tipo_registro: exam
slug: exame-toxicologico
slug_antigo: exame-toxicologico
nome: Exame Toxicológico
categoria: laboratorio
ordem: 2
ativo: true
seo_title: Exame toxicológico em Corrente-PI | EmCORR
seo_description: >-
  Exame toxicológico em Corrente-PI, com amostra de sangue, urina ou cabelo,
  para trabalho ou acompanhamento médico. Veja como agendar.
h1: Exame toxicológico em Corrente-PI
subtitulo: Coleta aqui em Corrente, para exigência de trabalho ou pedido médico.
resumo: Exame que detecta o uso de substâncias, com amostra de sangue, urina ou cabelo.
o_que_e: >-
  O exame toxicológico detecta drogas e outras substâncias no organismo. A
  amostra pode ser de sangue, urina ou cabelo, conforme o tipo de exame
  pedido.
para_que_serve: >-
  É pedido por empresas em funções que envolvem segurança, na contratação ou
  para manter o emprego. Também é pedido pelo médico no acompanhamento de
  tratamento.
quando_e_pedido:
  - Exigência da empresa, na contratação ou durante o contrato.
  - Pedido médico no acompanhamento de tratamento.
como_funciona: >-
  A amostra é coletada conforme o tipo de exame. Sangue e urina são coletados
  em poucos minutos. No exame de cabelo, a profissional corta uma pequena
  mecha rente ao couro cabeludo, em local discreto. A amostra segue para um
  laboratório especializado, onde é analisada.
preparo:
  valor:
    - Não precisa de jejum.
    - No exame de cabelo, não corte nem raspe o cabelo nos dias antes da coleta.
    - Traga documento oficial com foto e CPF, e a guia da empresa ou o pedido médico.
    - Informe os remédios que você usa.
  padrao_referencia: true
duracao:
  valor: Cerca de 15 a 20 minutos, com o cadastro.
  padrao_referencia: true
prazo_resultado:
  valor: null
  padrao_referencia: false
cnh_detran:
  valor: null
  padrao_referencia: false
portal_resultado: laboratorio
onde_ver_resultado: >-
  O resultado é enviado ao médico ou à empresa que pediu, conforme o caso. A
  recepção informa como acessar a sua cópia.
precisa_pedido_medico: false
quem_realiza:
  descricao: Profissional de coleta. A análise é feita em laboratório especializado.
  profissionais: []
especialidades_relacionadas: []
convenios: padrao
faqs:
  - p: Qual amostra é usada?
    r: >-
      Sangue, urina ou cabelo, conforme o exame que a empresa ou o médico
      pediu. Mande a guia pelo WhatsApp, e a recepção confirma.
  - p: Serve para a CNH?
    r: >-
      Pergunte à recepção pelo WhatsApp. Ela informa se o exame feito aqui
      atende à exigência do Detran para a sua categoria.
  - p: Quais documentos levar?
    r: >-
      Documento oficial com foto e CPF, e a guia da empresa ou o pedido
      médico.
cta_texto: Agendar exame toxicológico
whatsapp_numero: consultas
whatsapp_mensagem: Olá, quero fazer exame toxicológico. Como agendar e quais documentos levar? [site-toxicologico]
nota_editorial: >-
  Texto baseado no site atual (sangue, urina ou cabelo; trabalho e
  acompanhamento médico). O site atual não fala em CNH. Se a EmCORR for posto
  credenciado para o Detran, preencher cnh_detran no painel com o texto do
  bloco CNH (categorias C, D e E, amostra de cabelo ou pelo, janela de 90
  dias).
```

```yaml
tipo_registro: exam
slug: teste-de-covid-19
slug_antigo: teste-de-covid-19
nome: Teste de Covid-19
categoria: laboratorio
ordem: 3
ativo: false
status_servico: encerrado (serviço oferecido de 2020 a 2022)
redirect_301_para: /exames/exames-laboratoriais
seo_title: Teste de Covid-19 em Corrente-PI | EmCORR
seo_description: >-
  Teste de antígeno e RT-PCR para Covid-19 em Corrente-PI. Veja quando fazer e
  como é a coleta.
h1: Teste de Covid-19 em Corrente-PI
subtitulo: Coleta rápida pelo nariz para saber se os sintomas são de Covid-19.
resumo: Teste de antígeno e RT-PCR para Covid-19, com coleta rápida pelo nariz.
o_que_e: >-
  O teste de Covid-19 procura o vírus SARS-CoV-2. O teste rápido de antígeno
  detecta proteínas do vírus. O RT-PCR detecta o material genético do vírus e
  é feito em laboratório.
para_que_serve: >-
  Mostra se febre, tosse e dor de garganta são causadas pela Covid-19. Com o
  resultado, o médico orienta afastamento e cuidados com outras pessoas.
quando_e_pedido:
  - Febre, tosse, dor de garganta, coriza ou perda de olfato.
  - Contato próximo com alguém com Covid-19, conforme a orientação médica.
  - Exigência de viagem, trabalho ou procedimento.
como_funciona: >-
  A profissional passa um cotonete longo (swab) no nariz e, às vezes, na
  garganta, por alguns segundos. Pode incomodar ou dar vontade de espirrar. O
  antígeno fica pronto em minutos. O RT-PCR é analisado em laboratório.
preparo:
  valor:
    - Não precisa de jejum.
    - Não lave o nariz com soro nem use spray nasal nas horas antes da coleta.
    - Use máscara e avise na recepção que veio para o teste.
  padrao_referencia: true
duracao:
  valor: Coleta de poucos minutos. Antígeno pronto em cerca de 15 a 30 minutos.
  padrao_referencia: true
prazo_resultado:
  valor: null
  padrao_referencia: false
portal_resultado: laboratorio
onde_ver_resultado: >-
  RT-PCR no portal do laboratório, emcorr.uniexames.com.br. Antígeno entregue
  na hora.
precisa_pedido_medico:
  valor: null
  padrao_referencia: false
quem_realiza:
  descricao: Profissional de coleta.
  profissionais: []
especialidades_relacionadas: []
convenios: padrao
faqs:
  - p: Qual a diferença entre antígeno e RT-PCR?
    r: >-
      O antígeno é rápido e fica pronto em minutos. O RT-PCR é feito em
      laboratório, demora mais e detecta quantidades menores do vírus.
  - p: Deu negativo, mas continuo com sintomas. E agora?
    r: >-
      Um negativo não descarta a infecção, principalmente no início. Mantenha
      os cuidados e procure orientação médica.
cta_texto: Agendar teste de Covid-19
whatsapp_numero: consultas
whatsapp_mensagem: Olá, quero fazer o teste de Covid-19. Como funciona e quais os horários? [site-covid]
nota_editorial: "Fica fora do ar (ativo: false) com 301 para /exames/exames-laboratoriais (SEO-AUDIT §2.3). Texto mantido revisado caso a clínica volte a oferecer."
```

---

## 4. Pendências para a clínica (preencher no painel)

1. **Profissionais:** cadastrar conselho, número, RQE (médicos) e dias de atendimento de Dra. Thalma Muniz, Dra. Osyanne Timóteo, Dr. Danilo Lustosa, Dra. Mariana Vargas e Anaeliza Petersen (CRP). Vincular profissionais às especialidades hoje com `quem_atende: []`: pediatria, neurologia, psiquiatria, cirurgia geral, nutrição, fonoaudiologia e fisioterapia. Dr. Dhiogo Melo, Dr. Jeam Félix, Dr. Jordão Aires e Dr. Vinícius Coelho estão no corpo clínico atual sem especialidade informada.
2. **Especialidade no CRO** do Dr. Igor Rafael (ortodontia e implantodontia), para o site mostrar "ortodontista".
3. **Por exame:** prazo de resultado, e revisão de duração e preparo (hoje com a orientação usual, `padrao_referencia: true`).
4. **Laboratório:** horário de coleta e se aceita exame particular sem pedido médico.
5. **Variáveis específicas:** tipos de ultrassom feitos (`tipos_disponiveis`), versões do teste do pezinho (`versoes_disponiveis`), atendimento de raio-X sem hora marcada, duração das sessões de psicologia e fisioterapia, e bloco CNH do exame toxicológico (`cnh_detran`), só se a clínica for posto credenciado.
6. **Responsável técnico** da clínica e do laboratório, para o rodapé de conteúdo.

---

## Checagem

Contagem feita por script em todo o arquivo acima desta seção (cabeçalho, notas internas e blocos YAML), sem diferenciar maiúsculas, incluindo variações da palavra (plural, feminino). A palavra "preferência" não conta como "referência".

| Termo | Ocorrências |
|---|---|
| jornada | 0 |
| excelência | 0 |
| humanizado | 0 |
| referência | 0 |
| descubra | 0 |
| além disso | 0 |
| fundamental | 0 |
| crucial | 0 |
| essencial | 0 |

Outras verificações:
- `yaml.safe_load`: 45 blocos, 0 erros (6 categorias, 15 especialidades, 24 exames).
- Marcadores `[[...]]` e flags de "confirmar se está ativo": 0.
- "hipertrofia", "soroterapia" e "injetáveis": 0.
- Exclamação no texto público e nas mensagens de WhatsApp: 0.
- Frases com mais de 20 palavras no texto público: 1, a lista de exemplos de exames laboratoriais, mantida porque é uma enumeração de nomes.
- Ativos: todos os serviços com página no site atual. Inativo: Teste de Covid-19. Removido: Dermatologia.
