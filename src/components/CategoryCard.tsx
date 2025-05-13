import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
  count?: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image, link, count }) => {
  return (
    <Link 
      to={link}
      className="group relative overflow-hidden rounded-lg shadow-md aspect-square"
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-5">
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        {count && <p className="text-gray-200 mb-2">{count} productos</p>}
        <div className="flex items-center text-[#d33b38] font-medium group-hover:translate-x-2 transition-transform">
          <span>Ver categoría</span>
          <ArrowRight size={16} className="ml-1" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;