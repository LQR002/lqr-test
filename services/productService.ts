import type { Product, FilterOptions, GeminiResponse, ShopCategory } from '../types';

const DUMMY_IMAGE_URL = "https://picsum.photos/seed/dummyproduct/400/300";

export const allProducts: Product[] = [
  // Textiles & Apparel
  { id: 'TXA001', name: "Royal Banarasi Silk Saree", description: "Handwoven with pure silk and gold zari work, a timeless piece for grand occasions.", price: 25000, brand: "Kashi Weavers", rating: 4.9, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: "Textiles & Apparel" },
  { id: 'TXA002', name: "Kashmiri Pashmina Shawl", description: "An authentic, hand-spun Pashmina shawl, renowned for its softness and warmth.", price: 18000, brand: "Himalayan Looms", rating: 4.9, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: "Textiles & Apparel" },
  { id: 'TXA003', name: "Lucknowi Chikankari Kurta", description: "Elegant handcrafted Chikankari embroidery on soft cotton fabric, perfect for summer.", price: 3500, brand: "Nawabi Threads", rating: 4.7, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: "Textiles & Apparel" },
  { id: 'TXA004', name: "Men's Khadi Jacket", description: "A versatile and stylish Nehru jacket made from hand-spun, organic Khadi.", price: 4200, brand: "Swadeshi Garments", rating: 4.6, imageUrl: DUMMY_IMAGE_URL, isVerified: false, category: "Textiles & Apparel" },
  { id: 'TXA005', name: "Jaipuri Razai (Quilt)", description: "Lightweight and warm, this traditional Jaipuri quilt is block-printed by hand.", price: 5500, brand: "Rajasthan Textiles", rating: 4.8, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: "Textiles & Apparel" },
  
  // Jewellery & Adornments
  { id: 'JWL001', name: "Maharani's Kundan Necklace", description: "Exquisite handcrafted Kundan necklace with meenakari work, inspired by royal courts.", price: 12500, brand: "Jaipur Kala Kendra", rating: 4.8, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: "Jewellery & Adornments" },
  { id: 'JWL002', name: "Antique Temple Jhumkas", description: "Gold-plated silver jhumkas with intricate carvings of deities, perfect for ethnic wear.", price: 6800, brand: "Dakshin Jewels", rating: 4.9, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: "Jewellery & Adornments" },
  { id: 'JWL003', name: "Silver Payal (Anklets)", description: "Handcrafted sterling silver anklets with delicate bells that create a sweet sound.", price: 4200, brand: "Silverado India", rating: 4.7, imageUrl: DUMMY_IMAGE_URL, isVerified: false, category: "Jewellery & Adornments" },
  { id: 'JWL004', name: "Polki Diamond Ring", description: "An uncut diamond ring set in 22k gold, reflecting timeless Mughal-era elegance.", price: 45000, brand: "Mughal Gems", rating: 5.0, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: "Jewellery & Adornments" },

  // Home & Sacred Decor
  { id: 'HSD001', name: "Brass Nataraja Idol", description: "A beautifully cast brass statue of Lord Shiva as Nataraja, the cosmic dancer.", price: 8500, brand: "Chola Bronzes", rating: 4.9, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: "Home & Sacred Decor" },
  { id: 'HSD002', name: "Marble Inlay Coasters", description: "Set of six marble coasters with delicate floral inlay work, reminiscent of the Taj Mahal.", price: 3200, brand: "Agra Crafts", rating: 4.6, imageUrl: DUMMY_IMAGE_URL, isVerified: false, category: "Home & Sacred Decor" },
  { id: 'HSD003', name: "Pattachitra Painting", description: "A traditional cloth-based scroll painting from Odisha, depicting mythological narratives.", price: 6000, brand: "Utkala Arts", rating: 4.8, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: "Home & Sacred Decor" },
  { id: 'HSD004', name: "Sandalwood Incense Holder", description: "Hand-carved from fragrant Mysore sandalwood, this holder is a piece of art.", price: 1800, brand: "Mysore Fragrances", rating: 4.7, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: "Home & Sacred Decor" },

  // Ayurveda & Wellness
  { id: 'AYW001', name: "Himalayan Shilajit Resin", description: "Pure and potent Shilajit sourced from the high Himalayas for vitality and wellness.", price: 2500, brand: "AyurVeda Essentials", rating: 4.8, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: "Ayurveda & Wellness" },
  { id: 'AYW002', name: "Organic Ashwagandha Powder", description: "An adaptogenic herb to help manage stress and boost energy levels.", price: 850, brand: "Vedic Wellness", rating: 4.7, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: "Ayurveda & Wellness" },
  { id: 'AYW003', name: "Pure Copper Water Bottle", description: "A hammered copper bottle to enjoy the health benefits of Tamra Jal.", price: 1500, brand: "Tamra Vessels", rating: 4.6, imageUrl: DUMMY_IMAGE_URL, isVerified: false, category: "Ayurveda & Wellness" },
  { id: 'AYW004', name: "Kumkumadi Facial Oil", description: "A traditional Ayurvedic beauty secret for glowing skin, made with saffron and herbs.", price: 2200, brand: "Nalanda Naturals", rating: 4.9, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: "Ayurveda & Wellness" },
  
  // Gourmet & Pantry
  { id: 'GMP001', name: "First Flush Darjeeling Tea", description: "The champagne of teas, sourced from the finest estates of Darjeeling.", price: 1800, brand: "Himalayan Brews", rating: 4.9, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: "Gourmet & Pantry" },
  { id: 'GMP002', name: "Malabar Black Peppercorns", description: "The king of spices, whole black peppercorns from the Malabar coast of Kerala.", price: 600, brand: "Spice Route", rating: 4.8, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: "Gourmet & Pantry" },
  { id: 'GMP003', name: "Kashmiri Saffron (Kesar)", description: "The highest grade of Mongra saffron from the valleys of Kashmir.", price: 950, brand: "Pampore Fields", rating: 5.0, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: "Gourmet & Pantry" },
  { id: 'GMP004', name: "Aged Dehraduni Basmati Rice", description: "Two-year-aged Basmati rice known for its long grains and exquisite aroma.", price: 1200, brand: "Ganga Plains Grains", rating: 4.7, imageUrl: DUMMY_IMAGE_URL, isVerified: false, category: "Gourmet & Pantry" },

  // Books & Literature
  { id: 'BKL001', name: "The Bhagavad Gita - Hardcover", description: "A collector's edition with commentary by a renowned spiritual master.", price: 1500, brand: "Gyan Ganga Publications", rating: 5.0, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: "Books & Literature" },
  { id: 'BKL002', name: "Valmiki's Ramayana - Box Set", description: "The complete, unabridged epic in seven volumes with beautiful illustrations.", price: 4500, brand: "Sanskriti Press", rating: 4.9, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: "Books & Literature" },
  { id: 'BKL003', name: "A History of Ancient India", description: "A comprehensive chronicle of India's glorious past, from the Indus Valley to the Gupta Empire.", price: 950, brand: "Takshashila Tomes", rating: 4.7, imageUrl: DUMMY_IMAGE_URL, isVerified: false, category: "Books & Literature" },
  
  // Technology & Electronics
  { id: 'TEC001', name: "Veena Smart Speaker", description: "A smart speaker with voice assistants in 12 Indian languages and premium sound.", price: 7999, brand: "Bharat Electrotech", rating: 4.6, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: "Technology & Electronics" },
  { id: 'TEC002', name: "Maratha Mechanical Keyboard", description: "A high-performance mechanical keyboard with custom Devanagari keycaps.", price: 9500, brand: "Pune Peripherals", rating: 4.8, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: "Technology & Electronics" },
  { id: 'TEC003', name: "Aryabhata Robotics Kit", description: "An advanced STEM robotics kit for students and hobbyists, made in India.", price: 5500, brand: "Vigyanix", rating: 4.7, imageUrl: DUMMY_IMAGE_URL, isVerified: false, category: "Technology & Electronics" },
  
  // Footwear & Leather Goods
  { id: 'FLG001', name: "Jodhpuri Mojari Shoes", description: "Hand-stitched leather Mojaris with intricate Zari embroidery for a royal look.", price: 3800, brand: "Marwari Styles", rating: 4.7, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: "Footwear & Leather Goods" },
  { id: 'FLG002', name: "Kolhapuri Chappals (Men)", description: "Authentic, handcrafted leather sandals from Kolhapur, known for their durability.", price: 1200, brand: "Deccan Leathers", rating: 4.6, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: "Footwear & Leather Goods" },
  { id: 'FLG003', name: "Full-Grain Leather Briefcase", description: "A timeless and durable briefcase for the modern professional, made in Kanpur.", price: 8500, brand: "Kanpur Tannery", rating: 4.8, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: "Footwear & Leather Goods" },
  
  // Furniture & Furnishings
  { id: 'FNF001', name: "Sheesham Wood Bookshelf", description: "A solid wood bookshelf with a natural honey finish, handcrafted in Jodhpur.", price: 19000, brand: "Jodhpur Artisans", rating: 4.8, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: "Furniture & Furnishings" },
  { id: 'FNF002', name: "Hand-knotted Kashmiri Carpet", description: "A luxurious silk-on-silk carpet, a masterpiece of Kashmiri craftsmanship.", price: 75000, brand: "Srinagar Rugs", rating: 5.0, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: "Furniture & Furnishings" },
  { id: 'FNF003', name: "Cane & Bamboo Swing Chair", description: "An eco-friendly and comfortable swing chair, perfect for balconies and living rooms.", price: 6500, brand: "Assam Weaves", rating: 4.6, imageUrl: DUMMY_IMAGE_URL, isVerified: false, category: "Furniture & Furnishings" },

  { id: 'HSD005', name: "Dhokra Art Elephant Statue", description: "Lost-wax casting metal art from Bastar, depicting a ceremonial elephant.", price: 4800, brand: "Bastar Crafts", rating: 4.9, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: "Home & Sacred Decor" },
  { id: 'AYW005', name: "Neem Wood Comb Set", description: "Anti-static and anti-bacterial neem wood combs for healthy hair.", price: 750, brand: "Vedic Wellness", rating: 4.7, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: "Ayurveda & Wellness" },
  { id: 'GMP005', name: "Rajasthani Gatta Curry Mix", description: "An authentic, ready-to-cook mix for the famous Rajasthani delicacy.", price: 450, brand: "Marwar Pantry", rating: 4.6, imageUrl: DUMMY_IMAGE_URL, isVerified: false, category: "Gourmet & Pantry" },
  { id: 'BKL004', name: "Illustrated Panchatantra", description: "The timeless tales of wisdom for children, with beautiful illustrations.", price: 800, brand: "Sanskriti Press", rating: 4.8, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: "Books & Literature" },
  { id: 'JWL005', name: "Thewa Art Pendant Set", description: "Intricate gold foil work on molten glass, a secret art from Rajasthan.", price: 9500, brand: "Pratapgarh Jewels", rating: 4.9, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: "Jewellery & Adornments" },
  { id: 'TXA006', name: "Kanjeevaram Silk Saree", description: "South Indian grandeur in pure mulberry silk, with contrasting borders.", price: 32000, brand: "Kanchi Silks", rating: 4.9, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: "Textiles & Apparel" },
  { id: 'HPC001', name: "Natural Attar Perfume", description: "A traditional, alcohol-free perfume oil with the scent of 'mitti' (first rain).", price: 1250, brand: "Kannauj Perfumery", rating: 4.8, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: "Health & Personal Care" },
  { id: 'HPC002', name: "Sandalwood & Turmeric Soap", description: "Handmade soap with antiseptic and skin-brightening properties.", price: 350, brand: "AyurVeda Essentials", rating: 4.7, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: "Health & Personal Care" },
  { id: 'AUT001', name: "Royal Enfield Leather Saddlebags", description: "Hand-stitched, pure leather saddlebags for the classic wanderer.", price: 9800, brand: "Himalayan Riders", rating: 4.8, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: "Automotive & Accessories" },
  { id: 'FNF004', name: "Jaali Partition Screen", description: "Intricately carved wooden screen for dividing spaces with elegance.", price: 28000, brand: "Saharanpur Artisans", rating: 4.7, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: "Furniture & Furnishings" },
  { id: 'TXA007', name: 'Bandhani Print Dupatta', description: 'Vibrant tie-dye silk dupatta from Gujarat.', price: 2200, brand: 'Kutch Creations', rating: 4.7, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: 'Textiles & Apparel' },
  { id: 'JWL006', name: 'Meenakari Enamel Bangles', description: 'Set of two handcrafted bangles with peacock motifs.', price: 5500, brand: 'Jaipur Kala Kendra', rating: 4.8, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: 'Jewellery & Adornments' },
  { id: 'HSD006', name: 'Terracotta Diya Set', description: 'Set of 12 decorative terracotta lamps for festivals.', price: 800, brand: 'Gramin Crafts', rating: 4.5, imageUrl: DUMMY_IMAGE_URL, isVerified: false, category: 'Home & Sacred Decor' },
  { id: 'AYW006', name: 'Triphala Churna', description: 'A classic Ayurvedic formulation for digestive health.', price: 450, brand: 'Vedic Wellness', rating: 4.6, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: 'Ayurveda & Wellness' },
  { id: 'GMP006', name: 'Himalayan Raw Honey', description: 'Unprocessed, pure honey from the nectar of wildflowers.', price: 750, brand: 'Himalayan Brews', rating: 4.9, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: 'Gourmet & Pantry' },
  { id: 'BKL005', name: 'Chanakya Neeti', description: 'The timeless wisdom of Chanakya on politics and ethics.', price: 500, brand: 'Takshashila Tomes', rating: 4.8, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: 'Books & Literature' },
  { id: 'ACS001', name: 'Handmade Paper Diary', description: 'Eco-friendly diary with a leather cover and recycled paper.', price: 950, brand: 'Sanganer Papers', rating: 4.7, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: 'Arts & Crafts Supplies' },
  { id: 'ACS002', name: 'Wooden Block Printing Stamps', description: 'Set of 10 hand-carved stamps for fabric art.', price: 1500, brand: 'Jaipur Kala Kendra', rating: 4.8, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: 'Arts & Crafts Supplies' },
  { id: 'TEC004', name: 'Surya Solar Power Bank', description: 'A 20000mAh solar-powered power bank for travel.', price: 3500, brand: 'Bharat Electrotech', rating: 4.5, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: 'Technology & Electronics' },
  { id: 'FLG004', name: 'Vegan Leather Messenger Bag', description: 'A stylish and cruelty-free messenger bag for daily use.', price: 4200, brand: 'Ahimsa Styles', rating: 4.6, imageUrl: DUMMY_IMAGE_URL, isVerified: false, category: 'Footwear & Leather Goods' },
  { id: 'AUT002', name: 'Ganesha Car Dashboard Idol', description: 'A small, elegant Ganesha idol for blessings on your travels.', price: 900, brand: 'Mandir Decor', rating: 4.7, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: 'Automotive & Accessories' },
  { id: 'FNF005', name: 'Embroidered Cushion Covers', description: 'Set of 5 cushion covers with intricate Kutchi embroidery.', price: 2800, brand: 'Kutch Creations', rating: 4.8, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: 'Furniture & Furnishings' },
  { id: 'HPC003', name: 'Yoga & Meditation Mat', description: 'A thick, non-slip mat made from natural, sustainable materials.', price: 2500, brand: 'Yogi Essentials', rating: 4.7, imageUrl: DUMMY_IMAGE_URL, isVerified: true, category: 'Health & Personal Care' },
];

const categoryData: Record<string, { description: string, imageUrl: string }> = {
    "Textiles & Apparel": { description: "Discover handwoven sarees, pashmina shawls, and regal attire from every corner of Bharat.", imageUrl: "https://picsum.photos/seed/shop_textiles/600/400" },
    "Jewellery & Adornments": { description: "Adorn yourself with Kundan, Temple, and Meenakari jewellery, crafted by master artisans.", imageUrl: "https://picsum.photos/seed/shop_jewellery/600/400" },
    "Home & Sacred Decor": { description: "Enrich your home with brass murtis, marble art, and traditional paintings that tell a story.", imageUrl: "https://picsum.photos/seed/shop_decor/600/400" },
    "Ayurveda & Wellness": { description: "Embrace holistic well-being with pure herbs, essential oils, and ancient Ayurvedic remedies.", imageUrl: "https://picsum.photos/seed/shop_wellness/600/400" },
    "Gourmet & Pantry": { description: "Savour the authentic flavours of India with exotic spices, rare teas, and regional delicacies.", imageUrl: "https://picsum.photos/seed/shop_gourmet/600/400" },
    "Books & Literature": { description: "Journey through the epics, philosophies, and timeless stories from the literary heart of India.", imageUrl: "https://picsum.photos/seed/shop_books/600/400" },
    "Technology & Electronics": { description: "Experience innovation from a sovereign perspective with technology designed for India.", imageUrl: "https://picsum.photos/seed/shop_tech/600/400" },
    "Footwear & Leather Goods": { description: "Step out in style with handcrafted Juttis, Kolhapuris, and fine leather goods.", imageUrl: "https://picsum.photos/seed/shop_footwear/600/400" },
    "Furniture & Furnishings": { description: "Furnish your kingdom with solid wood furniture, hand-knotted carpets, and artisanal decor.", imageUrl: "https://picsum.photos/seed/shop_furniture/600/400" },
    "Health & Personal Care": { description: "Indulge in natural, handcrafted soaps, attars, and personal care products.", imageUrl: "https://picsum.photos/seed/shop_hpc/600/400" },
    "Automotive & Accessories": { description: "Accessorize your chariot with regal decor and premium, durable equipment.", imageUrl: "https://picsum.photos/seed/shop_auto/600/400" },
    "Arts & Crafts Supplies": { description: "Unleash your creativity with natural dyes, handmade paper, and traditional craft supplies.", imageUrl: "https://picsum.photos/seed/shop_crafts/600/400" },
};

export const getShopCategories = (): ShopCategory[] => {
    const uniqueCategories = [...new Set(allProducts.map(p => p.category))].sort();
    return uniqueCategories.map(name => ({
        name,
        description: categoryData[name]?.description || `Discover the finest treasures in ${name}.`,
        imageUrl: categoryData[name]?.imageUrl || DUMMY_IMAGE_URL,
    }));
};

const generateFiltersFromProducts = (products: Product[]): FilterOptions => {
    const brands = [...new Set(products.map(p => p.brand))].sort();
    const categories = [...new Set(products.map(p => p.category))].sort();
    
    const prices = products.map(p => p.price);
    const maxPrice = prices.length > 0 ? Math.max(...prices) : 0;
    const priceRanges = new Set<string>();

    if (maxPrice > 0) {
        if (maxPrice <= 1000) { priceRanges.add('Under ₹1,000'); }
        else if (maxPrice <= 5000) { priceRanges.add('Under ₹1,000'); priceRanges.add('₹1,000 - ₹2,500'); priceRanges.add('Above ₹2,500'); }
        else if (maxPrice <= 20000) { priceRanges.add('Under ₹5,000'); priceRanges.add('₹5,000 - ₹10,000'); priceRanges.add('₹10,000 - ₹20,000'); priceRanges.add('Above ₹20,000'); }
        else { priceRanges.add('Under ₹10,000'); priceRanges.add('₹10,000 - ₹25,000'); priceRanges.add('₹25,000 - ₹50,000'); priceRanges.add('Above ₹50,000'); }
    }

    return {
        "Category": categories,
        "Brand": brands,
        "Price Range": Array.from(priceRanges),
    };
};

export function searchLocalProducts(query: string): GeminiResponse {
    const normalizedQuery = query.toLowerCase();

    let foundProducts: Product[];

    if (normalizedQuery === '*') {
        foundProducts = allProducts;
    } else {
        foundProducts = allProducts.filter(p => 
            p.name.toLowerCase().includes(normalizedQuery) ||
            p.description.toLowerCase().includes(normalizedQuery) ||
            p.category.toLowerCase().includes(normalizedQuery) ||
            p.brand.toLowerCase().includes(normalizedQuery)
        );
    }
    
    const filters = generateFiltersFromProducts(foundProducts);

    return {
        products: foundProducts,
        filters: filters,
    };
}