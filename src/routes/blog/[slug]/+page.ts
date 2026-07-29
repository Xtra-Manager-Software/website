import type { Article } from '$lib/types';

export const ssr = false;

export async function load({ fetch, params }: { fetch: typeof globalThis.fetch; params: { slug: string } }): Promise<{ article: Article | null; htmlContent: string; error: string | null }> {
    try {
        const res = await fetch(`/api/articles/${params.slug}`);
        if (!res.ok) throw new Error(`Failed to load article: ${res.statusText}`);

        const article = await res.json() as Article;
        if (article.description === "Null Description") {
            article.description = "";
        }

        return { article, htmlContent: "", error: null };
    } catch (e) {
        console.error(e);
        return { article: null, htmlContent: "", error: (e as Error).message };
    }
}
