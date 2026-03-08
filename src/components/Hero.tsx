import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const WHATSAPP_LINK =
  "https://api.whatsapp.com/send?phone=YOURNUMBER&text=Hello+Dantaay+Dental+Clinic!+I'd+like+to+book+an+appointment.";

const Hero = () => (
  <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-background">
    <div className="section-container flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
      {/* Left */}
      <div className="flex-1 max-w-xl lg:max-w-none">
        <motion.div {...fadeUp(0)} className="tag-pill mb-6">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          ✦ Now Welcoming New Patients
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight text-foreground mb-6"
        >
          Your Smile Deserves{" "}
          <em className="italic text-primary">Gentle</em> Expert Care
        </motion.h1>

        <motion.p {...fadeUp(0.2)} className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
          At Dantaay Dental Clinic, we combine modern dentistry with a warm, caring touch — because your comfort is our
          first priority. 🐘
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row gap-3 mb-8">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
            💬 Book via WhatsApp
          </a>
          <button
            onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-outline"
          >
            Explore Services →
          </button>
        </motion.div>

        <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span>✓ 500+ Happy Patients</span>
          <span>✓ 5★ Rated</span>
          <span>✓ Painless Treatments</span>
        </motion.div>
      </div>

      {/* Right — Floating Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="flex-shrink-0 w-full max-w-sm"
      >
        <div className="animate-float bg-card rounded-3xl shadow-2xl p-8 text-center border border-border">
          <div className="w-24 h-24 mx-auto rounded-full bg-primary flex items-center justify-center text-5xl mb-5">
            🐘
          </div>
          <h3 className="font-display text-xl font-bold text-foreground mb-1">Dantaay Dental Clinic</h3>
          <p className="text-sm text-muted-foreground mb-6">Gentle · Modern · Caring</p>
          <div className="flex justify-center gap-6 text-center mb-6">
            <div>
              <div className="font-display text-xl font-bold text-primary">500+</div>
              <div className="text-xs text-muted-foreground">Smiles</div>
            </div>
            <div>
              <div className="font-display text-xl font-bold text-primary">5★</div>
              <div className="text-xs text-muted-foreground">Rating</div>
            </div>
            <div>
              <div className="font-display text-xl font-bold text-primary">5+</div>
              <div className="text-xs text-muted-foreground">Years</div>
            </div>
          </div>
          <span className="tag-pill text-xs">Next Available: Today</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
