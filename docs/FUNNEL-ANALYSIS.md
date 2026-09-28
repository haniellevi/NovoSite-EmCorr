# Análise de Funil: EmCORR – Centro Clínico (Corrente-PI)
**URL:** https://emcorr.com.br/
**Data:** 28/09/2026
**Tipo de negócio:** Clínica médica, odontológica e de exames (particular + convênio: Medplan, Humana Saúde, Camed)
**Tipo de funil:** Geração de contato local (Lead Gen → WhatsApp → recepção → agendamento → atendimento → resultado → retorno)
**Saúde geral do funil hoje: 34/100**

> Base: inspeção do HTML de `/`, `/sobre-nos/`, `/agendar/`, `/fale-conosco/`, `/_exames/`, `/_especialidades/pediatria/`, `/_corpo-clinico/dr-igor-rafael/`; execução no navegador de `/agendar` **sem enviar** o formulário; Instagram e Linktree públicos; 3 portais de resultado (só a tela inicial, sem login). Cruzado com [COMPETITOR-REPORT.md](COMPETITOR-REPORT.md), [BRAND-VOICE.md](BRAND-VOICE.md) e [PLANO-MESTRE.md](PLANO-MESTRE.md). Não há dados de tráfego nem de agenda: números de conversão são **estimativas** a validar com a clínica (marcadas como *est.*).

---

## Resumo executivo

A EmCORR tem a melhor audiência digital da cidade (≈6.000 seguidores no Instagram, contra ≈4.500 da Policlínica) e é a única que mostra convênios, mas **o site não é o caminho de conversão: é um desvio.** O paciente real vai do Instagram para o Linktree e dali direto para o WhatsApp, onde há **dois números diferentes** ("Exames de radiologia" e "Consultas e realização de exames"). O site não tem **nenhum link de WhatsApp clicável** (nem `wa.me`, nem `tel:`), mostra um terceiro número (+55 89 9 9933-1133) só como texto, e todo botão "Agendar" leva a um formulário que pede **CPF obrigatório**, não tem consentimento LGPD, oferece apenas 8 consultas e 22 exames (metade do portfólio fica de fora) e não diz o que acontece depois do envio.

O maior gargalo está na passagem **site → primeira conversa**. Quem chega pelo Google ("pediatra em Corrente", "tomografia Corrente") cai numa página de especialidade com uma frase e um botão "Agendar" que abre um formulário de 8 campos. Em celular, com internet instável, esse é o ponto de maior abandono (*est.* 85–95% dos que clicam "Agendar" desistem). Nenhuma ferramenta de analytics foi detectada (sem GA4, GTM, Meta Pixel ou Clarity): a clínica **não sabe** quantos pacientes o site gera.

Depois da consulta, o funil se fragmenta de novo: **três portais de resultado** de fornecedores diferentes (UniExames para laboratório, "Entrega de Exames" para radiologia, sistema próprio para "outros"), abertos por um pop-up genérico "RESULTADOS", cada um com login diferente. Não existe etapa de retorno/fidelização (lembrete, pedido de avaliação no Google, reconsulta). A página inicial ainda exibe estatísticas que começam em **"0+ / 0K+ / 0+"** até o JavaScript animar (os valores reais são 4 anos, 30 mil atendimentos, 14 profissionais), o que aparece assim para robôs, leitores de tela e celulares lentos, e contradiz o CNPJ de 2016 e o "começou em 2020" da página Sobre.

**As 3 correções de maior impacto no novo site:**
1. **WhatsApp como conversão principal**: botão flutuante + CTA por página com mensagem pré-preenchida por especialidade/exame, roteando para o número certo (consultas × radiologia). *est.* +40–80% de conversas iniciadas pelo site.
2. **Formulário curto de solicitação** (nome, WhatsApp, serviço, convênio/particular, período) sem CPF e sem campo de saúde livre, com consentimento LGPD e confirmação clara ("respondemos em até X min no horário comercial"). *est.* conclusão de 5–10% → 25–40%.
3. **Página única `/resultados`** que pergunta "que exame você fez?" e manda ao portal certo com instruções de login, e ao lado dela uma etapa de retorno (avaliação no Google + lembrete de reconsulta). *est.* −30–50% de ligações ao balcão pedindo resultado e +2–3× avaliações no Google.

---

## Mapa da jornada atual

```
JORNADA REAL DO PACIENTE (HOJE)
===============================

 DESCOBERTA
 ├─ Instagram @centro_clinico_emcorr (≈6 mil) ── bio → linktr.ee/CentroClinicoEmCORR
 │     └─ Linktree: [WhatsApp Radiologia] [WhatsApp Consultas/Exames] [Site]
 │            │ ~70–80% vão direto ao WhatsApp (est.)  → SITE É PULADO
 ├─ Google / Maps ("clínica Corrente", "tomografia Corrente")
 │     └─ Diretórios mostram fixo (89) 3573-1881; site mostra (89) 9 9933-1133
 ├─ Indicação (boca a boca, médico, empresa) ── entra por WhatsApp/telefone
 └─ Facebook (fraco)
        │
        v
 SITE emcorr.com.br ────────────── 100% dos visitantes do site
   Home: hero "Centro Clínico Referência Em Corrente" + [Agendar] + contadores "0+"
   │  Sem WhatsApp clicável em nenhuma página
   ├─ Especialidade / Corpo clínico / Exames (1 frase + [Agendar] / [INFORMAÇÕES])
   │        │ ~15–25% clicam "Agendar" (est.)
   │        v
   ├─ /agendar ─ formulário 8 campos (CPF obrigatório, sem LGPD)
   │        │ ~5–15% concluem (est.) → e-mail interno (destino não visível)
   │        v
   │     "Confirmaremos rapidamente" … sem prazo, sem canal, sem página de obrigado
   └─ /fale-conosco ─ 2º formulário (nome, e-mail, WhatsApp, mensagem)
        │
        v
 RECEPÇÃO / WHATSAPP (2 números no Linktree + 1 no site + 1 fixo nos diretórios)
   └─ Paciente repete tudo (nome, serviço, convênio) → horário → confirmação
        │
        v
 CONSULTA / EXAME presencial (Rua Getúlio Vargas, 471)
        │
        v
 RESULTADO ── pop-up "RESULTADOS" → 3 portais, 3 logins
   ├─ Laboratoriais → emcorr.uniexames.com.br (login/senha)
   ├─ Radiológicos  → entregadeexames.com.br (marca genérica, sem EmCORR)
   └─ Outros        → resultados.emcorr.com.br (login/senha)
        │ dúvida → liga/manda WhatsApp para o balcão
        v
 RETORNO / FIDELIZAÇÃO ── inexistente no digital
   (sem pedido de avaliação, sem lembrete de reconsulta/preventivo, newsletter por e-mail sem uso)

Conversão site → contato qualificado: ~1–3% (est.)   Benchmark lead gen local saúde: 5–10%
```

---

## Análise etapa por etapa

Notas 0–10 (Clareza, Continuidade, Motivação, Fricção [10 = sem fricção], Confiança).

### Etapa 0: Descoberta (Instagram → Linktree, Google/Maps, indicação)
| Clar. | Cont. | Motiv. | Fric. | Conf. | **Nota** |
|---|---|---|---|---|---|
| 7 | 4 | 7 | 7 | 6 | **6,2** |

- **Instagram:** bio "Clínica Médica e Odontológica / Exames Complementares e de Imagem"; destaques Exames, Profissionais, Depoimentos. É o canal mais forte.
- **Linktree:** 2 links `wa.me/message/…` (radiologia; consultas e exames) + site. Funciona para quem sabe o que quer, mas **não tem resultados, endereço, convênios ou horário**, e o link "Site" leva à home genérica.
- **Google:** diretórios e agregadores exibem o fixo (89) 3573-1881 e às vezes "Avenida" em vez de "Rua". NAP (nome, endereço, telefone) inconsistente prejudica o Maps. Nenhuma nota/avaliação do Google Business apareceu na pesquisa (verificar o perfil com a clínica).
- **Indicação:** entra direto no WhatsApp; o site não ajuda a pessoa a "confirmar" a indicação (sem páginas de profissional completas, sem horários).

**Vazamentos:** site pulado (sem dado, sem SEO de marca); números diferentes por canal; nenhum UTM no link do Linktree.

### Etapa 1: Home
| Clar. | Cont. | Motiv. | Fric. | Conf. | **Nota** |
|---|---|---|---|---|---|
| 5 | 4 | 4 | 4 | 4 | **4,2** |

- **Ação principal:** "Agendar" (header e hero) → `/agendar`. Segunda ação: "RESULTADOS" (pop-up).
- **Fricção:** contadores `data-from-value=0` → aparecem "0+ / 0K+ / 0+" sem JS/antes do scroll; nenhum WhatsApp clicável; newsletter por e-mail no rodapé (canal que o paciente não usa); link "Privacidade" do rodapé sem destino; texto de especialidades genérico ("São essenciais em emergências e áreas rurais…").
- **Confiança:** logos de convênio (bom, diferencial), 2 profissionais com CRM/RQE/CRO, 2 depoimentos sem nome. Faltam horário de funcionamento, cidades atendidas, fotos reais, mapa.
- **Continuidade:** mostra 6 especialidades; o próprio site e o Instagram indicam mais de 12 (cardiologia, endócrino, neuro, ortopedia, otorrino, nutrição, dermato, fono etc.).

### Etapa 2: Especialidade / Corpo clínico / Exames
| Clar. | Cont. | Motiv. | Fric. | Conf. | **Nota** |
|---|---|---|---|---|---|
| 4 | 5 | 2 | 5 | 4 | **4,0** |

- `/_especialidades/pediatria/`: título + 1 frase + [Agendar]. Não diz quem atende, dias, convênio, idade, preparo.
- `/_corpo-clinico/dr-igor-rafael/`: CRO, especialidades, "Dias de atendimento: Todos os dias" + [Agendar]. Bom esqueleto, sem foto contextual nem CTA de WhatsApp com o nome do profissional.
- `/_exames/`: 11 exames com "INFORMAÇÕES" (Imitanciometria, Teste da Linguinha/Orelhinha/Pezinho, Nasofibroscopia, Laringoscopia, US Morfológico, Ultrassonografia, Covid, Toxicológico, Laboratoriais). **Não aparecem tomografia, raio-X, mamografia, ECG, holter, MAPA**, justamente os que o formulário oferece e que geram mais busca.
- O [Agendar] **não leva o contexto**: quem estava na página de pediatria chega a um formulário em branco.

### Etapa 3: /agendar (o que a página faz de fato)
| Clar. | Cont. | Motiv. | Fric. | Conf. | **Nota** |
|---|---|---|---|---|---|
| 6 | 3 | 3 | 2 | 2 | **3,2** |

Inspeção técnica (Elementor Pro Form `form_agendamento`, reCAPTCHA v3 invisível, máscaras de CPF/telefone; **não enviado**):

| Campo | Obrigatório | Problema |
|---|---|---|
| Nome completo | sim | ok |
| **CPF** | **sim** | dado pessoal desnecessário para *pedir* horário; alta desistência no celular; exige base legal e retenção definida |
| WhatsApp | sim | ok (máscara) |
| E-mail | não | ok |
| Tipo: EXAME / CONSULTA | sim | ok |
| Exame (22 opções) | sim | a opção "Selecione o Exame" tem `value` preenchido → o campo **passa na validação sem escolha real**; lista diferente da página /_exames |
| Consulta (8 opções) | sim | idem ("Selecione a Consulta"); **sem odontologia/ortodontia, psicologia, fisioterapia, dermato, fono, cirurgia**, que o site anuncia |
| Informações adicionais | não | texto livre: convida o paciente a escrever sintomas → **dado sensível de saúde** (LGPD art. 11) sem consentimento |

- O script que alterna exame/consulta só esconde o campo (`display:none`); o valor-padrão do campo oculto vai junto no envio (ruído para a recepção).
- **Sem** caixa de consentimento, **sem** link para política de privacidade, **sem** convênio/particular, **sem** período preferido, **sem** página/mensagem de obrigado com prazo ("confirmaremos rapidamente"), **sem** alternativa "prefiro WhatsApp".
- Destino do envio não é visível (ação padrão do Elementor = e-mail). Se ninguém monitora a caixa em tempo real, o lead esfria enquanto o paciente já chamou o concorrente no WhatsApp.
- Nenhum evento de analytics é disparado (não há ferramenta instalada).

### Etapa 4: /fale-conosco
| Clar. | Cont. | Motiv. | Fric. | Conf. | **Nota** |
|---|---|---|---|---|---|
| 6 | 5 | 4 | 5 | 5 | **5,0** |

Endereço, WhatsApp e e-mail em texto (e-mail ofuscado pelo Cloudflare), mais um 2º formulário (nome, e-mail, WhatsApp, mensagem). Sem mapa, sem horário, sem botão para WhatsApp ou ligação. Dois formulários concorrentes para o mesmo objetivo.

### Etapa 5: WhatsApp / recepção (fora do site)
| Clar. | Cont. | Motiv. | Fric. | Conf. | **Nota** |
|---|---|---|---|---|---|
| 5 | 3 | 7 | 5 | 7 | **5,4** |

Pelo menos 3 números em circulação (radiologia, consultas/exames no Linktree; 99933-1133 no site) e 1 fixo nos diretórios. Sem mensagem pré-preenchida vinda do site, a recepção precisa perguntar tudo. Recomenda-se WhatsApp Business com etiquetas (Novo, Agendado, Compareceu, Resultado, Retorno) e respostas rápidas. Meta de resposta: < 15 min no horário comercial (COMPETITOR-REPORT).

### Etapa 6: Consulta / exame
Fora do escopo do site, mas o site pode reduzir faltas e retrabalho com **páginas de preparo por exame** (jejum, documentos, pedido médico, carteirinha do convênio, tempo estimado) linkadas na confirmação do WhatsApp.

### Etapa 7: Resultado
| Clar. | Cont. | Motiv. | Fric. | Conf. | **Nota** |
|---|---|---|---|---|---|
| 3 | 3 | — | 2 | 3 | **2,8** |

Pop-up "RESULTADOS" com "Exames laboratoriais / Exames radiológicos / Outros Exames" → 3 sistemas diferentes (UniExames com login; "Entrega de Exames" sem marca EmCORR; resultados.emcorr.com.br com login). O paciente não sabe em qual categoria cai uma ultrassonografia ou um eletrocardiograma, nem onde está a senha. Resultado: ligações ao balcão e sensação de desorganização no momento de maior ansiedade. A Policlínica e o CDI têm portal único.

### Etapa 8: Retorno / fidelização
| Clar. | Cont. | Motiv. | Fric. | Conf. | **Nota** |
|---|---|---|---|---|---|
| — | 1 | 1 | — | — | **1,0** |

Nenhum mecanismo: sem pedido de avaliação no Google após o atendimento, sem lembrete de retorno (pediatria de puericultura, ortodontia mensal, check-up anual, preventivo da mama), sem conteúdo de acompanhamento. A newsletter por e-mail do rodapé não tem proposta nem uso.

### Resumo das notas
| Etapa | Nota | Peso no funil |
|---|---|---|
| Descoberta | 6,2 | alto |
| Home | 4,2 | alto |
| Especialidade/Exame | 4,0 | alto |
| /agendar | 3,2 | **crítico** |
| Fale conosco | 5,0 | baixo |
| WhatsApp/recepção | 5,4 | **crítico** |
| Resultado | 2,8 | médio |
| Retorno | 1,0 | médio |
| **Saúde do funil (ponderada)** | **34/100** | |

---

## Métricas do funil

Nada é medido hoje. Estimativas para dimensionar decisões (validar com a clínica: atendimentos/mês, % via site, ticket médio particular):

```
MÉTRICAS (ESTIMADAS)
====================
Visitantes do site/mês ............ 600–1.500 (cidade ~26 mil hab. + região)
Origem ............................ Instagram/Linktree ~40% · Google ~35% · Direto ~20% · Outros ~5%
Visitante → clique "Agendar" ...... 15–25%
Clique → formulário concluído ..... 5–15%
Visitante → contato (form+tel) .... 1–3%      benchmark local saúde: 5–10%
Contato → agendado ................ 50–70%    (depende do tempo de resposta)
Agendado → compareceu ............. 80–90%
Paciente → avaliação no Google .... <2%      meta: 10–15%
Paciente → retorno em 12 meses .... desconhecido
```

## Impacto estimado

Modelo com premissas conservadoras (ajustar com dados reais):

```
Hoje:   1.000 visitas × 2% contato × 60% agenda × 85% comparece = ~10 atendimentos/mês via site
Novo:   1.000 visitas × 7% contato × 70% agenda × 88% comparece = ~43 atendimentos/mês via site

Ticket médio particular (consulta+exame) hipotético: R$ 180
Receita atribuível ao site: ~R$ 1.800/mês → ~R$ 7.700/mês  (+R$ 5.900/mês ≈ R$ 71 mil/ano)
Receita por visitante (RPV): R$ 1,80 → R$ 7,70
```

Somam-se ganhos operacionais não monetizados: menos ligações sobre resultados, menos retrabalho de triagem no WhatsApp, menos faltas com páginas de preparo.

---

## Funil do NOVO site

### Princípios
1. **WhatsApp é a conversão principal**; o formulário é alternativa para quem prefere ser chamado (ou fora do horário).
2. **Todo CTA carrega o contexto** (especialidade, exame, profissional, página) para a mensagem e para o analytics.
3. **Sem dado de saúde em canal aberto**: nada de sintomas, diagnósticos ou pedido médico no formulário; isso fica para o WhatsApp da recepção/consulta. Sem CPF na solicitação.
4. **Um lugar para cada coisa**: 1 número por finalidade (consultas × imagem), 1 página de resultados, 1 formulário.
5. Ética CFM 2.336/2023 e CFO: sem promessa de resultado, sem antes/depois, sem preço como chamariz sensacionalista, depoimentos só com autorização por escrito.

### Fluxos por origem

```
INSTAGRAM (post/reel de especialidade)
  bio → emcorr.com.br/links?utm_source=instagram  (substitui o Linktree; página própria do site)
        [Agendar consulta (WhatsApp)] [Agendar exame de imagem (WhatsApp)]
        [Ver resultado de exame] [Convênios] [Como chegar] [Blog]
  reel sobre tomografia → link do story → /exames/tomografia?utm_campaign=… → CTA WhatsApp com mensagem do exame

GOOGLE / MAPS
  "tomografia Corrente" → /exames/tomografia (o que é, preparo, prazo, convênios) → [WhatsApp: "Quero agendar tomografia"]
  "pediatra Corrente"  → /especialidades/pediatria (quem atende, dias, convênios) → [WhatsApp pediatria] | [Solicitar pelo formulário]
  Perfil do Google Business: botão "Agendar" → /agendar?utm_source=gbp ; "Site" → /?utm_source=gbp

INDICAÇÃO ("procura a Dra. X")
  busca pelo nome → /corpo-clinico/dra-x (dias, conselho, RQE, convênios) → [WhatsApp: "Quero agendar com a Dra. X"]

PÓS-ATENDIMENTO
  mensagem da recepção (WhatsApp) → /resultados/[tipo] (instruções + portal certo)
  48 h depois → link de avaliação no Google
  lembrete de retorno conforme a especialidade (com consentimento) → /agendar?retorno=1
```

### CTAs por página

| Página | CTA primário | CTA secundário | Elementos obrigatórios perto do CTA |
|---|---|---|---|
| **Global** | Botão flutuante WhatsApp (mobile: barra fixa inferior "WhatsApp · Ligar · Resultados") | "Resultados" no header | Horário de atendimento; tempo de resposta |
| **Home** | "Agendar pelo WhatsApp" (hero) | "Ver especialidades" / "Ver exames" | Convênios, nº reais (anos, atendimentos, profissionais) renderizados no HTML, endereço + mapa, horário |
| **/especialidades** (índice) | Card → página da especialidade | WhatsApp geral | Filtro "para crianças / adultos / dentes / exames" |
| **/especialidades/[slug]** | "Agendar [especialidade] pelo WhatsApp" | "Prefiro que me chamem" (form com serviço preenchido) | Profissionais, dias, convênios aceitos, FAQ, "o que levar" |
| **/corpo-clinico/[slug]** | "Agendar com [nome]" (WhatsApp) | Ver especialidade | Conselho/RQE, dias, convênios |
| **/exames** (índice) | Busca de exame + card | "Tenho um pedido médico" (WhatsApp imagem/lab) | Separação Laboratório / Imagem / Outros, igual à de resultados |
| **/exames/[slug]** | "Agendar [exame] pelo WhatsApp" (número de imagem para TC/RX/USG/mamografia) | "Ver preparo" (âncora) / "Ver resultado" | Preparo, duração, prazo do resultado, convênios, precisa de pedido? |
| **/convenios** | "Confirmar meu convênio pelo WhatsApp" | Agendar | Lista, como usar, particular |
| **/agendar** | Escolha: [WhatsApp agora] ou [Formulário] | Ligar | Horário, prazo de retorno, LGPD |
| **/resultados** | Seletor "Que exame você fez?" → portal certo | "Não encontrei meu resultado" (WhatsApp resultados) | Instruções de login de cada portal, prazo típico, privacidade |
| **/sobre** | "Venha nos conhecer" (Como chegar) | WhatsApp | Fotos reais, história coerente (data), equipe |
| **/blog/[slug]** | CTA contextual para a especialidade/exame do artigo | Seguir no Instagram | Autor com conselho, data de revisão |
| **/contato** | WhatsApp + Ligar + Como chegar | (sem formulário duplicado; link para /agendar) | Mapa, horário, NAP idêntico ao Google |
| **/obrigado** | "Quer adiantar? Fale no WhatsApp" | Ver preparo do exame | Prazo de retorno, número que vai chamar |

### Formulário de solicitação de agendamento (LGPD)

Objetivo: **pedido de contato**, não agendamento confirmado. 5 campos + consentimento, uma tela.

| # | Campo | Tipo | Obrig. | Observação |
|---|---|---|---|---|
| 1 | Seu nome | texto | sim | `autocomplete="name"` |
| 2 | WhatsApp com DDD | tel | sim | máscara (89) 9 9999-9999, `inputmode="tel"` |
| 3 | O que deseja agendar | select agrupado (Consulta: especialidades · Exame: laboratório / imagem / outros · Odontologia) | sim | pré-preenchido pela página de origem (`?servico=pediatria`); lista alimentada pelo mesmo cadastro do CMS das páginas |
| 4 | Atendimento | rádio: Particular / Convênio (Medplan, Humana, Camed) / Não sei | sim | |
| 5 | Melhor período | rádio: Manhã / Tarde / Qualquer | não | |
| 6 | Paciente é criança? | checkbox | não | só para a recepção preparar o atendimento; não coleta idade/dados da criança |
| — | Consentimento | checkbox **não marcado** | sim | "Autorizo a EmCORR a usar meu nome e WhatsApp para retornar esta solicitação, conforme a [Política de Privacidade]." |
| — | Aviso | texto | — | "**Não escreva sintomas, diagnósticos ou resultados aqui.** Essas informações serão tratadas com segurança no atendimento." |
| — | Anti-spam | honeypot + limite por IP (Turnstile ou reCAPTCHA só se houver abuso) | — | |

**Não coletar:** CPF, data de nascimento, e-mail obrigatório, campo livre de "motivo/sintomas", upload de pedido médico.
**Tratamento:** API route (Vercel) → tabela `agendamento_solicitacoes` no Supabase (RLS, só perfil recepção/admin) → notificação imediata à recepção (e-mail + aviso no painel; opcional push/WhatsApp Business API) → status (novo, contatado, agendado, sem resposta, descartado). **Retenção:** apagar ou anonimizar em 90 dias. Registrar data/versão do texto de consentimento. Base legal: consentimento (art. 7º, I) para o contato; dados de saúde só no prontuário (art. 11, II, "f").
**Após enviar:** página `/obrigado` com "Recebemos seu pedido. Vamos chamar você no WhatsApp (89) … em até 30 min no horário de atendimento (seg–sex X–Y h, sáb X–Y h)." + botão "Quer adiantar? Chamar agora" (mensagem pré-preenchida com o serviço escolhido).
**Opção "direto ao WhatsApp":** mesmo formulário sem gravar nada no servidor: monta a mensagem com nome + serviço + convênio + período e abre `wa.me`. É o caminho padrão no celular; o envio ao servidor fica para quem prefere ser chamado.

### Mensagens pré-preenchidas de WhatsApp

Regras: `https://wa.me/55DDDNUMERO?text=` com texto URL-encoded; número definido por **finalidade** no CMS (Consultas/odonto/lab × Imagem × Resultados); texto curto e sem dado de saúde; termina com um código de origem discreto para a recepção e para atribuição (ex.: `[site-ped]`). Os links `wa.me/message/…` atuais do Linktree devem ser substituídos por `wa.me/<número>?text=` (os `message/` não aceitam texto dinâmico).

| Contexto | Número | Mensagem |
|---|---|---|
| Botão flutuante (genérico) | Consultas | Olá, EmCORR! Vim pelo site e gostaria de agendar um atendimento. [site] |
| Home hero | Consultas | Olá! Quero agendar uma consulta ou exame na EmCORR. Podem me ajudar? [site-home] |
| Pediatria | Consultas | Olá! Gostaria de agendar uma consulta de pediatria para meu filho(a). Quais os próximos horários? [site-ped] |
| Cardiologia | Consultas | Olá! Gostaria de agendar uma consulta com cardiologista. Quais os horários disponíveis? [site-card] |
| Endocrinologia | Consultas | Olá! Quero agendar uma consulta de endocrinologia. Quais os próximos horários? [site-endo] |
| Neurologia / Ortopedia / Otorrino / Clínico geral / Dermatologia / Cirurgia geral | Consultas | Olá! Gostaria de agendar uma consulta de {especialidade}. Quais os horários disponíveis? [site-{slug}] |
| Odontologia | Consultas | Olá! Quero agendar uma avaliação odontológica. Quais os horários? [site-odonto] |
| Ortodontia | Consultas | Olá! Gostaria de agendar uma avaliação de ortodontia (aparelho). Quais os horários? [site-orto] |
| Psicologia | Consultas | Olá! Gostaria de informações para agendar atendimento com psicólogo(a). [site-psi] |
| Nutrição / Fonoaudiologia / Fisioterapia | Consultas | Olá! Quero agendar {especialidade}. Como funciona e quais os horários? [site-{slug}] |
| Profissional | Consultas | Olá! Gostaria de agendar com {Dr(a). Nome} ({especialidade}). Quais os próximos dias? [site-cc-{slug}] |
| Tomografia | Imagem | Olá! Tenho pedido médico e quero agendar uma tomografia. Quais os horários e o preparo? [site-tc] |
| Raio-X | Imagem | Olá! Quero fazer um raio-X. Precisa agendar ou posso ir direto? [site-rx] |
| Mamografia | Imagem | Olá! Gostaria de agendar uma mamografia. Quais os horários disponíveis? [site-mamo] |
| Ultrassonografia / US morfológico | Imagem | Olá! Quero agendar uma ultrassonografia ({tipo}). Quais os horários e o preparo? [site-usg] |
| Exames laboratoriais | Consultas/lab | Olá! Quero fazer exames de sangue/laboratório. Qual o horário de coleta e precisa de jejum? [site-lab] |
| Teste do pezinho / orelhinha / linguinha | Consultas/lab | Olá! Gostaria de agendar o teste {nome} do meu bebê. Quais os horários? [site-{slug}] |
| ECG / Holter / MAPA / Ecocardiograma / Teste ergométrico | Consultas | Olá! Quero agendar {exame}. Quais os horários e as orientações? [site-{slug}] |
| Audiometria / Imitanciometria / Nasofibroscopia / Laringoscopia / EEG / Espirometria | Consultas | Olá! Gostaria de agendar {exame}. Quais os horários? [site-{slug}] |
| Convênios | Consultas | Olá! Queria confirmar se a EmCORR atende meu convênio: ____. [site-conv] |
| Resultados ("não encontrei") | Resultados | Olá! Fiz um exame na EmCORR e não estou conseguindo acessar o resultado. Podem me ajudar? [site-res] |
| Obrigado (após form) | Consultas | Olá! Acabei de enviar uma solicitação pelo site para {serviço}. Posso adiantar por aqui? [site-form] |

*Não* incluir nome do paciente nem sintomas no texto pré-montado das páginas; no fluxo "formulário → WhatsApp" o nome digitado pelo próprio paciente pode entrar.

### Página única de resultados (`/resultados`)
1. Pergunta "Que exame você fez?" com 3 cartões **com exemplos** (Laboratório: sangue, urina, fezes, teste do pezinho → UniExames; Imagem: raio-X, tomografia, mamografia, ultrassom → Entrega de Exames; Outros: ECG, holter, MAPA, audiometria, endoscopias → portal EmCORR). Confirmar a classificação com a clínica.
2. Cada cartão: onde está o login/senha (ex.: "impresso no seu protocolo"), prazo típico, botão "Abrir portal" (`target=_blank`, `rel=noopener`) e "Não encontrei" (WhatsApp resultados).
3. Nenhum dado do paciente passa pelo site (sem pedir CPF/protocolo; o site só redireciona).
4. Médio prazo: unificar em um único fornecedor/portal ou pedir ao fornecedor de radiologia a marca EmCORR.
5. Links "Resultados" no header, rodapé, `/links` (Instagram) e na mensagem de confirmação da recepção.

### Retorno e fidelização (WhatsApp, não e-mail)
| Momento | Ação | Canal | Consentimento |
|---|---|---|---|
| Confirmação do agendamento | Endereço + link do preparo do exame/especialidade | WhatsApp da recepção | contrato do atendimento |
| Véspera | Lembrete com opção de remarcar | WhatsApp | idem |
| Resultado pronto | Aviso + link `/resultados/{tipo}` | WhatsApp | idem |
| 48 h após atendimento | Link de avaliação no Google (sem incentivo, sem filtrar só satisfeitos) | WhatsApp | opcional |
| Retorno clínico (puericultura, ortodontia, check-up anual, mamografia anual) | Lembrete agendado | WhatsApp | **opt-in explícito**, registrado |
| Conteúdo | Blog + Instagram (reels → artigos) | orgânico | — |

Remover a newsletter por e-mail do rodapé. Se quiser lista, trocar por "Receber lembretes e novidades pelo WhatsApp" com opt-in.

---

## Eventos de analytics

Ferramenta: **Vercel Web Analytics ou Plausible (sem cookies)**, alinhado ao PLANO-MESTRE; sem banner de cookies necessário se não houver identificação. **Nunca** enviar nome, telefone, texto de mensagem ou qualquer dado de saúde como propriedade. UTMs em todos os links de Instagram, Google Business e campanhas.

| Evento | Quando | Propriedades |
|---|---|---|
| `whatsapp_click` | qualquer link `wa.me` | `local` (float, hero, página, obrigado), `pagina_tipo` (especialidade/exame/profissional/home…), `servico` (slug), `numero` (consultas/imagem/resultados) |
| `phone_click` | link `tel:` | `local`, `pagina_tipo` |
| `agendar_cta_click` | botão que leva a /agendar | `local`, `servico` |
| `form_start` | primeiro foco no formulário | `servico_preenchido` (sim/não) |
| `form_field_error` | erro de validação | `campo` (nome do campo, nunca o valor) |
| `form_submit` | envio aceito pelo servidor | `servico`, `atendimento` (particular/convenio/nao_sei), `periodo` |
| `form_to_whatsapp` | caminho "abrir no WhatsApp" do formulário | `servico` |
| `results_portal_click` | cartão em /resultados | `portal` (lab/imagem/outros) |
| `results_help_click` | "Não encontrei meu resultado" | — |
| `directions_click` | "Como chegar"/mapa | `local` |
| `convenio_view` | abrir /convenios ou seção | `convenio` (se clicado) |
| `exam_search` | busca em /exames | `tem_resultado` (sim/não), nunca o termo livre se puder conter dado pessoal; guardar só se casar com um exame cadastrado |
| `prep_view` | âncora "Preparo" vista | `exame` |
| `scroll_75` | 75% da página em especialidade/exame/blog | `pagina_tipo` |
| `links_page_click` | cliques na página `/links` (substituta do Linktree) | `destino` |
| `blog_cta_click` | CTA contextual no artigo | `servico`, `artigo` |

**Metas do painel (mensal):** conversas iniciadas pelo site (`whatsapp_click` + `form_submit`) ÷ visitantes; taxa por origem (instagram/google/gbp/direto); top 10 serviços pedidos; conclusão do formulário (`form_submit`/`form_start`); uso de /resultados. **Fechamento do ciclo:** a recepção marca no painel admin (ou por etiqueta no WhatsApp Business, pelo código `[site-…]`) se o contato virou agendamento e comparecimento. Isso dá o custo real de cada canal sem rastrear o paciente.

---

## Recomendações priorizadas

### Prioridade 1: já, mesmo no site atual (esta semana)
1. **Botão WhatsApp flutuante + links `wa.me` clicáveis** no header, rodapé e /fale-conosco (plugin simples ou HTML no Elementor). *est.* +30–60% de contatos via site.
2. **Remover o CPF** e marcar o e-mail como opcional em /agendar; adicionar checkbox de consentimento + link de privacidade (o link "Privacidade" do rodapé está sem destino). *est.* conclusão ×2.
3. **Corrigir os contadores**: valores reais no HTML (sem animar a partir de 0) e alinhar ano de fundação (CNPJ 2016 × "começou em 2020" × "4 anos").
4. **Linktree**: adicionar "Resultados de exames" e "Como chegar"; UTM no link do site.
5. **Unificar NAP** (nome, "Rua Getúlio Vargas, 471", telefones) no Google Business, Facebook, Instagram e diretórios; definir qual número é de quê.
6. **Instalar analytics** sem cookies com `whatsapp_click` para ter linha de base antes do lançamento.

### Prioridade 2: no novo site (lançamento)
1. Arquitetura de CTAs da tabela acima + barra fixa inferior no celular.
2. Formulário LGPD de 5 campos + `/obrigado` + painel de solicitações no Supabase.
3. Mensagens pré-preenchidas por especialidade/exame/profissional, geradas do CMS (campo `whatsapp_mensagem` e `whatsapp_numero` em cada especialidade/exame).
4. `/resultados` único com seletor e instruções.
5. Páginas completas de especialidade e exame (template do PLANO-MESTRE) incluindo **todo** o portfólio; a lista do formulário vem do mesmo cadastro.
6. Página `/links` própria substituindo o Linktree.
7. Plano de eventos implementado e testado (QA de cada `wa.me` e de cada evento).

### Prioridade 3: estratégico (trimestre)
1. Rotina de retorno pelo WhatsApp Business (etiquetas, respostas rápidas, lembretes com opt-in, pedido de avaliação 48 h depois). *est.* 2–3× avaliações no Google em 90 dias.
2. Unificação dos portais de resultado com os fornecedores.
3. Cadastro como prestadora em Fácil Consulta/Medprev para especialidades com agenda ociosa (COMPETITOR-REPORT).
4. Relatório mensal: contatos por canal × agendados × comparecidos.

---

## Avaliação da "página de preços"
Não há tabela de preços, o que é adequado (ética médica, variação por convênio). Substituir por **/convenios** clara + "Particular: consulte valores pelo WhatsApp" e, onde a clínica decidir, "a partir de R$ X" para exames de rotina, sem apelo promocional. Checklist aplicável: convênios visíveis ✅ (logos); como usar o convênio ❌; o que precisa levar ❌; FAQ de custos ❌; CTA "confirmar meu convênio" ❌.

## Avaliação de "isca" (lead magnet)
Não existe e não é prioridade: numa clínica local, a "isca" útil é **informação prática** que antecipa a dúvida do WhatsApp. Recomendado: guias de preparo por exame (1 página cada, imprimível) e "Checklist da primeira consulta do bebê" (pediatria + teste do pezinho/orelhinha/linguinha), ambos **sem cadastro**, terminando em CTA de WhatsApp.

## Integração com e-mail/nurture
A clínica vive de WhatsApp (PLANO-MESTRE descartou `/market-emails`). O "nurture" é a sequência de retorno acima, no WhatsApp Business, com opt-in. E-mail só como canal interno de notificação das solicitações.

## Alinhamento por origem de tráfego
| Origem | Intenção | Entrada | Funil |
|---|---|---|---|
| Instagram (bio) | média-alta | `/links` | curto: WhatsApp por finalidade |
| Instagram (reel/story de tema) | média | `/especialidades/x` ou `/exames/x` ou artigo | médio: conteúdo → CTA contextual |
| Google "[serviço] Corrente" | alta | página do serviço | curto: preparo/convênio → WhatsApp |
| Google marca "EmCORR" | alta | home / resultados | curto: WhatsApp ou resultados |
| Google Business (Maps) | muito alta | `/agendar?utm_source=gbp` | curto: ligar/WhatsApp/como chegar |
| Indicação | alta | `/corpo-clinico/x` | curto: "Agendar com Dr(a). X" |
| Paciente atual | resultado/retorno | `/resultados` | serviço, não venda |

## Próximos passos
1. Levantar com a clínica: números oficiais por finalidade, horário de funcionamento, tempo de resposta real, quem monitora as solicitações do /agendar atual, classificação exame → portal, volume mensal de atendimentos.
2. Aplicar a Prioridade 1 no site atual (dá linha de base de analytics antes do lançamento).
3. Levar CTAs, formulário, mensagens e eventos para o wireframe (`/market-landing`) e a copy (`/market-copy`); modelar `whatsapp_numero`/`whatsapp_mensagem` e `agendamento_solicitacoes` no Supabase.

---
*Fontes: emcorr.com.br (páginas citadas, 28/09/2026), instagram.com/centro_clinico_emcorr, linktr.ee/CentroClinicoEmCORR, emcorr.uniexames.com.br, entregadeexames.com.br, resultados.emcorr.com.br, diretórios de CNPJ (fundação 13/10/2016, fixo (89) 3573-1881).*
