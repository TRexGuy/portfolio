import React from "react";
import { FaEnvelope, FaTelegramPlane } from "react-icons/fa"; // تلگرام اضافه شد

const Navbar: React.FC = () => {
  return (
    <nav className="right-0 z-30 flex items-center justify-between p-4 py-6 ">
      <div className="flex flex-row items-center justify-center gap-4 m-8 text-2xl">
        {" "}
        <a
          href="https://t.me/DehghanDehnaviAmin" // اینجا یوزنیم تلگرامت رو جایگزین کن
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          <FaTelegramPlane />
        </a>
        <a
          href="mailto:amin.dehghandehnavi@gmail.com?subject=Hello&body=Hi%20Amin,"
          className="hover:text-red-400 transition-colors"
        >
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
