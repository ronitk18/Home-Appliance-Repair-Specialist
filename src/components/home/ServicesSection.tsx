
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ServicesSection = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Services We Offer
        </h2>
        
        {/* Service 1 - Washing Machine */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-3 text-white">
                Experience Quality Washing Machine Service In Your Locality
              </h3>
              <p className="text-gray-400 mb-6">
                Our expert technicians specialize in diagnosing and repairing all brands and models of washing machines. From water leaks to spin cycle issues, we've got you covered with prompt and reliable service.
              </p>
              <Button 
                className="bg-white hover:bg-gray-200 text-black" 
                onClick={handleContactClick}
              >
                CONTACT
              </Button>
            </div>
            <div className="md:w-1/2 bg-gray-900 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/b2ec49e4-c1a0-4aae-bfd7-bd3070ff10cd.png" 
                alt="Washing machine repair service" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Service 2 - Air Conditioner */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-3 text-white">
                Experience Quality Air Conditioner Repair & Services
              </h3>
              <p className="text-gray-400 mb-6">
                Stay cool with our comprehensive AC repair and maintenance services. Our technicians are trained to diagnose and fix all air conditioning issues, ensuring optimal performance and energy efficiency.
              </p>
              <Button 
                className="bg-white hover:bg-gray-200 text-black" 
                onClick={handleContactClick}
              >
                CONTACT
              </Button>
            </div>
            <div className="md:w-1/2 bg-gray-900 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/dd8ed9c2-7658-4929-b2d3-62bfd205a93c.png" 
                alt="Air conditioner repair service" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Service 3 - Refrigerator */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-3 text-white">
                Experience Quality Refrigerator Service At Your Door-step
              </h3>
              <p className="text-gray-400 mb-6">
                From cooling problems to unusual noises, our refrigerator repair specialists can handle it all. We provide same-day service to ensure your food stays fresh and your appliance runs efficiently.
              </p>
              <Button 
                className="bg-white hover:bg-gray-200 text-black" 
                onClick={handleContactClick}
              >
                CONTACT
              </Button>
            </div>
            <div className="md:w-1/2 bg-gray-900 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/43ac272b-95a0-444c-b6dc-7a635a97970e.png" 
                alt="Refrigerator repair service" 
                className="w-full h-full object-cover max-h-[300px]"
              />
            </div>
          </div>
        </div>
        
        {/* Service 4 - Microwave/Oven */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-3 text-white">
                Experience Quality Microwave Oven Repair & Services
              </h3>
              <p className="text-gray-400 mb-6">
                Don't let a faulty microwave disrupt your kitchen routine. Our skilled technicians can repair all types of microwave issues, from heating problems to electrical malfunctions, quickly and efficiently.
              </p>
              <Button 
                className="bg-white hover:bg-gray-200 text-black" 
                onClick={handleContactClick}
              >
                CONTACT
              </Button>
            </div>
            <div className="md:w-1/2 bg-gray-900 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/fbb03f0c-bdcb-4970-a373-e4f7bcfe7733.png" 
                alt="Microwave and oven repair service" 
                className="w-full h-full object-cover max-h-[300px]"
              />
            </div>
          </div>
        </div>
        
        {/* Additional Service */}
        <div className="text-center">
          <h3 className="text-xl font-bold mb-6 text-white">
            AC Repair & Installation Services in Your Locality
          </h3>
          <Button 
            className="bg-white hover:bg-gray-200 text-black" 
            onClick={handleContactClick}
          >
            CONTACT
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
