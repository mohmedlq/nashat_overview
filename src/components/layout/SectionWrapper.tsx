import React from 'react';
import { Badge } from '../presentation/Badge';

interface SectionWrapperProps {
  id: string;
  sectionNumber?: string;
  badgeText?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  containerWidth?: 'default' | 'narrow' | 'wide';
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  sectionNumber,
  badgeText,
  title,
  subtitle,
  children,
  className = '',
  containerWidth = 'default'
}) => {
  const widthClasses = {
    narrow: 'max-w-4xl',
    default: 'max-w-7xl',
    wide: 'max-w-[90rem]'
  };

  return (
    <section
      id={id}
      className={`py-16 sm:py-24 border-b border-[#B39A63]/15 relative overflow-hidden ${className}`}
    >
      <div className={`${widthClasses[containerWidth]} mx-auto px-4 sm:px-6 lg:px-8 relative z-10`}>
        {/* Section Editorial Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            {sectionNumber && (
              <span className="font-mono text-xs sm:text-sm font-semibold text-[#B39A63] tracking-widest">
                [{sectionNumber}]
              </span>
            )}
            {badgeText && <Badge variant="gold">{badgeText}</Badge>}
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            {title}
          </h2>

          {subtitle && (
            <p className="text-base sm:text-lg text-[#9CA8A2] max-w-3xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Section Main Content */}
        {children}
      </div>
    </section>
  );
};

