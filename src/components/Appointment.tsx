import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const WHATSAPP = "https://api.whatsapp.com/send?phone=YOURNUMBER&text=Hello+Dantaay+Dental+Clinic!+I'd+like+to+book+an+appointment.";
const GCAL = "https://calendar.google.com/calendar/r/eventedit?text=Dantaay+Dental+Appointment&details=Dental+appointment+at+Dantaay+Dental+Clinic&location=Dantaay+Dental+Clinic";
const INSTA = "https://www.instagram.com/dantaay_dental_clinic?igsh=aWo4a3Z3Y3l4N2o=";

const bookingChannels = [
  { title: "Book via WhatsApp", sub: "Chat with us instantly for quick booking", color: "border-l-4 border-l-green-500", icon: "💬", link: WHATSAPP },
  { title: "Schedule on Google Calendar", sub: "Add your appointment and get a reminder", color: "border-l-4 border-l-blue-500", icon: "📅", link: GCAL },
  { title: "DM on Instagram", sub: "@dantaay_dental_clinic — say hi!", color: "border-l-4 border-l-pink-500", icon: "📸", link: INSTA },
];

const timeSlots = ["9:00 AM", "10:30 AM", "12:00 PM", "3:00 PM", "5:30 PM"];
const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const Appointment = () => {
  const now = new Date();
  const [month, setMonth] = useState(now.getMonth());
  const [year, setYear] = useState(now.getFullYear());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = now.getDate();
  const isCurrentMonth = month === now.getMonth() && year === now.getFullYear();

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(year - 1); }
    else setMonth(month - 1);
  };
  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(year + 1); }
    else setMonth(month + 1);
  };

  const monthName = new Date(year, month).toLocaleString("default", { month: "long" });

  return (
    <section id="appointment" className="py-20 bg-primary-pale">
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="tag-pill mb-4 inline-flex">Book an Appointment</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Ready for a Healthier Smile?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose your preferred booking method below, pick a date and time, then confirm via WhatsApp.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left — Booking Channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-4"
          >
            {bookingChannels.map((ch) => (
              <a
                key={ch.title}
                href={ch.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 bg-card rounded-2xl p-5 ${ch.color} card-hover group`}
              >
                <span className="text-2xl">{ch.icon}</span>
                <div className="flex-1">
                  <h4 className="font-display font-bold text-foreground">{ch.title}</h4>
                  <p className="text-sm text-muted-foreground">{ch.sub}</p>
                </div>
                <ArrowRight className="text-muted-foreground group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            ))}
          </motion.div>

          {/* Right — Calendar Widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex-1"
          >
            <div className="bg-card rounded-3xl shadow-lg p-6 border border-border">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <button onClick={prevMonth} className="p-2 rounded-xl hover:bg-primary-pale transition-colors" aria-label="Previous month">
                  <ChevronLeft size={18} />
                </button>
                <span className="font-display font-bold text-foreground">{monthName} {year}</span>
                <button onClick={nextMonth} className="p-2 rounded-xl hover:bg-primary-pale transition-colors" aria-label="Next month">
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Day headers */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {daysOfWeek.map((d) => (
                  <div key={d} className="text-center text-xs font-medium text-muted-foreground py-1">{d}</div>
                ))}
              </div>

              {/* Days */}
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: firstDay }).map((_, i) => (
                  <div key={`e-${i}`} />
                ))}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const isToday = isCurrentMonth && day === today;
                  const isSelected = selectedDay === day;
                  const hasSlot = day % 3 !== 0; // mock availability
                  return (
                    <button
                      key={day}
                      onClick={() => { setSelectedDay(day); setSelectedSlot(null); }}
                      className={`relative flex flex-col items-center justify-center h-10 rounded-xl text-sm font-medium transition-colors
                        ${isSelected ? "bg-primary text-primary-foreground" : isToday ? "bg-primary/10 text-primary font-bold" : "hover:bg-primary-pale text-foreground"}`}
                    >
                      {day}
                      {hasSlot && !isSelected && (
                        <span className="absolute bottom-1 w-1 h-1 rounded-full bg-accent" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Time Slots */}
              {selectedDay && (
                <div className="mt-6">
                  <p className="text-sm font-medium text-foreground mb-3">Available time slots</p>
                  <div className="flex flex-wrap gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                          ${selectedSlot === slot ? "bg-primary text-primary-foreground" : "bg-primary-pale text-primary hover:bg-primary/20"}`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">Tap a slot then book via WhatsApp 💬</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
