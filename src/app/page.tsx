'use client';

import { motion } from 'framer-motion';
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import CapabilityGrid from "../components/CapabilityGrid";
import ExperienceTimeline from "../components/ExperienceTimeline";


const clientBrands = [
  { name: "Himalaya", logo: "/himalayala.png" },
  { name: "Inito", logo: "/inito.png" },
  { name: "Merck", logo: "/merck.png" },
  { name: "Tata MD", logo: "/tatamd.png" },
  { name: "Tan90", logo: "/tan90.png" },
  { name: "Apollo", logo: "/apollo.jpg" },
  { name: "Hindustan Unilever Limited", logo: "/hul.webp" },
  { name: "Tulip Group", logo: "/tulip.png" },
  { name: "Antylia Scientific", logo: "/antylia.png" },
  { name: "Stericon", logo: "/stericon.png" },
  { name: "Aurolab", logo: "/aurolab.png" },
  { name: "Marico", logo: "/marico.png" },
  { name: "Indo-MIM", logo: "/Indo-MIM.png" },
  { name: "ibTech", logo: "/ibTech.png" },
  { name: "Sensaram", logo: "/Sensaram.png" },
  { name: "Essae", logo: "/Essae.png" },
  { name: "Wipro", logo: "/wipro.png" },
  { name: "Navagen", logo: "/Navagen.png" },
  { name: "Revinto", logo: "/revinto.png" },
  { name: "AsterDM", logo: "/asterdm.png" },
  { name: "TTK Services", logo: "/ttkservices.png" },
  { name: "Born Good", logo: "/borngood.png" },
  { name: "Pricol", logo: "/pricol.png" },
  { name: "Ubio", logo: "/ubio.png" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
      {/* Background Industrial Grid Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10 pointer-events-none" />
      
      <Navigation />
      <HeroSection />
      <CapabilityGrid />
      <ExperienceTimeline />

      {/* CLIENTS GRID SECTION */}
      <section id="clients" className="pt-4 pb-10 sm:pt-8 sm:pb-16 px-4 sm:px-6 max-w-7xl mx-auto border-t border-slate-900/60">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-sm uppercase font-bold tracking-widest text-orange-500 mb-2">Partnerships</h2>
          <p className="text-4xl sm:text-5xl font-black text-white tracking-tight uppercase mb-10">Trusted By Global Leaders</p>
        </motion.div>

        <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 sm:gap-4">
          {clientBrands.map((brand, idx) => {
            const isWipro = brand.name === 'Wipro';
            const isNavagen = brand.name === 'Navagen';
            const isAntylia = brand.name === 'Antylia Scientific';
            const isPricol = brand.name === 'Pricol';
            const sizeClass = isWipro
              ? 'max-w-[95px] max-h-[72px] sm:max-w-[230px] sm:max-h-[140px] sm:scale-110'
              : (isNavagen || isPricol)
              ? 'max-w-[90px] max-h-[68px] sm:max-w-[200px] sm:max-h-[120px] sm:scale-105'
              : isAntylia
              ? 'max-w-[85px] max-h-[64px] sm:max-w-[160px] sm:max-h-[95px] sm:scale-105'
              : 'max-w-[85px] max-h-[62px] sm:max-w-[140px] sm:max-h-[85px]';

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.08, y: -5 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
                className="premium-glass h-28 sm:h-28 p-3 sm:p-4 flex items-center justify-center rounded-2xl group transition-all duration-300 relative overflow-hidden bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-blue-950/40 border border-slate-700/70 hover:border-blue-500/30 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.9)]"
              >
                <div className="relative w-full h-full flex items-center justify-center transition-all duration-300 z-10 group-hover:scale-105">
                  {brand.logo ? (
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className={`relative object-contain brightness-105 contrast-125 ${sizeClass}`}
                    />
                  ) : null}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-14 px-4 sm:px-6 max-w-5xl mx-auto border-t border-slate-900">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase font-bold tracking-widest text-orange-500 mb-6 text-center"
        >
          Contact Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center text-xs tracking-wide">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: 0 }}
            className="premium-glass p-4 sm:p-5 rounded-xl cursor-pointer"
          >
            <p className="font-bold text-white mb-2 uppercase text-orange-500">Call Us</p>
            <a href="tel:+919845210705" className="text-slate-400 font-mono hover:underline">+91-98452-10705</a>
            <a href="tel:+919448081705" className="block text-slate-400 font-mono hover:underline">+91-9448081705</a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="premium-glass p-5 rounded-xl cursor-pointer"
          >
            <p className="font-bold text-white mb-2 uppercase text-orange-500">Email Us</p>
            <a href="mailto:SATHISH@SHARPPOLYMERS.COM" className="text-slate-400 font-mono hover:underline">SATHISH@SHARPPOLYMERS.COM</a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="premium-glass p-5 rounded-xl cursor-pointer"
          >
            <p className="font-bold text-white mb-2 uppercase text-orange-500">Factory Address</p>
            <a
              href="https://maps.google.com/maps?q=Sharp%20Polymers%20Bommasandra%20Bangalore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 leading-relaxed uppercase hover:underline block"
            >
              No.173, 5th Cross, Bommasandra Indl Area, Bangalore - 560099, India
            </a>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="premium-glass relative overflow-hidden rounded-[32px] border border-slate-800/70 shadow-2xl shadow-slate-950/20"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
          <div className="relative p-6 sm:p-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-5"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-orange-500 font-semibold mb-2">Our Location</p>
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">Sharp Polymers, Bommasandra</h3>
              </div>
              <p className="text-xs md:text-sm text-slate-400 max-w-xl">
                Premium manufacturing facility located in Bengaluru's leading industrial hub. Visit us for contract OEM and precision polymer solutions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-[24px] overflow-hidden border border-slate-900/70 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.8)]"
            >
              <iframe
                src="https://maps.google.com/maps?q=Sharp%20Polymers%20Bommasandra%20Bangalore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[280px] sm:h-[320px] bg-slate-950"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sharp Polymers Bommasandra Location Map"
              />
            </motion.div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/40 pointer-events-none" />
        </motion.div>
      </section>

      {/* Footer Section */}
      <section className="px-6 max-w-5xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="premium-glass rounded-3xl border border-slate-800/70 p-6 text-center shadow-2xl shadow-slate-950/10"
        >
          <p className="text-sm text-slate-300 leading-relaxed">
            © {new Date().getFullYear()} SHARP POLYMERS. ALL RIGHTS RESERVED. Built by Vaishnav.
          </p>
        </motion.div>
      </section>

    </main>
  );
}
