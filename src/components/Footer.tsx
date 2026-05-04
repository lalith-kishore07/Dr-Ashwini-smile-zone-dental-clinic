import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Facebook, Calendar } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-pearl pt-24 pb-12 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-8">
              <span className="font-serif text-3xl font-bold tracking-tighter text-pearl">SMILE <span className="text-gold">ZONE</span></span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted mt-1">Dr. Ashwini's Dental Clinic</span>
            </div>
            <p className="text-pearl/40 text-sm leading-relaxed mb-8 font-light">
              Redefining Mysore's dental landscape through a unique blend of luxury, technology, and clinical excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-sm border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gold font-serif text-lg mb-8 uppercase tracking-[3px] font-bold text-sm">Visit Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4 text-pearl/40 group">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-1 group-hover:scale-110 transition-all" />
                <span className="text-sm leading-relaxed">S No 24, 3rd Cross, Gokulam Main Rd, Gokulam 1st Stage, Mysore, KA 570002</span>
              </div>
              <div className="flex items-center gap-4 text-pearl/40 group cursor-pointer" onClick={() => window.location.href='tel:+919000000000'}>
                <Phone className="w-5 h-5 text-gold group-hover:scale-110 transition-all font-bold" />
                <span className="text-sm">+91 90000 00000</span>
              </div>
              <div className="flex items-center gap-4 text-pearl/40 group">
                <Mail className="w-5 h-5 text-gold group-hover:scale-110 transition-all font-bold" />
                <span className="text-sm">care@smilezone.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-gold font-serif text-lg mb-8 uppercase tracking-[3px] font-bold text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm text-pearl/40 uppercase tracking-widest text-[11px] font-bold">
              <li><a href="#about" className="hover:text-gold transition-colors">Our Story</a></li>
              <li><a href="#gallery" className="hover:text-gold transition-colors">Digital Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-gold transition-colors">Patient Care</a></li>
              <li><a href="#booking" className="hover:text-gold transition-colors">Booking Portal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-serif text-lg mb-8 uppercase tracking-[3px] font-bold text-sm">Clinic Hours</h4>
            <ul className="space-y-4 text-sm text-pearl/40">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="uppercase tracking-widest text-[10px]">Mon - Sat</span>
                <span className="text-gold font-bold">10:00 - 20:00</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="uppercase tracking-widest text-[10px]">Sunday</span>
                <span className="text-gold font-bold italic">By Request</span>
              </li>
              <li className="flex gap-2 items-center text-[9px] text-pearl/20 uppercase tracking-[3px] pt-4 font-bold">
                <Calendar size={12} /> Emergency Care On Call
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-[#fafffd] tracking-[4px] uppercase font-bold">
            © {currentYear} Smile Zone Clinic.
          </p>
          <div className="flex gap-8 text-[9px] uppercase tracking-[3px] text-pearl/20 font-bold">
            <a href="#" className="hover:text-pearl transition-colors">Privacy</a>
            <a href="#" className="hover:text-pearl transition-colors">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
