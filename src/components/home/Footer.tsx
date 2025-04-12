
import React from 'react';
import { MapPin, MessageSquare, PhoneCall } from 'lucide-react';

const Footer = () => {
  return (
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
  );
};

export default Footer;
