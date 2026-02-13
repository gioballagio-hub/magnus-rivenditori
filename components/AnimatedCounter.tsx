
import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
    target: number;
    duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ target, duration = 1500 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        if (isVisible) {
            let start = 0;
            const end = target;
            if (start === end) return;

            const totalFrames = Math.round(duration / (1000 / 60));
            let currentFrame = 0;

            const counter = setInterval(() => {
                currentFrame++;
                const progress = currentFrame / totalFrames;
                const currentNum = Math.round(end * progress);
                setCount(currentNum);

                if (currentFrame === totalFrames) {
                    clearInterval(counter);
                    setCount(target); // Ensure it ends exactly on target
                }
            }, duration / totalFrames);

            return () => clearInterval(counter);
        }
    }, [isVisible, target, duration]);

    const formatNumber = (num: number) => {
      // Simple formatter for numbers like 1,897
      return new Intl.NumberFormat('it-IT').format(num);
    }

    return <span ref={ref}>{formatNumber(count)}</span>;
};

// Custom hook to detect if element is on screen
const useOnScreen = (ref: React.RefObject<HTMLElement>) => {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIntersecting(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
            }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]);

    return isIntersecting;
};

export default AnimatedCounter;
    