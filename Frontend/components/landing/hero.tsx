"use client"

import { useEffect, useRef } from "react"

export function Hero() {
  const svgRef = useRef<SVGSVGElement>(null)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Ghost text background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span
          className="font-serif font-bold uppercase text-white/[0.04] leading-none text-center px-4"
          style={{ fontSize: "clamp(48px, 12vw, 180px)", letterSpacing: "0.05em" }}
        >
          BARBER SHOP
        </span>
      </div>

      {/* Main content grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center min-h-screen">
        {/* Left: Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 order-2 lg:order-1">
          {/* Barber pole + brand */}
          <div className="flex items-center gap-4 animate-[fadeSlideUp_0.8s_ease_forwards]">
            <BarberPoleFullIcon className="w-8 h-16 text-[#C9A84C]" />
            <div className="gold-divider w-12" style={{ height: "1px" }} />
          </div>

          <h1
            className="font-serif font-bold text-white leading-[0.9] animate-[fadeSlideUp_0.9s_ease_forwards]"
            style={{ fontSize: "clamp(52px, 9vw, 130px)" }}
          >
            MR.<br />
            <span className="text-[#C9A84C]">PEIMBERT</span>
          </h1>

          {/* Gold line */}
          <div className="flex items-center gap-4 animate-[fadeSlideUp_1s_ease_forwards]">
            <div className="h-px w-16 bg-[#C9A84C]" />
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#C9A84C]">
              Barbershop · Haircuts &amp; Spa
            </span>
            <div className="h-px w-16 bg-[#C9A84C]" />
          </div>

          <p
            className="font-serif italic text-[#A0A0A0] animate-[fadeSlideUp_1.1s_ease_forwards]"
            style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}
          >
            &ldquo;Keep Calm and Be Cool&rdquo;
          </p>

          <p className="font-sans text-[#A0A0A0] tracking-wide text-sm max-w-sm animate-[fadeSlideUp_1.2s_ease_forwards]">
            El estándar más alto de Tijuana desde 2016
          </p>

          {/* CTA WhatsApp */}
          <a
            href="https://wa.me/526641234567?text=Hola,%20quiero%20agendar%20una%20cita"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-3 bg-[#C9A84C] text-[#0a0a0a] font-sans font-bold tracking-[0.2em] uppercase text-sm px-8 py-4 hover:bg-white transition-colors duration-300 animate-[fadeSlideUp_1.3s_ease_forwards]"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Agendar por WhatsApp
          </a>
        </div>

        {/* Right: Neon SVG Gentleman */}
        <div className="flex items-center justify-center order-1 lg:order-2 animate-[fadeSlideUp_0.7s_ease_forwards]">
          <NeonGentlemanSVG />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-[fadeSlideUp_1.5s_ease_forwards]">
        <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#A0A0A0]">Scroll</span>
        <div className="w-px h-10 bg-[#C9A84C] animate-[scrollBounce_1.5s_ease-in-out_infinite]" />
      </div>
    </section>
  )
}

function NeonGentlemanSVG() {
  return (
    <div
      className="relative w-full max-w-[220px] md:max-w-[280px] neon-svg rounded-3xl overflow-hidden"
      style={{ isolation: "isolate" }}
    >
      {/* Halo de luz roja detrás de la imagen */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(ellipse 70% 75% at 50% 48%, rgba(255,45,45,0.22) 0%, transparent 68%)",
        }}
      />
      <img
        src="/images/logo.jpeg"
        alt="Logo neón del gentleman Mr. Peimbert"
        className="w-full h-auto select-none"
        draggable={false}
        style={{
          mixBlendMode: "screen",
          filter: "drop-shadow(0 0 12px rgba(255,45,45,0.7)) drop-shadow(0 0 28px rgba(255,45,45,0.4))",
        }}
      />
    </div>
  )
}

function BarberPoleFullIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="0" width="12" height="6" rx="2" fill="currentColor" />
      <rect x="10" y="58" width="12" height="6" rx="2" fill="currentColor" />
      <rect x="12" y="6" width="8" height="52" rx="1" fill="currentColor" opacity="0.15" />
      <path d="M12 6 L20 6 L20 16 L12 22 Z" fill="currentColor" opacity="0.9" />
      <path d="M12 22 L20 16 L20 31 L12 37 Z" fill="currentColor" opacity="0.35" />
      <path d="M12 37 L20 31 L20 46 L12 52 Z" fill="currentColor" opacity="0.9" />
      <path d="M12 52 L20 46 L20 58 L12 58 Z" fill="currentColor" opacity="0.35" />
    </svg>
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
