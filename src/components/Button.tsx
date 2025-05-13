import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded focus:outline-none transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]';
  
  const variantStyles = {
    primary: 'bg-[#d33b38] text-white hover:bg-red-700',
    secondary: 'bg-black text-white hover:bg-gray-800',
    outline: 'border-2 border-[#d33b38] text-[#d33b38] hover:bg-[#d33b38] hover:text-white',
  };
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-5 py-2.5',
    lg: 'text-lg px-6 py-3',
  };
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;