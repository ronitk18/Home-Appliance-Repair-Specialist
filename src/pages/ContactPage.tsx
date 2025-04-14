
import React from 'react';
import Header from '@/components/header/Header';
import ContactSection from '@/components/home/ContactSection';
import Footer from '@/components/home/Footer';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-white mb-8">Contact Us</h1>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Have questions or need to schedule a repair? Reach out to our friendly team using any of the methods below.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <Phone className="h-12 w-12 text-white mx-auto mb-4" />
              <h2 className="text-xl font-bold text-white mb-2">Call Us</h2>
              <p className="text-gray-300 mb-2">Toll Free Number</p>
              <a href="tel:18002026164" className="text-xl text-white hover:text-gray-300 transition-colors">
                1800-202-6164
              </a>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <Mail className="h-12 w-12 text-white mx-auto mb-4" />
              <h2 className="text-xl font-bold text-white mb-2">Email Us</h2>
              <p className="text-gray-300 mb-2">Send us an email</p>
              <a href="mailto:Appliancewizards0@gmail.com" className="text-white hover:text-gray-300 transition-colors word-break">
                Appliancewizards0@gmail.com
              </a>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <MapPin className="h-12 w-12 text-white mx-auto mb-4" />
              <h2 className="text-xl font-bold text-white mb-2">Our Locations</h2>
              <p className="text-gray-300 mb-2">We serve in</p>
              <p className="text-white">Kochi, Trivandrum, Kozhikode</p>
            </div>
          </div>
        </div>
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default ContactPage;
