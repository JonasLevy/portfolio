interface Skill {
    category: string;
    icon: string;
    skills: string[];
}

const skillsData: Skill[] = [
    {
        category: "Linguagens & Fundamentos",
        icon: "💻",
        skills: ["JavaScript (ES6+)", "Python", "Lógica de programação"],
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
];

export const Skills = () => {
    return (
      <section
        id="skills"
        className="w-full  pt-8 pb-8 pl-32 pr-32 bg-gray-50 max-md:pl-8 max-md:pr-8"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 ">Habilidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillsData.map((category) => (
              <div
                key={category.category}
                className="bg-white rounded-lg p-6 shadow"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {category.category}
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