import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Ramesh Kumar",
    review: "Dr. Ashwini is very patient and explained the entire procedure clearly. The clinic is spotless and modern. Highly recommend for any dental work in Mysore.",
    rating: 4
  },
  {
    name: "Priyanka S.",
    review: "I was nervous about my root canal, but the experience was painless and professional. The staff is very courteous. Great follow-up care as well.",
    rating: 4
  },
  {
    name: "Amit V.",
    review: "Very clean environment and advanced equipment. Dr. Ashwini's expertise is evident in the quality of work. Very happy with my dental implants.",
    rating: 4
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-pearl relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.03] text-[20vw] font-serif select-none pointer-events-none -mt-20">
        Testimonials
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <div className="section-title-accent mb-8 inline-flex">Patient Experiences</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy leading-[1.1] font-normal">
              Trusted by Hundreds of <br />
              <span className="italic">Delighted Patients</span>
            </h2>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 fill-gold text-gold" />)}
            </div>
            <span className="text-[12px] font-bold text-navy tracking-[2px] uppercase">4.8 Rating on Google Maps</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-10 luxury-card flex flex-col items-start hover:shadow-xl hover:shadow-navy/5"
            >
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < t.rating ? 'fill-gold text-gold' : 'text-gold/20'}`} 
                  />
                ))}
              </div>
              <p className="text-navy/80 text-lg font-light leading-relaxed mb-10 italic flex-grow">
                "{t.review}"
              </p>
              <div className="flex items-center gap-4 border-t border-navy/5 pt-6 w-full">
                <div className="w-12 h-12 rounded-sm bg-navy/5 flex items-center justify-center font-bold text-navy text-sm border border-navy/10">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-navy text-sm uppercase tracking-widest">{t.name}</h4>
                  <p className="text-[10px] text-muted uppercase tracking-widest mt-1">Verified Patient</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
