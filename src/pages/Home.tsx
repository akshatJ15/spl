import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Plus,
  Minus,
  MoveRight
} from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// IMPORTANT: Ensure Navbar.js is in the same folder
import Navbar from "../components/Navbar"; 

// --- ANIMATION VARIANTS (Fixed Type Error) ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// --- COMPONENT: HERO SLIDER ---
const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Kitchens Made To Impress",
      subtitle: "Smart surfaces that blend elegance and function.",
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/3773575/pexels-photo-3773575.png?auto=compress&cs=tinysrgb&w=1600",
      title: "Luxury That Feels Like Home",
      subtitle: "Textures that speak warmth and timeless comfort.",
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Build Bold. Live Beautifully.",
      subtitle: "Surfaces that perform, inspire, and endure.",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen min-h-[600px] bg-stone-950 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-10 flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <motion.div
              key={`text-${currentIndex}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {/* Reduced Font Sizes */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-serif mb-6 leading-tight tracking-tight drop-shadow-2xl">
                {slides[currentIndex].title}
              </h1>
              
              <p className="text-base md:text-xl text-stone-200 mb-10 font-light border-l-2 border-amber-500 pl-6 max-w-xl leading-relaxed">
                {slides[currentIndex].subtitle}
              </p>

              <Link to="/products" className="group inline-flex items-center gap-3 px-8 py-4 bg-amber-500 text-stone-900 font-bold text-sm md:text-base tracking-widest uppercase hover:bg-white hover:text-stone-950 transition-all duration-300">
                Explore Collection
                <MoveRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1 rounded-full transition-all duration-500 ${currentIndex === idx ? "w-12 bg-amber-500" : "w-4 bg-white/30 hover:bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
};

// --- COMPONENT: STATS BAR ---
const StatsBar = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  const stats = [
    { value: 25, suffix: "+", label: "Years Experience" },
    { value: 500, suffix: "+", label: "Dealers Network" },
    { value: 10000, suffix: "+", label: "Projects Delivered" },
    { value: 100, suffix: "%", label: "Quality Assured" },
  ];

  return (
    <div ref={ref} className="bg-stone-950 text-white py-16 relative z-20 -mt-2">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-stone-800 pt-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-left group">
              {/* Reduced Font Size */}
              <h4 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-stone-500 mb-2 font-serif group-hover:to-amber-500 transition-all duration-500">
                {inView ? (
                  <CountUp start={0} end={stat.value} duration={3} separator="," suffix={stat.suffix} />
                ) : (
                  0
                )}
              </h4>
              <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-amber-500 font-bold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- COMPONENT: PRODUCT SHOWCASE ---
const ProductShowcase = () => {
  const cards = [
    {
      id: "01",
      title: "Plywood",
      desc: "Engineering elegance. BWP Grade, Fire Retardant, and Termite Proof sheets.",
      image: "https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: "02",
      title: "Laminates",
      desc: "Resplendent textures. From matte to high-gloss, redefining luxury interiors.",
      image: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: "03",
      title: "Cladding",
      desc: "Exterior armor. Weather-proof HPL that keeps facades looking new.",
      image: "https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-stone-50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16 max-w-4xl"
        >
          <span className="text-amber-600 font-bold tracking-[0.2em] uppercase text-xs block mb-4">
            Our Expertise
          </span>
          {/* Reduced Font Size */}
          <h2 className="text-4xl md:text-6xl font-bold text-stone-900 font-serif leading-tight">
            The Trinity of <br/>
            <span className="text-stone-400 italic font-light">Perfection.</span>
          </h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className="relative group h-[400px] bg-stone-100 overflow-hidden"
            >
              <div className="absolute inset-0">
                 <div className="absolute inset-0 bg-stone-950/30 group-hover:bg-stone-950/10 transition-colors duration-700 z-10"></div>
                 <img src={card.image} alt={card.title} className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-out" />
              </div>

              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                   <span className="text-4xl font-bold text-white/20 font-serif">{card.id}</span>
                   <div className="w-10 h-10 bg-white text-stone-900 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <ArrowUpRight className="w-5 h-5" />
                   </div>
                </div>
                
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-white mb-2 font-serif leading-none">
                    {card.title}
                  </h3>
                  <p className="text-stone-200 text-sm leading-relaxed max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {card.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// --- COMPONENT: FAQ SECTION ---
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { question: "What certifications do Samrat Plywood products hold?", answer: "All our products are ISI certified (IS:303, IS:710). We are also ISO 9001:2015 certified." },
    { question: "Does Samrat manufacture plywood for international markets?", answer: "Yes, we export to over 12 countries meeting European E1 emission standards." },
    { question: "What is the warranty period for your Laminates?", answer: "Our premium 1mm decorative laminates come with a 10-year warranty against fading." },
    { question: "Do you offer fire-retardant options?", answer: "Yes, our 'Firewall' series is treated with nano-technology fire retardant chemicals." }
  ];

  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5">
            {/* Reduced Font Size */}
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 font-serif leading-tight mb-6">
              Everything <br/> You Need <br/> <span className="text-amber-500 italic">To Know.</span>
            </h2>
            <p className="text-stone-500 text-base">
              Can't find the answer you're looking for? Reach out to our customer support team.
            </p>
            <div className="mt-6">
              <Link to="/contact" className="text-stone-900 font-bold underline hover:text-amber-600 text-sm">Contact Support</Link>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-b border-stone-200 pb-2">
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full flex items-center justify-between py-5 text-left group"
                  >
                    <span className={`text-lg md:text-xl font-medium transition-colors ${isOpen ? 'text-stone-900' : 'text-stone-400 group-hover:text-stone-600'}`}>
                      {faq.question}
                    </span>
                    <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      <Plus className={`w-5 h-5 ${isOpen ? 'text-amber-500' : 'text-stone-300'}`} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 text-stone-600 text-base leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- COMPONENT: CTA SECTION ---
const CTASection = () => {
  return (
    <section className="py-20 md:py-24 bg-stone-950 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&w=1600)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70" />
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[0%] left-[10%] w-[300px] h-[300px] bg-stone-700/10 rounded-full blur-[60px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white font-serif mb-6 tracking-tight">
            Ready to <span className="text-amber-500">Transform</span> <br/> Your Space?
          </h2>
          <p className="text-stone-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            Get in touch with our experts today for a personalized consultation and bring your vision to life.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a 
              href="tel:+919876543210"
              className="px-8 py-4 bg-white text-stone-950 font-bold text-lg rounded-sm hover:bg-stone-200 transition-colors w-full md:w-auto min-w-[180px]"
            >
              Call Now
            </a>
            <Link 
              to="/contact"
              className="px-8 py-4 border border-amber-500/50 text-amber-500 font-bold text-lg rounded-sm hover:bg-amber-500 hover:text-stone-950 transition-all w-full md:w-auto min-w-[180px]"
            >
              Get a Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- MAIN PAGE ---
const Home = () => {
  return (
    <div className="font-sans text-stone-800 bg-white selection:bg-amber-500 selection:text-white overflow-x-hidden">
      <Navbar />
      <HeroSlider />
      <StatsBar />
      <ProductShowcase />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Home;