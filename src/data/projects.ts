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
      "O e-Condomínio foi desenvolvido como parte de um projeto interdisciplinar acadêmico, com o objetivo de criar uma solução digital acessível e intuitiva para o gerenciamento de condomínios residenciais e comerciais.",
    role: "Líder e Tech Lead da equipe, além de idealizador do projeto.",
    stack: ["React", "Vite", "Tailwind CSS", "Material UI"],
    features: [
      "Interface responsiva",
      "Componentização",
      "Consumo de API REST",
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
      "API REST desenvolvida com FastAPI para atender a aplicação e-Condomínio, sendo responsável pela autenticação, regras de negócio e persistência de dados.",
    stack: ["Python", "FastAPI", "MySQL"],
    features: [
      "Autenticação com JWT (OAuth2)",
      "APIs REST documentadas",
      "Regras de negócio",
    ],
    github: "https://github.com/JonasLevy/api-eCondominio",
  },

  {
    id: 3,
    category: "Vanilla JS",
    title: "Pizzaria",
    description:
      "Projeto em desenvolvimento de um site de delivery onde o usuário pode navegar por categorias, adicionar produtos à sacola e visualizar a atualização automática dos valores. O projeto foi iniciado sem frameworks, utilizando JavaScript puro, com a adição de Sass para facilitar a manutenção do CSS.",
    stack: ["HTML", "SCSS (Sass)", "JavaScript"],
    features: [
      "Manipulação do DOM",
      "Lógica de carrinho",
      "Atualização dinâmica de valores",
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
      "Sistema simples de controle de estoque desenvolvido com Django, permitindo o gerenciamento de produtos, categorias, fornecedores e o registro de movimentações de entrada e saída.",
    stack: ["Python", "Django", "SQLite"],
    features: [
      "CRUD completo",
      "Controle de movimentações",
      "Organização baseada no padrão MVC do Django",
    ],
    github: "https://github.com/JonasLevy/gestao-estoque-django",
  },
];
