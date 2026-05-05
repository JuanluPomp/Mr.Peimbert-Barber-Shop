"use client"

import { useScrollReveal } from "@/hooks/useScrollReveal"

// Componente invisible — monta el observer de scroll reveal
export function ScrollReveal() {
  useScrollReveal()
  return null
}
