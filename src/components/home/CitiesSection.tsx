
import React from 'react';
import { MapPin } from 'lucide-react';

const CitiesSection = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-amber-400 text-center mb-12">
          Cities We Serve
        </h2>
        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="flex flex-col items-center">
            <div className="text-amber-400 mb-3">
              <MapPin className="h-8 w-8" />
            </div>
            <p className="text-white text-center">DELHI</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-amber-400 mb-3">
              <MapPin className="h-8 w-8" />
            </div>
            <p className="text-white text-center">GURGAON</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-amber-400 mb-3">
              <MapPin className="h-8 w-8" />
            </div>
            <p className="text-white text-center">NOIDA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitiesSection;
