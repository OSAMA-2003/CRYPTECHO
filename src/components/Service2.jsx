/** @format */

import { motion } from "framer-motion";
import img from "../assets/service2.jpg";

const fadeInRight = (delay) => ({
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay } },
});

function Service2() {
  return (
    <div className="relative">
      <div className="Background absolute  !-z-10 h-full w-full flex items-start md:items-center justify-center mt-40 md:mt-0 overflow-hidden">
        <img src={img} />
      </div>
      <div className="w-full min-h-[60vh] md:min-h-[100vh] overflow-hidden">
        <motion.div
          className="flex flex-col text-start pl-10 md:text-end mt-36 text-white max-w-[100%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1
            className="uppercase text-[2rem] md:text-[5rem] z-20 md:pl-52 pr-10 wid"
            variants={fadeInRight(0.5)}
          >
            we are proud of our Broad network of relations in the UAE, especially in dubai
          </motion.h1>
          <motion.div className="mr-10" variants={fadeInRight(0.9)}>
            <motion.p variants={fadeInRight(0.5)}>
              as we offer the proper support to companies starting from <br />
              studying project ideas and finding investors to facilitating <br />
              their launch and advertisement in the region
            </motion.p>
            <motion.button
              className="text-white focus:outline-none mt-5 bg-slate-600 px-4 py-2 rounded-full"
              variants={fadeInRight(1.5)}
            >
              Read More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Service2;