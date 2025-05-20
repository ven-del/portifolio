import type { Project, SocialLink, TechSkill } from './types';

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
    icon: 'src/assets/images/amazonQ.png',
    category: 'tool'
  },
  {
    id: 'manus',
    name: 'Manus',
    icon: 'src/assets/images/manus.png',
    category: 'tool'
  }
];

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Portfólio Pessoal',
    description: 'Meu portfólio pessoal desenvolvido com React, TypeScript e Tailwind CSS. Este aqui onde você está agora.',
    imageUrl: '/src/assets/images/portifolio.png',
    projectUrl: '#',
    githubUrl: 'https://github.com/ven-del/portifolio',
    technologies: ['react', 'typescript', 'tailwind', 'vite', 'git', 'github']
  },
  {
    id: 'flappy-bird',
    title: 'Réplica Flappy Bird',
    description: 'Uma réplica do clássico para android e IOS para fins de estudos. Criado inteiramente com Python, pela biblioteca pygame.',
    imageUrl: '/src/assets/images/flappybird.png',
    projectUrl: '#',
    githubUrl: '#',
    technologies: ['python', 'git', 'github']
  },
  {
    id: 'labce-curriculo',
    title: 'Currículo Online',
    description: 'Currículo online desenvolvido com HTML, CSS puros (vanilla).',
    imageUrl: '/src/assets/images/curriculo.png',
    projectUrl: 'https://labce-curriculo.vercel.app/',
    githubUrl: 'https://github.com/ven-del/atividade-curriculo',
    technologies: ['html', 'css', 'git', 'github']
  },
  {
    id: 'treinofacil',
    title: 'TreinoFacil',
    description: 'Projeto final da turma do Geração Tech 2.0. Ainda em construção. Tenha paciência. :)',
    imageUrl: '/src/assets/images/under-construction.jpg',
    projectUrl: '#',
    githubUrl: 'https://github.com/ven-del/treinofacil',
    technologies: ['react', 'typescript', 'tailwind', 'vite', 'git', 'github']
  },
  {
    id: 'calendario-seletivo',
    title: 'Calendário Seletivo',
    description: 'Projeto feito para praticar o DOM utilizando JavaScript. Também foi utilizado para praticar versionamento colaborativo.',
    imageUrl: '/src/assets/images/calendarioseletivo.png',
    projectUrl: 'https://labce-calendario-interativo.vercel.app/',
    githubUrl: 'https://github.com/ven-del/exercicios-dom',
    technologies: ['html', 'css', 'javascript', 'bootstrap', 'git', 'github']
  },
  {
    id: 'tela-formulario',
    title: 'Formulário de Cadastro',
    description: 'Projeto feito para praticar o a criação de um formulário e uma tela atrativa, utilizando apenas HTML e CSS.',
    imageUrl: '/src/assets/images/formulario.png',
    projectUrl: 'https://labce-formulario.vercel.app/',
    githubUrl: 'https://github.com/ven-del/tela-login2',
    technologies: ['html', 'css', 'git', 'github']
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