import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaCode, FaDatabase, FaGamepad } from "react-icons/fa6";
import { FaCloudUploadAlt } from "react-icons/fa";

// Define the type for a service
type Service = {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  techs: string[];
};

const services: Service[] = [
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
    icon: <FaCloudUploadAlt size={24} />,
    title: "DevOps",
    description:
      "Streamline development operations with automated CI/CD pipelines, container orchestration.",
    techs: ["Docker", "Kubernetes", "AWS", "Jenkins", "CI/CD"],
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

const ServiceCard = ({
  service,
  index,
}: {
  service: Service;
  index: number;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
        filter: "brightness(0.2)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "brightness(1)",
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        filter: { duration: 1 },
      }}
      className="relative group w-full md:w-[calc(50%-2rem)] lg:w-[calc(50%-4rem)] bg-black/20 backdrop-blur-sm rounded-xl p-6 hover:bg-black/30 transition-all duration-300 border border-white/10 hover:border-purple-500/50"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

      <div className="relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.2 + 0.3,
            duration: 0.5,
          }}
          className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
        >
          {service.icon}
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.2 + 0.4,
            duration: 0.5,
          }}
          className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text mb-3"
        >
          {service.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.2 + 0.5,
            duration: 0.5,
          }}
          className="text-gray-300 mb-4 leading-relaxed"
        >
          {service.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.2 + 0.6,
            duration: 0.5,
          }}
          className="flex flex-wrap gap-2"
        >
          {service.techs.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-sm bg-white/5 rounded-full border border-white/10 text-blue-400"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

const OurServices = () => {
  return (
    <div
      id="services-section"
      className="min-h-screen relative overflow-hidden py-20"
    >
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <TextGenerateEffect
            words="Our Expertise & Services"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Leveraging cutting-edge technologies to deliver innovative solutions
            across multiple domains
          </motion.p>
        </motion.div>

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
