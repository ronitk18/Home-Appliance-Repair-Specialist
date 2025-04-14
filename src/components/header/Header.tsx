
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const tollFreeNumber = "18002026164";
  
  const handleCallNow = () => {
    window.location.href = `tel:${tollFreeNumber}`;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white text-xl font-bold">
            Home Appliance Repair
          </Link>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className={navigationMenuTriggerStyle()}>
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/services" className={navigationMenuTriggerStyle()}>
                  Services
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className={navigationMenuTriggerStyle()}>
                  About Us
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/cities" className={navigationMenuTriggerStyle()}>
                  Cities
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contact" className={navigationMenuTriggerStyle()}>
                  Contact
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/privacy-policy" className={navigationMenuTriggerStyle()}>
                  Privacy Policy
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button 
            onClick={handleCallNow}
            className="bg-white hover:bg-gray-200 text-black font-bold px-4 py-2 rounded-md flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Call: 1800-202-6164
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
