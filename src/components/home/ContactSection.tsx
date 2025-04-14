
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Log form submission data
    console.log("Contact form submitted:", {
      ...formData,
      sentTo: "lakshaykhandelwal77@mail.com"
    });
    
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll get back to you shortly.",
    });
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Get In Touch With Us
        </h2>
        <div className="max-w-lg mx-auto">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name" 
              className="bg-gray-800 border-gray-700 text-white"
              required
            />
            <Input 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone" 
              className="bg-gray-800 border-gray-700 text-white"
              required
            />
            <Textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message" 
              className="bg-gray-800 border-gray-700 text-white min-h-[100px]"
              required
            />
            <Button 
              type="submit" 
              className="bg-white hover:bg-gray-200 text-black font-semibold w-full"
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
