import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Spotlight } from "./ui/Spotlight";
import MagicButton from "./MagicButton";
import { FaRocket } from "react-icons/fa6";

const Hero = () => {
  const scrollToServices = () => {
    // Find the services section element
    const servicesSection = document.getElementById("services-section");

    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="min-h-screen pb-20 pt-31 mt-12 relative overflow-hidden">
      {/* Enhanced Spotlights for more dynamic background */}
      <div className="absolute inset-0 z-0">
        <Spotlight
          className="-top-40 left-0 md:left-20 h-screen w-[40vw]"
          fill="white"
        />
        <Spotlight
          className="top-60 right-0 h-screen w-[45vw]"
          fill="rgba(147, 51, 234, 0.7)"
        />
        <Spotlight
          className="bottom-0 left-1/3 h-screen w-[50vw]"
          fill="rgba(59, 130, 246, 0.6)"
        />
      </div>

      {/* Enhanced animated background grid */}
      <div className="absolute inset-0 bg-black-100 bg-grid-white/[0.03]">
        <div className="absolute inset-0 bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black-100/50 to-black-100" />
        </div>
      </div>

      {/* Main content with enhanced animations */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 pt-20">
        {/* Animated logo with enhanced effects */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          className="mb-8 relative"
        >
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 text-transparent bg-clip-text hover:scale-105 transition-transform duration-300">
            EVOLVE SOLUTIONS
          </h2>
          <motion.div
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"
            initial={{ width: "0%" }}
            animate={{ width: "80%" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        {/* Main heading with enhanced text generation effect */}
        <div className="max-w-[90vw] md:max-w-4xl lg:max-w-5xl text-center mb-12">
          <TextGenerateEffect
            words="Code Your Future, Power Your Vision"
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-b from-white to-gray-300 text-transparent bg-clip-text"
          />

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="space-y-4"
          >
            <p className="text-xl md:text-2xl text-blue-400 font-semibold">
              Turning Complex Challenges into Elegant Solutions
            </p>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We don&apos;t just write code – we architect digital experiences
              that transform businesses and define the future of technology.
            </p>
          </motion.div>
        </div>

        {/* Enhanced CTA section with scroll functionality */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <MagicButton
            title="Explore Our Services"
            icon={<FaRocket />}
            position="right"
            otherClasses="scale-110"
            onClick={scrollToServices}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
