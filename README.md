# EmCORR – Centro Clínico · site novo

Site da EmCORR (Corrente-PI) em Astro, estático, publicado na Vercel.

## Rodar
```bash
npm install
npm run dev
```

## Estrutura
- `src/data/site.ts` — dados da clínica (endereço, WhatsApp, convênios, equipe). Campos `null` ficam escondidos no site.
- `src/data/especialidades.json`, `exames.json`, `categorias.json` — copy de cada página, gerada de `docs/COPY-ESPECIALIDADES-EXAMES.md`.
- `src/pages/` — páginas. `vercel.json` — redirecionamentos 301 das URLs do site antigo.
- `docs/` — auditorias, plano, design e copy.

## Indexação
O site só libera o Google quando a variável `PUBLIC_INDEXAR=true` estiver definida (usar no domínio oficial). Sem ela, todas as páginas saem com `noindex`.

## Próximas etapas
Painel administrativo (Supabase), blog com editor e agendamento de posts — ver `docs/ARQUITETURA.md` e `docs/PLANO-SITE.md`.
