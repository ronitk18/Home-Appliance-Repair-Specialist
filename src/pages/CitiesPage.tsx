
import React from 'react';
import Header from '@/components/header/Header';
import CitiesSection from '@/components/home/CitiesSection';
import Footer from '@/components/home/Footer';
import { Button } from '@/components/ui/button';

const CitiesPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-white mb-8">Service Locations</h1>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-8">
            We provide our expert appliance repair services throughout these key locations in Kerala. 
            Whether you're in Kochi, Trivandrum, or Kozhikode, our team is ready to assist you.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <h2 className="text-xl font-bold text-white mb-4">Kochi</h2>
              <p className="text-gray-300 mb-4">
                Our Kochi team covers all areas including Ernakulam, Kakkanad, Aluva, and surrounding localities.
              </p>
              <Button
                className="bg-white hover:bg-gray-200 text-black"
                onClick={() => window.location.href = 'tel:18002026164'}
              >
                Get Service in Kochi
              </Button>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <h2 className="text-xl font-bold text-white mb-4">Trivandrum</h2>
              <p className="text-gray-300 mb-4">
                Our Trivandrum team services all neighborhoods including Technopark, Kovalam, Varkala, and nearby areas.
              </p>
              <Button
                className="bg-white hover:bg-gray-200 text-black"
                onClick={() => window.location.href = 'tel:18002026164'}
              >
                Get Service in Trivandrum
              </Button>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <h2 className="text-xl font-bold text-white mb-4">Kozhikode</h2>
              <p className="text-gray-300 mb-4">
                Our Kozhikode team covers all regions including Calicut Beach, Mananchira, Westhill, and surrounding areas.
              </p>
              <Button
                className="bg-white hover:bg-gray-200 text-black"
                onClick={() => window.location.href = 'tel:18002026164'}
              >
                Get Service in Kozhikode
              </Button>
            </div>
          </div>
        </div>
      </div>
      <CitiesSection />
      <Footer />
    </div>
  );
};

export default CitiesPage;
