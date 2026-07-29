import { fetchCategories, fetchCategoryProjects } from '$lib/api';
import { toPlatform } from '$lib/transform';
import type { Platform, Category } from '$lib/types';

export async function load({ fetch, params, parent }: { fetch: typeof globalThis.fetch; params: { slug: string }; parent: () => Promise<{ categories: Category[] }> }): Promise<{ projects: Platform[]; category: string; categoryName: string | null; error: string | null }> {
    try {
        const { categories } = await parent();
        const cat = categories?.find((c) => c.slug === params.slug);
        const categoryName = cat?.name ?? null;

        const data = await fetchCategoryProjects(fetch, params.slug);
        return {
            projects: (data.projects || []).map((p) => toPlatform(p, { category_name: categoryName })),
            category: params.slug,
            categoryName,
            error: null
        };
    } catch (e) {
        console.error(e);
        return { projects: [], category: params.slug, categoryName: null, error: (e as Error).message };
    }
}
