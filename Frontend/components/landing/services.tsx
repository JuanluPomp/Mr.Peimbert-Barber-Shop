"use client"

import { useRef, useEffect, useState } from "react"

const services = [
  {
    icon: ScissorsIcon,
    name: "Corte Clásico",
    description: "El corte perfecto que define tu silueta. Técnica precisa, acabado impecable.",
  },
  {
    icon: BeardIcon,
    name: "Corte + Barba",
    description: "El combo completo. Cabello y barba en perfecta armonía con tu estilo.",
  },
  {
    icon: RazorIcon,
    name: "Rasurado con Navaja",
    description: "La experiencia clásica del barbershop. Navaja caliente, piel perfecta.",
  },
  {
    icon: TrimIcon,
    name: "Perfilado de Barba",
    description: "Define los contornos de tu barba con precisión quirúrgica.",
  },
  {
    icon: SpaIcon,
    name: "Facial / Spa",
    description: "Tratamiento premium para tu piel. Limpieza profunda y rejuvenecimiento.",
  },
  {
    icon: ColorIcon,
    name: "Tinte & Decoloración",
    description: "Transforma tu look con color profesional y técnicas de vanguardia.",
  },
  {
    icon: KidIcon,
    name: "Corte Infantil",
    description: "El primer gran corte de tu hijo, en manos expertas y ambiente amigable.",
  },
  {
    icon: VipIcon,
    name: "Experiencia VIP",
    description: "El paquete definitivo: Corte + Barba + Facial. La máxima expresión Mr. Peimbert.",
    featured: true,
  },
]

export function Services() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [cardWidth, setCardWidth] = useState(0)

  // Calcular ancho exacto de cada card para mostrar 4 a la vez
  useEffect(() => {
    const update = () => {
      if (scrollRef.current) setCardWidth(scrollRef.current.offsetWidth / 4)
    }
    update()
    const ro = new ResizeObserver(update)
    if (scrollRef.current) ro.observe(scrollRef.current)
    return () => ro.disconnect()
  }, [])

  function scrollTo(dir: "prev" | "next") {
    if (!scrollRef.current || !cardWidth) return
    scrollRef.current.scrollBy({ left: dir === "next" ? cardWidth : -cardWidth, behavior: "smooth" })
  }

  return (
    <section id="servicios" className="py-14 bg-[#0a0a0a] relative">
      <div className="gold-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="font-sans text-xs tracking-[0.4em] uppercase text-[#C9A84C] mb-4 block">
            Lo que ofrecemos
          </span>
          <h2
            className="font-serif font-bold text-white"
            style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
          >
            Nuestros Servicios
          </h2>
          <p className="font-sans text-[#A0A0A0] mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Cada servicio es una obra de arte. Cada cliente, un caballero.
          </p>
        </div>

        {/* Wrapper relativo — las flechas se posicionan en los extremos */}
        <div className="relative px-10">

          {/* Flecha izquierda */}
          <button
            onClick={() => scrollTo("prev")}
            aria-label="Servicios anteriores"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center border border-[#C9A84C]/40 text-[#C9A84C] text-2xl hover:bg-[#C9A84C] hover:text-[#0a0a0a] hover:border-[#C9A84C] transition-all duration-300"
            style={{ background: "#0a0a0a" }}
          >
            ‹
          </button>

          {/* Flecha derecha */}
          <button
            onClick={() => scrollTo("next")}
            aria-label="Más servicios"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center border border-[#C9A84C]/40 text-[#C9A84C] text-2xl hover:bg-[#C9A84C] hover:text-[#0a0a0a] hover:border-[#C9A84C] transition-all duration-300"
            style={{ background: "#0a0a0a" }}
          >
            ›
          </button>

          {/* Scroll container */}
          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide"
            style={{ scrollSnapType: "x mandatory" }}
          >
            <div className="flex gap-px bg-[#1a1a1a]">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <div
                    key={service.name}
                    data-card
                    style={{
                      scrollSnapAlign: "start",
                      width: cardWidth > 0 ? `${cardWidth}px` : undefined,
                      minWidth: cardWidth > 0 ? `${cardWidth}px` : "25%",
                      flexShrink: 0,
                    }}
                    className={`service-card relative group bg-[#111111] p-8 overflow-hidden cursor-default transition-all duration-300 hover:-translate-y-1 hover:bg-[#161616] ${
                      service.featured
                        ? "border border-[#C9A84C]/30 hover:border-[#C9A84C]"
                        : "hover:border hover:border-[#C9A84C]/30"
                    }`}
                  >
                    {service.featured && (
                      <span className="absolute top-4 right-4 font-sans text-[9px] tracking-[0.3em] uppercase text-[#C9A84C] bg-[#C9A84C]/10 px-2 py-1">
                        VIP
                      </span>
                    )}
                    <Icon className="w-8 h-8 text-[#C9A84C] mb-6 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-serif font-semibold text-white text-xl mb-3 group-hover:text-[#C9A84C] transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="font-sans text-[#A0A0A0] text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10 reveal">
          <a
            href="https://wa.me/526641234567?text=Hola,%20quiero%20saber%20los%20precios"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-sans text-sm tracking-[0.2em] uppercase px-8 py-4 bg-[#C9A84C] text-[#0a0a0a] hover:bg-white transition-colors duration-300 font-bold"
          >
            Consultar Precios
          </a>
        </div>
      </div>

      <div className="gold-divider absolute bottom-0 left-0 right-0" />
    </section>
  )
}

/* SVG Icons */
function ScissorsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  )
}

function BeardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="4" />
      <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
      <path d="M9 17c0 2 1.5 3 3 3s3-1 3-3" />
    </svg>
  )
}

function RazorIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3l18 18" /><path d="M4 4h4v4L4 4z" />
      <rect x="8" y="8" width="13" height="8" rx="2" />
    </svg>
  )
}

function TrimIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2" />
      <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2" />
    </svg>
  )
}

function SpaIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function ColorIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 1 0 10 10" />
      <path d="M12 2v10l4.24 4.24" />
      <circle cx="18" cy="18" r="4" />
      <line x1="18" y1="14" x2="18" y2="18" />
      <line x1="18" y1="18" x2="22" y2="18" />
    </svg>
  )
}

function KidIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
      <path d="M9 5c0-1.1.9-2 2-2s2 .9 2 2" />
    </svg>
  )
}

function VipIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
