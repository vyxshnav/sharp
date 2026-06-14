'use client';

import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import CapabilityGrid from "../components/CapabilityGrid";
import ExperienceTimeline from "../components/ExperienceTimeline";

// 24 premium client brands list
const clientBrands = [
  { name: "Tan90", logo: "/tan90.png" },
  { name: "Inito", logo: "/inito.png" },
  { name: "Merck", logo: "/merck.png" },
  { name: "Tata MD", logo: "/tatamd.png" },
  { name: "Hindustan Unilever Limited", logo: "/hul.webp" },
  { name: "Tulip Group", logo: "/tulip.png" },
  { name: "Antylia Scientific", logo: "/antylia.png" },
  { name: "Stericon", logo: "/stericon.png" },
  { name: "Aurolab", logo: "/aurolab.png" },
  { name: "Himalaya", logo: "/himalayala.png" },
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
  { name: "Apollo", logo: "/apollo.jpg" },
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

      {/* CLIENTS GRID SECTION (CLEAN IMAGES ONLY) */}
      <section id="clients" className="py-32 px-6 max-w-7xl mx-auto border-t border-slate-900/60">
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase font-bold tracking-widest text-orange-500 mb-3">Partnerships</h2>
          <p className="text-3xl font-black text-white tracking-tight uppercase">Trusted By Global Leaders</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {clientBrands.map((brand, idx) => (
            <div 
              key={idx} 
              className="premium-glass h-24 p-4 flex flex-col items-center justify-center rounded-xl hover:border-slate-700 group transition-all duration-300 bg-slate-900/20 hover:bg-slate-900/60 relative overflow-hidden"
            >
              {/* Clean logo display layer */}
              <div className="relative w-full h-full flex items-center justify-center opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 z-10">
                {brand.logo ? (
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-[100px] max-h-[60px] object-contain"
                  />
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 max-w-5xl mx-auto border-t border-slate-900">
        <h2 className="text-xs uppercase font-bold tracking-widest text-orange-500 mb-12 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-xs tracking-wide">
          <div className="premium-glass p-6 rounded-xl">
            <p className="font-bold text-white mb-2 uppercase text-orange-500">Call Us</p>
            <p className="text-slate-400 font-mono">+91-98452-10705</p>
            <p className="text-slate-400 font-mono">+91-80-2783302</p>
          </div>
          <div className="premium-glass p-6 rounded-xl">
            <p className="font-bold text-white mb-2 uppercase text-orange-500">Email Us</p>
            <p className="text-slate-400 font-mono">SATHISH@SHARPPOLYMERS.COM</p>
          </div>
          <div className="premium-glass p-6 rounded-xl">
            <p className="font-bold text-white mb-2 uppercase text-orange-500">Factory Address</p>
            <p className="text-slate-400 leading-relaxed uppercase">
              No.173, 5th Cross, Bommasandra Indl Area, Bangalore - 560099, India
            </p>
          </div>
        </div>
      </section>
      
      {/* SMALL PREMIUM MAP CARD */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="premium-glass relative overflow-hidden rounded-[32px] border border-slate-800/70 shadow-2xl shadow-slate-950/20">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
          <div className="relative p-8 md:p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-orange-500 font-semibold mb-2">Our Location</p>
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">Sharp Polymers, Bommasandra</h3>
              </div>
              <p className="text-xs md:text-sm text-slate-400 max-w-xl">
                Premium manufacturing facility located in Bengaluru’s leading industrial hub. Visit us for contract OEM and precision polymer solutions.
              </p>
            </div>
            <div className="rounded-[24px] overflow-hidden border border-slate-900/70 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.8)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.3400262198084!2d77.6917637!3d12.8212979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c4e09f5db3b%3A0x6b77457788470a1a!2sSharp%20Polymers!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                className="w-full h-[280px] sm:h-[320px] bg-slate-950"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sharp Polymers Bommasandra Location Map"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/40 pointer-events-none" />
        </div>
      </section>

      <section className="px-6 max-w-5xl mx-auto mb-16">
        <div className="premium-glass rounded-3xl border border-slate-800/70 p-6 text-center shadow-2xl shadow-slate-950/10">
          <p className="text-sm text-slate-300 leading-relaxed">
            © {new Date().getFullYear()} SHARP POLYMERS. ALL RIGHTS RESERVED. Built by Vaishnav.
          </p>
        </div>
      </section>

    </main>
  );
}