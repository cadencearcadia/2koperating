import { Building, Facebook, Twitter, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Building className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-xl font-bold text-white">EnergyTech</span>
            </div>
            <p className="text-sm">
              Leading the way in sustainable energy production and innovative oil &
              gas solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@energytech.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-purple-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="hover:text-purple-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter />
              </a>
              <a
                href="#"
                className="hover:text-purple-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>© 2024 EnergyTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;