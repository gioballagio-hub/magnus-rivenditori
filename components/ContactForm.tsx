import React, { useState } from 'react';

type FormState = {
    name: string;
    company: string;
    email: string;
    phone: string;
    city: string;
    activityType: string;
    vehicles: string[];
    source: string;
    message: string;
};

type FormStatus = 'idle' | 'loading' | 'success' | 'error';
type Errors = Partial<Record<keyof FormState, string>>;

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormState>({
        name: '',
        company: '',
        email: '',
        phone: '',
        city: '',
        activityType: '',
        vehicles: [],
        source: '',
        message: '',
    });
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errors, setErrors] = useState<Errors>({});

    const validate = (): boolean => {
        const newErrors: Errors = {};
        if (!formData.name.trim()) newErrors.name = 'Nome e Cognome sono obbligatori.';
        if (!formData.company.trim()) newErrors.company = 'Nome Azienda è obbligatorio.';
        if (!formData.email.trim()) {
            newErrors.email = 'Email è obbligatoria.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email non è valida.';
        }
        if (!formData.phone.trim()) newErrors.phone = 'Telefono è obbligatorio.';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setFormData(prev => {
            if (checked) {
                return { ...prev, vehicles: [...prev.vehicles, value] };
            } else {
                return { ...prev, vehicles: prev.vehicles.filter(v => v !== value) };
            }
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        
        setStatus('loading');
        
        try {
            // ===================================================================
            // CONFIGURAZIONE FORM: INCOLLA QUI IL TUO URL DI FORMSPREE
            // 1. Crea un account su formspree.io
            // 2. Crea un nuovo form che invia a "info@magnus-store.it"
            // 3. Copia l'endpoint URL (es. https://formspree.io/f/xxxxxxxx)
            // 4. Incollalo qui sotto al posto di "YOUR_FORM_ID"
            // ===================================================================
            const response = await fetch("https://formspree.io/f/mreapvyj", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Errore durante l'invio del form:", error);
            setStatus('error');
        }
    };

    return (
        <section id="contact-form" className="py-20 sm:py-24 lg:py-32" style={{ backgroundImage: "repeating-linear-gradient(-45deg, #111111, #111111 10px, #2a2a2a 10px, #2a2a2a 11px)" }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="fade-up font-display font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider text-white">
                        Pronto a far crescere il tuo business<br /> con le <span className="text-[#CC0000]">auto americane?</span>
                    </h2>
                    <p className="fade-up mt-4 text-lg text-[#8A8A8A]" style={{ transitionDelay: '150ms' }}>
                        Compila il form: richiedi una consulenza gratuita e scopri il listino B2B a te dedicato.
                    </p>
                </div>

                <div className="mt-16 max-w-6xl mx-auto">
                    {status === 'success' ? (
                         <div className="fade-up text-center bg-[#1A1A1A] border-2 border-[#CC0000] p-12 rounded-lg">
                            <h3 className="font-heading text-3xl text-white">Grazie!</h3>
                            <p className="mt-4 text-lg text-[#8A8A8A]">La tua richiesta è stata inviata con successo. Il nostro team ti contatterà al più presto.</p>
                        </div>
                    ) : status === 'error' ? (
                        <div className="fade-up text-center bg-[#1A1A1A] border-2 border-yellow-500 p-12 rounded-lg">
                            <h3 className="font-heading text-3xl text-white">Oops! Qualcosa è andato storto.</h3>
                            <p className="mt-4 text-lg text-[#8A8A8A]">Non è stato possibile inviare la tua richiesta. Riprova più tardi o contattaci direttamente.</p>
                             <button onClick={() => setStatus('idle')} className="mt-6 clip-btn bg-[#CC0000] hover:bg-[#E8000A] text-white font-bold py-3 px-8 text-md transition-all duration-300">
                                Riprova
                            </button>
                        </div>
                     ) : (
                    <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
                        {/* Form Fields */}
                        <div className="fade-up lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6" style={{transitionDelay: '300ms'}}>
                            <div>
                                <input type="text" name="name" placeholder="Nome e Cognome *" value={formData.name} onChange={handleChange} className="w-full bg-[#1A1A1A] border-2 border-[#2A2A2A] focus:border-[#CC0000] focus:ring-0 rounded-md p-3 text-white transition" />
                                {errors.name && <p className="text-[#CC0000] text-sm mt-1">{errors.name}</p>}
                            </div>
                             <div>
                                <input type="text" name="company" placeholder="Nome Azienda / Officina *" value={formData.company} onChange={handleChange} className="w-full bg-[#1A1A1A] border-2 border-[#2A2A2A] focus:border-[#CC0000] focus:ring-0 rounded-md p-3 text-white transition" />
                                {errors.company && <p className="text-[#CC0000] text-sm mt-1">{errors.company}</p>}
                            </div>
                            <div>
                                <input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} className="w-full bg-[#1A1A1A] border-2 border-[#2A2A2A] focus:border-[#CC0000] focus:ring-0 rounded-md p-3 text-white transition" />
                                {errors.email && <p className="text-[#CC0000] text-sm mt-1">{errors.email}</p>}
                            </div>
                             <div>
                                <input type="tel" name="phone" placeholder="Telefono *" value={formData.phone} onChange={handleChange} className="w-full bg-[#1A1A1A] border-2 border-[#2A2A2A] focus:border-[#CC0000] focus:ring-0 rounded-md p-3 text-white transition" />
                                {errors.phone && <p className="text-[#CC0000] text-sm mt-1">{errors.phone}</p>}
                            </div>
                            <div>
                                <input type="text" name="city" placeholder="Città" value={formData.city} onChange={handleChange} className="w-full bg-[#1A1A1A] border-2 border-[#2A2A2A] focus:border-[#CC0000] focus:ring-0 rounded-md p-3 text-white transition" />
                            </div>
                            <div>
                               <select name="activityType" value={formData.activityType} onChange={handleChange} className="w-full bg-[#1A1A1A] border-2 border-[#2A2A2A] focus:border-[#CC0000] focus:ring-0 rounded-md p-3 text-white transition">
                                    <option value="">Tipo attività</option>
                                    <option>Officina</option>
                                    <option>Concessionario</option>
                                    <option>Negozio</option>
                                    <option>E-commerce</option>
                                </select>
                            </div>
                             <div className="md:col-span-2">
                                <label className="text-[#8A8A8A] mb-2 block">Veicoli trattati:</label>
                                <div className="flex flex-wrap gap-x-6 gap-y-2">
                                    {['Pick-up', '4x4', 'Muscle Car', 'Custom', 'Sport Car'].map(v => (
                                        <label key={v} className="flex items-center gap-2 text-white cursor-pointer">
                                            <input type="checkbox" value={v} checked={formData.vehicles.includes(v)} onChange={handleCheckboxChange} className="form-checkbox h-5 w-5 rounded bg-[#2A2A2A] border-[#2A2A2A] text-[#CC0000] focus:ring-offset-0 focus:ring-0 transition" />
                                            {v}
                                        </label>
                                    ))}
                                </div>
                            </div>
                             <div className="md:col-span-2">
                                <textarea name="message" placeholder="Note / Messaggio libero" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-[#1A1A1A] border-2 border-[#2A2A2A] focus:border-[#CC0000] focus:ring-0 rounded-md p-3 text-white transition" />
                            </div>

                        </div>

                        {/* Trust Points & Submit */}
                        <div className="fade-up lg:col-span-2 mt-4" style={{transitionDelay: '450ms'}}>
                           <button type="submit" disabled={status === 'loading'} className="w-full clip-btn bg-[#CC0000] hover:bg-[#E8000A] text-white font-bold py-4 px-10 text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center">
                                {status === 'loading' ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Invio in corso...
                                    </>
                                ) : (
                                    'RICHIEDI ACCESSO AL PORTALE B2B →'
                                )}
                            </button>
                            <p className="text-center text-sm text-[#8A8A8A] mt-4">
                                 🔒 I tuoi dati sono al sicuro. Non invieremo spam.
                            </p>
                             <p className="text-center text-sm text-[#8A8A8A] mt-1">
                                📞 Preferisci chiamare? <a href="tel:0496711028" className="text-white hover:underline">049 6711028</a> — Lun-Ven 9-18
                            </p>
                        </div>
                    </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ContactForm;