import React from "react";
import { RiReactjsLine, RiNextjsFill } from "react-icons/ri"; // اضافه کردن Next.js
import { TbBrandTailwind, TbBrandFramerMotion } from "react-icons/tb";

import { SiTypescript, SiGreensock } from "react-icons/si"; // اضافه کردن GSAP

import { IoLogoJavascript } from "react-icons/io5";
import { motion, Variants } from "framer-motion";

// تایپ دقیق برای انیمیشن‌ها
const iconVariants = (duration: number): Variants => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies: React.FC = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-4xl font-medium tracking-normal text-center"
      >
        Technologies
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6 lg:flex-row"
      >
        {/* Next.js - تخصص اصلی */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4 border-4 rounded-2xl border-stone-800"
        >
          <RiNextjsFill className="text-7xl text-white" />
        </motion.div>

        {/* TypeScript */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4 border-4 rounded-2xl border-stone-800"
        >
          <SiTypescript className="text-7xl text-cyan-700" />
        </motion.div>

        {/* React */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4 border-4 rounded-2xl border-stone-800"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        {/* GSAP */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3.5)}
          className="p-4 border-4 rounded-2xl border-stone-800"
        >
          <SiGreensock className="text-7xl text-green-500" />
        </motion.div>

        {/* Tailwind */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.2)}
          className="p-4 border-4 rounded-2xl border-stone-800"
        >
          <TbBrandTailwind className="text-7xl text-cyan-400" />
        </motion.div>

        {/* Framer Motion */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.8)}
          className="p-4 border-4 rounded-2xl border-stone-800"
        >
          <TbBrandFramerMotion className="text-7xl text-pink-600" />
        </motion.div>

        {/* JavaScript */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-4 border-4 rounded-2xl border-stone-800"
        >
          <IoLogoJavascript className="text-7xl text-yellow-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
