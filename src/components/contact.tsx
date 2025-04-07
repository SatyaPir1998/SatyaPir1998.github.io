import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-extrabold mb-4">Let's Connect</h2>
          <p className="text-gray-600 mb-8">
            I'm currently open to new opportunities and collaborations. Whether
            you have a question or just want to say hi, feel free to reach out!
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
