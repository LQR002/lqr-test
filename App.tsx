import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { ProductGrid } from './components/ProductGrid';
import { Filters } from './components/Filters';
import { Loader } from './components/Loader';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { ShopPage } from './components/ShopPage';
import { TreasuresPage } from './components/TreasuresPage';
import { AccountPage } from './components/AccountPage';
import { SellPage } from './components/SellPage';
import { HelpPage } from './components/HelpPage';
import { searchLocalProducts } from './services/productService';
import type { Product, FilterOptions, View } from './types';
import { TrishulaIcon, ChevronDownIcon, ObstacleIcon } from './components/icons/Icons';

export default function App() {
  const [view, setView] = useState<View>('home');
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<FilterOptions | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [treasury, setTreasury] = useState<Product[]>([]);
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});

  useEffect(() => {
    if (isFilterOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isFilterOpen]);

  const handleSearch = useCallback((query: string) => {
    if (query === null || query === undefined) return;

    setIsLoading(true);
    setError(null);
    setView('search');
    setProducts([]);
    setFilters(null);
    setActiveFilters({});
    
    setTimeout(() => {
      try {
        const result = searchLocalProducts(query);
        if (result && result.products.length > 0) {
          setProducts(result.products);
          setFilters(result.filters);
        } else {
            setProducts([]);
            setFilters(null);
            setError("The Dharma Engine could not find treasures matching your decree. The kingdom is vast, try another query.");
        }
      } catch (err) {
        console.error("Search failed:", err);
        setError("A disturbance occurred in the treasury. Please try your decree again.");
      } finally {
        setIsLoading(false);
      }
    }, 300);
  }, []);
  
  const handleNavigate = (targetView: View) => setView(targetView);

  const handleAddToTreasury = useCallback((product: Product) => {
    setTreasury(prevTreasury => {
        if (prevTreasury.find(p => p.id === product.id)) {
            alert(`'${product.name}' is already in your Royal Treasury.`);
            return prevTreasury;
        }
        return [...prevTreasury, product];
    });
  }, []);
  
  const handleRemoveFromTreasury = useCallback((productId: string) => {
    setTreasury(prevTreasury => prevTreasury.filter(p => p.id !== productId));
  }, []);

  const handleFilterChange = useCallback((filterType: string, value: string) => {
    setActiveFilters(prev => {
      const newFilters = { ...prev };
      const currentFilterValues = newFilters[filterType] || [];
      
      if (currentFilterValues.includes(value)) {
        newFilters[filterType] = currentFilterValues.filter(v => v !== value);
      } else {
        newFilters[filterType] = [...currentFilterValues, value];
      }
      
      if (newFilters[filterType].length === 0) {
        delete newFilters[filterType];
      }
      
      return newFilters;
    });
  }, []);
  
  const filteredProducts = useMemo(() => {
    if (Object.keys(activeFilters).length === 0) {
      return products;
    }

    return products.filter(product => {
      return Object.entries(activeFilters).every(([filterType, values]) => {
        if (!values.length) return true;

        if (filterType === 'Brand') {
          return values.includes(product.brand);
        }
        if (filterType === 'Category') {
            return values.includes(product.category);
        }
        if (filterType === 'Price Range') {
          return values.some(range => {
            const price = product.price;
            if (range.startsWith('Under ')) {
              const max = parseInt(range.replace('Under ₹', '').replace(/,/g, ''));
              return price < max;
            }
            if (range.startsWith('Above ')) {
              const min = parseInt(range.replace('Above ₹', '').replace(/,/g, ''));
              return price > min;
            }
            const [minStr, maxStr] = range.replace(/₹/g, '').split(' - ');
            const min = parseInt(minStr.replace(/,/g, ''));
            const max = parseInt(maxStr.replace(/,/g, ''));
            return price >= min && price <= max;
          });
        }
        return true;
      });
    });
  }, [products, activeFilters]);

  const renderContent = () => {
    switch (view) {
      case 'home':
        return <Hero onSearch={handleSearch} onNavigateToShop={() => handleNavigate('shop')} />;
      case 'shop':
        return <ShopPage onSearch={handleSearch} />;
      case 'treasures':
        return <TreasuresPage treasury={treasury} onRemoveFromTreasury={handleRemoveFromTreasury} onNavigateToShop={() => handleNavigate('shop')} />;
      case 'account':
        return <AccountPage />;
      case 'sell':
        return <SellPage />;
      case 'help':
        return <HelpPage />;
      case 'search':
        if (isLoading) {
          return <div className="flex-grow flex items-center justify-center"><Loader /></div>;
        }

        if (error && products.length === 0) {
          return (
            <div className="flex-grow flex items-center justify-center text-center p-4">
              <div className="bg-raj-sandstone/80 rounded-lg shadow-md border border-raj-maroon/20 opacity-0 animate-fadeInUp p-8 flex flex-col items-center">
                <ObstacleIcon className="w-12 h-12 text-raj-maroon/50 mb-4"/>
                <h2 className="font-serif text-2xl font-bold mb-2 text-raj-maroon">An Obstacle in the Path</h2>
                <p className="text-raj-sepia/80 max-w-md">{error}</p>
              </div>
            </div>
          );
        }
        
        return (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 opacity-0 animate-fadeInUp" style={{ animationFillMode: 'forwards' }}>
              <aside className="hidden lg:block lg:col-span-1">
                {filters && <Filters filters={filters} activeFilters={activeFilters} onFilterChange={handleFilterChange} />}
              </aside>

              <div className="lg:col-span-3">
                {products.length > 0 && filters && (
                  <div className="lg:hidden mb-6">
                    <button 
                      onClick={() => setIsFilterOpen(true)}
                      className="w-full flex justify-between items-center bg-raj-sandstone/80 border border-raj-sepia/20 rounded-lg px-4 py-3 text-raj-sepia font-semibold shadow-sm hover:bg-white transition-colors"
                    >
                      <span>Refine Treasures</span>
                      <ChevronDownIcon className="w-5 h-5 transform -rotate-90" />
                    </button>
                  </div>
                )}
                
                {filteredProducts.length > 0 ? (
                  <ProductGrid products={filteredProducts} onAddToTreasury={handleAddToTreasury} />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center py-20 bg-raj-sandstone/80 rounded-lg shadow-md border border-raj-antique-gold/20 opacity-0 animate-fadeInUp">
                    <TrishulaIcon className="w-12 h-12 text-raj-antique-gold/50 mb-4"/>
                    <h2 className="font-serif text-2xl font-bold mb-2 text-raj-maroon">No Treasures Found</h2>
                    <p className="text-raj-sepia/70">Your decree yielded no results for the current filters. Perhaps try a different refinement?</p>
                  </div>
                )}
              </div>
            </div>
            
            {filters && (
              <div className={`lg:hidden fixed inset-0 z-50 flex transition-opacity duration-300 ${isFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="absolute inset-0 bg-black/60" onClick={() => setIsFilterOpen(false)} />
                <div className={`relative bg-raj-sandstone w-full max-w-sm p-6 overflow-y-auto transition-transform duration-300 ease-in-out ${isFilterOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                  <Filters filters={filters} activeFilters={activeFilters} onFilterChange={handleFilterChange} onClose={() => setIsFilterOpen(false)} />
                </div>
              </div>
            )}
          </>
        );
      default:
        return <Hero onSearch={handleSearch} onNavigateToShop={() => handleNavigate('shop')} />;
    }
  }

  return (
    <div className="flex flex-col min-h-screen font-sans text-raj-sepia">
      <Header 
        treasury={treasury} 
        onNavigateHome={() => handleNavigate('home')} 
        onNavigateToShop={() => handleNavigate('shop')}
        onNavigateToTreasures={() => handleNavigate('treasures')}
        onNavigateToAccount={() => handleNavigate('account')}
        onNavigateToSell={() => handleNavigate('sell')}
        onNavigateToHelp={() => handleNavigate('help')}
      />
      <main className="flex flex-col flex-grow w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
      <Footer onSearch={handleSearch} />
    </div>
  );
}