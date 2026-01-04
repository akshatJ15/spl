import { useState, useEffect } from "react";
import { MapPin, Phone, FileText, Folder } from "lucide-react";
import Navbar from "../components/Navbar";
import { motion, Variants, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { categories, projects } from "../constants/projects";
import { Building2 } from "lucide-react";

const heroImage = "https://images.pexels.com/photos/257704/pexels-photo-257704.jpeg?auto=compress&cs=tinysrgb&w=1600";

const Projects = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("all");

  // --- Animation Variants ---
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="font-sans text-slate-800 bg-white selection:bg-blue-600 selection:text-white">
      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full h-[80vh] md:h-600px min-h-[500px] flex flex-col">
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
                <Folder className="w-4 h-4 text-green-400" />
                Project Portfolio
              </motion.div>

              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeInDown}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Built to Last. <br />
                <span className="text-blue-400">
                  Engineered for Efficiency.
                </span>
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed border-l-4 border-blue-600 pl-4 md:pl-6"
              >
                Explore our successful HVAC installations across residential,
                commercial, and industrial sectors. Proven expertise in complex
                climate challenges.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= STATS STRIP ================= */}
      <div className="w-full bg-white border-b border-slate-200 relative z-20 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 pb-12 md:pb-16 pt-9 md:pt-13 relative z-10">
          {/* Staggered Container for Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:divide-x divide-slate-100"
          >
            {[
              { value: 500, suffix: "+", label: "Projects Delivered" },
              { value: 15, suffix: "+", label: "Years Excellence" },
              { value: 50, suffix: "+", label: "Cities Covered" },
              { value: 100, suffix: "%", label: "Satisfaction" },
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

      <div className="font-sans text-slate-800 bg-slate-50 min-h-screen">
        {/* ================= HEADING SECTION ================= */}
        <section className="pt-24 pb-12 bg-white relative overflow-hidden">
          {/* Technical Grid Background */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(to right, #94a3b8 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>

          <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInDown}
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
            >
              Our Projects
            </motion.h1>
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
              className="text-slate-500 text-lg max-w-3xl mx-auto leading-relaxed"
            >
              With a proven track record of successful implementations across
              various sectors, our diverse portfolio showcases our adaptability
              and technical prowess.
            </motion.p>
          </div>
        </section>

        {/* ================= FILTER BAR (Centered Wrap Design) ================= */}
        <section className="bg-white sticky top-0 z-40 border-y border-slate-200 shadow-sm backdrop-blur-md bg-opacity-90">
          <div className="container mx-auto px-4 md:px-12 py-6">
            {/* Flex Wrap Layout */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                    selectedCategory === category.id
                      ? "bg-slate-900 text-white border-slate-900 shadow-lg transform scale-105"
                      : "bg-white text-slate-600 border-slate-200 hover:border-blue-400 hover:text-blue-600 hover:bg-white hover:shadow-sm"
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROJECT GRID ================= */}
        <section className="py-16 px-4 sm:px-6 md:px-12 relative overflow-hidden">
          {/* Technical Grid Background */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(to right, #94a3b8 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>

          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-200 group hover:shadow-xl transition-all duration-300"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-64 w-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                        {
                          categories.find((c) => c.id === project.category)
                            ?.name
                        }
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Footer Info */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex flex-col space-y-1.5">
                        <div className="flex items-center text-xs text-slate-500 font-medium">
                          <Building2 className="w-3.5 h-3.5 mr-1.5 text-slate-400" />
                          {project.client}
                        </div>
                        <div className="flex items-center text-xs text-slate-500 font-medium">
                          <MapPin className="w-3.5 h-3.5 mr-1.5 text-slate-400" />
                          {project.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ================= UPGRADED CTA SECTION ================= */}
      <section className="relative py-16 md:py-24 bg-slate-900 overflow-hidden border-t border-slate-800">
        {/* Background "Blueprint" Grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-blue-900/50 border border-blue-500/30 rounded-full"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-blue-300 text-xs font-bold uppercase tracking-widest">
              Accepting New Commercial Projects
            </span>
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight"
          >
            Ready to Start Your Project?
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-slate-400 mb-10 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-medium"
          >
            Let's discuss your HVAC requirements. Our engineering team will
            analyze your floor plan and provide a comprehensive cooling
            strategy.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="tel:+919876543210"
              className="group bg-white text-slate-900 hover:bg-blue-50 px-8 py-4 font-semibold tracking-wide rounded-sm shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all flex items-center justify-center min-w-[200px]"
            >
              <Phone className="mr-2 w-5 h-5 text-blue-600" />
              Book Consultation
            </a>
            <button className="group border border-slate-600 text-white hover:bg-slate-800 hover:border-slate-500 px-8 py-4 font-semibold tracking-wide rounded-sm transition-all flex items-center justify-center min-w-[200px]">
              <FileText className="mr-2 w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
              Request Portfolio
            </button>
          </motion.div>

          <p className="mt-8 text-xs text-slate-500 uppercase tracking-[0.2em] font-medium">
            Licensed • Insured • Certified
          </p>
        </div>
      </section>
    </div>
  );
};

export default Projects;
