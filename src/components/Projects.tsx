import { type FC, useEffect, useRef, useState } from "react";
import { projects } from "../data/projects";

export const Projects: FC = () => {
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
      id="projects" 
      className="w-full pt-8 pb-8 pl-8 pr-8 md:pl-32 md:pr-32 flex flex-col justify-between items-start"
    >
      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <article
            key={project.id}
            style={{ 
              transitionDelay: `${index * 100}ms`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
            className="bg-white rounded-xl shadow-sm overflow-hidden border border-neutral-200 transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-md"
          >
            <div className="p-4">
              <div className="mb-2">
                <span className="text-xs bg-neutral-100 text-neutral-700 px-2 py-1 rounded">
                  {project.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

              <div className="mb-3 text-sm text-neutral-600">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="inline-block bg-neutral-100 text-neutral-700 px-2 py-1 mr-2 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <p className="text-sm text-neutral-600 mb-4">{project.description}</p>

              <div className="flex gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-3 py-2 bg-neutral-900 text-white rounded hover:opacity-90 text-sm"
                  >
                    GitHub
                  </a>
                )}

                {project.deploy && (
                  <a
                    href={project.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-3 py-2 bg-blue-600 text-white rounded hover:opacity-90 text-sm"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};