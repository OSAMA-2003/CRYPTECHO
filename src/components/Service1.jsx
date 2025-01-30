/** @format */

import { motion } from "framer-motion";
import img2 from "../assets/services.png";

const fadeInLeft = (delay) => ({
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay } },
});

function Service1() {
  return (
    <section className="min-h-screen px-10 grid grid-cols-1 md:grid-cols-2 my-5 md:my-20 overflow-hidden ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <img src={img2} className="w-full mt-10 md:mt-0 mb-10" />
      </motion.div>

      <motion.div
        className="md:pl-32 flex flex-col justify-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeInLeft(0)}
        viewport={{ once: true }}
      >
        <motion.p className="text-xl mb-14 text-white" variants={fadeInLeft(0)}>
          We are keen to create integrated market experiences through detailed
          reports about promising projects, Threads, and Podcasts, in addition
          to innovative visual content that reaches out to various segments of
          the Arab community.
        </motion.p>

        <motion.p className="text-md text-gray-500 mb-20" variants={fadeInLeft(0.5)}>
          Moreover, we are doing our best to select projects based on well-
          studied standards that aim to build trust and encourage foresighted
          investing in those projects that offer the Arab community a chance to
          understand and penetrate the world of the digital economy with
          confidence.
        </motion.p>

        <motion.button
          className="text-white focus:outline-none bg-slate-600 px-4 py-2 rounded-full"
          variants={fadeInLeft(1)}
        >
          Read More
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Service1;