import especialidades from './data/especialidades.json';
import exames from './data/exames.json';
import categorias from './data/categorias.json';
import { equipe } from './data/site';

export type Rec = Record<string, any>;
// Campos do YAML de copy podem vir como {valor, padrao_referencia}; devolve só o valor.
export const val = (x: any) => (x && typeof x === 'object' && !Array.isArray(x) && 'valor' in x ? x.valor : x);
export const lista = (x: any): string[] => { const v = val(x); return !v ? [] : Array.isArray(v) ? v : [String(v)]; };

export const especialidadesAtivas = (especialidades as Rec[]).filter((e) => e.ativo !== false);
export const examesAtivos = (exames as Rec[]).filter((e) => e.ativo !== false && e.pagina_propria !== false && !e.redirect_301_para);
export const categoriasExame = categorias as Rec[];
export const exame = (slug: string) => examesAtivos.find((e) => e.slug === slug);
export const especialidade = (slug: string) => especialidadesAtivas.find((e) => e.slug === slug);
export const profissional = (slug: string) => equipe.find((p) => p.slug === slug || p.slug.endsWith(slug));
export const profissionaisDa = (esp: string) => equipe.filter((p) => p.especialidades.includes(esp));

export const iconeEspecialidade: Record<string, string> = {
  pediatria: 'baby', cardiologia: 'heart', endocrinologia: 'flask', neurologia: 'neuro', psiquiatria: 'brain',
  'cirurgia-geral': 'scalpel', otorrinolaringologia: 'ear', ortopedia: 'bone', odontologia: 'tooth', ortodontia: 'tooth',
  odontopediatria: 'tooth', nutricao: 'apple', psicologia: 'brain', fonoaudiologia: 'voice', fisioterapia: 'move',
};
export const iconeCategoria: Record<string, string> = {
  imagem: 'scan', 'coracao-e-circulacao': 'heart', 'ouvido-nariz-e-garganta': 'ear', pulmao: 'lungs', 'recem-nascido': 'baby', laboratorio: 'flask',
};
export const grupos: [string, string[]][] = [
  ['Crianças', ['pediatria', 'odontopediatria', 'fonoaudiologia']],
  ['Adultos', ['cardiologia', 'endocrinologia', 'neurologia', 'otorrinolaringologia', 'ortopedia', 'cirurgia-geral']],
  ['Dentes', ['odontologia', 'ortodontia']],
  ['Corpo e mente', ['psicologia', 'psiquiatria', 'nutricao', 'fisioterapia']],
];
