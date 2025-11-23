import React from 'react';

interface FooterProps {
  onSearch: (query: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSearch }) => {
  const FooterLink: React.FC<{href?: string; onClick?: () => void; children: React.ReactNode}> = ({ href = '#', onClick, children }) => (
    <li>
      <a 
        href={href}
        onClick={(e) => { if(onClick) { e.preventDefault(); onClick(); }}}
        className="relative group hover:text-raj-antique-gold transition-colors duration-200"
      >
        <span>{children}</span>
        <span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-raj-antique-gold origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
      </a>
    </li>
  );

  return (
    <footer className="bg-raj-sepia text-raj-sandstone/80 mt-16">
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center sm:text-left">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="font-serif text-2xl font-bold text-raj-antique-gold mb-4">Rajdharama</h3>
            <p className="text-sm">India's Sovereign Commerce Platform.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Press</FooterLink>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Policy</h4>
            <ul className="space-y-2 text-sm">
              <FooterLink href="#">Return Policy</FooterLink>
              <FooterLink href="#">Terms of Use</FooterLink>
              <FooterLink href="#">Privacy</FooterLink>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Sell on Rajdharama</h4>
            <ul className="space-y-2 text-sm">
              <FooterLink href="#">Merchant's Darbar</FooterLink>
              <FooterLink href="#">Logistics AI</FooterLink>
              <FooterLink href="#">Fairness Algorithm</FooterLink>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Customer Care</h4>
            <ul className="space-y-2 text-sm">
              <FooterLink href="#">Help Center</FooterLink>
              <FooterLink href="#">Track Your Order</FooterLink>
              <FooterLink href="#">Customer Protection</FooterLink>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Shop by Category</h4>
            <ul className="space-y-2 text-sm">
              <FooterLink onClick={() => onSearch("Textiles & Apparel")}>Textiles & Apparel</FooterLink>
              <FooterLink onClick={() => onSearch("Jewellery")}>Jewellery</FooterLink>
              <FooterLink onClick={() => onSearch("Home & Sacred Decor")}>Home & Decor</FooterLink>
              <FooterLink onClick={() => onSearch("Ayurveda")}>Wellness</FooterLink>
              <FooterLink onClick={() => onSearch("Technology")}>Technology</FooterLink>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-raj-sandstone/20 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Rajdharama.com. All Rights Reserved. Built for a prosperous India.</p>
        </div>
      </div>
    </footer>
  );
};