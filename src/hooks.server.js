export async function handle({ event, resolve }) {
    const response = await resolve(event);

    // Cache-Control
    response.headers.set('Cache-Control', 'public, max-age=0, s-maxage=120, stale-while-revalidate=86400');

    // Content-Security-Policy — restrict sources to mitigate XSS
    response.headers.set('Content-Security-Policy', [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data: blob: https:",
        "connect-src 'self' https:",
        "frame-ancestors 'none'",
        "base-uri 'self'",
        "form-action 'self'"
    ].join('; '));

    // HSTS — force HTTPS for 1 year, include subdomains
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');

    // COOP — isolate top-level browsing context
    response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');

    // X-Frame-Options — prevent clickjacking (legacy fallback for CSP frame-ancestors)
    response.headers.set('X-Frame-Options', 'DENY');

    return response;
}
