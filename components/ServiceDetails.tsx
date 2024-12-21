"use client";
import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { Spotlight } from "@/components/ui/Spotlight";
import {
  FaCode,
  FaMobile,
  FaDatabase,
  FaGamepad,
  FaCheck,
} from "react-icons/fa6";
import Link from "next/link";
import { useParams } from "next/navigation";

// Define types for service details
type ServiceDetail = {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  longDescription: string;
  techs: string[];
  benefits: string[];
  processSteps: {
    title: string;
    description: string;
  }[];
  deliverables: string[];
};

// Extended service details
const servicesData: Record<string, ServiceDetail> = {
  "full-stack-development": {
    id: 1,
    icon: <FaCode size={24} />,
    title: "Full Stack Development",
    description:
      "End-to-end web solutions combining robust backend systems with elegant frontend interfaces.",
    longDescription:
      "Our full-stack development service delivers comprehensive web solutions that seamlessly integrate powerful backend functionality with intuitive frontend experiences. We leverage cutting-edge technologies and best practices to create scalable, secure, and high-performance applications tailored to your specific needs.",
    techs: [
      "React",
      "Node.js",
      "SpringBoot",
      "MySQL",
      "MongoDB",
      "TypeScript",
      "Docker",
      "AWS",
    ],
    benefits: [
      "Seamless integration between frontend and backend systems",
      "Scalable architecture for future growth",
      "Optimized performance and loading times",
      "Secure data handling and user authentication",
      "Responsive design for all devices",
    ],
    processSteps: [
      {
        title: "Requirements Analysis",
        description:
          "Deep dive into your business needs and technical requirements",
      },
      {
        title: "Architecture Design",
        description: "Creating scalable and maintainable system architecture",
      },
      {
        title: "Development & Testing",
        description:
          "Iterative development with continuous testing and feedback",
      },
      {
        title: "Deployment",
        description: "Smooth deployment with minimal downtime",
      },
    ],
    deliverables: [
      "Complete source code",
      "Technical documentation",
      "API documentation",
      "Deployment guides",
      "Training materials",
    ],
  },
  "app-development": {
    id: 2,
    icon: <FaMobile size={24} />,
    title: "App Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    longDescription:
      "We specialize in creating powerful, user-friendly mobile applications that work seamlessly across iOS and Android platforms. Our team combines creative design with technical expertise to deliver apps that engage users and drive business growth.",
    techs: [
      "React Native",
      "Swift",
      "Kotlin",
      "Firebase",
      "Redux",
      "Native APIs",
    ],
    benefits: [
      "Cross-platform compatibility",
      "Native performance and feel",
      "Offline functionality",
      "Push notifications",
      "Seamless updates",
    ],
    processSteps: [
      {
        title: "UI/UX Design",
        description: "Creating intuitive and engaging user interfaces",
      },
      {
        title: "Native Development",
        description: "Building platform-specific features and optimizations",
      },
      {
        title: "Testing & QA",
        description: "Comprehensive testing across devices and platforms",
      },
      {
        title: "App Store Launch",
        description: "Handling submission and approval process",
      },
    ],
    deliverables: [
      "Native mobile applications",
      "Source code",
      "Design assets",
      "App store listings",
      "Analytics integration",
    ],
  },
  "game-development": {
    id: 3,
    icon: <FaGamepad size={24} />,
    title: "Game Development",
    description:
      "Immersive gaming experiences across multiple platforms using cutting-edge technologies.",
    longDescription:
      "Our game development team creates engaging and immersive gaming experiences that captivate players. We utilize the latest gaming technologies and engines to build games that perform well across multiple platforms.",
    techs: ["Unity", "Unreal Engine", "C++", "WebGL", "Blender", "Maya"],
    benefits: [
      "High-performance graphics",
      "Cross-platform compatibility",
      "Engaging gameplay mechanics",
      "Optimized asset loading",
      "Multiplayer capabilities",
    ],
    processSteps: [
      {
        title: "Game Design",
        description: "Creating compelling game mechanics and storylines",
      },
      {
        title: "Asset Creation",
        description: "Developing 2D/3D assets and animations",
      },
      {
        title: "Core Development",
        description: "Building game mechanics and systems",
      },
      {
        title: "Testing & Polish",
        description: "Ensuring smooth gameplay and performance",
      },
    ],
    deliverables: [
      "Game executable",
      "Source code",
      "Asset packages",
      "Documentation",
      "Marketing materials",
    ],
  },
  "data-science": {
    id: 4,
    icon: <FaDatabase size={24} />,
    title: "Data Science",
    description:
      "Transform raw data into actionable insights using advanced analytics and machine learning.",
    longDescription:
      "Our data science services help businesses make data-driven decisions through advanced analytics and machine learning solutions. We transform complex data into clear, actionable insights that drive business growth.",
    techs: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Pandas",
      "Scikit-learn",
      "Jupyter",
    ],
    benefits: [
      "Data-driven decision making",
      "Predictive analytics",
      "Process automation",
      "Real-time insights",
      "Scalable solutions",
    ],
    processSteps: [
      {
        title: "Data Collection",
        description: "Gathering and cleaning relevant data sources",
      },
      {
        title: "Analysis & Modeling",
        description: "Building and training ML models",
      },
      {
        title: "Implementation",
        description: "Deploying models to production",
      },
      {
        title: "Monitoring",
        description: "Continuous model improvement and maintenance",
      },
    ],
    deliverables: [
      "ML models",
      "Data pipelines",
      "Analysis reports",
      "API endpoints",
      "Documentation",
    ],
  },
};

const ServiceDetailPage = () => {
  const params = useParams();
  const serviceId = params.serviceId as string;
  const service = servicesData[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Service Not Found
          </h1>
          <Link
            href="/"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden py-20">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <Spotlight
          className="-top-40 left-0 md:left-20 h-screen w-[40vw]"
          fill="white"
        />
        <Spotlight
          className="top-60 right-0 h-screen w-[45vw]"
          fill="rgba(147, 51, 234, 0.7)"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            {service.icon}
          </motion.div>

          <TextGenerateEffect
            words={service.title}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text"
          />

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {service.longDescription}
          </motion.p>
        </div>

        {/* Technologies Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Technologies We Use
          </h3>
          <div className="flex flex-wrap gap-3">
            {service.techs.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-white/5 rounded-full border border-purple-500/20 text-blue-400 hover:border-purple-500/50 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Key Benefits
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/50 transition-colors duration-300"
              >
                <FaCheck className="text-green-400 mt-1" />
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Our Process
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {service.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/50 transition-colors duration-300"
              >
                <h4 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Deliverables Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            What You Get
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {service.deliverables.map((deliverable, idx) => (
              <div
                key={idx}
                className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/50 transition-colors duration-300"
              >
                <p className="text-gray-300">{deliverable}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-bold hover:opacity-90 transition-opacity duration-300"
          >
            Start Your Project
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
