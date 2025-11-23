import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center flex-grow py-20 text-center">
      <div className="relative w-24 h-24 animate-regalGlowGold rounded-full">
        {/* Dharmachakra SVG */}
        <svg className="w-full h-full animate-spin" style={{ animationDuration: '3s' }} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="url(#grad)" strokeWidth="4"/>
          <path d="M50 5 L50 95" stroke="url(#grad)" strokeWidth="2"/>
          <path d="M5 50 L95 50" stroke="url(#grad)" strokeWidth="2"/>
          <path d="M18.35 18.35 L81.65 81.65" stroke="url(#grad)" strokeWidth="2"/>
          <path d="M18.35 81.65 L81.65 18.35" stroke="url(#grad)" strokeWidth="2"/>
          <circle cx="50" cy="50" r="10" fill="url(#grad)"/>
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#B8860B', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#D4AF37', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="mt-6 opacity-0 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
        <h3 className="font-serif text-xl font-semibold text-raj-maroon">Summoning Treasures...</h3>
        <p className="text-raj-sepia/70">Our Dharma Engine consults the ancient scrolls for you.</p>
      </div>
    </div>
  );
};