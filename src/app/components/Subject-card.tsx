import React from "react";

interface SubjectCardProps {
  title: string;
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>; // Adicionando 'style' ao tipo do 'Icon'
  color: string;
}

export function SubjectCard({ title, icon: Icon, color }: SubjectCardProps) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl shadow-lg 
        transform transition-all duration-300 hover:scale-105
        w-full aspect-square flex flex-col justify-center items-center
        p-4 text-center cursor-default
      `}
      style={{
        backgroundColor: color + "20", // Light background with 20% opacity
        borderLeft: `6px solid ${color}`,
      }}
    >
      <div
        className={`
          mb-4 w-20 h-20 rounded-full flex items-center justify-center
          shadow-md transition-all duration-300
        `}
        style={{
          backgroundColor: color + "30", // Slightly more opaque for the icon background
          transform: "translateY(-10px)",
        }}
      >
        <Icon className={`w-10 h-10`} style={{ color: color }} />
      </div>
      <h3
        className="
          text-lg font-bold 
          text-gray-800 
          transition-colors duration-300
        "
      >
        {title}
      </h3>
    </div>
  );
}
