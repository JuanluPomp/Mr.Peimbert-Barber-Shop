"use client"

const barbers = [
  {
    id: 1,
    name: "Carlos Peimbert",
    role: "Fundador & Master Barber",
    phrase: "La excelencia no es un acto, es un hábito.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&q=80&crop=face"
  },
  {
    id: 2,
    name: "Miguel Ángel",
    role: "Senior Barber",
    phrase: "Cada cabeza es un lienzo único.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&q=80&crop=face"
  },
  {
    id: 3,
    name: "Eduardo Reyes",
    role: "Barber & Stylist",
    phrase: "El estilo es la forma de decir quién eres sin hablar.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&q=80&crop=face"
  },
  {
    id: 4,
    name: "Daniel Torres",
    role: "Barber Specialist",
    phrase: "Un buen corte cambia tu día, un gran corte cambia tu vida.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&q=80&crop=face"
  },
]

export function Barbers() {
  return (
    <section id="barberos" className="py-28 bg-[#0d0d0d] relative">
      <div className="gold-divider absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="font-sans text-xs tracking-[0.4em] uppercase text-[#C9A84C] mb-4 block">
            El Equipo
          </span>
          <h2
            className="font-serif italic font-bold text-white"
            style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
          >
            Nuestros Barberos
          </h2>
          <p className="font-sans text-[#A0A0A0] mt-4 text-sm max-w-md mx-auto">
            Artesanos del estilo con años de experiencia y pasión por su oficio.
          </p>
        </div>

        {/* Barbers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {barbers.map((barber, i) => (
            <div
              key={barber.id}
              className={`reveal reveal-delay-${(i % 4) + 1} group relative`}
            >
              <div className="bg-[#111] border border-white/5 group-hover:border-[#C9A84C]/30 rounded-lg overflow-hidden transition-all duration-500 group-hover:transform group-hover:-translate-y-1">
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={barber.image}
                    alt={barber.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-60" />
                  
                  {/* Gold corner accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-1 bg-[#C9A84C]/0 group-hover:bg-[#C9A84C] transition-all duration-500 transform rotate-45 origin-right translate-x-2 -translate-y-2" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 text-center">
                  <h3 className="font-serif text-white font-semibold text-base md:text-lg leading-tight">
                    {barber.name}
                  </h3>
                  <p className="font-sans text-[#C9A84C] text-[10px] md:text-xs tracking-[0.2em] uppercase mt-1">
                    {barber.role}
                  </p>
                  
                  {/* Divider */}
                  <div className="w-8 h-px bg-[#C9A84C]/30 mx-auto my-3" />
                  
                  {/* Quote */}
                  <p className="font-serif italic text-[#A0A0A0] text-xs md:text-sm leading-relaxed">
                    &ldquo;{barber.phrase}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="gold-divider absolute bottom-0 left-0 right-0" />
    </section>
  )
}
