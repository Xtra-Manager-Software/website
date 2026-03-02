import { env } from '$env/dynamic/private';



export async function GET({ url }) {
    const baseUrl = url.origin; // Dynamically grab the domain serving the request

    const pages = [
        '',
        '/blog',
        '/projects',
        '/team'
    ];

    try {
        const [articlesRes, categoriesRes] = await Promise.all([
            fetch(`${env.API_URL}/api/articles`).catch(() => null),
            fetch(`${env.API_URL}/api/categories`).catch(() => null)
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
            'Cache-Control': 'public, max-age=120'
        }
    });
}
