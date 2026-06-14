'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Ensure factory/machine images are available in the public/ folder
const bannerSlides = [
  { 
    id: 1, 
    src: '/banner1.jpg', 
    subtitle: 'Precision Engineering',
    title: 'Advanced Injection Moulding' 
  },
  { 
    id: 2, 
    src: '/banner2.jpg', 
    subtitle: 'High Volume Operations',
    title: 'Automated Blow Moulding' 
  },
  { 
    id: 3, 
    src: '/banner3.jpg', 
    subtitle: 'Global Manufacturing Partner',
    title: 'Concept To Contract OEM' 
  }
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic slide timer every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerSlides.length);
    }, 6000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-0 bg-slate-950 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 0.25, scale: 1 }} // Reduce image opacity so text stays clear
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 w-full h-full select-none pointer-events-none"
        >
          <img
            src={bannerSlides[currentIndex].src}
            alt={bannerSlides[currentIndex].title}
            className="w-full h-full object-cover filter grayscale contrast-115 brightness-90"
          />
        </motion.div>
      </AnimatePresence>

      {/* Cinematic industrial gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40 z-1" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950/20 z-1" />

      {/* Small premium slide text display (bottom right) */}
      <div className="absolute bottom-12 right-12 z-10 hidden md:block text-right max-w-xs">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-orange-500 block mb-1">
              {bannerSlides[currentIndex].subtitle}
            </span>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">
              {bannerSlides[currentIndex].title}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* SLIDER DOTS INDICATORS (bottom center) */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex gap-2.5">
        {bannerSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1 rounded-full transition-all duration-500 out-skew ${
              idx === currentIndex ? 'w-8 bg-orange-600' : 'w-2 bg-slate-800 hover:bg-slate-700'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}