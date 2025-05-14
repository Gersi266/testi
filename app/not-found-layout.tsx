import type React from "react"
export default function NotFoundLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">{children}</div>
}
