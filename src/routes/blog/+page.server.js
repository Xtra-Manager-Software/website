export const config = {
    isr: {
        expiration: 300
    }
};
import { API_URL } from '$env/static/private';

export async function load({ fetch, url }) {
    const page = Number(url.searchParams.get('page')) || 1;
    // We default to 9 items since the grid uses 3 columns, making it visually balanced.
    const limit = Number(url.searchParams.get('limit')) || 9;

    try {
        const response = await fetch(`${API_URL}/api/articles?page=${page}&limit=${limit}`);
        if (!response.ok) throw new Error("Failed to fetch articles");
        const data = await response.json();

        let articles = data.articles || [];
        // Optional sorting if API doesn't handle it, though it preferably should.
        articles.sort((a, b) => b.updated_at - a.updated_at);

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
        return {
            articles: [],
            pagination: { page, limit, totalPages: 1 },
            error: e.message
        };
    }
}
