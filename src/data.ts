import type { Project, SocialLink, TechSkill, ThemeOption } from './types';

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
  }
];

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Portfólio Pessoal',
    description: 'Meu portfólio pessoal desenvolvido com React, TypeScript e Tailwind CSS.',
    imageUrl: '/assets/images/portfolio.jpg',
    projectUrl: '#',
    githubUrl: 'https://github.com/ven-del/portfolio',
    technologies: ['react', 'typescript', 'tailwind']
  },
  {
    id: 'game-prototype',
    title: 'Protótipo de Jogo',
    description: 'Um protótipo de jogo desenvolvido com Unity e C#.',
    imageUrl: '/assets/images/game.jpg',
    projectUrl: '#',
    githubUrl: 'https://github.com/ven-del/game-prototype',
    technologies: ['unity', 'csharp']
  },
  {
    id: 'labce-curriculo',
    title: 'Currículo Online',
    description: 'Currículo online desenvolvido com HTML, CSS e JavaScript.',
    imageUrl: '/assets/images/curriculo.jpg',
    projectUrl: 'https://labce-curriculo.vercel.app/',
    githubUrl: 'https://github.com/ven-del/labce-curriculo',
    technologies: ['html', 'css', 'javascript']
  }
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

export const themeOptions: ThemeOption[] = [
  {
    id: 'purple',
    name: 'Roxo (Padrão)',
    primaryClass: 'from-primary-dark via-primary to-primary-light',
    secondaryClass: 'bg-primary-light',
    gradientClass: 'bg-gradient-to-tr from-primary-dark via-primary to-primary-light'
  },
  {
    id: 'blue',
    name: 'Azul',
    primaryClass: 'from-blue-dark via-blue to-blue-light',
    secondaryClass: 'bg-blue-light',
    gradientClass: 'bg-gradient-to-tr from-blue-dark via-blue to-blue-light'
  },
  {
    id: 'green',
    name: 'Verde',
    primaryClass: 'from-green-dark via-green to-green-light',
    secondaryClass: 'bg-green-light',
    gradientClass: 'bg-gradient-to-tr from-green-dark via-green to-green-light'
  },
  {
    id: 'red',
    name: 'Vermelho',
    primaryClass: 'from-red-dark via-red to-red-light',
    secondaryClass: 'bg-red-light',
    gradientClass: 'bg-gradient-to-tr from-red-dark via-red to-red-light'
  }
];