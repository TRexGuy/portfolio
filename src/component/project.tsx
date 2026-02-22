import React from "react";
import { PROJECTS } from "../constans/index";
import { motion } from "framer-motion";
const Project: React.FC = () => {
  return (
    <div className="pb-4">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-[40px] text-center tracking-normal"
      >
        Project
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div className="flex flex-wrap mb-8 lg:justify-center" key={index}>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <a href={project.a}>
                <img
                  width={250}
                  height={250}
                  className="mb-6 rounded"
                  src={project.image}
                  alt={project.title}
                />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              {" "}
              <h3 className="mb-2 text-2xl font-semibold tracking-normal ">
                {project.title}
              </h3>
              <p className="mb-4 text-stone-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  className="p-2 mr-2 tracking-wide text-sm font-medium rounded bg-stone-900 text-stone-300"
                  key={index}
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
