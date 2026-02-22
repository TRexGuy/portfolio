import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa"; // تلگرام اضافه شد
import logo from "../assets/logonomy-1729019937346.png";

const Navbar: React.FC = () => {
  return (
    <nav className="right-0 z-30 flex items-center justify-between p-4 py-6 ">
      <div className="flex flex-shrink-0 items-center">
        <span className="text-3xl text-white">
          <img className="max-w-20" src={logo} alt="Logo" />
        </span>
      </div>

      <div className="flex flex-row items-center justify-center gap-4 m-8 text-2xl">
        {" "}
        {/* سایز آیکون‌ها رو کمی بزرگتر کردم که بهتر دیده بشن */}
        <a
          href="https://github.com/TRexGuy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-stone-400 transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://t.me/TRex_Fan" // اینجا یوزنیم تلگرامت رو جایگزین کن
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          <FaTelegramPlane />
        </a>
        <a
          href="https://www.instagram.com/elham_qolizade/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition-colors"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/elham-qolizadeh-043131334"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
