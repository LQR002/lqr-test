import React from 'react';
import type { Product } from '../types';
import { TreasureChestIcon, TrashIcon } from './icons/Icons';

interface TreasuresPageProps {
    treasury: Product[];
    onRemoveFromTreasury: (productId: string) => void;
    onNavigateToShop: () => void;
}

export const TreasuresPage: React.FC<TreasuresPageProps> = ({ treasury, onRemoveFromTreasury, onNavigateToShop }) => {
    const subtotal = treasury.reduce((acc, product) => acc + product.price, 0);
    const tax = subtotal * 0.05; // Example 5% tax
    const total = subtotal + tax;
    
    return (
        <div className="opacity-0 animate-fadeInUp">
            <div className="text-center mb-12">
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-raj-maroon">Your Royal Treasury</h1>
                <p className="mt-4 text-lg text-raj-sepia/80 max-w-3xl mx-auto">
                    Review the treasures you have collected on your journey through the kingdom.
                </p>
            </div>
            
            {treasury.length === 0 ? (
                <div className="text-center py-20 bg-raj-sandstone/60 rounded-lg shadow-md border border-raj-antique-gold/20">
                    <TreasureChestIcon className="w-16 h-16 mx-auto text-raj-antique-gold/50 mb-4"/>
                    <h2 className="font-serif text-2xl font-bold text-raj-maroon">Your Treasury is Empty</h2>
                    <p className="text-raj-sepia/70 mt-2 mb-6">The path to discovery awaits. Continue your quest for treasures.</p>
                    <button 
                        onClick={onNavigateToShop}
                        className="bg-raj-maroon text-raj-sandstone font-bold px-8 py-3 rounded-md text-lg hover:bg-raj-maroon/90 hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg border border-raj-antique-gold/50"
                    >
                        Explore the Shop
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-4">
                        {treasury.map(product => (
                            <div key={product.id} className="flex items-center bg-raj-sandstone/50 rounded-lg shadow p-4 border border-raj-sepia/10">
                                <img src={product.imageUrl} alt={product.name} className="w-24 h-24 object-cover rounded-md" />
                                <div className="ml-4 flex-grow">
                                    <h3 className="font-serif font-bold text-raj-maroon">{product.name}</h3>
                                    <p className="text-sm text-raj-sepia/70">{product.brand}</p>
                                    <p className="text-lg font-semibold text-raj-sepia mt-1">₹{product.price.toLocaleString('en-IN')}</p>
                                </div>
                                <button 
                                    onClick={() => onRemoveFromTreasury(product.id)}
                                    className="p-2 text-raj-sepia/60 hover:text-raj-maroon hover:bg-raj-maroon/10 rounded-full transition-colors"
                                    aria-label={`Remove ${product.name} from treasury`}
                                >
                                    <TrashIcon className="w-5 h-5" />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-raj-sandstone/60 rounded-lg shadow-md p-6 sticky top-28 border border-raj-sepia/10">
                            <h2 className="font-serif text-xl font-bold text-raj-maroon border-b border-raj-sepia/10 pb-4 mb-4">Order Summary</h2>
                            <div className="space-y-2">
                                <div className="flex justify-between text-raj-sepia">
                                    <span>Subtotal</span>
                                    <span>₹{subtotal.toLocaleString('en-IN')}</span>
                                </div>
                                <div className="flex justify-between text-raj-sepia/80">
                                    <span>Royal Tax (5%)</span>
                                    <span>₹{tax.toLocaleString('en-IN')}</span>
                                </div>
                                <div className="flex justify-between font-bold text-lg text-raj-maroon pt-4 border-t border-raj-sepia/10">
                                    <span>Total</span>
                                    <span>₹{total.toLocaleString('en-IN')}</span>
                                </div>
                            </div>
                            <button className="mt-6 w-full bg-raj-maroon text-raj-sandstone rounded-md py-3 text-base font-bold hover:bg-raj-maroon/90 hover:shadow-lg transition-all duration-200">
                                Proceed to Checkout
                            </button>
                            <button 
                                onClick={onNavigateToShop}
                                className="mt-3 w-full text-raj-maroon font-semibold hover:underline"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};