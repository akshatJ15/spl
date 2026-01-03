import {  
  ChevronRight,
  FileText, 
  Cpu, 
  Gauge, 
  LayoutGrid,
  Settings,
  Wind,
  Zap,
  Phone,     
  ShieldCheck 
} from 'lucide-react';
import { motion, Variants } from 'framer-motion'; 
import heroImage from '../Images/daikin-vietnam-07.jpg';
import Navbar from '../components/Navbar';
import VRVImage from '../Images/VRV.png';
import { Link } from 'react-router-dom';

const Products = () => {

  // --- Animation Variants ---
  const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.5 } 
    }
  };

  const scaleUp: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  // --- Data ---
  const productCategories = [
    {
      title: "VRV / VRF Systems",
      description: "Advanced variable refrigerant flow systems designed for high-efficiency cooling in multi-story buildings and luxury residences. With advanced zoning capabilities and precise temperature control, these systems deliver optimal comfort while minimizing energy consumption.",
      image: VRVImage,
      tag: "Flagship Series",
      benefits: [
        { 
          icon: <Zap className="w-5 h-5 text-blue-600" />, 
          title: "Energy Efficient", 
          desc: "Energy Star® Rated",
          hoverColor: "hover:bg-blue-50 hover:border-blue-200"
        },
        { 
          icon: <LayoutGrid className="w-5 h-5 text-green-500" />, 
          title: "Flexible Zoning", 
          desc: "Individual control zones",
          hoverColor: "hover:bg-green-50 hover:border-green-200"
        },
        { 
          icon: <Cpu className="w-5 h-5 text-purple-500" />, 
          title: "Inverter Tech", 
          desc: "Variable speed compressor",
          hoverColor: "hover:bg-purple-50 hover:border-purple-200"
        },
        { 
          icon: <ShieldCheck className="w-5 h-5 text-orange-500" />, 
          title: "5-Year Warranty", 
          desc: "Comprehensive coverage",
          hoverColor: "hover:bg-orange-50 hover:border-orange-200"
        }
      ]
    },
    {
      title: "Window Air Conditioners",
      description: "Compact, cost-effective cooling solutions perfect for site offices, cabins, and residential spaces where ducting isn't feasible. These units offer powerful cooling in a space-saving form factor with easy installation requirements.",
      image: "https://images.pexels.com/photos/5835595/pexels-photo-5835595.jpeg?auto=compress&cs=tinysrgb&w=600",
      tag: "Economy Series",
      benefits: [
        { 
          icon: <LayoutGrid className="w-5 h-5 text-blue-600" />, 
          title: "Compact Design", 
          desc: "Space saving footprint",
          hoverColor: "hover:bg-blue-50 hover:border-blue-200"
        },
        { 
          icon: <Settings className="w-5 h-5 text-slate-600" />, 
          title: "Easy Install", 
          desc: "Quick setup process",
          hoverColor: "hover:bg-slate-100 hover:border-slate-300"
        },
        { 
          icon: <ShieldCheck className="w-5 h-5 text-green-600" />, 
          title: "Reliable", 
          desc: "3-Year PCB Warranty",
          hoverColor: "hover:bg-green-50 hover:border-green-200"
        },
        { 
          icon: <Zap className="w-5 h-5 text-yellow-500" />, 
          title: "Low Maint.", 
          desc: "Minimal service needed",
          hoverColor: "hover:bg-yellow-50 hover:border-yellow-200"
        }
      ]
    },
    {
      title: "Central Air Conditioning",
      description: "Comprehensive climate control infrastructure for malls, hospitals, and large corporate complexes. These systems are engineered to handle high-static pressure and provide uniform cooling across vast floor areas through integrated ductwork.",
      image: "https://images.pexels.com/photos/8005394/pexels-photo-8005394.jpeg?auto=compress&cs=tinysrgb&w=600",
      tag: "Commercial Grade",
      benefits: [
        { 
          icon: <Gauge className="w-5 h-5 text-red-500" />, 
          title: "Precise Control", 
          desc: "Exact temperature mgmt",
          hoverColor: "hover:bg-red-50 hover:border-red-200"
        },
        { 
          icon: <Wind className="w-5 h-5 text-blue-600" />, 
          title: "High Static", 
          desc: "Powerful air distribution",
          hoverColor: "hover:bg-blue-50 hover:border-blue-200"
        },
        { 
          icon: <LayoutGrid className="w-5 h-5 text-slate-600" />, 
          title: "Integration", 
          desc: "Seamless ductwork fit",
          hoverColor: "hover:bg-slate-100 hover:border-slate-300"
        },
        { 
          icon: <ShieldCheck className="w-5 h-5 text-green-600" />, 
          title: "Durability", 
          desc: "10-Year Service Life",
          hoverColor: "hover:bg-green-50 hover:border-green-200"
        }
      ]
    },
    {
      title: "Cassette Ceiling Units",
      description: "Discreet, ceiling-mounted units that provide 360° airflow coverage without occupying wall or floor space. Ideal for modern offices and showrooms where aesthetics matter as much as cooling performance.",
      image: "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=600",
      tag: "Modern Office",
      benefits: [
        { 
          icon: <Wind className="w-5 h-5 text-blue-600" />, 
          title: "360° Airflow", 
          desc: "Uniform cooling coverage",
          hoverColor: "hover:bg-blue-50 hover:border-blue-200"
        },
        { 
          icon: <LayoutGrid className="w-5 h-5 text-purple-500" />, 
          title: "Aesthetics", 
          desc: "Sleek ceiling mount",
          hoverColor: "hover:bg-purple-50 hover:border-purple-200"
        },
        { 
          icon: <Zap className="w-5 h-5 text-yellow-500" />, 
          title: "Whisper Quiet", 
          desc: "Silent operation",
          hoverColor: "hover:bg-yellow-50 hover:border-yellow-200"
        },
        { 
          icon: <ShieldCheck className="w-5 h-5 text-green-600" />, 
          title: "Warranty", 
          desc: "7-Year Protection",
          hoverColor: "hover:bg-green-50 hover:border-green-200"
        }
      ]
    }
  ];

  return (
    <div className="font-sans text-slate-800 bg-white selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full h-screen min-h-[600px] flex flex-col">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Corporate Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-900/30"></div>
        </div>

        {/* Navbar */}
        <div className="relative z-20 w-full border-b border-white/10">
          <Navbar />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex-grow flex items-center">
          <div className="container mx-auto px-4 sm:px-6 md:px-12">
            <div className="max-w-4xl space-y-6 md:space-y-8">
              
              {/* Badge Fade In */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-sm shadow-lg"
              >
                <FileText className="w-4 h-4 text-green-400" />
                Product Catalog 2025
              </motion.div>
              
              {/* Title Drop Down */}
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeInDown}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight"
              >
                High Perfomance <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200">
                  Cooling Soultions .
                </span>
              </motion.h1>
              
              {/* Description Fade Up */}
              <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-base sm:text-lg md:text-xl text-slate-300 max-w-xl md:max-w-2xl leading-relaxed border-l-4 border-blue-600 pl-4 md:pl-6"
              >
                Explore our range of energy-efficient systems from the world's
                leading manufacturers. Designed for durability and performance.
              </motion.p>
              
              {/* Buttons Fade Up */}
              <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.5, duration: 0.8 }}
                              className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-6 w-full sm:w-auto"
                            >
                <button className="group bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 font-semibold transition-all rounded-sm flex items-center justify-center sm:justify-start shadow-lg shadow-blue-900/50 text-sm md:text-base">
                  <FileText className="mr-2 w-5 h-5" />
                  Get in Touch!
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= PRODUCT SHOWCASE (Zig-Zag + Animations) ================= */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        {/* Technical Grid Background */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#94a3b8 1.3px, transparent 1px), linear-gradient(to right, #94a3b8 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="container mx-auto px-4 md:px-12 relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
            >
              Engineered for Excellence
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Discover our comprehensive range of cooling solutions. From
              whisper-quiet residential units to powerhouse industrial chillers.
            </motion.p>
          </div>

          <div className="space-y-20 md:space-y-32">
            {productCategories.map((category, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp} 
                className="border-b border-slate-200 pb-16 md:pb-20 last:border-0 last:pb-0"
              >
                {/* --- ROW 1: Heading/Text & Image Split --- */}
                <div
                  className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center mb-12 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* TEXT SIDE */}
                  <div className="w-full lg:w-[40%] space-y-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight tracking-tight mb-4">
                        {category.title}
                      </h3>
                      {/* Blue Underline */}
                      <div className="h-1.5 w-16 bg-blue-600 rounded-full mb-6"></div>

                      {/* Description */}
                      <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* IMAGE SIDE */}
                  <motion.div
                    whileHover={{ scale: 1.02 }} 
                    transition={{ duration: 0.4 }}
                    className="w-full lg:w-[60%]"
                  >
                    <div className="relative rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-white h-[250px] md:h-[350px] w-full">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Tag on Image */}
                      <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20">
                        <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 md:px-4 md:py-2 uppercase tracking-widest rounded-full shadow-lg">
                          {category.tag}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* --- ROW 2: Horizontal Benefits Strip --- */}
                {category.benefits && (
                  <motion.div
                    variants={staggerContainer} 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                  >
                    {category.benefits.map((benefit, i) => (
                      <motion.div
                        key={i}
                        variants={scaleIn} 
                        // Applied dynamic hover color here
                        className={`p-4 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group ${benefit.hoverColor}`}
                      >
                        <div className="mb-3 p-2 bg-slate-50 rounded-full group-hover:bg-white/50 transition-colors">
                          {benefit.icon}
                        </div>
                        <h4 className="font-bold text-slate-900 text-sm mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-xs text-slate-500 leading-snug">
                          {benefit.desc}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative py-24 overflow-hidden">
        {/* 1. Background Layers */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950"></div>
        <div className="absolute inset-0 opacity-[0.07]" 
             style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        {/* 2. Content Container */}
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleUp}
            className="max-w-3xl mx-auto bg-slate-800/30 border border-slate-700/50 p-10 md:p-12 rounded-lg backdrop-blur-sm shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Confused about tonnage or star ratings?
            </h2>
            <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              Let our technical experts help you select the perfect machine based on your room size, sun exposure, and occupancy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              
              {/* Primary Button (Phone Link Added) */}
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-sm hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/30 hover:-translate-y-0.5"
              >
                <Phone className="mr-2 w-5 h-5" /> Book Free Consultation
              </a>
              
              <Link 
                to="/contact" 
                className="group inline-flex items-center justify-center px-8 py-4 border border-slate-500 text-white font-bold rounded-sm hover:bg-slate-800 hover:border-slate-400 transition-all"
              >
                Request Custom Quote
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Products;