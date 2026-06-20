'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const banners = [
  { id: 1, src: '/sharporgbanner.jpg', title: 'Advanced Injection Moulding', subtitle: 'Precision Engineering' }, 
  { id: 2, src: '/polymerbanner.jpg', title: 'High Volume Blow Moulding', subtitle: 'AI-Optimized Operations' },
  { id: 3, src: '/qcengineers.jpg', title: 'Contract OEM Specialists', subtitle: 'Global Manufacturing' },
  { id: 4, src: '/blowmolding.png', title: 'Contract OEM Specialists', subtitle: 'Global Manufacturing' }
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotate banner every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-24 overflow-hidden">
      
      {/* BACKGROUND BANNER SLIDER ENGINE */}
      <div className="absolute inset-0 z-0 bg-slate-950">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full select-none pointer-events-none"
          >
            <Image
              src={banners[currentIndex].src}
              alt={banners[currentIndex].title}
              fill
              sizes="100vw"
              className="object-cover filter contrast-115 opacity-20"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay for premium industrial look */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/10 z-1" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-10 z-1" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(14,116,144,0.14),transparent_28%)] opacity-80 z-1" />
      </div>

      {/* RIGHT-BOTTOM: CINEMATIC SLIDE TEXT DISPLAY */}
      <div className="absolute bottom-10 right-12 z-10 hidden md:block text-right max-w-xs">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-orange-500 block mb-1">
              {banners[currentIndex].subtitle}
            </span>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">
              {banners[currentIndex].title}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* FOREGROUND CONTENT (TEXTS & BUTTONS) */}
      <div className="text-center max-w-5xl z-10 flex flex-col items-center -translate-y-10 md:-translate-y-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-6 mb-6 opacity-90"
        >
          <Image
            src="/sharpLogo (1).png"
            alt="Sharp Polymers Corporate Logo"
            width={220}
            height={70}
            className="object-contain w-auto h-auto filter drop-shadow-[0_0_15px_rgba(234,88,12,0.15)] mt-5 mb-1"
            style={{ width: 'auto', height: 'auto' }}
            priority
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-semibold tracking-wider text-slate-400 uppercase mb-1 -mt-12 backdrop-blur"
        >
          An ISO 9001, ISO 13485 & GMP Certified OEM Company
        </motion.div>

        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-7xl font-black text-white mb-8 leading-none uppercase"
        >
          <span className="tracking-wide">Welcome To</span> <br />
          <span className="text-orange-600">
            Sharp Polymers
          </span>
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm sm:text-base md:text-lg text-slate-400 max-w-3xl mx-auto mb-3 uppercase tracking-widest leading-relaxed"
        >
          Powered by <span className="text-white font-bold">AI-optimized</span> process control, advanced <span className="text-white font-bold">Injection</span> and <span className="text-white font-bold">Blow Moulding</span>, Concept and Contract Manufacturing.
        </motion.p>

        

        {/* CLICKABLE SLIDER DOTS INTERACTIVE NAVIGATION */}
        <div className="flex gap-2.5 mb-5 z-20">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                idx === currentIndex ? 'w-8 bg-orange-600' : 'w-2 bg-slate-800 hover:bg-slate-700'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

       <div className="flex flex-row gap-3 justify-center items-center w-full max-w-sm sm:max-w-none px-4 z-20">
  <a 
    href="#contact" 
    className="flex-1 sm:flex-none text-center px-4 sm:px-6 py-3 rounded bg-orange-600 hover:bg-orange-700 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white transition-all shadow-lg shadow-orange-600/10 whitespace-nowrap"
  >
    Request A Quote
  </a>
  <a 
    href="#services" 
    className="flex-1 sm:flex-none text-center px-4 sm:px-6 py-3 rounded border border-slate-800 bg-slate-900/40 hover:bg-slate-900/80 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-white transition-all backdrop-blur whitespace-nowrap"
  >
    Explore Services
  </a>
</div>
      </div>
    </section>
  );
}