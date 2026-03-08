import { motion } from "framer-motion";

const services = [
  { icon: "🦷", title: "General Dentistry", desc: "Comprehensive exams, X-rays, fillings, extractions, and preventive care for all ages." },
  { icon: "✨", title: "Teeth Whitening", desc: "Professional in-clinic whitening for a noticeably brighter, confident smile." },
  { icon: "😁", title: "Orthodontics", desc: "Metal braces, ceramic braces, and invisible clear aligners for straighter teeth." },
  { icon: "🔬", title: "Root Canal Therapy", desc: "Pain-free RCT using modern techniques to save your natural tooth." },
  { icon: "🦴", title: "Dental Implants", desc: "Permanent, natural-looking tooth replacements anchored to the jawbone." },
  { icon: "👶", title: "Paediatric Dentistry", desc: "Child-friendly dental care in a fun, calm environment that kids love." },
];

const Services = () => (
  <section id="services" className="py-20 bg-background">
    <div className="section-container">
      <div className="text-center mb-14">
        <span className="tag-pill mb-4 inline-flex">Our Services</span>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
          Complete Dental Care Under One Roof
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          From your first check-up to a full smile transformation — every service delivered with expertise and kindness.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group bg-card rounded-2xl p-7 border border-border card-hover cursor-default transition-colors duration-300 hover:bg-primary hover:border-primary"
          >
            <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">{s.icon}</div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary-foreground transition-colors">
              {s.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-primary-foreground/80 transition-colors">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => document.querySelector("#appointment")?.scrollIntoView({ behavior: "smooth" })}
          className="text-primary font-medium hover:underline"
        >
          View All Services →
        </button>
      </div>
    </div>
  </section>
);

export default Services;
