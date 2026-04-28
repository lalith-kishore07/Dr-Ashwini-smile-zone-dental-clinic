import { motion } from 'motion/react';
import { Shield, Sparkles, Clock, Heart } from 'lucide-react';

export default function About() {
  const features = [
    { icon: <Shield className="w-5 h-5" />, title: "Sterilized Environment", desc: "Highest hygiene standards" },
    { icon: <Sparkles className="w-5 h-5" />, title: "Advanced Technology", desc: "State-of-the-art equipment" },
    { icon: <Clock className="w-5 h-5" />, title: "Time Efficient", desc: "Minimal waiting time" },
    { icon: <Heart className="w-5 h-5" />, title: "Patient Care", desc: "Personalized treatment plans" },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-row-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1594824812397-23700b284752?auto=format&fit=crop&q=80&w=1200" 
                alt="Dr. Ashwini"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-champagne/30 rounded-full blur-3xl z-0" />
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-gold/10 rounded-full blur-2xl z-0" />
            
            <div className="absolute bottom-8 left-8 right-8 p-6 glass-card rounded-2xl z-20">
              <h3 className="text-xl font-serif text-midnight mb-1">Dr. Ashwini</h3>
              <p className="text-sm text-charcoal font-medium">BDS, MDS - Clinic Director</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-title-accent mb-6">About Dr. Ashwini</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-navy leading-tight mb-10 font-normal">
              Excellence in Dentistry, <br />
              <span className="italic">Delivered with Compassion</span>
            </h2>
            <p className="text-muted text-lg mb-10 leading-relaxed max-w-xl">
              Located in the heart of Gokulam, Smile Zone is Dr. Ashwini's vision of bringing premium dental healthcare to Mysuru. Our mission is to combine state-of-the-art technology with a personal touch, ensuring that every patient leaves with a confident, radiant smile.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-12">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center text-gold shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm uppercase tracking-wider mb-1">{f.title}</h4>
                    <p className="text-xs text-muted leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-10 border border-gold/10 bg-pearl rounded-lg relative">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Heart className="w-16 h-16 text-navy" />
              </div>
              <p className="text-xl italic text-navy font-serif leading-relaxed">
                "We don't just treat teeth; we treat people. Every smile we craft is a testament to our commitment to clinical excellence."
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-[2px] w-12 bg-gold" />
                <span className="text-[11px] uppercase tracking-[3px] font-black text-navy">Dr. Ashwini</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
