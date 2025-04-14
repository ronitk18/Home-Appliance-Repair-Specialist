
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const HeroSection = () => {
  const tollFreeNumber = "18002026164"; // Toll-free number
  
  const handleCallNow = () => {
    window.location.href = `tel:${tollFreeNumber}`;
  };

  return (
    <section className="relative h-[60vh]" aria-label="Home Appliance Repair Services"> 
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center blur-[3px] grayscale"
        style={{ backgroundImage: "url('/lovable-uploads/09475d78-0da2-4f58-a4ca-c0cbc46f9983.png')" }}
        role="img" 
        aria-label="Washing machines background"
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 font-heading text-center">
          Home Appliance<br />Repair Specialist
        </h1>
        <p className="text-gray-300 mb-6 text-lg md:text-xl max-w-2xl text-center">Serving your needs with quality and care</p>
        <div>
          <Button 
            onClick={handleCallNow}
            className="bg-white hover:bg-gray-200 text-black font-bold px-8 py-6 text-lg rounded-md flex items-center gap-2"
            aria-label="Call our toll-free number"
          >
            <Phone className="w-5 h-5" />
            CALL US NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
