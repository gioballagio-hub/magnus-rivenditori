
import React from 'react';

const ProductCategories: React.FC = () => {
    const categories = [
        { name: "Ricambi", items: ["Freni", "Filtri Aria", "Candele", "Componenti Motore", "Sospensioni"] },
        { name: "Componenti Speciali", items: ["Compressori Volumetrici", "Centraline", "Kit Freni Maggiorati", "Scarichi Sportivi", "Aspirazione Aria Fredda"] },
        { name: "Accessori", items: ["Cerchi", "Pneumatici", "Kit di Rialzo", "Ammortizzatori", "Impianti Illuminazione", "Copricassoni", "BakFlip Covers"] },
        { name: "Lubrificanti & Additivi", items: ["Automotive", "Moto", "Fuori Strada", "Industriale"] },
        { name: "Vernici", items: ["Automotive", "Industriale", "Nautica", "Casa"] }
    ];

    const brands = [ "AMSOIL", "MOPAR", "ACDelco", "Motorcraft", "BDS Suspension", "Bilstein", "Fox Racing", "KMC Wheels", "Fuel Off-Road", "Borla", "Go Rhino", "Bushwacker", "Raptor", "AMP Research", "Falcon Shocks", "Black Rhino", "Rotiform", "Retrax", "PSC", "XD Wheels", "Magnaflow", "Zone Offroad", "TeraFlex", "AEV", "Warn", "Superchips", "DiabloSport", "BAKFlip" ];
    const doubledBrands = [...brands, ...brands];

    return (
        <section className="py-20 sm:py-24 lg:py-32 bg-[#111111] section-dots overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="fade-up font-display font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider">
                        <span className="text-[#CC0000]">1.897</span> Referenze. <br />
                        Tutto quello che ti serve, in un unico fornitore.
                    </h2>
                </div>
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {categories.map((cat, index) => (
                        <div key={index} className="fade-up" style={{ transitionDelay: `${index * 100}ms` }}>
                            <h3 className="font-heading font-semibold text-xl uppercase tracking-widest text-white">{cat.name}</h3>
                            <div className="w-16 h-0.5 bg-[#CC0000] my-3"></div>
                            <ul className="space-y-2">
                                {cat.items.map((item, i) => (
                                    <li key={i} className="text-[#8A8A8A] hover:text-white transition-colors">
                                        • {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="fade-up mt-24 relative w-full h-24 bg-[#1A1A1A] flex items-center" style={{ transitionDelay: '500ms' }}>
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full flex whitespace-nowrap animate-marquee">
                        {doubledBrands.map((brand, index) => (
                            <span key={index} className="mx-8 text-xl font-semibold text-[#8A8A8A]">{brand}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductCategories;