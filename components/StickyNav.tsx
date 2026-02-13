
import React, { useState, useEffect } from 'react';
import { MagnusLogo } from './icons/MagnusLogo';

const StickyNav: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[rgba(17,17,17,0.95)] shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <a href="#" className="flex items-center gap-3">
                        <MagnusLogo className="h-8 w-auto text-[#CC0000]" />
                        <span className="font-display font-bold text-xl tracking-wider text-white hidden sm:block">M MAGNUS</span>
                    </a>
                    <div className="flex items-center gap-6">
                        <a href="tel:0496711028" className="text-sm font-semibold text-[#8A8A8A] hover:text-white transition-colors hidden md:block">
                            Tel: 049 6711028
                        </a>
                        <a href="#contact-form" className="clip-btn bg-[#CC0000] hover:bg-[#E8000A] text-white font-bold text-sm py-2.5 px-6 transition-colors duration-300">
                            Diventa Rivenditore
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default StickyNav;
    