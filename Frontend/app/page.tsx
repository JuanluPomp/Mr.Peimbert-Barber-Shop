import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { About } from "@/components/landing/about"
import { Values } from "@/components/landing/values"
import { Services } from "@/components/landing/services"
import { Gallery } from "@/components/landing/gallery"
import { Barbers } from "@/components/landing/barbers"
import { WhyUs } from "@/components/landing/why-us"
import { Schedule } from "@/components/landing/schedule"
import { CtaFinal, Footer } from "@/components/landing/cta-final"
import { ScrollReveal } from "@/components/landing/scroll-reveal"
import { ChatWidget } from "@/components/chat/chat-widget"

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <ScrollReveal />
      <ChatWidget />
      <Navbar />
      <Hero />
      <About />
      <Values />
      <Services />
      <Gallery />
      <Barbers />
      <WhyUs />
      <Schedule />
      <CtaFinal />
      <Footer />
    </main>
  )
}
