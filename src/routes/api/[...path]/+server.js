import { env } from '$env/dynamic/private';
import { error } from '@sveltejs/kit';

async function handleProxy({ request, url }) {
    const targetUrl = new URL(url.pathname, env.API_URL);
    targetUrl.search = url.search;

    try {
        const headers = new Headers(request.headers);
        headers.delete('host');
        headers.delete('origin');
        headers.delete('referer');
        
        const proxyOptions = {
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

export const GET = handleProxy;
export const POST = handleProxy;
export const PUT = handleProxy;
export const PATCH = handleProxy;
export const DELETE = handleProxy;
export const OPTIONS = handleProxy;
