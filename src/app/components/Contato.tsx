"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import React, { useState } from "react";

export default function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <section id="contact" className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-2xl rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Contact us
          </h2>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300"
                  required
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300"
                  required
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg h-32 focus:outline-none focus:border-blue-500 transition-all duration-300"
                  required
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-green-600 font-semibold"
            >
              Message sent successfully! We will contact you shortly.
            </motion.div>
          )}
        </motion.div>

        {/* Location and Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Google Maps Iframe */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3832.274654822635!2d33.59140027603733!3d-16.154780584537193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19264792bd700251%3A0x7f52d40dddad8ca7!2sPonte%20Samora%20Machel!5e0!3m2!1spt-PT!2smz!4v1733342194673!5m2!1spt-PT!2smz"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Contact Information
            </h3>

            <div className="flex items-center space-x-4">
              <MapPin className="text-blue-700 w-6 h-6" />
              <span>Mozambique - Tete, 123 - Cidade</span>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="text-blue-700 w-6 h-6" />
              <span>(+258) XXXX-XXXX</span>
            </div>

            <div className="flex items-center space-x-4">
              <Mail className="text-blue-700 w-6 h-6" />
              <span>contato@tetejuniorschool.com</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
