import type { APIRoute } from 'astro';
import { site, equipe } from '../data/site';
import { especialidadesAtivas, examesAtivos } from '../lib';
export const GET: APIRoute = () => {
  const b = 'https://emcorr.com.br';
  const txt = `# ${site.nome}

> Clínica médica e odontológica em ${site.endereco.cidade}-${site.endereco.uf}, desde ${site.fundacao}. Consulta, dentista, laboratório e tomografia no mesmo endereço: ${site.endereco.rua}, ${site.endereco.bairro}. WhatsApp ${site.whatsappExibicao}. Convênios: ${site.convenios.map((c) => c.nome).join(', ')} e particular. Responsável técnica: ${site.rt.nome}, ${site.rt.registro}, ${site.rt.rqe}.

## Especialidades
${especialidadesAtivas.map((e) => `- [${e.nome}](${b}/especialidades/${e.slug}): ${e.resumo}`).join('\n')}

## Exames
${examesAtivos.map((x) => `- [${x.nome}](${b}/exames/${x.slug}): ${x.resumo ?? ''}`).join('\n')}

## Profissionais
${equipe.map((p) => `- [${p.nomeCompleto}](${b}/corpo-clinico/${p.slug}): ${p.funcao}, ${p.registro}${p.rqe ? `, ${p.rqe}` : ''}`).join('\n')}

## Páginas úteis
- [Convênios](${b}/convenios)
- [Resultados de exames](${b}/resultados)
- [Agendar](${b}/agendar)
- [Sobre](${b}/sobre)
`;
  return new Response(txt, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
