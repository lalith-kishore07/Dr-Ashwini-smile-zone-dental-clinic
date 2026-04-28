import { motion } from 'motion/react';
import { useState } from 'react';

const cases = [
  { 
    id: 1, 
    title: 'Invisalign Treatment', 
    desc: 'Clear Aligner Straightening', 
    before: 'https://images.unsplash.com/photo-1590159424754-046645391e63?auto=format&fit=crop&q=80&w=800', 
    after: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 2, 
    title: 'Aesthetic Smile Design', 
    desc: 'Bespoke Veneer Transformation', 
    before: 'https://images.unsplash.com/photo-1560361223-5003666fabb3?auto=format&fit=crop&q=80&w=800', 
    after: 'https://images.unsplash.com/photo-1445510491599-c391e8046a68?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 3, 
    title: 'Teeth Whitening', 
    desc: 'Professional Laser Brightening', 
    before: 'https://images.unsplash.com/photo-1473215206977-849924403061?auto=format&fit=crop&q=80&w=800', 
    after: 'https://images.unsplash.com/photo-1606811841660-1b51e9fd27ff?auto=format&fit=crop&q=80&w=800' 
  },
];

export default function Gallery() {
  const [hoveredCase, setHoveredCase] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-navy text-pearl overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="section-title-accent inline-flex mb-8"
          >
            Smile Gallery
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif mb-8 text-pearl font-normal"
          >
            Aesthetic <span className="italic text-gold">Transformations</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-pearl/50 text-lg font-light leading-relaxed"
          >
            Discover the artistry and precision behind every successful treatment at Smile Zone.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cases.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredCase(c.id)}
              onMouseLeave={() => setHoveredCase(null)}
              className="relative group rounded-lg overflow-hidden aspect-[4/5] bg-pearl/5 border border-white/5"
            >
              {/* Before Overlay */}
              <img 
                src={c.before} 
                alt={`${c.title} Before`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${hoveredCase === c.id ? 'opacity-0' : 'opacity-100'}`}
                referrerPolicy="no-referrer"
              />
              
              {/* After Image */}
              <img 
                src={c.after} 
                alt={`${c.title} After`}
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <div className="text-center p-8">
                  <span className="text-[10px] tracking-[4px] text-gold uppercase font-bold mb-4 block">After Treatment</span>
                  <button className="px-6 py-2 border border-gold text-gold text-[11px] uppercase tracking-widest font-bold rounded-sm">View Analysis</button>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-navy/90 to-transparent">
                <h3 className="text-xl font-serif mb-1">{c.title}</h3>
                <p className="text-sm text-pearl/40 uppercase tracking-widest text-[10px]">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-16 border border-gold/20 rounded-lg text-center bg-white/5 backdrop-blur-sm shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
          <h3 className="text-3xl font-serif mb-6 italic text-gold font-normal">Your transformation begins with a consultation.</h3>
          <p className="text-pearl/50 mb-10 max-w-xl mx-auto text-lg leading-relaxed">Join hundreds of patients who redefined their confidence at Mysuru's premier aesthetic clinic.</p>
          <a 
            href="#booking" 
            className="inline-block px-12 py-4 bg-pearl text-navy font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-gold transition-colors"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}
