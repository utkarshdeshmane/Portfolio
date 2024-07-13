import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Experience</h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="mb-2 text-xl text-neutral-400">{experience.year}

              </motion.p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <motion.h6 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="mb-2 text-lg font-semibold">
                {experience.role} -{" "}
                <motion.span 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="text-sm text-purple-100">{experience.company}
                </motion.span>
              </motion.h6>
              <motion.p 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="mb-4 text-neutral-400">{experience.description}
              </motion.p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <motion.span 
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ x: 100, opacity: 0 }}
                  transition={{ duration: 1.5 }}
                  key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 text-sm font-medium text-purple-500">
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
