# DESIGN.md — EmCORR "Moderno acolhedor"
**Base:** identidade atual do site (vermelho + Poppins + cards brancos sobre faixas vermelhas + ícones de linha + botões pill), evoluída com neutros quentes, respiro e fotos reais.
**Referências:** DESIGN-REFS/SINTESE.md (Direção 3) · Tia, Sabin, Fleury (estrutura), One Medical/Parsley (diretório e blog). Screenshots em `DESIGN-REFS/screens/`.
**Fonte da identidade atual:** Elementor global kit (`scrape/emcorr/css/*post_7.css`): primary `#EB1A20`, secondary `#C0090E`, accent `#C21419`, text `#383838`, Poppins 600/400/500.

---

## 1. Princípios
1. **Reconhecível no primeiro segundo.** O paciente que conhece a EmCORR precisa sentir que é a mesma clínica: mesmo vermelho, mesma fonte, mesmo logo.
2. **Caloroso, não hospitalar.** Neutros quentes no lugar de cinza e branco puro em tudo. Fotos de gente de verdade.
3. **O WhatsApp sempre à mão.** Todo scroll termina num CTA; no mobile há uma barra fixa.
4. **Clareza antes de enfeite.** Uma ideia por seção, hierarquia forte, movimento discreto.
5. **Acessível por padrão.** WCAG 2.2 AA, alvos de toque ≥ 44 px, leitura confortável para quem tem 60+.

---

## 2. Cor

### Tokens
| Token | Hex | Uso |
|---|---|---|
| `--red-500` (marca) | `#EB1A20` | Logo, ícones, faixas vermelhas grandes, sublinhados, destaques. **Não usar como fundo de texto pequeno branco** (4,47:1) |
| `--red-550` (botão) | `#E4181E` | Fundo do botão primário com texto branco (4,72:1 ✔). Visualmente idêntico à marca |
| `--red-700` | `#C0090E` | Hover do botão, faixa vermelha com texto (branco 6,39:1 ✔), links em texto (6,39:1 sobre branco, 5,74:1 sobre creme) |
| `--red-650` (acento) | `#C21419` | Estados ativos, chip selecionado, borda de foco |
| `--wine-900` | `#6E0A0E` | Rodapé e faixa final de CTA (branco 12,3:1) |
| `--rose-50` | `#FDECEC` | Fundo de ícone, badge, chip ativo (texto `--red-700` 5,59:1 ✔) |
| `--cream-50` | `#F6F2EE` | Fundo de seção alternado com branco |
| `--sand-200` | `#EAE3DC` | Bordas, inputs, divisórias, card secundário |
| `--white` | `#FFFFFF` | Cards, fundo base |
| `--ink-900` | `#231F1F` | Títulos (14,6:1 sobre creme) |
| `--ink-700` | `#383838` | Corpo de texto (11,7:1) — cor atual da marca |
| `--ink-500` | `#6B6360` | Legendas e metadados (5,87:1 branco, 5,27:1 creme) |
| `--success` | `#1E8E5A` | Só confirmação de formulário |
| `--whatsapp` | `#25D366` | **Só** o ícone do WhatsApp (o botão continua vermelho) |

### Regras
- Proporção por tela: ~70% branco e creme, ~20% texto, **até 10% de vermelho**. O vermelho aparece em CTAs, ícones e **no máximo uma faixa vermelha por página**.
- Texto vermelho sobre fundo claro: sempre `--red-700`.
- Nenhuma segunda cor forte (sem azul, verde ou turquesa clínico).
- Sem gradientes, exceto um véu escuro (`rgba(35,31,31,.45)`) sobre foto quando houver texto por cima.

---

## 3. Tipografia
**Família única: Poppins** (self-hosted, subset latin + latin-ext, `font-display: swap`). Pesos 400, 500, 600 e 500 itálico, este só para a palavra de ênfase do H1.

| Estilo | Desktop | Mobile | Peso | Entrelinha | Tracking |
|---|---|---|---|---|---|
| Display (H1 home) | 60 | 36 | 600 | 1.1 | −1% |
| H1 interno | 48 | 32 | 600 | 1.15 | −1% |
| H2 | 36 | 28 | 600 | 1.2 | −0,5% |
| H3 | 28 | 22 | 600 | 1.25 | 0 |
| H4 / título de card | 22 | 20 | 600 | 1.3 | 0 |
| Corpo L (lead) | 20 | 18 | 400 | 1.6 | 0 |
| Corpo | 18 | 17 | 400 | 1.65 | 0 |
| Corpo S | 16 | 16 | 400 | 1.6 | 0 |
| UI / botão | 16 | 16 | 500 | 1 | +0,5% |
| Eyebrow | 13 | 13 | 600, caixa alta | 1.2 | +8% |
| Legenda | 14 | 14 | 400 | 1.5 | 0 |

- Corpo mínimo de 17 px no mobile (público 50+).
- Largura de leitura: 60–72 caracteres (`max-width: 68ch`) em artigos e páginas de exame.
- Ênfase: uma palavra do H1 da home em 500 itálico e `--red-700` ("de quem você *ama*").
- Números (estatísticas, horários): `font-variant-numeric: tabular-nums`.

---

## 4. Espaço, grid e forma
- **Escala de espaço (px):** 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128.
- **Seção:** 96 px de padding vertical no desktop e 64 px no mobile.
- **Container:** 1200 px (conteúdo) · 1360 px (faixas-cartão) · gutter 24 px no desktop e 16 px no mobile.
- **Grid:** 12 colunas no desktop, 6 no tablet e 4 no mobile.
- **Raio:** 12 (inputs e chips) · 20 (cards) · 24 (fotos) · 32 (faixa-cartão vermelha) · pill (botões).
- **Sombra (só no que é clicável):** `--shadow-card: 0 8px 24px rgba(60,20,20,.08)`; hover `0 12px 32px rgba(60,20,20,.12)`.
- **Borda:** 1 px `--sand-200`.

---

## 5. Imagem e iconografia
- **Fotos reais da EmCORR** (fachada, recepção, consultórios, tomógrafo, equipe). Luz natural quente, pessoas interagindo e não posando. Proibido usar banco de imagem com médico de jaleco sorrindo para a câmera.
- **Retratos da equipe:** padronizados, com mesmo fundo creme e luz, proporção 4:5 e raio de 24 px. Na listagem, recorte circular de 96 px.
- **Fases da vida (home):** 6 fotos verticais 3:4 (bebê, criança, adolescente, adulto, gestante/mulher, 60+). Enquanto não houver fotos próprias, usar ilustração de linha vermelha (nunca foto falsa de "paciente").
- **Ícones:** set de linha único (Lucide ou Phosphor, traço 1,75 px) em `--red-500`, dentro de círculo `--rose-50` de 56 px. Redesenhar os ícones atuais nesse padrão.
- **Logo:** manter o atual. **Pendente o vetor** (o PNG atual tem 157×58 px). No header: 40 px de altura no desktop e 32 px no mobile. Versão branca sobre vinho no rodapé.
- **Nada de texto dentro de imagem** (o banner atual da tomografia tem texto embutido) → texto sempre em HTML.

---

## 6. Componentes

| Componente | Especificação |
|---|---|
| **Botão primário** | Pill, altura 52 (desktop) / 48 (mobile), padding 0 28px, `--red-550` + texto branco 500 16px; ícone à esquerda (WhatsApp) ou seta à direita. Hover `--red-700` + seta desliza 4px. Foco: anel 3px `--red-650` com offset 2px |
| **Botão secundário** | Pill, contorno 1,5px `--red-700`, texto `--red-700`, fundo transparente; hover fundo `--rose-50` |
| **Botão terciário / link** | Texto `--red-700` 500 + seta; sublinhado no hover |
| **Header desktop** | 80px, fundo branco; logo · menu (Especialidades ▾, Exames ▾, Corpo clínico, Convênios, Blog) · "Resultados" (secundário) · "Agendar" (primário). Sticky com sombra ao rolar |
| **Header mobile** | 64px; logo · botão de ícone WhatsApp · hambúrguer. Menu em tela cheia com acordeões e CTA no pé |
| **Barra fixa mobile** | Base da tela, 72px + safe-area; "Agendar pelo WhatsApp" (primário, 2/3) + "Resultados" (secundário, 1/3). Some quando o teclado abre |
| **Barra utilitária** | 36px, `--cream-50`: horário de hoje · telefone · Acessibilidade. Aviso de campanha opcional em `--wine-900` |
| **Hero da home** | Duas colunas (texto 6 / foto 6); H1 display, lead, 4 checks vermelhos, 2 CTAs e foto real 4:5 com raio 24. Mobile: texto primeiro, foto 16:10 abaixo. **Sem carrossel** |
| **Grade de atalhos** | 5 cards horizontais com ícone (Agendar · Resultados · Preparo de exames · Convênios · Como chegar), fundo branco sobre creme, altura 88 |
| **Faixa de confiança** | Selos com borda fina: "Desde 2020 em Corrente" · "[[N]] especialidades" · "Consulta e exame no mesmo lugar" · logos de convênios em tons de cinza quente (cor no hover) |
| **Card de especialidade** | Branco, raio 20, padding 24; ícone em círculo rosa, título H4, resumo (≤140 caracteres), link "Conhecer" → card inteiro clicável |
| **Card fase da vida** | Foto 3:4 raio 24 + rótulo sobre véu escuro na base; leva às especialidades da fase |
| **Faixa-cartão vermelha** | `--red-700` (texto branco), raio 32, margem lateral no desktop; usada em "Consulta e exame no mesmo lugar" ou no CTA intermediário. Uma por página |
| **Card de exame** | Linha de lista com ícone, nome, 1 linha de descrição, chip da categoria e seta; filtro com chips + busca no topo de /exames |
| **Card de profissional** | Foto circular 96, nome (H4), especialidade, **registro (CRM/CRO + RQE) visível**, dias de atendimento em chips, "Agendar com Dra. X" |
| **FAQ** | `<details>` nativo, borda inferior `--sand-200`, chevron que gira, pergunta 500 18px |
| **Depoimento** | Card creme, aspas grandes `--rose-50`, texto 18px, nome e cidade; carrossel com scroll-snap (sem autoplay) |
| **Passos (como funciona)** | 4 colunas numeradas: WhatsApp → recepção confirma → consulta/exame → resultado/retorno |
| **Formulário** | Input 52px, raio 12, borda `--sand-200`, foco em `--red-650`; label sempre visível acima; ajuda em `--ink-500`; erro em `--red-700` com ícone e texto; checkbox de consentimento 24px |
| **Chips/pílulas** | 36px, raio pill, borda `--sand-200`; ativo = fundo `--rose-50` + texto `--red-700` |
| **Breadcrumb** | 14px `--ink-500`, separador "/" |
| **Artigo do blog** | Eyebrow da categoria, H1, autor com foto e CRM, "Revisado por … em …", tempo de leitura, sumário clicável (sticky no desktop), corpo 68ch, callouts `--cream-50`, "Leia também" e CTA do serviço relacionado |
| **Rodapé** | `--wine-900`, texto branco/80%; logo branco, NAP completo, horários, mapa estático, links, redes, CRM do responsável técnico, "Política de privacidade" |
| **Botão flutuante WhatsApp (desktop)** | Círculo 60px `--red-550` com ícone branco, canto inferior direito; tooltip "Fale com a recepção" |

---

## 7. Movimento
- Duração: 150 ms (hover) · 250 ms (acordeão, menu) · 400 ms (entrada de seção).
- Easing: `cubic-bezier(.2,.7,.2,1)`.
- Entrada de seção: fade + 12 px de translação, uma vez, via `IntersectionObserver`.
- Hover em card: elevar a sombra e zoom de 1,03 na foto.
- Faixa de "sintomas e condições" rolando lentamente, com pausa no hover.
- `prefers-reduced-motion: reduce` desliga tudo, exceto mudanças de cor.
- Proibido: parallax pesado, autoplay de carrossel, contador animado de números (hoje ele renderiza "0+" para robôs).

---

## 8. Layout das páginas-chave (resumo; copy em COPY-SITE-INSTITUCIONAL.md)
- **Home:** barra utilitária → header → hero → grade de atalhos → faixa de confiança → fases da vida → especialidades (6 cards + "ver todas") → faixa-cartão vermelha "Consulta e exame no mesmo lugar" (tomografia, laboratório, cardio) → como funciona → corpo clínico (4 cards) → depoimentos → sobre (foto da fachada, voz da marca) → FAQ → resultados (faixa curta) → como chegar + CTA final em vinho → rodapé.
- **Especialidade:** breadcrumb → hero curto (H1 + benefício + CTA + ícone grande) → "Como é a consulta na EmCORR" → "Quando procurar" (checklist) → quem atende (cards de profissional) → exames relacionados (chips) → convênios → FAQ → CTA final.
- **Exame:** breadcrumb → H1 + resumo + chips (duração, prazo do resultado, convênios) → "Para que serve / quando é pedido" → **Preparo (checklist destacada, com botão "Enviar preparo por WhatsApp")** → como funciona → onde ver o resultado → FAQ → CTA.
- **Corpo clínico:** busca + chips (especialidade, atende crianças, dia) → grade de cards.
- **Blog:** destaque + abas de categoria em pílula + grade 3 colunas; artigo como no §6.

---

## 9. Tokens para o código (Tailwind 4 `@theme`)
```css
@theme {
  --font-sans: "Poppins", ui-sans-serif, system-ui, sans-serif;

  --color-red-500: #EB1A20;  --color-red-550: #E4181E;
  --color-red-650: #C21419;  --color-red-700: #C0090E;
  --color-wine-900: #6E0A0E; --color-rose-50: #FDECEC;
  --color-cream-50: #F6F2EE; --color-sand-200: #EAE3DC;
  --color-ink-900: #231F1F;  --color-ink-700: #383838; --color-ink-500: #6B6360;
  --color-success: #1E8E5A;

  --radius-input: 12px; --radius-card: 20px; --radius-photo: 24px; --radius-band: 32px;
  --shadow-card: 0 8px 24px rgb(60 20 20 / .08);
  --shadow-card-hover: 0 12px 32px rgb(60 20 20 / .12);
  --ease-out-soft: cubic-bezier(.2,.7,.2,1);
}
```

---

## 10. Anti-padrões (não fazer)
Carrossel de banners no hero · texto dentro de imagem · stock photo genérica · azul/turquesa "clínico" · gradiente roxo "de IA" · glassmorphism · caixa alta gritada em título · pop-up de newsletter ou modal na entrada · contador animado · mais de uma faixa vermelha por página · vermelho `#EB1A20` como cor de texto pequeno · ícones 3D ou de estilos misturados.

---

## 11. Checklist de QA visual (antes de publicar cada página)
- [ ] Contraste AA em todos os textos (script de contraste + Lighthouse)
- [ ] Foco visível em todo elemento interativo; navegação completa por teclado
- [ ] 320 px sem rolagem horizontal; alvos ≥ 44 px
- [ ] LCP < 2,0 s (hero com `fetchpriority="high"`, AVIF)
- [ ] Nenhum marcador `[[PREENCHER]]` visível
- [ ] CRM/CRO + RQE em todo lugar onde um profissional aparece
- [ ] Revisão com `/impeccable audit` e `baseline-ui`
