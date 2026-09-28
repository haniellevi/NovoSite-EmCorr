# Inventário de Conteúdo — emcorr.com.br (captura de 28/09/2026)

**Fonte bruta:** `scrape/emcorr/` — `html/` (64 páginas), `pages/` (texto), `pages_clean/` (sem cabeçalho/rodapé), `ALL-PAGES-CLEAN.md` (corpus único), `media/` (31 arquivos), `media-manifest.json`, `pages.json`, `css/` (52 arquivos). Script: `scrape/crawl.py`.
**Plataforma atual:** WordPress + Elementor Pro + JetEngine/JetElements, tema Hello Elementor, Cloudflare. Desenvolvido por New Alliance Tecnologia.

---

## 1. Dados institucionais
| Campo | Valor | Observação |
|---|---|---|
| Nome | EmCORR – Centro Clínico | Grafias misturadas no site: EMCORR / EmCORR / EmCorr → padronizar **EmCORR** |
| Title atual | "EmCORR – Centro Clínico Referência Em Corrente" | |
| Fundação | **2020** (confirmado) | CNPJ 26.343.832/0001-02 aberto em 13/10/2016 (pessoa jurídica) |
| Endereço | Rua Getúlio Vargas, nº 471, Centro, Corrente-PI, 64980-000 | Diretórios usam "Avenida" → padronizar |
| WhatsApp | +55 (89) 9 9933-1133 | Não é clicável na home |
| Telefone fixo | (89) 3573-1881 | Só em diretórios (verificar se ativo) |
| E-mail | atendimento@emcorr.com.br | Protegido pelo Cloudflare no HTML |
| Instagram | @centro_clinico_emcorr (≈6.003 seguidores) | Link via Linktree |
| Facebook | facebook.com/emcorrcentroclinico | |
| Horário | **Não publicado** | Pedir à clínica |
| Mapa | Google Maps embed pelo endereço | |

## 2. Missão, visão, valores e história (Sobre Nós)
- **Missão:** "Nossa missão é oferecer atendimento médico de excelência."
- **Visão:** "Ser referência em atendimento humanizado, combinando carinho e atenção com tecnologia de ponta e expertise médica para oferecer o melhor cuidado a cada paciente."
- **Valores:** Empatia • Excelência • Inovação • Dedicação
- **Subtítulo:** "EMCORR: Cuidando de Você com Coração"
- **História:** "Tudo começou em 2020 com um sonho: criar um espaço onde cada pessoa fosse tratada com o cuidado e respeito que merece." (+ 4 frases de apoio, ver `pages_clean/sobre_nos.md`)
- **Assinatura (rodapé):** "Cuidando de Você e de Quem Você Ama! Na EMCORR, sua saúde é nossa prioridade. Aqui, cada consulta é uma oportunidade de entender quem você é, ouvir suas preocupações e encontrar a melhor forma de cuidar de você."
- Frase solta: "Da cardiologia à ortopedia, nossa equipe de especialistas está pronta para cuidar de você com amor e excelência."

## 3. Especialidades (13 páginas)
| Especialidade | URL atual | Conteúdo atual | Nova URL |
|---|---|---|---|
| Pediatria | /_especialidades/pediatria/ | 1 frase | /especialidades/pediatria |
| Cardiologia Clínica | /_especialidades/cardiologia-clinica/ | 1 frase | /especialidades/cardiologia |
| Endocrinologia | /_especialidades/endocrinologia/ | 1 frase | /especialidades/endocrinologia |
| Odontologia (slug "ortodontia") | /_especialidades/ortodontia/ | 1 frase | /especialidades/odontologia |
| Nutrição | /_especialidades/nutricao/ | 1 frase | /especialidades/nutricao |
| Psicologia | /_especialidades/psicologia/ | **vazia**, fora da listagem | /especialidades/psicologia |
| Psiquiatria | /_especialidades/psiquiatria/ | FAQ com 5 perguntas | /especialidades/psiquiatria |
| Fonoaudiologia (slug "2996-2") | /_especialidades/2996-2/ | FAQ com 5 perguntas | /especialidades/fonoaudiologia |
| Otorrinolaringologia | /_especialidades/otorrino-laringologia/ | 1 frase | /especialidades/otorrinolaringologia |
| Neurologia | /_especialidades/neurologia/ | 1 frase | /especialidades/neurologia |
| Cirurgia Geral | /_especialidades/cirurgia-geral/ | 1 frase (inadequada: "essenciais em emergências e áreas rurais") | /especialidades/cirurgia-geral |
| Fisioterapia | /_especialidades/fisioterapia/ | 1 frase | /especialidades/fisioterapia |
| Mamografia | /_especialidades/mamografia/ | **é exame, não especialidade** | 301 → /exames/mamografia |

Citadas no Instagram/fotos, sem página própria: **Ortopedia e Traumatologia** (Dr. Danilo Lustosa), **Clínica Geral**, **Dermatologia**, **Odontopediatria** → confirmar com a clínica.

## 4. Exames (22 páginas, todas com FAQ de 5 perguntas: Por que preciso? / O que é? / Como funciona? / E depois? / Por que é importante?)
| Grupo | Exames |
|---|---|
| Imagem | Tomografia Computadorizada (GE ACT Revolution, segundo o banner), Tomografia Ortodôntica, Raio-X, Raio-X Panorâmica, Mamografia, Ultrassonografia, Ultrassom Morfológico |
| Coração e circulação | Eletrocardiograma (ECG), Holter 24h, MAPA 24h, Ecocardiografia, Ecodoppler de Carótidas |
| Ouvido, nariz e garganta | Audiometria, Imitanciometria, Laringoscopia, Nasofibroscopia, Nasofibrolaringoscopia |
| Pulmão | Espirometria |
| Recém-nascido | Teste do Pezinho, Teste da Orelhinha, Teste da Linguinha |
| Laboratório | Exames Laboratoriais, Exame Toxicológico, Teste de Covid-19 (avaliar se mantém) |

**Qualidade do texto:** reaproveitável como base, mas tem erros de tradução automática que precisam de revisão: "comprovada" no lugar de "analisada", "filhos" no lugar de "sons" (Teste da Orelhinha), "corações" no lugar de "batimentos" (Holter), "espirometrô", "problemas problemáticos". Nenhuma página informa preparo, duração real, prazo de resultado nem convênio.
**Nova URL:** `/exames/[slug]` com 301 de `/_exames/[slug]/`.

## 5. Corpo clínico (11 páginas; só 2 aparecem na listagem pública)
| Profissional | Função (fonte) | Registro | Página | Foto |
|---|---|---|---|---|
| Dra. Ludmilla Nery | Cardiologista | CRM-PI 5888 · RQE 2142 | /_corpo-clinico/dra-ludmila-nery/ (grafia "Ludmila" na URL) | provável `profissional-emcorr-teste.png` (verificar) |
| Dr. Igor Rafael | Cirurgião-Dentista, Ortodontia, Implantodontia | CRO-PI 2031 | /_corpo-clinico/dr-igor-rafael/ | ✔ |
| Dra. Thalma Muniz | Endocrinologista (diabetes, distúrbios hormonais, tireoide, emagrecimento/hipertrofia, soroterapia e injetáveis) | verificar | ✔ | ✔ |
| Dra. Osyanne Timóteo | Otorrino (ouvido, nariz e garganta) | verificar | ✔ | — |
| Dr. Danilo Lustosa | Ortopedia e Traumatologia (nome do arquivo) | verificar | ✔ | ✔ |
| Dr. Dhiogo (de Paula) Melo | Médico (nome do arquivo) | verificar | ✔ | ✔ |
| Dr. Jeam Félix | Médico (nome do arquivo) | verificar | ✔ | ✔ |
| Dr. Jordão Aires / "Jordão Lustosa" | Médico (nome divergente) | verificar | ✔ | ✔ |
| Dr. Vinícius Coelho | Médico Generalista (nome do arquivo) | verificar | ✔ | ✔ |
| Dra. Mariana Vargas | Dentista (nome do arquivo) | verificar | ✔ | ✔ |
| Anaeliza Petersen ("Peterss" no arquivo) | Psicóloga (nome do arquivo) | CRP verificar | ✔ | ✔ |

**Pendência crítica:** conselho, número de registro, RQE, especialidades e dias de atendimento de 9 profissionais. Os campos "Dias de Atendimento" estão vazios em todas as páginas. A CFM 2.336/2023 exige CRM (+ RQE para especialista) em qualquer divulgação.

## 6. Convênios
Medplan · Humana Saúde · Camed (logos em 150×60 px) + particular.

## 7. Prova social
- **Depoimentos:** Marta ("É reconfortante saber que temos esse recurso para os moradores e visitantes de Corrente e região. Que Deus os abençoe e os direcione sempre") e Suele ("Gratidão EmCorr e seus colaboradores por cuidar tão bem e com carinho dos meus entes queridos…"), com fotos `marta.jpg` e `suele.jpg`. Um terceiro "depoimento" é texto de template. Confirmar consentimento de uso.
- **Contador:** "Anos de Experiência / Atendimentos Realizados / Profissionais Qualificados". O HTML mostra 0; segundo a auditoria de conversão, anima para "4 anos" (desatualizado). **Pedir números reais.**

## 8. Jornada e formulários
- **/agendar:** formulário Elementor com Nome completo, **CPF**, WhatsApp, E-mail (opcional), Exame/Consulta e reCAPTCHA. Pedir CPF num primeiro contato é fricção e exige base legal LGPD → remover no site novo.
- **/fale-conosco:** "Deixe-nos uma Mensagem" + endereço, WhatsApp e e-mail.
- **Resultados (3 portais):** laboratório `emcorr.uniexames.com.br`, radiologia `entregadeexames.com.br`, outros `resultados.emcorr.com.br`.
- **Busca interna:** barra "Pesquisar" no topo (baixo valor).
- **Newsletter:** campo de e-mail no rodapé, destino desconhecido.

## 9. Mídia capturada (`scrape/emcorr/media/`)
| Arquivo | Uso | Resolução | Aproveitável? |
|---|---|---|---|
| logo-emCORR.png | Logo | **157×58** | ❌ pedir vetor (SVG/AI/PDF) |
| favico.svg | Favicon (PNG embutido em SVG) | — | ❌ refazer a partir do vetor |
| Centro-Clinico-EmCORR-Corrente-1.jpg | Fachada aérea (drone, pôr do sol, serra ao fundo) | 480×480 | ⚠ ótima foto, baixa resolução → pedir original |
| Centro-Clinico-EmCORR.jpg | Fachada com a Dra. Ludmilla | 480×480 | ⚠ pedir original |
| Tomografia-Computadorizada-Emcorr.webp / -Mobile | Banner hero | 1920×650 / 1080×1080 | ⚠ tem texto embutido na imagem; refazer |
| Profissional-Emcorr-*.jpg (9) | Retratos | 480×425 | ⚠ uso provisório; ideal sessão de fotos |
| emcorr-*.svg (5) | Ícones de linha vermelhos | vetor | ✔ ou redesenhar num set único |
| emcorr-medplan/camed/humana-saude.png | Convênios | 150×60 | ⚠ pedir vetores |
| marta.jpg, suele.jpg | Depoimentos | 899×914 / 317×306 | ✔ com consentimento |
| emcorr-bg-paginas.jpg | Fundo do cabeçalho interno | — | opcional |

## 10. Mapa de redirecionamentos 301 (antigo → novo)
```
/sobre-nos/                       → /sobre
/_especialidades/                 → /especialidades
/_especialidades/2996-2/          → /especialidades/fonoaudiologia
/_especialidades/ortodontia/      → /especialidades/odontologia
/_especialidades/cardiologia-clinica/ → /especialidades/cardiologia
/_especialidades/otorrino-laringologia/ → /especialidades/otorrinolaringologia
/_especialidades/mamografia/      → /exames/mamografia
/_especialidades/:slug/           → /especialidades/:slug
/_exames/                         → /exames
/_exames/:slug/                   → /exames/:slug
/_corpo-clinico/                  → /corpo-clinico
/_corpo-clinico/dra-ludmila-nery/ → /corpo-clinico/dra-ludmilla-nery
/_corpo-clinico/:slug/            → /corpo-clinico/:slug
/fale-conosco/                    → /contato
/author/*                         → /  (ou 410)
```

## 11. O que pedir à clínica (checklist)
1. Logo em vetor + manual de marca, se houver.
2. Fotos originais em alta resolução (fachada, recepção, salas, tomógrafo, equipe). Se não houver, agendar sessão de fotos.
3. Por profissional: nome oficial, conselho/nº, RQE, especialidades, dias/horários, foto, 2–3 linhas de apresentação.
4. Lista real de especialidades e exames ativos (Covid-19 continua? Mamografia é própria? Ortopedia? Dermatologia?).
5. Por exame: preparo, duração, prazo do resultado, convênios aceitos.
6. Horário de funcionamento (e se abre aos sábados).
7. Números reais para a faixa de estatísticas.
8. Consentimento escrito dos depoimentos (Marta, Suele) + novos depoimentos.
9. Acessos: domínio/DNS (Cloudflare), Google Business Profile, Search Console, portais de resultado.
