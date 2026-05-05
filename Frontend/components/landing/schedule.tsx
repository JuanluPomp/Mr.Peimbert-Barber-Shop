"use client"

const hours = [
  { day: "Lunes", time: "9:00 am – 8:00 pm", open: true },
  { day: "Martes", time: "9:00 am – 8:00 pm", open: true },
  { day: "Miércoles", time: "9:00 am – 8:00 pm", open: true },
  { day: "Jueves", time: "9:00 am – 8:00 pm", open: true },
  { day: "Viernes", time: "9:00 am – 8:00 pm", open: true },
  { day: "Sábado", time: "9:00 am – 8:00 pm", open: true },
  { day: "Domingo", time: "10:00 am – 3:00 pm", open: true },
]

export function Schedule() {
  const today = new Date().getDay() // 0=Sun, 1=Mon...
  const todayIndex = today === 0 ? 6 : today - 1 // map to our array (Mon=0)

  return (
    <section id="horarios" className="py-28 bg-[#0a0a0a] relative">
      <div className="gold-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Schedule Table */}
        <div className="reveal">
          <span className="font-sans text-xs tracking-[0.4em] uppercase text-[#C9A84C] mb-6 block">
            Horarios
          </span>
          <h2
            className="font-serif font-bold text-white mb-10"
            style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
          >
            Visítanos
          </h2>

          <div className="space-y-0">
            {hours.map((h, i) => (
              <div
                key={h.day}
                className={`flex items-center justify-between py-4 border-b transition-colors duration-200 ${
                  i === todayIndex
                    ? "border-[#C9A84C]/40"
                    : "border-[#222222]"
                }`}
              >
                <div className="flex items-center gap-3">
                  {i === todayIndex && (
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
                  )}
                  <span
                    className={`font-sans tracking-wide text-sm ${
                      i === todayIndex ? "text-[#C9A84C] font-semibold" : "text-[#A0A0A0]"
                    }`}
                    style={{ marginLeft: i === todayIndex ? 0 : "18px" }}
                  >
                    {h.day}
                    {i === todayIndex && (
                      <span className="ml-2 font-sans text-[9px] tracking-[0.3em] uppercase text-[#C9A84C]/70">
                        Hoy
                      </span>
                    )}
                  </span>
                </div>
                <span className={`font-sans text-sm ${i === todayIndex ? "text-white font-semibold" : "text-[#A0A0A0]"}`}>
                  {h.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: CTA & Address */}
        <div className="reveal reveal-delay-2 flex flex-col gap-8">
          <p className="font-serif italic text-[#A0A0A0] leading-relaxed" style={{ fontSize: "clamp(18px, 2vw, 24px)" }}>
            &ldquo;Tu imagen no puede esperar. Agenda ahora y descubre por qué somos el referente de la barbería premium en Tijuana.&rdquo;
          </p>

          <a
            href="https://wa.me/526641234567?text=Hola,%20quiero%20agendar%20una%20cita"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#C9A84C] text-[#0a0a0a] font-sans font-bold tracking-[0.2em] uppercase text-sm px-10 py-5 hover:bg-white transition-colors duration-300 w-full max-w-sm"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Agendar por WhatsApp
          </a>

          <div className="flex items-start gap-4 pt-4 border-t border-[#222222]">
            <LocationIcon className="w-5 h-5 text-[#C9A84C] mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-sans text-white text-sm font-semibold tracking-wide mb-1">
                Tijuana, Baja California, México
              </p>
              <p className="font-sans text-[#A0A0A0] text-sm">C.P. 22530</p>
            </div>
          </div>
        </div>
      </div>

      <div className="gold-divider absolute bottom-0 left-0 right-0" />
    </section>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.128 1.528 5.869L0 24l6.341-1.507A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.372l-.358-.213-3.766.895.952-3.666-.234-.374A9.775 9.775 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
    </svg>
  )
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
