'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShieldCheck, Building2, Cpu, Award, CheckCircle2 } from 'lucide-react';

const identities = [
  { 
    title: "Quality Oriented Company", 
    desc: "ISO 9001, ISO 13485 certified. Class 100000 clean room / quality floor operation.", 
    icon: <ShieldCheck className="w-6 h-6 text-orange-500" />,
    bgImage: "/qc.jpg" 
  },
  { 
    title: "Established in 2010", 
    desc: "Based in Bangalore, India. 150+ employees with existing operational 30,000 sq. ft. own premises. 24x7 support capability.", 
    icon: <Building2 className="w-6 h-6 text-orange-500" />,
    bgImage: "/sharporgbanner.jpg" 
  },
  { 
    title: "Focus on Business Values", 
    desc: "80 - 250 tonnage injection moulding machines. 2ml - 5ltr blow moulding machine with Parrison controller.", 
    icon: <Cpu className="w-6 h-6 text-orange-500" />,
    bgImage: "/mold.png" 
  },
  { 
    title: "Committed To", 
    desc: "Successful outcomes. Achieve Zero UAT defect. 30% - 70% TCO Reduction across setups.", 
    icon: <Award className="w-6 h-6 text-orange-500" />,
    bgImage: "/shakehand.png"
  }
];

const services = [
  { title: "Mould Designing & Tooling", points: ["Quick design schemes using different prototyping techniques.", "Design and development of high production tooling/moulding."] },
  { title: "Mould Development", points: ["Product Development - 3D design, injection & moulding analysis."] },
  { title: "Moulding", points: ["Component assembly.", "Decoration.", "Mould and Process validation done using CP/CPK analysis."] },
  { title: "Contract Manufacturing", points: ["We also undertake Manufacturing of all kinds."] }
];

export default function CapabilityGrid() {
  return (
    <section className="py-12 sm:py-16 px-6 max-w-7xl mx-auto space-y-12 sm:space-y-16">
      
      {/* IDENTITY SECTION */}
      <div id="identity" className="w-full">
        {/* Header section for identity */}
        <div className="flex flex-col items-start text-left mb-16 max-w-xl">
          <span className="text-xs uppercase font-mono font-bold tracking-[0.25em] text-orange-500 block mb-2">
            Our Identity
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase leading-tight">
            Operational Standards
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {identities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="premium-glass p-8 rounded-2xl flex flex-col justify-between relative min-h-[300px] sm:h-[340px] overflow-hidden group border border-slate-900 hover:border-orange-600/40 shadow-2xl"
            >
              {/* BACKDROP IMAGE OVERLAY */}
              <div className="absolute inset-0 z-0 opacity-100 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 pointer-events-none select-none">
                <Image
                  src={item.bgImage}
                  alt={item.title}
                  fill
                  sizes="100vw"
                  className="object-cover filter grayscale contrast-125 brightness-50"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/80 to-slate-950 z-1 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="mb-6 bg-slate-950/90 w-12 h-12 flex items-center justify-center rounded-xl border border-slate-800 group-hover:border-orange-500/50 group-hover:shadow-[0_0_15px_rgba(234,88,12,0.15)] transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-md font-black text-white mb-3 uppercase tracking-wide leading-snug group-hover:text-orange-500 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                <div className="w-full h-[2px] bg-slate-900 rounded-full overflow-hidden mt-6">
                  <div className="w-0 group-hover:w-full h-full bg-gradient-to-r from-orange-600 to-amber-500 transition-all duration-500 ease-out" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CORE SERVICES SECTION */}
      <div id="services" className="w-full">
        {/* Header section for core services */}
        <div className="flex flex-col items-start text-left mb-6 max-w-xl">
          <span className="text-xs uppercase font-mono font-bold tracking-[0.25em] text-orange-500 block mb-2">
            Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase leading-tight">
            Our Core Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="premium-glass p-8 md:p-10 rounded-2xl border border-slate-900 bg-slate-900/10 hover:border-slate-800/80 relative group"
            >
              <div className="absolute top-0 left-10 w-20 h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-xl font-black text-white mb-6 uppercase tracking-wider border-b border-slate-900 pb-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded bg-orange-600 group-hover:scale-125 transition-transform" />
                {service.title}
              </h3>
              <ul className="space-y-4">
                {service.points.map((p, i) => (
                  <li key={i} className="text-xs md:text-sm text-slate-400 leading-relaxed flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span className="group-hover:text-slate-300 transition-colors">{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}