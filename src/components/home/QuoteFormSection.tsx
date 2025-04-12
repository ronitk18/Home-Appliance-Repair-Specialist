
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';

const QuoteFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    applianceType: '',
    problemDescription: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string, name: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted",
      description: "We'll get back to you shortly with a free repair quotation.",
    });
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      address: '',
      applianceType: '',
      problemDescription: '',
    });
  };

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-4">
              Get A Free Repair Quotation
            </h2>
          </div>
          <div className="md:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-4">
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
                placeholder="Phone Number"
                className="bg-gray-800 border-gray-700 text-white"
                required
              />
              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="bg-gray-800 border-gray-700 text-white"
                required
              />
              <Input
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Your Address"
                className="bg-gray-800 border-gray-700 text-white"
                required
              />
              <Select
                value={formData.applianceType}
                onValueChange={(value) => handleSelectChange(value, 'applianceType')}
              >
                <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Appliance Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="washer">Washing Machine</SelectItem>
                  <SelectItem value="refrigerator">Refrigerator</SelectItem>
                  <SelectItem value="ac">Air Conditioner</SelectItem>
                  <SelectItem value="oven">Microwave/Oven</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <Textarea
                name="problemDescription"
                value={formData.problemDescription}
                onChange={handleChange}
                placeholder="Describe Your Problem"
                className="bg-gray-800 border-gray-700 text-white min-h-[100px]"
                required
              />
              <Button 
                type="submit" 
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold w-full"
              >
                GET QUOTE
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteFormSection;
