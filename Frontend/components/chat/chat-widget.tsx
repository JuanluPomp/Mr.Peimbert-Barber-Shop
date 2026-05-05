"use client"

import { useRef, useEffect } from "react"
import { useChat } from "@/hooks/useChat"

export function ChatWidget() {
  const { open, setOpen, input, setInput, messages, isLoading, handleSubmit } = useChat()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, open])

  return (
    <>
      {/* Modal del chat */}
      {open && (
        <div className="fixed bottom-24 right-5 z-50 w-[340px] max-w-[calc(100vw-40px)] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-[var(--color-gold)]/20"
          style={{ background: "#111" }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-[var(--color-gold)]/20"
            style={{ background: "#0a0a0a" }}
          >
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/40 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" style={{ color: "var(--color-gold)" }}>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="currentColor" opacity="0"/>
                  <circle cx="12" cy="8" r="2" fill="currentColor"/>
                  <path d="M8 14a4 4 0 0 1 8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <rect x="2" y="2" width="20" height="20" rx="10" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-[#0a0a0a]" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-white font-sans leading-none">Asistente</p>
              <p className="text-xs mt-0.5" style={{ color: "var(--color-gold)" }}>Mr. Peimbert Barbershop</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              aria-label="Cerrar chat"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white/60">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Mensajes */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ maxHeight: "320px", minHeight: "200px" }}>
            {messages.length === 0 && (
              <div className="text-center py-6">
                <p className="text-white/40 text-sm font-sans">Hola, ¿en qué te puedo ayudar hoy?</p>
              </div>
            )}
            {messages.map((message) => {
              const text = message.parts
                ?.filter((p): p is { type: "text"; text: string } => p.type === "text")
                .map((p) => p.text)
                .join("") ?? ""

              return (
                <div
                  key={message.id}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm font-sans leading-relaxed ${
                      message.role === "user"
                        ? "rounded-br-sm"
                        : "rounded-bl-sm border border-[var(--color-gold)]/20"
                    }`}
                    style={{
                      background: message.role === "user"
                        ? "rgba(201,168,76,0.15)"
                        : "rgba(255,255,255,0.04)",
                      color: "#ffffff",
                      textShadow: "0 0 8px rgba(201,168,76,0.55), 0 0 2px rgba(201,168,76,0.3)",
                    }}
                  >
                    {text}
                  </div>
                </div>
              )
            })}
            {isLoading && (
              <div className="flex justify-start">
                <div className="px-3 py-2 rounded-2xl rounded-bl-sm border border-white/10" style={{ background: "rgba(255,255,255,0.05)" }}>
                  <span className="flex gap-1 items-center h-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] animate-bounce" style={{ animationDelay: "300ms" }} />
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 px-3 py-3 border-t border-[var(--color-gold)]/20" style={{ background: "#0a0a0a" }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu mensaje..."
              disabled={isLoading}
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder-white/30 font-sans outline-none focus:border-[var(--color-gold)]/50 transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="w-9 h-9 flex items-center justify-center rounded-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
              style={{ background: "var(--color-gold)" }}
              aria-label="Enviar mensaje"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-black">
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Burbuja flotante */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Cerrar chat" : "Abrir chat"}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95"
        style={{
          background: "var(--color-gold)",
          boxShadow: "0 0 20px rgba(201,168,76,0.4)",
        }}
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-black">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-black">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
    </>
  )
}
