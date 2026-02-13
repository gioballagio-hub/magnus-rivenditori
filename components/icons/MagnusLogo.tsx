
import React from 'react';

export const MagnusLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 50 50" fill="currentColor" {...props}>
        <path d="M0 0 H10 V50 H0 Z" />
        <path d="M10 0 L25 15 L40 0 H50 L25 25 L0 0 Z" />
        <path d="M40 0 H50 V50 H40 Z" />
    </svg>
);
    