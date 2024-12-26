"use client";

import { Card } from "@/components/ui/card";
import { Send, Phone, Mail, MapPin, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ContactForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Hero Section */}
      <div className="relative h-64">
        <div className="absolute inset-0 "></div>
        <img
          src="/banner/25.png"
          alt="School children playing"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 flex flex-col justify-center px-6 max-w-7xl mx-auto">
          <button
            onClick={() => router.push("/")}
            className="flex items-center text-white mb-6 hover:text-blue-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to home
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 -mt-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Phone</h3>
                  <p className="text-blue-600">(+258) 86 212 4985</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Email</h3>
                  <p className="text-blue-600">TJS@tetejuniorschool.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Address</h3>
                  <p className="text-blue-600">
                    Mozambique - Tete , Bairro Chingodzi
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 p-8 bg-white shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </Card>
        </div>

        {/* Map Section */}
        <div className="mt-12 mb-12 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15329.248435333908!2d33.60565675108063!3d-16.152847351096913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x192647af2c6e9697%3A0x89354af9e1a5e4b8!2sTete%20Junior%20School!5e0!3m2!1spt-BR!2smz!4v1735222529655!5m2!1spt-BR!2smz"
            className="w-full h-96 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
