import { fetchHighlights, fetchCategories } from '$lib/api';
import { toPlatform } from '$lib/transform';
import type { Platform, Category } from '$lib/types';

export async function load({ fetch }: { fetch: typeof globalThis.fetch }): Promise<{ platforms: Platform[]; categories: Category[]; error: string | null }> {
    try {
        const [data, catRes] = await Promise.all([
            fetchHighlights(fetch),
            fetchCategories(fetch)
        ]);

        return {
            platforms: data.projects.map((p) => toPlatform(p)),
            categories: catRes.categories || [],
            error: null
        };
    } catch (e) {
        console.error(e);
        return { platforms: [], categories: [], error: (e as Error).message };
    }
}
