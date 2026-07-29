import { fetchCategories } from '$lib/api';
import type { Category } from '$lib/types';

export async function load({ fetch }: { fetch: typeof globalThis.fetch }): Promise<{ categories: Category[]; error: string | null }> {
    try {
        const data = await fetchCategories(fetch);
        return { categories: data.categories || [], error: null };
    } catch (e) {
        console.error("Error loading categories:", e);
        return { categories: [], error: (e as Error).message };
    }
}
