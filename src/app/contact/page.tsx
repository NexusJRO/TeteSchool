"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
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

// Define types for the form fields and errors
type FormField = "name" | "email" | "phone" | "message";

type FormData = {
  [K in FormField]: string;
};

type ErrorMessages = {
  name: {
    required: string;
    pattern: string;
  };
  email: {
    required: string;
    pattern: string;
  };
  phone: {
    required: string;
    pattern: string;
  };
  message: {
    required: string;
    minLength: string;
    maxLength: string;
  };
  form: string;
  submission: string;
};

type TranslationType = {
  backToHome: string;
  contactUs: string;
  sendMessage: string;
  formLabels: Record<FormField, string>;
  placeholders: Record<FormField, string>;
  buttons: {
    sending: string;
    sent: string;
    send: string;
  };
  errors: ErrorMessages;
  success: string;
  characters: string;
  contactInfo: {
    phone: {
      title: string;
      value: string;
    };
    email: {
      title: string;
      value: string;
    };
    address: {
      title: string;
      value: string;
    };
  };
};

type Translations = {
  en: TranslationType;
  pt: TranslationType;
};

// Translations object
const translations: Translations = {
  en: {
    backToHome: "Back to home",
    contactUs: "Contact Us",
    sendMessage: "Send us a Message",
    formLabels: {
      name: "Your Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
    },
    placeholders: {
      name: "John Doe",
      email: "john@example.com",
      phone: "(+258) 82 123 5467",
      message: "Write your message here...",
    },
    buttons: {
      sending: "Sending...",
      sent: "Message Sent!",
      send: "Send Message",
    },
    errors: {
      name: {
        required: "Name is required",
        pattern:
          "Name should only contain letters and spaces (2-50 characters)",
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
      form: "Please correct the errors in the form.",
      submission: "Failed to send message. Please try again.",
    },
    success: "Your message has been sent successfully! We'll contact you soon.",
    characters: "characters",
    contactInfo: {
      phone: {
        title: "Phone",
        value: "(+258) 86 212 4985",
      },
      email: {
        title: "Email",
        value: "TJS@tetejuniorschool.com",
      },
      address: {
        title: "Address",
        value: "Mozambique - Tete, Chingodzi",
      },
    },
  },
  pt: {
    backToHome: "Voltar para página inicial",
    contactUs: "Contacte-nos",
    sendMessage: "Envie-nos uma Mensagem",
    formLabels: {
      name: "Seu Nome",
      email: "Email",
      phone: "Telefone",
      message: "Mensagem",
    },
    placeholders: {
      name: "João Silva",
      email: "joao@exemplo.com",
      phone: "(+258) 82 123 5467",
      message: "Escreva sua mensagem aqui...",
    },
    buttons: {
      sending: "Enviando...",
      sent: "Mensagem Enviada!",
      send: "Enviar Mensagem",
    },
    errors: {
      name: {
        required: "Nome é obrigatório",
        pattern: "Nome deve conter apenas letras e espaços (2-50 caracteres)",
      },
      email: {
        required: "Email é obrigatório",
        pattern: "Por favor, insira um endereço de email válido",
      },
      phone: {
        required: "Telefone é obrigatório",
        pattern: "Por favor, insira um número de telefone válido",
      },
      message: {
        required: "Mensagem é obrigatória",
        minLength: "A mensagem deve ter pelo menos 10 caracteres",
        maxLength: "A mensagem não pode exceder 500 caracteres",
      },
      form: "Por favor, corrija os erros no formulário.",
      submission: "Falha ao enviar mensagem. Por favor, tente novamente.",
    },
    success:
      "Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.",
    characters: "caracteres",
    contactInfo: {
      phone: {
        title: "Telefone",
        value: "(+258) 86 212 4985",
      },
      email: {
        title: "Email",
        value: "TJS@tetejuniorschool.com",
      },
      address: {
        title: "Endereço",
        value: "Moçambique - Tete, Chingodzi",
      },
    },
  },
};

// Validation patterns
const PATTERNS: Record<Exclude<FormField, "message">, RegExp> = {
  name: /^[a-zA-Z\s]{2,50}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\+?[\d\s-]{9,20}$/,
};

// Notification Component
type NotificationProps = {
  show: boolean;
  type?: "success" | "error";
  message: string;
  onClose: () => void;
};

const Notification: React.FC<NotificationProps> = ({
  show,
  type = "success",
  message,
  onClose,
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
type InputFieldProps = {
  label: string;
  name: string;
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
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  value,
  error,
  onChange,
  placeholder,
  required = true,
  ...props
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

// Main Form Component
const ContactForm = () => {
  const router = useRouter();
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<FormField, string>>>({});
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
  const validateField = (name: FormField, value: string): string => {
    if (!value) {
      if (name === "message") {
        return t.errors.message.required;
      }
      return t.errors[name].required;
    }

    if (name === "message") {
      if (value.length < 10) return t.errors.message.minLength;
      if (value.length > 500) return t.errors.message.maxLength;
      return "";
    }

    if (PATTERNS[name] && !PATTERNS[name].test(value)) {
      return t.errors[name].pattern;
    }
    return "";
  };

  // Validate all fields
  const validateForm = () => {
    const newErrors: Partial<Record<FormField, string>> = {};
    let isValid = true;

    (Object.keys(formData) as FormField[]).forEach((key) => {
      const error = validateField(key, formData[key]);
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
    const error = validateField(name as FormField, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      setNotification({
        show: true,
        type: "error",
        message: t.errors.form,
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
        message: t.success,
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
      setNotification({
        show: true,
        type: "error",
        message: t.errors.submission,
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
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => router.push("/")}
              className="flex items-center text-white hover:text-blue-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              {t.backToHome}
            </button>

            {/* Language Switcher Buttons */}
            <div className="flex items-center space-x-2">
              <Button
                onClick={() => setLanguage("pt")}
                variant={language === "pt" ? "default" : "outline"}
                size="sm"
                className="bg-white/10 text-white hover:bg-white/20"
              >
                PT
              </Button>
              <Button
                onClick={() => setLanguage("en")}
                variant={language === "en" ? "default" : "outline"}
                size="sm"
                className="bg-white/10 text-white hover:bg-bg-white/10 text-white hover:bg-white/20"
              >
                EN
              </Button>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.contactUs}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 -mt-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-4">
            {Object.entries(t.contactInfo).map(([key, info]) => (
              <Card
                key={key}
                className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-4 rounded-full">
                    {key === "phone" && (
                      <Phone className="w-6 h-6 text-blue-600" />
                    )}
                    {key === "email" && (
                      <Mail className="w-6 h-6 text-blue-600" />
                    )}
                    {key === "address" && (
                      <MapPin className="w-6 h-6 text-blue-600" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{info.title}</h3>
                    <p className="text-blue-600">{info.value}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 p-8 bg-white shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {t.sendMessage}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <InputField
                  label={t.formLabels.name}
                  name="name"
                  value={formData.name}
                  error={errors.name}
                  onChange={handleChange}
                  placeholder={t.placeholders.name}
                  maxLength={50}
                />
                <InputField
                  label={t.formLabels.email}
                  name="email"
                  type="email"
                  value={formData.email}
                  error={errors.email}
                  onChange={handleChange}
                  placeholder={t.placeholders.email}
                />
              </div>

              <InputField
                label={t.formLabels.phone}
                name="phone"
                type="tel"
                value={formData.phone}
                error={errors.phone}
                onChange={handleChange}
                placeholder={t.placeholders.phone}
              />

              <InputField
                label={t.formLabels.message}
                name="message"
                type="textarea"
                value={formData.message}
                error={errors.message}
                onChange={handleChange}
                placeholder={t.placeholders.message}
                rows={4}
                minLength={10}
                maxLength={500}
              />

              <div className="text-right text-sm text-gray-500">
                {formData.message.length}/500 {t.characters}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>
                  {isSubmitting
                    ? t.buttons.sending
                    : isSubmitted
                    ? t.buttons.sent
                    : t.buttons.send}
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
