import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";

export const locales = ["en", "ja"];

// Get the preferred locale, similar to above or using a library
function getLocale(request: NextRequest) {
  const headers = {
    "accept-language": request.headers.get("accept-language")?.toString(),
  };
  const languages = new Negotiator({ headers }).languages();
  const defaultLocale = "en";

  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  let { pathname } = request.nextUrl;
  // If url is at the root, navigate it to the home page.
  pathname = pathname === "/" ? "/home" : pathname;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    // '/((?!_next).*)',
    // Optional: only run on root (/) URL
    "/",
  ],
};
