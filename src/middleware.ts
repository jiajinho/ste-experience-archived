import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { get } from '@vercel/edge-config';

export async function middleware(request: NextRequest) {
  const env = process.env.NODE_ENV;

  if (env === "development") return NextResponse.next();

  //Production
  const maintenance = await get<boolean>('steEncounterIsInMaintenanceMode');

  if (maintenance && request.nextUrl.pathname !== "/maintenance") {
    return NextResponse.redirect(`${request.nextUrl.origin}/maintenance`);
  }
  else if (!maintenance && request.nextUrl.pathname === "/maintenance") {
    return NextResponse.redirect(request.nextUrl.origin);
  }
  else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)"
};
