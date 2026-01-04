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
    <footer className="bg-stone-950 text-stone-400 border-t border-stone-900 font-sans">
      <div className="container mx-auto px-6 md:px-12 py-16">
        
        {/* --- Main Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* 1. Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              {/* Logo Box - Gold */}
              <div className="w-12 h-12 bg-amber-500 rounded-sm flex items-center justify-center text-stone-950 shadow-lg shadow-amber-900/20">
                <span className="font-bold tracking-tighter text-lg font-serif">SPL</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight font-serif">Sparsh Plywood</h3>
                <p className="text-[10px] text-amber-500 uppercase tracking-[0.2em] font-bold">Luxury Laminates</p>
              </div>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
              Defining the art of interiors since 1999. We craft premium plywood and decorative laminates that stand the test of time and trend.
            </p>
            <div className="flex gap-4 pt-4">
              {[
                { Icon: Facebook, url: "https://facebook.com" },
                { Icon: Twitter, url: "https://twitter.com" },
                { Icon: Instagram, url: "https://instagram.com" },
                { Icon: Linkedin, url: "https://linkedin.com" }
              ].map(({ Icon, url }, i) => (
                <a 
                  key={i} 
                  href={url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center text-stone-500 hover:bg-amber-500 hover:text-stone-950 transition-all duration-300 border border-stone-800 hover:border-amber-500"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg font-serif">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Our Collection', path: '/products' },
                { name: 'E-Catalogue', path: '/catalogue' },
                { name: 'About Company', path: '/about' },
                { name: 'Contact Support', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="flex items-center text-sm text-stone-400 hover:text-amber-500 transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-stone-600 group-hover:text-amber-500 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Our Products (Expertise) */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg font-serif">Our Products</h3>
            <ul className="space-y-3">
              {[
                "Structural Plywood (BWP)",
                "Decorative Laminates (1mm)",
                "Exterior Cladding (HPL)",
                "WPC & PVC Boards",
                "Linear Laminates",
                "Architectural Veneers"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-sm text-stone-400 group cursor-default">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-amber-600 mt-0.5 shrink-0 group-hover:text-amber-500 transition-colors" />
                  <span className="group-hover:text-stone-300 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg font-serif">Contact Us</h3>
            <div className="space-y-5">
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-amber-600 mt-1 shrink-0 group-hover:text-amber-500 transition-colors" />
                <div className="text-sm text-stone-400 leading-relaxed group-hover:text-stone-300 transition-colors">
                  <p className="text-white font-medium mb-1">Head Office</p>
                  <p>Kaveri Centre, Sanjay Place</p>
                  <p>Agra, Uttar Pradesh 282002</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-amber-600 shrink-0 group-hover:text-amber-500 transition-colors" />
                <a href="tel:+917217251263" className="text-sm text-stone-300 group-hover:text-white transition-colors hover:text-amber-500">+91 721 725 1263</a>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-amber-600 shrink-0 group-hover:text-amber-500 transition-colors" />
                <a href="mailto:Sparshplywood@gmail.com" className="text-sm text-stone-300 group-hover:text-white transition-colors hover:text-amber-500">Sparshplywood@gmail.com</a>
              </div>

              <div className="flex items-start space-x-3 pt-4 border-t border-stone-900 mt-2">
                <Clock className="w-5 h-5 text-stone-600 mt-1 shrink-0" />
                <div className="text-sm text-stone-500">
                  <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p className="text-xs mt-1">Sunday Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="border-t border-stone-900 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-stone-600 text-center md:text-left">
              © {new Date().getFullYear()} Sparsh Plywood & Laminates. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <a href="/" className="text-sm text-stone-600 hover:text-amber-500 transition-colors">Privacy Policy</a>
              <a href="/" className="text-sm text-stone-600 hover:text-amber-500 transition-colors">Terms of Service</a>
              <a href="/" className="text-sm text-stone-600 hover:text-amber-500 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;