import React from "react";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold text-center mb-4">
            Experience
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Over 5 years of experience in developing scalable web applications
            and leading development teams.
          </p>
        </motion.div>
        <div className="space-y-8">
          <motion.div
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Senior Software Developer
                </h3>
                <p className="text-indigo-600 font-medium">Tech Company Inc.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                    AWS
                  </span>
                </div>
              </div>
              <div className="mt-2 md:mt-0 text-gray-500">2020 - Present</div>
            </div>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Led development of microservices architecture serving 1M+ users
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Improved application performance by 40% through optimization
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Mentored junior developers and implemented best practices
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
