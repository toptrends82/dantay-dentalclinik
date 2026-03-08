const WHATSAPP = "https://api.whatsapp.com/send?phone=YOURNUMBER&text=Hello+Dantaay+Dental+Clinic!+I'd+like+to+book+an+appointment.";
const INSTA = "https://www.instagram.com/dantaay_dental_clinic?igsh=aWo4a3Z3Y3l4N2o=";
const GCAL = "https://calendar.google.com/calendar/r/eventedit?text=Dantaay+Dental+Appointment&details=Dental+appointment+at+Dantaay+Dental+Clinic&location=Dantaay+Dental+Clinic";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#why-us" },
  { label: "Appointment", href: "#appointment" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const scroll = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-footer text-primary-foreground py-14">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🐘</span>
              <span className="font-display text-xl font-bold">Dantaay Dental Clinic</span>
            </div>
            <p className="text-sm text-primary-foreground/60 mb-4">Gentle Care for Beautiful Smiles</p>
            <a
              href={INSTA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              📸 Follow on Instagram
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scroll(l.href)}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-bold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  💬 WhatsApp Booking
                </a>
              </li>
              <li>
                <a href={INSTA} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  📸 Instagram
                </a>
              </li>
              <li>
                <a href={GCAL} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  📅 Google Calendar
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/40">
          <span>© 2026 Dantaay Dental Clinic. All rights reserved.</span>
          <span>Made with ❤️ for beautiful smiles</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
