import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'neutral' | 'live';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  size = 'md',
  className = ''
}) => {
  const baseClasses = 'inline-flex items-center gap-1.5 font-mono uppercase tracking-wider transition-colors';
  
  const sizeClasses = {
    sm: 'text-[11px] px-2 py-0.5 rounded',
    md: 'text-xs px-2.5 py-1 rounded-md'
  };

  const variantClasses = {
    gold: 'bg-[#B39A63]/10 text-[#D4C198] border border-[#B39A63]/30',
    neutral: 'bg-white/5 text-gray-300 border border-white/10',
    live: 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/30'
  };

  return (
    <span className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}>
      {variant === 'live' && (
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
      )}
      {children}
    </span>
  );
};

