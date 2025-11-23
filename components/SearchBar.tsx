import React, { useState } from 'react';
import { SearchIcon } from './icons/Icons';

interface SearchBarProps {
  onSearch: (query: string) => void;
  initialQuery?: string;
  isScrolled?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, initialQuery = '', isScrolled = false }) => {
  const [query, setQuery] = useState(initialQuery);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };
  
  const searchBarBg = isScrolled ? 'bg-raj-maroon/60' : 'bg-raj-sandstone/80';
  const searchBarText = isScrolled ? 'text-raj-sandstone placeholder-raj-sandstone/70' : 'text-raj-sepia placeholder-raj-sepia/60';
  
  const borderAnimation = isFocused ? 'animate-regalGlowGold' : '';
  const borderGradient = isScrolled ? 'from-raj-antique-gold/80 via-raj-antique-gold-dark/80 to-raj-antique-gold/80' : 'from-raj-antique-gold via-raj-antique-gold-dark to-raj-antique-gold';

  return (
    <form onSubmit={handleSubmit} className="relative w-full h-12 group">
      {/* Ornate border container */}
      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${borderGradient} p-0.5 transition-all duration-500 ease-regal ${borderAnimation}`}>
        {/* Inner background container */}
        <div className={`w-full h-full rounded-full ${searchBarBg} flex items-center`}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Issue a royal decree for 'Kundan jewelry' or 'Banarasi silk'..."
              className={`w-full h-full pl-5 pr-16 rounded-full bg-transparent ${searchBarText} focus:outline-none transition-colors duration-300 ease-in-out`}
            />
        </div>
      </div>
      <button
        type="submit"
        className="absolute inset-y-0 right-0 flex items-center justify-center w-16 text-raj-antique-gold group"
        aria-label="Search"
      >
        <div className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out group-hover:bg-raj-antique-gold/20 group-hover:shadow-lg">
            <SearchIcon className="h-7 w-7 transform transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_4px_rgba(212,175,55,0.9)]"/>
        </div>
      </button>
    </form>
  );
};