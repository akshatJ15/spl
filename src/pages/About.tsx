import React, { useState } from 'react';
import { 
  Award, 
  Users,   
  ShieldCheck, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Target, 
  Lightbulb,
  Briefcase,
  Calendar,
  Building2,
  Factory,
  Snowflake,
  Wind,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';

const heroImage = 'https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg?auto=compress&cs=tinysrgb&w=1600';

const About = () => {

  // --- Animation Variants ---
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -50 },
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

  const scaleUp: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  // --- Expertise Data & State ---
  const [activeExpertise, setActiveExpertise] = useState(0);

  const expertiseData = [
    { 
      title: "Commercial Airconditioning", 
      icon: <Building2 className="w-5 h-5" />,
      image: "https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Our expertise in air conditioning systems is unmatched in the industry. We design, install, and maintain systems that provide optimal comfort while maximizing energy efficiency. Our solutions are tailored to each client's specific requirements ensuring cost-effective and sustainable climate control.",
      points: ["Professional Installation", "Energy Efficient Solutions", "Maintenance & Support"]
    },
    { 
      title: "Large Residential Projects", 
      icon: <Briefcase className="w-5 h-5" />,
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "We excel in handling large-scale residential projects, providing comprehensive HVAC solutions for apartment complexes, gated communities, and luxury residences. Our team ensures seamless integration of climate control systems that offer personalized comfort for every home.",
      points: ["Centralized Cooling", "Smart Home Integration", "Quiet Operation"]
    },
    { 
      title: "Industrial Airconditioning", 
      icon: <Factory className="w-5 h-5" />,
      image: "https://images.pexels.com/photos/257704/pexels-photo-257704.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Industrial environments require robust and precise cooling. We provide heavy-duty air conditioning systems designed to withstand demanding conditions while maintaining critical temperature and humidity levels for manufacturing and processing facilities.",
      points: ["High-Capacity Chillers", "Process Cooling", "Ventilation Systems"]
    },
    { 
      title: "Cold Chain Solutions", 
      icon: <Snowflake className="w-5 h-5" />,
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "We offer end-to-end cold chain solutions for perishable goods. From cold storage warehouses to refrigerated transport, our systems ensure product integrity by maintaining strict temperature controls throughout the supply chain.",
      points: ["Cold Storage Design", "Refrigeration Units", "Temperature Monitoring"]
    },
    { 
      title: "Ventilation Projects", 
      icon: <Wind className="w-5 h-5" />,
      image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Proper ventilation is key to indoor air quality. We design and install advanced ventilation systems for basements, parking lots, and commercial kitchens, ensuring a continuous supply of fresh air and efficient removal of contaminants.",
      points: ["Fresh Air Systems", "Exhaust Solutions", "Air Filtration"]
    },
  ];

  // --- Other Data ---
  const values = [
    {
      icon: <Award className="w-8 h-8 text-blue-500" />,
      title: "Excellence",
      description: "We don't cut corners. From material selection to the final finishing touch, we strive for perfection in every installation."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
      title: "Integrity",
      description: "Honest pricing, genuine parts, and transparent communication. We believe trust is the foundation of our business."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Customer Focus",
      description: "We design solutions around your needs, not our sales targets. Your comfort is our only metric for success."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-blue-500" />,
      title: "Quality First",
      description: "We partner only with top-tier brands and use high-grade copper piping to ensure your system lasts for years."
    }
  ];

  const team = [
    {
      name: "Anurag Bansal",
      role: "Founder",
      experience: "25+ Years Experience",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "An HVAC industry veteran who built the company from a single service van to a city-wide leader."
    },
    {
      name: "Akash Bansal",
      role: "Co-Founder",
      experience: "25+ Years Experience",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Specialist in VRF design and energy-efficient climate architecture for commercial spaces."
    }
  ];

  const companyStats = [
    {
      title: "Incorporated In:",
      value: "2005",
      icon: <Building2 className="w-6 h-6 text-blue-600" />,
      subtext: "19 Years of Excellence"
    },
    {
      title: "Turnover FY 2023-24:",
      value: "₹50.12 Cr",
      icon: <Calendar className="w-6 h-6 text-blue-600" />, // Using Calendar as placeholder for "Turnovers" icon concept
      subtext: "Consistent YOY Growth",
      badges: ["2021-22", "2022-23", "2023-24"]
    }
  ];

  return (
    <div className="font-sans text-slate-800 bg-white selection:bg-blue-600 selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full h-[80vh] min-h-[500px] flex flex-col">
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
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-900/30"></div>
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
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-sm shadow-lg"
              >
                <Lightbulb className="w-4 h-4 text-green-400" />
                About The Company
              </motion.div>
              
              {/* Title */}
              <motion.h1 
                initial="hidden"
                animate="visible"
                variants={fadeInDown}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight"
              >
                Driving Excellence in <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200">
                  Climate Control.
                </span>
              </motion.h1>
              
              {/* Description */}
              <motion.p 
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-base sm:text-lg md:text-xl text-slate-300 max-w-xl md:max-w-2xl leading-relaxed border-l-4 border-blue-600 pl-4 md:pl-6"
              >
                For over 15 years, we've been the trusted partner for premium air conditioning solutions. From residential comfort to industrial cooling, we deliver excellence.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= STATS STRIP ================= */}
      <div className="w-full bg-white border-b border-slate-200 relative z-20 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 pb-12 md:pb-16 pt-9 md:pt-13 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:divide-x divide-slate-100"
          >
            {[
              { value: 500, suffix: "+", label: "Happy Customers" },
              { value: 15, suffix: "+", label: "Years Experience" },
              { value: 1000, suffix: "+", label: "Projects Completed" },
              { value: 50, suffix: "+", label: "Cities Served" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="text-center px-4 group cursor-default"
              >
                <div className="text-4xl md:text-5xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300 mb-2 tracking-tight font-mono">
                  <CountUp 
                    start={0} 
                    end={stat.value} 
                    duration={2.5} 
                    separator="," 
                    suffix={stat.suffix}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ================= COMPANY OVERVIEW & FINANCIALS ================= */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
             style={{ 
               backgroundImage: 'linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(to right, #94a3b8 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
            >
              Our Story
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-lg text-slate-600 leading-relaxed"
            >
              Founded in 2009 by Rajesh Sharma, Sparsh Plywood & Laminates began as a small family business with a mission to provide reliable cooling solutions. Today, we have redefined the flow of cool air conditioning, transitioning from product sales to a complete solution provider.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Incorporated Card */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleUp}
              className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-xl flex flex-col items-start hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                  {companyStats[0].icon}
                </div>
                <span className="text-lg font-medium text-slate-600">{companyStats[0].title}</span>
              </div>
              <h3 className="text-5xl md:text-6xl font-bold text-blue-600 mb-4">{companyStats[0].value}</h3>
            </motion.div>

            {/* Turnover Card */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleUp}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-xl flex flex-col items-start hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                  {companyStats[1].icon}
                </div>
                <span className="text-lg font-medium text-slate-600">Turnovers:</span>
              </div>
              
              <div className="flex gap-2 mb-6 flex-wrap">
                {companyStats[1].badges?.map((badge, i) => (
                  <span key={i} className={`px-3 py-1 rounded-full text-xs font-semibold border ${i === 2 ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-500 border-slate-200'}`}>
                    {badge}
                  </span>
                ))}
              </div>

              <p className="text-sm text-slate-500 mb-1">Turnover for FY 2023-24</p>
              <h3 className="text-4xl md:text-5xl font-bold text-blue-600">{companyStats[1].value}</h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= EXPERTISE SECTION (Redesigned) ================= */}
      <section className="py-16 md:py-24 bg-white border-y border-slate-200 scroll-mt-20" id="expertise">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          
          <div className="text-center mb-16">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              Our HVAC Expertise
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              className="h-1 bg-blue-600 rounded-full mx-auto mb-6"
            ></motion.div>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-slate-500 text-lg max-w-2xl mx-auto"
            >
              We specialize in a diverse range of HVAC solutions, each designed to meet specific needs across multiple sectors.
            </motion.p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {expertiseData.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveExpertise(index)}
                className={`flex items-center px-6 py-4 rounded-lg border transition-all duration-300 ${
                  activeExpertise === index 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-105' 
                    : 'bg-white text-slate-600 border-slate-200 hover:border-blue-400 hover:text-blue-600'
                }`}
              >
                <div className={`p-2 rounded-full mr-3 ${activeExpertise === index ? 'bg-white/20' : 'bg-slate-100'}`}>
                  {React.cloneElement(item.icon, { className: `w-4 h-4 ${activeExpertise === index ? 'text-white' : 'text-slate-500'}` })}
                </div>
                <span className="text-sm font-bold text-left leading-tight">{item.title}</span>
              </button>
            ))}
          </div>

          {/* Dynamic Content Area */}
          <div className="bg-slate-50 rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExpertise}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col lg:flex-row"
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 h-[300px] lg:h-auto relative">
                  <img 
                    src={expertiseData[activeExpertise].image} 
                    alt={expertiseData[activeExpertise].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-transparent"></div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                      {expertiseData[activeExpertise].icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                      {expertiseData[activeExpertise].title}
                    </h3>
                  </div>
                  
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    {expertiseData[activeExpertise].description}
                  </p>

                  <div className="space-y-3">
                    {expertiseData[activeExpertise].points.map((point, i) => (
                      <div key={i} className="flex items-center text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                        <span className="font-medium">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* ================= CORE VALUES (Polished) ================= */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Our Core Values
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-slate-400 text-lg max-w-2xl mx-auto"
            >
              The principles that guide our decisions and define our culture.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-blue-500 hover:bg-slate-800 transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20"
              >
                <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300 shadow-inner">
                  {React.cloneElement(value.icon, { className: "w-7 h-7 text-white" })}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP TEAM ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              Leadership Team
            </motion.h2>
            <p className="text-slate-500 text-lg">The experts driving our vision forward.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={index} 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-72 overflow-hidden bg-slate-100 relative">
                  <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors z-10"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-3">{member.role}</p>
                  <p className="text-slate-500 text-sm italic mb-4">{member.experience}</p>
                  <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Mission */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex flex-col items-start bg-white p-10 rounded-2xl shadow-sm border border-slate-100 h-full hover:shadow-lg transition-all duration-300 hover:border-blue-200"
            >
              <div className="p-4 bg-blue-50 rounded-xl text-blue-600 mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To provide exceptional air conditioning solutions that enhance comfort, improve energy efficiency, and exceed customer expectations through innovative technology and professional service.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-start bg-white p-10 rounded-2xl shadow-sm border border-slate-100 h-full hover:shadow-lg transition-all duration-300 hover:border-purple-200"
            >
              <div className="p-4 bg-purple-50 rounded-xl text-purple-600 mb-6">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To be India's most trusted HVAC provider, setting industry standards for quality and sustainability while contributing to a more comfortable and energy-efficient future.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative py-24 overflow-hidden">
        {/* 1. Background Layers (Depth & Texture) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950"></div>

        {/* Subtle Engineering Grid Texture */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>

        {/* Accents: Balanced Light Sources */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        {/* 2. Content Container (Structure) */}
        <div className="container mx-auto px-6 text-center relative z-10">
          {/* Glass Card - Animates Scale Up */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleUp}
            className="max-w-3xl mx-auto bg-slate-800/30 border border-slate-700/50 p-10 md:p-12 rounded-lg backdrop-blur-sm shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Ready to Experience the Difference?
            </h2>

            <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              Join hundreds of satisfied customers who trust us for their cooling needs. Expert consultation is just a click away.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-5">
              {/* Primary Button */}
              <a
                href="tel:+917217251263"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-sm hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/30 hover:-translate-y-0.5"
              >
                <Phone className="mr-2 w-5 h-5" /> Call Now
              </a>

              {/* Secondary Button */}
              <a
                href="mailto:Sparshplywood@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-500 text-white font-bold rounded-sm hover:bg-slate-800 hover:border-slate-400 transition-all"
              >
                <Mail className="mr-2 w-5 h-5" /> Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;