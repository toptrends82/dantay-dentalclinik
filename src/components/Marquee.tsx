const items = [
  "🦷 General Dentistry",
  "✨ Teeth Whitening",
  "😁 Orthodontics",
  "🔬 Root Canal",
  "🦴 Implants",
  "👶 Paediatric Dental",
  "💎 Smile Makeovers",
  "🧼 Preventive Care",
];

const Marquee = () => (
  <div className="bg-primary py-3 overflow-hidden group">
    <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
      {[...items, ...items].map((item, i) => (
        <span key={i} className="mx-6 text-sm font-medium text-primary-foreground">
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;
