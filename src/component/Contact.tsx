import { CONTACT } from "../constans/index";
import { motion } from "framer-motion";
const Contact: React.FC = () => {
  return (
    <div className="border-t border-ston-900 pb-20">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="my-10 text-center txt- "
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter ">
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="my-4"
        >
          <a href="callto:+98 905 545 2681"> {CONTACT.phoneNo}</a>
        </motion.p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
