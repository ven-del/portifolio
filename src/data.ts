import type { Project, SocialLink, TechSkill } from './types';
import imagemAmazonQ from "./assets/images/amazonQ.png";
import imagemCosmicWings from "./assets/images/cosmic-wings.jpg";
import imagemPortifolio from "./assets/images/portifolio.png";
import imagemFlappyBird from "./assets/images/flappybird.png";
import imagemCurriculo from "./assets/images/curriculo.png";
// import imagemUnderConstruction from "./assets/images/under-construction.jpg";
import imagemCalendarioSeletivo from "./assets/images/calendarioseletivo.png";
import imagemFormulario from "./assets/images/formulario.png";
import imagemLabRental from "./assets/images/lab-rental.png";
import pokedexImage from "./assets/images/pokedex.png";
import ibgeImage from "./assets/images/ibge.png";
import treinoFacilImage from "./assets/images/treinofacil-landing.png"
import imagemListaDinamica from "./assets/images/lista-dinamica.png";

export const techSkills: TechSkill[] = [
  // Web Development
  {
    id: 'html',
    name: 'HTML',
    icon: 'https://skillicons.dev/icons?i=html',
    category: 'web'
  },
  {
    id: 'css',
    name: 'CSS',
    icon: 'https://skillicons.dev/icons?i=css',
    category: 'web'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: 'https://skillicons.dev/icons?i=js',
    category: 'web'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: 'https://skillicons.dev/icons?i=ts',
    category: 'web'
  },
  
  // Frameworks & Libraries
  {
    id: 'react',
    name: 'React',
    icon: 'https://skillicons.dev/icons?i=react',
    category: 'framework'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    icon: 'https://skillicons.dev/icons?i=tailwind',
    category: 'framework'
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    icon: 'https://skillicons.dev/icons?i=bootstrap',
    category: 'framework'
  },
  {
    id: 'vite',
    name: 'Vite',
    icon: 'https://skillicons.dev/icons?i=vite',
    category: 'framework'
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    icon: 'https://skillicons.dev/icons?i=nodejs',
    category: 'framework'
  },
  {
    id: 'supabase',
    name: 'Supabase',
    icon: 'https://skillicons.dev/icons?i=supabase',
    category: 'framework'
  },
  
  // Programming Languages
  {
    id: 'python',
    name: 'Python',
    icon: 'https://skillicons.dev/icons?i=python',
    category: 'language'
  },
  {
    id: 'php',
    name: 'PHP',
    icon: 'https://skillicons.dev/icons?i=php',
    category: 'language'
  },
  {
    id: 'java',
    name: 'Java',
    icon: 'https://skillicons.dev/icons?i=java',
    category: 'language'
  },
  {
    id: 'csharp',
    name: 'C#',
    icon: 'https://skillicons.dev/icons?i=cs',
    category: 'language'
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    icon: 'https://skillicons.dev/icons?i=kotlin',
    category: 'language'
  },
  
  // Game Development
  {
    id: 'unity',
    name: 'Unity',
    icon: 'https://skillicons.dev/icons?i=unity',
    category: 'gamedev'
  },
  {
    id: 'unreal',
    name: 'Unreal Engine',
    icon: 'https://skillicons.dev/icons?i=unreal',
    category: 'gamedev'
  },
  
  // Version Control
  {
    id: 'git',
    name: 'Git',
    icon: 'https://skillicons.dev/icons?i=git',
    category: 'version-control'
  },
  {
    id: 'github',
    name: 'GitHub',
    icon: 'https://skillicons.dev/icons?i=github',
    category: 'version-control'
  },
  
  // Operating Systems
  {
    id: 'linux',
    name: 'Linux',
    icon: 'https://skillicons.dev/icons?i=linux',
    category: 'os'
  },
  {
    id: 'windows',
    name: 'Windows',
    icon: 'https://skillicons.dev/icons?i=windows',
    category: 'os'
  },
  
  // Tools
  {
    id: 'amazonq',
    name: 'Amazon Q',
    icon: imagemAmazonQ,
    category: 'tool'
  }
];

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Portfólio Pessoal',
    description: 'Meu portfólio pessoal desenvolvido com React, TypeScript e Tailwind CSS. Este aqui onde você está agora.',
    imageUrl: imagemPortifolio,
    projectUrl: '#',
    githubUrl: 'https://github.com/ven-del/portifolio',
    technologies: ['react', 'typescript', 'tailwind', 'vite', 'git', 'github']
  },
  {
    id: 'flappy-bird',
    title: 'Réplica Flappy Bird',
    description: 'Uma réplica do clássico para android e IOS para fins de estudos. Criado inteiramente com Python, pela biblioteca pygame.',
    imageUrl: imagemFlappyBird,
    projectUrl: '#',
    githubUrl: 'https://github.com/Laboratorio-CE/FlappyBird',
    technologies: ['python', 'git', 'github']
  },
  {
    id: 'cosmic-wings',
    title: 'Cosmic Wings',
    description: `O primeiro jogo desenvolvido pelo Laboratório.CE. Shoot'em up feito em Typescript, utilizando a biblioteca Phaser e Supabase para gerenciar o placar global.`,
    imageUrl: imagemCosmicWings,
    projectUrl: '#',
    githubUrl: 'https://github.com/Laboratorio-CE/FlappyBird',
    technologies: ['typescript', 'react', 'supabase', 'git', 'github']
  },
  {
    id: 'labce-curriculo',
    title: 'Currículo Online',
    description: 'Currículo online desenvolvido com HTML, CSS e JavaScript puros (vanilla).',
    imageUrl: imagemCurriculo,
    projectUrl: 'https://labce-curriculo.vercel.app/',
    githubUrl: 'https://github.com/ven-del/atividade-curriculo',
    technologies: ['html', 'css', 'javascript', 'git', 'github']
  },
  {
    id: 'lista-dinamica',
    title: 'Lista Dinâmica',
    description: 'Projeto full stack de lista de tarefas, onde você pode adicionar, remover e marcar tarefas como concluídas. Desenvolvido com React e Tailwind CSS para o frontend, e Python com Django e PostgreSQL para o backend e base de dados.',
    imageUrl: imagemListaDinamica,
    projectUrl: 'https://labce-lista-dinamica.vercel.app/',
    githubUrl: 'https://github.com/ven-del/lista-de-tarefas-frontend',
    technologies: ['react', 'tailwind', 'javascript', 'python', 'git', 'github']
  },
  {
    id: 'treinofacil',
    title: 'TreinoFacil',
    description: 'Projeto Full Stack para apresentação final da turma do Geração Tech 2.0. Feito com React, TypeScript, Tailwind CSS e Node.js, utilizando o Supabase como banco de dados.',
    imageUrl: treinoFacilImage,
    projectUrl: 'https://labce-treinofacil.vercel.app/',
    githubUrl: 'https://github.com/ven-del/treinofacil',
    technologies: ['react', 'typescript', 'tailwind', 'vite', 'nodejs', 'supabase', 'git', 'github']
  },
  {
    id: 'calendario-seletivo',
    title: 'Calendário Seletivo',
    description: 'Projeto feito para praticar o DOM utilizando JavaScript. Também foi utilizado para praticar versionamento colaborativo.',
    imageUrl: imagemCalendarioSeletivo,
    projectUrl: 'https://labce-calendario-interativo.vercel.app/',
    githubUrl: 'https://github.com/ven-del/exercicios-dom',
    technologies: ['html', 'css', 'javascript', 'bootstrap', 'git', 'github']
  },
  {
    id: 'tela-formulario',
    title: 'Formulário de Cadastro',
    description: 'Projeto feito para praticar o a criação de um formulário e uma tela atrativa, utilizando apenas HTML e CSS.',
    imageUrl: imagemFormulario,
    projectUrl: 'https://labce-formulario.vercel.app/',
    githubUrl: 'https://github.com/ven-del/tela-login2',
    technologies: ['html', 'css', 'git', 'github']
  },
  {
    id: 'lab-rental',
    title: 'Lab Rental',
    description: 'Projeto feito em react para praticar react e sua arquitetura. Agora 100% integrado com backend e persistência de dados!',
    imageUrl: imagemLabRental,
    projectUrl: 'https://labce-lab-rental.vercel.app/',
    githubUrl: 'https://github.com/ven-del/aluga-jogos',
    technologies: ['html', 'css', 'git', 'github']
  },
  {
    id: 'ibge',
    title: 'Consulta IBGE',
    description: 'Um projeto simples em HTML, JavaScript e Bootstrap que consome a API do IBGE para exibir informações sobre estados e municípios. Feito inteiramente com o AmazonQ',
    imageUrl: ibgeImage,
    projectUrl: 'https://labce-consulta-ibge.vercel.app/',
    githubUrl: 'https://github.com/ven-del/aula-api',
    technologies: ['html', 'javascript', 'bootstrap', 'amazonq', 'github']
  },
  {
    id: 'pokedex',
    title: 'Pokedex',
    description: 'A clássica! Uma pokedex feita para praticar o consumo de APIs, utilizando React e Tailwind CSS.',
    imageUrl: pokedexImage,
    projectUrl: 'https://labce-pokedex.vercel.app/',
    githubUrl: 'https://github.com/ven-del/pokedex',
    technologies: ['react', 'tailwind', 'git', 'github']
  },
];

export const socialLinks: SocialLink[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ven-del/',
    icon: 'linkedin'
  },
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/ven-del',
    icon: 'github'
  },
  {
    id: 'curriculo',
    name: 'Currículo Online',
    url: 'https://labce-curriculo.vercel.app/',
    icon: 'file'
  }
];