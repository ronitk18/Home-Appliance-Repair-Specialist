
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/lovable-uploads/83e591fb-61d1-4150-a7b3-cd67850345a2.png')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-400 mb-2">
          Home Appliance<br />Repair Specialist
        </h1>
        <p className="text-gray-300 mb-6">Serving your needs with quality and care</p>
        <div>
          <Button className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-2">
            CALL US NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
