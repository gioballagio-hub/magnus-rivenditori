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
                    <div className="hidden lg:block absolute top-6 left-0 w-full h-0.5 bg-[#CC0000] z-0"></div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 lg:gap-y-0 lg:gap-x-8">
                        {steps.map((step, index) => (
                            <div key={index} className="fade-up text-center relative" style={{ transitionDelay: `${index * 200}ms` }}>
                                <div className="relative inline-block bg-[#111111] px-3 z-10">
                                     <div className="w-12 h-12 flex items-center justify-center bg-[#CC0000] text-white font-bold text-xl rounded-full">
                                        {step.step}
                                    </div>
                                </div>
                                <h3 className="font-heading font-semibold text-2xl text-white mt-4">{step.title}</h3>
                                <p className="text-[#8A8A8A] mt-3">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;