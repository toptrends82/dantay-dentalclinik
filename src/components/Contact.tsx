import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const WHATSAPP = "https://api.whatsapp.com/send?phone=YOURNUMBER&text=Hello+Dantaay+Dental+Clinic!+I'd+like+to+book+an+appointment.";
const INSTA = "https://www.instagram.com/dantaay_dental_clinic?igsh=aWo4a3Z3Y3l4N2o=";
const GCAL = "https://calendar.google.com/calendar/r/eventedit?text=Dantaay+Dental+Appointment&details=Dental+appointment+at+Dantaay+Dental+Clinic&location=Dantaay+Dental+Clinic";

const contactCards = [
  { icon: "💬", title: "WhatsApp", desc: "Message us for quick appointment booking", link: WHATSAPP },
  { icon: "📸", title: "Instagram", desc: "@dantaay_dental_clinic", link: INSTA },
  { icon: "📅", title: "Google Calendar", desc: "Schedule & set a reminder", link: GCAL },
];

const serviceOptions = ["General Check-up", "Teeth Whitening", "Orthodontics", "Root Canal", "Dental Implants", "Paediatric Dental", "Other"];

const Contact = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", service: "", message: "" });
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};
    if (!form.firstName.trim()) newErrors.firstName = true;
    if (!form.phone.trim()) newErrors.phone = true;
    if (!form.service) newErrors.service = true;
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    toast.success("Thank you! We'll reach out via WhatsApp shortly 🐘");
    setForm({ firstName: "", lastName: "", phone: "", service: "", message: "" });
  };

  const update = (field: string, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
    setErrors((p) => ({ ...p, [field]: false }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary to-primary-dark">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-primary-foreground"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Get In Touch 🐘</h2>
            <p className="text-primary-foreground/80 mb-8 leading-relaxed">
              Whether you're a new patient or returning, we'd love to hear from you. Reach out through any channel below.
            </p>
            <div className="space-y-4">
              {contactCards.map((c) => (
                <a
                  key={c.title}
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-primary-foreground/10 border border-primary-foreground/20 rounded-2xl p-4 hover:translate-x-1 transition-transform group"
                >
                  <span className="text-2xl">{c.icon}</span>
                  <div>
                    <div className="font-bold text-primary-foreground">{c.title}</div>
                    <div className="text-sm text-primary-foreground/70">{c.desc}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex-1"
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-3xl shadow-xl p-7 sm:p-9">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">Send Us a Message</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">First Name *</label>
                  <input
                    value={form.firstName}
                    onChange={(e) => update("firstName", e.target.value)}
                    className={`w-full rounded-xl border ${errors.firstName ? "border-destructive" : "border-border"} bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary`}
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">Last Name</label>
                  <input
                    value={form.lastName}
                    onChange={(e) => update("lastName", e.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="text-xs font-medium text-muted-foreground mb-1 block">Phone Number *</label>
                <input
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className={`w-full rounded-xl border ${errors.phone ? "border-destructive" : "border-border"} bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary`}
                />
              </div>
              <div className="mb-4">
                <label className="text-xs font-medium text-muted-foreground mb-1 block">Service *</label>
                <select
                  value={form.service}
                  onChange={(e) => update("service", e.target.value)}
                  className={`w-full rounded-xl border ${errors.service ? "border-destructive" : "border-border"} bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary`}
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="mb-6">
                <label className="text-xs font-medium text-muted-foreground mb-1 block">Message (optional)</label>
                <textarea
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  rows={3}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message 🐘
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
