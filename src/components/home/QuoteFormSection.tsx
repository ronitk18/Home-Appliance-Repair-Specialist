
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';

const QuoteFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    applianceType: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string, name: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Log form submission data
    console.log("Form submitted:", {
      ...formData,
      sentTo: "lakshaykhandelwal77@mail.com"
    });
    
    toast({
      title: "Quote Request Submitted",
      description: "We'll get back to you shortly with a free repair quotation.",
    });
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      address: '',
      applianceType: '',
    });
  };

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
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
              <Button 
                type="submit" 
                className="bg-white hover:bg-gray-200 text-black font-semibold w-full"
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
