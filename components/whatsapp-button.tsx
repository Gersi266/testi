"use client"

import { MessageSquare } from "lucide-react"

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/355692070062"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors z-50 transform hover:scale-110 duration-300"
      aria-label="Contact us on WhatsApp"
    >
      <MessageSquare size={24} className="fill-white" />
    </a>
  )
}
