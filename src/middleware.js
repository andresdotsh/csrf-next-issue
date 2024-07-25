import { NextResponse } from 'next/server'

import Tokens from 'csrf' // 👈 💥 import causing the error

export function middleware(request) {
  const response = NextResponse.next()

  return response
}

export const config = {
  matcher: [
    /*
      Match all request paths except for the ones starting with:
        - api (API routes)
        - _next/static (static files)
        - _next/image (image optimization files)
        - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
