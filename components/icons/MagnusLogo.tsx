import React from 'react';

interface MagnusLogoProps {
  className?: string;
  style?: React.CSSProperties;
}

export const MagnusLogo: React.FC<MagnusLogoProps> = ({ className, style }) => (
  <img
    src="/magnus-logo.png"
    alt="MAGNUS Logo"
    className={className}
    style={style}
    draggable={false}
  />
);