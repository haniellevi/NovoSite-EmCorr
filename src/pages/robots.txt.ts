import type { APIRoute } from 'astro';
// Enquanto o site novo não estiver no domínio oficial, bloqueia indexação.
export const GET: APIRoute = () => {
  const indexar = import.meta.env.PUBLIC_INDEXAR === 'true';
  const body = indexar
    ? 'User-agent: *\nAllow: /\n\nUser-agent: GPTBot\nAllow: /\nUser-agent: ClaudeBot\nAllow: /\nUser-agent: PerplexityBot\nAllow: /\nUser-agent: Google-Extended\nAllow: /\n\nSitemap: https://emcorr.com.br/sitemap-index.xml\n'
    : 'User-agent: *\nDisallow: /\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
