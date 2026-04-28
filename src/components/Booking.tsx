import { motion } from 'motion/react';
import { MessageSquare, Calendar, User, ClipboardList, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    service: 'General Consultation'
  });

  const services = [
    'General Consultation',
    'Root Canal Treatment',
    'Teeth Whitening',
    'Smile Design / Veneers',
    'Dental Implants',
    'Braces & Aligners'
  ];

  const handleWhatsAppBooking = (e: FormEvent) => {
    e.preventDefault();
    const phoneNumber = "919000000000"; // Placeholder for Dr Ashwini's number
    const message = `Hi Smile Zone, I would like to book a dental appointment for ${formData.name} on ${formData.date} for ${formData.service}.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="booking" className="py-24 bg-pearl relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-3">
            <div className="section-title-accent mb-8 inline-flex">Instant Booking</div>
            <h2 className="text-4xl md:text-6xl font-serif text-navy leading-tight mb-8 font-normal">
              Begin Your Journey to <br />
              <span className="italic">A Better Smile</span>
            </h2>
            <p className="text-muted text-xl mb-12 font-light leading-relaxed">
              Experience the pinnacle of Mysore's dental care. Reserve your slot and confirm directly via WhatsApp for seamless coordination.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-sm bg-navy text-white flex items-center justify-center shrink-0 transition-transform group-hover:rotate-12">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-sm uppercase tracking-widest mb-2">Flexible Timings</h4>
                  <p className="text-sm text-muted leading-relaxed">Monday - Saturday: 10:00 AM - 8:00 PM <br />Sundays by Appointment only.</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-sm bg-gold text-white flex items-center justify-center shrink-0 transition-transform group-hover:-rotate-12">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-sm uppercase tracking-widest mb-2">Priority Support</h4>
                  <p className="text-sm text-muted leading-relaxed">Direct line to Dr. Ashwini for elite patient care and coordination via our secure WhatsApp portal.</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 p-10 luxury-card bg-white relative"
          >
            <div className="section-title-accent mb-10 text-[11px]">Appointment Details</div>
            
            <form onSubmit={handleWhatsAppBooking} className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[3px] text-muted font-bold block">
                  Patient Full Name
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="Enter your name"
                  className="w-full border-b border-navy/10 py-3 focus:border-gold outline-none transition-colors font-serif text-lg bg-transparent"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[3px] text-muted font-bold block">
                  Preferred Date
                </label>
                <input 
                  type="date" 
                  required
                  className="w-full border-b border-navy/10 py-3 focus:border-gold outline-none transition-colors font-serif text-lg bg-transparent"
                  value={formData.date}
                  onChange={e => setFormData({...formData, date: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[3px] text-muted font-bold block">
                  Requested Treatment
                </label>
                <select 
                  className="w-full border-b border-navy/10 py-3 focus:border-gold outline-none transition-colors font-serif text-lg bg-transparent appearance-none"
                  value={formData.service}
                  onChange={e => setFormData({...formData, service: e.target.value})}
                >
                  {services.map(s => <option key={s} value={s} className="bg-white text-navy">{s}</option>)}
                </select>
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-[#25D366] text-white font-bold rounded-sm flex items-center justify-center gap-3 hover:opacity-90 transition-all uppercase tracking-widest text-[12px] shadow-lg shadow-green-500/10 active:scale-[0.98]"
              >
                Confirm via WhatsApp <Send size={16} />
              </button>
              
              <div className="flex items-center justify-center gap-2 pt-4">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[9px] uppercase tracking-[3px] text-muted">Awaiting your response</span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
