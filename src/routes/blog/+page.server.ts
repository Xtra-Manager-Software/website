import { fetchArticles } from '$lib/api';
import type { Article, Pagination } from '$lib/types';

export async function load({ fetch, url }: { fetch: typeof globalThis.fetch; url: URL }): Promise<{ articles: Article[]; pagination: Pagination; error: string | null }> {
    const page = Number(url.searchParams.get('page')) || 1;
    const limit = Number(url.searchParams.get('limit')) || 9;

    try {
        const data = await fetchArticles(fetch, page, limit);
        const articles = (data.articles || []).sort((a, b) => b.updated_at - a.updated_at);

        return {
            articles,
            pagination: {
                page: data.pagination?.currentPage || page,
                limit: data.pagination?.limit || limit,
                totalPages: data.pagination?.totalPages || 1
            },
            error: null
        };
    } catch (e) {
        console.error(e);
        return { articles: [], pagination: { page, limit, totalPages: 1 }, error: (e as Error).message };
    }
}
