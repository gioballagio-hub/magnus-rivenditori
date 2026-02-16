import React from 'react';

const PickupIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2 17h20M3 17v-4l2-4h7v4M12 13h6l2 2v2M7 17a2 2 0 100-4 2 2 0 000 4M18 17a2 2 0 100-4 2 2 0 000 4M5 13l1-4" />
  </svg>
);

const SuvIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2 17h20M2 17V9l2-4h16l2 4v8M7 17a2 2 0 100-4 2 2 0 000 4M17 17a2 2 0 100-4 2 2 0 000 4M2 11h20" />
  </svg>
);

const MuscleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M1 17h22M2 17v-3l3-2h3l3-5h7l4 7M8 17a2 2 0 100-4 2 2 0 000 4M17 17a2 2 0 100-4 2 2 0 000 4" />
  </svg>
);

const CustomIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M1 17h22M2 17v-3l3-2h3l2-4h2l1 2h3l1-2h2l2 3 1 3M11 10V7M8 17a2 2 0 100-4 2 2 0 000 4M17 17a2 2 0 100-4 2 2 0 000 4" />
  </svg>
);

const SportIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M1 17h22M2 17v-2l4-5h10l4 4 1 3M6 10l2-4h6M8 17a2 2 0 100-4 2 2 0 000 4M16 17a2 2 0 100-4 2 2 0 000 4" />
  </svg>
);

export const CarIcons = {
    pickup: PickupIcon,
    suv: SuvIcon,
    muscle: MuscleIcon,
    custom: CustomIcon,
    sport: SportIcon
};