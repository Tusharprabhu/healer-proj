import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="m-16 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.7 }}
              className="w-full max-x-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold text-pink-600">
                {project.title}
              </h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mb-4 text-neutral-500 px-2 py-1 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
