import { useEffect, useRef, useState } from "react";

interface Skill {
    category: string;
    icon: string;
    skills: string[];
}

const skillsData: Skill[] = [
    {
        category: "Linguagens & Fundamentos",
        icon: "💻",
        skills: ["JavaScript (ES6+)", "Python", "Lógica de programação", "POO", 
        "Design Patterns (Padrões de Projeto)"],
    },
    {
        category: "Front-end",
        icon: "🎨",
        skills: [
            "React",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Material UI (MUI)",
            "Consumo de APIs REST",
        ],
    },
    {
        category: "Back-end",
        icon: "⚙️",
        skills: [
            "Node.js",
            "Express",
            "Django",
            "FastAPI",
            "Criação de APIs REST",
            "Integração entre serviços",
        ],
    },
    {
        category: "Banco de Dados",
        icon: "🗄️",
        skills: ["MySQL", "PostgreSQL", "Modelagem relacional", "Operações CRUD"],
    },
    {
      category: "Automação & IA",
      icon: "🤖",
      skills: ["n8n", "Antigravity", "IA Generativas"],
    },
    {
        category: "Ferramentas & DevOps",
        icon: "🔧",
        skills: [
            "Git",
            "GitLab",
            "GitHub",
            "Vercel",
            "Netlify",
            "Linux (Terminal)",
            "Docker",
            "CI/CD",
            
        ],
    },
];

export const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
      <section
        ref={sectionRef}
        id="skills"
        className="w-full  pt-8 pb-8 pl-32 pr-32 bg-gray-50 max-md:pl-8 max-md:pr-8"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 ">Habilidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillsData.map((category, index) => (
              <div
                key={category.category}
                style={{ 
                    transitionDelay: `${index * 150}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                }}
                className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100 transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-xl font-semibold mb-4">
                   {category.icon} {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-gray-700">
                      • {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};