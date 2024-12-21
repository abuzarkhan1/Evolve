import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaClock, FaCalendarAlt, FaGlobeAmericas } from "react-icons/fa";

const WorkingHours = () => {
  const scheduleData = [
    { day: "Monday", hours: "9:00 AM - 6:00 PM", status: "Open" },
    { day: "Tuesday", hours: "9:00 AM - 6:00 PM", status: "Open" },
    { day: "Wednesday", hours: "9:00 AM - 6:00 PM", status: "Open" },
    { day: "Thursday", hours: "9:00 AM - 6:00 PM", status: "Open" },
    { day: "Friday", hours: "9:00 AM - 5:00 PM", status: "Open" },
    { day: "Saturday", hours: "Closed", status: "Closed" },
    { day: "Sunday", hours: "Closed", status: "Closed" },
  ];

  const isCurrentlyOpen = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    return day >= 1 && day <= 5 && hour >= 9 && hour < (day === 5 ? 17 : 18);
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-20">
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <TextGenerateEffect
            words="Working Hours & Availability"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text"
          />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-lg md:text-xl text-blue-400 font-semibold"
          >
            <FaGlobeAmericas className="text-purple-400" />
            <span>Available Worldwide</span>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
          {/* Status Card */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center gap-4"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-2">
              <FaClock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Current Status</h3>
            <div
              className={`text-lg font-semibold ${
                isCurrentlyOpen() ? "text-green-400" : "text-red-400"
              }`}
            >
              {isCurrentlyOpen() ? "Currently Open" : "Currently Closed"}
            </div>
          </motion.div>

          {/* Schedule Card */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <FaCalendarAlt className="w-6 h-6 text-purple-400" />
              <h3 className="text-2xl font-bold text-white">Weekly Schedule</h3>
            </div>
            <div className="space-y-3">
              {scheduleData.map((schedule, index) => (
                <motion.div
                  key={schedule.day}
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex justify-between items-center py-2 border-b border-white/10 last:border-0"
                >
                  <span className="text-gray-300">{schedule.day}</span>
                  <span
                    className={`font-semibold ${
                      schedule.status === "Open"
                        ? "text-blue-400"
                        : "text-gray-500"
                    }`}
                  >
                    {schedule.hours}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 text-center max-w-2xl mx-auto"
        >
          <p className="text-gray-300">
            Outside of our regular business hours? No worries! Leave us a
            message and we'll get back to you within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkingHours;
