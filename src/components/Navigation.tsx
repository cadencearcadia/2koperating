import { motion } from "framer-motion";
import { Menu, X, Home, Truck, UserPlus, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/", icon: <Home className="w-5 h-5" aria-hidden="true" /> },
    { label: "CDL Driver Application", href: "/cdl-application", icon: <Truck className="w-5 h-5" aria-hidden="true" /> },
    { label: "New Customer Form", href: "/new-customer", icon: <UserPlus className="w-5 h-5" aria-hidden="true" /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center" aria-label="Go to homepage">
              <img 
                src="/2klogositeSM-WH.webp" 
                alt="2K Operating LLC Logo" 
                className="h-12 w-auto"
                loading="eager"
                decoding="async"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-primary-foreground hover:text-white/90 transition-colors"
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
              </a>
            ))}
            <Button 
              className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary"
              onClick={() => window.location.href = '/contact-us'}
              aria-label="Contact Us"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary-foreground p-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-primary border-b border-primary/20"
        >
          <div className="px-4 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2 text-primary-foreground hover:text-white/90 hover:bg-primary/90 rounded-md"
                aria-label={`Navigate to ${item.label}`}
              >
                {item.icon}
                {item.label}
              </a>
            ))}
            <Button 
              className="w-full bg-primary-foreground hover:bg-primary-foreground/90 text-primary mt-4 flex items-center justify-center gap-2"
              onClick={() => window.location.href = '/contact-us'}
              aria-label="Contact Us"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Contact Us
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;