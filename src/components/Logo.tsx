import React from 'react';

const logoStyle: React.CSSProperties = {
  width: '50px',
  height: 'auto',
  objectFit: 'contain',
};

const glowTextStyle: React.CSSProperties = {
  height: '54px',
  marginLeft: '12px',
  objectFit: 'contain',
  padding: '3px 6px',
  borderRadius: '6px',
};

const containerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
};

const Logo: React.FC = () => {
  return (
    <a
      href="https://versus.com"
      target="_blank"
      rel="noopener noreferrer"
      style={containerStyle}
    >
      <img
        src="/logo/VERSUS_LOGO.png"
        alt="Versus Logo"
        style={logoStyle}
      />
      <img
        src="/logo/VERSUS_IMPORTACIONES.png"
        alt="Versus Text"
        style={glowTextStyle}
      />
    </a>
  );
};

export default Logo;
