# Plano Mestre — Novo site EmCORR (índice da pasta)
**Atualizado:** 28/09/2026 · **Status:** auditorias, captura, direção visual, arquitetura e copy concluídas → pronto para iniciar a construção (PLANO-SITE.md)

**Decisões fechadas:** Astro 7.3 + Tailwind 4 · Vercel · Supabase + painel `/admin` próprio · blog · fundação 2020 · go-live 10/11/2026 · direção visual "Moderno acolhedor" (vermelho #EB1A20 + Poppins preservados).

---

## Comece por aqui
1. **[PLANO-SITE.md](PLANO-SITE.md):** cronograma de 6 semanas, backlog, metas, pendências da clínica e ferramentas.
2. **[DESIGN.md](DESIGN.md):** direção visual, tokens, componentes e layout das páginas.
3. **[ARQUITETURA.md](ARQUITETURA.md):** stack, banco, RLS, admin, LGPD e migração.

## Entregáveis
| Fase | Arquivo | Resumo |
|---|---|---|
| Captura | [CONTENT-INVENTORY.md](CONTENT-INVENTORY.md) + `scrape/emcorr/` | 64 páginas, 31 imagens, 52 CSS; 13 especialidades, 22+ exames, 11 profissionais; mapa de 301; checklist de pedidos |
| Mercado | [COMPETITOR-REPORT.md](COMPETITOR-REPORT.md) | Posição moderada; Policlínica e SUS são as ameaças; espaço "família + completo" livre |
| Marca | [BRAND-VOICE.md](BRAND-VOICE.md) | Arquétipo Amigo + Guia; tagline mantida; exemplos de texto |
| GEO | [GEO-AUDIT-REPORT.md](GEO-AUDIT-REPORT.md) | 29/100; sem schema, sem H1, sem llms.txt; requisitos para o Astro |
| Autoridade | [BRAND-MENTIONS.md](BRAND-MENTIONS.md) | 5/100; NAP com 6 variações; plano de citações |
| SEO | [SEO-AUDIT.md](SEO-AUDIT.md) | 31/100; URLs definitivas, títulos e metas, 301, 24 pautas, cidades |
| Busca | [KEYWORD-STRATEGY.md](KEYWORD-STRATEGY.md) | Palavra-chave → página; estrutura de Google Ads pronta para o futuro |
| Público | [AUDIENCE-PERSONAS.md](AUDIENCE-PERSONAS.md) | 7 personas |
| Funil | [FUNNEL-ANALYSIS.md](FUNNEL-ANALYSIS.md) | 34/100; WhatsApp, formulário sem CPF, eventos |
| Home | [LANDING-CRO.md](LANDING-CRO.md) | 31/100; wireframe da nova home em 12 seções |
| Copy | [COPY-SITE-INSTITUCIONAL.md](COPY-SITE-INSTITUCIONAL.md) · [COPY-ESPECIALIDADES-EXAMES.md](COPY-ESPECIALIDADES-EXAMES.md) | Todas as páginas; 16 especialidades + 24 exames em YAML |
| Visual | [DESIGN.md](DESIGN.md) · `DESIGN-REFS/` | 6 referências (Tia, One Medical, Sabin, Parsley, Fleury, AmorSaúde) + 15 screenshots |
| Redes | [SOCIAL-CALENDAR.md](SOCIAL-CALENDAR.md) | 90 dias, 47 posts, 12 roteiros, bio → /links (mover lançamento para 11/11) |
| Lançamento | [LAUNCH-PLAYBOOK.md](LAUNCH-PLAYBOOK.md) | Go-live 10/11, checklist, rollback, KPIs 30/60/90 |

## Skills usadas
`market-competitors`, `market-brand`, `geo-audit`, `geo-brand-mentions`, `market-seo`, `ads-keywords`, `ads-audience`, `market-funnel`, `market-landing`, `market-copy` (×2), `market-social`, `market-launch`, `firecrawl` (referências visuais).
**Na construção:** `geo-schema`, `geo-llmstxt`, `fixing-metadata`, `fixing-accessibility`, `baseline-ui`, `fixing-motion-performance`, Impeccable.
**Pós-lançamento:** `geo-compare`.
