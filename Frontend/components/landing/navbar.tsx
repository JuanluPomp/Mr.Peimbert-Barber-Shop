"use client"

import { useState, useEffect } from "react"

const links = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Galería", href: "#galeria" },
  { label: "Horarios", href: "#horarios" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#C9A84C]/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group"
            aria-label="Inicio"
          >
            <BarberPoleIcon className="w-7 h-7 text-[#C9A84C] group-hover:scale-110 transition-transform" />
            <span className="font-serif text-xl font-bold tracking-widest text-white uppercase">
              MR.<span className="text-[#C9A84C]">PEIMBERT</span>
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="font-sans text-sm tracking-[0.2em] uppercase text-[#A0A0A0] hover:text-[#C9A84C] transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/526641234567?text=Hola,%20quiero%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm tracking-[0.2em] uppercase px-5 py-2.5 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0a0a0a] transition-all duration-300 font-semibold"
            >
              Agendar Cita
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <span className={`block w-6 h-0.5 bg-[#C9A84C] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#C9A84C] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#C9A84C] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {links.map((link) => (
          <button
            key={link.href}
            onClick={() => handleNav(link.href)}
            className="font-serif text-4xl italic font-light text-white hover:text-[#C9A84C] transition-colors"
          >
            {link.label}
          </button>
        ))}
        <a
          href="https://wa.me/526641234567?text=Hola,%20quiero%20agendar%20una%20cita"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 font-sans text-sm tracking-[0.2em] uppercase px-8 py-3 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0a0a0a] transition-all duration-300 font-semibold"
          onClick={() => setMenuOpen(false)}
        >
          Agendar Cita
        </a>
      </div>
    </>
  )
}

function BarberPoleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="9" y="1" width="6" height="3" rx="1" fill="currentColor" />
      <rect x="9" y="20" width="6" height="3" rx="1" fill="currentColor" />
      <rect x="10" y="4" width="4" height="16" rx="0" fill="currentColor" opacity="0.2" />
      <path d="M10 4 L14 4 L14 7 L10 10 Z" fill="currentColor" opacity="0.8" />
      <path d="M10 10 L14 7 L14 13 L10 16 Z" fill="currentColor" opacity="0.4" />
      <path d="M10 16 L14 13 L14 20 L10 20 Z" fill="currentColor" opacity="0.8" />
    </svg>
  )
}
