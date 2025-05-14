import { type NextRequest, NextResponse } from "next/server"
import { loadContent } from "@/lib/content-loader"

export async function GET(request: NextRequest) {
  try {
    // Get the page parameter from the URL
    const { searchParams } = new URL(request.url)
    const page = searchParams.get("page")
    const language = searchParams.get("language") || "en"

    if (!page) {
      return NextResponse.json({ error: "Page parameter is required" }, { status: 400 })
    }

    // Get content using our content loader
    try {
      const content = await loadContent(page, language)
      return NextResponse.json(content)
    } catch (error) {
      console.error(`Error loading content for ${page}:`, error)
      return NextResponse.json({ error: `Content not found for ${page}` }, { status: 404 })
    }
  } catch (error) {
    console.error("Error in content API:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
