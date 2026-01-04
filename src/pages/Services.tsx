import {
  CheckCircle2,
  ShieldCheck,
  Wrench,
  Thermometer,
  Phone,
  Clock,
  Calendar,
  AlertTriangle,
  Settings,
} from "lucide-react";
import Navbar from "../components/Navbar";
import { motion, Variants, AnimatePresence } from "framer-motion";

const heroImage = "https://images.pexels.com/photos/8005394/pexels-photo-8005394.jpeg?auto=compress&cs=tinysrgb&w=1600";

const Services = () => {
  // --- Animation Variants ---
  const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const scaleUp: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const services = [
    {
      icon: <Wrench className="w-6 h-6 text-white" />,
      title: "Precision Installation",
      subtitle: "Residential & Commercial",
      description:
        "Installation isn't just mounting a unit; it's about airflow dynamics. We ensure zero-leakage piping and optimal placement for maximum efficiency.",
      scope: [
        "Site thermal assessment & load calculation",
        "Drilling with dust-mitigation protocols",
        "Nitrogen pressure testing for leaks",
        "Vacuumizing lines (Essential for R32/R410A)",
      ],
      image:
        "https://images.pexels.com/photos/8005394/pexels-photo-8005394.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "Repair & Optimization",
      subtitle: "Diagnostics & Fixes",
      description:
        "From PCB failures to compressor issues, our engineers diagnose the root cause rather than offering temporary patches.",
      scope: [
        "Advanced error code diagnostics",
        "PCB circuit repair & testing",
        "Capacitor & sensor replacement",
        "Coil replacement with anti-corrosion coating",
      ],
      image:
        "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      icon: <Thermometer className="w-6 h-6 text-white" />,
      title: "Jet-Pump Servicing",
      subtitle: "Deep Cleaning",
      description:
        "We use high-pressure jet pumps to clean condenser and evaporator coils, restoring your machine's heat exchange capacity to factory standards.",
      scope: [
        "Jacket-covered indoor unit washing (No mess)",
        "High-pressure outdoor unit cleaning",
        "Drain tray and pipe descaling",
        "Electrical connection tightening",
      ],
      image:
        "https://images.pexels.com/photos/5835595/pexels-photo-5835595.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  // const maintenancePlans = [
  //   {
  //     name: "Standard AMC",
  //     target: "For Residential Splits",
  //     price: "₹2,999",
  //     period: "/ unit / year",
  //     features: [
  //       "2 Wet Services (Jet Pump)",
  //       "1 Dry Service",
  //       "Unlimited Breakdown Support",
  //       "No visiting charges",
  //       "Priority 24hr Response"
  //     ],
  //     highlight: false
  //   },
  //   {
  //     name: "Comprehensive AMC",
  //     target: "Total Coverage",
  //     price: "₹4,999",
  //     period: "/ unit / year",
  //     features: [
  //       "All Standard AMC features",
  //       "Free Gas Charging (if required)",
  //       "Free Compressor Replacement",
  //       "Free PCB Repair/Replacement",
  //       "Zero Spare Part Costs"
  //     ],
  //     highlight: true
  //   },
  //   {
  //     name: "Commercial SLA",
  //     target: "Offices & VRV Systems",
  //     price: "Custom",
  //     period: "based on tonnage",
  //     features: [
  //       "Dedicated Site Engineer",
  //       "Monthly Filter Cleaning",
  //       "Quarterly Deep Servicing",
  //       "Energy Efficiency Audit",
  //       "2-Hour Emergency Response"
  //     ],
  //     highlight: false
  //   }
  // ];

  const processSteps = [
    {
      step: "01",
      title: "Site Feasibility",
      description:
        "We visit, measure heat load, check power phases, and plan the ducting/piping route.",
    },
    {
      step: "02",
      title: "Material Staging",
      description:
        "All copper pipes, insulation, and wiring are staged and checked for quality (gauge and grade).",
    },
    {
      step: "03",
      title: "Execution Phase",
      description:
        "Certified technicians perform the installation following our 25-point checklist for safety and aesthetics.",
    },
    {
      step: "04",
      title: "Commissioning",
      description:
        "We run the system for 45 mins, check grill temperature, amperage, and gas pressures before handing over.",
    },
  ];

  return (
    <div className="font-sans text-slate-800 bg-white selection:bg-blue-600 selection:text-white">
      {/* ================= HERO SECTION (Navbar Inside) ================= */}
      <div className="relative w-full h-screen min-h-[600px] flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={heroImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-900/30"></div>
          </motion.div>
        </AnimatePresence>

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
                <Settings className="w-4 h-4 text-green-400" />
                Service Vertical
              </motion.div>

              {/* Title Drop Down */}
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeInDown}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Operational <br />
                <span className="text-blue-400">Excellence.</span>
              </motion.h1>

              {/* Description Fade Up */}
              <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed border-l-4 border-blue-600 pl-4 md:pl-6"
              >
                From critical server room cooling to residential comfort, our
                service protocols are defined by speed, precision, and technical
                integrity.
              </motion.p>

              {/* Buttons Fade Up */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto"
              >
                <a
                  href="tel:+919876543210"
                  className="bg-white text-slate-900 hover:bg-slate-100 border border-transparent px-8 py-3.5 font-bold transition-all rounded-sm flex items-center justify-center sm:justify-start w-full sm:w-auto"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Book Routine Service
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SERVICES LIST ================= */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#94a3b8 1.3px, transparent 1px), linear-gradient(to right, #94a3b8 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        {/* Background Decor */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[10%] right-[5%] w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[10%] left-[5%] w-72 h-72 bg-purple-100/50 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-24">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
            >
              Core Competencies
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 96 }} // 24 * 4 = 96px
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-1.5 bg-blue-600 rounded-full mx-auto mb-6"
            ></motion.div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            >
              We separate ourselves from the competition through our rigorous
              "Scope of Work" protocols and engineering precision.
            </motion.p>
          </div>

          {/* Content Blocks */}
          <div className="space-y-20 md:space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* === IMAGE SIDE (60%) === */}
                <div className="w-full lg:w-[60%] relative">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="relative rounded-1xl overflow-hidden shadow-2xl z-10 h-[300px] md:h-[400px] lg:h-[500px] w-full bg-white group"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                    {/* Glass Badge */}
                    <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto bg-white/90 backdrop-blur-md px-4 py-3 md:px-6 md:py-3 rounded-lg shadow-lg border-l-4 border-blue-600">
                      <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        {service.subtitle}
                      </p>
                      <p className="text-base md:text-lg font-bold text-slate-900 leading-none">
                        {service.title}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* === TEXT SIDE (40%) === */}
                <div className="w-full lg:w-[40%]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20 shrink-0">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Scope of Work - Modern Cards */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 ml-1">
                      Scope of Work
                    </h4>
                    {service.scope.map((item, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ x: 5 }}
                        className="flex items-center p-3 bg-white rounded-lg border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300"
                      >
                        <div className="flex-shrink-0 mr-4">
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        </div>
                        <span className="text-slate-700 font-medium text-sm">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICE PROTOCOL (Steps) ================= */}
      <section className="bg-slate-50 py-16 md:py-24 border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="text-center mb-12 md:mb-16">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              Our Service Protocol
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-slate-500 text-base md:text-lg"
            >
              Standard Operating Procedures (SOPs) for consistent quality.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }} // Staggered delay
                className="relative group isolate"
              >
                <div className="text-5xl md:text-6xl font-black text-slate-200 absolute -top-8 -left-4 z-20 group-hover:z-20 group-hover:text-blue-400 transition-all duration-300">
                  {step.step}
                </div>
                <div className="relative z-10 bg-white p-6 md:p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-600 transition-all duration-300 h-full">
                  <h3 className="text-lg md:text-xl font-bold text-blue-600 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= AMC PLANS ================= */}
      {/* <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Annual Maintenance Contracts</h2>
            <p className="text-slate-500 text-lg">Protect your investment with our SLA-backed maintenance plans.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {maintenancePlans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative p-8 rounded-lg border transition-all duration-300 ${
                  plan.highlight 
                    ? 'bg-slate-900 text-white border-slate-900 shadow-2xl scale-105 z-10' 
                    : 'bg-white text-slate-800 border-slate-200 hover:border-blue-300 hover:shadow-lg'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 uppercase tracking-widest rounded-full shadow-lg">
                    Recommended
                  </div>
                )}
                
                <div className="mb-8 border-b border-opacity-20 border-current pb-8">
                  <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                  <p className={`text-sm mb-4 ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{plan.target}</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                    <span className={`ml-2 text-sm ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${plan.highlight ? 'text-blue-400' : 'text-blue-600'}`} />
                      <span className={`text-sm font-medium ${plan.highlight ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-sm font-bold text-sm transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/50'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                }`}>
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ================= EMERGENCY BREAKDOWN (Clean & Professional) ================= */}
      <section className="bg-slate-50 py-12 md:py-16 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          {/* Clean, Professional Card. 
              No dark modes, no pulsing lights. 
              Just clear, urgent information. 
          */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleUp}
            className="bg-white rounded-lg border-l-4 border-red-600 shadow-md p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            {/* Left Info */}
            <div className="flex flex-col md:flex-row items-start gap-6 w-full lg:w-auto">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-red-600 shrink-0 mx-auto md:mx-0">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <div className="space-y-2 text-center md:text-left w-full">
                <h2 className="text-2xl font-bold text-slate-900">
                  Critical System Failure?
                </h2>
                <p className="text-slate-600 max-w-xl mx-auto md:mx-0">
                  Our emergency response team is on standby 24/7 with universal
                  spares to minimize downtime.
                  <span className="font-semibold text-slate-800">
                    {" "}
                    Priority scheduling for contract customers.
                  </span>
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
                  <span className="inline-flex items-center text-sm font-semibold text-slate-500">
                    <Clock className="w-4 h-4 mr-2 text-green-600" /> Avg
                    Response: 45 Mins
                  </span>
                  <span className="inline-flex items-center text-sm font-semibold text-slate-500">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-green-600" />{" "}
                    24/7 Availability
                  </span>
                </div>
              </div>
            </div>

            {/* Right Action */}
            <div className="w-full lg:w-auto shrink-0 text-center lg:text-right">
              <a
                href="tel:+917217251263"
                className="group flex items-center justify-center w-full lg:w-auto gap-3 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-sm shadow-md transition-all shadow-red-100"
              >
                <Phone className="w-5 h-5 group-hover:animate-pulse" />
                <span>Call Emergency Support</span>
              </a>
              <p className="text-xs text-slate-400 mt-3 font-medium">
                Direct line to Service Manager
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}

      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* 1. Background Layers */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=1600)",
            }}
          />
          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-900 via-slate-900/90 to-slate-950"></div>
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
          <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600/25 rounded-full blur-[80px] md:blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-cyan-500/15 rounded-full blur-[60px] md:blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
        </div>

        {/* 2. Content Container */}
        <div className="container mx-auto px-4 sm:px-6 md:px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleUp}
            className="max-w-3xl mx-auto bg-slate-800/30 border border-slate-700/50 p-8 md:p-12 rounded-lg backdrop-blur-sm shadow-2xl"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Schedule Your Service Visit
            </h2>
            <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Experience the difference of professional, protocol-driven HVAC
              care.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              {/* Primary Button (Phone Link Added) */}
              <a
                href="tel:+917217251263"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-sm hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/30 hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <Phone className="mr-2 w-5 h-5" /> Book Apponitment
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
