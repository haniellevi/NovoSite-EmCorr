# Calendário Social e Integração Instagram ↔ Blog ↔ Site: EmCORR – Centro Clínico
**Data:** 28/09/2026
**Período:** 01/10/2026 a 29/12/2026 (90 dias, 13 semanas)
**Plataformas:** Instagram @centro_clinico_emcorr (principal) · Facebook /emcorrcentroclinico (espelho adaptado) · WhatsApp Status (apoio)
**Base:** BRAND-VOICE.md, AUDIENCE-PERSONAS.md, KEYWORD-STRATEGY.md, FUNNEL-ANALYSIS.md, CONTENT-INVENTORY.md, COMPETITOR-REPORT.md, PLANO-MESTRE.md, ARQUITETURA.md.

> **Regra de honestidade:** este documento **não traz métricas inventadas**. Onde há número de desempenho, ele deve vir do Instagram Insights, do Meta Business Suite ou do analytics do site (Vercel/Plausible). Onde falta um dado da clínica (CRM, RQE, datas de atendimento, serviços ativos), aparece como `[confirmar]`.

---

## Contexto da marca
- **Marca:** EmCORR – Centro Clínico, clínica médica, odontológica e de exames em Corrente-PI (desde 2020).
- **Público:** famílias de Corrente e do extremo sul do PI (divisa BA/TO). Personas prioritárias: Jéssica (mãe), Seu Antônio/Dona Rosa (crônico), Cláudia (filha de idoso), Edivaldo (exame vindo de cidade vizinha), Larissa (psico/nutri), Marcos e Aline (ortodontia do filho).
- **Voz:** "O Amigo que cuida" + "O Guia que explica". Calorosa, clara, sem superlativo, sem medo. Pergunta do paciente como gancho ("Rouquidão que não passa? Pode ser hora de investigar"). No máximo 2 emojis por post, 1 "!" por bloco.
- **Assinatura:** "Cuidando de você e de quem você ama." · "Saúde para toda a família, em um só lugar, aqui em Corrente."
- **Objetivo das redes (em ordem):** (1) gerar conversa no WhatsApp com origem rastreável; (2) levar tráfego qualificado para o site novo e o blog; (3) construir autoridade com prova (profissional identificado, exame explicado); (4) lançar o site novo.
- **Ponto de partida conhecido:** ~6 mil seguidores no Instagram (maior audiência local, segundo COMPETITOR-REPORT). Bio hoje aponta para Linktree com 2 WhatsApps e o site, **sem UTM**. Formatos que já funcionam na voz: posts-pergunta, reels por especialidade, destaques Exames/Profissionais/Depoimentos.

---

## 1. Integração Instagram ↔ Blog ↔ Site

### 1.1 Princípio
**Um tema, três lugares, um só CTA.** Cada tema nasce como artigo do blog (fonte completa e revisada pelo profissional) e vira carrossel + reel + stories. E o caminho inverso também vale: pergunta frequente que aparece em comentário, DM, caixinha ou WhatsApp vira artigo ou item de FAQ no site.

```
                ┌──────────── ARTIGO DO BLOG (/blog/[slug]) ────────────┐
                │ autor com conselho · data de revisão · FAQ · CTA WA    │
                └───────┬───────────────┬───────────────┬───────────────┘
                        ▼               ▼               ▼
              Carrossel (5–8)     Reel (30–45 s)    3 Stories (enquete,
              "salve para depois"  gancho-pergunta   caixinha, link sticker)
                        │               │               │
                        └──── legenda: "Guia completo no link da bio" ────┘
                                        ▼
                     emcorr.com.br/links  (bio, com UTM)
                                        ▼
                  card "Novo no blog" → artigo → CTA contextual
                                        ▼
                  WhatsApp por finalidade, texto pronto + código [ig-…]

  CAMINHO INVERSO: comentário/DM/caixinha/pergunta da recepção
     → planilha "Perguntas da semana" → vira artigo, FAQ da página
       de especialidade/exame, ou "Respondendo @…" em reel
```

### 1.2 Ciclo de repurposing de cada artigo (14 dias)
| Dia | Canal | Peça | Link |
|---|---|---|---|
| D0 | Site | Artigo publicado no admin (Supabase) | — |
| D0 | Instagram feed | **Carrossel** com os pontos principais (último slide = CTA "guia completo no link da bio") | bio → /links |
| D0 | Stories | Link sticker para o artigo + enquete sobre o tema | link sticker com UTM de story |
| D0 | Facebook | Post com o link direto do artigo (FB aceita link clicável) | UTM facebook |
| D2–D5 | Instagram | **Reel** 30–45 s com o profissional respondendo a pergunta-título | bio → /links |
| D5 | WhatsApp Status | Capa do carrossel + link do artigo | UTM whatsapp |
| D7 | Stories | Caixinha "Ficou alguma dúvida sobre [tema]?" | — |
| D10 | Stories | 2–3 respostas da caixinha (sem dado pessoal, sem caso clínico) | link sticker |
| D14 | Feed ou Stories | "Caso você tenha perdido" (repost do reel ou nova capa) | bio |
| Mensal | Site | Melhores reels viram miniatura com link na página de especialidade/exame e no próprio artigo | — |

**Regra de reaproveitamento:** 1 artigo = 1 carrossel + 1 reel + 4–6 stories + 1 post de Facebook + 1 status. Os 12 artigos de lançamento (KEYWORD-STRATEGY) já cobrem 12 carrosséis e 12 reels do trimestre.

### 1.3 Mapa categoria do blog → pilar social
| Categoria do blog (ARQUITETURA `post_categories`) | Pilar no Instagram | Personas | Páginas de destino |
|---|---|---|---|
| **Família e crianças** | Família e crianças | P1, P3 | /especialidades/pediatria, /fonoaudiologia |
| **Coração e metabolismo** | Coração e metabolismo | P2, P3 | /especialidades/cardiologia, /endocrinologia |
| **Exames explicados** | Exames explicados (série "#EmCORRExplica") | P2, P4 | /exames/[slug], /resultados |
| **Mente e nutrição** | Mente e nutrição | P5, P1 | /especialidades/psicologia, /nutricao |
| **Sorriso** | Sorriso | P6, P1 | /especialidades/odontologia, /odontopediatria, /ortodontia |
| (sem categoria) | **Gente EmCORR** (bastidores + equipe + depoimentos consentidos) | todas | /corpo-clinico, /sobre |
| (sem categoria) | **Serviço** (como agendar, convênios, resultados, horários, lançamento do site) | todas | /agendar, /convenios, /resultados |

Ajuste em relação ao KEYWORD-STRATEGY: os artigos 5 (primeira ida ao dentista) e 6 (idade do aparelho) passam da categoria "Família/pediatria" para **Sorriso**, conforme as 5 categorias da ARQUITETURA.

### 1.4 Página `/links` (substitui o Linktree)
**URL da bio:** `https://emcorr.com.br/links?utm_source=instagram&utm_medium=social&utm_campaign=bio`
(no Facebook, na seção "Sobre": `...?utm_source=facebook&utm_medium=social&utm_campaign=bio`)

**Estrutura (mobile, carrega rápido, sem script de terceiros):**
1. Logo + "Cuidando de você e de quem você ama." + endereço curto + horário de hoje.
2. **Agendar consulta ou exame de laboratório** → WhatsApp consultas, texto pronto: `Olá! Vim pelo Instagram e quero agendar uma consulta. [ig-bio]`
3. **Agendar tomografia / raio-X / imagem** → WhatsApp radiologia, texto pronto com `[ig-bio-img]`.
4. **Ver resultado de exame** → /resultados.
5. **Destaque do mês** (campanha ativa: Outubro Rosa, lançamento do site, Dia do Diabetes…) → definido no admin.
6. **Novo no blog** → último artigo publicado, puxado automaticamente do Supabase (título + categoria).
7. Convênios aceitos → /convenios · Como chegar → Google Maps · Especialidades → /especialidades.
8. Rodapé: diretor técnico médico (nome, CRM-PI, RQE) e responsável técnico odontológico (nome, CRO-PI) `[confirmar]`.

**Regras técnicas:**
- **Não** repetir UTM nos links internos da `/links` (isso quebra a sessão e sobrescreve a origem). A origem já entra na chegada; os cliques internos são medidos pelo evento `links_page_click` com a propriedade `destino` (FUNNEL-ANALYSIS).
- Links de WhatsApp no formato `wa.me/55DDDNUMERO?text=` (os `wa.me/message/…` do Linktree não aceitam texto dinâmico), com o código de origem no fim do texto para a recepção etiquetar no WhatsApp Business.
- `noindex` na `/links` (página de navegação, não de conteúdo).
- Botão "Destaque do mês" e "Novo no blog" editáveis no admin, sem precisar de deploy.
- **Até o site novo ir ao ar:** manter o Linktree, mas já com UTM no link do site e com "Resultados de exames" e "Como chegar" (Prioridade 1 do FUNNEL-ANALYSIS).

### 1.5 Convenção de UTM (tudo minúsculo, sem acento, com hífen)
| Parâmetro | Valores | Exemplo |
|---|---|---|
| `utm_source` | `instagram`, `facebook`, `whatsapp`, `gbp` | instagram |
| `utm_medium` | `social` (bio/legenda), `story` (link sticker), `status` (WhatsApp), `paid-social` (impulsionamento) | story |
| `utm_campaign` | `bio`, `blog-[slug-curto]`, `outubro-rosa-2026`, `novembro-azul-2026`, `diabetes-2026`, `dezembro-laranja-2026`, `lancamento-site` | blog-tomografia |
| `utm_content` | data + formato: `2026-10-02-reel`, `2026-10-05-carrossel`, `story-enquete` | 2026-10-02-reel |

Exemplo de link sticker: `https://emcorr.com.br/blog/tomografia-como-funciona?utm_source=instagram&utm_medium=story&utm_campaign=blog-tomografia&utm_content=2026-10-02-story`

**Códigos de WhatsApp por origem** (texto pronto termina com o código): `[ig-bio]`, `[ig-bio-img]`, `[ig-story]`, `[fb]`, `[site-blog-…]`. A recepção etiqueta a conversa e marca no admin se virou agendamento e comparecimento (fechamento do ciclo, sem rastrear o paciente).

### 1.6 O que o admin do blog precisa ter para essa integração (recomendação, não altera outros arquivos)
- Campo **`instagram_url`** (post ou reel relacionado) e **`reel_thumb`** (imagem estática): no artigo e na página de especialidade, exibir miniatura + link "Ver no Instagram". **Não** carregar o script de embed do Instagram (peso e cookies de terceiros, o que conflita com o analytics sem cookies).
- Campo **`resumo_social`** (5–7 frases curtas) que já serve de roteiro para o carrossel.
- Botão "Copiar link com UTM" que gera `?utm_source=instagram&utm_medium=story&utm_campaign=blog-[slug]`.
- Campo **`destaque_links`** (booleano) para o artigo aparecer no card "Destaque do mês" da `/links`.
- Bloco fixo no fim do artigo: "Siga @centro_clinico_emcorr" (CTA secundário previsto no FUNNEL-ANALYSIS).

### 1.7 Destaques (stories fixos) reorganizados
Ordem sugerida: **Agendar** (como marcar, convênios, horários) · **Resultados** (passo a passo para achar o resultado) · **Exames** (preparo por exame) · **Profissionais** (1 story por profissional com nome, conselho, especialidade, dias) · **Família** · **Sorriso** · **Depoimentos** (só com consentimento escrito) · **Blog** (capas dos artigos com link sticker) · **Novo site** (a partir do lançamento).

---

## 2. Pilares de conteúdo e proporção
| # | Pilar | Função | % do feed | Formatos principais |
|---|---|---|---|---|
| 1 | Família e crianças | educar e acolher pais | 18% | carrossel, reel |
| 2 | Coração e metabolismo | prevenção e acompanhamento de crônicos | 18% | carrossel, reel com médico |
| 3 | Exames explicados (#EmCORRExplica) | tirar medo e dúvida de preparo; converter P4 | 18% | reel, carrossel "salve" |
| 4 | Mente e nutrição | cuidado sem julgamento | 12% | carrossel, reel |
| 5 | Sorriso | odontologia de família, sem preço e sem antes/depois | 12% | carrossel, reel |
| 6 | Gente EmCORR | bastidores, equipe identificada, depoimentos consentidos | 12% | reel, carrossel |
| 7 | Serviço e lançamento | como agendar, convênios, resultados, site novo | 10% | carrossel, stories |

**Ritmo base (realista para a equipe da clínica):** 3 posts no feed por semana (**seg** carrossel · **qua** reel · **sex** carrossel ou post-pergunta) + posts extras nas datas de saúde + stories todos os dias úteis. Total no trimestre: **47 posts de feed** (tabela abaixo) e ~65 dias de stories.

**Horário:** hipótese inicial 11h30–12h30 (seg/qua/sex) e 19h–20h (reels e datas). Validar em Insights → Público → "Horários mais ativos" após 4 semanas e ajustar. Não há dado histórico disponível para afirmar o melhor horário.

---

## 3. Datas de saúde do trimestre (e como a EmCORR entra nelas)
| Data | Tema | Ângulo EmCORR | Condição |
|---|---|---|---|
| Outubro inteiro | **Outubro Rosa** (câncer de mama) | sinais de alerta, quando fazer mamografia, conhecer o próprio corpo | CTA para mamografia **só se o exame for serviço ativo** `[confirmar]`; senão, CTA para consulta |
| 10/10 (sáb) | Dia Mundial da Saúde Mental | ansiedade × depressão, quando buscar ajuda, CVV 188 | psicologia `[CRP confirmar]` |
| 12/10 (seg) | **Dia das Crianças** | "do bebê ao adolescente, tudo em um só lugar" | sem imagem de criança sem consentimento dos responsáveis |
| 16/10 (sex) | Dia Mundial da Alimentação | criança que come mal | nutrição `[CRN confirmar]` |
| 18/10 (dom) | Dia do Médico | apresentação da equipe médica com CRM/RQE | dados de registro `[confirmar]` |
| 19/10 (seg) | Dia do Piauí | story afetivo "orgulho de cuidar do sul do Piauí" | só stories |
| 25/10 (dom) | Dia do Cirurgião-Dentista | equipe de odontologia identificada com CRO | sem preço, sem antes/depois |
| 29/10 (qui) | Dia Mundial do AVC | sinais de AVC (SAMU 192) e pressão alta | educativo, sem alarmismo |
| Novembro inteiro | **Novembro Azul** (saúde do homem) | "check-up vai além da próstata": pressão, glicemia, colesterol, peso | a EmCORR não lista urologia: não prometer consulta urológica `[confirmar]` |
| 08/11 (dom) | Dia Internacional da Radiologia | bastidores da tomografia (quem opera, como é a sala) | pode mostrar equipamento (medicina); sem paciente identificável |
| 14/11 (sáb) | **Dia Mundial do Diabetes** | glicemia, hemoglobina glicada, sinais, acompanhamento com endócrino | Dra. Thalma Muniz `[CRM/RQE confirmar]` |
| 17/11 (ter) | Dia Mundial da Prematuridade (Novembro Roxo) | acompanhamento do prematuro após a alta | pediatria |
| 27/11 (sex) | Dia Nacional de Combate ao Câncer | rastreamentos por idade: o que conversar com o médico | sem promessa, linguagem cuidadosa |
| Dezembro inteiro | **Dezembro Laranja** (câncer de pele) | regra ABCDE das pintas, protetor no sol do sul do PI | CTA para dermatologia **só se ativa** `[confirmar]` |
| 09/12 (qua) | Dia do Fonoaudiólogo | teste da orelhinha, fala, audiometria | fono `[CRFa confirmar]` |
| 21–31/12 | Festas e fim de ano | horário especial, comer bem nas festas, saúde mental no fim de ano | horário real `[confirmar]` |
| Janeiro (prep.) | Janeiro Branco | saúde mental: preparar conteúdo em dezembro | — |

Feriados sem post de feed: 02/11 (Finados). 20/11 (Consciência Negra) e 25/12 recebem só post institucional leve.

---

## 4. Plano da campanha de lançamento do site novo

**Data L (proposta): segunda, 09/11/2026.** Motivo: deixa 6 semanas para construção/QA (PLANO-MESTRE, Fase 6) e coloca o blog no ar **antes** do Dia Mundial do Diabetes (14/11), que vira a primeira campanha já com link para artigo. Se a data mudar, **todo o bloco de lançamento se move junto** (L-14 → L+30) e os posts temáticos continuam onde estão, apontando para Linktree/WhatsApp até L.

**Sem gancho de aniversário** (PLANO-MESTRE). **Sem sorteio de consulta, exame ou procedimento** (CFO veda gratuidade na publicidade; CFM veda sensacionalismo e vantagem como chamariz). O "prêmio" do lançamento é a utilidade: agendar, ver resultado e saber o preparo em segundos.

| Fase | Quando | O que publicar | Objetivo |
|---|---|---|---|
| **Linha de base** | até L-15 (25/10) | Anotar: seguidores, alcance médio de 4 semanas, cliques no Linktree (analytics do Linktree), conversas no WhatsApp por semana por número | ter com o que comparar (nenhuma meta numérica inventada aqui) |
| **Pré-lançamento** | L-14 a L-1 (26/10–08/11) | Stories 3x/semana: enquete "O que você mais procura quando entra no site de uma clínica? (resultado / preparo de exame / agendar / convênio)"; caixinha "Qual dúvida sobre exames você sempre tem?"; bastidores da gravação dos reels; **1 reel teaser (04/11)** e **1 carrossel (06/11)** "Vem aí: seu resultado, seu preparo e seu agendamento na palma da mão" | criar expectativa e colher perguntas reais para o FAQ |
| **Dia L** | 09/11 | Carrossel "Nosso site novo chegou: 5 coisas que ficaram mais fáceis" + **troca da bio para `/links`** + 3 posts fixados (lançamento, reel de resultados, próximo tema) + sequência de 6 stories (tour com link sticker para cada área) + post no Facebook com link direto + Status do WhatsApp + post no Perfil da Empresa no Google | levar o público atual para o site |
| **Semana 1** | L+1 a L+7 | Reel "Como ver seu resultado em 20 segundos" (11/11); campanha Diabetes já com artigo (13–14/11); stories "Você sabia que no site dá pra…" (1 recurso por dia: preparo de exame, convênios, corpo clínico com conselho, blog, agendar) | ensinar o uso |
| **Semanas 2–4** | L+8 a L+30 | 1 artigo novo por semana no ciclo da seção 1.2; destaque "Novo site" nos stories fixos; "Respondendo @…" com dúvidas que chegaram pela enquete | criar hábito |
| **Mensagem da recepção** | a partir de L | Na confirmação de agendamento pelo WhatsApp: "Seu preparo e seu resultado ficam em emcorr.com.br/resultados" (com UTM `utm_source=whatsapp&utm_medium=status&utm_campaign=lancamento-site`) | uso recorrente |
| **Impulsionamento (opcional)** | L a L+10 | Impulsionar só o reel de resultados e o carrossel de lançamento, segmentação geográfica Corrente + raio regional, **sem segmentar por condição de saúde** (política Meta/Google e LGPD) | alcance fora dos seguidores |
| **Avaliação** | L+30 (09/12) | Comparar com a linha de base: cliques na bio (evento `links_page_click` + sessões `utm_campaign=bio`), conversas `[ig-…]`, acessos a /resultados vindos de social; rodar `/geo-compare` | decidir próximos 90 dias |

**Lista de checagem do dia L:** bio trocada e testada no celular · todos os links da `/links` testados (inclusive os 2 WhatsApps com texto pronto) · Linktree redirecionando ou com botão único para o site · nome e CRM/RQE do diretor técnico na bio · destaques renomeados · Facebook "Sobre" atualizado · Google Business com link novo com `utm_source=gbp`.

**Bio sugerida (150 caracteres):**
> Clínica médica, odontológica e exames em Corrente-PI 🩺
> Toda a família em um SÓ lugar.
> Dir. téc.: [Nome] · CRM-PI [nº] · RQE [nº]
> Agende e veja resultados ↓

---

## 5. Calendário de 90 dias (47 posts de feed)

Legenda de formato: **C** = carrossel · **R** = reel · **E** = estático/post-pergunta. **Blog #** = número do artigo na lista de lançamento (KEYWORD-STRATEGY). Todos os posts de pilares educativos levam CTA "Guia completo no link da bio" quando o artigo existir; antes de L, CTA "Agende pelo link da bio" (Linktree com UTM).

### Semana 1 (01–04/10): Abertura do Outubro Rosa e da série #EmCORRExplica
| Data | Pilar | Formato | Tema / gancho | Blog / destino |
|---|---|---|---|---|
| Qui 01/10 | Exames explicados | C | **#1** "Outubro Rosa: mamografia, a partir de quando?" | /exames/mamografia `[confirmar]` |
| Sex 02/10 | Exames explicados | R | **#2** "Seu médico pediu uma tomografia? Calma, a gente explica" | Blog 1 · /exames/tomografia |

### Semana 2 (05–11/10): Família + Saúde Mental
| Data | Pilar | Formato | Tema / gancho | Blog / destino |
|---|---|---|---|---|
| Seg 05/10 | Família e crianças | C | **#3** "Quantas consultas o bebê precisa no primeiro ano?" | Blog 4 · /pediatria |
| Qua 07/10 | Sorriso | R | **#4** "Com que idade levar seu filho ao dentista pela primeira vez?" | Blog 5 · /odontopediatria |
| Sex 09/10 | Gente EmCORR | E | "Quem atende você na recepção?" (equipe da recepção, com consentimento) | /sobre |
| Sáb 10/10 | Mente e nutrição | C | **#5** Dia da Saúde Mental: "Ansiedade, depressão ou os dois?" | Blog 11 · /psicologia |

### Semana 3 (12–18/10): Dia das Crianças, Alimentação, Dia do Médico
| Data | Pilar | Formato | Tema / gancho | Blog / destino |
|---|---|---|---|---|
| Seg 12/10 | Família e crianças | R | **#6** Dia das Crianças: "Do primeiro mês à adolescência, em um SÓ lugar" | /especialidades (hub família) |
| Qua 14/10 | Exames explicados | R | **#7** "Exame de sangue: precisa mesmo de jejum?" | Blog 3 · /exames/laboratorio |
| Sex 16/10 | Mente e nutrição | C | **#8** Dia da Alimentação: "Seu filho come mal? 5 atitudes que ajudam a família toda" | Blog 12 · /nutricao |
| Dom 18/10 | Gente EmCORR | C | **#9** Dia do Médico: "Os médicos que cuidam de Corrente" (1 slide por médico, CRM/RQE) | /corpo-clinico |

### Semana 4 (19–25/10): Coração, fala, aparelho, Dia do Dentista
| Data | Pilar | Formato | Tema / gancho | Blog / destino |
|---|---|---|---|---|
| Seg 19/10 | Coração e metabolismo | C | **#10** "Pressão alta quase nunca dá sinal" | Blog 8 · /cardiologia |
| Qua 21/10 | Família e crianças | R | **#11** "Seu filho ainda fala poucas palavras?" | Blog 7 · /fonoaudiologia |
| Sex 23/10 | Sorriso | C | **#12** "Aparelho: existe idade certa para a primeira avaliação?" | Blog 6 · /ortodontia |
| Dom 25/10 | Sorriso | C | Dia do Dentista: equipe de odonto com CRO e o que cada um faz (sem preço, sem antes/depois) | /odontologia |

### Semana 5 (26/10–01/11): Tireoide, ouvido, AVC, contraste; início do pré-lançamento
| Data | Pilar | Formato | Tema / gancho | Blog / destino |
|---|---|---|---|---|
| Seg 26/10 | Coração e metabolismo | C | "Cansaço, peso e queda de cabelo: quando investigar a tireoide" | Blog 9 · /endocrinologia |
| Qua 28/10 | Exames explicados | R | "Imitanciometria: o nome é difícil, o exame é rápido" | Blog 10 · /fonoaudiologia |
| Qui 29/10 | Coração e metabolismo | C | Dia do AVC: "Rosto torto, braço fraco, fala enrolada: ligue 192" + relação com pressão | /cardiologia |
| Sex 30/10 | Exames explicados | C | "Tomografia com contraste: jejum, o que levar e o que avisar" | Blog 2 · /exames/tomografia |
| Dom 01/11 | Coração e metabolismo | C | Abertura Novembro Azul: "Check-up do homem vai além da próstata" | /check-up `[confirmar oferta]` |
| — | Stories | — | Pré-lançamento: enquete + caixinha (26/10, 28/10, 30/10) | — |

### Semana 6 (02–08/11): Teaser do site e Radiologia
| Data | Pilar | Formato | Tema / gancho | Blog / destino |
|---|---|---|---|---|
| Qua 04/11 | Serviço e lançamento | R | Teaser: "Resultado, preparo e agendamento: algo novo chega segunda" | — |
| Sex 06/11 | Serviço e lançamento | C | "5 perguntas que você nos fez e que o site novo vai responder" (vindas da caixinha) | — |
| Dom 08/11 | Exames explicados | R | Dia da Radiologia: "Por dentro da sala de tomografia" (bastidores com a equipe técnica) | /exames/tomografia |

### Semana 7 (09–15/11): LANÇAMENTO + Dia do Diabetes
| Data | Pilar | Formato | Tema / gancho | Blog / destino |
|---|---|---|---|---|
| **Seg 09/11** | Serviço e lançamento | C | **Dia L**: "Nosso site novo chegou: 5 coisas que ficaram mais fáceis" + troca da bio | /links |
| Qua 11/11 | Serviço e lançamento | R | "Como ver seu resultado de exame em 20 segundos" | /resultados |
| Sex 13/11 | Coração e metabolismo | C | "Diabetes pode não dar sinal: sede, xixi frequente, cansaço" | artigo novo (Blog 13) · /endocrinologia |
| Sáb 14/11 | Exames explicados | R | Dia do Diabetes: "Glicemia de jejum e hemoglobina glicada: o que cada uma mostra" (Dra. Thalma) | Blog 13 · /exames/laboratorio |

### Semana 8 (16–22/11): Prematuridade, nutrição no diabetes
| Data | Pilar | Formato | Tema / gancho | Blog / destino |
|---|---|---|---|---|
| Ter 17/11 | Família e crianças | C | Dia da Prematuridade: "Bebê prematuro em casa: o acompanhamento depois da alta" | artigo novo (Blog 14) · /pediatria |
| Qua 18/11 | Mente e nutrição | R | "Quem tem diabetes pode comer fruta? 3 mitos do prato" (nutri) | /nutricao |
| Sex 20/11 | Gente EmCORR | E | Feriado: depoimento de paciente (texto, com consentimento escrito, sóbrio) | /sobre |

### Semana 9 (23–29/11): Escovação, Holter/MAPA, Dia de Combate ao Câncer
| Data | Pilar | Formato | Tema / gancho | Blog / destino |
|---|---|---|---|---|
| Seg 23/11 | Sorriso | C | "Escovação por idade: do primeiro dente aos 6 anos" | artigo novo (Blog 15) · /odontopediatria |
| Qua 25/11 | Exames explicados | R | "Holter e MAPA: dormir com o aparelho? A gente explica" | /exames/holter, /exames/mapa |
| Sex 27/11 | Coração e metabolismo | C | Dia de Combate ao Câncer: "Exames de rastreamento por idade: o que conversar com seu médico" | /especialidades |
| Dom 29/11 | Gente EmCORR | R | "Um dia na EmCORR" (bastidores sem pacientes identificáveis) | /sobre |

### Semana 10 (30/11–06/12): Fechamento Novembro Azul, abertura Dezembro Laranja
| Data | Pilar | Formato | Tema / gancho | Blog / destino |
|---|---|---|---|---|
| Seg 30/11 | Coração e metabolismo | C | Fechamento Novembro Azul: "Homem, marque o seu check-up antes do fim do ano" | /agendar |
| Ter 01/12 | Família e crianças | C | Dezembro Laranja: "Pinta que mudou? A regra do ABCDE" | artigo novo (Blog 16) · /dermatologia `[confirmar]` |
| Qua 02/12 | Mente e nutrição | R | "Festas de fim de ano sem culpa e sem exagero" | /nutricao |
| Sex 04/12 | Coração e metabolismo | C | "Calor forte e pressão: cuidados com os idosos da casa" (persona Cláudia) | /cardiologia |

### Semana 11 (07–13/12): Férias, Dia do Fono, depoimentos
| Data | Pilar | Formato | Tema / gancho | Blog / destino |
|---|---|---|---|---|
| Seg 07/12 | Família e crianças | C | "Férias chegando: a revisão que vale fazer antes (caderneta, dentes, visão da escola)" | /pediatria |
| Qua 09/12 | Exames explicados | R | Dia do Fonoaudiólogo: "Teste da orelhinha: por que não deixar para depois" | /exames/teste-da-orelhinha |
| Sex 11/12 | Gente EmCORR | C | "O que as famílias dizem" (3 depoimentos consentidos, sóbrios, sem promessa) | /sobre |

### Semana 12 (14–20/12): Doces, imagem odontológica, saúde mental no fim de ano
| Data | Pilar | Formato | Tema / gancho | Blog / destino |
|---|---|---|---|---|
| Seg 14/12 | Sorriso | C | "Doces de fim de ano e os dentes das crianças: o que fazer" | /odontopediatria |
| Qua 16/12 | Exames explicados | R | "Raio-X panorâmico ou tomografia odontológica: qual a diferença?" (ilustração, sem instrumental) | /exames/raio-x-panoramica |
| Sex 18/12 | Mente e nutrição | C | "Fim de ano e tristeza: quando é hora de pedir ajuda" (prepara Janeiro Branco) | Blog 11 · /psicologia |

### Semana 13 (21–29/12): Serviço e retrospectiva
| Data | Pilar | Formato | Tema / gancho | Blog / destino |
|---|---|---|---|---|
| Seg 21/12 | Serviço e lançamento | E | Horário de funcionamento nas festas `[confirmar]` + como ver resultado no recesso | /resultados |
| Qua 23/12 | Gente EmCORR | R | "2026 na EmCORR" (retrospectiva com números **reais** fornecidos pela clínica, ou sem números) | /sobre |
| Sex 25/12 | Gente EmCORR | E | Natal: "Cuidando de você e de quem você ama" (mensagem da equipe) | — |
| Seg 28/12 | Coração e metabolismo | C | "Check-up da família em 2027: o que cada idade precisa conversar com o médico" | /check-up-familia `[confirmar]` |

**Contagem por pilar (47 posts):** Exames explicados 10 · Coração e metabolismo 9 · Gente EmCORR 7 · Família e crianças 6 · Mente e nutrição 5 · Sorriso 5 · Serviço e lançamento 5 (+ bio, destaques e stories do lançamento). Formatos: 26 carrosséis, 17 reels, 4 estáticos. Novos artigos sugeridos além dos 12 de lançamento: Blog 13 (diabetes/exames), 14 (prematuro), 15 (escovação por idade), 16 (ABCDE das pintas).

### Rotina de stories (dias úteis)
| Dia | Stories |
|---|---|
| Seg | Repost do carrossel + link sticker para o artigo |
| Ter | "Quem atende hoje" (profissionais do dia com conselho) `[confirmar agenda]` |
| Qua | Enquete ou quiz ligado ao reel do dia |
| Qui | Caixinha de perguntas do tema da semana |
| Sex | Respostas da caixinha + "Agende pelo link" |
| Sáb | Horário de sábado `[confirmar se abre]` ou lembrete de preparo de exame |

---

## 6. Roteiros dos 12 primeiros posts/reels

Padrão de rodapé para todo post **médico** (na legenda e no último slide/tela):
> [Nome] · Médico(a) [especialidade] · CRM-PI [nº] · RQE [nº]
> Conteúdo educativo. Não substitui consulta.

Padrão para **odontologia:** `[Nome] · Cirurgião-dentista · CRO-PI [nº]` + `Responsável técnico: [Nome] · CRO-PI [nº]`.
Padrão para **psicologia/nutrição/fono:** nome + CRP/CRN/CRFa.

Hashtags base (usar 5–8 por post, local primeiro): `#CorrentePI #CorrentePiaui #SulDoPiaui #EmCORR` + 2–4 do pilar (seção 8).

---

### #1 · Qui 01/10 · Carrossel · Exames explicados · Outubro Rosa
**Título:** Outubro Rosa: mamografia, a partir de quando?
- **Slide 1 (capa):** "Mamografia: a partir de quando?" · subtítulo "Outubro Rosa na EmCORR" · fundo rosa-claro, ícone de laço.
- **Slide 2:** "A mamografia é o exame que encontra alterações na mama antes de dar para sentir."
- **Slide 3:** "Idade e frequência? As recomendações mudam entre as entidades médicas e o SUS. Por isso, quem define o seu caso é o seu médico, a partir da sua idade e do histórico da família."
- **Slide 4:** "Sinais para procurar um médico em qualquer idade: caroço na mama ou na axila · pele parecendo casca de laranja · bico que afundou · saída de líquido pelo bico."
- **Slide 5:** "Conhecer o próprio corpo ajuda. Mas o toque não substitui o exame."
- **Slide 6:** "Como é na EmCORR: [preparo real, duração, prazo do resultado, convênios] `[confirmar]`."
- **Slide 7 (CTA):** "Salve e mande para uma mulher que você ama. Agende pelo link da bio."
**Legenda:**
> Outubro é o mês de lembrar que cuidar cedo faz diferença. 🎗️
> A mamografia encontra alterações antes de elas darem sinal. Com que idade começar e de quanto em quanto tempo repetir, o seu médico define com você.
> Se notou caroço, mudança na pele ou no bico do peito, não espere outubro acabar: procure atendimento.
> Salve este post e marque quem precisa ver. Agende pelo link da bio.
> Diretor técnico: [Nome] · CRM-PI [nº] · RQE [nº]
**Link:** Linktree (antes de L) com `utm_campaign=outubro-rosa-2026`.
**Conformidade:** sem imagem de mama real, sem estatística sem fonte, sem "prevenção garante". Se a mamografia **não** for serviço ativo, o slide 6 vira "Converse com o seu médico. Na EmCORR, a consulta clínica ajuda a organizar seus exames".

---

### #2 · Sex 02/10 · Reel 35 s · Exames explicados · Blog 1
**Gancho (0–3 s):** técnico(a) de radiologia ou médico(a) olhando para a câmera: "Seu médico pediu uma tomografia e bateu aquele frio na barriga?"
| Tempo | Imagem | Texto na tela | Fala |
|---|---|---|---|
| 0–3 s | Rosto do profissional, fundo da sala | "Tomografia: calma, a gente explica" | gancho |
| 3–10 s | Sala da tomografia vazia, câmera passando | "O exame dura poucos minutos" | "É um exame de imagem rápido. Você fica deitado, e a mesa passa devagar por dentro do aparelho, que é aberto dos dois lados." |
| 10–18 s | Mão apontando para o "anel" do equipamento | "Não é um tubo fechado" | "Não é um túnel fechado. Dá para conversar com a equipe o tempo todo." |
| 18–27 s | Lista na tela | "Avise antes: gravidez · alergia · problema nos rins" | "Se for com contraste, a gente orienta o jejum e pede que você avise se está grávida, tem alergia ou problema nos rins." |
| 27–35 s | Profissional sorrindo, logo | "Guia completo no link da bio" | "O passo a passo está no nosso guia. E, se precisar, é só chamar no WhatsApp." |
**Legenda:**
> Tomografia não precisa dar medo. 🙂
> Em poucos minutos o exame fica pronto, e a equipe acompanha você do começo ao fim.
> Tem dúvida sobre preparo ou contraste? Deixe nos comentários que a gente responde.
> Agende sua tomografia pelo link da bio.
> [Nome] · [função/conselho] · Diretor técnico: [Nome] · CRM-PI [nº]
**Conformidade:** o CFM permite mostrar equipamento; **não** citar marca como superlativo ("o mais moderno"); sem paciente identificável; sem citar prazo de laudo que a clínica não garante.

---

### #3 · Seg 05/10 · Carrossel · Família e crianças · Blog 4
**Título:** Quantas consultas o bebê precisa no primeiro ano?
- **1:** "Quantas vezes o bebê vai ao pediatra no primeiro ano?"
- **2:** "O Ministério da Saúde recomenda pelo menos 7 consultas: na 1ª semana, com 1, 2, 4, 6, 9 e 12 meses." (Sociedade Brasileira de Pediatria sugere consultas mensais até os 6 meses; o pediatra ajusta.)
- **3:** "O que o pediatra acompanha: peso, comprimento e cabeça · vacinas · amamentação e alimentação · sono · desenvolvimento (sorrir, sentar, engatinhar, andar)."
- **4:** "Leve na consulta: caderneta da criança · lista de dúvidas (anote no celular durante a semana)."
- **5:** "Procure atendimento antes da data se: febre em bebê com menos de 3 meses · recusa para mamar · muito sonolento ou irritado · dificuldade para respirar."
- **6:** "Na EmCORR: pediatra, odontopediatra e fono no mesmo endereço. [dias da pediatria] `[confirmar]`"
- **7 (CTA):** "Salve para não esquecer as datas. Agende pelo link da bio."
**Legenda:** "O primeiro ano passa rápido, e cada consulta acompanha uma fase nova. 👶 Salve o calendário e mande para quem acabou de ter bebê. Agende a consulta do seu filho pelo link da bio." + rodapé médico do(a) pediatra.
**Conformidade:** foto de bebê só de banco de imagens licenciado ou com termo assinado pelos responsáveis; nada de "o pediatra mais querido".

---

### #4 · Qua 07/10 · Reel 30 s · Sorriso · Blog 5
**Gancho:** dentista agachado na altura de uma criança de pelúcia/fantoche: "Primeiro dentinho nasceu? Então já é hora de conhecer o dentista."
| Tempo | Imagem | Texto na tela | Fala |
|---|---|---|---|
| 0–3 s | Dentista com fantoche | "Com que idade ir ao dentista?" | gancho |
| 3–12 s | Close no fantoche | "Quando nasce o 1º dente ou até 1 ano" | "A recomendação é levar quando o primeiro dente nasce, ou até o primeiro aniversário." |
| 12–22 s | Dentista falando | "A 1ª consulta é conversa + olhadinha" | "A primeira consulta é para conhecer: a gente olha a boca, ensina a limpar e tira as dúvidas sobre chupeta e mamadeira." |
| 22–30 s | Consultório vazio, colorido | "Guia completo no link da bio" | "E o melhor: pediatra e dentista no mesmo lugar, aqui em Corrente." |
**Legenda:** "Cuidar do sorriso começa cedo, e sem susto. 🦷 A primeira visita é tranquila, feita para a criança se sentir segura. Quer saber mais? O guia completo está no link da bio. [Nome] · Cirurgião-dentista · CRO-PI [nº] · Responsável técnico: [Nome] · CRO-PI [nº]"
**Conformidade (CFO):** sem preço, sem "avaliação grátis", sem forma de pagamento; sem mostrar instrumental, procedimento ou boca de paciente real; nada de "sem dor" ou "sorriso perfeito".

---

### #5 · Sáb 10/10 · Carrossel · Mente e nutrição · Dia da Saúde Mental · Blog 11
**Título:** Ansiedade, depressão ou os dois? (retoma o post que já funcionou no perfil)
- **1:** "Ansiedade, depressão ou os dois?"
- **2:** "Ansiedade costuma aparecer como preocupação que não desliga, coração acelerado, dificuldade para dormir."
- **3:** "Depressão costuma aparecer como tristeza ou vazio na maior parte dos dias, perda de interesse no que antes dava prazer, cansaço constante."
- **4:** "As duas podem acontecer juntas. E só um profissional consegue avaliar. Este post não serve de diagnóstico."
- **5:** "Quando procurar ajuda: se os sinais duram mais de duas semanas · atrapalham trabalho, estudo ou família · você sente que não dá conta sozinho."
- **6:** "Se você pensa em se machucar, ligue 188 (CVV, 24 h, gratuito) ou procure o pronto-socorro."
- **7 (CTA):** "Na EmCORR, a conversa começa com discrição. Chame no WhatsApp pelo link da bio."
**Legenda:** "Hoje é o Dia Mundial da Saúde Mental. 💚 Sentir não é fraqueza, e pedir ajuda é cuidado. Se alguém que você ama está passando por isso, mande este post com carinho. [Nome] · Psicóloga · CRP [nº]"
**Conformidade:** sem teste/quiz de autodiagnóstico; sem promessa ("supere a ansiedade em X sessões"); comentários com relato pessoal: responder com acolhimento padrão e convite para o privado, sem orientação clínica pública.

---

### #6 · Seg 12/10 · Reel 30 s · Família e crianças · Dia das Crianças
**Gancho:** texto na tela sobre corredor da clínica: "Do primeiro mês à adolescência. Em um SÓ lugar."
| Tempo | Imagem | Texto na tela | Fala (voz em off) |
|---|---|---|---|
| 0–3 s | Porta da clínica se abrindo | "Feliz Dia das Crianças 🎈" | — |
| 3–10 s | Consultório da pediatria (vazio ou com filho de colaborador autorizado) | "Pediatria" | "Aqui, seu filho é acompanhado desde as primeiras semanas…" |
| 10–16 s | Consultório odonto infantil | "Odontopediatria" | "…o primeiro dentinho…" |
| 16–22 s | Sala da fono | "Fonoaudiologia" | "…as primeiras palavras…" |
| 22–30 s | Equipe acenando, logo | "Cuidando de você e de quem você ama" | "…e cada fase de crescer. Tudo em um só lugar, aqui em Corrente." |
**Legenda:** "Feliz Dia das Crianças para todas as famílias que crescem com a gente. 💛 Pediatria, odontopediatria e fonoaudiologia no mesmo endereço. Agende pelo link da bio." + rodapé do diretor técnico e do RT odontológico.
**Conformidade:** criança só com termo de uso de imagem assinado pelos responsáveis (seção 7); sem brinde ou "consulta grátis" de Dia das Crianças.

---

### #7 · Qua 14/10 · Reel 30 s · Exames explicados · Blog 3
**Gancho:** profissional do laboratório segurando um copo de café: "Posso tomar café antes do exame de sangue?"
| Tempo | Texto na tela | Fala |
|---|---|---|
| 0–3 s | "Exame de sangue: precisa de jejum?" | gancho |
| 3–12 s | "Nem sempre" | "Hoje, muitos exames não pedem jejum. O colesterol, por exemplo, pode ser feito sem jejum na maioria dos casos." |
| 12–20 s | "Glicemia de jejum: 8 horas" | "Mas a glicemia de jejum precisa de 8 horas sem comer. Água pode." |
| 20–26 s | "Siga o pedido e a orientação do laboratório" | "Na dúvida, siga o que está no pedido e pergunte pra gente antes." |
| 26–30 s | "Preparo de cada exame no link da bio" | "O guia completo está no link da bio." |
**Legenda:** "Jejum é uma das dúvidas que mais chegam no nosso WhatsApp. ☕ Resposta curta: depende do exame. Resposta completa: no link da bio. Tem outra dúvida de preparo? Comenta aqui." + rodapé do responsável técnico do laboratório `[confirmar]`.
**Conformidade:** não mostrar tubos com nome de paciente, pedido médico ou tela de sistema.

---

### #8 · Sex 16/10 · Carrossel · Mente e nutrição · Dia da Alimentação · Blog 12
- **1:** "Seu filho come mal? 5 atitudes que ajudam a família toda"
- **2:** "1. Divida as tarefas: você decide o que, quando e onde se come. A criança decide quanto."
- **3:** "2. Ofereça de novo. Muitas crianças precisam provar um alimento várias vezes antes de aceitar."
- **4:** "3. Coma junto e sem tela. A criança copia o prato de quem está à mesa."
- **5:** "4. Sem prêmio de sobremesa e sem castigo. Comida não é moeda."
- **6:** "5. Coloque a criança na cozinha: lavar a fruta, montar o prato."
- **7:** "Procure ajuda se: perda de peso · come muito poucos alimentos · engasgos frequentes · refeições viraram briga todos os dias."
- **8 (CTA):** "Nutrição e pediatria no mesmo lugar. Guia completo no link da bio."
**Legenda:** "No Dia Mundial da Alimentação, um lembrete: a mesa da família é onde a criança aprende a comer. 🍎 Qual dessas dicas você já usa? Conta pra gente. [Nome] · Nutricionista · CRN [nº]"
**Conformidade (CFN):** sem foto de corpo "antes/depois", sem promessa de peso, sem indicar produto ou suplemento.

---

### #9 · Dom 18/10 · Carrossel · Gente EmCORR · Dia do Médico
- **1:** "Feliz Dia do Médico. Conheça quem cuida de você aqui em Corrente."
- **2 a 8:** 1 slide por médico(a): foto real (sessão de fotos ou foto autorizada), **nome, "Médico(a)", especialidade, CRM-PI, RQE**, e uma frase dele(a) em primeira pessoa ("Gosto de explicar o exame com calma até a dúvida acabar.").
  Ex.: "Dra. Ludmilla Nery · Médica cardiologista · CRM-PI 5888 · RQE 2142"; demais `[confirmar registros]`.
- **Último:** "Obrigado por escolherem cuidar das famílias do sul do Piauí. Veja dias de atendimento em /corpo-clinico (link da bio)."
**Legenda:** "Hoje é dia de agradecer a quem dedica a vida ao cuidado. 🩺 Obrigado, equipe médica EmCORR." + diretor técnico.
**Conformidade:** médico sem RQE **não** pode ser apresentado como especialista (ex.: "Médico generalista", não "especialista em…"). Sem "renomado", "o melhor". Quem não autorizar a foto fica fora do carrossel.

---

### #10 · Seg 19/10 · Carrossel · Coração e metabolismo · Blog 8
- **1:** "Pressão alta quase nunca dá sinal."
- **2:** "Por isso tanta gente só descobre quando já tem problema no coração, no rim ou um AVC."
- **3:** "Pressão de 14 por 9 (140/90) ou mais em medidas repetidas é hipertensão. Entre 12 por 8 e 14 por 9 já merece atenção e conversa com o médico."
- **4:** "Meça mesmo se sentindo bem, principalmente se: tem pai ou mãe hipertensos · passou dos 40 · tem diabetes ou sobrepeso · fuma."
- **5:** "Como medir certo: sentado, 5 minutos de descanso, braço apoiado na altura do coração, sem café nem cigarro 30 minutos antes."
- **6:** "Já toma remédio? Não pare por conta própria, mesmo se a pressão melhorar."
- **7 (CTA):** "Avaliação cardiológica com calma e exames aqui mesmo, em Corrente. Guia completo no link da bio."
**Legenda (base da BRAND-VOICE):**
> Pressão alta quase nunca dá sinal. 🫀
> Por isso vale medir mesmo quando você se sente bem, principalmente se há casos na família.
> Na EmCORR, a avaliação cardiológica é feita com calma e com os exames aqui mesmo, em Corrente.
> Guia completo no link da bio.
> Dra. Ludmilla Nery · Médica cardiologista · CRM-PI 5888 · RQE 2142
**Conformidade:** números revisados e assinados pela cardiologista antes da publicação (referência: diretriz brasileira de hipertensão vigente).

---

### #11 · Qua 21/10 · Reel 35 s · Família e crianças · Blog 7
**Gancho:** fono segurando um cartão com a palavra "ÁGUA": "Seu filho ainda fala poucas palavras? Vamos conversar."
| Tempo | Texto na tela | Fala |
|---|---|---|
| 0–3 s | "Seu filho fala poucas palavras?" | gancho |
| 3–12 s | "Cada criança tem seu ritmo…" | "Cada criança tem seu tempo, mas existem marcos que ajudam a saber quando procurar ajuda." |
| 12–24 s | "Sinais de alerta: sem balbucio aos 12 meses · nenhuma palavra por volta de 1 ano e meio · não junta 2 palavras aos 2 anos · perdeu palavras que já falava" | leitura dos sinais |
| 24–30 s | "Audição também conta" | "E vale checar a audição: às vezes a fala atrasa porque a criança não está ouvindo bem." |
| 30–35 s | "Guia completo no link da bio" | "Fono e exames de audição aqui na EmCORR." |
**Legenda:** "Quanto antes a família busca orientação, mais tranquilo fica o caminho. 🗣️ Salve e mande para quem tem criança pequena em casa. [Nome] · Fonoaudióloga · CRFa [nº]"
**Conformidade:** sem criança real sem termo; sem rotular ("seu filho tem autismo?"); sem diagnóstico por comentário.

---

### #12 · Sex 23/10 · Carrossel · Sorriso · Blog 6
- **1:** "Aparelho nos dentes: existe idade certa para a primeira avaliação?"
- **2:** "A recomendação mais comum é uma primeira avaliação ortodôntica por volta dos 7 anos."
- **3:** "Avaliar não quer dizer usar aparelho já. Muitas vezes é só acompanhar o crescimento."
- **4:** "Fique atento a: respirar pela boca · chupar dedo ou chupeta depois dos 3 anos · dentes muito apertados ou encavalados · mordida que não fecha."
- **5:** "Adulto também pode fazer avaliação. Não existe idade limite para cuidar do sorriso."
- **6:** "Na EmCORR: ortodontia e odontopediatria no mesmo lugar."
- **7 (CTA):** "Guia completo no link da bio."
**Legenda:** "Aparelho é uma dúvida de muita família. 😁 A primeira avaliação ajuda a entender o momento certo, sem pressa e sem susto. [Nome] · Cirurgião-dentista · Ortodontia · CRO-PI [nº] · Responsável técnico: [Nome] · CRO-PI [nº]"
**Conformidade (CFO):** **sem antes/depois no perfil da clínica** (a Res. CFO-196/2019 só permite no perfil pessoal do dentista autor, com TCLE); sem preço, parcelamento, "manutenção grátis", "sorriso perfeito"; imagem ilustrativa sem boca de paciente real e sem instrumental ou materiais identificáveis.

---

## 7. Regras de conformidade (checklist antes de publicar)

### 7.1 Medicina: Resolução CFM 2.336/2023 (vigente desde 11/03/2024)
- **Identificação obrigatória** em qualquer peça com médico: nome + a palavra **médico(a)** + **CRM-PI** + **RQE** quando citar especialidade. Sem RQE, não chamar de especialista.
- **Estabelecimento:** a clínica identifica o **diretor técnico médico** (nome, CRM, RQE). Colocar na bio, na `/links`, no rodapé do site e nas legendas de posts institucionais.
- **Proibido:** promessa de resultado, sensacionalismo, superlativos sem prova ("melhor", "referência", "de ponta", "renomado"), medo como gatilho, garantia de cura.
- **Antes e depois:** a CFM 2.336 **permite** com fins educativos, consentimento e anonimato, mas **a política da EmCORR é não publicar antes/depois** no perfil institucional (clínica de família, baixo ganho e alto risco).
- **Depoimentos:** o médico/clínica pode repostar elogios de pacientes de forma **sóbria**, sem adjetivos de superioridade e **não reiterada**. Sempre com consentimento por escrito (7.4).
- **Valores:** o CFM permite divulgar valor de **consulta**, não de procedimento. Recomendação para as redes: **não divulgar preço** (evita confusão com a regra odontológica e com o SUS gratuito).
- **Equipamentos:** pode mostrar (tomografia, sala), sem transformar marca em superlativo.
- **Sem orientação clínica individual** por comentário ou DM: resposta padrão levando ao WhatsApp/consulta.

### 7.2 Odontologia: Código de Ética Odontológica + Res. CFO-196/2019
- **Nome e CRO** do dentista em toda peça em que ele aparece + **responsável técnico (nome e CRO)** nas peças institucionais de odonto.
- **Proibido na publicidade:** preço, gratuidade, forma de pagamento, desconto, "avaliação grátis", "a partir de", superlativos, promessa de resultado ("sorriso perfeito", "sem dor").
- **Antes/depois:** só no **perfil pessoal** do cirurgião-dentista autor do tratamento, com TCLE. **Nunca no @centro_clinico_emcorr.**
- **Evitar imagens** de instrumentais, materiais e equipamentos identificáveis, tecidos biológicos (dente extraído, gaze com sangue) e passo a passo de procedimento.
- Selfie com paciente: permitida pela CFO-196 com autorização, mas **não usar** no perfil da clínica sem termo e sem necessidade.

### 7.3 Outras profissões
- **Psicologia (CFP):** nome + CRP; sem promessa de resultado, sem preço como propaganda, sem teste de autodiagnóstico; incluir CVV 188 em temas de sofrimento intenso.
- **Nutrição (CFN):** nome + CRN; sem imagem corporal de antes/depois, sem promessa de peso, sem indicação de produto/suplemento por marca.
- **Fono (CRFa) e Fisio (CREFITO):** nome + registro; sem promessa de resultado.
`[confirmar os números de registro de cada profissional antes de qualquer post: pendência crítica do CONTENT-INVENTORY]`

### 7.4 Consentimento de pacientes e LGPD
- **Termo de uso de imagem e depoimento por escrito**, específico (quais canais, por quanto tempo), revogável, guardado pela clínica. Imagem em contexto de saúde é dado sensível (LGPD art. 11).
- **Menores:** termo assinado pelo(s) responsável(is) legal(is) e concordância da criança. Preferir filhos de colaboradores (também com termo), fantoches, ilustração ou mãos.
- **Anonimato mesmo com autorização** quando o conteúdo tratar de doença: sem rosto, nome, cidade pequena identificável ou detalhe que revele o paciente.
- **Nunca aparecer no quadro:** prontuário, tela de sistema, pedido médico, etiqueta de tubo, pulseira, lista de agenda, pacientes na sala de espera.
- **Depoimentos antigos** (Marta, Suele e destaques atuais): renovar consentimento por escrito ou retirar (CONTENT-INVENTORY, item 8).
- **Comentários e DMs:** não confirmar que alguém é paciente; não discutir caso clínico em público; texto padrão: "Obrigado por contar. Para cuidar bem do seu caso, chame a gente no WhatsApp pelo link da bio 💛".
- **Música:** usar só áudio liberado para contas comerciais na biblioteca do Instagram.

### 7.5 Checklist de 10 itens (colar no fluxo de aprovação)
1. Profissional identificado com nome, conselho e número (e RQE se citar especialidade)?
2. Diretor técnico / responsável técnico citado em peça institucional?
3. Nenhuma palavra proibida (melhor, referência, de ponta, renomado, garantido, cura, 100%, sem dor, sorriso perfeito, grátis, promoção, desconto, antes e depois)?
4. Nenhum preço, desconto ou forma de pagamento (obrigatório em odonto; política da casa para tudo)?
5. Nenhum antes/depois no perfil da clínica?
6. Paciente ou criança na imagem? Termo assinado e arquivado?
7. Nada de prontuário, pedido, tela ou dado pessoal no quadro?
8. Conteúdo técnico revisado e aprovado pelo profissional que assina?
9. Tom de cuidado, sem medo; "Conteúdo educativo. Não substitui consulta." em temas clínicos?
10. Link com UTM correto e código de WhatsApp de origem?

**Fluxo de aprovação:** rascunho (social media) → revisão técnica e "de acordo" do profissional (por escrito no WhatsApp ou no admin) → checklist 7.5 → publicação. Guardar o "de acordo" por pelo menos 5 anos.

---

## 8. Hashtags
Sem volume inventado: antes de usar, confira a contagem de publicações de cada hashtag na busca do Instagram e mantenha a mistura **local (nicho) + tema (médio) + amplo (1–2) + marca**. Usar 5–8 por post.

| Grupo | Hashtags |
|---|---|
| Local (sempre) | #CorrentePI #CorrentePiaui #SulDoPiaui #Piaui |
| Marca | #EmCORR · série educativa: #EmCORRExplica |
| Família e crianças | #pediatria #saudeinfantil #maternidade #desenvolvimentoinfantil #fonoaudiologia |
| Coração e metabolismo | #hipertensao #pressaoalta #diabetes #tireoide #cardiologia #endocrinologia |
| Exames explicados | #tomografia #examesdeimagem #examedesangue #exameslaboratoriais #preparodeexame |
| Mente e nutrição | #saudemental #psicologia #nutricao #alimentacaoinfantil #reeducacaoalimentar |
| Sorriso | #odontologia #saudebucal #odontopediatria #ortodontia |
| Campanhas | #OutubroRosa #NovembroAzul #DiaMundialDoDiabetes #DezembroLaranja #DiaDasCriancas |

Evitar hashtags que prometem resultado (#antesedepois, #sorrisoperfeito, #emagrecimento).

---

## 9. Engajamento
- **Pergunta no fim de ~1 em cada 3 posts:** "Qual dessas dicas você já usa?", "Qual exame você quer que a gente explique no próximo?".
- **Enquetes nos stories 2x/semana:** "Você sabe se seu exame precisa de jejum? Sim / Não sei", "O que você mais procura no nosso site?".
- **Caixinha semanal** do tema da semana → vira reel "Respondendo @…" (sem expor quem perguntou, se for pessoal) e item de FAQ no site.
- **Sem posts de polêmica ou "hot take"** (tom da marca e ética médica). O equivalente seguro é **Mito ou verdade** ("Tomografia com contraste sempre exige jejum longo? Mito ou verdade?").
- **Resposta a comentários** em até 1 dia útil, com o texto padrão de 7.4 quando envolver caso pessoal.
- **Formatos que funcionam para saúde local:** "Mito ou verdade", "Respondendo @", "Por dentro da sala de…", "Um dia na EmCORR", "Salve para depois" (carrossel checklist). Evitar "POV" e trends de humor com doença.
- **Adaptação de trend:** só se o áudio/formato permitir mensagem educativa sem banalizar doença; produzir em até 48 h; checar 7.5 antes.

---

## 10. Produção
- **1 dia de gravação por mês por grupo de profissionais** (ex.: 1ª terça: pediatria + fono + odonto; 2ª terça: cardio + endócrino + nutri + psico), gravando 3–4 reels por pessoa com o roteiro deste arquivo.
- **Kit:** celular na vertical, microfone de lapela, luz da janela ou ring light, fundo limpo da clínica. Legenda embutida em todos os reels (muita gente assiste sem som).
- **Identidade visual:** usar o design system do site novo (DESIGN.md, quando existir) nos carrosséis, para o Instagram e o blog parecerem a mesma marca.
- **Facebook:** publicar pelo Meta Business Suite, mas trocar "link da bio" pelo link direto com `utm_source=facebook`.
- **Fotos:** nunca usar imagem gerada de "médico" ou "paciente" falso (PLANO-MESTRE); gerada só para ambientação/ilustração.

---

## 11. Métricas a acompanhar (sem metas inventadas)
Registrar a **linha de base** nas 4 semanas antes de L e comparar em L+30 e L+60.

| Onde | Métrica | Fonte |
|---|---|---|
| Instagram | alcance e contas alcançadas por formato (C × R × E) e por pilar | Insights |
| Instagram | salvamentos e compartilhamentos por post (sinal de conteúdo útil) | Insights |
| Instagram | toques no link da bio; toques no link sticker | Insights |
| Site | sessões com `utm_source=instagram` / `facebook` / `whatsapp`, por `utm_campaign` | Vercel Analytics / Plausible |
| Site | `links_page_click` por destino; `blog_cta_click`; `whatsapp_click` com origem social | eventos do FUNNEL-ANALYSIS |
| WhatsApp | conversas com código `[ig-…]` / `[fb]` por semana; % que virou agendamento e comparecimento | etiquetas WhatsApp Business + admin |
| Conteúdo | perguntas recebidas por caixinha/DM que viraram artigo ou FAQ | planilha "Perguntas da semana" |

Revisão mensal (1ª segunda do mês): quais 3 posts tiveram mais salvamentos + toques no link → repetir o tema em outro formato; quais pilares ficaram abaixo da média → ajustar ângulo ou gancho.

---

## 12. Pendências para a clínica (bloqueiam posts)
1. CRM/RQE/CRO/CRP/CRN/CRFa de todos os profissionais e **nome do diretor técnico médico** e do **responsável técnico odontológico**.
2. Serviços ativos: mamografia, dermatologia, psiquiatria, neurologia, cirurgia geral, urologia (afeta Outubro Rosa, Dezembro Laranja e Novembro Azul).
3. Dias de atendimento por profissional (stories "Quem atende hoje").
4. Preparo, duração e prazo de resultado reais de tomografia, laboratório e mamografia.
5. Horário de fim de ano e se abre aos sábados.
6. Termos de consentimento: equipe, depoimentos antigos e novos, crianças.
7. Números reais para a retrospectiva de 2026 (ou fazê-la sem números).
8. Data L confirmada e acesso ao Linktree, Meta Business Suite e Google Business.

---

*Fontes regulatórias consultadas em 28/09/2026: [Resolução CFM 2.336/2023 (PDF)](https://sistemas.cfm.org.br/normas/arquivos/resolucoes/BR/2023/2336_2023.pdf), [CFM: o que muda](https://publicidademedica.cfm.org.br/resolucao/o-que-muda), [CRM-PI sobre a 2.336/23](https://crmpi.org.br/noticias/cfm-atualiza-resolucao-da-publicidade-medica-em-resolucao-no-2-333-23/), [Resolução CFO-196/2019](https://website.cfo.org.br/resolucao-cfo-196-2019/), [CFO: redes sociais na Odontologia](https://website.cfo.org.br/redes-sociais-na-odontologia-fique-atento-as-normas-eticas-e-acerte-na-publicacao-dos-conteudos/), [CROSP: em dia com a 196/2019](https://crosp.org.br/noticia/em-dia-com-a-resolucao-196-2019/). Conteúdo clínico dos roteiros deve ser revisado e assinado pelo profissional responsável antes da publicação.*
