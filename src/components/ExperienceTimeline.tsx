'use client';
import { motion } from 'framer-motion';

const milestones = [
  { year: "2010", title: "Established Sharp Polymers", desc: "Inception of production setups." },
  { year: "2014", title: "Infrastructure Extension", desc: "Own office and factory set up with cleanroom environment." },
  { year: "2016", title: "Operational Transformation", desc: "Transformation to the new era with new management, machinery, and people. Added new clients, technologies to manage client needs." },
  { year: "2017", title: "Certifications & Scale", desc: "Quality certifications achieved and new global corporate partnerships established." }
];

const values = [
  "Doing more with less.",
  "Quality and Time performance.",
  "Enabling business continuity.",
  "International Quality at off-shore prices.",
  "Project Management for on-time completion of project."
];

export default function ExperienceTimeline() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto space-y-32">
      {/* Timeline */}
      <div id="timeline" className="relative">
        <h2 className="text-xs uppercase font-bold tracking-widest text-orange-500 mb-16 text-center">Our Timeline</h2>
        <div className="absolute top-[120px] bottom-0 left-6 md:left-1/2 w-0.5 bg-slate-800" />
        <div className="space-y-12">
          {milestones.map((item, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-start relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="absolute left-6 md:left-1/2 -translate-x-1.5 w-3 h-3 bg-orange-600 rounded-full z-10 ring-4 ring-slate-950" />
              <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="premium-glass p-6 rounded-lg">
                  <span className="text-xs font-mono font-bold text-orange-500 block mb-1">{item.year}</span>
                  <h3 className="text-md font-bold text-white mb-2 uppercase tracking-wide">{item.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Delivering Values */}
      <div className="premium-glass p-8 rounded-lg max-w-3xl mx-auto border border-slate-800">
        <h3 className="text-sm uppercase font-bold tracking-widest text-orange-500 mb-6 text-center">Our Delivering Values</h3>
        <ul className="space-y-4 max-w-xl mx-auto">
          {values.map((v, idx) => (
            <li key={idx} className="flex items-center gap-3 text-xs text-slate-300 font-medium">
              <span className="w-4 h-4 rounded-full bg-orange-950 border border-orange-600 flex items-center justify-center text-[10px] text-orange-500 font-bold">✓</span>
              {v}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}