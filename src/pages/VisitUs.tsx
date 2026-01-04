import { 
  MapPin, 
  Navigation,
  ArrowRight,
  Clock,
  Phone,
  Mail
} from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar'; // Importing your existing Navbar

// --- Assets ---
const heroImage = "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600";
const textureSideImage = "https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg?auto=compress&cs=tinysrgb&w=1600"; 

// --- Animations ---
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const VisitUs = () => {
  
  // Real Google Maps Query Links
  const linkFreeganj = "https://www.google.com/maps/search/?api=1&query=1-21/54+Freeganj,+Agra";
  const linkKargil = "https://www.google.com/maps/search/?api=1&query=Kargil+near+Pushpanjali+extension,+Agra";

  return (
    <div className="min-h-screen bg-white font-sans text-stone-800 selection:bg-amber-500 selection:text-white">
      
      {/* Your Existing Navbar */}
      <Navbar />

      {/* ================= PARALLAX HERO SECTION ================= */}
      {/* bg-fixed keeps the image static while you scroll over it */}
      <div 
        className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-stone-950/40"></div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative z-10 text-center px-4"
        >
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-white mb-6 backdrop-blur-sm">
            Retail Experience
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white font-serif tracking-tight drop-shadow-2xl">
            Visit Our Studios
          </h1>
        </motion.div>
      </div>

      {/* ================= NARRATIVE SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* --- LEFT: The Narrative (Text) --- */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeLeft}
              className="lg:w-1/2 space-y-8"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-stone-900 font-serif leading-[1.2]">
                "Looks like you’re actually serious about building a good space."
              </h2>
              
              <div className="h-1 w-20 bg-amber-500"></div>

              <div className="space-y-6 text-lg text-stone-600 font-light leading-relaxed">
                <p>
                  And you just took the second step to make it real. You’ve done the research. You’ve checked out the materials.
                </p>
                <p className="text-stone-900 font-medium text-xl border-l-4 border-amber-500 pl-4">
                  Now it’s time to feel them in person.
                </p>
                <p>
                  Compare options side-by-side and get expert advice from our in-store team. Whether you're renovating, building from scratch, or just levelling up your current setup—we've got the touch-and-feel experience that online shopping can't match.
                </p>
              </div>

              {/* Direct Contacts embedded in narrative */}
              <div className="pt-6 flex flex-col sm:flex-row gap-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-stone-100 rounded-full text-amber-600">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-stone-400">Call Us</p>
                    <a href="tel:+917217251263" className="font-semibold hover:text-amber-600 transition">+91 721 725 1263</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-stone-100 rounded-full text-amber-600">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-stone-400">Email Us</p>
                    <a href="mailto:Sparshplywood@gmail.com" className="font-semibold hover:text-amber-600 transition">Sparshplywood@gmail.com</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* --- RIGHT: Visual (Image) --- */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeRight}
              className="lg:w-1/2 w-full"
            >
              <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-sm bg-stone-100 shadow-2xl group">
                <img 
                  src={textureSideImage} 
                  alt="Texture Close up" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-6 max-w-xs shadow-lg border-l-4 border-amber-500 hidden md:block">
                  <p className="text-sm font-serif italic text-stone-800">
                    "The difference between good and great is usually in the details you can only see up close."
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= LOCATIONS GRID ================= */}
      <section className="py-24 bg-stone-50 relative border-t border-stone-200">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-center mb-16">
            <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Our Presence</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mt-3">Find Your Nearest Branch</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* --- Branch 1 --- */}
            <LocationCard 
              title="Main Showroom"
              sub="Freeganj"
              address="1- 21/54 Freeganj, Agra."
              mapLink={linkFreeganj}
            />

            {/* --- Branch 2 --- */}
            <LocationCard 
              title="Experience Center"
              sub="Kargil / Pushpanjali"
              address="2- Kargil, near Pushpanjali extension, Agra."
              mapLink={linkKargil}
            />

          </div>
        </div>
      </section>

      

    </div>
  );
};

// --- Sub-Component: Location Card ---
const LocationCard = ({ title, sub, address, mapLink }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-xl shadow-lg border border-stone-100 hover:shadow-2xl transition-all duration-300 group"
  >
    <div className="flex justify-between items-start mb-6">
      <div>
        <h3 className="text-xl font-bold text-stone-900">{title}</h3>
        <p className="text-amber-600 text-xs font-bold uppercase tracking-widest mt-1">{sub}</p>
      </div>
      <div className="p-3 bg-amber-50 rounded-full text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
        <MapPin className="w-6 h-6" />
      </div>
    </div>

    <div className="flex items-start gap-3 mb-6 min-h-[60px]">
      <Navigation className="w-5 h-5 text-stone-400 mt-1 shrink-0" />
      <p className="text-stone-600 leading-relaxed font-light">{address}</p>
    </div>

    <div className="flex items-center gap-3 mb-8 text-sm text-stone-500">
        <Clock className="w-4 h-4" />
        <span>Open: 10:00 AM - 8:00 PM</span>
    </div>

    <a 
      href={mapLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 w-full py-4 bg-stone-900 text-white font-bold text-sm rounded-lg hover:bg-amber-600 transition-colors"
    >
      Open in Google Maps <ArrowRight className="w-4 h-4" />
    </a>
  </motion.div>
);

export default VisitUs;