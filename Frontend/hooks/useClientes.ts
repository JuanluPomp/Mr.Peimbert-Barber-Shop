"use client"

import { useQuery } from "@tanstack/react-query"
import { clientesApi } from "@/lib/api"

// Data fetching de clientes — activo cuando el backend esté disponible
export function useClientes() {
  return useQuery({
    queryKey: ["clientes"],
    queryFn: () => clientesApi.getAll(),
    enabled: false, // desactivado hasta que el backend esté listo
  })
}
