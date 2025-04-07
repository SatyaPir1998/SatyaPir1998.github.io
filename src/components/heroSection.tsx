import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import profileImage from "../assets/image.png";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
              <span className="block text-gray-900">Hi, I'm Your Name</span>
              <span className="block text-indigo-600 mt-2">
                Software Developer
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl">
              I craft exceptional digital experiences with clean code and
              innovative solutions. Specialized in full-stack development with
              4+ years of experience.
            </p>
            <div className="mt-8 flex justify-center md:justify-start space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                <Github className="h-7 w-7" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                <Linkedin className="h-7 w-7" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                <Mail className="h-7 w-7" />
              </a>
            </div>
          </motion.div>
          <motion.div
            className="flex-1 max-w-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-600 rounded-full blur-2xl opacity-20"></div>
              <img
                src={profileImage}
                alt="Satyapir Ghosh"
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto border-4 border-white shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
