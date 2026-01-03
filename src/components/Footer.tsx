import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  CheckCircle2,
  ChevronRight 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="container mx-auto px-6 md:px-12 py-16">
        
        {/* --- Main Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* 1. Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-900/50">
                <span className="font-bold tracking-tighter">SA</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">Sparsh Plywood & Laminates</h3>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Luxury Experts</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Agra's most trusted HVAC partner for over 25 years. We deliver precision cooling solutions for homes and businesses.
            </p>
            <div className="flex gap-4 pt-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Products', path: '/products' },
                { name: 'Services', path: '/services' },
                { name: 'Projects', path: '/projects' },
                { name: 'About Us', path: '/about' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="flex items-center text-sm text-slate-400 hover:text-blue-400 transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-slate-600 group-hover:text-blue-500 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Our Services */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Our Expertise</h3>
            <ul className="space-y-3">
              {[
                "VRV/VRF Systems",
                "Central Air Conditioning",
                "Split & Window Installation",
                "Annual Maintenance (AMC)",
                "Ducting & Ventilation"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-sm text-slate-400">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-blue-600 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-blue-500 mt-1 shrink-0 group-hover:text-blue-400 transition-colors" />
                <div className="text-sm text-slate-400 leading-relaxed">
                  <p className="text-white font-medium mb-1">Head Office</p>
                  <p>Kaveri Centre, Sanjay Place</p>
                  <p>Agra, Uttar Pradesh 282002</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-blue-500 shrink-0 group-hover:text-blue-400 transition-colors" />
                <span className="text-sm text-slate-300 group-hover:text-white transition-colors">+91 987 654 3210</span>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-blue-500 shrink-0 group-hover:text-blue-400 transition-colors" />
                <span className="text-sm text-slate-300 group-hover:text-white transition-colors">contact@sonyaircon.com</span>
              </div>

              <div className="flex items-start space-x-3 pt-2 border-t border-slate-800 mt-2">
                <Clock className="w-5 h-5 text-slate-600 mt-1 shrink-0" />
                <div className="text-sm text-slate-500">
                  <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="border-t border-slate-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500 text-center md:text-left">
              © {new Date().getFullYear()} Sparsh Plywood & Laminates. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-sm text-slate-500 hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-slate-500 hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-slate-500 hover:text-blue-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;