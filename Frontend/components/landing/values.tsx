"use client"

const values = [
  {
    number: "01",
    title: "Imagen",
    description:
      "Tu imagen es tu primera carta de presentación. Aquí la tratamos con la seriedad y el arte que merece.",
  },
  {
    number: "02",
    title: "Respeto",
    description:
      "Respeto a tu tiempo, a tu estilo y a tu persona. Cada cita comienza y termina con ese principio.",
  },
  {
    number: "03",
    title: "Fidelidad al Estilo",
    description:
      "Entendemos tu visión y la ejecutamos con precisión. Tu estilo es una firma — la mantenemos consistente.",
  },
  {
    number: "04",
    title: "Alta Exigencia",
    description:
      "No nos conformamos con lo bueno cuando podemos alcanzar lo extraordinario. Esa es la promesa Mr. Peimbert.",
  },
]

export function Values() {
  return (
    <section className="py-24 bg-[#111111] relative">
      <div className="gold-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="font-sans text-xs tracking-[0.4em] uppercase text-[#C9A84C] mb-4 block">
            Lo que nos define
          </span>
          <h2
            className="font-serif font-bold text-white"
            style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
          >
            Nuestros Pilares
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {values.map((value, i) => (
            <div
              key={value.number}
              className={`reveal reveal-delay-${i + 1} group relative p-8 border-t-2 border-[#222222] hover:border-[#C9A84C] transition-all duration-500 cursor-default`}
            >
              {/* Big number */}
              <span
                className="font-serif font-bold text-[#C9A84C]/10 group-hover:text-[#C9A84C]/20 transition-colors duration-500 block leading-none mb-6 select-none"
                style={{ fontSize: "clamp(60px, 6vw, 90px)" }}
              >
                {value.number}
              </span>

              <h3 className="font-serif font-semibold text-white text-2xl mb-4 group-hover:text-[#C9A84C] transition-colors duration-300">
                {value.title}
              </h3>

              <p className="font-sans text-[#A0A0A0] leading-relaxed text-sm">
                {value.description}
              </p>

              {/* Vertical divider */}
              <div className="absolute right-0 top-8 bottom-8 w-px bg-[#222222]" />
            </div>
          ))}
        </div>
      </div>

      <div className="gold-divider absolute bottom-0 left-0 right-0" />
    </section>
  )
}
