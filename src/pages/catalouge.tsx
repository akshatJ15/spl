import React from 'react';
import { 
  FileText, 
  Download,
  Phone,
  MoveRight,
  BookOpen
} from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

// High-end dark interior for better contrast
const heroImage = "https://images.pexels.com/photos/2029694/pexels-photo-2029694.jpeg?auto=compress&cs=tinysrgb&w=1600";

// --- Animation Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

// --- Catalogue Data ---
const catalogues = [
  {
    id: 1,
    title: "Chromatic Tales",
    desc: "A vibrant spectrum of decorative laminates designed to bring life to interiors.",
    fileName: "Chromatic Tales.pdf",
    size: "12 MB",
    gradient: "from-rose-950 via-stone-900 to-black"
  },
  {
    id: 2,
    title: "Manilam 1MM",
    desc: "The premium range featuring exclusive textures and high-durability finishes.",
    fileName: "MANILAM 1MM.pdf",
    size: "18 MB",
    gradient: "from-amber-900 via-stone-900 to-black"
  },
  {
    id: 3,
    title: "Manilam Eco",
    desc: "Sustainable and economical laminate solutions without compromising on style.",
    fileName: "MANILAM ECO.pdf",
    size: "10 MB",
    gradient: "from-emerald-950 via-stone-900 to-black"
  },
  {
    id: 4,
    title: "Master Catalogue",
    desc: "Our complete comprehensive guide to all Manilam surface solutions.",
    fileName: "Manilam.pdf",
    size: "25 MB",
    gradient: "from-blue-950 via-stone-900 to-black"
  },
  {
    id: 5,
    title: "Yelomica 0.9mm",
    desc: "A curated selection of 0.9mm laminates perfect for vertical applications.",
    fileName: "Yelomica_09-02.pdf",
    size: "15 MB",
    gradient: "from-purple-950 via-stone-900 to-black"
  }
];

const Catalogue: React.FC = () => {
  return (
    <div className="font-sans text-stone-800 bg-stone-50 selection:bg-amber-500 selection:text-white overflow-x-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full h-[85vh] min-h-[700px] flex flex-col bg-stone-950">
        <div className="absolute inset-0 z-0">
           <img 
            src={heroImage} 
            alt="Catalogue Hero" 
            className="w-full h-full object-cover opacity-50"
           />
           {/* Gradient Overlay: Heavy on left for text readability */}
           <div className="absolute inset-0 bg-gradient-to-r from-black via-stone-950/60 to-transparent"></div>
        </div>

        <div className="relative z-20 w-full border-b border-white/5">
          <Navbar />
        </div>

        {/* Content Container - LEFT ALIGNED */}
        <div className="relative z-10 flex-grow flex items-center px-6 md:px-16 lg:px-24">
          <div className="max-w-4xl space-y-10">
            
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-amber-500/10 backdrop-blur-md border-l-2 border-amber-500 text-amber-500 text-xs font-bold uppercase tracking-[0.2em]"
            >
              <BookOpen className="w-4 h-4" />
              Digital Library
            </motion.div>
            
            {/* Massive Left-Aligned Heading */}
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-6xl sm:text-6xl md:text-6.5xl lg:text-7xl font-bold text-white font-serif tracking-tighter leading-[0.9]"
            >
              The Design <br/> 
              <span className="text-stone-400">
                Archives.
              </span>
            </motion.h1>
            
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-lg md:text-2xl text-stone-300 max-w-2xl font-light leading-relaxed pl-1"
            >
              Access our complete portfolio of high-definition textures, technical data sheets, and design inspirations instantly.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ================= CATALOGUE SHOWCASE ================= */}
      <section className="py-32 bg-stone-950 relative">
        {/* Subtle Background Grid */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {catalogues.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="group relative flex flex-col h-full"
              >
                {/* --- 1. The Cover Art (Simulated Physical Book) --- */}
                {/* Aspect Ratio 3:4 for portrait book feel */}
                <div className={`relative w-full aspect-[3/4] rounded-sm overflow-hidden shadow-2xl transition-all duration-700 group-hover:-translate-y-4 group-hover:shadow-amber-900/20 bg-gradient-to-br ${item.gradient}`}>
                  
                  {/* Texture Overlay */}
                  <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                  
                  {/* Border Accent */}
                  <div className="absolute inset-4 border border-white/10 opacity-50"></div>

                  {/* Content on Cover */}
                  <div className="absolute inset-0 p-10 flex flex-col justify-between">
                    <div className="flex justify-between items-start opacity-70">
                      <span className="text-white/60 text-[10px] font-bold tracking-[0.3em] uppercase">VOL. {item.id}</span>
                      <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                         <FileText className="w-3 h-3 text-white/60" />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-4xl font-bold text-white font-serif leading-none mb-4">
                        {item.title.split(" ")[0]}
                        <br/>
                        <span className="font-light opacity-70 italic">{item.title.split(" ").slice(1).join(" ")}</span>
                      </h3>
                      <div className="h-1 w-12 bg-amber-500"></div>
                    </div>
                  </div>

                  {/* Hover Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                </div>

                {/* --- 2. The Details Below --- */}
                <div className="pt-8 px-2 flex-grow flex flex-col">
                  <div className="flex justify-between items-end mb-4">
                    <h4 className="text-2xl font-bold text-white font-serif group-hover:text-amber-500 transition-colors">
                      {item.title}
                    </h4>
                    <span className="text-[10px] font-bold text-stone-500 bg-stone-900 px-2 py-1 border border-stone-800 uppercase tracking-widest">
                      {item.size}
                    </span>
                  </div>
                  
                  <p className="text-stone-500 text-sm leading-relaxed mb-8 border-t border-stone-800 pt-4">
                    {item.desc}
                  </p>

                  <a 
                    href={`/catalouges/${item.fileName}`} 
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto w-full py-4 border border-stone-800 text-stone-300 font-bold uppercase tracking-[0.15em] text-xs rounded-sm hover:bg-amber-500 hover:text-stone-950 hover:border-amber-500 transition-all duration-300 flex items-center justify-center gap-3 group/btn"
                  >
                    Download PDF
                    <Download className="w-4 h-4 group-hover/btn:translate-y-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative py-32 overflow-hidden bg-stone-100">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            className="max-w-4xl mx-auto"
          >
            <span className="text-amber-600 font-bold tracking-[0.2em] uppercase text-xs block mb-6">
                Next Steps
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-stone-900 mb-8 tracking-tighter font-serif">
              Ready to Order?
            </h2>
            <p className="text-stone-600 mb-12 max-w-2xl mx-auto text-xl font-light">
              Selected your favorite designs? Contact our sales team for pricing, availability, and bulk discounts.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              
              <a
                href="tel:+917217251263"
                className="inline-flex items-center justify-center px-10 py-5 bg-stone-900 text-white font-bold rounded-sm hover:bg-stone-800 transition-all text-lg min-w-[250px]"
              >
                <Phone className="mr-3 w-5 h-5" /> Call Sales
              </a>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-10 py-5 border border-amber-500 text-amber-600 font-bold rounded-sm hover:bg-amber-500 hover:text-stone-900 transition-all text-lg min-w-[250px]"
              >
                Request Quote
                <MoveRight className="ml-3 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Catalogue;