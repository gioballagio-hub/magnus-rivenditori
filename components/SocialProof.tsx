
import React from 'react';
import AnimatedCounter from './AnimatedCounter';

const StarIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M10.868 2.884c.321-.662 1.215-.662 1.536 0l1.681 3.468 3.82.556c.734.107 1.028.997.494 1.506l-2.764 2.695.652 3.805c.125.73-.644 1.285-1.288.944L10 15.347l-3.417 1.795c-.644.34-1.413-.213-1.288-.944l.652-3.805-2.764-2.695c-.534-.509-.24-1.399.494-1.506l3.82-.556L9.132 2.884z" clipRule="evenodd" />
    </svg>
);


const SocialProof: React.FC = () => {
    const stats = [
        { value: 74, suffix: '+', label: "rivenditori B2B hanno già scelto Magnus come partner strategico in Italia." },
        { value: 68, suffix: '%', label: "del nostro fatturato è dedicato al canale B2B, il cuore della nostra attività." },
        { value: 7, suffix: '', label: "professionisti formano il nostro team dedicato, pronti a darti supporto tecnico e commerciale." }
    ];
    
    const reviews = [
        {
            quote: "Negozio fornitissimo per auto americane. I ragazzi sono super competenti e disponibili. Per me un punto di riferimento.",
            author: "Fabio M.",
            rating: 5,
        },
        {
            quote: "Professionalità, competenza e vasta scelta di prodotti. Se hai un'auto americana, qui trovi tutto quello che ti serve.",
            author: "Marco R.",
            rating: 5,
        },
        {
            quote: "Finalmente un fornitore italiano che conosce le auto americane come noi. Catalogo enorme e spedizioni velocissime.",
            author: "Officina Specializzata, Veneto",
            rating: 5,
        }
    ];


    return (
        <section className="py-20 sm:py-24 lg:py-32 bg-[#1A1A1A] section-dots">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
                    {/* Colonna 1: Statistiche */}
                    <div className="fade-up">
                        <h3 className="font-heading font-semibold text-3xl text-white mb-6">I Nostri Numeri per il Tuo Business</h3>
                         <p className="text-[#8A8A8A] mb-8 leading-relaxed">
                            La nostra crescita è la prova della fiducia che i professionisti come te ripongono in noi. Ecco i dati che contano:
                        </p>
                        <div className="space-y-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="text-4xl lg:text-5xl font-display font-bold text-[#CC0000] w-24 text-right flex-shrink-0">
                                        <AnimatedCounter target={stat.value} />{stat.suffix}
                                    </div>
                                    <p className="text-[#8A8A8A] pt-2">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Colonna 2: Eventi */}
                    <div className="fade-up" style={{ transitionDelay: '200ms' }}>
                         <div className="bg-[#111111] border-2 border-[#CC0000] p-8 rounded-lg h-full flex flex-col">
                            <h3 className="font-heading font-semibold text-3xl text-white mb-6">Una Partnership, Non Solo una Fornitura</h3>
                            <div className="text-[#8A8A8A] leading-relaxed flex-grow flex flex-col">
                                <p className="mb-4">
                                    Crediamo nelle relazioni costruite di persona. Per questo siamo costantemente presenti alle più importanti fiere ed eventi di settore: è la nostra occasione per incontrarti, ascoltare le tue esigenze e rafforzare la nostra partnership.
                                </p>
                                <p className="mt-auto pt-4 text-white italic">
                                    "Per noi, stringerti la mano ha lo stesso valore di un ordine. Costruiamo partnership, non semplici transazioni."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Colonna 3: Testimonianze */}
                    <div className="fade-up" style={{ transitionDelay: '400ms' }}>
                        <h3 className="font-heading font-semibold text-3xl text-white mb-6">Dicono di noi su Google</h3>
                        <div className="space-y-6">
                            {reviews.map((review, index) => (
                                <div key={index} className="bg-[#111111] p-6 rounded-lg border border-[#2A2A2A]">
                                    <div className="flex items-center mb-2">
                                        {[...Array(review.rating)].map((_, i) => <StarIcon key={i} className="w-5 h-5 text-yellow-400" />)}
                                    </div>
                                    <blockquote className="text-white italic">
                                        <p>"{review.quote}"</p>
                                    </blockquote>
                                    <footer className="mt-4 text-right text-[#8A8A8A]">
                                        — {review.author}
                                    </footer>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
    