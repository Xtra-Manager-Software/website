import { fetchAllArticles, fetchCategories } from '$lib/api';

export async function GET({ url, fetch }: { url: URL; fetch: typeof globalThis.fetch }) {
    const baseUrl = url.origin;

    const pages = ['', '/blog', '/projects', '/team'];

    try {
        const [articlesRes, categoriesRes] = await Promise.all([
            fetchAllArticles(fetch).catch(() => null),
            fetchCategories(fetch).catch(() => null)
        ]);

        if (articlesRes) {
            (articlesRes.articles || []).forEach((article) => {
                pages.push(`/blog/${article.slug}`);
            });
        }

        if (categoriesRes) {
            (categoriesRes.categories || []).forEach((category) => {
                pages.push(`/projects/${category.slug}`);
            });
        }
    } catch (e) {
        console.error("Failed to fetch dynamic routes for sitemap", e);
    }

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
        .map(
            (page) => `
    <url>
        <loc>${baseUrl}${page}</loc>
        <changefreq>daily</changefreq>
        <priority>${page === '' ? '1.0' : '0.8'}</priority>
    </url>`
        )
        .join('')}
</urlset>`.trim();

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=120'
        }
    });
}
