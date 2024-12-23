import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import {
  FaLocationArrow,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa6";

const socialLinks = [
  {
    id: "linkedin",
    icon: <FaLinkedin className="w-5 h-5" />,
    href: "#",
  },
  {
    id: "github",
    icon: <FaGithub className="w-5 h-5" />,
    href: "#",
  },
  {
    id: "twitter",
    icon: <FaTwitter className="w-5 h-5" />,
    href: "#",
  },
  {
    id: "instagram",
    icon: <FaInstagram className="w-5 h-5" />,
    href: "#",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden py-20" id="contact">
      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <TextGenerateEffect
            words="Ready to Transform Your Digital Vision?"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text"
          />
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg md:text-xl text-blue-400 font-semibold"
          >
            Let&apos;s Create Something Extraordinary Together
          </motion.p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: "Email Us",
              content: "contact@evolvesolutions.com",
              icon: <FaLocationArrow className="w-6 h-6 text-purple-400" />,
            },
            {
              title: "Our Location",
              content: "Mardan",
              icon: <FaLocationArrow className="w-6 h-6 text-blue-400" />,
            },
            {
              title: "Working Hours",
              content: "Mon - Fri: 9AM - 6PM",
              icon: <FaLocationArrow className="w-6 h-6 text-yellow-400" />,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-black/20 border border-white/10 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <motion.div
                  className="p-3 rounded-lg bg-white/5"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-400">{item.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center space-x-6 mb-12"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="p-3 rounded-lg bg-black/20 border border-white/10 backdrop-blur-sm hover:border-purple-500/50 text-gray-400 hover:text-white transition-all duration-300"
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center border-t border-white/10 pt-8"
        >
          <p className="text-gray-400">
            © {currentYear} Evolve Solutions. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
