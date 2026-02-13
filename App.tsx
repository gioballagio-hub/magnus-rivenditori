
import React, { useState, useEffect, useRef } from 'react';
import StickyNav from './components/StickyNav';
import Hero from './components/Hero';
import PainRecognition from './components/PainRecognition';
import ValueProposition from './components/ValueProposition';
import MarketSegments from './components/MarketSegments';
import ProductCategories from './components/ProductCategories';
import SocialProof from './components/SocialProof';
import HowItWorks from './components/HowItWorks';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import ScrollProgressBar from './components/ScrollProgressBar';

const App: React.FC = () => {
    const sectionsRef = useRef<Array<HTMLElement | null>>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            {
                threshold: 0.15,
            }
        );

        sectionsRef.current.forEach((section) => {
            if (section) {
                const elements = section.querySelectorAll('.fade-up');
                elements.forEach(el => observer.observe(el));
            }
        });
        
        return () => {
             sectionsRef.current.forEach((section) => {
                if (section) {
                    const elements = section.querySelectorAll('.fade-up');
                    elements.forEach(el => observer.unobserve(el));
                }
            });
        };
    }, []);

    const addToRefs = (el: HTMLElement | null) => {
        if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
        }
    };

    return (
        <div className="bg-[#111111] text-[#FFFFFF] font-body overflow-x-hidden">
            <ScrollProgressBar />
            <StickyNav />
            <main>
                <div ref={addToRefs}><Hero /></div>
                <div ref={addToRefs}><PainRecognition /></div>
                <div ref={addToRefs}><ValueProposition /></div>
                <div ref={addToRefs}><MarketSegments /></div>
                <div ref={addToRefs}><ProductCategories /></div>
                <div ref={addToRefs}><SocialProof /></div>
                <div ref={addToRefs}><HowItWorks /></div>
                <div ref={addToRefs}><ContactForm /></div>
            </main>
            <Footer />
            <BackToTopButton />
        </div>
    );
};

export default App;
    