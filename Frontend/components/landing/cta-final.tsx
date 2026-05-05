"use client"

export function CtaFinal() {
  return (
    <section className="py-16 bg-[#111111] relative overflow-hidden text-center">
      <div className="gold-divider absolute top-0 left-0 right-0" />

      {/* Ghost text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="font-serif font-bold uppercase text-white/[0.025] leading-none whitespace-nowrap"
          style={{ fontSize: "clamp(100px, 22vw, 340px)" }}
        >
          COOL
        </span>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 reveal">
        <span className="font-sans text-xs tracking-[0.4em] uppercase text-[#C9A84C] mb-6 block">
          Tu próximo paso
        </span>

        <h2
          className="font-serif italic font-bold text-white mb-4"
          style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
        >
          Tu imagen, tu firma.
        </h2>

        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-[#C9A84C]" />
          <p className="font-serif italic text-[#C9A84C]" style={{ fontSize: "clamp(16px, 2vw, 22px)" }}>
            Keep Calm and Be Cool
          </p>
          <div className="h-px w-16 bg-[#C9A84C]" />
        </div>

      </div>

      <div className="gold-divider absolute bottom-0 left-0 right-0" />
    </section>
  )
}

export function Footer() {
  return (
    <footer className="py-12 bg-[#0a0a0a] text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <BarberPoleSmall className="w-5 h-9 text-[#C9A84C]" />
          <span className="font-serif font-bold tracking-widest text-white text-lg uppercase">
            MR.<span className="text-[#C9A84C]">PEIMBERT</span>
          </span>
        </div>

        <p className="font-serif italic text-[#A0A0A0] text-sm">
          Keep Calm and Be Cool
        </p>

        <div className="h-px w-24 bg-[#C9A84C]/30" />

        {/* Social */}
        <div className="flex items-center gap-6">
          <a
            href="https://facebook.com/Mr.peimbert"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs tracking-[0.2em] uppercase text-[#A0A0A0] hover:text-[#C9A84C] transition-colors"
          >
            Facebook
          </a>
          <span className="w-1 h-1 rounded-full bg-[#C9A84C]/40" />
          <a
            href="https://wa.me/526641234567"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs tracking-[0.2em] uppercase text-[#A0A0A0] hover:text-[#C9A84C] transition-colors"
          >
            WhatsApp
          </a>
        </div>

        <p className="font-sans text-[10px] tracking-[0.2em] text-[#A0A0A0]/50 uppercase">
          &copy; 2016–2025 Mr. Peimbert Barbershop · Tijuana, B.C. · Todos los derechos reservados
        </p>
      </div>
    </footer>
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

function BarberPoleSmall({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="0" width="8" height="4" rx="1.5" fill="currentColor" />
      <rect x="6" y="32" width="8" height="4" rx="1.5" fill="currentColor" />
      <rect x="7" y="4" width="6" height="28" rx="0.5" fill="currentColor" opacity="0.1" />
      <path d="M7 4 L13 4 L13 10 L7 14 Z" fill="currentColor" opacity="0.9" />
      <path d="M7 14 L13 10 L13 20 L7 24 Z" fill="currentColor" opacity="0.3" />
      <path d="M7 24 L13 20 L13 32 L7 32 Z" fill="currentColor" opacity="0.9" />
    </svg>
  )
}
