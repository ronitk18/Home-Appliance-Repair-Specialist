
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Get In Touch With Us
        </h2>
        <div className="max-w-lg mx-auto">
          <form className="space-y-4">
            <Input 
              placeholder="Name" 
              className="bg-gray-800 border-gray-700 text-white" 
            />
            <Input 
              placeholder="Phone" 
              className="bg-gray-800 border-gray-700 text-white" 
            />
            <Input 
              placeholder="Email" 
              className="bg-gray-800 border-gray-700 text-white" 
            />
            <Textarea 
              placeholder="Your Message" 
              className="bg-gray-800 border-gray-700 text-white min-h-[100px]" 
            />
            <Button 
              type="submit" 
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold w-full"
            >
              SEND A MESSAGE
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
