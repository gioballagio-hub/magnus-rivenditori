
import React from 'react';
import { MagnusLogo } from './icons/MagnusLogo';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#1A1A1A] section-dots text-[#8A8A8A] pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* Colonna 1: Logo & Info */}
                    <div className="lg:col-span-2">
                        <a href="#" className="flex items-center gap-3">
                            <MagnusLogo className="h-10 w-auto text-white" />
                            <span className="font-display font-bold text-2xl tracking-wider text-white">MAGNUS SRL</span>
                        </a>
                        <p className="mt-4 max-w-sm">Importatore Ufficiale AMSOIL. Ricambi, accessori e lubrificanti per auto americane.</p>
                        <div className="flex gap-4 mt-4">
                            {/* Social Icons Placeholder */}
                             <a href="#" className="text-[#8A8A8A] hover:text-white">Instagram</a>
                             <a href="#" className="text-[#8A8A8A] hover:text-white">Facebook</a>
                        </div>
                    </div>
                    {/* Colonna 2: Link */}
                    <div>
                        <h4 className="font-heading font-semibold text-white uppercase tracking-wider">Link rapidi</h4>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-white transition-colors">Chi Siamo</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Categorie Prodotto</a></li>
                            <li><a href="#contact-form" className="hover:text-white transition-colors">Portale B2B</a></li>
                            <li><a href="#contact-form" className="hover:text-white transition-colors">Contatti</a></li>
                        </ul>
                    </div>
                    {/* Colonna 3: Contatti */}
                     <div>
                        <h4 className="font-heading font-semibold text-white uppercase tracking-wider">Contatti</h4>
                        <ul className="mt-4 space-y-2">
                           <li>📍 Cittadella (PD)</li>
                           <li><a href="tel:0496711028" className="hover:text-white transition-colors">📞 049 6711028</a></li>
                           <li><a href="mailto:info@magnus-store.it" className="hover:text-white transition-colors">✉️ info@magnus-store.it</a></li>
                           <li><a href="https://www.magnus-group.it" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">🌐 www.magnus-group.it</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-[#2A2A2A] text-center text-sm">
                    <p>© {new Date().getFullYear()} MAGNUS SRL — P.IVA [05194480287] — Tutti i diritti riservati</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
    