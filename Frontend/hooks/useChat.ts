"use client"

import { useState } from "react"
import { useChat as useAiChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"

// Encapsula el estado y la lógica del chat widget
export function useChat() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")

  const { messages, sendMessage, status } = useAiChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  })

  const isLoading = status === "streaming" || status === "submitted"

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    sendMessage({ text: input.trim() })
    setInput("")
  }

  return { open, setOpen, input, setInput, messages, isLoading, handleSubmit }
}
