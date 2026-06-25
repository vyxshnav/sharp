'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
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
      <section id="clients" className="pt-10 pb-10 sm:pt-16 sm:pb-16 px-4 sm:px-6 max-w-7xl mx-auto border-t border-slate-900/60">
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

        {/* ORIGINAL logo grid — your custom sizes kept exactly */}
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 sm:gap-4">
          {clientBrands.map((brand, idx) => {
            const isWipro = brand.name === 'Wipro';
            const isNavagen = brand.name === 'Navagen';
            const isAntylia = brand.name === 'Antylia Scientific';
            const isPricol = brand.name === 'Pricol';
            const sizeClass = isWipro
              ? 'max-w-[95px] max-h-[62px] sm:max-w-[230px] sm:max-h-[140px] sm:scale-110'
              : (isNavagen || isPricol)
              ? 'max-w-[90px] max-h-[58px] sm:max-w-[200px] sm:max-h-[120px] sm:scale-105'
              : isAntylia
              ? 'max-w-[85px] max-h-[54px] sm:max-w-[160px] sm:max-h-[95px] sm:scale-105'
              : 'max-w-[85px] max-h-[52px] sm:max-w-[140px] sm:max-h-[85px]';

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
      <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto border-t border-slate-900">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-xs uppercase font-bold tracking-widest text-orange-500 mb-3">Contact Us</h2>
          <p className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">Get In Touch</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">

          {/* CALL — tapping opens phone dialer */}
          <motion.a
            href="tel:+919845210705"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.04, y: -5 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: 0 }}
            className="premium-glass p-6 sm:p-8 rounded-2xl cursor-pointer text-center block group no-underline"
          >
            <div className="w-12 h-12 rounded-2xl bg-orange-950/60 border border-orange-600/40 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600/20 group-hover:border-orange-500/60 transition-all duration-300">
              <Phone className="w-5 h-5 text-orange-500" strokeWidth={1.8} />
            </div>
            <p className="font-bold text-orange-500 mb-3 uppercase tracking-widest text-xs">Call Us</p>
            <p className="text-slate-300 font-mono text-sm leading-relaxed group-hover:text-white transition-colors">
              +91-98452-10705
            </p>
            <p className="text-slate-300 font-mono text-sm mt-1 group-hover:text-white transition-colors">
              +91-94480-81705
            </p>
            <p className="text-orange-500/60 text-[10px] uppercase tracking-widest mt-4 font-semibold">
              Tap to Call
            </p>
          </motion.a>

          {/* EMAIL — tapping opens mail app */}
          <motion.a
            href="mailto:sathish@sharppolymers.com"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.04, y: -5 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="premium-glass p-6 sm:p-8 rounded-2xl cursor-pointer text-center block group no-underline"
          >
            <div className="w-12 h-12 rounded-2xl bg-orange-950/60 border border-orange-600/40 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600/20 group-hover:border-orange-500/60 transition-all duration-300">
              <Mail className="w-5 h-5 text-orange-500" strokeWidth={1.8} />
            </div>
            <p className="font-bold text-orange-500 mb-3 uppercase tracking-widest text-xs">Email Us</p>
            <p className="text-slate-300 font-mono text-sm break-all group-hover:text-white transition-colors">
              sathish@sharppolymers.com
            </p>
            <p className="text-orange-500/60 text-[10px] uppercase tracking-widest mt-4 font-semibold">
              Tap to Email
            </p>
          </motion.a>

          {/* LOCATION — tapping opens Google Maps */}
          <motion.a
            href="https://maps.google.com/maps?q=Sharp+Polymers+Bommasandra+Bangalore"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.04, y: -5 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="premium-glass p-6 sm:p-8 rounded-2xl cursor-pointer text-center block group no-underline"
          >
            <div className="w-12 h-12 rounded-2xl bg-orange-950/60 border border-orange-600/40 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600/20 group-hover:border-orange-500/60 transition-all duration-300">
              <MapPin className="w-5 h-5 text-orange-500" strokeWidth={1.8} />
            </div>
            <p className="font-bold text-orange-500 mb-3 uppercase tracking-widest text-xs">Factory Address</p>
            <p className="text-slate-300 text-sm leading-relaxed group-hover:text-white transition-colors">
              No.173, 5th Cross,<br />
              Bommasandra Industrial Area,<br />
              Bangalore – 560099, India
            </p>
            <p className="text-orange-500/60 text-[10px] uppercase tracking-widest mt-4 font-semibold">
              Tap to Open Maps
            </p>
          </motion.a>

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
          <div className="relative p-5 sm:p-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-5"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-orange-500 font-semibold mb-2">Our Location</p>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
                  Sharp Polymers, Bommasandra
                </h3>
              </div>
              <p className="text-xs md:text-sm text-slate-400 max-w-xs md:max-w-sm leading-relaxed">
                Premium manufacturing facility in Bengaluru's leading industrial hub. Visit us for contract OEM and precision polymer solutions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-[20px] overflow-hidden border border-slate-900/70 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.8)]"
            >
              <iframe
                src="https://maps.google.com/maps?q=Sharp%20Polymers%20Bommasandra%20Bangalore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[260px] sm:h-[320px] md:h-[360px] bg-slate-950"
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

      {/* Footer */}
      <footer className="px-4 sm:px-6 max-w-5xl mx-auto mb-10 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="premium-glass rounded-3xl border border-slate-800/70 p-5 sm:p-6 text-center"
        >
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed tracking-wide uppercase">
            © {new Date().getFullYear()} Sharp Polymers. All Rights Reserved. built by vaishnav
          </p>
        </motion.div>
      </footer>
    </main>
  );
}
