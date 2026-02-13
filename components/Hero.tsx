
import React from 'react';
import AnimatedCounter from './AnimatedCounter';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center bg-[#111111] section-dots overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="grid lg:grid-cols-5 gap-8 items-center">
                    <div className="lg:col-span-3 text-center lg:text-left">
                        <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl uppercase tracking-widest text-white">
                            <span className="fade-up block">Il fornitore italiano</span>
                            <span className="fade-up block" style={{ transitionDelay: '200ms' }}>che capisce le auto</span>
                            <span className="fade-up block text-[#CC0000]" style={{ transitionDelay: '400ms' }}>americane.</span>
                        </h1>
                        <p className="fade-up mt-6 max-w-xl mx-auto lg:mx-0 text-lg sm:text-xl text-[#8A8A8A]" style={{ transitionDelay: '600ms' }}>
                            Elimina i tempi di attesa, le complessità doganali e l'incertezza. Forniamo a officine e rivenditori ricambi, AMSOIL e accessori premium con spedizioni rapide da magazzino italiano.
                        </p>
                        <div className="fade-up mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4" style={{ transitionDelay: '800ms' }}>
                            <a href="#contact-form" className="clip-btn bg-[#CC0000] hover:bg-[#E8000A] text-white font-bold py-4 px-10 text-lg transition-all duration-300 transform hover:scale-105">
                                ACCEDI AL PORTALE B2B →
                            </a>
                            <a href="#pain-recognition" className="text-[#8A8A8A] hover:text-white font-semibold transition-colors flex items-center gap-2 group">
                                Scopri perché 74 rivenditori scelgono Magnus <span className="transition-transform group-hover:translate-y-1">↓</span>
                            </a>
                        </div>
                    </div>
                    <div className="hidden lg:col-span-2 lg:flex justify-center items-center relative h-full">
                        <div className="absolute w-[600px] h-[600px] bg-repeat" style={{ backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(204,0,0,0.2) 20px, rgba(204,0,0,0.2) 40px)"}}></div>
                        <div className="w-[350px] h-[160px] bg-[#111111] relative" style={{clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 95% 100%, 25% 100%, 0 45%)'}}></div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-20 bg-[#1A1A1A] py-6 border-t-2 border-[#2A2A2A]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                        <div className="fade-up" style={{ transitionDelay: '1000ms' }}>
                            <h3 className="text-3xl font-bold font-display text-[#CC0000]"><AnimatedCounter target={74} />+</h3>
                            <p className="text-sm text-[#8A8A8A] uppercase tracking-wider">Rivenditori B2B Attivi</p>
                        </div>
                        <div className="fade-up" style={{ transitionDelay: '1100ms' }}>
                             <h3 className="text-3xl font-bold font-display text-[#CC0000]"><AnimatedCounter target={1897} /></h3>
                            <p className="text-sm text-[#8A8A8A] uppercase tracking-wider">Referenze a Catalogo</p>
                        </div>
                        <div className="fade-up" style={{ transitionDelay: '1200ms' }}>
                            <h3 className="text-3xl font-bold font-display text-[#CC0000]"><AnimatedCounter target={20} />+</h3>
                            <p className="text-sm text-[#8A8A8A] uppercase tracking-wider">Brand USA Premium</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
    