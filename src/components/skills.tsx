import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Database, Github as Git } from "lucide-react";

const SkillsSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold text-center mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            A comprehensive toolkit that enables me to build robust and scalable
            applications.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <motion.div
            className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">
              <Code2 className="h-10 w-10 text-indigo-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Frontend</h3>
            <p className="mt-2 text-gray-600">
              React, TypeScript, Tailwind CSS
            </p>
          </motion.div>
          <motion.div
            className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">
              <Server className="h-10 w-10 text-indigo-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Backend</h3>
            <p className="mt-2 text-gray-600">Node.js, Express, GraphQL</p>
          </motion.div>
          <motion.div
            className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">
              <Database className="h-10 w-10 text-indigo-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Database</h3>
            <p className="mt-2 text-gray-600">PostgreSQL, MongoDB, Redis</p>
          </motion.div>
          <motion.div
            className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">
              <Git className="h-10 w-10 text-indigo-600" />
            </div>
            <h3 className="font-semibold text-gray-900">DevOps</h3>
            <p className="mt-2 text-gray-600">Docker, AWS, CI/CD</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
