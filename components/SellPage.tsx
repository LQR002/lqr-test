import React from 'react';
import { DharmaIcon, ArthaIcon, KamaIcon } from './icons/Icons';

export const SellPage: React.FC = () => {
    return (
        <div className="opacity-0 animate-fadeInUp">
            <div className="text-center mb-16">
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-raj-maroon">The Merchant's Darbar</h1>
                <p className="mt-4 text-lg text-raj-sepia/80 max-w-3xl mx-auto">
                    Join the righteous marketplace and present your treasures to the nation. We invite the artisans, creators, and merchants of Bharat to our royal court.
                </p>
                 <button className="mt-8 bg-raj-maroon text-raj-sandstone font-bold px-8 py-3 rounded-md text-lg hover:bg-raj-maroon/90 hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg border border-raj-antique-gold/50">
                    Begin Your Journey
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto text-center">
                <div className="bg-raj-sandstone/50 p-8 rounded-lg shadow-lg border border-raj-antique-gold/20">
                    <DharmaIcon className="mx-auto mb-4 text-raj-antique-gold-dark"/>
                    <h3 className="font-serif text-2xl font-bold text-raj-maroon mb-2">The Pillar of Trust</h3>
                    <p className="text-raj-sepia/80">Our platform is built on transparency. With our Dharma Seal program and fair algorithms, your craftsmanship gets the respect it deserves.</p>
                </div>
                <div className="bg-raj-sandstone/50 p-8 rounded-lg shadow-lg border border-raj-antique-gold/20">
                    <ArthaIcon className="mx-auto mb-4 text-raj-antique-gold-dark"/>
                    <h3 className="font-serif text-2xl font-bold text-raj-maroon mb-2">The Pillar of Prosperity</h3>
                    <p className="text-raj-sepia/80">Access a national market with world-class tools, Logistics AI, and a commission structure designed for your growth and prosperity.</p>
                </div>
                <div className="bg-raj-sandstone/50 p-8 rounded-lg shadow-lg border border-raj-antique-gold/20">
                    <KamaIcon className="mx-auto mb-4 text-raj-antique-gold-dark"/>
                    <h3 className="font-serif text-2xl font-bold text-raj-maroon mb-2">The Pillar of Experience</h3>
                    <p className="text-raj-sepia/80">Join a marketplace that is a delight to use. Our advanced 'Vyapaar' Dashboard provides deep insights to help you master your trade.</p>
                </div>
            </div>
        </div>
    );
};