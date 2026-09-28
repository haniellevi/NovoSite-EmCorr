# Plano de Resultados — o que o novo site da EmCORR precisa fazer

Consolida os 14 relatórios da pasta num só plano. As fontes de cada ponto estão entre colchetes.

---

## 1. Para que a clínica precisa de um site

A EmCORR não precisa de um cartão de visita. Precisa de agenda cheia nas áreas que sustentam o negócio.

**O que o site atual revela sobre o negócio:**
- O maior investimento da casa está à vista no banner: um **tomógrafo GE ACT Revolution**. Junto com raio-X, panorâmica, tomografia odontológica, mamografia, ultrassom, ecocardiograma, holter e MAPA, forma um **parque de diagnóstico** que quase nenhuma clínica do extremo sul do Piauí tem. Equipamento parado custa caro. O site precisa trazer pedidos de exame, de Corrente e de fora.
- A casa reúne **medicina, odontologia, psicologia, nutrição, fono e fisioterapia**. Nenhum concorrente local oferece esse conjunto [COMPETITOR-REPORT]. Uma família inteira pode ser atendida num só endereço, e é esse o argumento que faz alguém atravessar a cidade ou vir de outro município.
- Desde abril de 2026 o SUS faz tomografia, raio-X, ultrassom e mamografia de graça na própria cidade [COMPETITOR-REPORT]. A EmCORR não vai vencer no preço. Vence em **prazo, conforto, continuidade com o mesmo médico e convênio aceito**, e o site tem de deixar isso claro sem citar o SUS de forma depreciativa.
- O paciente já prefere a EmCORR no Instagram (≈6 mil seguidores contra ≈4,5 mil da Policlínica), mas **o site é pulado**: quem chega pelo Instagram vai direto ao WhatsApp, e quem busca no Google encontra páginas sem título local, sem descrição e sem WhatsApp clicável [FUNNEL-ANALYSIS, SEO-AUDIT].

**Objetivo do site, em uma frase:**
> Transformar quem procura um exame, uma especialidade ou "clínica em Corrente" numa conversa com a recepção pelo WhatsApp, em menos de um minuto, e dar ao Google e às IAs informação suficiente para indicar a EmCORR.

**Três resultados que importam (nessa ordem):**
1. **Pedidos de exame**, sobretudo de imagem e cardiologia, incluindo pacientes de outras cidades.
2. **Primeiras consultas** nas especialidades, que depois geram exame e retorno.
3. **Retorno e indicação:** resultado fácil de acessar, avaliação no Google e conteúdo que traz o paciente de volta.

---

## 2. Onde estamos e até onde dá para chegar

| Dimensão | Hoje | Teto realista em 90 dias | O que limita o teto |
|---|---|---|---|
| GEO (visibilidade em IA) | 29 | **80–85** | Menções em fontes externas levam meses [GEO-AUDIT] |
| SEO | 31 | **85–90** | Volume de busca pequeno na região; avaliações do Google [SEO-AUDIT] |
| CRO da home | 31 | **85+** | Fotos reais e depoimentos com consentimento [LANDING-CRO] |
| Funil | 34 | **80+** | Tempo de resposta da recepção no WhatsApp [FUNNEL-ANALYSIS] |
| Autoridade da marca | 5 | **35–45** | Depende quase só de ações fora do site [BRAND-MENTIONS] |
| Performance (Lighthouse mobile) | não medido | **95–100** | Nenhum: o site estático em Astro resolve |
| Acessibilidade (WCAG AA) | falhas graves | **100% dos critérios AA** | Nenhum |

O site novo resolve sozinho **cerca de 70% da distância** até o teto. O restante vem de quatro hábitos da clínica: responder rápido no WhatsApp, pedir avaliação no Google, manter o cadastro igual em todos os lugares e publicar no blog. Estão no §6.

---

## 3. As 12 mudanças que mais movem o resultado

Ordem por impacto em agendamento.

| # | Mudança | Por quê | Notas que sobem |
|---|---|---|---|
| 1 | **WhatsApp em todo lugar, com mensagem pronta por serviço.** Botão no hero, barra fixa no celular e CTA em cada página de exame e especialidade. A mensagem já chega dizendo "Quero agendar ecocardiograma, tenho Medplan". | Hoje não existe nenhum link clicável; é o maior vazamento do funil | Funil, CRO |
| 2 | **Uma página de verdade para cada um dos 24 exames:** para que serve, preparo em lista, duração, onde sai o resultado, convênios e o botão "Enviar o preparo no meu WhatsApp". | Quem busca exame já tem pedido médico na mão: é a busca mais perto do agendamento | SEO, GEO, Funil |
| 3 | **Página "Vindo de outra cidade?"** com rotas a partir dos municípios vizinhos, dica de horário para fazer consulta e exame no mesmo dia e agendamento prioritário pelo WhatsApp. | Enche o tomógrafo e o ecocardiograma com pacientes da região, sem virar página-portal | SEO local, Funil |
| 4 | **Home reescrita para o paciente:** H1 com o que a clínica faz e onde, atalhos (Agendar, Resultados, Preparo, Convênios, Como chegar), fases da vida, faixa "consulta e exame no mesmo lugar", depoimentos, FAQ e mapa. | A home atual não tem H1, abre com carrossel e mostra "0+" nos números | CRO, SEO, GEO |
| 5 | **Agendamento em um passo:** WhatsApp como caminho principal e formulário de 5 campos, sem CPF, com consentimento LGPD e "a recepção responde em até X min no horário de atendimento". | O formulário atual pede CPF e não diz o que acontece depois | Funil, CRO, conformidade |
| 6 | **Corpo clínico completo:** os 11 profissionais que já têm página no site, com foto padronizada, registro no conselho quando publicado e dias de atendimento. | Hoje 9 páginas estão órfãs e a lista mostra só 2 nomes | SEO, GEO (E-E-A-T), CRO |
| 7 | **Dados estruturados completos:** `MedicalClinic` com endereço, geo, horário, convênios e área atendida; `Physician`/`Dentist`; `MedicalTest` por exame; `FAQPage`; `BreadcrumbList`; `Article` com autor e revisor. Mais `llms.txt`. | É o que Google e IAs leem primeiro; hoje só existe breadcrumb | GEO, SEO |
| 8 | **Um único cadastro (NAP) em todo lugar:** "EmCORR – Centro Clínico · Av. Getúlio Vargas, 471, Centro, Corrente-PI · (89) 9 9933-1133". Site, schema, Google, Instagram, Facebook e diretórios iguais. | Existem 6 variações do nome e dois telefones circulando | SEO local, GEO, Autoridade |
| 9 | **Página única de resultados** que explica qual portal usar para cada tipo de exame e lembra o paciente de avaliar a clínica no Google. | Três portais sem explicação geram ligação para a recepção e perdem a chance de pedir avaliação | Funil, Autoridade |
| 10 | **Blog "Saúde em família" ligado aos serviços:** cada artigo responde uma dúvida real ("Tomografia precisa de jejum?", "Quando levar a criança ao dentista pela primeira vez?"), é assinado por profissional com registro e termina no serviço correspondente. | Traz busca informativa, alimenta o Instagram e dá às IAs algo para citar | SEO, GEO, Autoridade |
| 11 | **URLs novas e 301 de todas as antigas**, com título e descrição únicos em cada página e "Corrente-PI" no título. | Nenhuma página tem meta description; URLs antigas dão 404 | SEO |
| 12 | **Medição desde o primeiro dia:** eventos de clique no WhatsApp por serviço, envio de formulário, clique em resultados e em rota, com painel no admin mostrando quais páginas geram conversas. | Sem dado, não dá para saber o que investir | Todas |

---

## 4. Plano para levar cada nota ao teto

### GEO (29 → 80–85)
- Schema completo (item 7) e `llms.txt` gerado do banco com serviços, convênios, endereço e horário.
- Parágrafos de resposta direta no topo das páginas de exame e especialidade (40–60 palavras que se sustentam sozinhos: o que é, para quem, onde fazer em Corrente).
- FAQ real em todas as páginas de serviço.
- Autor e revisor com registro em cada artigo; "Atualizado em" visível.
- Página Sobre com fatos verificáveis: fundação em 2020, endereço, equipe, equipamentos, convênios, responsável técnico.
- `robots.txt` liberando GPTBot, ClaudeBot, PerplexityBot e Google-Extended.
- Fora do site: perfil no Google completo, Wikidata da clínica, citação em matéria do Portal Corrente no lançamento [BRAND-MENTIONS].

### SEO (31 → 85–90)
- Arquitetura: `/especialidades/[slug]`, `/exames/[slug]`, `/corpo-clinico/[slug]`, `/convenios`, `/resultados`, `/agendar`, `/vindo-de-outra-cidade`, `/blog` [SEO-AUDIT].
- Title com "Corrente-PI" e meta description única em cada página.
- Links internos: especialidade ↔ exames relacionados ↔ profissionais ↔ artigos.
- 301 de todas as URLs antigas, incluindo o legado Joomla listado no SEO-AUDIT.
- Sitemap, canonical, Open Graph e imagem de compartilhamento por página.
- Pautas do blog começando pelas de intenção de agendamento [KEYWORD-STRATEGY].
- Core Web Vitals no verde (LCP < 2 s).

### CRO da home (31 → 85+)
- Seguir o wireframe de 12 seções do LANDING-CRO com a copy revisada.
- Um único CTA principal, repetido (WhatsApp); secundário: Resultados.
- Prova visível acima da dobra: convênios, "desde 2020", "30 mil atendimentos", "14 profissionais" (números do próprio site).
- Fotos reais da fachada e da equipe (as atuais servem até a sessão de fotos).
- Sem carrossel, sem contador animado, sem texto dentro de imagem.
- Teste A/B do H1 depois de 30 dias de dados.

### Funil (34 → 80+)
- WhatsApp com mensagem pré-preenchida por página (17 mensagens prontas na copy).
- Formulário de 5 campos que grava no painel e avisa a recepção por e-mail.
- Página de resultados única, com "avalie no Google" depois do acesso.
- Página `/links` para a bio do Instagram (substitui o Linktree) com UTM.
- Painel de solicitações com status (novo, contatado, agendado) para a recepção não perder pedido.

### Autoridade da marca (5 → 35–45)
- No site: página de cada profissional, artigos assinados, página "Sobre" com fatos e página de imprensa/novidades para matérias futuras.
- Fora do site, nas primeiras 4 semanas: NAP corrigido em 15 diretórios, perfil no Google completo, cadastro em Doctoralia, Fácil Consulta e Medprev, pedido de avaliação a cada paciente atendido e matéria de lançamento no Portal Corrente [LAUNCH-PLAYBOOK].

### Performance e acessibilidade
- HTML estático, imagens AVIF com tamanho fixo, uma família tipográfica e JavaScript só onde há interação.
- Contraste AA em todos os textos (botões em #E4181E; texto vermelho em #C0090E) [DESIGN.md].
- Foco visível, navegação por teclado, alvos de 44 px e corpo de 17 px no celular.

---

## 5. O que o site precisa ter

**Páginas:** Home · Sobre · Especialidades (índice + 15) · Exames (índice com busca e filtros + 24) · Corpo clínico (índice com filtros + 11) · Convênios · Resultados · Agendar · Vindo de outra cidade · Particular ou SUS (guia neutro) · Contato e como chegar · Perguntas frequentes · Blog (índice, categorias, artigos) · Links (bio do Instagram) · Privacidade · 404.

**Recursos:**
- Botão de WhatsApp com mensagem por serviço, fixo no celular.
- Busca e filtros de exames por grupo (Imagem, Coração, Ouvido/nariz/garganta, Recém-nascido, Laboratório).
- "Enviar preparo no WhatsApp" em cada exame.
- Horário de hoje no topo, vindo do painel.
- Mapa e rota.
- Depoimentos com consentimento registrado.
- FAQ com schema.
- Painel admin: conteúdo, blog com agendamento, solicitações, profissionais, convênios, horários, mídia, redirecionamentos e relatório simples de conversões.

---

## 6. O que a clínica precisa fazer (sem isso a nota trava)
1. **Responder no WhatsApp em até 15 minutos** no horário de atendimento. O site entrega a conversa; a recepção fecha o agendamento.
2. **Pedir avaliação no Google a cada atendimento** (QR code no balcão e link na mensagem de resultado).
3. **Manter o cadastro igual em todos os lugares** (item 8).
4. **Publicar 1 artigo por semana** no blog, revisado por um profissional da casa.
5. **Olhar o painel uma vez por semana:** quais páginas e serviços geraram conversas.

---

## 7. Como vamos medir
| Indicador | Onde | Meta em 90 dias |
|---|---|---|
| Conversas iniciadas pelo site (WhatsApp + formulário) | Painel admin + analytics | 5–8% das visitas |
| Pedidos de exame de imagem e cardiologia vindos do site | Painel (serviço da solicitação) | crescimento mês a mês |
| Pacientes de outras cidades | Campo "cidade" opcional no formulário + UTM | medir a linha de base no mês 1 |
| Posições no Google para "[exame/especialidade] Corrente PI" | Search Console | top 3 nas páginas P1 |
| Avaliações no Google | Perfil da empresa | +60 |
| Notas das auditorias | Nova rodada de `geo-audit`, `market-seo`, `market-landing` e `market-funnel` | tetos do §2 |
