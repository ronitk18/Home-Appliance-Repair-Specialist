
import React from 'react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-amber-400 text-center mb-12">
          Services We Offer
        </h2>
        
        {/* Service 1 - Washing Machine */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-amber-400 mb-3">
                Experience Quality Washing Machine Service In Your Locality
              </h3>
              <p className="text-gray-400 mb-6">
                Our expert technicians specialize in diagnosing and repairing all brands and models of washing machines. From water leaks to spin cycle issues, we've got you covered with prompt and reliable service.
              </p>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white">CONTACT</Button>
            </div>
            <div className="md:w-1/2 bg-gray-900 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/fdfac640-fb95-4ff2-b16a-fb2157778f9e.png" 
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
              <h3 className="text-2xl font-bold text-amber-400 mb-3">
                Experience Quality Air Conditioner Repair & Services
              </h3>
              <p className="text-gray-400 mb-6">
                Stay cool with our comprehensive AC repair and maintenance services. Our technicians are trained to diagnose and fix all air conditioning issues, ensuring optimal performance and energy efficiency.
              </p>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white">CONTACT</Button>
            </div>
            <div className="md:w-1/2 bg-gray-900 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/d4218652-f7f4-4ec1-b141-1bae04d30634.png" 
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
              <h3 className="text-2xl font-bold text-amber-400 mb-3">
                Experience Quality Refrigerator Service At Your Door-step
              </h3>
              <p className="text-gray-400 mb-6">
                From cooling problems to unusual noises, our refrigerator repair specialists can handle it all. We provide same-day service to ensure your food stays fresh and your appliance runs efficiently.
              </p>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white">CONTACT</Button>
            </div>
            <div className="md:w-1/2 bg-gray-900 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/02235a5c-6a3a-4e77-a832-2c8c2e4727fa.png" 
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
              <h3 className="text-2xl font-bold text-amber-400 mb-3">
                Experience Quality Microwave Oven Repair & Services
              </h3>
              <p className="text-gray-400 mb-6">
                Don't let a faulty microwave disrupt your kitchen routine. Our skilled technicians can repair all types of microwave issues, from heating problems to electrical malfunctions, quickly and efficiently.
              </p>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white">CONTACT</Button>
            </div>
            <div className="md:w-1/2 bg-gray-900 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/5174d434-596e-420d-8f58-a3990be3743b.png" 
                alt="Microwave and oven repair service" 
                className="w-full h-full object-cover max-h-[300px]"
              />
            </div>
          </div>
        </div>
        
        {/* Additional Service */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-amber-400 mb-6">
            AC Repair & Installation Services in Your Locality
          </h3>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white">CONTACT</Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
