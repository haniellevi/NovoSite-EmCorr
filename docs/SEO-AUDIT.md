# Auditoria de SEO (foco em SEO local)
## https://emcorr.com.br/ → novo site EmCORR (Astro + Vercel + Supabase)
### Data: 28/09/2026

> **Como ler este documento.** Parte 1 é o diagnóstico do site atual (medido por crawl dos sitemaps: 52 URLs). Parte 2 é o plano do site novo: palavras-chave, URLs definitivas, títulos e meta descriptions por página, interlinking, Google Business Profile, cidades vizinhas e 24 pautas de blog.
>
> **Sobre volumes de busca:** não tivemos acesso a Google Keyword Planner, Search Console nem ferramentas pagas. **Nenhum número de volume foi inventado.** Onde aparece "Alta / Média / Baixa", é **estimativa qualitativa** baseada no tamanho do mercado (Corrente ~26 mil hab. + região de saúde com 14 municípios), no tipo de intenção e no que os concorrentes ranqueiam. Validar com Keyword Planner / Search Console (`/ads-keywords` está previsto no PLANO-MESTRE).
>
> Documentos cruzados: [COMPETITOR-REPORT.md](COMPETITOR-REPORT.md), [BRAND-VOICE.md](BRAND-VOICE.md), [PLANO-MESTRE.md](PLANO-MESTRE.md) (seção 4).

---

## Nota de saúde de SEO do site atual: **31/100**

| Bloco | Peso | Nota | Comentário |
|---|---|---|---|
| On-page (title, meta, H1, headings) | 25 | 7 | Títulos genéricos ("Pediatria – EmCORR"), **0 de 52 páginas com meta description**, home sem H1 |
| Conteúdo e E-E-A-T | 25 | 6 | Páginas de especialidade com 1 frase; exames com texto genérico; 9 de 11 médicos com página vazia |
| SEO local (NAP, schema, GBP, sinais de cidade) | 20 | 5 | Sem `MedicalClinic`/`LocalBusiness`; NAP divergente em diretórios; sem horário; "Corrente" quase ausente das páginas internas |
| Técnico (indexação, velocidade, URLs) | 15 | 8 | HTTPS e sitemap ok; slugs com `_` e `2996-2`; TTFB ~0,9–1,0 s sem cache; 27 scripts |
| Arquitetura e links internos | 15 | 5 | Páginas órfãs (9 médicos, a maioria dos exames), taxonomia confusa (mamografia é "especialidade" e "exame") |

**A boa notícia que ninguém tinha visto:** o site atual já tem **24 páginas de exame, 13 de especialidade e 11 de profissionais**, mais do que a Policlínica (10 + 12). O problema não é falta de páginas, é que elas são **rasas, sem palavra-chave local, sem meta description e mal ligadas**. O novo site deve preservar todas elas (via 301) e dar a cada uma conteúdo real.

---

# PARTE 1 — Diagnóstico do site atual

## 1.1 Inventário (dos sitemaps `wp-sitemap-*.xml`)

| Tipo | Qtde | URLs |
|---|---|---|
| Páginas | 4 | `/`, `/sobre-nos/`, `/fale-conosco/`, `/agendar/` |
| Exames | 24 | audiometria, eletrocardiograma-ecg, holter-24-horas, mapa-monitorizacao-ambulatorial-da-pressao-arterial, ecocardiografia, ecodoppler-de-carotidas, espirometria, raio-x, raio-x-panoramica, tomografia-ortodontica, tomografia-computadorizada, mamografia, exames-laboratoriais, exame-toxicologico, teste-do-pezinho, teste-de-covid-19, ultrassonografia, ultrassom-morfologico, laringoscopia, nasofibrolaringoscopia, nasofibroscopia, teste-da-orelhinha, teste-da-linguinha, imitanciometria |
| Especialidades | 13 | psicologia, nutricao, fisioterapia, neurologia, endocrinologia, cirurgia-geral, otorrino-laringologia, **mamografia** (não é especialidade), **ortodontia** (título diz "Odontologia"), cardiologia-clinica, pediatria, **2996-2** (= Fonoaudiologia), psiquiatria |
| Corpo clínico | 11 | dr-jeam-felix, dra-ludmila-nery, dr-jordao-aires, dra-mariana-vargas, anaeliza-petersen, dr-vinicius-coelho, dr-danilo-lustosa, dr-dhiogo-melo, dr-igor-rafael, dra-thalma-muniz, dra-osyanne-timoteo |
| Arquivos | 3 | `/_exames/`, `/_especialidades/`, `/_corpo-clinico/` (200) |
| Autores | 2 | `/author/emcorr/`, `/author/newalliance/` (expostos no sitemap) |

> **Correção ao COMPETITOR-REPORT e ao PLANO-MESTRE:** eles falam em "6 especialidades, 2 profissionais e sem páginas de exame". Isso é o que a **navegação** mostra; o CMS tem bem mais. Neurologia, psiquiatria, cirurgia geral, otorrino, fono, fisio e 24 exames (incl. Holter, MAPA, eco, espirometria, nasofibroscopia, teste da orelhinha/linguinha, toxicológico) **existem como páginas**. Confirmar com a clínica quais serviços estão ativos hoje antes de migrar.

## 1.2 Checklist on-page

### Title tag
- **Status: Reprovado (home) / Precisa melhorar (internas)**
- Home atual: `EmCORR – Centro Clínico Referência Em Corrente` (46 caracteres). Tem a cidade, mas "Referência" é superlativo sem prova (BRAND-VOICE) e falta o que a pessoa busca (especialidades, exames, PI).
- Internas: padrão `[Serviço] – EmCORR` (ex.: `Pediatria – EmCORR`, `Tomografia Computadorizada – EmCORR`). **Nenhuma** tem "Corrente" ou "PI". É isso que faz a Policlínica ganhar em "[serviço] em Corrente": ela usa `Cardiologista em Corrente | Policlínica de Corrente`.
- Inconsistências: URL `ortodontia` com título "Odontologia"; `2996-2` com título "Fonoaudiologia"; "Otorrino Laringologia" (grafia correta: Otorrinolaringologia).
- **Recomendado (home):** `Clínica médica e odontológica em Corrente-PI | EmCORR` (54)

### Meta description
- **Status: Reprovado — 0 de 52 URLs têm meta description.** O Google monta o snippet com qualquer trecho (muitas vezes o menu ou "Ir para o conteúdo").
- Não há Open Graph: link compartilhado no WhatsApp sai sem imagem/título bonito. **Em uma clínica que vive de WhatsApp, isso é visível todo dia.**
- **Recomendado (home):** ver tabela da seção 2.5.

### Hierarquia de headings
- **Home: sem H1.** Os H2 são "Convênios", "Centro Clínico Referência", "Em Corrente" (a frase foi quebrada em dois H2), "Especialidades EmCORR". H4 "O que nossos Clientes Falam" sem H3 antes dele na seção.
- Internas: H1 = nome do serviço (ok), mas sem H2 de conteúdo nas especialidades (1 frase de texto).
- Exames: H2 em formato de pergunta ("Por que preciso fazer...?", "O que é...?", "Como funciona?"). **Bom formato para snippet**, mas o texto é genérico e falta o essencial para o paciente: **preparo, prazo do resultado, convênio, valor "a partir de", onde fica**.
- **Recomendado (home H1):** "Cuidando de você e de quem você ama, do bebê aos avós, em um só lugar" + subtítulo com "centro clínico em Corrente, sul do Piauí".

### Imagens
- Home: 20 imagens, **7 sem alt**, 15 com lazy-load. Internas: 2–4 sem alt por página (logo/ícones repetidos).
- Nomes de arquivo e formatos a revisar na captura (Fase 1). No Astro: `astro:assets` com AVIF/WebP, `width/height` explícitos, alt descritivo com contexto local só quando fizer sentido ("Recepção da EmCORR em Corrente-PI"), nunca alt entupido de palavra-chave.

### Links internos
- Home linka só: 6 especialidades, 2 médicos, Sobre. **Não linka nenhuma página de exame.**
- `/_corpo-clinico/` lista **só 2 dos 11 profissionais** → 9 páginas de médico só existem no sitemap (órfãs).
- Páginas de exame não linkam para a especialidade/médico que pede o exame, nem vice-versa.
- Rodapé repete "Exames laboratoriais / radiológicos / Outros" sem destino claro.

### Estrutura de URLs
| Critério | Status | Observação |
|---|---|---|
| Legível | Precisa melhorar | Prefixos `/_especialidades/`, `/_exames/`, `/_corpo-clinico/` (underscore inicial é resquício de custom post type) |
| Palavras-chave | Precisa melhorar | `2996-2`, `ortodontia` → "Odontologia", `otorrino-laringologia` |
| Tamanho | Precisa melhorar | `mapa-monitorizacao-ambulatorial-da-pressao-arterial` (51 caracteres só no slug) |
| Hífens / minúsculas | Aprovado | |
| Barra final | Aprovado (consistente) | WP força barra final com 301 |
| Domínio | Aprovado | `www` e `http` redirecionam 301 para `https://emcorr.com.br/` |

## 1.3 Conteúdo e E-E-A-T

| Dimensão | Nota | Evidência |
|---|---|---|
| Experiência | Fraca | Nenhum caso, foto real de equipamento/sala, prazo real de laudo, número de atendimentos. Estatísticas da home mostram "0+". |
| Especialização | Fraca | Só 2 profissionais com conselho visível no arquivo (Dra. Ludmilla Nery, CRM-PI 5888 · RQE 2142; Dr. Igor Rafael, CRO-PI 2031). Páginas individuais têm CRM mas **"Especialidades:" e "Dias de Atendimento:" vazios** e frase de template. Nome grafado "Ludmila" na URL e "Ludmilla" no texto. |
| Autoridade | Fraca | Sem menções na imprensa local além de diretórios; sem blog; sem responsável técnico nomeado nas páginas de exame (CFM exige diretor técnico em material de divulgação). |
| Confiabilidade | Presente | HTTPS, endereço e WhatsApp no rodapé, política de privacidade, convênios (Medplan, Humana Saúde, Camed), 2 depoimentos. Faltam: horário, mapa, CNPJ, diretor técnico, data de revisão do conteúdo. |

**Exames (YMYL):** textos de ~150 palavras próprias, genéricos e sem revisão médica indicada ("imagens complementadas" é erro de redação). Conteúdo de saúde exige autor/revisor com registro e data de revisão.

## 1.4 Palavras-chave (situação atual)
- **Palavra-chave principal que a home tenta atingir:** "centro clínico Corrente". Não há alinhamento com o que as pessoas digitam ("clínica em Corrente PI", "pediatra em Corrente", "tomografia Corrente").
- "Corrente" aparece no title da home e no rodapé. **Não aparece no title, H1 ou texto de nenhuma página interna.** Isso é o maior problema de SEO local on-page.
- Intenção: as buscas locais de saúde são majoritariamente **transacionais/locais** ("pediatra em Corrente", "onde fazer tomografia em Corrente"). As páginas internas atuais respondem como enciclopédia (informacional). Desalinhamento.

## 1.5 SEO técnico (rápido)
| Item | Status | Achado |
|---|---|---|
| robots.txt | Aprovado | Bloqueia só `/wp-admin/`, aponta para `wp-sitemap.xml` |
| Sitemap | Aprovado com ressalva | Existe, mas expõe `/author/*` (nomes de usuário do WP: `emcorr`, `newalliance`) e inclui `teste-de-covid-19` e `mamografia` duplicada |
| Canonical | Aprovado | Autorreferente na home |
| Robots meta | Aprovado | `max-image-preview:large` |
| Schema | Reprovado | Só `BreadcrumbList` nas internas; **home sem nenhum JSON-LD**; sem `MedicalClinic`, `Physician`, `MedicalProcedure`, `FAQPage` |
| Open Graph | Reprovado | Ausente |
| Velocidade | Precisa melhorar | TTFB medido 0,9–1,0 s nas internas (Cloudflare com `cf-cache-status: DYNAMIC` e `cache-control: no-store`), 27 scripts na home (Elementor). Core Web Vitals de campo não medidos (sem acesso ao CrUX nesta sessão) |
| 404 | Precisa melhorar | Página 404 padrão do tema; `/blog/` e `/llms.txt` retornam 404 |
| Legado | Atenção | Diretórios ainda indexam URL antiga de Joomla: `www.emcorr.com.br/index.php/component/users/...` → incluir nos 301 |
| Superfície WP | Atenção (segurança) | `xmlrpc.php`, `/wp-json/`, `/feed/` expostos. Resolve-se sozinho na migração |
| Analytics | Reprovado | Nenhuma ferramenta de medição detectada |

## 1.6 NAP e presença local (fora do site)
Levantamento por busca pública (Google Maps não pôde ser lido automaticamente):

| Fonte | Nome | Endereço | Telefone |
|---|---|---|---|
| Site | EmCORR – Centro Clínico | **Rua** Getúlio Vargas, Nº 471, Corrente-PI, 64980-000 | +55 (89) 9 9933-1133 |
| Diretórios (DiárioCidade, DescubraOnline, AgendarConsulta) | "Emcorr - Saúde em Corrente" | **Avenida** Getúlio Vargas, 471 | **(89) 3573-1881** |
| Receita (CNPJ 26.343.832/0001-02) | Ludmilla Nery Custódio LTDA / "Centro Clínico Emcorr" | — | — |

**Três variações de nome, duas de logradouro, dois telefones.** Para o algoritmo local isso dilui a confiança na entidade. Definir **um NAP canônico** e replicá-lo em site, GBP, Facebook, Instagram, Doctoralia/Medprev/Fácil Consulta e diretórios. Confirmar com a clínica se o fixo (89) 3573-1881 ainda existe.

---

# PARTE 2 — Plano de SEO do novo site

## 2.1 Estratégia de SEO local em uma frase
Cada serviço vira uma página que responde **"[serviço] em Corrente-PI"** com o que só a EmCORR sabe dizer (quem atende, dias, preparo, prazo, convênio, como chegar vindo das cidades vizinhas). A região é conquistada **pela página de serviço + uma página de cidades atendidas + GBP forte**, e não por dezenas de páginas "cidade × serviço" (que o Google trata como *doorway pages*).

## 2.2 Universo de palavras-chave

### Padrões de busca local (a validar no Keyword Planner)
| Padrão | Exemplo | Intenção | Página alvo |
|---|---|---|---|
| [profissional] em [cidade] | pediatra em Corrente PI | Transacional/local | `/especialidades/pediatria` |
| [especialidade] [cidade] | cardiologia Corrente | Transacional/local | `/especialidades/cardiologia` |
| [exame] em [cidade] | tomografia em Corrente PI | Transacional/local | `/exames/tomografia-computadorizada` |
| onde fazer [exame] [cidade/região] | onde fazer ecocardiograma no sul do Piauí | Transacional | página do exame |
| [exame] preparo / precisa de jejum | preparo para ultrassom abdominal | Informacional | blog + FAQ da página do exame |
| clínica [cidade] | clínica médica Corrente PI, clínica em Corrente | Local/navegacional | Home |
| dentista / ortodontista [cidade] | dentista em Corrente PI, aparelho ortodôntico Corrente | Transacional | `/especialidades/odontologia`, `/especialidades/ortodontia` |
| laboratório [cidade] | laboratório em Corrente PI, exame de sangue Corrente | Transacional | `/exames/exames-laboratoriais` |
| [marca] | emcorr, emcorr resultado, emcorr telefone | Navegacional | Home, `/resultados`, `/contato` |
| convênio [nome] [cidade] | Humana Saúde Corrente, Medplan Corrente | Comercial | `/convenios` |

### Palavras-chave primárias por página (volume = estimativa qualitativa)
| Palavra-chave primária | Secundárias | Volume estimado* | Concorrência estimada* | Valor p/ negócio |
|---|---|---|---|---|
| clínica em Corrente PI | clínica médica Corrente, centro clínico Corrente, clínica sul do Piauí | Média | Média (Policlínica) | Alto |
| tomografia em Corrente PI | tomografia computadorizada Corrente, tomografia sul do Piauí | Média | Média (Policlínica, SUS) | Alto |
| pediatra em Corrente PI | pediatria Corrente, pediatra sul do Piauí | Média | Baixa (Policlínica não destaca) | Alto |
| dentista em Corrente PI | odontologia Corrente, clínica odontológica Corrente | Média | Média (consultórios avulsos) | Alto |
| ortodontista em Corrente PI | aparelho ortodôntico Corrente, tomografia odontológica | Baixa–Média | Baixa | Alto |
| cardiologista em Corrente PI | ecocardiograma Corrente, Holter, MAPA, eletrocardiograma | Média | Média (Policlínica) | Alto |
| laboratório em Corrente PI | exame de sangue Corrente, hemograma, teste do pezinho | Média | Baixa (Lab Vida sem site) | Alto |
| endocrinologista em Corrente PI | tireoide, diabetes | Baixa | Baixa | Médio |
| ultrassom em Corrente PI | ultrassonografia, ultrassom morfológico | Média | Média | Alto |
| mamografia em Corrente PI | mamografia sul do Piauí | Baixa–Média | Média (SUS) | Médio |
| psicólogo em Corrente PI | psicologia Corrente, terapia | Baixa–Média | Baixa | Médio |
| psiquiatra em Corrente PI | psiquiatria sul do Piauí | Baixa | Baixa | Médio |
| nutricionista em Corrente PI | nutrição Corrente | Baixa–Média | Baixa | Médio |
| otorrino em Corrente PI | nasofibroscopia, laringoscopia | Baixa | Baixa | Médio |
| fonoaudiólogo em Corrente PI | teste da orelhinha, teste da linguinha, audiometria | Baixa | Baixa | Médio |
| exame toxicológico em Corrente PI | toxicológico CNH Corrente | Baixa–Média | Baixa | Médio (motoristas da região) |

\* Estimativa qualitativa, não é volume medido.

### Cauda regional (cidades vizinhas)
Região de saúde com Corrente como polo (SESAPI): Avelino Lopes, Barreiras do Piauí, Cristalândia do Piauí, Curimatá, Gilbués, Júlio Borges, Monte Alegre do Piauí, Morro Cabeça no Tempo, Parnaguá, Riacho Frio, Santa Filomena, São Gonçalo do Gurguéia, Sebastião Barros. Fronteira BA: Formosa do Rio Preto (limítrofe de Corrente), Santa Rita de Cássia, Mansidão. TO (ex.: municípios do sudeste tocantinense/Jalapão) e sul do MA: **verificar se há fluxo real de pacientes** antes de citar.

Busca real nessas cidades costuma ser **"[serviço] perto de mim"** ou **"[serviço] Corrente"** (a pessoa já sabe que o polo é Corrente). Buscas "[serviço] em Cristalândia do Piauí" existem, mas com volume **muito baixo (estimativa)**; o Google tende a mostrar o polo mais próximo no local pack. Portanto:

1. **Página única `/cidades-atendidas`** (hub): lista as cidades com distância/tempo aproximado **(medir no Google Maps com a clínica, não inventar)**, rota, dica de transporte, horário que compensa chegar, "faça consulta e exame no mesmo dia", link para agendar.
2. **Páginas de cidade individuais só para 4–6 cidades com fluxo comprovado** (ex.: Cristalândia do Piauí, Sebastião Barros, Parnaguá, Riacho Frio, Gilbués, Formosa do Rio Preto-BA), cada uma com **conteúdo único**: distância e rota reais, pacientes atendidos de lá (número agregado, se a clínica tiver), serviços mais procurados por quem vem de lá, logística (dia de coleta, resultado online para não voltar), depoimento de morador com consentimento. Sem isso, não publicar (vira doorway page e pode prejudicar o domínio todo).
3. **Menção natural de região nas páginas de serviço:** bloco "Atendemos Corrente e região" com as cidades em texto (não em lista de keywords) + link para `/cidades-atendidas`.
4. **GBP:** área de atendimento não se aplica a clínica com endereço físico (é "negócio com local"); a região entra via posts, descrição e respostas a avaliações.

## 2.3 Estrutura de URLs definitiva

**Regras:** minúsculas, hífen, sem acento, sem barra final (`trailingSlash: 'never'` no Astro + `trailingSlash: false` no `vercel.json`), sem cidade no slug (cidade vai no title/H1/conteúdo; URL limpa e estável), plural nas pastas, singular/nome do serviço nos slugs, máx. ~40 caracteres no slug.

```
/                                   Home
/sobre                              História desde 2020, estrutura, diretor técnico
/especialidades                     Índice (médicas · odontologia · multiprofissional)
  /especialidades/pediatria
  /especialidades/cardiologia
  /especialidades/endocrinologia
  /especialidades/neurologia               (confirmar se ativa)
  /especialidades/psiquiatria
  /especialidades/cirurgia-geral           (confirmar se ativa)
  /especialidades/otorrinolaringologia
  /especialidades/dermatologia             (Instagram; confirmar)
  /especialidades/odontologia              (clínico geral, prevenção)
  /especialidades/ortodontia
  /especialidades/odontopediatria          (Instagram; confirmar)
  /especialidades/nutricao
  /especialidades/psicologia
  /especialidades/fonoaudiologia
  /especialidades/fisioterapia
/exames                             Índice por grupo (laboratório · imagem · coração · ouvido/nariz/garganta · bebê · outros)
  /exames/exames-laboratoriais
  /exames/teste-do-pezinho
  /exames/exame-toxicologico
  /exames/tomografia-computadorizada
  /exames/tomografia-odontologica          (antes: tomografia-ortodontica; "odontológica" é o termo buscado)
  /exames/raio-x
  /exames/raio-x-panoramico
  /exames/mamografia
  /exames/ultrassonografia
  /exames/ultrassom-morfologico
  /exames/eletrocardiograma
  /exames/ecocardiograma                   (termo mais buscado que "ecocardiografia")
  /exames/holter-24-horas
  /exames/mapa-24-horas
  /exames/doppler-de-carotidas
  /exames/espirometria
  /exames/audiometria
  /exames/imitanciometria
  /exames/teste-da-orelhinha
  /exames/teste-da-linguinha
  /exames/laringoscopia
  /exames/nasofibroscopia                  (consolida nasofibroscopia + nasofibrolaringoscopia)
/corpo-clinico                      Todos os profissionais (filtro por especialidade)
  /corpo-clinico/[nome-sobrenome]         ex.: /corpo-clinico/ludmilla-nery (sem "dr/dra" no slug)
/convenios                          Medplan, Humana Saúde, Camed + particular + como usar
/cidades-atendidas                  Hub regional
  /cidades-atendidas/[cidade-uf]          só com conteúdo único (ex.: cristalandia-do-piaui-pi, formosa-do-rio-preto-ba)
/check-up                           Pacotes por fase da vida (se a clínica aprovar "a partir de")
/resultados                         Página-ponte para os 3 portais
/agendar                            WhatsApp pré-preenchido + formulário
/contato                            NAP, mapa, horário, como chegar
/blog
  /blog/[slug]
  /blog/categoria/[slug]                  familia-e-criancas · coracao-e-metabolismo · exames-explicados · mente-e-nutricao · saude-bucal
/perguntas-frequentes               (opcional; FAQ geral: convênio, horário, resultado, preparo)
/privacidade  /termos
/llms.txt  /sitemap-index.xml  /robots.txt
```

**Decisões e porquês**
- `/especialidades/cardiologia` (não `cardiologia-clinica`): mais curto, cobre "cardiologista". O título diz "Cardiologista em Corrente-PI".
- **Não criar** `/tomografia-corrente-pi` separado da página de exame (sugerido no COMPETITOR-REPORT): duas páginas para a mesma intenção competem entre si (canibalização). A página `/exames/tomografia-computadorizada` vira a pilar regional.
- **Mamografia sai de especialidades** (é exame).
- **Teste de Covid-19:** se não é mais oferecido, 301 para `/exames/exames-laboratoriais`; se é, mantém como exame.
- Médico: slug sem título honorífico e com grafia do conselho (**ludmilla-nery**, não "ludmila"). Página de pessoa com `Physician` schema.

### Mapa de redirecionamentos 301 (todas as URLs antigas)
| Antiga | Nova |
|---|---|
| `/sobre-nos/` | `/sobre` |
| `/fale-conosco/` | `/contato` |
| `/agendar/` | `/agendar` |
| `/_especialidades/` | `/especialidades` |
| `/_especialidades/cardiologia-clinica/` | `/especialidades/cardiologia` |
| `/_especialidades/otorrino-laringologia/` | `/especialidades/otorrinolaringologia` |
| `/_especialidades/ortodontia/` | `/especialidades/ortodontia` (e criar `/especialidades/odontologia`) |
| `/_especialidades/2996-2/` | `/especialidades/fonoaudiologia` |
| `/_especialidades/mamografia/` | `/exames/mamografia` |
| `/_especialidades/{pediatria,endocrinologia,neurologia,psiquiatria,cirurgia-geral,nutricao,psicologia,fisioterapia}/` | `/especialidades/{mesmo slug}` |
| `/_exames/` | `/exames` |
| `/_exames/tomografia-ortodontica/` | `/exames/tomografia-odontologica` |
| `/_exames/raio-x-panoramica/` | `/exames/raio-x-panoramico` |
| `/_exames/eletrocardiograma-ecg/` | `/exames/eletrocardiograma` |
| `/_exames/ecocardiografia/` | `/exames/ecocardiograma` |
| `/_exames/mapa-monitorizacao-ambulatorial-da-pressao-arterial/` | `/exames/mapa-24-horas` |
| `/_exames/ecodoppler-de-carotidas/` | `/exames/doppler-de-carotidas` |
| `/_exames/nasofibrolaringoscopia/` e `/_exames/nasofibroscopia/` | `/exames/nasofibroscopia` |
| `/_exames/teste-de-covid-19/` | `/exames/exames-laboratoriais` (se descontinuado) |
| `/_exames/{demais}/` | `/exames/{mesmo slug}` |
| `/_corpo-clinico/` | `/corpo-clinico` |
| `/_corpo-clinico/dra-ludmila-nery/` | `/corpo-clinico/ludmilla-nery` |
| `/_corpo-clinico/dr-{nome}/`, `/_corpo-clinico/dra-{nome}/` | `/corpo-clinico/{nome}` |
| `/author/*`, `/feed/`, `/comments/feed/`, `/wp-json/*`, `/xmlrpc.php` | `/` ou 410 |
| `/index.php/*` (legado Joomla em `www.`) | `/` |
| `/?s=*` | `/` |

Implementar em `vercel.json` (`redirects`, `permanent: true`) e testar cada linha com `curl -I` antes do DNS virar. Manter o domínio **sem www** como canônico (já é assim hoje).

## 2.4 Template SEO das páginas de serviço (especialidade e exame)
Mesmo template do PLANO-MESTRE, com os pontos que dão ranking local:

1. **H1:** "[Serviço] em Corrente-PI" + subtítulo com benefício (voz Amigo/Guia).
2. **Resposta em 40–60 palavras logo abaixo do H1** (quem atende, para quem é, se precisa de pedido médico, se aceita convênio). Serve para snippet e para IA.
3. **Bloco "Na EmCORR"**: profissional(is) com foto, conselho, RQE, dias de atendimento (dado do Supabase), link para `/corpo-clinico/[slug]`.
4. **Exames: preparo (lista), duração, prazo do resultado, como retirar (link `/resultados`), valor "a partir de" (se aprovado).**
5. **Convênios aceitos para este serviço** (link `/convenios`).
6. **"Vem de outra cidade?"** 2–3 frases + link `/cidades-atendidas`.
7. **FAQ** (4–6 perguntas reais do WhatsApp da recepção) com `FAQPage`.
8. **Links relacionados** (ver 2.6) + posts do blog da mesma categoria.
9. **CTA** "Agendar pelo WhatsApp" com mensagem pré-preenchida citando o serviço.
10. **Rodapé de conteúdo:** "Conteúdo revisado por [Nome], [CRM/CRO] · atualizado em [data]" + diretor técnico (exigência CFM 2.336/2023).

Tamanho: 500–900 palavras úteis por página de serviço (hoje ~120–300 incluindo menu). Sem encher; cada bloco responde a uma dúvida real.

## 2.5 Títulos e meta descriptions propostos (todas as páginas do novo mapa)
Padrão: `[Serviço/Profissional] em Corrente-PI | EmCORR` (≤ 60 caracteres); meta 140–160 caracteres, com cidade, prova concreta e CTA. Campos editáveis no admin Supabase (`seo_title`, `seo_description`), com estes textos como padrão. Trechos entre colchetes dependem de dado da clínica.

### Páginas institucionais
| URL | Title | Meta description |
|---|---|---|
| `/` | Clínica médica e odontológica em Corrente-PI \| EmCORR | Consultas, odontologia, laboratório e tomografia em um só lugar, no centro de Corrente-PI. Atendemos Medplan, Humana e Camed. Agende pelo WhatsApp. |
| `/sobre` | Sobre a EmCORR: centro clínico em Corrente desde 2020 | Conheça a história, a equipe e a estrutura da EmCORR, centro clínico da família em Corrente, sul do Piauí, desde 2020. Veja quem cuida de você. |
| `/especialidades` | Especialidades médicas e odontológicas em Corrente-PI | Pediatria, cardiologia, endocrinologia, odontologia, ortodontia, psicologia, nutrição e mais, no mesmo endereço em Corrente-PI. Escolha e agende. |
| `/exames` | Exames em Corrente-PI: laboratório, imagem e coração | Tomografia, ultrassom, raio-X, mamografia, ecocardiograma, Holter e exames de sangue em Corrente-PI. Veja preparo, prazo do resultado e agende. |
| `/corpo-clinico` | Médicos e dentistas da EmCORR em Corrente-PI | Conheça os profissionais da EmCORR, com registro no conselho, especialidade e dias de atendimento. Escolha seu médico ou dentista e agende. |
| `/convenios` | Convênios aceitos na EmCORR em Corrente-PI | A EmCORR atende Medplan, Humana Saúde, Camed e particular. Veja o que cada convênio cobre, o que levar no dia e como agendar pelo WhatsApp. |
| `/cidades-atendidas` | Pacientes de Corrente e região sul do Piauí \| EmCORR | Vem de Cristalândia, Parnaguá, Gilbués, Riacho Frio ou da Bahia? Veja como chegar, faça consulta e exame no mesmo dia e receba o resultado online. |
| `/check-up` | Check-up em Corrente-PI para toda a família \| EmCORR | Check-up infantil, adulto e para idosos com consulta e exames no mesmo lugar, em Corrente-PI. Veja o que cada pacote inclui e agende. |
| `/resultados` | Resultado de exames EmCORR: acesse online | Acesse o resultado dos seus exames da EmCORR: laboratório, imagem e outros. Veja qual portal usar, onde está a senha e fale com a recepção se precisar. |
| `/agendar` | Agendar consulta ou exame na EmCORR em Corrente-PI | Agende consulta, dentista ou exame na EmCORR pelo WhatsApp ou pelo formulário. Resposta da recepção em horário comercial. Corrente-PI. |
| `/contato` | Contato, endereço e horário da EmCORR em Corrente-PI | Rua Getúlio Vargas, 471, Centro, Corrente-PI. WhatsApp (89) 9 9933-1133. Veja horário de atendimento, mapa e como chegar. |
| `/blog` | Blog de saúde da EmCORR: dicas para a família | Dúvidas sobre exames, saúde das crianças, coração, dentes e bem-estar, explicadas por profissionais da EmCORR em Corrente-PI. |
| `/perguntas-frequentes` | Perguntas frequentes sobre a EmCORR \| Corrente-PI | Horário, convênios, preparo de exames, resultado online e agendamento: respostas rápidas às dúvidas mais comuns dos pacientes da EmCORR. |
| `/privacidade` | Política de privacidade \| EmCORR | Como a EmCORR coleta, usa e protege seus dados pessoais e de saúde, de acordo com a LGPD. Saiba seus direitos e como falar com a clínica. |
| `/termos` | Termos de uso do site \| EmCORR | Condições de uso do site da EmCORR – Centro Clínico, em Corrente-PI. Leia antes de enviar solicitações de agendamento pelo site. |

### Especialidades
| URL | Title | Meta description |
|---|---|---|
| `/especialidades/pediatria` | Pediatra em Corrente-PI \| EmCORR | Consulta pediátrica com calma, do recém-nascido ao adolescente, em Corrente-PI. Exames e dentista no mesmo lugar. Agende pelo WhatsApp. |
| `/especialidades/cardiologia` | Cardiologista em Corrente-PI \| EmCORR | Consulta com cardiologista e exames do coração (ECG, eco, Holter, MAPA) no mesmo lugar em Corrente-PI. Aceitamos convênios. Agende. |
| `/especialidades/endocrinologia` | Endocrinologista em Corrente-PI \| EmCORR | Tireoide, diabetes, obesidade e hormônios: consulta com endocrinologista e exames de sangue na EmCORR, em Corrente-PI. Agende pelo WhatsApp. |
| `/especialidades/neurologia` | Neurologista em Corrente-PI \| EmCORR | Dor de cabeça frequente, tontura ou formigamento? Consulta com neurologista na EmCORR, em Corrente-PI. Veja os dias de atendimento e agende. |
| `/especialidades/psiquiatria` | Psiquiatra em Corrente-PI \| EmCORR | Ansiedade, depressão e sono: consulta com psiquiatra em ambiente acolhedor e sigiloso, em Corrente-PI. Atendimento junto com a psicologia. |
| `/especialidades/cirurgia-geral` | Cirurgião geral em Corrente-PI \| EmCORR | Avaliação com cirurgião geral para hérnia, vesícula e pequenas lesões, em Corrente-PI. Consulta e exames no mesmo lugar. Agende. |
| `/especialidades/otorrinolaringologia` | Otorrino em Corrente-PI \| EmCORR | Ouvido, nariz e garganta: consulta com otorrino e exames como nasofibroscopia e audiometria na EmCORR, em Corrente-PI. Agende. |
| `/especialidades/dermatologia` | Dermatologista em Corrente-PI \| EmCORR | Manchas, acne, queda de cabelo e cuidado da pele: consulta com dermatologista na EmCORR, em Corrente-PI. Veja os dias e agende. |
| `/especialidades/odontologia` | Dentista em Corrente-PI \| EmCORR | Limpeza, restauração, canal e prevenção para toda a família, com raio-X panorâmico no local, em Corrente-PI. Agende sua avaliação. |
| `/especialidades/ortodontia` | Ortodontista em Corrente-PI: aparelho \| EmCORR | Aparelho ortodôntico para crianças e adultos, com tomografia odontológica e raio-X panorâmico no mesmo lugar, em Corrente-PI. Agende a avaliação. |
| `/especialidades/odontopediatria` | Dentista infantil em Corrente-PI \| EmCORR | Primeira consulta do bebê, prevenção de cárie e cuidado com os dentes das crianças, com paciência e carinho. EmCORR, Corrente-PI. |
| `/especialidades/nutricao` | Nutricionista em Corrente-PI \| EmCORR | Plano alimentar para emagrecer, controlar diabetes, na gestação ou para crianças, com nutricionista em Corrente-PI. Agende pelo WhatsApp. |
| `/especialidades/psicologia` | Psicólogo em Corrente-PI \| EmCORR | Terapia para ansiedade, luto, relacionamentos e crianças, em ambiente sigiloso e acolhedor, em Corrente-PI. Agende sua primeira sessão. |
| `/especialidades/fonoaudiologia` | Fonoaudiólogo em Corrente-PI \| EmCORR | Fala, audição, voz e deglutição, com teste da orelhinha, linguinha e audiometria na EmCORR, em Corrente-PI. Agende pelo WhatsApp. |
| `/especialidades/fisioterapia` | Fisioterapia em Corrente-PI \| EmCORR | Dor nas costas, recuperação de lesão e reabilitação com fisioterapeuta na EmCORR, em Corrente-PI. Veja como funciona e agende. |

### Exames
| URL | Title | Meta description |
|---|---|---|
| `/exames/exames-laboratoriais` | Laboratório e exames de sangue em Corrente-PI \| EmCORR | Hemograma, glicemia, colesterol, tireoide e mais, com coleta na EmCORR em Corrente-PI. Veja jejum, prazo do resultado e acesso online. |
| `/exames/teste-do-pezinho` | Teste do pezinho em Corrente-PI \| EmCORR | Quando fazer o teste do pezinho, como é a coleta e quando sai o resultado. Coleta com cuidado na EmCORR, em Corrente-PI. Agende. |
| `/exames/exame-toxicologico` | Exame toxicológico em Corrente-PI (CNH) \| EmCORR | Exame toxicológico para CNH C, D e E e para emprego, com coleta em Corrente-PI. Veja documentos, prazo e como agendar. |
| `/exames/tomografia-computadorizada` | Tomografia em Corrente-PI: preparo e prazo \| EmCORR | Tomografia computadorizada em Corrente-PI, sem precisar viajar. Veja preparo, duração, prazo do laudo e convênios. Agende pelo WhatsApp. |
| `/exames/tomografia-odontologica` | Tomografia odontológica em Corrente-PI \| EmCORR | Tomografia odontológica para implante, ortodontia e dente incluso, em Corrente-PI. Rápida, sem preparo. Veja prazo e agende. |
| `/exames/raio-x` | Raio-X em Corrente-PI \| EmCORR | Raio-X de tórax, coluna, ossos e seios da face em Corrente-PI. Veja se precisa de preparo, quanto tempo leva e como receber o resultado. |
| `/exames/raio-x-panoramico` | Raio-X panorâmico dos dentes em Corrente-PI \| EmCORR | Radiografia panorâmica para dentista e ortodontista, feita em poucos minutos na EmCORR, em Corrente-PI. Sem preparo. Agende. |
| `/exames/mamografia` | Mamografia em Corrente-PI \| EmCORR | Quando fazer mamografia, como se preparar (sem desodorante) e prazo do laudo. Exame na EmCORR, em Corrente-PI. Agende. |
| `/exames/ultrassonografia` | Ultrassom em Corrente-PI \| EmCORR | Ultrassom de abdome, tireoide, pélvico, obstétrico e mais em Corrente-PI. Veja preparo de cada tipo, prazo e convênios. Agende. |
| `/exames/ultrassom-morfologico` | Ultrassom morfológico em Corrente-PI \| EmCORR | Ultrassom morfológico do 1º e 2º trimestre: quando fazer, o que avalia e como agendar na EmCORR, em Corrente-PI. |
| `/exames/eletrocardiograma` | Eletrocardiograma (ECG) em Corrente-PI \| EmCORR | ECG rápido e sem dor, com laudo, em Corrente-PI. Útil para check-up, risco cirúrgico e acompanhamento do coração. Agende. |
| `/exames/ecocardiograma` | Ecocardiograma em Corrente-PI \| EmCORR | Ecocardiograma (ultrassom do coração) em Corrente-PI, sem preparo especial. Veja como é, quanto dura e prazo do laudo. Agende. |
| `/exames/holter-24-horas` | Holter 24 horas em Corrente-PI \| EmCORR | Holter 24h para investigar palpitação e arritmia: como é usar o aparelho, cuidados em casa e prazo do laudo. EmCORR, Corrente-PI. |
| `/exames/mapa-24-horas` | MAPA 24 horas (pressão) em Corrente-PI \| EmCORR | MAPA mede sua pressão por 24 horas para confirmar ou acompanhar hipertensão. Veja como funciona e agende em Corrente-PI. |
| `/exames/doppler-de-carotidas` | Doppler de carótidas em Corrente-PI \| EmCORR | Doppler das carótidas avalia a circulação para o cérebro. Veja quando é indicado, preparo e prazo do laudo. EmCORR, Corrente-PI. |
| `/exames/espirometria` | Espirometria em Corrente-PI \| EmCORR | Exame do sopro que avalia asma, bronquite e DPOC. Veja preparo, duração e como agendar na EmCORR, em Corrente-PI. |
| `/exames/audiometria` | Audiometria em Corrente-PI \| EmCORR | Exame de audição para crianças, adultos e admissional, em cabine acústica, em Corrente-PI. Veja preparo e agende. |
| `/exames/imitanciometria` | Imitanciometria em Corrente-PI \| EmCORR | Exame rápido que avalia o ouvido médio, muito usado em crianças com otite. Veja como é e agende na EmCORR, em Corrente-PI. |
| `/exames/teste-da-orelhinha` | Teste da orelhinha em Corrente-PI \| EmCORR | Triagem auditiva do recém-nascido: quando fazer, como é (o bebê pode dormir) e o que o resultado significa. EmCORR, Corrente-PI. |
| `/exames/teste-da-linguinha` | Teste da linguinha em Corrente-PI \| EmCORR | Avaliação do frênulo da língua do bebê: por que fazer, como é e próximos passos. Com fonoaudióloga na EmCORR, em Corrente-PI. |
| `/exames/laringoscopia` | Laringoscopia em Corrente-PI \| EmCORR | Exame da laringe e das cordas vocais para rouquidão que não passa. Veja como é, preparo e agende com otorrino em Corrente-PI. |
| `/exames/nasofibroscopia` | Nasofibroscopia em Corrente-PI \| EmCORR | Exame do nariz e da garganta com câmera fina, feito no consultório do otorrino. Veja preparo, duração e agende em Corrente-PI. |

### Modelos (páginas geradas pelo admin)
| URL | Title | Meta description |
|---|---|---|
| `/corpo-clinico/[slug]` | `[Dr(a). Nome], [especialidade] em Corrente-PI` (ex.: "Dra. Ludmilla Nery, cardiologista em Corrente-PI") | `[Especialidade] · [CRM/CRO-UF nº] · RQE [nº]. Atende na EmCORR às [dias]. Veja formação, o que trata e agende pelo WhatsApp.` |
| `/cidades-atendidas/[cidade-uf]` | `Clínica para quem vem de [Cidade] \| EmCORR Corrente` | `Mora em [Cidade]? A EmCORR fica a [X km real] em Corrente-PI. Consulta e exame no mesmo dia, resultado online. Veja como chegar e agende.` |
| `/blog/[slug]` | Título do post (≤ 60) sem marca se não couber | Resumo do post em 150 caracteres com a pergunta respondida |
| `/blog/categoria/[slug]` | `[Categoria]: artigos de saúde \| EmCORR` | `Artigos sobre [tema] escritos e revisados por profissionais da EmCORR, em Corrente-PI.` |

> Validar comprimento na implementação (`fixing-metadata`). Todas as páginas precisam de `og:title`, `og:description`, `og:image` (1200×630, com marca) e `canonical` absoluto.

## 2.6 Interlinking (arquitetura de links internos)

```
Home
 ├─ Especialidades (índice) ──► cada especialidade
 │     especialidade ⇄ profissionais que atendem ⇄ exames que ela pede
 ├─ Exames (índice por grupo) ──► cada exame
 │     exame ⇄ especialidade que solicita ⇄ post "preparo/o que é" do blog
 ├─ Corpo clínico ──► cada profissional ⇄ suas especialidades
 ├─ Convênios ◄── link de toda página de serviço
 ├─ Cidades atendidas ◄── bloco "Vem de outra cidade?" em toda página de serviço
 └─ Blog (posts) ──► 1 página de serviço principal + 1–2 relacionadas + CTA /agendar
```

**Regras que o admin deve aplicar automaticamente (relacionamentos no Supabase):**
1. Tabela `especialidade_exame` (N:N) → cada especialidade mostra "Exames que você pode fazer aqui" e cada exame mostra "Quem solicita este exame".
2. Tabela `profissional_especialidade` → páginas se linkam nos dois sentidos; **nenhum profissional órfão** (hoje 9 de 11 são).
3. Post do blog tem campo obrigatório `servico_principal` (FK) → link contextual no 1º terço do texto + card no fim.
4. Página de serviço mostra os 3 posts mais recentes que a citam.
5. Breadcrumb visível + `BreadcrumbList` em todas as internas.
6. Âncoras descritivas ("tomografia em Corrente", "ver preparo do ultrassom"), nunca "clique aqui"/"Ver mais".
7. Home linka as **6–8 páginas de maior valor** direto (tomografia, laboratório, pediatria, odontologia/ortodontia, cardiologia, ultrassom) além dos índices.
8. Rodapé: Especialidades, Exames, Convênios, Resultados, Cidades atendidas, Contato (NAP completo).

**Pares de alta prioridade (exemplos):** pediatria ⇄ teste do pezinho / orelhinha / linguinha / odontopediatria; cardiologia ⇄ ECG / eco / Holter / MAPA / doppler; otorrino ⇄ nasofibroscopia / laringoscopia / audiometria / imitanciometria ⇄ fonoaudiologia; ortodontia ⇄ tomografia odontológica / raio-X panorâmico; endocrinologia ⇄ laboratório / ultrassom (tireoide) ⇄ nutrição; psiquiatria ⇄ psicologia.

## 2.7 Schema (JSON-LD) recomendado
| Tipo | Onde | Campos-chave |
|---|---|---|
| `MedicalClinic` (+ `Dentist` como `additionalType` ou segundo nó) | Home, Contato (global no layout) | `name` "EmCORR – Centro Clínico", `address` (PostalAddress único), `geo`, `telephone`, `openingHoursSpecification` **(pegar horário real)**, `medicalSpecialty[]`, `areaServed` (lista de cidades), `sameAs` (Instagram, Facebook, GBP), `foundingDate` 2020, `paymentAccepted`, `isAcceptedPaymentMethod`/texto de convênios |
| `Physician` | `/corpo-clinico/[slug]` | `name`, `medicalSpecialty`, `identifier` (CRM/CRO/RQE), `worksFor` → clínica, `image` |
| `MedicalProcedure` / `MedicalTest` (ou `DiagnosticProcedure`/`ImagingTest`) | Exames | `name`, `preparation`, `howPerformed`, `provider` → clínica |
| `MedicalSpecialty` via `MedicalClinic.availableService` | Especialidades | |
| `FAQPage` | Serviços, FAQ geral | só perguntas visíveis na página (rich result de FAQ é restrito hoje, mas ajuda leitura por IA) |
| `Article`/`MedicalWebPage` | Blog | `author` (Person com credencial), `reviewedBy`, `lastReviewed`, `datePublished` |
| `BreadcrumbList` | Todas as internas | |
| `WebSite` | Home | `name`, `url` |

Gerar na fase de construção com `/geo-schema`; validar no Rich Results Test.

## 2.8 Google Business Profile (GBP)
É o fator nº 1 do local pack ("pediatra em Corrente" mostra mapa antes dos sites). Checklist:

**Identidade e NAP**
- Nome exatamente como na fachada/marca: **"EmCORR – Centro Clínico"** (não acrescentar palavras-chave ao nome, viola diretrizes).
- Endereço canônico (definir **Rua** ou **Avenida** Getúlio Vargas, 471 e usar igual em tudo). Pin conferido na porta.
- Telefone principal = o que atende de fato (WhatsApp (89) 9 9933-1133); fixo como adicional, se existir.
- Site: `https://emcorr.com.br/?utm_source=google&utm_medium=organic&utm_campaign=gbp` para medir no analytics.
- Link de agendamento: `https://emcorr.com.br/agendar?utm_source=google&utm_medium=organic&utm_campaign=gbp-agendar`.

**Categorias** (verificar nomes exatos no painel em pt-BR)
- Principal: **Clínica médica** (ou "Centro médico").
- Secundárias (até 9): Clínica odontológica/Dentista, Ortodontista, Pediatra, Cardiologista, Centro de diagnóstico por imagem, Laboratório médico, Psicólogo, Nutricionista. Escolher as que geram mais agendamento; não listar o que não é oferecido.

**Conteúdo do perfil**
- Descrição (750 caracteres) usando o boilerplate do BRAND-VOICE + "Atendemos Corrente e região: Cristalândia do Piauí, Sebastião Barros, Parnaguá, Riacho Frio, Gilbués..." (em frase natural).
- **Serviços:** cadastrar cada especialidade e exame com descrição curta e link da página correspondente (mesmo texto da meta description).
- **Horário** real + horários especiais em feriados (Corrente tem feriados municipais).
- **Atributos:** acessibilidade (entrada, banheiro), Wi-Fi, estacionamento, "agendamento online".
- **Fotos:** fachada (para quem vem de fora achar), recepção, consultórios, sala de tomografia/equipamentos, equipe (com autorização). Meta: 30+ fotos reais no lançamento, 4+/mês depois. Sem fotos de pacientes.
- **Posts semanais:** reaproveitar cada post do blog e reels do Instagram (link para a página).
- **Perguntas e respostas:** se a função ainda estiver disponível no perfil, semear as 5 perguntas mais comuns do WhatsApp; senão, levar para a FAQ do site.

**Avaliações** (fator de ranking e conversão)
- Link curto de avaliação enviado pela recepção **após** o atendimento (WhatsApp + QR code no balcão).
- **Não oferecer brinde/desconto por avaliação** (viola política do Google) e não pedir só para quem ficou satisfeito.
- Responder todas em até 48 h, sem confirmar que a pessoa é paciente nem citar dados de saúde (sigilo + LGPD). Modelo: agradecer, convidar para conversar no WhatsApp.
- Meta sugerida (a ajustar após medir o ponto de partida): superar a Policlínica em nº de avaliações em 6 meses.

**Perfis de profissional:** o Google permite perfis individuais de médicos que atendem ao público. Criar só para profissionais fixos, com categoria da especialidade, e ligar ao site (`/corpo-clinico/[slug]`). Evitar se o profissional também tiver perfil em outra clínica e isso gerar confusão.

**Citações (NAP) prioritárias:** Facebook, Instagram (bio com endereço), Apple Maps (Business Connect), Bing Places, Doctoralia, Medprev e Fácil Consulta (se a clínica aderir, ver COMPETITOR-REPORT), CatalogoMed, Guia Portal Corrente, e corrigir DiárioCidade/DescubraOnline/AgendarConsulta (telefone e logradouro). `/geo-brand-mentions` está previsto no PLANO para esse levantamento.

## 2.9 Técnico no Astro/Vercel (requisitos)
- SSG para todas as páginas públicas; revalidação ao publicar no admin (rebuild via webhook ou ISR on-demand).
- `@astrojs/sitemap` com `lastmod` real vindo do `updated_at` do Supabase; excluir `/admin`, `/api`, preview.
- `robots.txt`: liberar tudo, bloquear `/admin` e `/api`; permitir crawlers de IA (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) conforme decisão da `/geo-audit`.
- `llms.txt` com resumo da clínica, NAP, serviços e links.
- Canonical absoluto em todas as páginas; páginas de filtro/busca com `noindex`.
- Metas: LCP < 2,5 s, CLS < 0,1, INP < 200 ms em 4G (Lighthouse mobile ≥ 95, meta do PLANO). Hero com imagem AVIF pré-carregada, fontes self-hosted com `font-display: swap`, WhatsApp flutuante sem biblioteca pesada.
- 404 útil (texto do BRAND-VOICE) com links para Especialidades, Exames e WhatsApp.
- Google Search Console + Bing Webmaster no dia do lançamento: enviar sitemap, inspecionar 20 URLs principais, acompanhar "Páginas" e 404 nos 30 dias seguintes.
- Analytics sem cookie + eventos: clique no WhatsApp (com serviço de origem), clique em telefone, "Como chegar", Resultados.

## 2.10 Oportunidades de featured snippet / respostas de IA
Toda página de exame deve ter H2 em pergunta com resposta de 40–60 palavras logo abaixo:
- "Precisa de jejum para [exame]?" → parágrafo.
- "Como se preparar para [exame]" → lista numerada.
- "Quanto tempo demora o resultado de [exame] na EmCORR?" → parágrafo com prazo real.
- "Quais convênios cobrem [exame]?" → tabela.
- Tabela comparativa no índice `/exames`: exame · preparo · duração · prazo.

## 2.11 Lacunas de conteúdo
| Tema ausente | Potencial de busca* | Concorrência* | Tipo | Prioridade |
|---|---|---|---|---|
| Preparo/prazo/convênio em cada exame | Média | Baixa | Seção na página de exame | 1 |
| Páginas de odontologia geral e odontopediatria | Média | Média | Página de serviço | 1 |
| Horário, mapa e "como chegar" | Média (navegacional) | Baixa | `/contato` + GBP | 1 |
| Cidades atendidas | Baixa–Média | Baixa | Hub + 4–6 cidades | 2 |
| Dermatologia | Média | Média (Policlínica) | Página de serviço (se ativa) | 2 |
| Check-up por fase da vida | Baixa–Média | Baixa | Página comercial | 2 |
| Medicina ocupacional (ASO/PCMSO) | Média (B2B) | Alta (Policlínica) | Só se a clínica decidir ofertar | 3 |
| Blog educativo | Média (agregado) | Baixa (blog da Policlínica parado) | 24 pautas abaixo | 1–3 |

\* Estimativa qualitativa.

## 2.12 As 24 pautas de blog, priorizadas por intenção

**Critério de prioridade:** (1) intenção próxima de agendar/fazer exame; (2) liga direto a uma página de serviço que dá receita; (3) dúvida real e repetida da recepção; (4) diferencial EmCORR (família, odonto + pediatria, imagem sem viajar). Volume é estimativa qualitativa. Todas com autor/revisor com registro no conselho e sem promessa de resultado (CFM 2.336/2023 / CFO).

### Onda 1 — Intenção transacional/"pré-agendamento" (publicar no lançamento)
| # | Título (H1) | Palavra-chave alvo | Intenção | Liga para | Volume* | Categoria |
|---|---|---|---|---|---|---|
| 1 | Tomografia em Corrente: como agendar, preparo e quando sai o resultado | tomografia Corrente PI | Transacional | tomografia-computadorizada | Média | exames-explicados |
| 2 | Tomografia com ou sem contraste: qual a diferença e quando precisa de jejum | tomografia com contraste jejum | Informacional → transacional | tomografia-computadorizada | Média | exames-explicados |
| 3 | Preparo para ultrassom: abdominal, pélvico, tireoide e obstétrico | preparo ultrassom abdominal | Informacional → transacional | ultrassonografia | Alta | exames-explicados |
| 4 | Exame de sangue: quanto tempo de jejum para cada tipo | jejum exame de sangue | Informacional → transacional | exames-laboratoriais | Alta | exames-explicados |
| 5 | Teste do pezinho, da orelhinha e da linguinha: quando fazer cada um | testes do recém-nascido | Informacional → transacional | teste-do-pezinho, teste-da-orelhinha, teste-da-linguinha, pediatria | Média | familia-e-criancas |
| 6 | Exame toxicológico para CNH: quem precisa, prazo e onde fazer em Corrente | exame toxicológico CNH Corrente | Transacional | exame-toxicologico | Média | exames-explicados |
| 7 | Quais convênios a EmCORR aceita e como usar o seu | convênio Humana Saúde Corrente | Comercial | convenios | Baixa | institucional (sem categoria médica) |
| 8 | Vem de outra cidade? Como fazer consulta e exame no mesmo dia na EmCORR | clínica sul do Piauí | Comercial/local | cidades-atendidas, agendar | Baixa | institucional |

### Onda 2 — Intenção comercial/investigação (meses 1–3)
| # | Título (H1) | Palavra-chave alvo | Intenção | Liga para | Volume* | Categoria |
|---|---|---|---|---|---|---|
| 9 | Aparelho ortodôntico: com que idade começar e quanto tempo dura | idade para aparelho ortodôntico | Comercial | ortodontia, odontopediatria | Média | saude-bucal |
| 10 | Primeira consulta do bebê no dentista: quando levar e o que acontece | primeira consulta odontopediatra | Comercial | odontopediatria, pediatria | Média | saude-bucal |
| 11 | Ecocardiograma, Holter ou MAPA: o que cada exame do coração mostra | diferença holter e mapa | Informacional → comercial | ecocardiograma, holter-24-horas, mapa-24-horas, cardiologia | Média | coracao-e-metabolismo |
| 12 | Check-up por idade: quais exames fazer aos 20, 40 e 60 anos | exames check-up por idade | Comercial | check-up, exames-laboratoriais | Média | coracao-e-metabolismo |
| 13 | Particular ou SUS: como decidir onde fazer seu exame (guia sem complicação) | fazer exame particular | Comercial | exames, convenios | Baixa | exames-explicados |
| 14 | Mamografia: a partir de que idade, com que frequência e como se preparar | mamografia idade | Informacional → transacional | mamografia | Média | exames-explicados |
| 15 | Rouquidão que não passa: quando procurar o otorrino | rouquidão persistente | Informacional → comercial | otorrinolaringologia, laringoscopia | Média | exames-explicados |
| 16 | Criança com otite de repetição: o que é a imitanciometria e quando fazer | otite de repetição criança | Informacional → comercial | imitanciometria, otorrino, fonoaudiologia | Baixa–Média | familia-e-criancas |

### Onda 3 — Informacional/autoridade (meses 3–6)
| # | Título (H1) | Palavra-chave alvo | Intenção | Liga para | Volume* | Categoria |
|---|---|---|---|---|---|---|
| 17 | Pressão alta quase nunca dá sinal: como saber se a sua está controlada | pressão alta sintomas | Informacional | cardiologia, mapa-24-horas | Alta | coracao-e-metabolismo |
| 18 | Tireoide: sintomas de hipo e hipertireoidismo e quais exames confirmam | sintomas tireoide | Informacional | endocrinologia, exames-laboratoriais, ultrassonografia | Alta | coracao-e-metabolismo |
| 19 | Diabetes: glicemia, hemoglobina glicada e o que os números significam | hemoglobina glicada valor normal | Informacional | endocrinologia, nutricao, exames-laboratoriais | Alta | coracao-e-metabolismo |
| 20 | Ansiedade ou depressão? Diferenças e quando procurar psicólogo ou psiquiatra | diferença psicólogo e psiquiatra | Informacional → comercial | psicologia, psiquiatria | Alta | mente-e-nutricao |
| 21 | Meu filho fala pouco para a idade? Sinais para procurar a fonoaudióloga | atraso na fala criança | Informacional → comercial | fonoaudiologia, pediatria | Média | familia-e-criancas |
| 22 | Febre em criança: quando medicar em casa e quando levar ao pediatra | febre criança quando levar ao médico | Informacional | pediatria | Alta | familia-e-criancas |
| 23 | Alimentação da criança que não quer comer: o que fazer (e o que evitar) | criança não quer comer | Informacional | nutricao, pediatria | Média | mente-e-nutricao |
| 24 | Calendário de saúde da família: consultas e exames do bebê aos avós | exames por idade família | Informacional (pilar de marca) | especialidades, check-up | Baixa–Média | familia-e-criancas |

\* Estimativa qualitativa; validar com Keyword Planner antes de fixar a ordem dentro de cada onda.

**Por que as ondas estão nessa ordem:** posts de alta busca nacional (17–23) competem com portais grandes (Drauzio, Tua Saúde, hospitais) e raramente ranqueiam cedo para um domínio novo; servem para autoridade e para IA. Posts 1–8 têm cauda local/"preparo" que sites grandes não respondem com dados de Corrente, e levam direto ao WhatsApp.

**Cadência:** 8 no lançamento (Onda 1) → 2 por semana até completar 24 (≈ 8 semanas) → 1 por semana depois. Revisar posts de exame a cada 6 meses (prazos, convênios). Cada post vira 1 reel/carrossel no Instagram e 1 post no GBP.

**Formato:** 900–1.500 palavras; resposta direta nos primeiros 60 palavras; H2 em pergunta; tabela quando comparar; caixa "Na EmCORR" com prazo/convênio; autor + revisor + data; 2–3 links internos; CTA de agendamento contextual.

---

## Recomendações priorizadas

### Críticas (no lançamento; sem elas o novo site perde o que o antigo tem)
1. **301 de todas as 52 URLs antigas + legado `/index.php/*`** conforme tabela 2.3. Sem isso, as páginas de exame que já estão indexadas somem. Esforço baixo, impacto alto.
2. **Title + meta description + H1 com "Corrente-PI" em todas as páginas** (tabela 2.5). Hoje 0/52 têm meta e nenhuma interna cita a cidade. É a mudança isolada de maior impacto no SEO local.
3. **NAP único** (logradouro, telefone, nome) em site, schema, GBP e redes; corrigir diretórios com "(89) 3573-1881" e "Avenida" se estiverem errados.
4. **Schema `MedicalClinic` com horário real** + `Physician` + `BreadcrumbList`.
5. **Confirmar com a clínica a lista real de especialidades e exames ativos** (o CMS tem 13 + 24; a navegação mostra 6). Não publicar serviço que não é oferecido.

### Alta prioridade (primeiro mês)
1. Conteúdo real nas páginas de exame: preparo, duração, prazo, convênio, quem faz, revisor com registro.
2. Páginas de profissional completas (especialidade, RQE, dias) e todas ligadas; grafia "Ludmilla".
3. GBP completo: categorias, serviços com link, 30+ fotos, rotina de pedido de avaliação.
4. Search Console + analytics com evento de WhatsApp; enviar sitemap no dia 1.
5. Onda 1 do blog (8 posts).

### Média prioridade (trimestre)
1. `/cidades-atendidas` + páginas de cidade só onde houver dado real de fluxo e conteúdo único.
2. `/check-up` com "a partir de" (decisão comercial).
3. Ondas 2 e 3 do blog; posts semanais no GBP.
4. Citações em Doctoralia/Medprev/Fácil Consulta/Apple/Bing.

### Baixa prioridade (quando houver recursos)
1. Perfis individuais de profissional no Google.
2. Landing de medicina ocupacional (só se a clínica decidir entrar nesse mercado).
3. Vídeos curtos incorporados nas páginas de serviço (reels já existentes).

---

### Fontes
- Crawl direto de https://emcorr.com.br/ e `wp-sitemap*.xml` (28/09/2026), script `analyze_page.py`.
- [Policlínica de Corrente](https://policlinicadecorrente.com.br/) · [Cardiologista em Corrente](https://policlinicadecorrente.com.br/cardiologista/) · [ASO em Corrente](https://policlinicadecorrente.com.br/atestado-de-saude-ocupacional/)
- [DiárioCidade – Emcorr](https://www.diariocidade.com/pi/corrente/guia/emcorr-saude-em-corrente-26343832000102/) · [DescubraOnline](https://www.descubraonline.com/guia/pi/corrente/emcorr-saude-em-corrente-26343832000102/) · [AgendarConsulta](https://guia.agendarconsulta.com/piaui/corrente/emcorr-saude-em-corrente-0253006) · [maiscnpj](https://maiscnpj.com.br/cnpj/26343832000102-ludmilla-nery-custodio-ltda)
- [SESAPI – Regionais de Saúde](https://site.saude.pi.gov.br/paginas/regionais-de-saude) · [Plano de Educação Permanente PI (CONASS)](https://www.conass.org.br/planos-estaduais-educacao-permanente/PEEPS-PI.pdf)
- [Formosa do Rio Preto – território](https://formosadoriopreto.ba.gov.br/sobre-a-cidade/nosso-territorio-e-populacao/) · [ICMBio – Corredor Jalapão](https://www.icmbio.gov.br/projetojalapao/pt/2-artigo/3-location.html)
- [pi.gov – Central de Diagnóstico de Corrente](https://www.pi.gov.br/hospital-de-corrente-sera-ampliado-e-ganhara-uti-pronto-socorro-e-central-de-diagnostico/)
