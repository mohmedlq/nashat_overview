import React from 'react';
import { useLanguage } from '../app/providers/LanguageContext';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { TESTIMONIAL_SLOTS, TESTIMONIAL_PLACEHOLDER_TEXT } from '../data/testimonials';
import { Image as ImageIcon, MessageSquareQuote, FileText } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { isArabic } = useLanguage();
  const text = isArabic ? TESTIMONIAL_PLACEHOLDER_TEXT.ar : TESTIMONIAL_PLACEHOLDER_TEXT.en;

  return (
    <SectionWrapper
      id="testimonials"
      sectionNumber="11"
      badgeText={text.badge}
      title={text.title}
      subtitle={text.subtitle}
      containerWidth="wide"
    >
      <div className="space-y-8">
        
        {/* Developer & Admin Guide Note */}
        <div className="p-4 rounded-xl bg-[#141D18] border border-[#B39A63]/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2.5 text-[#D4C198]">
            <MessageSquareQuote className="w-4 h-4 text-[#B39A63] flex-shrink-0" />
            <span>{text.hint}</span>
          </div>
          <code className="font-mono text-[11px] text-gray-400 bg-[#111714] px-2.5 py-1 rounded border border-white/5">
            src/data/testimonials.ts
          </code>
        </div>

        {/* 6 Responsive Testimonial Slots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIAL_SLOTS.map((slot) => {
            const hasImage = Boolean(slot.imageSrc);
            const caption = isArabic ? slot.captionAr : slot.captionEn;

            return (
              <div
                key={slot.id}
                className="group rounded-2xl bg-[#141D18] border border-white/10 hover:border-[#B39A63]/50 overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image or Placeholder Area */}
                <div className={`relative w-full ${slot.aspectRatio} bg-[#101612] flex flex-col items-center justify-center p-6 text-center border-b border-white/5 overflow-hidden`}>
                  
                  {hasImage ? (
                    <img
                      src={slot.imageSrc}
                      alt={caption || `Testimonial ${slot.id}`}
                      className="w-full h-full object-contain transform group-hover:scale-[1.02] transition-transform duration-300"
                      loading="lazy"
                    />
                  ) : (
                    /* Clean, Restrained Neutral Placeholder */
                    <div className="space-y-3 flex flex-col items-center justify-center">
                      <div className="w-12 h-12 rounded-xl bg-[#16201B] border border-[#B39A63]/25 flex items-center justify-center text-[#B39A63]/70 group-hover:text-[#B39A63] group-hover:border-[#B39A63]/50 transition-all">
                        <ImageIcon className="w-6 h-6" />
                      </div>
                      
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                          {text.placeholderText}
                        </p>
                        <p className="text-[11px] font-mono text-gray-500">
                          {isArabic ? `خانة لقطة الشاشة #${slot.id}` : `Screenshot Slot #${slot.id}`}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Corner Slot Badge */}
                  <div className="absolute top-3 end-3 px-2 py-0.5 rounded bg-[#111714]/80 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-[#D4C198]">
                    #{slot.id}
                  </div>
                </div>

                {/* Slot Caption & Info */}
                <div className="p-4 bg-[#121A15] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-[#9CA8A2] group-hover:text-gray-300 transition-colors">
                    <FileText className="w-3.5 h-3.5 text-[#B39A63]" />
                    <span className="line-clamp-1">{caption}</span>
                  </div>

                  <span className="font-mono text-[10px] text-gray-500 uppercase flex-shrink-0 ms-2">
                    {hasImage ? 'Uploaded' : 'Ready'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </SectionWrapper>
  );
};
