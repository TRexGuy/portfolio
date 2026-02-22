import project1 from "../assets/photo_2026-01-30_14-09-27.jpg"; // اسکرین‌شات Wallet
import project2 from "../assets/photo_2026-01-30_14-10-08.jpg"; // اسکرین‌شات Phunk
import project3 from "../assets/photo_2026-01-30_14-10-50.jpg"; // اسکرین‌شات Webcore
import project4 from "../assets/photo_2026-01-30_14-12-10.jpg"; // اسکرین‌شات Pouyam App

export const EXPERIENCES = [
  {
    year: "July 2025 - Present",
    role: "Senior Frontend Engineer (Remote)",
    company: "Freelance - Istanbul, Turkey",
    description: `Architecting high-end web solutions for international clients. Focusing on building scalable, performant, and localized web applications using Next.js and TypeScript. Managing the full development lifecycle, from translating Figma designs to deploying production-ready interfaces with a focus on global UX standards.`,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
      "Redux Toolkit",
    ],
  },
  {
    year: "August 2024 - June 2025",
    role: "Frontend Developer",
    company: "Duo Blocks - Tehran, Iran",
    description: `Developed and optimized enterprise-level dashboards in a fast-paced agile environment. Improved application load times by 40% through code splitting and efficient state management. Collaborated closely with UI/UX designers to ensure pixel-perfect implementation of complex systems.`,
    technologies: ["React", "javascript", "REST APIs", "Tailwind CSS"],
  },
  {
    year: "February 2024 - July 2024",
    role: "Frontend Developer",
    company: "DonaWeb",
    description: `Crafted reactive and dynamic user interfaces with a strong focus on API integration and state synchronization. Built reusable component libraries to speed up the development process.`,
    technologies: ["React", "JavaScript", "Tailwind CSS", "REST APIs"],
  },
  {
    year: "February 2023 - February 2024",
    role: "Junior JavaScript Developer",
    company: "Alpha Startup",
    description: `Started the journey by mastering core JavaScript architectural patterns. Contributed to open-source projects and focused on solving complex logical problems in frontend development.`,
    technologies: ["JavaScript", "HTML5", "CSS3", "Git", "Tailwind CSS"],
  },
];

export const PROJECTS = [
  {
    title: "Phunk - Creative Agency Platform",
    image: project2,
    a: "https://www.phunk.co.uk/",
    description:
      "A visually immersive landing page for a premier digital agency. Focused on advanced scroll-based animations, premium typography, and a seamless storytelling experience using high-end motion libraries.",
    technologies: ["Next.js", "GSAP", "Framer Motion", "Tailwind CSS"],
  },
  {
    title: "POUYAM - Telegram Web Application",
    image: project4,
    a: "https://t.me/POUYAM_APPBOT/start",
    description:
      "A cutting-edge Telegram Web App (TWA) designed for the Telegram ecosystem. Built with a mobile-first philosophy, ensuring fast load times and an intuitive native-like experience for millions of users.",
    technologies: ["React", "Telegram Web Apps API", "Vite", "Tailwind CSS"],
  },
  {
    title: "Crypto Wallet & Trading Dashboard",
    image: project3,
    a: "https://trade-app-navy.vercel.app/wallet",
    description:
      "A sophisticated cryptocurrency asset management platform featuring real-time data tracking, dynamic portfolio visualization, and a secure, dark-themed user interface designed for high-stakes financial environments.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "Lucide React",
    ],
  },

  {
    title: "Webcore - Enterprise IT Solutions",
    image: project1,
    a: "https://webcore.ir/en",
    description:
      "A professional multi-language corporate platform for a leading IT services provider. Implemented advanced i18n support, SEO strategies, and a scalable architecture to support international business growth.",
    technologies: ["Next.js", "i18n", "SEO Optimization", "Headless CMS"],
  },
];

export const CONTACT = {
  address: "Mazandaran, Sari, Shafa St",
  phoneNo: "+98 905 545 2681",
  email: "eng.eli.qolizadeh@gmail.com",
};
