export const config = {
    isr: {
        expiration: 300
    }
};
import { API_URL } from '$env/static/private';

export async function load({ fetch }) {
    try {
        const response = await fetch(`${API_URL}/api/categories`);
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
