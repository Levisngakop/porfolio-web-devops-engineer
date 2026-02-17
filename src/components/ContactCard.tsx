import React from 'react';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  detail: string;
  color: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, detail, color }) => {
  return (
    <div className={`flex items-center space-x-4 p-4 rounded-lg ${color}`}>
      <div className="text-white">{icon}</div>
      <div className="text-white">
        <p className="font-semibold">{title}</p>
        <p className="text-sm">{detail}</p>
      </div>
    </div>
  );
};

export default ContactCard;

