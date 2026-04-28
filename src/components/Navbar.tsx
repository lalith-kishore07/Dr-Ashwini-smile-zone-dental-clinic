import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Smile Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-pearl/80 backdrop-blur-lg border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <span className="font-serif text-2xl font-bold tracking-tight text-navy uppercase">SMILE <span className="text-gold">ZONE</span></span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted mt-1">Dr. Ashwini's Dental Clinic</span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[13px] font-semibold uppercase tracking-widest text-navy hover:text-gold transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#booking"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2 bg-navy text-white text-[11px] font-bold uppercase tracking-widest rounded-sm hover:bg-white hover:text-navy border border-navy transition-all duration-300"
          >
            Book Appointment
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-midnight" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-pearl border-b border-gold/10 px-6 py-8 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-charcoal"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#booking"
            className="w-full py-4 bg-midnight text-pearl text-center font-medium rounded-xl"
            onClick={() => setIsOpen(false)}
          >
            Book Appointment
          </a>
        </motion.div>
      )}
    </nav>
  );
}
