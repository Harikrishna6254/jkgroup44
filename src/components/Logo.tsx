import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = "", variant = 'dark' }) => {
  // Use the latest uploaded logo image
  const logoSrc = "/input_file_6.png";

  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <div className="relative h-12 w-12 flex items-center justify-center">
        <img 
          src={logoSrc} 
          alt="Logo" 
          className={`h-full w-full object-contain ${variant === 'light' ? 'brightness-0 invert' : ''}`}
          onError={(e) => {
            // Fallback chain: 6 -> 5 -> 4 -> CSS
            const target = e.target as HTMLImageElement;
            if (target.src.includes('input_file_6')) {
              target.src = '/input_file_5.png';
            } else if (target.src.includes('input_file_5')) {
              target.src = '/input_file_4.png';
            } else {
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent && !parent.querySelector('.logo-fallback-icon')) {
                const fallback = document.createElement('div');
                fallback.className = 'logo-fallback-icon flex items-center justify-center w-10 h-10 rounded bg-primary shadow-sm';
                fallback.innerHTML = '<span class="text-white font-black text-xs">JK</span>';
                parent.appendChild(fallback);
              }
            }
          }}
        />
      </div>
      
      <span className={`text-xs font-black uppercase tracking-[0.3em] ${variant === 'light' ? 'text-white' : 'text-secondary'}`}>
        <span className="text-primary">Solutions</span>
      </span>
    </div>
  );
};

export default Logo;
