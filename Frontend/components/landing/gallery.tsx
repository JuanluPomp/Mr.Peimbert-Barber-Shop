"use client"

const galleryItems = [
  { 
    id: 1, 
    label: "Corte Clásico", 
    tall: true,
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&h=900&fit=crop&q=80"
  },
  { 
    id: 2, 
    label: "Rasurado con Navaja", 
    tall: false,
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=400&fit=crop&q=80"
  },
  { 
    id: 3, 
    label: "Estilo & Textura", 
    tall: false,
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=400&fit=crop&q=80"
  },
  { 
    id: 4, 
    label: "Corte + Barba", 
    tall: true,
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=900&fit=crop&q=80"
  },
  { 
    id: 5, 
    label: "Perfilado Premium", 
    tall: false,
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&h=400&fit=crop&q=80"
  },
  { 
    id: 6, 
    label: "Experiencia VIP", 
    tall: false,
    image: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=600&h=400&fit=crop&q=80"
  },
]

export function Gallery() {
  return (
    <section id="galeria" className="py-28 bg-[#0a0a0a] relative">
      <div className="gold-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="font-sans text-xs tracking-[0.4em] uppercase text-[#C9A84C] mb-4 block">
            Nuestro Trabajo
          </span>
          <h2
            className="font-serif italic font-bold text-white"
            style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
          >
            Cada Corte, Una Firma
          </h2>
          <p className="font-sans text-[#A0A0A0] mt-4 text-sm">
            El arte habla por sí mismo.
          </p>
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              className={`reveal reveal-delay-${(i % 4) + 1} group relative overflow-hidden ${item.tall ? "row-span-2" : ""}`}
              style={{ minHeight: item.tall ? "420px" : "200px" }}
            >
              {/* Real image */}
              <div className="absolute inset-0">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Gold overlay on hover */}
              <div className="absolute inset-0 bg-[#C9A84C]/0 group-hover:bg-[#C9A84C]/10 transition-all duration-500" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#C9A84C] font-semibold">
                  {item.label}
                </span>
              </div>

              {/* Border on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[#C9A84C]/40 transition-colors duration-400 pointer-events-none" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <p className="font-sans text-[#A0A0A0] text-sm tracking-wide">
            Síguenos en Facebook ·{" "}
            <a
              href="https://facebook.com/Mr.peimbert"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A84C] hover:text-white transition-colors"
            >
              @Mr.peimbert
            </a>
          </p>
        </div>
      </div>

      <div className="gold-divider absolute bottom-0 left-0 right-0" />
    </section>
  )
}
