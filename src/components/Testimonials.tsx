import { motion } from "framer-motion";

const testimonials = [
  {
    stars: 5,
    text: "I was terrified of dentists my whole life. Dantaay changed that completely. The doctor was so patient and gentle — I actually smiled leaving the clinic! 😊",
    name: "Priya S.",
    loc: "Mumbai",
    initial: "P",
  },
  {
    stars: 5,
    text: "My kids used to cry going to the dentist. Now they actually look forward to it. The friendly atmosphere and adorable elephant theme makes all the difference.",
    name: "Rajesh M.",
    loc: "Parent",
    initial: "R",
  },
  {
    stars: 5,
    text: "Got my teeth whitened and the results were amazing in just one session. Professional, clean, affordable — couldn't recommend Dantaay more highly.",
    name: "Ananya K.",
    loc: "Mumbai",
    initial: "A",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-20 bg-card">
    <div className="section-container">
      <div className="text-center mb-14">
        <span className="tag-pill mb-4 inline-flex">Patient Stories</span>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
          Smiles That Speak For Themselves
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card rounded-2xl border border-border p-7 card-hover"
          >
            <div className="flex gap-0.5 text-accent mb-4">
              {Array.from({ length: t.stars }).map((_, j) => (
                <span key={j}>⭐</span>
              ))}
            </div>
            <p className="text-foreground/90 text-sm leading-relaxed mb-6">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                {t.initial}
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.loc}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
