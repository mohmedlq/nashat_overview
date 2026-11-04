import React from 'react';
import { LanguageProvider } from './providers/LanguageContext';
import { Navbar } from '../components/navigation/Navbar';
import { HeroSection } from '../sections/HeroSection';
import { ProblemSection } from '../sections/ProblemSection';
import { SolutionSection } from '../sections/SolutionSection';
import { ProductShowcaseSection } from '../sections/ProductShowcaseSection';
import { WorkflowSection } from '../sections/WorkflowSection';
import { ImpactSection } from '../sections/ImpactSection';
import { ArchitectureSection } from '../sections/ArchitectureSection';
import { EconomicsSection } from '../sections/EconomicsSection';
import { JourneySection } from '../sections/JourneySection';
import { VisionSection } from '../sections/VisionSection';
import { TestimonialsSection } from '../sections/TestimonialsSection';
import { Footer } from '../components/layout/Footer';

export const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#111714] text-[#F3F4F6] flex flex-col selection:bg-[#B39A63]/30 selection:text-white">
      {/* Presentation Top Navigation */}
      <Navbar />

      {/* Main Presentation Body */}
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ProductShowcaseSection />
        <WorkflowSection />
        <ImpactSection />
        <ArchitectureSection />
        <EconomicsSection />
        <JourneySection />
        <VisionSection />
        <TestimonialsSection />
      </main>

      {/* Presentation Footer */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;

