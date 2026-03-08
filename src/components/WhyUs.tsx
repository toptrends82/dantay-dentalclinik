import { motion } from "framer-motion";

const miniCards = [
  { icon: "🧼", title: "Sterile & Safe", desc: "Hospital-grade hygiene protocols" },
  { icon: "💉", title: "Painless", desc: "Advanced local anaesthesia" },
  { icon: "⏱️", title: "On-Time", desc: "We respect your schedule" },
  { icon: "💳", title: "Affordable", desc: "Flexible payment options" },
];

const features = [
  { icon: "🔭", title: "Modern Technology", desc: "Digital X-rays, laser dentistry, and advanced imaging for precise care." },
  { icon: "❤️", title: "Patient-First Approach", desc: "We listen before we treat. Your comfort and concerns always come first." },
  { icon: "👨‍⚕️", title: "Expert, Friendly Doctors", desc: "Qualified, experienced dentists who make every visit feel relaxed." },
  { icon: "📱", title: "Easy Booking & Reminders", desc: "Book in seconds via WhatsApp or Instagram. We follow up so you never miss your slot." },
];

const WhyUs = () => (
  <section id="why-us" className="py-20 bg-secondary">
    <div className="section-container">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Left visual */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <div className="relative bg-gradient-to-br from-primary to-primary-light rounded-3xl p-8 text-primary-foreground mb-6 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.06] text-[12rem] flex items-center justify-center select-none pointer-events-none">🐘</div>
            <h3 className="font-display text-2xl font-bold mb-3 relative z-10">
              Dentistry that feels <em>different</em> 🐘
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed relative z-10">
              We believe dental visits should feel safe, gentle, and even enjoyable. Our warm practice is built around comfort-first care for every patient.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {miniCards.map((c) => (
              <div key={c.title} className="bg-card rounded-2xl p-5 border border-border card-hover">
                <div className="text-2xl mb-2">{c.icon}</div>
                <h4 className="font-display text-sm font-bold text-foreground">{c.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{c.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right features */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex-1"
        >
          <span className="tag-pill mb-4 inline-flex">Why Dantaay?</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-8">
            Caring for Smiles the Dantaay Way
          </h2>
          <div className="space-y-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-pale flex items-center justify-center text-xl">
                  {f.icon}
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground mb-1">{f.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhyUs;
