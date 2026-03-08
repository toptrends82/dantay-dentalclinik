import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const WHATSAPP = "https://api.whatsapp.com/send?phone=YOURNUMBER&text=Hello+Dantaay+Dental+Clinic!+I'd+like+to+book+an+appointment.";

const FloatingElements = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 w-14 h-14 rounded-full bg-whatsapp flex items-center justify-center text-2xl shadow-lg animate-pulse-glow hover:scale-110 transition-transform"
        title="Chat with us!"
      >
        💬
      </a>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className={`fixed bottom-5 left-5 z-50 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110
          ${showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      >
        <ArrowUp size={18} />
      </button>
    </>
  );
};

export default FloatingElements;
