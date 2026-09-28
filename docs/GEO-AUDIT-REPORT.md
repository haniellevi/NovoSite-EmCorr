# Relatório de Auditoria GEO: EmCORR – Centro Clínico

**Data da auditoria:** 28/09/2026
**URL:** https://emcorr.com.br/
**Tipo de negócio:** Negócio local (clínica médica e odontológica, Corrente-PI) com características de serviços de saúde (YMYL)
**Páginas analisadas:** 52 (todas as URLs de `wp-sitemap.xml`: 4 páginas, 24 exames, 13 especialidades, 11 profissionais) + 3 arquivos de listagem + robots.txt, sitemaps, llms.txt e URLs legadas

> **Método.** Os subagentes especializados não foram disparados; todas as análises (citabilidade, crawlers, llms.txt, schema, técnico, E-E-A-T, marca e plataformas) foram feitas inline, com `curl` (HTML bruto, cabeçalhos e testes com user-agents de robôs de IA) e buscas na web. A API do PageSpeed Insights retornou erro de cota, então **as métricas de Core Web Vitals não foram medidas** e estão marcadas como (verificar). Avaliações do Google/Perfil da Empresa também não foram coletadas (verificar).

---

## Resumo executivo

**Nota GEO geral: 29/100 (Crítica)**

O site é tecnicamente acessível: o HTML sai do servidor, o robots.txt libera tudo e os robôs de IA (GPTBot, ClaudeBot, PerplexityBot etc.) recebem a página normalmente. O problema é o que eles encontram. Não há nenhum dado estruturado de entidade (só `BreadcrumbList`), nenhuma meta description, nenhuma tag Open Graph, nenhum `llms.txt`, e as páginas de especialidade têm uma única frase. As páginas de profissionais trazem o registro no conselho, mas "Especialidades" e "Dias de Atendimento" estão vazios na maioria. Os números da home aparecem como "0+ / 0 K+ / 0+" para quem lê sem JavaScript, o caso de quase todo robô de IA. Não existe política de privacidade, embora o formulário de agendamento peça CPF. Na web, o endereço, o telefone e o nome da marca aparecem em versões diferentes, e as URLs do site antigo (Joomla) ainda indexadas terminam em 404.

A boa notícia para o redesign é que as 24 páginas de exame já seguem um modelo de perguntas e respostas ("O que é?", "Como funciona?", "E depois?"). É a estrutura que IAs citam, e ela só precisa de dados concretos: preparo, prazo, convênios, quem faz e onde.

### Composição da nota

| Categoria | Nota | Peso | Ponderado |
|---|---|---|---|
| Citabilidade para IA | 30/100 | 25% | 7,5 |
| Autoridade de marca | 22/100 | 20% | 4,4 |
| Conteúdo E-E-A-T | 28/100 | 20% | 5,6 |
| GEO técnico | 55/100 | 15% | 8,3 |
| Schema e dados estruturados | 12/100 | 10% | 1,2 |
| Otimização por plataforma | 20/100 | 10% | 2,0 |
| **Nota GEO geral** | | | **29/100** |

---

## Problemas críticos (corrigir imediatamente)

1. **Nenhum schema de entidade no site.** A home não tem JSON-LD nenhum. As outras 51 páginas têm só `BreadcrumbList` (gerado pelo Elementor). Não existe `MedicalClinic`/`LocalBusiness`, `Organization`, `Physician`, `MedicalProcedure` nem `FAQPage`. Para uma clínica local, essa é a principal forma de a IA e o Google entenderem o que é a EmCORR, onde fica e quem atende.
2. **Marca com identidade inconsistente na web (NAP).** Diretórios e o CNPJ mostram "Emcorr – Saúde em Corrente", "Centro Clinico Emcorr – Ludmilla Nery Custodio Eireli", "Avenida Getulio Vargas, 471" e o telefone (89) 3573-1881. O site atual usa "Rua Getúlio Vargas Nº 471" e +55 (89) 9 9933-1133. Assim as IAs não conseguem consolidar a entidade.
3. **Política de privacidade inexistente, com coleta de CPF.** No rodapé, "Privacidade" é texto sem link, e `/privacidade/` e `/politica-de-privacidade/` retornam 404. O formulário `/agendar/` pede nome, CPF, WhatsApp e e-mail. Isso é risco LGPD e também sinal negativo de confiança (Trust) num site de saúde (YMYL).

## Problemas de prioridade alta (até 1 semana)

4. **Sem `llms.txt`.** `/llms.txt` retorna 404 (uma página HTML de 65 KB).
5. **Sem meta description e sem Open Graph/Twitter Card em nenhuma das 52 páginas.** Os snippets e as prévias no WhatsApp/Instagram ficam por conta de cada plataforma.
6. **Especialidades rasas.** 11 das 13 páginas de especialidade têm uma frase só (ex.: Pediatria: "Especialista nas necessidades médicas de recém-nascidos, crianças e adolescentes."). As exceções são Fonoaudiologia e Psiquiatria. Não dizem quem atende, quando, por quais convênios nem quais problemas são tratados.
7. **Perfis de profissionais incompletos.** Em 9 dos 11 perfis, "Especialidades" está vazio ou só com tópicos. "Dias de Atendimento" está vazio em 10 de 11. Dr. Dhiogo Melo e Dra. Thalma Muniz não têm registro no conselho visível. Não há foto com alt, formação nem RQE na maioria. O nome também varia: "Ludmilla" (home e CNPJ) e "Ludmila" (perfil).
8. **Números da home zerados para robôs.** "Anos de Experiência 0+ / Atendimentos 0 K+ / Profissionais 0+" dependem de `jquery-numerator`. Sem JavaScript, a IA lê zeros. Além disso, os valores reais não estão em lugar nenhum (verificar com o cliente).
9. **Home sem H1.** Os títulos são H2 fragmentados ("Centro Clínico Referência" / "Em Corrente"), e o primeiro H2 da página é "Convênios".
10. **URLs do site antigo (Joomla) indexadas terminam em 404.** Exemplos: `/index.php/especialidades/cardiologiaclinica` → 301 → `/especialidades/cardiologiaclinica` → **404**, e `/index.php/component/users/...` → 301 → 404. Com isso se perde a autoridade de links antigos.
11. **Sem responsável técnico médico visível.** Anúncios e sites de estabelecimentos médicos devem mostrar o nome e o CRM do diretor técnico (normas de publicidade médica do CFM; verificar a resolução vigente com o cliente/jurídico).

## Problemas de prioridade média (até 1 mês)

12. **Arquitetura de URLs pouco semântica.** Os prefixos têm sublinhado (`/_exames/`, `/_especialidades/`, `/_corpo-clinico/`). Há slugs como `/_especialidades/2996-2/` (é Fonoaudiologia) e `/_especialidades/ortodontia/` (o título é "Odontologia"). A mamografia aparece duplicada como especialidade e como exame.
13. **Portfólio desalinhado.** O formulário de agendamento oferece Teste Ergométrico, Eletroencefalograma, Clínico Geral e Ortopedia, que não têm página. Pelo COMPETITOR-REPORT, o Instagram mostra ainda odontopediatria e dermatologia, também sem página.
14. **Páginas de exame sem dados concretos.** Estrutura boa, mas texto genérico, cerca de 150 a 200 palavras de conteúdo útil (verificar contagem exata sem navegação). Faltam preparo, duração, prazo do resultado, convênios, quem faz o laudo, preço ou "consulte" e FAQ.
15. **Três portais de resultado diferentes** (`resultados.emcorr.com.br`, `emcorr.uniexames.com.br`, `entregadeexames.com.br`) sem explicação de qual usar para cada exame.
16. **Presença fraca em plataformas que alimentam IAs.** Não há YouTube, Wikipedia/Wikidata, Reddit nem Doctoralia encontrados. Existem Instagram (6.003 seguidores, segundo o COMPETITOR-REPORT) e Facebook.
17. **Exposição de usuário do WordPress.** `/author/newalliance/` e `/author/emcorr/` estão no sitemap e respondem 200 (enumeração de usuários). Não prejudica o GEO diretamente, mas é higiene de segurança.

## Problemas de prioridade baixa

18. **122 de 134 imagens sem `alt`** somando as 52 páginas (logo, ícones, fotos de profissionais). O banner principal da home usa o nome do arquivo como alt ("Tomografia-Computadorizada-Emcorr") e **tem `loading=lazy`**, o que atrasa o LCP.
19. **Erros de digitação que viram entidade.** "Otorrino Laringologia", "Ortondontia", "Tireóide".
20. **`/feed/` redireciona (302) para google.com.** Não é possível descobrir conteúdo por RSS.
21. **Faltam cabeçalhos de segurança.** Não há HSTS, `X-Content-Type-Options` nem `Permissions-Policy`. O HTML vai com `cache-control: no-store` e `cf-cache-status: DYNAMIC`, sem cache de borda.
22. **Horário de funcionamento não aparece em nenhuma página** (verificar com o cliente).

---

## Análise por categoria

### Citabilidade para IA (30/100)

**O que funciona**
- As 24 páginas de exame usam um padrão de pergunta e resposta que extratores de IA reconhecem bem. Exemplo bom (Audiometria): *"É um exame simples e não invasivo que verifica a capacidade dos seus ouvidos para captar sons de diferentes intensidades e tons."* É uma definição autocontida e fácil de citar.
- Há um texto afetivo de marca, reutilizável como descrição da organização.

**O que falha**
- **Falta especificidade local e factual.** Nenhum trecho responde às perguntas que o usuário faz a uma IA: "onde fazer tomografia em Corrente-PI?", "qual clínica tem pediatra e dentista em Corrente?", "a EmCORR aceita Humana Saúde?", "quanto tempo sai o resultado?". As palavras "Corrente" e "Piauí" praticamente não aparecem fora do rodapé.
- **Afirmações sem prova** ("Referência em Corrente", "tecnologia de ponta", "Profissionais Renomados"). A IA prefere fatos verificáveis: ano de fundação (2020), número de especialidades, equipamentos, convênios.
- **Especialidades com uma frase:** não há nada citável.
- **Frase confusa** na home, no bloco de depoimentos: *"A Clínica EMCORR oferece uma gama de habilidades e ferramentas usadas para monitorar e muitas vezes antecipar a evolução da saúde..."*.

**Reescrita sugerida (bloco citável da home)**
> A EmCORR – Centro Clínico é uma clínica médica e odontológica em Corrente, no sul do Piauí, fundada em 2020. Reúne [N] especialidades (verificar), entre elas pediatria, cardiologia, otorrinolaringologia, psiquiatria, psicologia, nutrição e odontologia, e exames como tomografia computadorizada, raio-X, ultrassonografia, mamografia e laboratório. Fica na Rua Getúlio Vargas, 471, Centro, e atende particular e convênios como Humana Saúde, Medplan e Camed (verificar lista completa).

**Modelo para página de exame (blocos de 130 a 170 palavras, cada um respondendo a uma pergunta):** O que é · Para que serve · Como se preparar · Quanto tempo dura · Quando sai o resultado e onde retirar · Convênios aceitos · Quem realiza/laudo · Perguntas frequentes.

### Autoridade de marca (22/100)

| Plataforma | Situação | Observação |
|---|---|---|
| Instagram | Presente, com 6.003 seguidores (fonte: COMPETITOR-REPORT) | Maior audiência social local |
| Facebook | Presente (`/emcorrcentroclinico`) | Aparece em 1º nas buscas pela marca |
| Google Perfil da Empresa | (verificar) | Nota e número de avaliações não coletados |
| Diretórios (cnpj.biz, cadastroempresa, Diário Cidade, DescubraOnline, agendarconsulta, CatalogoMed) | Presentes | **NAP divergente**: nome antigo "Saúde em Corrente", "Avenida", telefone fixo (89) 3573-1881 (verificar se ainda funciona) |
| YouTube / TikTok | Ausente | |
| Wikipedia / Wikidata | Ausente | Uma entrada na Wikidata é viável (verificar critérios de notabilidade) |
| Reddit | Nenhuma menção encontrada | |
| Doctoralia / plataformas médicas | Nenhuma menção encontrada (verificar) | |
| Imprensa local (Portal Corrente etc.) | Nenhuma menção direta encontrada (verificar) | |

Observação: um site de terceiros sem relação (domínio `.es`) replica os dados da clínica, o que indica que os dados circulam via agregadores. Por isso a padronização do NAP tem efeito em cascata.

### Conteúdo E-E-A-T (28/100)

- **Experiência:** dois depoimentos sem nome e sem data. Não há casos, fotos reais do espaço nem conteúdo educativo com autoria.
- **Especialização:** o registro no conselho aparece em 9 de 11 perfis (CRM-PI, CRO-PI, CRP-21). O RQE aparece em só 3 (Ludmila Nery, Danilo Lustosa, Osyanne Timóteo). Não há formação, especialidade declarada nem bio.
- **Autoridade:** não há blog, artigos nem revisão médica. Nenhuma página tem data de publicação ou de revisão.
- **Confiança:** não há política de privacidade nem termos, o responsável técnico não aparece, o CNPJ não está no site, falta horário, e os números são "0". O rodapé diz "By New Alliance Tecnologia" (crédito da agência, aceitável). "Sobre Nós" traz a fundação em 2020 (correto) e uma frase incoerente com o portfólio: "Da cardiologia à ortopedia", sendo que não existe página de ortopedia.
- **Atualização:** imagens de 2024/06 a 2024/10; a data do conteúdo não está visível (verificar).

### GEO técnico (55/100)

| Item | Resultado |
|---|---|
| Renderização | HTML completo no servidor (WordPress/Elementor). O conteúdo é legível sem JS, **exceto os contadores** |
| robots.txt | `User-agent: *` / `Disallow: /wp-admin/`. Nenhum robô de IA bloqueado. Sitemap declarado |
| Acesso real de robôs de IA | GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-User, PerplexityBot, Google-Extended, CCBot, Applebot-Extended, Bytespider e meta-externalagent recebem **200 com a página completa**. O teste com UA "Googlebot" falso recebeu 200 com corpo vazio (provável verificação de bot do Cloudflare; confirmar no Search Console, verificar) |
| llms.txt | Ausente (404) |
| Sitemap | `wp-sitemap.xml` (nativo do WP) com 52 URLs + usuários. Sem `lastmod` nos sub-sitemaps (verificar). `/sitemap_index.xml` retorna 404 |
| Canonical | Presente e correto em todas as páginas |
| `lang` | `pt-BR` ✔ |
| Meta robots | `max-image-preview:large` ✔ |
| Meta description / OG / Twitter | Ausentes em 100% das páginas |
| HTTPS e redirecionamentos | http→https e www→raiz com 301 ✔ |
| Peso da home | HTML de 126 KB, **35 folhas de estilo** e cerca de 25 scripts (jQuery, Elementor, Elementor Pro, JetEngine, JetElements, Slick, TweenJS). Cerca de 179 KB de JS comprimido e cerca de 489 KB de imagens referenciadas no HTML (medido com curl; sem contar fontes e imagens de CSS) |
| TTFB | Cerca de 0,7 a 1,1 s por página, sem cache de HTML na borda (medição simples com curl a partir do Brasil, via GRU) |
| Core Web Vitals (LCP/INP/CLS) | **Não medido** (cota do PSI esgotada) (verificar). Riscos: banner LCP com `loading=lazy`, carrossel Slick, muitos CSS bloqueantes |
| Cabeçalhos de segurança | Só `content-security-policy: frame-ancestors 'self'` e `referrer-policy`. Faltam HSTS e `X-Content-Type-Options` |
| URLs legadas | Joomla `index.php/...` → 301 → 404 |

### Schema e dados estruturados (12/100)

- **Encontrado:** `BreadcrumbList` em 51 páginas. O item 2 aponta para `/_exames/`, `/_especialidades/` e `/_corpo-clinico/`, que existem (200).
- **Ausente:** `MedicalClinic`/`Dentist` (LocalBusiness), `Organization` com `sameAs`, `WebSite`, `Physician` (com `identifier` CRM/CRO), `MedicalProcedure`/`DiagnosticProcedure`/`MedicalTest`, `MedicalSpecialty`, `FAQPage`, `OpeningHoursSpecification`, `GeoCoordinates`, `Review`/`AggregateRating` (este só com avaliações próprias e verificáveis) e `ContactPoint`.

### Otimização por plataforma (20/100)

| Plataforma | Prontidão | Principal lacuna |
|---|---|---|
| Google AI Overviews | Baixa | Sem schema local, sem FAQ, snippets sem meta description, Perfil da Empresa (verificar) |
| ChatGPT (busca) | Baixa | Entidade fragmentada (NAP), pouco conteúdo factual, sem llms.txt. Depende do índice do Bing |
| Perplexity | Baixa | Nada citável sobre preparo, prazos e convênios. Sem fontes de terceiros (Reddit/imprensa) |
| Gemini | Baixa | Depende do Perfil da Empresa e do schema. Sem YouTube |
| Bing Copilot | Baixa | Bing Places e Webmaster Tools (verificar); sem IndexNow |

---

## Ganhos rápidos (esta semana, ainda no site atual ou no lançamento)

1. **Padronizar o NAP** (nome oficial "EmCORR – Centro Clínico", endereço com "Rua" ou "Avenida" conforme o cartão CNPJ/Correios, telefone principal) e corrigir no Google Perfil da Empresa, Facebook, Instagram e nos diretórios listados. Efeito: consolida a entidade para todas as IAs.
2. **Publicar a Política de Privacidade (LGPD)** e linkar no rodapé e nos formulários. Avaliar se o CPF é mesmo necessário no pré-agendamento.
3. **Criar o `llms.txt`** e o schema `MedicalClinic` + `Organization` na home (modelos na seção final).
4. **Trocar os contadores "0+"** por números reais em texto estático (verificar valores com o cliente) e **adicionar um H1** à home.
5. **Completar os 11 perfis de profissionais** (especialidade, CRM/CRO/CRP + RQE, dias de atendimento, foto com alt) e corrigir "Ludmilla/Ludmila".

## Plano de 30 dias (alinhado ao lançamento em Astro)

### Semana 1: Entidade e confiança
- [ ] Levantar com o cliente: horários, convênios, lista final de especialidades e exames, números reais, responsável técnico (nome + CRM), CNPJ exibido
- [ ] Padronizar o NAP e atualizar o Google Perfil da Empresa (categorias: Clínica médica, Clínica odontológica, Centro de diagnóstico por imagem)
- [ ] Redigir a Política de Privacidade e os Termos (LGPD)

### Semana 2: Conteúdo citável
- [ ] Reescrever as 24 páginas de exame no modelo "O que é / Preparo / Duração / Resultado / Convênios / FAQ"
- [ ] Reescrever as 13 especialidades (mínimo de cerca de 400 palavras úteis, profissionais vinculados, sintomas atendidos, FAQ)
- [ ] Criar páginas faltantes: Clínico Geral, Ortopedia, Teste Ergométrico, EEG, Odontopediatria, Dermatologia (verificar oferta real)

### Semana 3: Implementação técnica
- [ ] Schema JSON-LD por tipo de página, llms.txt, sitemap, meta/OG (ver requisitos abaixo)
- [ ] Mapa de redirects 301 (URLs atuais + Joomla legado)
- [ ] Página única de "Resultados" explicando os 3 portais

### Semana 4: Lançamento e sinais externos
- [ ] Google Search Console + Bing Webmaster Tools, envio dos sitemaps e IndexNow
- [ ] Criar a entrada na Wikidata (verificar notabilidade) e canal no YouTube com os reels educativos já existentes no Instagram
- [ ] Rotina de pedido de avaliação no Google após o atendimento (sem incentivo, conforme regras do Google e do CFM)
- [ ] Primeiros 4 posts do blog com autor médico, CRM e data de revisão

---

## Apêndice: páginas analisadas

| URL | Título | Problemas GEO |
|---|---|---|
| / | EmCORR – Centro Clínico Referência Em Corrente | 7 (sem H1, sem schema, sem meta desc/OG, contadores 0, LCP lazy, imagens sem alt, depoimentos anônimos) |
| /sobre-nos/ | Sobre Nós – EmCORR | 4 (sem meta desc/OG, sem Organization, afirmações sem prova, 4/4 imagens sem alt) |
| /fale-conosco/ | Fale Conosco – EmCORR | 4 (sem meta desc/OG, sem horário, sem schema local, sem política de privacidade) |
| /agendar/ | Agendar – EmCORR | 4 (coleta CPF sem política, sem meta desc/OG, lista desalinhada com as páginas) |
| /_exames/ (24 páginas: audiometria, eletrocardiograma-ecg, holter-24-horas, mapa-…, ecocardiografia, ecodoppler-de-carotidas, espirometria, raio-x, raio-x-panoramica, tomografia-ortodontica, tomografia-computadorizada, mamografia, exames-laboratoriais, exame-toxicologico, teste-do-pezinho, teste-de-covid-19, ultrassonografia, ultrassom-morfologico, laringoscopia, nasofibrolaringoscopia, nasofibroscopia, teste-da-orelhinha, teste-da-linguinha, imitanciometria) | "[Exame] – EmCORR" | 5 cada (sem meta desc/OG, sem schema de procedimento/FAQ, sem preparo/prazo/convênio, imagens sem alt, prefixo `_`) |
| /_especialidades/ (13 páginas: psicologia, nutricao, fisioterapia, neurologia, endocrinologia, cirurgia-geral, otorrino-laringologia, mamografia, ortodontia, cardiologia-clinica, pediatria, 2996-2, psiquiatria) | "[Especialidade] – EmCORR" | 5 cada (conteúdo de 1 frase em 11/13, sem meta desc/OG, sem schema, slugs ruins em 2996-2/ortodontia/mamografia, sem profissionais vinculados) |
| /_corpo-clinico/ (11 perfis) | "[Nome] – EmCORR" | 4 a 6 cada (sem schema Physician, especialidade/dias vazios, 2 sem registro, sem bio/formação, imagens sem alt) |
| /_exames/, /_especialidades/, /_corpo-clinico/ | Arquivos de listagem | 2 (sem meta desc/OG, prefixo `_`) |
| /author/emcorr/, /author/newalliance/ | Arquivos de autor | 1 (enumeração de usuários; remover do sitemap) |
| /llms.txt | 404 | ausente |
| /index.php/especialidades/cardiologiaclinica (legado) | 301 → 404 | redirect quebrado |

---

## Requisitos técnicos para o novo site em Astro

### 1. Schema JSON-LD por tipo de página
Usar um componente `<SchemaOrg>` que gere JSON-LD a partir dos dados do Supabase, com `@id` estáveis (`https://emcorr.com.br/#clinica`, `#org`, `#website`) e referências cruzadas.

| Página | Tipos obrigatórios | Campos-chave |
|---|---|---|
| Global (layout) | `WebSite` (+ `SearchAction` se houver busca), `Organization` | `name`, `alternateName` ("EmCORR", "Centro Clínico EmCORR"), `logo`, `foundingDate: "2020"`, `sameAs` (Instagram, Facebook, Perfil da Empresa, YouTube, Wikidata), `taxID` (CNPJ, se o cliente autorizar) |
| Home e /contato | `MedicalClinic` + `Dentist` (multi-tipo `["MedicalClinic","Dentist"]`) | `address` (PostalAddress completo), `geo` (lat/long) (verificar), `telephone`, `openingHoursSpecification` (verificar), `medicalSpecialty[]`, `availableService[]`, `paymentAccepted`, `hasMap`, `areaServed` (Corrente e municípios do sul do PI/região), `isAcceptingNewPatients` |
| /especialidades/[slug] | `MedicalWebPage` + `MedicalSpecialty` ou `MedicalTherapy`; `FAQPage` se houver FAQ | `about`, `specialty`, `lastReviewed`, `reviewedBy` (Physician), `mainEntity` |
| /exames/[slug] | `MedicalWebPage` + `MedicalTest`/`DiagnosticProcedure`/`ImagingTest`; `FAQPage` | `preparation`, `howPerformed`, `usedToDiagnose`, `lastReviewed`, `reviewedBy` |
| /corpo-clinico/[slug] | `Physician` (médicos) ou `Person` com `hasCredential` (dentista, psicólogo, nutricionista, fono) | `name`, `medicalSpecialty`, `identifier` (PropertyValue CRM-PI/CRO-PI/CRP + RQE), `worksFor` → `#clinica`, `image`, `availableService` |
| /blog/[slug] | `BlogPosting` (ou `MedicalWebPage` para conteúdo clínico) | `author` (Person/Physician com CRM), `reviewedBy`, `datePublished`, `dateModified`, `lastReviewed`, `image`, `publisher` → `#org` |
| /blog (índice) | `Blog` + `ItemList` | |
| Todas as internas | `BreadcrumbList` | URLs absolutas sem `_` |
| Depoimentos | `Review` só se forem reais, identificáveis e com consentimento; **não** usar `AggregateRating` autodeclarado sem fonte verificável | |

Validar no Rich Results Test e no validator.schema.org no CI (por exemplo, um teste que extrai o JSON-LD do build e checa os campos obrigatórios).

### 2. robots.txt
- Gerar em `src/pages/robots.txt.ts`. Liberar `*` e declarar explicitamente `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-User`, `PerplexityBot`, `Google-Extended`, `Applebot-Extended` e `Bingbot` como `Allow: /`.
- `Disallow: /admin/`, `/api/`, `/agendar/obrigado` e páginas de confirmação.
- `Sitemap: https://emcorr.com.br/sitemap-index.xml`.
- Em deploys de preview da Vercel, `Disallow: /` + `X-Robots-Tag: noindex` (condicionado a `VERCEL_ENV !== "production"`).
- Se o domínio continuar atrás do Cloudflare, conferir se o "AI Scrapers and Crawlers"/Bot Fight Mode não bloqueia os robôs acima.

### 3. llms.txt
- `/llms.txt` gerado no build a partir do Supabase, com H1 "EmCORR – Centro Clínico", um resumo de 2 a 3 linhas (o quê, onde, desde 2020), seções `## Especialidades`, `## Exames`, `## Corpo clínico`, `## Atendimento` (endereço, telefone, horário, convênios, resultados) e `## Blog`, cada link com uma descrição de uma linha.
- Opcional: `/llms-full.txt` com o texto limpo das páginas de exame e especialidade.

### 4. Sitemap
- `@astrojs/sitemap` para as páginas estáticas, mais um endpoint dinâmico para blog, exames, especialidades e profissionais vindos do Supabase, com `lastmod` real (`updated_at`).
- Excluir admin, obrigado, busca e 404. Não publicar páginas de autor/usuário.
- Enviar ao Google Search Console e ao Bing Webmaster Tools, e fazer ping IndexNow ao publicar pelo painel (webhook do Supabase → função Vercel).

### 5. Meta e HTML
- `<html lang="pt-BR">`, um `<title>` único (padrão: "[Exame] em Corrente-PI | EmCORR"), `meta description` única de 140 a 160 caracteres (campo obrigatório no painel), canonical absoluto sem barra ambígua.
- Open Graph (`og:type`, `og:title`, `og:description`, `og:image` 1200×630, `og:locale=pt_BR`) e `twitter:card=summary_large_image`. Gerar a imagem OG por página (por exemplo, com Satori no build).
- Um único H1 por página e hierarquia H2/H3 em forma de pergunta nas páginas de exame e especialidade.
- Datas visíveis de "Publicado"/"Revisado por Dr(a). X, CRM-PI nº" em conteúdo clínico.
- Rodapé: NAP padronizado, CNPJ, responsável técnico (nome + CRM), links para Privacidade e Termos.
- Conteúdo crítico (números, preços, horários) em HTML estático: nada de contadores que dependem de JS.

### 6. Performance (metas: LCP < 2,5 s, INP < 200 ms, CLS < 0,1 no mobile 4G)
- Astro com saída estática/híbrida (SSG para páginas públicas; ISR ou `revalidate` via Vercel para o conteúdo do painel). Zero JS por padrão; ilhas só para o formulário, o menu mobile e o WhatsApp.
- `astro:assets`/`<Picture>` com AVIF/WebP, `width`/`height` explícitos, `fetchpriority="high"` e **sem lazy** na imagem LCP; lazy nas demais.
- Fontes self-hosted (woff2, subset latin), `font-display: swap`, preload da fonte principal.
- Sem jQuery, sliders pesados ou Elementor. CSS crítico inline (Tailwind ou CSS por componente).
- Mapa do Google carregado sob demanda (fachada com imagem estática + clique).
- Cabeçalhos em `vercel.json`: cache longo e imutável para `/_astro/*`, `s-maxage`/`stale-while-revalidate` para HTML, e HSTS, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` e CSP.
- Medir com Lighthouse CI no PR e com Vercel Speed Insights em produção.

### 7. Acessibilidade (WCAG 2.2 AA)
- `alt` descritivo obrigatório no upload do painel (bloquear a publicação sem alt; permitir `alt=""` só com a opção "decorativa" marcada).
- Contraste mínimo de 4,5:1, foco visível, navegação por teclado no menu e nos formulários, link "Pular para o conteúdo".
- Formulários com `<label>`, `autocomplete`, mensagens de erro associadas (`aria-describedby`) e máscara de telefone acessível.
- Alvos de toque ≥ 24×24 px (ideal 44), `prefers-reduced-motion` respeitado e botão de WhatsApp com rótulo acessível.
- Testar com axe/Pa11y no CI.

### 8. Redirects 301 (em `vercel.json` ou `astro.config` `redirects`)
URLs novas sugeridas sem sublinhado. Ajustar se o mapa final de slugs mudar.

| Origem (atual) | Destino (novo) |
|---|---|
| `/sobre-nos/` | `/sobre/` (ou manter `/sobre-nos/`) |
| `/fale-conosco/` | `/contato/` |
| `/agendar/` | `/agendar/` (manter) |
| `/_exames/` | `/exames/` |
| `/_exames/:slug/` | `/exames/:slug/` (padrão para os 24; revisar `mapa-monitorizacao-ambulatorial-da-pressao-arterial` → `/exames/mapa/` e `teste-de-covid-19`, que pode ser descontinuado → página mais próxima ou `/exames/`) |
| `/_especialidades/` | `/especialidades/` |
| `/_especialidades/:slug/` | `/especialidades/:slug/` (padrão) |
| `/_especialidades/2996-2/` | `/especialidades/fonoaudiologia/` |
| `/_especialidades/ortodontia/` | `/especialidades/odontologia/` (ou `/ortodontia/` se virar página própria) |
| `/_especialidades/otorrino-laringologia/` | `/especialidades/otorrinolaringologia/` |
| `/_especialidades/mamografia/` | `/exames/mamografia/` |
| `/_especialidades/cardiologia-clinica/` | `/especialidades/cardiologia/` (opcional) |
| `/_corpo-clinico/` | `/corpo-clinico/` |
| `/_corpo-clinico/:slug/` | `/corpo-clinico/:slug/` |
| `/author/:user/` | `/sobre/` |
| `/feed/` | `/blog/rss.xml` |
| `/wp-sitemap.xml`, `/sitemap.xml` | `/sitemap-index.xml` |
| `/index.php/*`, `/especialidades/cardiologiaclinica` e outras URLs Joomla (levantar no Search Console > Páginas > 404) | Página equivalente mais próxima ou `/` |
| `/wp-admin/*`, `/wp-login.php`, `/xmlrpc.php` | `410 Gone` (ou 404) |

- Manter o domínio raiz sem www (`www` → raiz, `http` → `https`) com 301 e barra final consistente (`trailingSlash: "always"` no Astro, alinhado à Vercel).
- Após o lançamento, monitorar os 404 por 30 dias no Search Console e nos logs da Vercel, adicionando redirects conforme aparecerem.

### 9. Outros
- Página "Resultados de exames" única, explicando qual portal usar para cada tipo de exame.
- Formulário de agendamento: minimização de dados LGPD (CPF opcional ou pedido só na confirmação), checkbox de consentimento, gravação no Supabase com RLS e retenção definida.
- Painel admin: campos obrigatórios de SEO por conteúdo (title, description, imagem OG, alt, revisor médico, data de revisão) e uma prévia do snippet.
