export type Project = {
  id: number;
  category: "Front-end" | "Back-end" | "Vanilla JS" | "Full Stack";
  title: string;
  description: string;
  role?: string;
  stack: string[];
  features: string[];
  github: string;
  deploy?: string;
  docs?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    category: "Front-end",
    title: "e-Condomínio",
    description:
      "Aplicação web desenvolvida como projeto interdisciplinar com foco na digitalização e organização da gestão condominial.",
    role: "Líder técnico e idealizador do projeto.",
    stack: ["React", "Vite", "Tailwind CSS", "Material UI"],
    features: [
      "Interface responsiva",
      "Componentização",
      "Consumo de API REST",
      "Arquitetura organizada por features",
    ],
    github:
      "https://github.com/JonasLevy/projeto-interdisciplinar-certificacao-uniateneu",
    deploy: "https://projeto-interdisciplinar-certificac.vercel.app/",
  },

  {
    id: 2,
    category: "Back-end",
    title: "API e-Condomínio",
    description:
      "API REST responsável pela autenticação, regras de negócio e persistência de dados da aplicação e-Condomínio.",
    stack: ["Python", "FastAPI", "MySQL"],
    features: [
      "Autenticação JWT (OAuth2)",
      "Estrutura RESTful",
      "Validação de dados",
      "Documentação automática (Swagger)",
    ],
    github: "https://github.com/JonasLevy/api-eCondominio",
  },

  {
    id: 3,
    category: "Vanilla JS",
    title: "Pizzaria",
    description:
      "Aplicação web de delivery desenvolvida com JavaScript puro, focada em manipulação de DOM e lógica de carrinho de compras.",
    stack: ["HTML", "SCSS (Sass)", "JavaScript"],
    features: [
      "Manipulação avançada de DOM",
      "Lógica de carrinho",
      "Atualização dinâmica de valores",
      "Organização modular do código",
    ],
    github: "https://github.com/JonasLevy/pizzaria-javaScript-vanilla",
    deploy:
      "https://pizzaria-java-script-vanilla-mlk79yh16-jonaslevys-projects.vercel.app/",
  },

  {
    id: 4,
    category: "Full Stack",
    title: "Sistema de Estoque",
    description:
      "Sistema de controle de estoque com autenticação e gerenciamento completo de produtos e movimentações.",
    stack: ["Python", "Django", "SQLite"],
    features: [
      "CRUD completo",
      "Controle de entrada e saída",
      "Admin nativo do Django",
      "Organização seguindo padrão MTV",
    ],
    github: "https://github.com/JonasLevy/gestao-estoque-django",
  },

  {
    id: 5,
    category: "Front-end",
    title: "Dra. Carla Fernandes",
    description:
      "Website institucional desenvolvido para profissional da área da saúde, com foco em credibilidade, clareza das informações e experiência do usuário.",
    role: "Desenvolvimento completo do layout e implementação.",
    stack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Layout responsivo",
      "Design focado em conversão",
      "Estrutura semântica",
      "Otimização básica de SEO",
    ],
    github: "",
    deploy: "https://dracarlafernandes.com.br/",
  },

  {
    id: 6,
    category: "Front-end",
    title: "Festa Locações",
    description:
      "Website institucional desenvolvido no início da minha trajetória como desenvolvedor, criado para atender uma empresa real de locação de artigos para festas.",
    role: "Responsável por todo o desenvolvimento e publicação do projeto.",
    stack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Estrutura semântica em HTML",
      "Layout responsivo",
      "Organização básica de estilos",
      "Deploy em hospedagem estática",
    ],
    github: "",
    deploy: "https://festaloc-v1.surge.sh/",
  },

  {
    id: 7,
    category: "Vanilla JS",
    title: "Projeto Carpa",
    description:
      "Experiência visual interativa inspirada no movimento fluido de carpas, unindo direção criativa ao poder da IA e do motor Antigravity.",
    role: "Idealização, design e desenvolvimento.",
    stack: ["HTML", "CSS", "JavaScript", "Canvas API"],
    features: [
      "Seção Hero 'Zen Tech' de alta performance",
      "Animações fluidas e orgânicas",
      "Experiência de usuário imersiva",
      "Desenvolvido com auxílio de IA (Antigravity)",
    ],
    github: "https://github.com/JonasLevy/carpa",
    deploy: "https://carpa-tawny.vercel.app/",
  },

  {
    id: 8,
    category: "Front-end",
    title: "MDL Consultoria",
    description:
      "Website profissional moderno desenvolvido para empresa de consultoria empresarial.",
    role: "Desenvolvimento full-cycle (concepção, domínio e hospedagem).",
    stack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Design corporativo premium",
      "Otimização de performance e SEO",
      "Gestão completa de infraestrutura",
      "Interface responsiva e profissional",
    ],
    github: "",
    deploy: "https://mdlconsultoria.com.br",
  },
];
