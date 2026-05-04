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
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Professional Cleanings",
    desc: "Scale and polish treatments that remove stubborn plaque and tartar, leaving your teeth smooth and your breath fresh.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Teeth Whitening",
    desc: "Safe, professional-grade whitening techniques that effectively lift deep stains to reveal a significantly brighter, more radiant smile.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Porcelain Veneers",
    desc: "Ultra-thin, custom-crafted shells that mask imperfections like chips or gaps, delivering a flawless and natural-looking aesthetic.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Root Canal Therapy",
    desc: "Advanced endodontic procedures performed with precision to save infected teeth, eliminate pain, and restore structural integrity.",
  },
  {
    icon: <Smile className="w-6 h-6" />,
    title: "Dental Implants",
    desc: "The gold standard for tooth replacement—permanent, secure foundations that look, feel, and function exactly like natural teeth.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Orthodontics",
    desc: "Modern alignment solutions, including clear aligners, designed to straighten your teeth discreetly and comfortably.",
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
              <div className="p-10">
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
        </div>
      </div>
    </section>
  );
}
