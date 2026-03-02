import { API_URL, SITE_URL } from '$env/static/private';

export const config = {
    isr: {
        expiration: 300
    }
};

export async function GET() {
    const baseUrl = SITE_URL; // Used absolute domain from env

    const pages = [
        '',
        '/blog',
        '/projects',
        '/team'
    ];

    try {
        const [articlesRes, categoriesRes] = await Promise.all([
            fetch(`${API_URL}/api/articles`).catch(() => null),
            fetch(`${API_URL}/api/categories`).catch(() => null)
        ]);

        if (articlesRes && articlesRes.ok) {
            const data = await articlesRes.json();
            (data.articles || []).forEach(article => {
                pages.push(`/blog/${article.slug}`);
            });
        }

        if (categoriesRes && categoriesRes.ok) {
            const catData = await categoriesRes.json();
            (catData.categories || []).forEach(category => {
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
            'Cache-Control': 'public, max-age=600'
        }
    });
}
