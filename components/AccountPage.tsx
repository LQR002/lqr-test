import React from 'react';
import { TurbanIcon } from './icons/Icons';

export const AccountPage: React.FC = () => {
    return (
        <div className="opacity-0 animate-fadeInUp">
            <div className="text-center mb-12">
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-raj-maroon">Your Royal Account</h1>
                <p className="mt-4 text-lg text-raj-sepia/80 max-w-3xl mx-auto">
                    Manage your decrees, review your history, and update your royal details.
                </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1 flex flex-col items-center bg-raj-sandstone/50 p-8 rounded-lg shadow-md border border-raj-antique-gold/20">
                    <div className="w-32 h-32 rounded-full bg-raj-maroon/10 flex items-center justify-center border-2 border-raj-antique-gold/50 mb-4">
                        <TurbanIcon className="w-20 h-20 text-raj-maroon" />
                    </div>
                    <h2 className="font-serif text-2xl font-bold text-raj-maroon">Maharaja Guest</h2>
                    <p className="text-raj-sepia/70">Esteemed Patron</p>
                </div>
                
                <div className="md:col-span-2 bg-raj-sandstone/50 p-8 rounded-lg shadow-md border border-raj-antique-gold/20">
                    <div className="mb-8">
                        <h3 className="font-serif text-xl font-bold text-raj-maroon border-b border-raj-antique-gold/50 pb-2 mb-4">Order History</h3>
                        <p className="text-raj-sepia/70 text-center py-4">Your past decrees and acquisitions will be chronicled here.</p>
                    </div>
                    <div>
                        <h3 className="font-serif text-xl font-bold text-raj-maroon border-b border-raj-antique-gold/50 pb-2 mb-4">Personal Details</h3>
                        <p className="text-raj-sepia/70 text-center py-4">Your royal credentials and delivery locations will be managed here.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};