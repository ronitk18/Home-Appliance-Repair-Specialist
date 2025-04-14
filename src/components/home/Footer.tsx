
import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-10 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <MapPin className="h-6 w-6 text-white" />
            <span className="text-gray-300">Kakkanad, Kochi</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail className="h-6 w-6 text-white" />
            <a href="mailto:lakshaykhandelwal77@mail.com" className="text-gray-300 hover:text-white transition-colors">
              lakshaykhandelwal77@mail.com
            </a>
          </div>
          <div className="flex items-center justify-center md:justify-end gap-2">
            <Phone className="h-6 w-6 text-white" />
            <a href="tel:18002026164" className="text-gray-300 hover:text-white transition-colors">
              1800-202-6164
            </a>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 my-8">
          <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
          <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
          <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
          <Link to="/cities" className="text-gray-300 hover:text-white transition-colors">Cities</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
          <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
        </div>
        
        <div className="text-center text-gray-500 text-sm mt-8">
          © 2025 Home Appliance Repair. All Rights Reserved. | <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link> | Terms of Service
        </div>
      </div>
    </footer>
  );
};

export default Footer;
