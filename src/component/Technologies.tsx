import React from "react";
import { RiReactjsLine, RiNextjsFill } from "react-icons/ri";
import { TbBrandTailwind, TbBrandFramerMotion } from "react-icons/tb";

import {
  SiTypescript,
  SiGreensock,
  SiPython,
  SiDjango,
  SiGo,
  SiFlutter,
  SiDart,
  SiFlask,
  SiJavascript,
} from "react-icons/si";

import { motion, Variants } from "framer-motion";

const iconVariants = (duration: number): Variants => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

// تکنولوژی‌ها (⭐ راحت قابل توسعه)
const technologies = [
  { icon: RiNextjsFill, color: "text-white", duration: 2 },
  { icon: SiTypescript, color: "text-cyan-700", duration: 3 },
  { icon: RiReactjsLine, color: "text-cyan-400", duration: 2.5 },
  { icon: SiPython, color: "text-yellow-500", duration: 3.2 },
  { icon: SiDjango, color: "text-green-600", duration: 2.7 },
  { icon: SiFlask, color: "text-gray-300", duration: 3.8 },
  { icon: SiGo, color: "text-cyan-500", duration: 2.3 },
  { icon: SiFlutter, color: "text-blue-400", duration: 3.5 },
  { icon: SiDart, color: "text-blue-600", duration: 4 },
  { icon: SiGreensock, color: "text-green-500", duration: 3.5 },
  { icon: TbBrandTailwind, color: "text-cyan-400", duration: 2.2 },
  { icon: TbBrandFramerMotion, color: "text-pink-600", duration: 2.8 },
  { icon: SiJavascript, color: "text-yellow-400", duration: 4 },
];

const Technologies: React.FC = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-4xl font-medium text-center">Technologies</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {technologies.map(({ icon: Icon, color, duration }, index) => (
          <motion.div
            key={index}
            initial="initial"
            animate="animate"
            variants={iconVariants(duration)}
            className="p-4 border-4 rounded-2xl border-stone-800"
          >
            <Icon className={`text-7xl ${color}`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
