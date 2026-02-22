import React from "react";
import Profile from "../assets/photo_2026-01-30_14-34-01.jpg";
import { motion } from "framer-motion";

// اصلاح غلط املایی و بهینه‌سازی زمان انیمیشن‌ها
const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2, // ایجاد افکت پله‌ای برای فرزندان
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero: React.FC = () => {
  // const downloadFile = () => {
  //   // نکته: فایل PDF رو تو پوشه public بذار تا مستقیم در دسترس باشه
  //   const url = "/Elham-Gholizade-Resume.pdf";
  //   window.open(url, "_blank");
  // };

  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        {/* بخش تصویر */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center pb-8 lg:mt-10">
            <motion.img
              src={Profile}
              className="w-[350px] border-2 rounded-3xl border-stone-800 shadow-xl"
              alt="T-Rex Profile"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
        </div>

        {/* بخش متون */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center mt-10 lg:items-start"
          >
            <motion.h2
              variants={childVariants}
              className="pb-4 text-3xl font-bold tracking-tight lg:text-5xl"
            >
              Elham gholizade mahali
            </motion.h2>

            <motion.span
              variants={childVariants}
              className="text-3xl font-semibold text-transparent bg-gradient-to-r from-stone-300 to-slate-500 bg-clip-text"
            >
              Front-end Developer
            </motion.span>

            <motion.p
              variants={childVariants}
              className="max-w-xl py-6 my-2 text-lg font-light leading-relaxed text-stone-400 text-center lg:text-left"
            >
              As a Computer Science student and a dedicated Front-end Developer
              with **4 years of hands-on experience**, I specialize in building
              high-performance web applications using **Next.js** and
              **TypeScript**. I am passionate about bridging the gap between
              complex backend logic and pixel-perfect frontend interfaces,
              ensuring clean, scalable, and maintainable code in every project.
            </motion.p>

            {/* <motion.button
              variants={childVariants}
              onClick={downloadFile}
              className="px-8 py-4 mb-10 text-sm font-medium tracking-wide transition-all bg-white rounded-full text-stone-900 hover:bg-stone-200 active:scale-95"
            >
              Download Resume
            </motion.button> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

