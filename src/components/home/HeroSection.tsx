
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const HeroSection = () => {
  const tollFreeNumber = "+1-800-123-4567"; // Replace with your actual toll-free number
  
  const handleCallNow = () => {
    window.location.href = `tel:${tollFreeNumber}`;
  };

  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/lovable-uploads/83e591fb-61d1-4150-a7b3-cd67850345a2.png')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#9b87f5] mb-2 font-heading">
          Home Appliance<br />Repair Specialist
        </h1>
        <p className="text-gray-300 mb-8 text-lg md:text-xl max-w-2xl">Serving your needs with quality and care</p>
        <div>
          <Button 
            onClick={handleCallNow}
            className="bg-[#8B5CF6] hover:bg-[#7E69AB] text-white font-bold px-8 py-6 text-lg rounded-md flex items-center gap-2"
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
