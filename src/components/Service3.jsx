/** @format */

import { motion } from "framer-motion";
import img3 from "../assets/service3.png";

const fadeIn = (delay, x = 0) => ({
  hidden: { opacity: 0, x },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay } },
});

function Service3() {
  return (
    <motion.div
      className="mt-10 md:mt-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div className="uppercase text-xl md:text-7xl text-white px-10">
        <motion.div className="text-end" variants={fadeIn(0.4, -100)}>
          empower your crypto
        </motion.div>{" "}
        <br />
        <motion.div className="text-center" variants={fadeIn(1, -100)}>
          Brand with cutting
        </motion.div>
        <br />
        <motion.div variants={fadeIn(1.4, -100)}>edge marketing</motion.div>
        <br />
      </motion.div>

=      <motion.div className="flex justify-between">
        <motion.div
          className="border border-gray-500 p-4 rounded-2xl mx-10 w-[20rem]"
          variants={fadeIn(1.8)}
        >
          <h1 className="md:text-lg text-white">community building:</h1>
          <b className="text-sm text-gray-300">
            Cultivate a loyal and engaged audience across social media platforms
            like Twitter, Telegram, and Discord.
          </b>
        </motion.div>
        <motion.div
          className="border border-gray-500 w-[20rem] p-4 rounded-2xl mx-10"
          variants={fadeIn(2.4)}
        >
          <h1 className="text-lg text-white">Token Launch Campaigns:</h1>
          <b className="text-sm text-gray-300">
            Strategically promote your ICO, STO, or IEO, creating maximum buzz in
            the market
          </b>
        </motion.div>
      </motion.div>

=      <div className="flex justify-center" >
        <img src={img3} className="w-[250px] md:w-[500px]" />
      </div>

=      <motion.div className="flex justify-between">
        <motion.div
          className="border border-gray-500 w-[20rem] p-4 rounded-2xl mx-10"
          variants={fadeIn(3)}
        >
          <h1 className="text-lg text-white">Content Marketing:</h1>
          <b className="text-sm text-gray-300">
            Educational, informative, and engaging content that builds trust and
            awareness around your project.
          </b>
        </motion.div>

        <motion.div
          className="border border-gray-500 w-[20rem] p-4 rounded-2xl mx-10"
          variants={fadeIn(3.5)}
        >
          <h1 className="text-lg text-white">Influencer Marketing:</h1>
          <b className="text-sm text-gray-300">
            Leverage the credibility of crypto influencers to expand your reach
            and establish credibility in the space.
          </b>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Service3;