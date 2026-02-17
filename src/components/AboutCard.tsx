import React from 'react';

interface AboutCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start bg-slate-700 p-4 rounded-lg shadow-md">
      <div className="mr-4 text-blue-400">{icon}</div>
      <div>
        <h4 className="text-xl font-semibold text-slate-100 mb-1">{title}</h4>
        <p className="text-slate-300">{description}</p>
      </div>
    </div>
  );
};

export default AboutCard;

