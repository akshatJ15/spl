import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Users,
  Award,
  Clock,
  Phone,
  ShieldCheck,
  ChevronRight, // Added Quote based on your previous design, if needed, else it ignores it
} from "lucide-react";
import heroImage from "../Images/Innovation_Centre.jpg";
import Navbar from "../components/Navbar";
import CountUp from "react-countup";
import { motion } from "framer-motion"; // 1. Import Framer Motion

const Home = () => {
  // --- Animation Configurations (Variants) ---
  const fadeInDown = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  // --- Data ---
  const services = [
    {
      title: "Commercial HVAC Systems",
      desc: "End-to-end climate architecture for hotels, hospitals, and corporate parks. VRV/VRF specialization.",
      img: "https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Premium Residential Cooling",
      desc: "Aesthetic integration of split and central air conditioning for modern luxury homes.",
      img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "AMC & Preventive Care",
      desc: "Comprehensive annual maintenance contracts to ensure 99.9% uptime and efficiency.",
      img: "https://images.pexels.com/photos/8005394/pexels-photo-8005394.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const features = [
    {
      title: "Daikin Authorized Partner",
      desc: "We don't just buy parts; we are official channel partners. This guarantees genuine components and manufacturer-backed warranties.",
      icon: <Award className="w-6 h-6 text-white" />,
    },
    {
      title: "Certified Engineering Team",
      desc: "Our workforce consists of trained technicians, not freelance mechanics. Expert handling of complex ducting and VRV systems.",
      icon: <Users className="w-6 h-6 text-white" />,
    },
    {
      title: "60-Minute Response",
      desc: "Critical failures don't wait. Our rapid response fleet covers the entire city 24/7 for emergency breakdowns.",
      icon: <Clock className="w-6 h-6 text-white" />,
    },
    {
      title: "25 Years of Trust",
      desc: "A legacy built on over 1,000 successful projects. We are the preferred vendor for the region's top hospitality chains.",
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Homeowner, Civil Lines",
      text: "The installation team was incredibly neat. They covered our furniture, cleaned up the debris, and the cooling calibration is perfect.",
      rating: 5,
    },
    {
      name: "Amit Singh",
      role: "Facility Manager, Hotel Amar",
      text: "We rely on Sparsh Plywood & Laminates for our entire hotel chain. Their response time during the peak summer season is unmatched in Agra.",
      rating: 5,
    },
    {
      name: "Tech Park Solutions",
      role: "Operations Director",
      text: "Professional, cost-effective, and honest. They diagnosed and fixed an issue that another vendor claimed required a full unit replacement.",
      rating: 5,
    },
    {
      name: "Dr. Neha Gupta",
      role: "Director, City Care Hospital",
      text: "Maintaining specific temperatures in OT and ICU is critical. Their AMC service has ensured 100% uptime for our HVAC systems for 3 years running.",
      rating: 5,
    },
    {
      name: "Vikram Malhotra",
      role: "Architect, Design Studio",
      text: "I recommend them to all my luxury villa clients. Their knowledge of VRV systems and aesthetic ducting is superior to any local vendor.",
      rating: 5,
    },
    {
      name: "Suresh Patel",
      role: "Factory Owner, Industrial Zone",
      text: "They handled the ventilation for our textile unit perfectly. The energy efficiency of the new system has cut our power bills by 15%.",
      rating: 5,
    },
  ];

  return (
    <div className="font-sans text-slate-800 bg-white selection:bg-blue-600 selection:text-white overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full h-screen min-h-[600px] flex flex-col">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-900/30"></div>
        </div>

        <div className="relative z-20 w-full border-b border-white/10">
          <Navbar />
        </div>

        <div className="relative z-10 flex-grow flex items-center">
          <div className="container mx-auto px-4 sm:px-6 md:px-12">
            <div className="max-w-4xl space-y-6 md:space-y-8">
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-sm shadow-lg"
              >
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Authorized Daikin Partner
              </motion.div>

              {/* Animated Headline (Dropping down) */}
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeInDown}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight"
              >
                Engineering the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200">
                  Perfect Climate.
                </span>
              </motion.h1>

              {/* Animated Description (Rising up) */}
              <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-base sm:text-lg md:text-xl text-slate-300 max-w-xl md:max-w-2xl leading-relaxed border-l-4 border-blue-600 pl-4 md:pl-6"
              >
                From luxury residences to large-scale corporate infrastructure,
                we design and install cooling solutions that stand the test of
                time.
              </motion.p>

              {/* Animated Buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-6 w-full sm:w-auto"
              >
                <Link
                  to="/products"
                  className="group bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 font-semibold transition-all rounded-sm flex items-center justify-center sm:justify-start shadow-lg shadow-blue-900/50 text-sm md:text-base"
                >
                  Explore Products
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+919876543210"
                  className="bg-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-slate-900 px-6 md:px-8 py-3 md:py-4 font-semibold transition-all rounded-sm flex items-center justify-center sm:justify-start text-sm md:text-base"
                >
                  <Phone className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                  +91 987 654 3210
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= STATS BAR ================= */}
      <div className="w-full bg-white border-b border-slate-200 relative z-20 shadow-sm">
        <div className="container mx-auto px-6 py-12 md:py-16 relative z-10">
          {/* Staggered Container for Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:divide-x divide-slate-100"
          >
            {[
              { value: 25, suffix: "+", label: "Years Experience" },
              { value: 1000, suffix: "+", label: "Projects Delivered" },
              { value: 500, suffix: "+", label: "Active AMC Clients" },
              { value: 24, suffix: "/7", label: "Support Coverage" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp} // Each stat rises up
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

      {/* ================= FEATURES SECTION ================= */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#475569 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-4 md:mb-6">
                Engineering comfort, <br />
                <span className="text-blue-500">not just installing ACs.</span>
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                We don't just sell boxes; we design airflow. Whether it's
                calculating the precise heat load for a server room or ensuring
                a whisper-quiet environment for your home, our engineering-first
                approach sets us apart.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-slate-700 font-semibold rounded-full hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 group text-sm md:text-base"
              >
                Read our full story
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Staggered Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp} // Cards slide up
                className="bg-white p-6 md:p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 group flex items-start gap-4 md:gap-6"
              >
                <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 bg-slate-50 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  {React.cloneElement(feature.icon, {
                    className:
                      "w-6 h-6 md:w-8 md:h-8 text-blue-600 group-hover:text-white transition-colors duration-300",
                  })}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg md:text-xl mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-16 md:py-24 bg-slate-900 text-white relative">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Expertise
              </h2>
              <p className="text-slate-400 text-base md:text-lg">
                Comprehensive HVAC solutions tailored for the specific needs of
                Indian infrastructure.
              </p>
            </motion.div>
            <Link
              to="/services"
              className="hidden md:flex items-center px-6 py-3 border border-slate-700 rounded-sm hover:bg-white hover:text-slate-900 transition-all font-medium"
            >
              View All Services
            </Link>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={scaleUp} // Cards scale up gently
                className="group relative bg-slate-800 rounded-lg overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="h-56 md:h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/40 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 md:p-8 relative z-20 bg-slate-800 group-hover:bg-slate-800/90 transition-colors">
                  <div className="absolute -top-6 right-6 bg-blue-600 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-white shadow-lg">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8 md:hidden text-center">
            <Link
              to="/services"
              className="inline-block px-6 py-3 border border-slate-700 rounded-sm hover:bg-white hover:text-slate-900 transition-all font-medium text-sm"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS (AUTO-ROTATING CAROUSEL) ================= */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100 overflow-hidden">
        {/* CSS for infinite scroll animation */}
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            width: max-content;
            animation: scroll 40s linear infinite;
          }
          /* Pause animation on hover for user interaction */
          .testimonial-container:hover .animate-scroll {
            animation-play-state: paused;
          }
        `}</style>

        <div className="container-fluid mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 px-4"
          >
            <h2 className="text-3xl font-bold text-slate-900 mt-2">
              Testimonials
            </h2>
          </motion.div>

          {/* Carousel Container */}
          <div className="testimonial-container relative w-full overflow-hidden">
            {/* Gradient Masks for smooth fade effect on edges */}
            <div className="absolute inset-y-0 left-0 w-8 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-8 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            {/* The Moving Track (Duplicated Data for Seamless Loop) */}
            <div className="animate-scroll">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={i}
                  className="w-[300px] md:w-[400px] flex-shrink-0 mx-4"
                >
                  <div className="bg-slate-50 p-6 md:p-8 rounded-lg border border-slate-100 relative group hover:bg-white hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 text-slate-200 group-hover:text-blue-100 transition-colors">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="md:w-10 md:h-10"
                      >
                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                      </svg>
                    </div>

                    <div>
                      <div className="flex gap-1 mb-4 md:mb-6">
                        {[...Array(5)].map((_, n) => (
                          <Star
                            key={n}
                            className="w-4 h-4 text-yellow-500 fill-current"
                          />
                        ))}
                      </div>

                      <p className="text-slate-600 italic mb-6 md:mb-8 relative z-10 leading-relaxed text-sm md:text-base">
                        "{t.text}"
                      </p>
                    </div>

                    <div className="flex items-center gap-4 border-t border-slate-200 pt-6 mt-auto">
                      <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500 flex-shrink-0">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">
                          {t.name}
                        </div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide font-semibold">
                          {t.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
              "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
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
              Ready for a Professional Consultation?
            </h2>

            <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              Schedule a site visit today. Our engineers will provide a detailed
              technical assessment and a no-obligation quote tailored to your
              floor plan.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-5">
              {/* Primary Button */}
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-sm hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/30 hover:-translate-y-0.5"
              >
                <Phone className="mr-2 w-5 h-5" /> Call Now
              </a>

              {/* Secondary Button */}
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 border border-slate-500 text-white font-bold rounded-sm hover:bg-slate-800 hover:border-slate-400 transition-all"
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

export default Home;
