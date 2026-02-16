import React, { useState, useEffect } from 'react';

const STORAGE_KEY = 'magnus_urgency_start';
const DURATION_MS = 24 * 60 * 60 * 1000; // 24 ore

const getOrInitTimer = (): number => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const now = Date.now();

    if (!stored) {
        localStorage.setItem(STORAGE_KEY, now.toString());
        return now;
    }

    const startTime = parseInt(stored, 10);
    const elapsed = now - startTime;

    if (elapsed >= DURATION_MS) {
        localStorage.setItem(STORAGE_KEY, now.toString());
        return now;
    }

    return startTime;
};

const UrgencyBanner: React.FC = () => {
    const [startTime] = useState(getOrInitTimer);
    const [remainingTime, setRemainingTime] = useState(DURATION_MS - (Date.now() - startTime));
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            const remaining = DURATION_MS - (Date.now() - startTime);
            if (remaining <= 0) {
                setRemainingTime(0);
                clearInterval(interval);
            } else {
                setRemainingTime(remaining);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [startTime]);

    if (!isVisible || remainingTime <= 0) {
        return null;
    }

    const hours = Math.floor(remainingTime / 3600000);
    const minutes = Math.floor((remainingTime % 3600000) / 60000);
    const seconds = Math.floor((remainingTime % 60000) / 1000);

    const formatTime = (time: number) => time.toString().padStart(2, '0');

    return (
        <div className="sticky top-[80px] z-40 bg-[#CC0000] text-white shadow-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-grow flex items-center justify-center text-center">
                        <span className="hidden md:inline font-semibold">
                            🔥 OFFERTA LIMITATA — 30% di sconto sul tuo primo ordine B2B se ci contatti entro:
                        </span>
                        <span className="md:hidden font-semibold">
                            🔥 30% sul primo ordine — Scade in:
                        </span>
                        <span className="ml-2 font-bold font-mono text-lg tracking-wider">
                            {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
                        </span>
                    </div>
                    <div className="flex items-center ml-4">
                         <a href="#contact-form" className="hidden sm:block clip-btn bg-white text-[#CC0000] hover:bg-gray-200 font-bold text-sm py-2 px-5 transition-colors duration-300 whitespace-nowrap">
                            RICHIEDI SCONTO →
                        </a>
                        <button onClick={() => setIsVisible(false)} className="ml-4 text-white hover:text-gray-200 transition-colors" aria-label="Chiudi banner">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UrgencyBanner;