// Fetch helpers — apuntarán al backend Express en fase posterior
// Por ahora solo define la estructura base y los endpoints esperados

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? ""

async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...init,
  })

  if (!res.ok) {
    throw new Error(`API error ${res.status}: ${path}`)
  }

  return res.json() as Promise<T>
}

// Clientes
export const clientesApi = {
  getAll: () => apiFetch("/api/clientes"),
  getById: (id: string) => apiFetch(`/api/clientes/${id}`),
}

// Citas
export const citasApi = {
  getAll: () => apiFetch("/api/citas"),
  create: (data: unknown) =>
    apiFetch("/api/citas", { method: "POST", body: JSON.stringify(data) }),
}

// Negocio (horarios, info pública)
export const negocioApi = {
  getInfo: () => apiFetch("/api/negocio"),
}
