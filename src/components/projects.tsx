import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold text-center mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my technical
            expertise and problem-solving abilities.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800"
              alt="Project"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Project Name
              </h3>
              <p className="mt-2 text-gray-600">
                A sophisticated web application built with React, Node.js, and
                PostgreSQL, featuring real-time updates and seamless user
                experience.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                  PostgreSQL
                </span>
              </div>
              <div className="mt-6 flex space-x-4">
                <a
                  href="#"
                  className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-500"
                >
                  View Project <ExternalLink className="ml-1 h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center text-sm text-gray-600 hover:text-gray-500"
                >
                  <Github className="mr-1 h-4 w-4" /> Code
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
