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
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <Spotlight
          className="-top-40 left-0 md:left-60 h-screen w-[40vw]"
          fill="rgba(59, 130, 246, 0.5)"
        />
        <Spotlight
          className="top-60 right-0 h-screen w-[45vw]"
          fill="rgba(147, 51, 234, 0.4)"
        />
      </div>

      <div className="absolute inset-0 bg-black-100 bg-grid-white/[0.02]">
        <div className="absolute inset-0 bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
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
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Our Vision
              </h3>
              <p className="text-gray-300 leading-relaxed">
                At Evolve Solutions, we're more than just developers – we're
                digital innovators passionate about transforming businesses
                through cutting-edge technology. Our expertise spans from
                complex enterprise solutions to innovative startup applications,
                always delivering excellence at every step.
              </p>
            </div>

            <div className="space-y-4 pt-6">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Why Choose Us
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <FaCode className="text-blue-400" />
                  <span className="text-gray-300">
                    Expert development team with diverse tech stack
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaStar className="text-blue-400" />
                  <span className="text-gray-300">
                    Proven track record of successful deliveries
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaChartLine className="text-blue-400" />
                  <span className="text-gray-300">
                    Scalable solutions for growing businesses
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Values Cards */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="p-6 rounded-2xl bg-black/20 border border-white/10 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-white/5">{value.icon}</div>
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
