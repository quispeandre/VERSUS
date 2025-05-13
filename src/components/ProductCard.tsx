import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  category,
  isNew = false,
  isSale = false,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl bg-white">
      <div className="relative aspect-square overflow-hidden">
        <Link to={`/producto/${id}`}>
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        {isNew && (
          <span className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs font-bold uppercase rounded">
            Nuevo
          </span>
        )}
        {isSale && (
          <span className="absolute top-2 right-2 bg-[#d33b38] text-white px-2 py-1 text-xs font-bold uppercase rounded">
            Oferta
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-70 p-3 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
          <div className="flex justify-center space-x-2">
            <button 
              className="rounded-full bg-white p-2 text-black hover:bg-[#d33b38] hover:text-white transition-colors" 
              aria-label="Add to cart"
            >
              <ShoppingCart size={18} />
            </button>
            <button 
              className="rounded-full bg-white p-2 text-black hover:bg-[#d33b38] hover:text-white transition-colors" 
              aria-label="Add to wishlist"
            >
              <Heart size={18} />
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <Link to={`/producto/${id}`}>
          <h3 className="font-medium text-gray-900 group-hover:text-[#d33b38] transition-colors">
            {name}
          </h3>
        </Link>
        <p className="text-sm text-gray-500 mb-2">{category}</p>
        <p className="font-bold text-lg text-[#d33b38]">S/ {price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;