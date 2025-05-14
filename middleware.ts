import { type NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  // Get the preferred language from cookies or localStorage
  const language = request.cookies.get("language")?.value || "en"

  // You can add logic here to redirect based on language if needed
  // For now, we'll just pass through the request

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
