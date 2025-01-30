/** @format */

import { motion } from "framer-motion";
import img1 from "../assets/about1.png";

const fadeInLeft = (delay) => ({
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay } },
});

function About() {
  return (
    <section
      id="about"
      className="min-h-screen md:text-start grid grid-cols-1 md:grid-cols-2 text-white pt-24 md:pt-52 px-10 border-b border-b-gray-200"
    >
      <motion.div
        className="md:pr-32"
        initial="hidden"
        whileInView="visible"
        variants={fadeInLeft(0)}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-6xl font-bold mb-24 text-gray-200"
          variants={fadeInLeft(0)}
        >
          About Crypticho
        </motion.h1>
        <motion.p className="text-xl mb-14" variants={fadeInLeft(0.5)}>
          The limitations of the traditional market never bind us; we design
          integrated experiences that link all stakeholders and components of
          interest (project idea, early investors, project execution, and post-
          launch marketing).
        </motion.p>

        <motion.p className="text-md text-gray-500 mb-20" variants={fadeInLeft(1)}>
          We offer well-designed and innovative strategies that allow us to
          build bridges to make cutting-edge technologies available for the Arab
          community by providing integrated and remarkable content that attracts
          and motivates foresighted investments.
        </motion.p>

        <motion.button
          className="text-white focus:outline-none bg-slate-600 px-4 py-2 rounded-full"
          variants={fadeInLeft(1.5)}
        >
          Read More
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <img src={img1} className="w-full mt-10 md:mt-0" />
      </motion.div>
    </section>
  );
}

export default About;
