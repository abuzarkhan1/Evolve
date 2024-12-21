import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* Content Container */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Content */}
        <motion.div
          className="flex flex-col items-center text-center"
          variants={itemVariants}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-400 to-white lg:max-w-[45vw] mb-6">
            Ready to take <span className="text-purple-500">your</span> digital
            presence to the next level?
          </h1>
          <motion.p
            className="text-gray-300 md:text-lg max-w-2xl md:mt-10 my-5 leading-relaxed"
            variants={itemVariants}
          >
            Reach out to us today and let&apos;s discuss how we can help you to
            achieve your goals and transform your digital vision into reality.
          </motion.p>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <a
              href="mailto:contact@evolvesolutions.com"
              className="inline-block"
            >
              <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 w-full max-w-4xl mx-auto"
            variants={itemVariants}
          ></motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="flex mt-16 md:flex-row flex-col gap-8 justify-between items-center border-t border-gray-800 pt-8"
          variants={itemVariants}
        >
          <p className="text-gray-400 md:text-base text-sm">
            © {currentYear} Evolve Solutions. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialMedia.map((info) => (
              <motion.a
                key={info.id}
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 flex justify-center items-center backdrop-blur-lg bg-black-200/75 rounded-lg border border-gray-800 hover:border-purple-500 transition-colors"
              >
                <img
                  src={info.img}
                  alt={`${info.id} icon`}
                  className="w-5 h-5 opacity-75 hover:opacity-100 transition-opacity"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
