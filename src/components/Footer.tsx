
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="ml-3 text-xl font-bold">DesignCraft</span>
            </div>
            <p className="text-gray-400">
              Creating exceptional digital experiences through innovative web development and user-centered design.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors duration-200">Web Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-200">UI/UX Design</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-200">Ongoing Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors duration-200">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3" />
                <a href="mailto:devstudio@gmail.com" className="hover:text-white transition-colors duration-200">
                  devstudio@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3" />
                <a href="tel:+917034670789" className="hover:text-white transition-colors duration-200">
                  +91 7034670789
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3" />
                <span>Thiruvananthapuram, Kerala, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} DesignCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
