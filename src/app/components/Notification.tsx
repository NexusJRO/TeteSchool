import { CheckCircle, XCircle, X } from "lucide-react";
import React, { useState, useEffect } from "react";

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

export default Notification;
