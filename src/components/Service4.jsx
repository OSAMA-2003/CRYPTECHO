/** @format */

import { motion } from "framer-motion";
import img from "../assets/service4.jpg";

const fadeInUp = (delay) => ({
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
});

const fadeIn = (delay) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, delay } },
});

function Service4() {
  return (
    <motion.section
      className="text-white relative min-h-[500px] md:min-h-[1100px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="absolute -z-20 mt-64 w-full"
        variants={fadeIn(0.4)}
      >
        <img src={img} alt="background" />
      </motion.div>

      <motion.div
        className="uppercase text-2xl md:text-8xl mt-20 px-12 z-20"
        variants={fadeInUp(0.8)}
      >
        Ready To Take your{" "}
        <motion.div
          className="text-start md:text-end font-extrabold md:ml-72"
          variants={fadeInUp(1.2)}
        >
          crypto project
        </motion.div>{" "}
        To the next level
      </motion.div>

      <motion.div
        className="justify-center items-center flex flex-col mt-10 w-full px-12"
        variants={fadeInUp(1)}
      >
        <div className="max-w-[500px]">
          <motion.p
            className="text-lg md:text-3xl text-start"
            variants={fadeInUp(1.2)}
          >
            Let's create a marketing plan that puts your brand in front of the
            people who matter most. Contact us today!
          </motion.p>
          <motion.button
            className="text-white focus:outline-none mt-5 bg-slate-600 px-4 py-2 rounded-full"
            variants={fadeInUp(1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Read More
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Service4;