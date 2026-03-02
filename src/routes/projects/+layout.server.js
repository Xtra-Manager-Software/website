import { env } from '$env/dynamic/private';

export async function load({ fetch }) {
    try {
        const response = await fetch(`${env.API_URL}/api/categories`);
        if (!response.ok) throw new Error("Failed to fetch categories");

        const data = await response.json();
        return {
            categories: data.categories || [],
            error: null
        };
    } catch (e) {
        console.error("Error loading categories:", e);
        return {
            categories: [],
            error: e.message
        };
    }
}
