import React, { useRef, useEffect, useState } from 'react';
import { SearchBar } from './SearchBar';
import { DigitalSilkRoadIcon } from './icons/Icons';

interface HeroProps {
    onSearch: (query: string) => void;
    onNavigateToShop: () => void;
}

const AnimatedSection: React.FC<{ children: React.ReactNode, className?: string, animation?: string, delay?: number, as?: React.ElementType }> = ({ children, className = '', animation = 'animate-revealIn3D', delay = 0, as: Tag = 'div' }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const style = inView ? { animationDelay: `${delay}ms`, transformStyle: 'preserve-3d' } as React.CSSProperties : { opacity: 0 };

    return (
        <Tag ref={ref} className={`${className} ${inView ? animation : 'opacity-0'}`} style={style}>
            {children}
        </Tag>
    );
};

const categories = {
  "Textiles & Apparel": ["Banarasi Silk Sarees", "Pashmina Shawls", "Chikankari Kurtas", "Bandhani Dupattas", "Khadi Jackets", "Jaipuri Quilts"],
  "Jewellery & Adornments": ["Kundan Necklaces", "Temple Jewellery", "Meenakari Earrings", "Polki Diamonds", "Silver Anklets (Payal)", "Thewa Art Pendants"],
  "Home & Sacred Decor": ["Brass Idols (Murtis)", "Marble Inlay Art", "Pattachitra Paintings", "Dhokra Craft Figurines", "Terracotta Pottery", "Sandalwood Carvings"],
  "Ayurveda & Wellness": ["Herbal Teas", "Essential Oils", "Ayurvedic Skincare", "Chyawanprash", "Copper Vessels", "Incense & Dhoop"],
  "Gourmet & Pantry": ["Darjeeling Tea", "Malabar Spices", "Himalayan Pink Salt", "Saffron (Kesar)", "Aged Basmati Rice", "Regional Pickles (Achar)"],
  "Books & Literature": ["Vedic Scriptures", "Indian Epics", "Contemporary Fiction", "Spiritual & Philosophy", "Children's Illustrated Books", "Historical Chronicles"],
  "Arts & Crafts Supplies": ["Natural Dyes & Pigments", "Handmade Paper", "Block Printing Stamps", "Pottery Clay & Tools", "Bamboo & Cane Materials", "Fine Art Brushes"],
  "Technology & Electronics": ["Smart Home Devices", "High-Fidelity Audio", "Mobile Accessories", "Wearable Technology", "Made in India Laptops", "Robotics Kits"],
  "Footwear & Leather Goods": ["Jodhpuri Juttis", "Kolhapuri Chappals", "Leather Bags & Wallets", "Handcrafted Sandals", "Vegan Leather Accessories", "Formal Shoes"],
  "Automotive & Accessories": ["Royal Enfield Accessories", "Car Decor & Idols", "Premium Cleaning Kits", "Custom Seat Covers", "Performance Parts", "Electric Scooters"],
  "Furniture & Furnishings": ["Sheesham Wood Furniture", "Hand-knotted Carpets", "Cane & Bamboo Chairs", "Embroidered Cushion Covers", "Jaali Partition Screens", "Antique Reproductions"],
  "Health & Personal Care": ["Natural Soaps & Shampoos", "Organic Cosmetics", "Grooming Kits for Men", "Perfumes (Attar)", "Yoga & Meditation Mats", "Fitness Equipment"],
};

export const Hero: React.FC<HeroProps> = ({ onSearch, onNavigateToShop }) => {
  return (
    <div className="space-y-24 md:space-y-40 [perspective:1000px]">
      <div 
        className="text-center py-20 md:py-24 px-4"
      >
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-raj-maroon mb-4 tracking-tight opacity-0 animate-fadeInUp" style={{ animationDelay: '100ms' }}>
          The Righteous Marketplace
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-raj-sepia/90 mb-8 opacity-0 animate-fadeInUp" style={{ animationDelay: '250ms' }}>
          Commerce built on the pillars of Dharma, Artha, and Kama. Issue your royal decree below to find the treasures you seek.
        </p>
        <div className="max-w-2xl mx-auto mt-8 opacity-0 animate-fadeInUp" style={{ animationDelay: '400ms' }}>
             <SearchBar onSearch={onSearch} isScrolled={false} />
        </div>
        <div className="mt-10 opacity-0 animate-fadeInUp" style={{ animationDelay: '550ms' }}>
            <button 
                onClick={onNavigateToShop}
                className="bg-raj-maroon text-raj-sandstone font-bold px-8 py-3 rounded-md text-lg hover:bg-raj-maroon/90 hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg border border-raj-antique-gold/50">
                Explore All Treasures
            </button>
        </div>
      </div>

       <div className="text-center">
        <AnimatedSection as="h2" className="font-serif text-3xl md:text-4xl font-bold text-raj-maroon mb-16">The Pillars of Our Kingdom</AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <AnimatedSection animation="animate-floatUp" delay={100}>
            <div className="bg-raj-sandstone/50 rounded-lg shadow-lg overflow-hidden group border border-raj-antique-gold/20 transition-all duration-300 hover:shadow-2xl hover:border-raj-antique-gold/50">
              <div className="overflow-hidden">
                <img src="https://images.unsplash.com/photo-1620714223084-86c995246732?q=80&w=800&auto=format&fit=crop" alt="Dharma - The Pillar of Trust" className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-bold text-raj-maroon mb-2">Dharma (Trust)</h3>
                <p className="text-raj-sepia/80">Ironclad security, verified products, and a customer protection policy that is our sacred vow to you.</p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="animate-floatUp" delay={250}>
            <div className="bg-raj-sandstone/50 rounded-lg shadow-lg overflow-hidden group border border-raj-antique-gold/20 transition-all duration-300 hover:shadow-2xl hover:border-raj-antique-gold/50">
              <div className="overflow-hidden">
                <img src="https://images.unsplash.com/photo-1605544413728-952885d56417?q=80&w=800&auto=format&fit=crop" alt="Artha - The Pillar of Prosperity" className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-bold text-raj-maroon mb-2">Artha (Prosperity)</h3>
                <p className="text-raj-sepia/80">Empowering millions of Indian sellers with world-class tools and access to a marketplace built on fairness.</p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="animate-floatUp" delay={400}>
            <div className="bg-raj-sandstone/50 rounded-lg shadow-lg overflow-hidden group border border-raj-antique-gold/20 transition-all duration-300 hover:shadow-2xl hover:border-raj-antique-gold/50">
              <div className="overflow-hidden">
                <img src="https://images.unsplash.com/photo-1599301934991-b9921b798725?q=80&w=800&auto=format&fit=crop" alt="Kama - The Pillar of Experience" className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-bold text-raj-maroon mb-2">Kama (Experience)</h3>
                <p className="text-raj-sepia/80">A seamless, personalized, and multilingual experience that is a delight to use, from the smallest town to the largest metro.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="relative h-[600px] flex items-center justify-start rounded-xl overflow-hidden border-2 border-raj-antique-gold/50 shadow-lg">
          <div 
              className="absolute inset-0 bg-cover bg-fixed bg-center"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541692641319-989cc752a472?q=80&w=1964&auto=format&fit=crop)'}}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-raj-sandstone via-raj-sandstone/70 to-transparent"/>
          <div className="relative z-10 w-full md:w-1/2 p-8 md:p-16">
              <AnimatedSection as="h2" className="font-serif text-3xl md:text-4xl font-bold text-raj-maroon mb-4">The Artisan's Vow</AnimatedSection>
              <AnimatedSection as="p" className="text-lg text-raj-sepia/90" delay={200}>
                  Behind every treasure lies a story—a tradition passed through generations, a craft honed by a lifetime of dedication. We travel to the farthest corners of Bharat to bring these stories to you, ensuring that every purchase supports the masterful hands that created it.
              </AnimatedSection>
          </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <AnimatedSection className="text-center lg:text-left" delay={0}>
          <DigitalSilkRoadIcon className="mx-auto lg:mx-0 mb-6 text-raj-antique-gold-dark"/>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-raj-maroon mb-4">The Digital Silk Road</h2>
          <p className="text-lg text-raj-sepia/90">
            For centuries, India was the world's trade crossroads. Today, that legacy is reborn. Rajdharama connects ancient artistry with modern technology, creating a sovereign digital highway that carries the finest Indian goods not just across the nation, but to the world.
          </p>
        </AnimatedSection>
        <AnimatedSection animation="animate-zoomInFade" delay={200}>
          <img src="https://images.unsplash.com/photo-1555899434-353fA4824d08?q=80&w=800" alt="Digital technology meeting traditional art" className="rounded-xl shadow-lg border-2 border-raj-antique-gold/50 w-full h-auto object-cover" />
        </AnimatedSection>
      </div>
      
      <div className="text-center">
        <AnimatedSection as="h2" className="font-serif text-3xl md:text-4xl font-bold text-raj-maroon mb-4">An Infinite Treasury</AnimatedSection>
        <AnimatedSection as="p" className="max-w-3xl mx-auto text-lg text-raj-sepia/80 mb-12" delay={150}>From handwoven textiles to high-performance technology, our kingdom holds every treasure imaginable. This is India's sovereign marketplace, complete and uncompromising.</AnimatedSection>
        
        <div className="max-w-6xl mx-auto text-left grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
          {Object.entries(categories).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-serif text-xl font-bold text-raj-maroon mb-4 border-b-2 border-raj-antique-gold/50 pb-2">{category}</h3>
              <ul className="space-y-2">
                {items.map(item => (
                  <li key={item} className="text-raj-sepia/80 hover:text-raj-sepia transition-colors duration-200 cursor-pointer" onClick={() => onSearch(item)}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}