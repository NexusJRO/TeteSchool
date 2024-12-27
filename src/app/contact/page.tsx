"use client";

import { Card } from "@/components/ui/card";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  ArrowLeft,
  CheckCircle,
  XCircle,
  X,
  AlertCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

// Validation patterns
const PATTERNS = {
  name: /^[a-zA-Z\s]{2,50}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\+?[\d\s-]{9,20}$/,
};

// Error messages
const ERROR_MESSAGES = {
  name: {
    required: "Name is required",
    pattern: "Name should only contain letters and spaces (2-50 characters)",
  },
  email: {
    required: "Email is required",
    pattern: "Please enter a valid email address",
  },
  phone: {
    required: "Phone number is required",
    pattern: "Please enter a valid phone number",
  },
  message: {
    required: "Message is required",
    minLength: "Message must be at least 10 characters long",
    maxLength: "Message cannot exceed 500 characters",
  },
} as const;

// Input validation helper
const validateInput = (
  name: keyof typeof ERROR_MESSAGES,
  value: string
): string => {
  if (!value) return ERROR_MESSAGES[name].required;

  if (name === "message") {
    if (value.length < 10) return ERROR_MESSAGES.message.minLength;
    if (value.length > 500) return ERROR_MESSAGES.message.maxLength;
    return "";
  }

  if (!PATTERNS[name]?.test(value)) return ERROR_MESSAGES[name].pattern;
  return "";
};

// Notification Component
const Notification = ({
  show,
  type = "success",
  message,
  onClose,
}: {
  show: boolean;
  type?: "success" | "error";
  message: string;
  onClose: () => void;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-4" : "-translate-y-full"
      }`}
    >
      <div className="bg-white rounded-lg shadow-lg p-4 flex items-center space-x-4 min-w-[320px]">
        {type === "success" ? (
          <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
        ) : (
          <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
        )}
        <p className="text-gray-700 flex-grow">{message}</p>
        <button
          onClick={() => {
            setIsVisible(false);
            onClose();
          }}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

// Input Field Component
const InputField = ({
  label,
  name,
  type = "text",
  value,
  error,
  onChange,
  placeholder,
  required = true,
  ...props
}: {
  label: string;
  name: keyof typeof ERROR_MESSAGES;
  type?: string;
  value: string;
  error?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
  rows?: number;
  minLength?: number;
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full px-4 py-3 rounded-lg border ${
            error ? "border-red-500" : "border-gray-300"
          } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
          {...props}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full px-4 py-3 rounded-lg border ${
            error ? "border-red-500" : "border-gray-300"
          } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
          {...props}
        />
      )}
      {error && (
        <div className="flex items-center mt-1 text-red-500 text-sm">
          <AlertCircle className="w-4 h-4 mr-1" />
          {error}
        </div>
      )}
    </div>
  );
};

// Interface for form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Interface for form errors
interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

// Main Form Component
const ContactForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const [notification, setNotification] = useState({
    show: false,
    type: "success" as "success" | "error",
    message: "",
  });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Validate single field
  const validateField = (name: keyof FormData, value: string) => {
    const error = validateInput(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
    return !error;
  };

  // Validate all fields
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    (Object.keys(formData) as (keyof FormData)[]).forEach((key) => {
      const error = validateInput(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateField(name as keyof FormData, value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      setNotification({
        show: true,
        type: "error",
        message: "Please correct the errors in the form.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
      setIsSubmitted(true);

      setNotification({
        show: true,
        type: "success",
        message:
          "Your message has been sent successfully! We'll contact you soon.",
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
      setNotification({
        show: true,
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Notification
        show={notification.show}
        type={notification.type}
        message={notification.message}
        onClose={() => setNotification((prev) => ({ ...prev, show: false }))}
      />

      {/* Banner Hero Section */}
      <div className="relative h-64">
        <div className="absolute inset-0"></div>
        <img
          src="/banner/25.png"
          alt="School children playing"
          className="w-full h-full object-cover"
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
            Contact Us
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 -mt-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
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
                  <p className="text-blue-600">Mozambique - Tete, Chingodzi</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 p-8 bg-white shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <InputField
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  error={errors.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  maxLength={50}
                />
                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  error={errors.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                />
              </div>

              <InputField
                label="Phone"
                name="phone"
                type="tel"
                value={formData.phone}
                error={errors.phone}
                onChange={handleChange}
                placeholder="(+258) 82 123 5467"
              />

              <InputField
                label="Message"
                name="message"
                type="textarea"
                value={formData.message}
                error={errors.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows={4}
                minLength={10}
                maxLength={500}
              />

              <div className="text-right text-sm text-gray-500">
                {formData.message.length}/500 characters
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>
                  {isSubmitting
                    ? "Sending..."
                    : isSubmitted
                    ? "Message Sent!"
                    : "Send Message"}
                </span>
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
