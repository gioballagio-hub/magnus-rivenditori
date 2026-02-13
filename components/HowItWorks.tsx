
import React from 'react';

const HowItWorks: React.FC = () => {
    const steps = [
        {
            step: 1,
            title: "Contattaci",
            description: "Compila il form o chiamaci. Ti risponderemo entro 24h."
        },
        {
            step: 2,
            title: "Valutazione",
            description: "Il nostro team commerciale ti contatta entro 24 ore."
        },
        {
            step: 3,
            title: "Accesso Portale",
            description: "Accedi al portale B2B con listini dedicati, sconti personalizzati e supporto tecnico."
        },
        {
            step: 4,
            title: "Inizia a vendere",
            description: "Ordina, ricevi in 24-48h e offri ai tuoi clienti prodotti certificati USA."
        }
    ];

    return (
        <section className="py-20 sm:py-24 lg:py-32 bg-[#111111] section-dots">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="fade-up font-display font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider">
                        Il Tuo Accesso Diretto al Mercato USA, <br />
                        in <span className="text-[#CC0000]">4 Semplici Passi</span>
                    </h2>
                </div>
                <div className="mt-20 relative">
                    {/* Desktop timeline line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-[#2A2A2A] -translate-y-1/2">
                        <div className="absolute top-0 left-0 h-full bg-[#CC0000] w-full origin-left scale-x-0 animate-line-draw" style={{ animation: 'line-draw 1s ease-out forwards', animationDelay: '0.5s' }}></div>
                        <style>{`
                          @keyframes line-draw {
                            to { transform: scaleX(1); }
                          }
                          .animate-line-draw { animation-fill-mode: forwards; }
                        `}</style>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="fade-up text-center lg:text-left relative" style={{ transitionDelay: `${index * 200}ms` }}>
                                <div className="flex items-center justify-center lg:justify-start gap-4">
                                     <div className="w-12 h-12 flex items-center justify-center bg-[#CC0000] text-white font-bold text-xl rounded-full z-10">
                                        {step.step}
                                    </div>
                                    <h3 className="font-heading font-semibold text-2xl text-white">{step.title}</h3>
                                </div>
                                <div className="lg:pl-16 mt-4">
                                     <p className="text-[#8A8A8A]">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
    