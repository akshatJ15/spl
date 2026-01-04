import React from 'react';

import {

  ChevronRight,

  FileText,

  Layers,      // For Plywood

  Palette,     // For Laminates

  ShieldCheck, // For Durability

  Hammer,      // For Hardware

  Droplets,    // For Adhesives

  Gem,         // For Veneers

  Phone,    

  CheckCircle2,

  Award,

  ArrowRight

} from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';

import Navbar from '../components/Navbar';

import { Link } from 'react-router-dom';



// Placeholder for hero image - A luxury interior shot

const heroImage = 'https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg?auto=compress&cs=tinysrgb&w=1600';



const Products = () => {



  // --- Animation Variants ---

  const fadeInDown = {

    hidden: { opacity: 0, y: -50 },

    visible: {

      opacity: 1,

      y: 0,

      transition: { duration: 0.8, ease: "easeInOut" as const }

    }

  };



  const fadeInUp = {

    hidden: { opacity: 0, y: 50 },

    visible: {

      opacity: 1,

      y: 0,

      transition: { duration: 0.8, ease: "easeInOut" as const }

    }

  };



  const staggerContainer = {

    hidden: { opacity: 0 },

    visible: {

      opacity: 1,

      transition: {

        staggerChildren: 0.15,

        delayChildren: 0.2

      }

    }

  };



  const scaleIn = {

    hidden: { opacity: 0, scale: 0.9 },

    visible: {

      opacity: 1,

      scale: 1,

      transition: { duration: 0.5 }

    }

  };



  const scaleUp = {

    hidden: { opacity: 0, scale: 0.9 },

    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },

  };



  // --- Data from your Uploaded Images ---

  const productCategories = [

    {

      title: "Premium Plywood",

      description: "Discover the essence of engineering elegance with our artisanal plywood. Each sheet tells a story of strength, precision, and sophistication — elevating your interiors with warm, enduring character.",

      image: "https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&w=800", // Wood stack

      tag: "Structural Core",

      benefits: [

        {

          icon: <ShieldCheck className="w-5 h-5 text-amber-600" />,

          title: "BWP Grade",

          desc: "Boiling Water Proof",

          hoverColor: "hover:bg-amber-50 hover:border-amber-200"

        },

        {

          icon: <Layers className="w-5 h-5 text-stone-600" />,

          title: "Calibrated",

          desc: "Uniform thickness",

          hoverColor: "hover:bg-stone-100 hover:border-stone-300"

        },

        {

          icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,

          title: "Termite Proof",

          desc: "Chemically treated",

          hoverColor: "hover:bg-emerald-50 hover:border-emerald-200"

        }

      ]

    },

    {

      title: "Decorative Laminates",

      description: "Our resplendent laminate range is where form meets function. Rich textures and striking finishes breathe life into spaces, offering unmatched durability and design versatility.",

      image: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=800", // Texture

      tag: "Design Surface",

      benefits: [

        {

          icon: <Palette className="w-5 h-5 text-amber-600" />,

          title: "Exquisite Finish",

          desc: "Matte, Gloss, Texture",

          hoverColor: "hover:bg-amber-50 hover:border-amber-200"

        },

        {

          icon: <ShieldCheck className="w-5 h-5 text-stone-600" />,

          title: "Scratch Resist",

          desc: "High abrasion value",

          hoverColor: "hover:bg-stone-100 hover:border-stone-300"

        },

        {

          icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,

          title: "Anti-Bacterial",

          desc: "Hygienic surface",

          hoverColor: "hover:bg-emerald-50 hover:border-emerald-200"

        }

      ]

    },

    {

      title: "Natural Veneers",

      description: "Elegant natural veneers that bring warmth, texture, and timeless beauty. Sourced from the finest timber, providing a unique grain pattern for every sheet.",

      image: "https://images.pexels.com/photos/3049121/pexels-photo-3049121.jpeg?auto=compress&cs=tinysrgb&w=800", // Veneer/Wood

      tag: "Luxury Finish",

      benefits: [

        {

          icon: <Gem className="w-5 h-5 text-amber-600" />,

          title: "Natural Grain",

          desc: "Authentic wood look",

          hoverColor: "hover:bg-amber-50 hover:border-amber-200"

        },

        {

          icon: <Layers className="w-5 h-5 text-stone-600" />,

          title: "Flexible",

          desc: "For curved surfaces",

          hoverColor: "hover:bg-stone-100 hover:border-stone-300"

        }

      ]

    },

    {

      title: "HPL (Cladding)",

      description: "Engineered for performance, Samrat HPL stands resilient in extreme conditions. From facades to furniture, experience architectural brilliance fused with uncompromised strength.",

      image: "https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&w=800", // Facade

      tag: "Exterior Armor",

      benefits: [

        {

          icon: <ShieldCheck className="w-5 h-5 text-amber-600" />,

          title: "Weather Proof",

          desc: "UV Resistant",

          hoverColor: "hover:bg-amber-50 hover:border-amber-200"

        },

        {

          icon: <CheckCircle2 className="w-5 h-5 text-stone-600" />,

          title: "Fire Retardant",

          desc: "Safety standard compliant",

          hoverColor: "hover:bg-stone-100 hover:border-stone-300"

        }

      ]

    },

    {

      title: "Hardware & Fittings",

      description: "Premium hardware engineered for smooth function and seamless design. From soft-close hinges to architectural handles, we ensure every detail matters.",

      image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800", // Metal/Hardware

      tag: "Functional Art",

      benefits: [

        {

          icon: <Hammer className="w-5 h-5 text-amber-600" />,

          title: "Durability",

          desc: "Anti-rust coating",

          hoverColor: "hover:bg-amber-50 hover:border-amber-200"

        },

        {

          icon: <ShieldCheck className="w-5 h-5 text-stone-600" />,

          title: "Smooth Action",

          desc: "Tested for 50k cycles",

          hoverColor: "hover:bg-stone-100 hover:border-stone-300"

        }

      ]

    },

    {

      title: "Adhesives",

      description: "Industrial-strength adhesives that hold it all together—flawlessly. Formulated for high bonding strength and water resistance.",

      image: "https://images.pexels.com/photos/6412952/pexels-photo-6412952.jpeg?auto=compress&cs=tinysrgb&w=800", // Glue/Craft

      tag: "Bonding Solutions",

      benefits: [

        {

          icon: <Droplets className="w-5 h-5 text-amber-600" />,

          title: "Fast Setting",

          desc: "Quick drying time",

          hoverColor: "hover:bg-amber-50 hover:border-amber-200"

        },

        {

          icon: <ShieldCheck className="w-5 h-5 text-stone-600" />,

          title: "Water Resistant",

          desc: "D3 Grade",

          hoverColor: "hover:bg-stone-100 hover:border-stone-300"

        }

      ]

    }

  ];



  return (

    <div className="font-sans text-stone-800 bg-white selection:bg-amber-500 selection:text-white overflow-x-hidden">

     

      {/* ================= HERO SECTION ================= */}

      <div className="relative w-full h-screen min-h-[600px] flex flex-col">

        <AnimatePresence mode="wait">

          <motion.div

            key={heroImage}

            initial={{ opacity: 0, scale: 1.05 }}

            animate={{ opacity: 1, scale: 1 }}

            exit={{ opacity: 0 }}

            transition={{ duration: 1.2, ease: 'easeOut' }}

            className="absolute inset-0 z-0"

            style={{

              backgroundImage: `url(${heroImage})`,

              backgroundSize: 'cover',

              backgroundPosition: 'center'

            }}

          >

            <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-900/80 to-stone-900/30"></div>

          </motion.div>

        </AnimatePresence>



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

                <FileText className="w-4 h-4 text-amber-500" />

                Collection 2026

              </motion.div>

             

              {/* Title Drop Down */}

              <motion.h1

                initial="hidden"

                animate="visible"

                variants={fadeInDown}

                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight font-serif"

              >

                Crafted for <br />

                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200">

                  Timeless Interiors.

                </span>

              </motion.h1>

             

              {/* Description Fade Up */}

              <motion.p

                initial="hidden"

                animate="visible"

                variants={fadeInUp}

                className="text-base sm:text-lg md:text-xl text-stone-300 max-w-xl md:max-w-2xl leading-relaxed border-l-4 border-amber-500 pl-4 md:pl-6"

              >

                Explore our comprehensive range of premium plywood, laminates, and architectural finishes. Designed for durability and aesthetic perfection.

              </motion.p>

             

              {/* Buttons Fade Up */}

              <motion.div

                initial={{ opacity: 0 }}

                animate={{ opacity: 1 }}

                transition={{ delay: 0.5, duration: 0.8 }}

                className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-6 w-full sm:w-auto"

              >

                <Link to="/catalogue" className="group bg-amber-500 hover:bg-amber-400 text-stone-900 px-6 md:px-8 py-3 md:py-4 font-bold transition-all rounded-sm flex items-center justify-center sm:justify-start shadow-lg shadow-amber-900/50 text-sm md:text-base uppercase tracking-wider">

                  <FileText className="mr-2 w-5 h-5" />

                  Download Catalogue

                </Link>

              </motion.div>

            </div>

          </div>

        </div>

      </div>



      {/* ================= BRAND PARTNERS SECTION (New) ================= */}

      <section className="py-20 bg-white">

        <div className="container mx-auto px-6 md:px-12 text-center">

            <motion.div

                initial={{ opacity: 0, y: 20 }}

                whileInView={{ opacity: 1, y: 0 }}

                viewport={{ once: true }}

                className="mb-12"

            >

                <span className="text-amber-600 font-bold tracking-[0.2em] uppercase text-sm">Strategic Alliances</span>

                <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mt-2 font-serif">Our Brand Partners</h2>

            </motion.div>



            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                {/* Partner 1: Manilam */}

                <motion.div

                    initial={{ opacity: 0, x: -30 }}

                    whileInView={{ opacity: 1, x: 0 }}

                    viewport={{ once: true }}

                    className="group border border-stone-200 p-8 rounded-xl hover:shadow-2xl hover:border-amber-200 transition-all duration-300 bg-stone-50"

                >

                    <div className="h-16 flex items-center justify-center mb-6">

                        {/* Use text or logo image here */}

                        <h3 className="text-3xl font-black text-stone-900 tracking-tighter uppercase">Manilam</h3>

                    </div>

                    <p className="text-stone-600 mb-6">

                        We are proud partners with Manilam, bringing you world-class decorative laminates known for their vibrant designs and superior texture technology.

                    </p>

                    <div className="flex justify-center gap-2 text-sm font-bold text-amber-600">

                         <Award className="w-4 h-4" /> Premium Distributor

                    </div>

                </motion.div>



                {/* Partner 2: Jivanjor */}

                <motion.div

                    initial={{ opacity: 0, x: 30 }}

                    whileInView={{ opacity: 1, x: 0 }}

                    viewport={{ once: true }}

                    className="group border border-stone-200 p-8 rounded-xl hover:shadow-2xl hover:border-amber-200 transition-all duration-300 bg-stone-50"

                >

                    <div className="h-16 flex items-center justify-center mb-6">

                        {/* Use text or logo image here */}

                         <h3 className="text-3xl font-black text-stone-900 tracking-tighter uppercase">Jivanjor</h3>

                    </div>

                    <p className="text-stone-600 mb-6">

                        Our alliance with Jivanjor ensures we provide the most reliable, industrial-strength adhesives for all your carpentry and joinery needs.

                    </p>

                    <div className="flex justify-center gap-2 text-sm font-bold text-amber-600">

                         <Award className="w-4 h-4" /> Authorized Partner

                    </div>

                </motion.div>

            </div>

        </div>

      </section>



      {/* ================= PRODUCT SHOWCASE ================= */}

      <section className="py-16 md:py-24 bg-stone-50 relative overflow-hidden">

        {/* Technical Grid Background */}

        <div

          className="absolute inset-0 opacity-[0.05]"

          style={{

            backgroundImage:

              "linear-gradient(#44403c 1.3px, transparent 1px), linear-gradient(to right, #44403c 1px, transparent 1px)",

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

              className="text-3xl md:text-5xl font-bold text-stone-900 mb-6 tracking-tight font-serif"

            >

              Engineered for Excellence

            </motion.h2>

            <motion.p

              initial="hidden"

              whileInView="visible"

              viewport={{ once: true }}

              variants={fadeInUp}

              transition={{ delay: 0.1 }}

              className="text-stone-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"

            >

              From structural foundations to the final aesthetic touch, discover products that define quality.

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

                className="border-b border-stone-200 pb-16 md:pb-20 last:border-0 last:pb-0"

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

                      <h3 className="text-2xl md:text-3xl font-bold text-stone-900 leading-tight tracking-tight mb-4 font-serif">

                        {category.title}

                      </h3>

                      {/* Gold Underline */}

                      <div className="h-1.5 w-16 bg-amber-500 rounded-full mb-6"></div>



                      {/* Description */}

                      <p className="text-sm md:text-base text-stone-600 leading-relaxed font-normal">

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

                    <div className="relative rounded-xl overflow-hidden shadow-lg border border-stone-200 bg-white h-[250px] md:h-[350px] w-full group">

                      <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors z-10"></div>

                      <img

                        src={category.image}

                        alt={category.title}

                        className="w-full h-full object-cover"

                      />

                      {/* Tag on Image */}

                      <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20">

                        <span className="bg-amber-500 text-stone-900 text-xs font-bold px-3 py-1.5 md:px-4 md:py-2 uppercase tracking-widest rounded-sm shadow-lg">

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

                        className={`p-4 bg-white rounded-lg border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group ${benefit.hoverColor}`}

                      >

                        <div className="mb-3 p-2 bg-stone-50 rounded-full group-hover:bg-white/50 transition-colors">

                          {benefit.icon}

                        </div>

                        <h4 className="font-bold text-stone-900 text-sm mb-1 font-serif">

                          {benefit.title}

                        </h4>

                        <p className="text-xs text-stone-500 leading-snug">

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

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-stone-800 via-stone-900 to-stone-950"></div>

        <div className="absolute inset-0 opacity-[0.07]"

             style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>

        </div>

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>



        {/* 2. Content Container */}

        <div className="container mx-auto px-6 text-center relative z-10">

          <motion.div

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true }}

            variants={scaleUp}

            className="max-w-3xl mx-auto bg-stone-800/30 border border-stone-700/50 p-10 md:p-12 rounded-lg backdrop-blur-sm shadow-2xl"

          >

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight font-serif">

              Need help choosing the right material?

            </h2>

            <p className="text-stone-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">

              Our experts can guide you through the technical specifications of BWP Plywood, Laminate textures, and Adhesive applications.

            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-5">

             

              <a

                href="tel:+919876543210"

                className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-stone-900 font-bold rounded-sm hover:bg-amber-400 transition-all shadow-lg shadow-amber-900/30 hover:-translate-y-0.5"

              >

                <Phone className="mr-2 w-5 h-5" /> Consult an Expert

              </a>

             

              <Link

                to="/contact"

                className="group inline-flex items-center justify-center px-8 py-4 border border-stone-500 text-white font-bold rounded-sm hover:bg-stone-800 hover:border-stone-400 transition-all"

              >

                Request Quote

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