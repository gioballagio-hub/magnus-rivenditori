import React from 'react';
import { BenefitIcons } from './icons/BenefitIcons';

const ValueProposition: React.FC = () => {
    const benefits = [
        { icon: 'italianFlag', title: "Fornitore Italiano Affidabile", description: "Scegli la stabilità e la sicurezza di un partner commerciale italiano, solido e riconosciuto nel settore." },
        { icon: 'boxOpen', title: "Logistica Semplificata", description: "Zero burocrazia. Tutta la merce è già sdoganata e pronta per la spedizione immediata dal nostro magazzino." },
        { icon: 'tag', title: "Prezzi Trasparenti", description: "Il nostro listino B2B è chiaro e competitivo, senza costi nascosti. Massima trasparenza per i tuoi margini." },
        { icon: 'shield', title: "Garanzia e Qualità", description: "Prodotti originali e certificati, coperti da garanzia e da una procedura di reso semplice e veloce, gestita in Italia." },
        { icon: 'wrench', title: "Team di Esperti Dedicato", description: "Hai a disposizione un team di specialisti per consulenza tecnica su misura e supporto commerciale continuo." },
        { icon: 'truck', title: "Magazzino Italia, Spedizioni Veloci", description: "Con il nostro stock fisico a Cittadella (PD), garantiamo spedizioni in 24-48h in tutta Italia ed Europa." },
        { icon: 'chart', title: "Aggiornamenti sui Trend", description: "Ti teniamo costantemente aggiornato sulle novità e le tendenze del mercato americano per darti un vantaggio competitivo." },
        { icon: 'users', title: "Rapporto Personale e Diretto", description: "Non siamo solo una voce al telefono. Ci incontri di persona a fiere ed eventi di settore per costruire una vera partnership." },
        { icon: 'calendar', title: "Esperienza Pluriennale", description: "Mettiamo a tua disposizione la nostra esperienza pluriennale nel settore automotive americano per aiutarti a crescere." }
    ];

    return (
        <section className="py-20 sm:py-24 lg:py-32 bg-[#111111] section-dots">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="fade-up font-display font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider">
                        Perchè MAGNUS è la soluzione giusta<br />
                        per il <span className="text-[#CC0000]">cliente B2B</span>
                    </h2>
                    <p className="fade-up mt-6 max-w-3xl mx-auto text-lg text-[#8A8A8A]" style={{ transitionDelay: '150ms' }}>
                        Abbiamo costruito il nostro servizio B2B ascoltando le esigenze specifiche di officine e rivenditori come te. Il risultato è un sistema di vantaggi concreti, pensati per semplificare il tuo lavoro e aumentare la tua redditività.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => {
                        const Icon = BenefitIcons[benefit.icon as keyof typeof BenefitIcons];
                        return (
                            <div 
                                key={index} 
                                className="fade-up bg-[#1A1A1A] p-8 border border-[#2A2A2A] rounded-lg transition-all duration-300 hover:border-[#CC0000] hover:bg-[rgba(204,0,0,0.08)] hover:shadow-[0_0_20px_rgba(204,0,0,0.3)]" 
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <Icon className="w-10 h-10 text-[#CC0000]" />
                                <h3 className="font-heading font-semibold text-2xl mt-4 text-white">{benefit.title}</h3>
                                <p className="mt-2 text-[#8A8A8A] leading-relaxed">{benefit.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ValueProposition;