
import React from 'react';

const PainRecognition: React.FC = () => {
    const painPoints = [
        {
            title: "Costi Doganali Imprevisti",
            description: "La burocrazia e i dazi d'importazione dagli USA erodono i tuoi margini e rendono impossibile fare un prezzo competitivo."
        },
        {
            title: "Fornitori Inaffidabili",
            description: "Resi complicati, nessuna garanzia reale e supporto tecnico assente. Ogni problema con un fornitore estero è un costo per te."
        },
        {
            title: "Clienti Frustrati dall'Attesa",
            description: "Settimane di attesa per un ricambio bloccano la tua officina, danneggiano la tua reputazione e fanno perdere i clienti."
        }
    ];

    return (
        <section id="pain-recognition" className="py-20 sm:py-24 lg:py-32 bg-[#1A1A1A] section-dots">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="fade-up font-display text-center font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider">
                    Stanco di dire "no" a un cliente <br className="hidden sm:block" />
                    perché il ricambio americano non si <span className="text-[#CC0000]">trova?</span>
                </h2>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {painPoints.map((pain, index) => (
                        <div key={index} className="fade-up bg-[#111111] p-8 border-l-4 border-[#CC0000] section-dots" style={{ transitionDelay: `${index * 150}ms`}}>
                            <h3 className="font-heading font-semibold text-2xl text-white">{pain.title}</h3>
                            <p className="mt-4 text-[#8A8A8A] leading-relaxed">{pain.description}</p>
                        </div>
                    ))}
                </div>
                <div className="fade-up mt-20 text-center font-heading font-semibold text-[#CC0000] text-lg tracking-widest" style={{ transitionDelay: '450ms' }}>
                    →  MAGNUS È LA SOLUZIONE STRATEGICA A QUESTI PROBLEMI  ←
                </div>
            </div>
        </section>
    );
};

export default PainRecognition;
    