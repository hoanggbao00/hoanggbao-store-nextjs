import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { jwtDecode } from 'jwt-decode';

// 1. Specify protected and public routes
const protectedRoutes = ['/admin'];
const publicRoutes = ['/admin/login', '/'];

export default async function middleware(req: NextRequest) {
  // 1. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  // 2. Return early if the current route is public
  if (isPublicRoute) {
    return NextResponse.next();
  }

  if (isProtectedRoute) {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value || '';

    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', req.nextUrl));
    }

    // 5. Decrypt the session from the cookie
    const payload = jwtDecode(token);
    const isAdmin = payload.sub?.split('|')[1] === 'ADMIN';

    if (!isAdmin) return NextResponse.redirect(new URL('/', req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
