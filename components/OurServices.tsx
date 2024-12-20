import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Spotlight } from "./ui/Spotlight";
import { FaCode, FaMobile, FaDatabase, FaGamepad } from "react-icons/fa6";

const services = [
  {
    id: 1,
    icon: <FaCode size={24} />,
    title: "Full Stack Development",
    description:
      "End-to-end web solutions combining robust backend systems with elegant frontend interfaces.",
    techs: ["React", "Node.js", "SpringBoot", "MySql", "MongoDB"],
  },
  {
    id: 2,
    icon: <FaMobile size={24} />,
    title: "App Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    techs: ["React Native"],
  },
  {
    id: 4,
    icon: <FaGamepad size={24} />,
    title: "Game Development",
    description:
      "Immersive gaming experiences across multiple platforms using cutting-edge technologies.",
    techs: ["Unity", "Unreal Engine", "C++"],
  },
  {
    id: 3,
    icon: <FaDatabase size={24} />,
    title: "Data Science",
    description:
      "Transform raw data into actionable insights using advanced analytics and machine learning.",
    techs: ["Python", "TensorFlow", "PyTorch", "Pandas"],
  },
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className="relative group w-full md:w-[calc(50%-2rem)] lg:w-[calc(50%-4rem)] bg-black/20 backdrop-blur-sm rounded-xl p-6 hover:bg-black/30 transition-all duration-300 border border-white/10 hover:border-purple-500/50"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

      <div className="relative z-10">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </div>

        <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text mb-3">
          {service.title}
        </h3>

        <p className="text-gray-300 mb-4 leading-relaxed">
          {service.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {service.techs.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-sm bg-white/5 rounded-full border border-white/10 text-blue-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const OurServices = () => {
  return (
    <div className="min-h-screen relative overflow-hidden py-20">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <TextGenerateEffect
            words="Our Expertise & Services"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text"
          />
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Leveraging cutting-edge technologies to deliver innovative solutions
            across multiple domains
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
