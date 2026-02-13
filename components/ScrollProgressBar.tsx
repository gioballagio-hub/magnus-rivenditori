
import React, { useState, useEffect } from 'react';

const ScrollProgressBar: React.FC = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollTop / docHeight) * 100;
        setScrollPercentage(scrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 bg-[#2A2A2A] z-50">
            <div
                className="h-full bg-[#CC0000]"
                style={{ width: `${scrollPercentage}%` }}
            ></div>
        </div>
    );
};

export default ScrollProgressBar;
    