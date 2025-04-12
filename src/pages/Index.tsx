
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';
import { Card } from '@/components/ui/card';
import { PhoneCall, Clock, MapPin, Star, MessageSquare } from 'lucide-react';

const Index = () => {
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
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/lovable-uploads/83e591fb-61d1-4150-a7b3-cd67850345a2.png')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-400 mb-2">
            Home Appliance<br />Repair Specialist
          </h1>
          <p className="text-gray-300 mb-6">Serving your needs with quality and care</p>
          <div>
            <Button className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-2">
              CALL US NOW
            </Button>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
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

      {/* Why Choose Us Section */}
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

      {/* Services Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-amber-400 text-center mb-12">
            Services We Offer
          </h2>
          
          {/* Service 1 */}
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
              <div className="md:w-1/2 grid grid-cols-3">
                <div className="col-span-1 flex justify-center items-center bg-amber-400">
                  <Star className="h-8 w-8 text-black" />
                </div>
                <div className="col-span-2 bg-teal-600 flex justify-center items-center">
                  <Star className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Service 2 */}
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
              <div className="md:w-1/2 grid grid-cols-3">
                <div className="col-span-1 flex justify-center items-center bg-amber-400">
                  <Star className="h-8 w-8 text-black" />
                </div>
                <div className="col-span-2 bg-teal-600 flex justify-center items-center">
                  <Star className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Service 3 */}
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
              <div className="md:w-1/2 grid grid-cols-3">
                <div className="col-span-1 flex justify-center items-center bg-amber-400">
                  <Star className="h-8 w-8 text-black" />
                </div>
                <div className="col-span-2 bg-teal-600 flex justify-center items-center">
                  <Star className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Service 4 */}
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
              <div className="md:w-1/2 grid grid-cols-3">
                <div className="col-span-1 flex justify-center items-center bg-amber-400">
                  <Star className="h-8 w-8 text-black" />
                </div>
                <div className="col-span-2 bg-teal-600 flex justify-center items-center">
                  <Star className="h-8 w-8 text-white" />
                </div>
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

      {/* Cities We Serve */}
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

      {/* Contact Form */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-amber-400 text-center mb-12">
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

      {/* Footer */}
      <footer className="py-10 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <MapPin className="h-6 w-6 text-amber-400" />
              <span className="text-gray-300">123 Repair Street, Appliance City</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MessageSquare className="h-6 w-6 text-amber-400" />
              <span className="text-gray-300">info@appliancerepair.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-2">
              <PhoneCall className="h-6 w-6 text-amber-400" />
              <span className="text-gray-300">+1 (555) 123-4567</span>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm mt-8">
            © 2023 Home Appliance Repair. All Rights Reserved. | Privacy Policy | Terms of Service
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
