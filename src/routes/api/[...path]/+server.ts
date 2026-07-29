import { env } from '$env/dynamic/private';
import { error } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

async function handleProxy({ request, url }: { request: Request; url: URL }) {
    const targetUrl = new URL(url.pathname, env.API_URL);
    targetUrl.search = url.search;

    try {
        const headers = new Headers(request.headers);
        headers.delete('host');
        headers.delete('origin');
        headers.delete('referer');

        const proxyOptions: RequestInit & { duplex?: string } = {
            method: request.method,
            headers,
        };

        if (request.method !== 'GET' && request.method !== 'HEAD') {
            proxyOptions.body = request.body;
            proxyOptions.duplex = 'half';
        }

        const response = await fetch(targetUrl.toString(), proxyOptions);

        return new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: new Headers(response.headers)
        });
    } catch (err) {
        console.error('API Proxy Error:', err);
        throw error(500, 'Error communicating with API backend');
    }
}

export const GET: RequestHandler = handleProxy;
export const POST: RequestHandler = handleProxy;
export const PUT: RequestHandler = handleProxy;
export const PATCH: RequestHandler = handleProxy;
export const DELETE: RequestHandler = handleProxy;
export const OPTIONS: RequestHandler = handleProxy;
