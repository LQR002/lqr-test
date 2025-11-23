import React, { useState, useEffect } from 'react';
import { TurbanIcon, MapPinIcon, TreasureChestIcon, ChevronDownIcon, MenuIcon, XIcon } from './icons/Icons';
import type { HeaderProps } from '../types';

export const Header: React.FC<HeaderProps> = ({ 
  treasury, 
  onNavigateHome, 
  onNavigateToShop,
  onNavigateToTreasures,
  onNavigateToAccount,
  onNavigateToSell,
  onNavigateToHelp,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const treasuryCount = treasury.length;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };
    window.addEventListener('scroll', handleScroll);

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);
  
  const handleNavigationAndCloseMenu = (navFunction: () => void) => (e: React.MouseEvent) => {
    e.preventDefault();
    navFunction();
    setIsMenuOpen(false);
  };

  const handleGenericClick = (featureName: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    alert(`The '${featureName}' Darbar is currently under construction. We await your esteemed presence soon!`);
  };

  const headerClasses = `
    sticky top-0 z-50 transition-all duration-500 ease-regal 
    ${isScrolled 
      ? 'bg-raj-maroon/80 backdrop-blur-lg shadow-2xl shadow-raj-sepia/20' 
      : 'bg-gradient-to-b from-raj-sandstone/30 to-transparent'
    }
  `;

  const linkColor = isScrolled ? 'text-raj-sandstone/90 hover:text-raj-antique-gold' : 'text-raj-sepia hover:text-raj-maroon';
  const iconColor = isScrolled ? 'text-raj-sandstone/90 group-hover:text-raj-antique-gold' : 'text-raj-sepia group-hover:text-raj-maroon';

  return (
    <>
      <header className={headerClasses}>
        <div className="relative w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigateHome(); }} className="font-serif text-3xl font-bold tracking-wider text-raj-antique-gold transition-all duration-300 hover:drop-shadow-[0_0_5px_rgba(212,175,55,0.7)]">
                Rajdharama
              </a>
            </div>

            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <a href="#" onClick={handleGenericClick("Deliver to")} className={`flex items-center space-x-2 group ${linkColor} transition-colors duration-300`}>
                <MapPinIcon className={`w-6 h-6 flex-shrink-0 ${iconColor} transition-colors duration-300`} />
                <div className="flex flex-col text-xs leading-tight">
                  <span className="opacity-80">Deliver to</span>
                  <span className="font-semibold tracking-wide">400001</span>
                </div>
                <ChevronDownIcon className="w-4 h-4 opacity-70 mt-1 self-start"/>
              </a>
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigateToSell(); }} className={`text-sm font-medium ${linkColor} transition-colors duration-300`}>Sell on Rajdharama</a>
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigateToHelp(); }} className={`text-sm font-medium ${linkColor} transition-colors duration-300`}>Help Center</a>
               <a href="#" onClick={(e) => { e.preventDefault(); onNavigateToShop(); }} className={`text-sm font-medium ${linkColor} transition-colors duration-300`}>Shop</a>
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigateToAccount(); }} className={`flex items-center space-x-3 group ${linkColor} transition-colors duration-300`}>
                <TurbanIcon className={`w-6 h-6 ${iconColor} transition-colors duration-300`} />
                <span className="text-sm font-medium">Account</span>
              </a>
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigateToTreasures(); }} className={`relative flex items-center space-x-3 group ${linkColor} transition-colors duration-300`}>
                <TreasureChestIcon className={`w-6 h-6 ${iconColor} transition-colors duration-300`} />
                <span className="text-sm font-medium">Treasures</span>
                {treasuryCount > 0 && (
                  <span className="absolute -top-1 -right-2 bg-raj-saffron text-raj-sepia text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-fadeIn">
                    {treasuryCount}
                  </span>
                )}
              </a>
            </nav>

            <div className="lg:hidden flex items-center gap-2">
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigateToTreasures(); }} className={`relative group p-2 ${linkColor}`}>
                  <TreasureChestIcon className={`w-7 h-7 ${iconColor}`} />
                  {treasuryCount > 0 && (
                     <span className="absolute top-1 right-0 bg-raj-saffron text-raj-sepia text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-fadeIn">
                        {treasuryCount}
                    </span>
                  )}
              </a>
              <button onClick={() => setIsMenuOpen(true)} className={`${iconColor} p-2`}>
                <MenuIcon className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
        <div className={`absolute bottom-0 left-0 w-full h-[1px] transition-colors duration-500 ease-regal ${isScrolled ? 'bg-raj-antique-gold/80' : 'bg-raj-antique-gold/40'}`}></div>
      </header>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-50 bg-raj-maroon transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-5">
            <div className="flex justify-between items-center mb-12">
                <a href="#" onClick={handleNavigationAndCloseMenu(onNavigateHome)} className="font-serif text-3xl font-bold tracking-wider text-raj-antique-gold">
                    Rajdharama
                </a>
                <button onClick={() => setIsMenuOpen(false)} className="text-raj-sandstone p-2">
                    <XIcon className="w-7 h-7"/>
                </button>
            </div>

            <nav className="mt-12 flex flex-col items-center space-y-8 text-raj-sandstone text-lg font-medium">
              <a href="#" onClick={handleNavigationAndCloseMenu(onNavigateToShop)} className="hover:text-raj-antique-gold transition-colors">Shop</a>
              <a href="#" onClick={handleNavigationAndCloseMenu(onNavigateToTreasures)} className="relative flex items-center space-x-3 group hover:text-raj-antique-gold transition-colors">
                  <TreasureChestIcon className="w-7 h-7"/>
                  <span>Treasures</span>
                   {treasuryCount > 0 && (
                    <span className="absolute -top-1 -right-2 bg-raj-saffron text-raj-sepia text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-fadeIn">
                        {treasuryCount}
                    </span>
                   )}
              </a>
              <a href="#" onClick={handleNavigationAndCloseMenu(onNavigateToAccount)} className="flex items-center space-x-3 group hover:text-raj-antique-gold transition-colors">
                  <TurbanIcon className="w-7 h-7"/>
                  <span>Account</span>
              </a>
               <a href="#" onClick={handleNavigationAndCloseMenu(onNavigateToSell)} className="hover:text-raj-antique-gold transition-colors">Sell on Rajdharama</a>
              <a href="#" onClick={handleNavigationAndCloseMenu(onNavigateToHelp)} className="hover:text-raj-antique-gold transition-colors">Help Center</a>
              <a href="#" onClick={handleGenericClick("Deliver to")} className="mt-4 flex items-center space-x-2 group hover:text-raj-antique-gold transition-colors">
                <MapPinIcon className="w-7 h-7 flex-shrink-0" />
                <div className="flex items-center text-lg">
                  <span>Deliver to <span className="font-bold">400001</span></span>
                  <ChevronDownIcon className="w-5 h-5 ml-1"/>
                </div>
              </a>
            </nav>
        </div>
      </div>
    </>
  );
};