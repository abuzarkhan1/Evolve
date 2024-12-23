import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Spotlight } from "./ui/Spotlight";
import {
  FaUsers,
  FaLightbulb,
  FaRocket,
  FaCode,
  FaStar,
  FaChartLine,
} from "react-icons/fa6";

const values = [
  {
    icon: <FaLightbulb className="w-6 h-6 text-yellow-400" />,
    title: "Innovation First",
    description:
      "Pushing boundaries with cutting-edge technologies and creative solutions",
  },
  {
    icon: <FaUsers className="w-6 h-6 text-blue-400" />,
    title: "Client-Centric",
    description:
      "Your success is our priority - we deliver solutions that exceed expectations",
  },
  {
    icon: <FaRocket className="w-6 h-6 text-purple-400" />,
    title: "Rapid Delivery",
    description: "Swift development cycles without compromising on quality",
  },
];

const About = () => {
  return (
    <section className="min-h-screen relative overflow-hidden py-20">
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <TextGenerateEffect
            words="Transforming Ideas Into Digital Reality"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text"
          />
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg md:text-xl text-blue-400 font-semibold"
          >
            Where Innovation Meets Excellence
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              className="space-y-4"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Our Vision
              </h3>
              <p className="text-gray-300 leading-relaxed">
                At Evolve Solutions, we&apos;re more than just developers –
                we&apos;re digital innovators passionate about transforming
                businesses through cutting-edge technology. Our expertise spans
                from complex enterprise solutions to innovative startup
                applications, always delivering excellence at every step.
              </p>
            </motion.div>

            <motion.div
              className="space-y-4 pt-6"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Why Choose Us
              </h3>
              <ul className="space-y-3">
                {[
                  {
                    icon: <FaCode />,
                    text: "Expert development team with diverse tech stack",
                  },
                  {
                    icon: <FaStar />,
                    text: "Proven track record of successful deliveries",
                  },
                  {
                    icon: <FaChartLine />,
                    text: "Scalable solutions for growing businesses",
                  },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    className="flex items-center space-x-3"
                  >
                    <span className="text-blue-400">{item.icon}</span>
                    <span className="text-gray-300">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Column - Values Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="p-6 rounded-2xl bg-black/20 border border-white/10 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="p-3 rounded-lg bg-white/5"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {value.icon}
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-400">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
