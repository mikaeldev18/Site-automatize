'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import PricingPlans from '@/components/PricingPlans';
import Deliverables from '@/components/Deliverables';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <Services />
      <Deliverables />
      <PricingPlans />
      <CTA />
      <Footer />
    </div>
  );
}
