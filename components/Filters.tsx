import React, { useState } from 'react';
import type { FilterOptions } from '../types';
import { ChevronDownIcon, XIcon } from './icons/Icons';

interface FiltersProps {
  filters: FilterOptions;
  activeFilters: Record<string, string[]>;
  onFilterChange: (filterType: string, value: string) => void;
  onClose?: () => void;
}

const FilterSection: React.FC<{ title: string; options: string[], activeOptions: string[], onFilterChange: (filterType: string, value: string) => void }> = ({ title, options, activeOptions, onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="py-4 border-b border-raj-sepia/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full group"
      >
        <h3 className="font-semibold text-raj-sepia group-hover:text-raj-maroon transition-colors duration-200">{title}</h3>
        <ChevronDownIcon className={`w-5 h-5 text-raj-sepia/60 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} group-hover:text-raj-maroon`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pt-3' : 'max-h-0'}`}>
        <div className="space-y-2">
          {options.map((option) => (
            <div key={option} className="flex items-center group">
              <input
                id={`${title}-${option}`}
                name={`${title}-${option}`}
                type="checkbox"
                checked={activeOptions.includes(option)}
                onChange={() => onFilterChange(title, option)}
                className="h-4 w-4 rounded border-gray-300 accent-raj-maroon focus:ring-raj-maroon/50 transition-all duration-200 cursor-pointer"
              />
              <label htmlFor={`${title}-${option}`} className="ml-3 text-sm text-raj-sepia/80 group-hover:text-raj-sepia transition-colors duration-200 cursor-pointer">
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export const Filters: React.FC<FiltersProps> = ({ filters, activeFilters, onFilterChange, onClose }) => {
  const wrapperClasses = onClose 
    ? "bg-raj-sandstone h-full"
    : "bg-raj-sandstone/60 rounded-lg shadow-md p-6 sticky top-28 border border-raj-sepia/10";

  return (
    <div className={wrapperClasses}>
      <div className="flex justify-between items-center border-b border-raj-sepia/10 pb-4 mb-2">
        <h2 className="font-serif text-xl font-bold text-raj-maroon">Refine Treasures</h2>
        {onClose && (
          <button onClick={onClose} className="p-2 -mr-2 text-raj-sepia hover:text-raj-maroon transition-colors">
            <XIcon className="w-6 h-6" />
          </button>
        )}
      </div>
      {Object.entries(filters).map(([title, options]) => (
        <FilterSection 
          key={title} 
          title={title} 
          options={options}
          activeOptions={activeFilters[title] || []}
          onFilterChange={onFilterChange}
        />
      ))}
    </div>
  );
};