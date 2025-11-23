import React from 'react';
import type { Product } from '../types';
import { StarIcon, TrishulaIcon, TreasureChestIcon } from './icons/Icons';

interface ProductCardProps {
  product: Product;
  animationDelay: number;
  onAddToTreasury: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, animationDelay, onAddToTreasury }) => {
  return (
    <div 
      className="bg-raj-sandstone/50 rounded-lg shadow-md overflow-hidden flex flex-col transition-all duration-300 ease-in-out group hover:shadow-2xl border border-raj-sepia/10 relative opacity-0 animate-fadeInUp"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="absolute inset-0 border-2 border-raj-antique-gold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100 pointer-events-none"></div>

      <div className="relative overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out" 
          loading="lazy"
        />
        {product.isVerified && (
          <div className="absolute top-2 right-2 flex items-center bg-raj-saffron text-raj-sepia text-xs font-semibold px-3 py-1 rounded-full shadow-lg group-hover:animate-regalGlowSaffron">
            <TrishulaIcon className="w-4 h-4 mr-1.5"/>
            <span>Dharma Seal</span>
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-serif text-lg font-bold text-raj-maroon mb-1 truncate group-hover:text-raj-antique-gold-dark transition-colors">{product.name}</h3>
        <p className="text-sm text-raj-sepia/80 mb-2">{product.brand}</p>
        <p className="text-xs text-raj-sepia/70 mb-4 flex-grow h-10">{product.description}</p>
        
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-raj-sepia/10">
          <p className="text-xl font-bold text-raj-sepia">₹{product.price.toLocaleString('en-IN')}</p>
          <div className="flex items-center text-sm text-raj-sepia">
            <StarIcon className="text-raj-antique-gold"/>
            <span className="ml-1 font-medium">{product.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
      <div className="p-4 pt-0 grid grid-cols-2 gap-3">
        <button 
          onClick={() => onAddToTreasury(product)}
          className="col-span-1 w-full flex items-center justify-center bg-raj-antique-gold/10 text-raj-sepia border border-raj-antique-gold/50 rounded-md px-4 py-2 text-sm font-semibold hover:bg-raj-antique-gold/20 hover:border-raj-antique-gold transition-colors duration-200"
        >
          <TreasureChestIcon className="w-4 h-4 mr-2"/>
          Add to Treasury
        </button>
        <button className="col-span-1 w-full bg-raj-maroon text-raj-sandstone rounded-md px-4 py-2 text-sm font-bold hover:bg-raj-maroon/90 hover:shadow-lg transition-all duration-200">
          Buy Now
        </button>
      </div>
    </div>
  );
};