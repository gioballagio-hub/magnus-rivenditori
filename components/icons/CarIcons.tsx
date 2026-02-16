import React from 'react';

interface CarIconProps {
  className?: string;
}

const PickupIcon: React.FC<CarIconProps> = ({ className }) => (
  <img
    src="https://media-public.canva.com/Kayes/MAFrcfKayes/1/t.png"
    alt="Pick-up"
    className={className}
    style={{ filter: 'invert(1) brightness(0.9)' }}
    draggable={false}
  />
);

const SuvIcon: React.FC<CarIconProps> = ({ className }) => (
  <img
    src="https://media-public.canva.com/KoHzY/MAF8fJKoHzY/1/t.png"
    alt="4x4 SUV"
    className={className}
    style={{ filter: 'invert(1) brightness(0.9)' }}
    draggable={false}
  />
);

const MuscleIcon: React.FC<CarIconProps> = ({ className }) => (
  <img
    src="https://media-public.canva.com/VOzac/MAE9ECVOzac/1/t.png"
    alt="Muscle Car"
    className={className}
    style={{ filter: 'invert(1) brightness(0.9)' }}
    draggable={false}
  />
);

const SportIcon: React.FC<CarIconProps> = ({ className }) => (
  <img
    src="https://media-public.canva.com/l2UfQ/MAE1xKl2UfQ/1/t.png"
    alt="Sport Car"
    className={className}
    style={{ filter: 'invert(1) brightness(0.9)' }}
    draggable={false}
  />
);

const CustomIcon: React.FC<CarIconProps> = ({ className }) => (
  <img
    src="https://media-public.canva.com/NH1l0/MAGPz0NH1l0/1/t.png"
    alt="Custom"
    className={className}
    style={{ filter: 'invert(1) brightness(0.9)' }}
    draggable={false}
  />
);

export const CarIcons = {
    pickup: PickupIcon,
    suv: SuvIcon,
    muscle: MuscleIcon,
    custom: CustomIcon,
    sport: SportIcon
};