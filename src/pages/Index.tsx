// Update this page (the content is just a fallback if you fail to update the page)

import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Problem } from '@/components/Problem';
import { HowItWorks } from '@/components/HowItWorks';
import { FocusAreas } from '@/components/FocusAreas';
import { ImpactMetrics } from '@/components/ImpactMetrics';
import { EligibilityChecker } from '@/components/EligibilityChecker';
import { CTABlocks } from '@/components/CTABlocks';
import { Trust } from '@/components/Trust';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <FocusAreas />
        <ImpactMetrics />
        <EligibilityChecker />
        <CTABlocks />
        <Trust />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
