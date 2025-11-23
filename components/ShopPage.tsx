import React, { useEffect, useState } from 'react';
import { getShopCategories } from '../services/productService';
import type { ShopCategory } from '../types';

interface ShopPageProps {
    onSearch: (query: string) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({ onSearch }) => {
    const [categories, setCategories] = useState<ShopCategory[]>([]);

    useEffect(() => {
        setCategories(getShopCategories());
    }, []);

    return (
        <div className="opacity-0 animate-fadeInUp">
            <div className="text-center mb-12">
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-raj-maroon">The Royal Treasury</h1>
                <p className="mt-4 text-lg text-raj-sepia/80 max-w-3xl mx-auto">
                    Explore the vast collections of our kingdom. Each category holds treasures handcrafted with tradition and passion.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {categories.map((category, index) => (
                    <div
                        key={category.name}
                        className="bg-raj-sandstone/50 rounded-lg shadow-lg overflow-hidden flex flex-col group border border-raj-antique-gold/20 transition-all duration-300 hover:shadow-2xl hover:border-raj-antique-gold/50 hover:-translate-y-2 opacity-0 animate-fadeInUp"
                        style={{ animationDelay: `${index * 80}ms` }}
                    >
                        <div className="relative overflow-hidden">
                            <img
                                src={category.imageUrl}
                                alt={category.name}
                                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h2 className="font-serif text-2xl font-bold text-raj-maroon mb-2">{category.name}</h2>
                            <p className="text-raj-sepia/80 text-sm flex-grow mb-6">{category.description}</p>
                            <button
                                onClick={() => onSearch(category.name)}
                                className="mt-auto w-full bg-raj-maroon text-raj-sandstone rounded-md px-4 py-2.5 text-sm font-bold hover:bg-raj-maroon/90 hover:shadow-lg transition-all duration-200"
                            >
                                View Treasures
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};