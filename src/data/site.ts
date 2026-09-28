// Dados globais do site. Fonte: site atual (emcorr.com.br) e vídeo institucional (ver docs/FATOS-DO-SITE.md).
// Campos `null` ainda não foram informados pela clínica: o site esconde o bloco em vez de mostrar texto vazio.
// chisle: dados em arquivo até o painel (Supabase) existir; a mesma forma vira a tabela site_settings.

export const site = {
  nome: 'EmCORR – Centro Clínico',
  marca: 'EmCORR',
  fundacao: 2020,
  cnpj: '26.343.832/0001-02',
  endereco: {
    rua: 'Av. Getúlio Vargas, 471',
    bairro: 'Centro',
    cidade: 'Corrente',
    uf: 'PI',
    cep: '64980-000',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=EmCORR+Centro+Cl%C3%ADnico+Av.+Get%C3%BAlio+Vargas+471+Corrente+PI',
  whatsapp: '5589999331133',
  whatsappExibicao: '(89) 9 9933-1133',
  telefone: '558935732877',
  telefoneExibicao: '(89) 3573-2877',
  email: 'atendimento@emcorr.com.br',
  instagram: 'https://www.instagram.com/centro_clinico_emcorr/',
  facebook: 'https://www.facebook.com/emcorrcentroclinico',
  horario: null as null | { semana: string; sabado?: string },
  numeros: { atendimentos: '30 mil', profissionais: 14, exames: 24, especialidades: 15 },
  convenios: [
    { nome: 'Medplan', logo: '/img/medplan.png' },
    { nome: 'Humana Saúde', logo: '/img/humana.png' },
    { nome: 'Camed', logo: '/img/camed.png' },
  ],
  rt: { nome: 'Dra. Ludmilla Nery Custódio', registro: 'CRM-PI 5888', rqe: 'RQE 2142' },
  portais: {
    laboratorio: { nome: 'Portal do laboratório', url: 'https://emcorr.uniexames.com.br' },
    radiologia: { nome: 'Portal de imagem (Entrega de Exames)', url: 'https://entregadeexames.com.br' },
    outros: { nome: 'Portal EmCORR', url: 'https://resultados.emcorr.com.br' },
  },
};

export const enderecoCompleto = `${site.endereco.rua}, ${site.endereco.bairro}, ${site.endereco.cidade}-${site.endereco.uf}`;

export function wa(mensagem = 'Olá, vim pelo site da EmCORR e quero agendar um atendimento.') {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

// Só profissionais com registro no conselho publicado aparecem no site (CFM 2.336/2023).
export const equipe = [
  {
    slug: 'dra-ludmilla-nery', nome: 'Dra. Ludmilla Nery', nomeCompleto: 'Dra. Ludmilla Nery Custódio',
    funcao: 'Cardiologista · diretora médica', especialidade: 'cardiologia', especialidades: ['cardiologia'], registro: 'CRM-PI 5888', rqe: 'RQE 2142',
    foto: '/img/equipe/ludmilla-nery.jpg', fotoGrande: '/img/equipe/ludmilla-nery.jpg', area: 'Coração', publico: 'Adultos e idosos',
    atende: ['Pressão alta', 'Palpitação e cansaço ao subir escada', 'Avaliação antes de cirurgia (risco cirúrgico)', 'Acompanhamento de quem já tem doença do coração'],
    exames: ['eletrocardiograma', 'ecocardiograma', 'holter-24-horas', 'mapa-24-horas', 'doppler-de-carotidas'],
  },
  {
    slug: 'dr-danilo-lustosa', nome: 'Dr. Danilo Lustosa', nomeCompleto: 'Dr. Danilo Lustosa',
    funcao: 'Ortopedista e traumatologista', especialidade: 'ortopedia', especialidades: ['ortopedia'], registro: 'CRM-PI 8275', rqe: 'RQE 3597',
    foto: '/img/equipe/danilo-lustosa.jpg', fotoGrande: '/img/equipe/danilo-lustosa.jpg', area: 'Ossos e articulações', publico: 'Crianças e adultos',
    atende: ['Dor nas costas, no joelho e no ombro', 'Torções, fraturas e lesões do esporte', 'Acompanhamento de artrose e tendinite'],
    exames: ['raio-x', 'ultrassonografia'],
  },
  {
    slug: 'dra-osyanne-timoteo', nome: 'Dra. Osyanne Timóteo', nomeCompleto: 'Dra. Osyanne Timóteo',
    funcao: 'Otorrinolaringologista', especialidade: 'otorrinolaringologia', especialidades: ['otorrinolaringologia'], registro: 'CRM-PI 5702', rqe: 'RQE 3870',
    foto: '/img/equipe/osyanne-timoteo.jpg', fotoGrande: '/img/equipe/osyanne-timoteo.jpg', area: 'Ouvido, nariz e garganta', publico: 'Crianças e adultos',
    atende: ['Dor de ouvido e perda de audição', 'Sinusite, rinite e nariz entupido', 'Dor de garganta frequente e ronco'],
    exames: ['audiometria', 'imitanciometria', 'nasofibroscopia'],
  },
  {
    slug: 'dr-igor-rafael', nome: 'Dr. Igor Rafael', nomeCompleto: 'Dr. Igor Rafael',
    funcao: 'Cirurgião-dentista · atua em ortodontia e implantodontia', especialidade: 'ortodontia', especialidades: ['odontologia', 'ortodontia'], registro: 'CRO-PI 2031', rqe: null,
    foto: '/img/equipe/igor-rafael.jpg', fotoGrande: '/img/equipe/igor-rafael.jpg', area: 'Dentes', publico: 'Crianças e adultos',
    atende: ['Aparelho ortodôntico', 'Implantes dentários', 'Avaliação odontológica'],
    exames: ['raio-x-panoramico', 'tomografia-odontologica'],
  },
  {
    slug: 'dra-mariana-vargas', nome: 'Dra. Mariana Vargas', nomeCompleto: 'Dra. Mariana Vargas',
    funcao: 'Cirurgiã-dentista', especialidade: 'odontologia', especialidades: ['odontologia'], registro: 'CRO-PI 5687', rqe: null,
    foto: '/img/equipe/mariana-vargas.jpg', fotoGrande: '/img/equipe/mariana-vargas.jpg', area: 'Dentes', publico: 'Crianças e adultos',
    atende: ['Avaliação e limpeza', 'Restaurações e tratamento de cárie', 'Orientação de higiene bucal'],
    exames: ['raio-x-panoramico'],
  },
  {
    slug: 'anaeliza-petersen', nome: 'Anaeliza Petersen', nomeCompleto: 'Anaeliza Petersen',
    funcao: 'Psicóloga', especialidade: 'psicologia', especialidades: ['psicologia'], registro: 'CRP-21/04429', rqe: null,
    foto: '/img/equipe/anaeliza-petersen.jpg', fotoGrande: '/img/equipe/anaeliza-petersen.jpg', area: 'Mente', publico: 'Adolescentes e adultos',
    atende: ['Ansiedade e estresse', 'Tristeza persistente e luto', 'Conflitos na família e no trabalho'],
    exames: [],
  },
  {
    slug: 'dr-jeam-felix', nome: 'Dr. Jeam Félix', nomeCompleto: 'Dr. Jeam Félix',
    funcao: 'Médico', especialidade: '', especialidades: [], registro: 'CRM-PI 2124', rqe: null,
    foto: '/img/equipe/jeam-felix.jpg', fotoGrande: '/img/equipe/jeam-felix.jpg', area: 'Adultos', publico: 'Adultos',
    atende: ['Consulta médica', 'Avaliação de sintomas e pedido de exames', 'Renovação de receitas e acompanhamento'],
    exames: ['exames-laboratoriais'],
  },
  {
    slug: 'dr-jordao-aires', nome: 'Dr. Jordão Aires', nomeCompleto: 'Dr. Jordão Aires',
    funcao: 'Médico', especialidade: '', especialidades: [], registro: 'CRM-PI 9764', rqe: null,
    foto: '/img/equipe/jordao-aires.jpg', fotoGrande: '/img/equipe/jordao-aires.jpg', area: 'Adultos', publico: 'Adultos',
    atende: ['Consulta médica', 'Avaliação de sintomas e pedido de exames', 'Renovação de receitas e acompanhamento'],
    exames: ['exames-laboratoriais'],
  },
  {
    slug: 'dr-vinicius-coelho', nome: 'Dr. Vinícius Coelho', nomeCompleto: 'Dr. Vinícius Coelho',
    funcao: 'Médico', especialidade: '', especialidades: [], registro: 'CRM-PI 10086', rqe: null,
    foto: '/img/equipe/vinicius-coelho.jpg', fotoGrande: '/img/equipe/vinicius-coelho.jpg', area: 'Adultos', publico: 'Adultos',
    atende: ['Consulta médica', 'Avaliação de sintomas e pedido de exames', 'Renovação de receitas e acompanhamento'],
    exames: ['exames-laboratoriais'],
  },
];
