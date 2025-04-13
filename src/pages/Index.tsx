
import React from 'react';
import Header from '@/components/header/Header';
import HeroSection from '@/components/home/HeroSection';
import QuoteFormSection from '@/components/home/QuoteFormSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import ServicesSection from '@/components/home/ServicesSection';
import CitiesSection from '@/components/home/CitiesSection';
import ContactSection from '@/components/home/ContactSection';
import Footer from '@/components/home/Footer';

const Index = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <HeroSection />
      <QuoteFormSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <CitiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
