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
    <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto space-y-12 sm:space-y-16">
      {/* Timeline */}
      <div id="timeline" className="relative">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase font-bold tracking-widest text-orange-500 mb-8 text-center"
        >
          Our Timeline
        </motion.h2>
        <div className="hidden md:block absolute top-[72px] bottom-0 left-1/2 w-0.5 bg-slate-800" />
        <div className="space-y-6">
          {milestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className={`flex flex-col md:flex-row items-start relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <motion.div
                whileInView={{ scale: 1.3 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="absolute left-6 md:left-1/2 -translate-x-1.5 w-3 h-3 bg-orange-600 rounded-full z-10 ring-4 ring-slate-950"
              />
              <div className="w-full md:w-1/2 pl-10 md:pl-0 md:px-10">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02, y: -3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="premium-glass p-4 rounded-lg hover:border-orange-500/50 transition-colors cursor-pointer"
                >
                  <span className="text-xs font-mono font-bold text-orange-500 block mb-1">{item.year}</span>
                  <h3 className="text-md font-bold text-white mb-2 uppercase tracking-wide">{item.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Delivering Values */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="premium-glass p-6 md:p-8 rounded-lg max-w-3xl mx-auto border border-slate-800"
      >
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase font-bold tracking-widest text-orange-500 mb-6 text-center"
        >
          Our Delivering Values
        </motion.h3>
        <ul className="space-y-4 max-w-xl mx-auto">
          {values.map((v, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="flex items-center gap-3 text-xs text-slate-300 font-medium group"
            >
              <motion.span
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className="w-4 h-4 rounded-full bg-orange-950 border border-orange-600 flex items-center justify-center text-[10px] text-orange-500 font-bold group-hover:bg-orange-600 group-hover:text-slate-950 transition-colors"
              >
                ✓
              </motion.span>
              <span className="group-hover:text-orange-500 transition-colors">{v}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}