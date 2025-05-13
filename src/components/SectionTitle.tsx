import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  center = false 
}) => {
  return (
    <div className={`mb-10 ${center ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
        {title}
        <span className="block h-1 w-full mt-2 bg-[#d33b38]"></span>
      </h2>
      {subtitle && (
        <p className="text-gray-600 mt-3 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;