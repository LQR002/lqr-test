import React, { useState } from 'react';
import { ChevronDownIcon } from './icons/Icons';

const faqData = [
  {
    question: "What is the Dharma Seal?",
    answer: "The Dharma Seal is our sacred mark of authenticity and quality. Treasures bearing this seal have passed rigorous checks by our experts, ensuring they meet the highest standards of craftsmanship and material purity. It is our vow of trust to you."
  },
  {
    question: "How does the 'Fairness Algorithm' work for sellers?",
    answer: "Unlike other platforms, our product visibility algorithms are transparent. They prioritize product quality, customer ratings, and authenticity over paid promotions. Our goal is to create a level playing field where the finest craftsmanship can truly shine."
  },
  {
    question: "What is Rajdharama's return policy?",
    answer: "Our return policy is guided by our commitment to your satisfaction. For any product that does not meet your expectations, we offer a hassle-free return process within 15 days of delivery, provided the item is in its original condition. For items with the Dharma Seal, we offer an extended 30-day return window."
  },
  {
    question: "How can I track my order?",
    answer: "Once your decree has been dispatched, you will receive a royal scroll (an email and SMS) containing a tracking number and a link to our Logistics AI portal. There, you can see the real-time journey of your treasure from the artisan's workshop to your doorstep."
  },
  {
    question: "Are there any hidden charges?",
    answer: "Absolutely not. The price you see for a treasure is the final price you pay. All taxes and duties are included. Rajdharama is built on the pillar of Dharma (Trust), and that includes complete transparency in pricing."
  }
];

const FAQItem: React.FC<{ q: string; a: string; }> = ({ q, a }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="py-6 border-b border-raj-antique-gold/30">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full text-left group"
            >
                <h3 className="font-serif text-xl font-semibold text-raj-maroon group-hover:text-raj-antique-gold-dark transition-colors">{q}</h3>
                <ChevronDownIcon className={`w-6 h-6 text-raj-maroon/70 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 pt-4' : 'max-h-0'}`}>
                <p className="text-raj-sepia/80">{a}</p>
            </div>
        </div>
    );
};

export const HelpPage: React.FC = () => {
    return (
        <div className="opacity-0 animate-fadeInUp">
            <div className="text-center mb-12">
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-raj-maroon">Royal Assistance Center</h1>
                <p className="mt-4 text-lg text-raj-sepia/80 max-w-3xl mx-auto">
                    Answers to your queries, guided by the principles of our kingdom.
                </p>
            </div>

            <div className="max-w-4xl mx-auto bg-raj-sandstone/50 p-8 rounded-lg shadow-md border border-raj-antique-gold/20">
                {faqData.map((item, index) => (
                    <FAQItem key={index} q={item.question} a={item.answer} />
                ))}
            </div>
        </div>
    );
};