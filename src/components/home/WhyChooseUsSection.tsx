
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Star, Clock, MessageSquare } from 'lucide-react';

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-amber-400 text-center mb-12">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gray-900 border-gray-800 p-6 rounded-lg">
            <div className="flex flex-col items-center text-center">
              <div className="text-amber-400 mb-4">
                <Star className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-amber-400 mb-3">Quality Work Made Simple</h3>
              <p className="text-gray-400 mb-4">
                Our technicians are highly skilled and dedicated to providing top-notch appliance repair services with attention to detail and care.
              </p>
            </div>
          </Card>
          
          <Card className="bg-gray-900 border-gray-800 p-6 rounded-lg">
            <div className="flex flex-col items-center text-center">
              <div className="text-amber-400 mb-4">
                <Clock className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-amber-400 mb-3">Fast Response Time</h3>
              <p className="text-gray-400 mb-4">
                We understand the urgency of appliance repairs, which is why we prioritize quick response times and efficient service delivery.
              </p>
            </div>
          </Card>
          
          <Card className="bg-gray-900 border-gray-800 p-6 rounded-lg">
            <div className="flex flex-col items-center text-center">
              <div className="text-amber-400 mb-4">
                <MessageSquare className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-amber-400 mb-3">Transparent Pricing</h3>
              <p className="text-gray-400 mb-4">
                We provide clear, upfront pricing with no hidden fees. Get a free quotation before we start any repair work.
              </p>
            </div>
          </Card>
        </div>
        <div className="text-center mt-10">
          <Button className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold px-8 py-2">
            CALL NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
