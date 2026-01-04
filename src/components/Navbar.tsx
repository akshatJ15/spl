import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';

const splLogo = '/logo.jpeg';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    // { name: 'Services', href: '/services' }, // Optional based on your request
    { name: 'E-Catalogue', href: '/catalogue' },
    { name: 'Visit Us', href: '/visitus' },
    // { name: 'About Us', href: '/about' },
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
  // Transparent ONLY on specific pages at the very top
  const transparentPages = ['/', '/products', '/about', '/catalogue', '/visitus'];
  const isTransparent = transparentPages.includes(location.pathname) && !scrolled && !isOpen;

  // Helper to check active state
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b
        ${isTransparent
          ? 'bg-transparent border-white/10 py-5'
          : 'bg-white shadow-md border-stone-100 py-3'
        }
      `}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex justify-between items-center">

          {/* --- LOGO SECTION --- */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* Logic: If you have the image, show it. If transparent, we might want a white background for the colored logo, or use a white version of the logo */}
            <div className={`flex items-center justify-center transition-all duration-300 ${isTransparent ? 'bg-white/90 p-1 rounded-sm' : ''}`}>
               {splLogo ? (
                 <img src={splLogo} alt="SPL Logo" className="h-10 w-auto object-contain" />
               ) : (
                 // Fallback if image import isn't set up yet
                 <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-lg font-serif
                    ${isTransparent ? 'border-stone-900 text-stone-900' : 'border-stone-900 text-stone-900'}
                 `}>
                   SPL
                 </div>
               )}
            </div>
            
            <div className="flex flex-col">
              <span className={`text-xl font-bold leading-none tracking-tight font-serif transition-colors duration-300 uppercase
                ${isTransparent ? 'text-white drop-shadow-md' : 'text-stone-900'}
              `}>
                Sparsh Plywood
              </span>
              <span className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300
                 ${isTransparent ? 'text-amber-400 drop-shadow-sm' : 'text-amber-600'}
              `}>
                Luxury Laminates
              </span>
            </div>
          </Link>

          {/* --- DESKTOP NAVIGATION --- */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-bold uppercase tracking-wide transition-all duration-300 relative group py-2
                    ${isActive(item.href)
                      ? (isTransparent ? 'text-amber-400' : 'text-amber-600')
                      : (isTransparent ? 'text-white hover:text-amber-400' : 'text-stone-600 hover:text-amber-600')
                    }
                  `}
                >
                  {item.name}
                  {/* Hover Underline Animation */}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100
                    ${isActive(item.href) ? 'scale-x-100' : ''}
                    ${isTransparent ? 'bg-amber-400' : 'bg-amber-600'}
                  `}></span>
                </Link>
              ))}
            </div>

            {/* Quote Button (Gold Theme) */}
            <Link
              to="/contact"
              className={`px-6 py-2.5 rounded-sm text-sm font-bold transition-all duration-300 flex items-center gap-2 uppercase tracking-wider
                ${isTransparent
                  ? 'bg-amber-500 text-stone-900 hover:bg-amber-400 hover:scale-105 shadow-lg shadow-amber-900/20'
                  : 'bg-stone-900 text-white hover:bg-amber-500 hover:text-stone-900'
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
              ${isTransparent ? 'text-white hover:bg-white/10' : 'text-stone-900 hover:bg-stone-100'}
            `}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* --- MOBILE DROPDOWN MENU --- */}
      <div className={`absolute top-full left-0 w-full bg-white shadow-2xl border-t border-stone-100 transition-all duration-500 ease-in-out overflow-hidden md:hidden
        ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="flex flex-col p-6 space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between text-base font-bold px-4 py-4 border-b border-stone-100 last:border-0 hover:pl-6 transition-all duration-300
                ${isActive(item.href)
                  ? 'text-amber-600 bg-stone-50'
                  : 'text-stone-600 hover:text-stone-900'
                }
              `}
            >
              {item.name}
              <ChevronRight className="w-4 h-4 text-stone-400" />
            </Link>
          ))}
          
          <div className="pt-6 flex flex-col gap-3">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full bg-amber-500 text-stone-900 font-bold py-4 rounded-sm flex items-center justify-center gap-2 hover:bg-amber-400 transition-colors uppercase tracking-widest text-sm"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+917217251263"
              className="w-full border border-stone-200 text-stone-600 font-bold py-4 rounded-sm flex items-center justify-center gap-2 hover:bg-stone-900 hover:text-white transition-colors text-sm uppercase"
            >
              <Phone className="w-4 h-4" /> +91 721 725 1263
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;