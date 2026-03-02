export async function handle({ event, resolve }) {
    const response = await resolve(event);

    // Set global Cache-Control headers
    // s-maxage=120: Vercel edge/CDN cache the response for 2 minutes
    // stale-while-revalidate=86400: Serve stale content for up to 1 day while refetching in the background
    response.headers.set('Cache-Control', 'public, max-age=0, s-maxage=120, stale-while-revalidate=86400');

    return response;
}
