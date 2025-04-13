
import React from 'react';
import Header from '@/components/header/Header';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import Footer from '@/components/home/Footer';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-[#9b87f5] mb-8">About Us</h1>
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="md:w-1/2">
              <img 
                src="/lovable-uploads/90526ebf-d7db-4a09-a2c4-4d660318ebf7.png" 
                alt="Electrical Panel Inspection" 
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-[#9b87f5] mb-4">Your Trusted Appliance Repair Partner</h2>
              <p className="text-gray-300 mb-4">
                With years of experience in the industry, we have built a reputation for providing reliable and 
                efficient appliance repair services. Our team of skilled technicians is dedicated to delivering 
                top-notch service at competitive prices.
              </p>
              <p className="text-gray-300 mb-6">
                We understand the inconvenience of a malfunctioning appliance, which is why we strive to provide 
                same-day service and quick turnaround times. Customer satisfaction is our top priority, and we 
                go above and beyond to ensure that your appliances are in perfect working condition.
              </p>
              <Button
                className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white font-bold"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
      <WhyChooseUsSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
