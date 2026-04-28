import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1629909608185-42f4b7a74424?auto=format&fit=crop&q=80&w=2000" 
          alt="Premium Dental Clinic"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-midnight/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/20 via-transparent to-pearl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-6 py-1.5 mb-8 text-[12px] font-bold tracking-[0.3em] text-gold uppercase border-b border-gold">
            Expert Dental Care in Mysuru
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-navy leading-[1.05] mb-8 font-normal">
            Crafting Timeless <br />
            <span className="italic text-navy/90">Smiles with Precision</span>
          </h1>
          <p className="max-w-2xl mx-auto text-muted text-lg md:text-xl font-light mb-12 leading-relaxed">
            Experience world-class dental aesthetics at Dr. Ashwini's state-of-the-art clinic. 
            We combine luxury comfort with clinical excellence in the heart of Gokulam.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="#booking"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="cta-button shadow-lg shadow-navy/10"
            >
              Book Consultation
              <ArrowRight className="w-4 h-4 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#gallery"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-white border border-navy/10 text-navy font-semibold text-sm uppercase tracking-widest rounded-sm hover:border-gold hover:text-gold transition-all"
            >
              Smile Gallery
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="flex items-center gap-4 text-pearl/60 text-xs tracking-widest uppercase vertical-text">
          <span>Mysuru, India</span>
          <div className="w-px h-12 bg-gold/50" />
          <span>Est. 2024</span>
        </div>
      </div>
    </section>
  );
}
