import { NextResponse } from "next/server"
import { clearContentCache } from "@/lib/content-loader"

export async function POST() {
  try {
    const result = await clearContentCache()
    return NextResponse.json({ success: true, message: "Content cache cleared successfully" })
  } catch (error) {
    console.error("Error clearing content cache:", error)
    return NextResponse.json({ success: false, error: "Failed to clear content cache" }, { status: 500 })
  }
}
