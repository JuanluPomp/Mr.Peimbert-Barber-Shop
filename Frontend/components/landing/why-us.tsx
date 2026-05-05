"use client"

const reasons = [
  {
    number: "8+",
    unit: "Años",
    title: "Experiencia en Tijuana",
    description:
      "Desde 2016 hemos perfeccionado cada técnica, cada servicio, cada detalle. La experiencia no se improvisa — se construye corte a corte.",
  },
  {
    number: "100%",
    unit: "Calidad",
    title: "Altos Estándares",
    description:
      "Productos premium, herramientas de primera y barberos certificados. No aceptamos menos que la excelencia en cada silla.",
  },
  {
    number: "1",
    unit: "Estilo de vida",
    title: "Más que una Barbería",
    description:
      "Mr. Peimbert no es solo donde te cortas el cabello — es la comunidad de hombres que saben que cuidar su imagen es parte de quiénes son.",
  },
]

export function WhyUs() {
  return (
    <section className="py-28 bg-[#111111] relative">
      <div className="gold-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="font-sans text-xs tracking-[0.4em] uppercase text-[#C9A84C] mb-4 block">
            La diferencia
          </span>
          <h2
            className="font-serif font-bold text-white"
            style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
          >
            ¿Por qué Elegirnos?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-0">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`reveal reveal-delay-${i + 1} group relative p-10 border-t-2 border-[#222222] hover:border-[#C9A84C] transition-all duration-500`}
            >
              {/* Big stat */}
              <div className="flex items-end gap-2 mb-6">
                <span
                  className="font-serif font-bold text-[#C9A84C] leading-none"
                  style={{ fontSize: "clamp(48px, 5vw, 72px)" }}
                >
                  {reason.number}
                </span>
                <span className="font-sans text-sm tracking-[0.2em] uppercase text-[#A0A0A0] pb-3">
                  {reason.unit}
                </span>
              </div>

              <h3 className="font-serif font-semibold text-white text-xl mb-4 group-hover:text-[#C9A84C] transition-colors duration-300">
                {reason.title}
              </h3>

              <p className="font-sans text-[#A0A0A0] leading-relaxed text-sm">
                {reason.description}
              </p>

              {/* Divider between columns on desktop */}
              {i < reasons.length - 1 && (
                <div className="hidden md:block absolute right-0 top-10 bottom-10 w-px bg-[#222222]" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="gold-divider absolute bottom-0 left-0 right-0" />
    </section>
  )
}
