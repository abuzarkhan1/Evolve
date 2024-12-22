import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Spotlight } from "./ui/Spotlight";

interface ApproachPhaseProps {
  number: string;
  title: string;
  description: string;
  gradient: string;
}

const Approach: React.FC = () => {
  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      {/* Dynamic background with spotlights */}
      <div className="absolute inset-0 z-0">
        <Spotlight
          className="-top-40 left-0 md:left-20 h-screen w-[40vw]"
          fill="rgba(147, 51, 234, 0.2)"
        />
        <Spotlight
          className="top-60 right-0 h-screen w-[45vw]"
          fill="rgba(59, 130, 246, 0.2)"
        />
      </div>

      {/* Animated background grid */}
      <div className="absolute inset-0 bg-black-100 bg-grid-white/[0.03]">
        <div className="absolute inset-0 bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-purple">Approach</span>
          </h2>
        </motion.div>

        <div className="space-y-24">
          {/* Phase 1 */}
          <ApproachPhase
            number="01"
            title="Planning & Strategy"
            description="Deep dive into your business requirements, target audience, and technical constraints. We create comprehensive project roadmaps and choose the perfect tech stack for your needs."
            gradient="from-emerald-400 to-emerald-600"
          />

          {/* Phase 2 */}
          <ApproachPhase
            number="02"
            title="Development & Progress Update"
            description="Our expert team brings your vision to life using cutting-edge technologies and best practices. Regular updates and agile methodology ensure transparent progress."
            gradient="from-pink-400 to-purple-600"
          />

          {/* Phase 3 */}
          <ApproachPhase
            number="03"
            title="Deployment & Launch"
            description="Rigorous testing, optimization, and deployment to ensure your solution performs flawlessly. We provide continued support and maintenance for sustainable growth."
            gradient="from-blue-400 to-blue-600"
          />
        </div>
      </div>
    </section>
  );
};

const ApproachPhase: React.FC<ApproachPhaseProps> = ({
  number,
  title,
  description,
  gradient,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row items-center gap-8"
    >
      {/* Phase number */}
      <div className="md:w-1/4">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className={`text-7xl font-bold bg-gradient-to-r ${gradient} text-transparent bg-clip-text`}
        >
          {number}
        </motion.div>
      </div>

      {/* Content */}
      <div className="md:w-3/4">
        <motion.h3
          whileHover={{ x: 10 }}
          className="text-2xl md:text-3xl font-bold text-white mb-4"
        >
          {title}
        </motion.h3>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default Approach;
