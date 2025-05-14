"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"

interface UsePageContentResult {
  content: any
  loading: boolean
  error: string | null
  refetch: () => void
}

export function usePageContent(page: string): UsePageContentResult {
  const [content, setContent] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { language } = useLanguage()

  const fetchContent = async () => {
    setLoading(true)
    try {
      const response = await fetch(`/api/content-client?page=${page}&language=${language}`, {
        cache: "no-store",
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch content for ${page}`)
      }

      const data = await response.json()
      setContent(data)
    } catch (error) {
      console.error(`Error fetching content for ${page}:`, error)
      setError(error as Error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchContent()
  }, [page, language])

  return { content, loading, error, refetch: fetchContent }
}
