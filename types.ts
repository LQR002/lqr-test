export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  brand: string;
  rating: number;
  imageUrl: string;
  isVerified: boolean;
  category: string;
}

export interface FilterOptions {
  [key: string]: string[];
}

export interface GeminiResponse {
  products: Product[];
  filters: FilterOptions;
}

export interface ShopCategory {
    name: string;
    description: string;
    imageUrl: string;
}

export type View = 'home' | 'shop' | 'search' | 'treasures' | 'account' | 'sell' | 'help';

export interface HeaderProps {
  treasury: Product[];
  onNavigateHome: () => void;
  onNavigateToShop: () => void;
  onNavigateToTreasures: () => void;
  onNavigateToAccount: () => void;
  onNavigateToSell: () => void;
  onNavigateToHelp: () => void;
}