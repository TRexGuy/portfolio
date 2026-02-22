import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.18,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Hero: React.FC = () => {
  return (
    <div className="min-h-[30vh] flex items-center justify-center px-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-3xl text-center flex flex-col items-center"
      >
        <motion.h2
          variants={childVariants}
          className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-stone-200 to-slate-500 bg-clip-text text-transparent"
        >
          Nexora Team
        </motion.h2>

        <motion.p
          variants={childVariants}
          className="mt-8 text-base md:text-lg font-light leading-relaxed text-stone-400 max-w-2xl"
        >
          We are a team of experienced professionals focused on building systems
          that last. Our approach is rooted in clean architecture,
          maintainability, and performance. We design and implement software
          with long-term efficiency in mind, creating solutions that are
          scalable, reliable, and easy to evolve. From concept to deployment, we
          care about how systems grow, not just how they start.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Hero;
