import { motion } from 'motion/react';
import { 
  Stethoscope, 
  Sparkles, 
  Zap, 
  Layers, 
  Activity, 
  Target, 
  Smile 
} from 'lucide-react';

const services = [
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: "Routine Check-ups",
    desc: "Comprehensive oral examinations using advanced diagnostics to detect early signs of decay or gum issues, ensuring long-term health.",
    image: "https://images.unsplash.com/photo-1629453434629-9e8d120a1740?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Professional Cleanings",
    desc: "Scale and polish treatments that remove stubborn plaque and tartar, leaving your teeth smooth and your breath fresh.",
    image: "https://images.unsplash.com/photo-1590159424754-046645391e63?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Teeth Whitening",
    desc: "Safe, professional-grade whitening techniques that effectively lift deep stains to reveal a significantly brighter, more radiant smile.",
    image: "https://images.unsplash.com/photo-1473215206977-849924403061?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Porcelain Veneers",
    desc: "Ultra-thin, custom-crafted shells that mask imperfections like chips or gaps, delivering a flawless and natural-looking aesthetic.",
    image: "https://images.unsplash.com/photo-1606811841660-1b51e9fd27ff?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Root Canal Therapy",
    desc: "Advanced endodontic procedures performed with precision to save infected teeth, eliminate pain, and restore structural integrity.",
    image: "https://images.unsplash.com/photo-1629909608185-42f4b7a74424?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <Smile className="w-6 h-6" />,
    title: "Dental Implants",
    desc: "The gold standard for tooth replacement—permanent, secure foundations that look, feel, and function exactly like natural teeth.",
    image: "https://images.unsplash.com/photo-1558223181-514de073fed1?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Orthodontics",
    desc: "Modern alignment solutions, including clear aligners, designed to straighten your teeth discreetly and comfortably.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-pearl relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between mb-20 gap-12">
          <div className="max-w-2xl">
            <div className="section-title-accent mb-8 inline-flex">Clinical Excellence</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy leading-tight font-normal">
              Specialized Care for <br />
              <span className="italic">Every Dental Need</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted text-sm leading-relaxed mt-4">
            We provide a comprehensive range of dental solutions, combining luxury comfort with the latest medical advancements to ensure a world-class experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="luxury-card bg-white hover:border-gold/30 hover:shadow-xl hover:shadow-navy/5 group cursor-default overflow-hidden"
            >
              <div className="h-44 w-full overflow-hidden">
                <img 
                  src={(s as any).image} 
                  alt={s.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 rounded-sm bg-navy/5 flex items-center justify-center text-gold mb-6 transition-colors group-hover:bg-navy group-hover:text-white">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-navy uppercase tracking-widest mb-4 font-sans">
                  {s.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed font-light">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Membership / Priority Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="p-8 luxury-card bg-navy flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-serif text-gold mb-2 font-normal italic">Bespoke Treatment</h3>
              <p className="text-pearl/50 text-xs uppercase tracking-widest leading-loose">
                Every smile is unique. We offer curated plans tailored to your lifestyle and goals.
              </p>
            </div>
            <a href="#booking" className="text-gold text-[11px] font-black uppercase tracking-[3px] flex items-center gap-2 mt-8 hover:translate-x-1 transition-transform">
              Book Analysis →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
