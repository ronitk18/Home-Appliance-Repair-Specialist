
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
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
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const tollFreeNumber = "18002026164";
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handleCallNow = () => {
    window.location.href = `tel:${tollFreeNumber}`;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white text-xl font-bold">
            Home Appliance Repair
          </Link>
          
          {!isMobile && (
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
          )}
          
          <div className="flex items-center gap-4">
            <Button 
              onClick={handleCallNow}
              className="bg-white hover:bg-gray-200 text-black font-bold px-4 py-2 rounded-md flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call: 1800-202-6164</span>
              <span className="sm:hidden">Call</span>
            </Button>
            
            {isMobile && (
              <Button 
                variant="ghost" 
                className="p-2 text-white md:hidden" 
                onClick={toggleMobileMenu}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            )}
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMobile && mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-gray-900 rounded-md py-2">
            <nav className="flex flex-col">
              <Link to="/" className="px-4 py-2 text-white hover:bg-gray-800" onClick={toggleMobileMenu}>
                Home
              </Link>
              <Link to="/services" className="px-4 py-2 text-white hover:bg-gray-800" onClick={toggleMobileMenu}>
                Services
              </Link>
              <Link to="/about" className="px-4 py-2 text-white hover:bg-gray-800" onClick={toggleMobileMenu}>
                About Us
              </Link>
              <Link to="/cities" className="px-4 py-2 text-white hover:bg-gray-800" onClick={toggleMobileMenu}>
                Cities
              </Link>
              <Link to="/contact" className="px-4 py-2 text-white hover:bg-gray-800" onClick={toggleMobileMenu}>
                Contact
              </Link>
              <Link to="/privacy-policy" className="px-4 py-2 text-white hover:bg-gray-800" onClick={toggleMobileMenu}>
                Privacy Policy
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
