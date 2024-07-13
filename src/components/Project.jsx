import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

export const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Project</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col lg:flex-row lg:justify-center items-center lg:items-start"
          >
            <div className="w-full lg:w-1/4 flex justify-center lg:justify-start mb-4 lg:mb-0">
              <motion.img
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1.5 }}
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <motion.h6
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="mb-2 text-center font-semibold lg:text-left"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-500 hover:underline"
                >
                  {project.title}
                </a>
              </motion.h6>
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="mb-4 text-neutral-400"
              >
                {project.description}
              </motion.p>
              <div className="flex flex-wrap mt-4">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ x: 100, opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="mr-2 mb-2 rounded bg-neutral-900 px-2 text-sm font-medium text-purple-500"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
