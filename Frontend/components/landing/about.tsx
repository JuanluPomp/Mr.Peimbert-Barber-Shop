"use client"

export function About() {
  return (
    <section id="nosotros" className="py-28 bg-[#0a0a0a] relative overflow-hidden">
      <div className="gold-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div className="reveal">
          <span className="font-sans text-xs tracking-[0.4em] uppercase text-[#C9A84C] mb-6 block">
            Nuestra Historia
          </span>

          <h2
            className="font-serif font-bold text-white leading-tight mb-8"
            style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
          >
            No buscamos la{" "}
            <em className="text-[#C9A84C] not-italic italic">perfección.</em>
            <br />
            Vivimos la{" "}
            <em className="text-[#C9A84C] not-italic italic">exigencia.</em>
          </h2>

          <div className="h-px w-16 bg-[#C9A84C] mb-8" />

          <p className="font-sans text-[#A0A0A0] leading-relaxed mb-6 text-base">
            Desde 2016, Mr. Peimbert Barbershop ha sido más que un lugar para cortarse el cabello en Tijuana. Somos un espacio donde la imagen personal se convierte en declaración de identidad. Cada visita es una experiencia diseñada para hombres que entienden que la presentación no es vanidad — es respeto propio.
          </p>

          <p className="font-sans text-[#A0A0A0] leading-relaxed mb-10 text-base">
            Nuestros barberos son artesanos del estilo. Trabajamos con los más altos estándares de la industria, en un ambiente que fusiona lujo urbano con calidez auténtica. No existe el cliente de paso aquí — existen caballeros que entienden su valor.
          </p>

          <a
            href="https://wa.me/526641234567?text=Hola,%20quiero%20agendar%20una%20cita"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-sans text-sm tracking-[0.2em] uppercase px-6 py-3 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0a0a0a] transition-all duration-300 font-semibold"
          >
            Conoce Nuestro Equipo
          </a>
        </div>

        {/* Right: Animated Badge */}
        <div className="flex items-center justify-center reveal reveal-delay-2">
          <AnimatedBadge />
        </div>
      </div>

      <div className="gold-divider absolute bottom-0 left-0 right-0" />
    </section>
  )
}

function AnimatedBadge() {
  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      {/* Outer ring */}
      <div
        className="absolute inset-0 rounded-full border border-[#C9A84C]/30"
        style={{ animation: "spinSlow 20s linear infinite" }}
      >
        {/* Ring dots */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#C9A84C] rounded-full"
            style={{
              top: "50%",
              left: "50%",
              transform: `rotate(${i * 30}deg) translateY(-128px) translateX(-2px)`,
            }}
          />
        ))}
      </div>

      {/* Middle ring */}
      <div
        className="absolute w-52 h-52 rounded-full border border-[#C9A84C]/20"
        style={{ animation: "spinSlow 14s linear infinite reverse" }}
      />

      {/* Inner ring */}
      <div className="absolute w-44 h-44 rounded-full border border-[#C9A84C]/40" />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-2 text-center">
        <BarberPoleCenter className="w-10 h-16 text-[#C9A84C] mb-1" />
        <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#C9A84C] font-semibold">
          MR.PEIMBERT
        </span>
        <div className="h-px w-16 bg-[#C9A84C]/50" />
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#A0A0A0]">
          SINCE 2016
        </span>
        <div className="h-px w-16 bg-[#C9A84C]/50" />
        <span className="font-sans text-[8px] tracking-[0.25em] uppercase text-[#A0A0A0]">
          HAIRCUTS &amp; SPA
        </span>
      </div>
    </div>
  )
}

function BarberPoleCenter({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="0" width="16" height="7" rx="3" fill="currentColor" />
      <rect x="12" y="57" width="16" height="7" rx="3" fill="currentColor" />
      <rect x="14" y="7" width="12" height="50" rx="1" fill="currentColor" opacity="0.1" />
      <path d="M14 7 L26 7 L26 18 L14 25 Z" fill="currentColor" opacity="0.9" />
      <path d="M14 25 L26 18 L26 34 L14 41 Z" fill="currentColor" opacity="0.3" />
      <path d="M14 41 L26 34 L26 50 L14 57 Z" fill="currentColor" opacity="0.9" />
      <path d="M14 57 L26 50 L26 57 Z" fill="currentColor" opacity="0.3" />
    </svg>
  )
}
