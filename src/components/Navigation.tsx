'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const navLinks = [
  { href: '#about', label: 'About Us' },
  { href: '#identity', label: 'Our Identity' },
  { href: '#services', label: 'Services' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#clients', label: 'Clients' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash) {
        const targetElement = document.querySelector(target.hash);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);

    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 px-4 py-3 flex items-center justify-between premium-glass border-b border-slate-900"
    >
      <a href="#about" className="flex items-center gap-2 h-10 w-auto">
       <Image
          src="/sharpLogo (1).png"
          alt="Sharp Polymers Logo"
          width={120}
          height={34}
          className="object-contain"
          priority
        />
      </a>

      <div className="hidden md:flex items-center gap-6 text-xs uppercase font-bold tracking-widest text-slate-400">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="hover:text-orange-500 transition-colors">
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <a
          href="#contact"
          className="hidden md:inline-flex px-3 py-2 rounded text-xs font-bold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-700 transition-all duration-300"
        >
          Request A Quote
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-950/80 text-slate-200 transition hover:border-orange-500 md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="text-lg">{menuOpen ? '×' : '☰'}</span>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute inset-x-0 top-full z-40 bg-slate-950/95 border-t border-slate-900/80 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-4 px-5 py-4 text-sm uppercase tracking-widest text-slate-200">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl px-3 py-2.5 hover:bg-slate-900/80 transition"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-xl bg-orange-600 px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-orange-700"
              >
                Request A Quote
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
}