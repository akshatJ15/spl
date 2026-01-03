import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'About Us', href: '/about' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if navbar should be transparent
  // It is transparent ONLY if: 
  // 1. We are on a "transparent page" (like Home)
  // 2. AND we haven't scrolled down yet
  // 3. AND the mobile menu is closed
  const transparentPages = ['/','/products','/services','/projects','/about'];
  const isTransparent = transparentPages.includes(location.pathname) && !scrolled && !isOpen;

  // Helper to check active state
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b
        ${isTransparent 
          ? 'bg-transparent border-white/10 py-4' 
          : 'bg-white shadow-md border-slate-100 py-3'
        }
      `}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex justify-between items-center">
          
          {/* --- LOGO --- */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300
              ${isTransparent ? 'bg-white text-blue-700' : 'bg-blue-600 text-white'}
            `}>
              <span className="font-bold text-lg tracking-tighter">SA</span>
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-bold leading-none tracking-tight transition-colors duration-300
                ${isTransparent ? 'text-white' : 'text-slate-900'}
              `}>
                Sparsh Plywood & Laminates
              </span>
              <span className={`text-[10px] font-medium uppercase tracking-widest transition-colors duration-300
                 ${isTransparent ? 'text-blue-200' : 'text-slate-500'}
              `}>
                Luxury Experts
              </span>
            </div>
          </Link>

          {/* --- DESKTOP NAVIGATION --- */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-semibold transition-all duration-300 relative group py-2
                    ${isActive(item.href)
                      ? (isTransparent ? 'text-white' : 'text-blue-600')
                      : (isTransparent ? 'text-white/80 hover:text-white' : 'text-slate-600 hover:text-blue-600')
                    }
                  `}
                >
                  {item.name}
                  {/* Underline Indicator */}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100
                    ${isActive(item.href) ? 'scale-x-100' : ''}
                    ${isTransparent ? 'bg-white' : 'bg-blue-600'}
                  `}></span>
                </Link>
              ))}
            </div>

            {/* Quote Button */}
            <Link 
              to="/contact" 
              className={`px-5 py-2.5 rounded-sm text-sm font-bold transition-all duration-300 flex items-center gap-2
                ${isTransparent 
                  ? 'bg-white text-blue-700 hover:bg-blue-50' 
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
                }
              `}
            >
              Get Quote
            </Link>
          </div>

          {/* --- MOBILE MENU BUTTON --- */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-md transition-colors
              ${isTransparent ? 'text-white hover:bg-white/10' : 'text-slate-900 hover:bg-slate-100'}
            `}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* --- MOBILE DROPDOWN --- */}
      {/* Note: Absolute positioning ensures it sits on top of content */}
      <div className={`absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 transition-all duration-300 overflow-hidden md:hidden
        ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium px-4 py-2 rounded-md transition-colors
                ${isActive(item.href)
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }
              `}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-100">
            <Link 
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-sm flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
            >
              Get Free Quote
            </Link>
            <a 
               href="tel:+919876543210"
               className="w-full mt-3 border border-slate-200 text-slate-700 font-bold py-3 rounded-sm flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors"
            >
               <Phone className="w-4 h-4" /> Call Support
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;