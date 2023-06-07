import { NextRequest, NextResponse } from 'next/server'

const SingInURL = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  if (!token) {
    return NextResponse.redirect(SingInURL, {
      headers: {
        'Set-Cookie': `redirectTo=${request.url}; Path=/; HttpOnly; maxAge=20;`,
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/memories/:path*',
}
