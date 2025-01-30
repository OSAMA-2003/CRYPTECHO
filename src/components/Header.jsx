/** @format */

import { motion } from "framer-motion";
import vid from "../assets/header-ecosystem.mp4";

const fadeInUp = (delay) => ({
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
});

function Header() {
  return (
    <header className="h-screen text-white relative">
      <div className="Background absolute !-z-10 h-full w-full flex items-start md:items-center justify-center mt-40 md:mt-0 overflow-hidden">
        <video src={vid} loop autoPlay muted />
      </div>

      <motion.div
        className="content flex flex-col justify-center h-screen pt-40 md:pt-72"
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex justify-start text-white pl-5 md:pl-10 text-xl font-bold "
          variants={fadeInUp(0.8)}
        >
          <p>BLOCKCHAIN</p>
        </motion.div>

        <motion.div
          className="text-white text-4xl w-full py-28"
          variants={fadeInUp(0.4)}
        >
          <p className="w-full text-center text-[60px] md:text-[180px] md:tracking-[40px] opacity-75 ">
            CRYPTECHO
          </p>
        </motion.div>

        <motion.div
          className="text-white text-xl font-bold flex justify-end mb-5 pr-5 md:pr-20"
          variants={fadeInUp(1.3)}
        >
          <p>MARKETING</p>
        </motion.div>

        <motion.div className="max-w-[350px] justify-start ml-10 mb-14" variants={fadeInUp(1.5)}>
          <p className="mb-5">
            In a world of rapid transformation to the digital economy and
            encryption industry, our company rises as a pioneer marketing and
            advertising company.
          </p>
          <a href="#" className="text-white uppercase focus:outline-none bg-slate-600 px-4 py-2 rounded-full">
            Get Started
          </a>
        </motion.div>

        <motion.div className="mx-10 flex justify-center" variants={fadeInUp(2)}>
          <button className="button">
            <p className="button__text">
              {"SCROLL TO EXPLORE".split("").map((char, index) => (
                <span key={index} style={{ "--index": index }}>{char}</span>
              ))}
            </p>
            <a href="#about">
              <div className="button__circle rotate-[135deg]">
                <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="button__icon" width="14">
                  <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                </svg>
                <svg viewBox="0 0 14 15" fill="none" width="14" xmlns="http://www.w3.org/2000/svg" className="button__icon button__icon--copy">
                  <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                </svg>
              </div>
            </a>
          </button>
        </motion.div>
      </motion.div>
    </header>
  );
}

export default Header;