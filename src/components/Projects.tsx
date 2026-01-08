import type { FC } from "react";
import { projects } from "../data/projects";

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
  image?: string;
  docs?: string;
};


// projects moved to `src/data/projects.ts`


export const Projects: FC = () => {
  return (
    <section id="projects" className="w-full pt-8 pb-8 pl-8 pr-8 md:pl-32 md:pr-32 flex flex-col justify-between items-start">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <article
            key={project.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden border border-neutral-200"
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

                {project.docs && (
                  <a
                    href={project.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-3 py-2 bg-neutral-200 text-neutral-800 rounded hover:opacity-90 text-sm"
                  >
                    Docs
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