
import React from 'react';
import Header from '@/components/header/Header';
import ServicesSection from '@/components/home/ServicesSection';
import Footer from '@/components/home/Footer';

const ServicesPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-[#9b87f5] mb-8">Our Services</h1>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
            We provide professional repair services for all major home appliances. Our team of expert technicians
            is trained to diagnose and fix issues with washing machines, refrigerators, air conditioners, and more.
          </p>
        </div>
      </div>
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default ServicesPage;
