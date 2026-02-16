import React from 'react';
import { CarIcons } from './icons/CarIcons';

const MarketSegments: React.FC = () => {
    const segments = [
        { icon: 'pickup', name: "Pick-up", models: "RAM, F-150, Silverado, Tundra" },
        { icon: 'suv', name: "4x4", models: "Jeep Wrangler, Ford Bronco, Tacoma" },
        { icon: 'muscle', name: "Muscle Car", models: "Ford Mustang, Dodge Charger, Camaro" },
        { icon: 'custom', name: "Custom", models: "Build & Custom USA Vehicles" },
        { icon: 'sport', name: "Sport Car", models: "Corvette, Viper, Camaro ZL1" }
    ];

    return (
        <section className="py-20 sm:py-24 lg:py-32 bg-[#1A1A1A] section-dots">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="fade-up font-display font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider">
                        Serviamo i veicoli <br className="hidden sm:block" />
                        che lavorano nella <span className="text-[#CC0000]">tua officina</span>
                    </h2>
                </div>
                <div className="fade-up mt-16">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                        {segments.map((segment, index) => {
                            const Icon = CarIcons[segment.icon as keyof typeof CarIcons];
                            return (
                                <div key={index} className="group bg-[#111111] border-2 border-[#2A2A2A] rounded-lg p-6 text-center transition-all duration-300 hover:border-[#CC0000] hover:bg-[rgba(204,0,0,0.1)] hover:-translate-y-2">
                                    <Icon className="w-full h-12 mx-auto object-contain transition-transform duration-300 group-hover:scale-110" />
                                    <h3 className="mt-4 font-heading font-semibold text-xl text-white">{segment.name}</h3>
                                    <p className="mt-1 text-sm text-[#8A8A8A] h-12">{segment.models}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

            
                
        <div className="fade-up mt-20 bg-[#111111] border-2 border-dashed border-[#CC0000] p-10 rounded-lg text-center" style={{ transitionDelay: '500ms'}}>
    <div className="flex flex-col items-center gap-5">
        <img
            src="QUI_INCOLLA_URL_LOGO_AMSOIL_DA_CANVA"
            alt="AMSOIL"
            className="h-16 sm:h-20 w-auto object-contain"
            draggable={false}
        />
        <div className="w-24 h-0.5 bg-[#CC0000]"></div>
        <p className="font-heading font-bold text-xl sm:text-2xl tracking-[0.25em] text-white uppercase">
            Importatori Esclusivi per l'Italia
        </p>
        <p className="max-w-3xl mx-auto text-lg text-[#8A8A8A]">
            Lubrificanti sintetici premium per ogni applicazione: <br/>
            Automotive American | European | V-Twin | Dirt Bike
        </p>
    </div>
</div>
            </div>
        </section>
    );
};

export default MarketSegments;