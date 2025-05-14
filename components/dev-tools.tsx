"use client"

import { useContent } from "@/contexts/content-context"
import { useState } from "react"

export function DevTools() {
  const { refreshContent } = useContent()
  const [isRefreshing, setIsRefreshing] = useState(false)

  if (process.env.NODE_ENV !== "development") {
    return null
  }

  const handleRefresh = async () => {
    setIsRefreshing(true)
    try {
      await refreshContent()
    } finally {
      setIsRefreshing(false)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={handleRefresh}
        disabled={isRefreshing}
        className="bg-red-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-600 transition-colors disabled:opacity-50"
      >
        {isRefreshing ? "Refreshing..." : "Refresh Content"}
      </button>
    </div>
  )
}
