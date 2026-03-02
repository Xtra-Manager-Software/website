import { env } from '$env/dynamic/private';

export async function load({ fetch }) {
    try {
        const [response, catRes] = await Promise.all([
            fetch(`${env.API_URL}/api/projects/highlights`),
            fetch(`${env.API_URL}/api/categories`)
        ]);

        if (!response.ok) throw new Error("Failed to fetch highlights");
        if (!catRes.ok) throw new Error("Failed to fetch categories");

        const data = await response.json();
        const catData = await catRes.json();

        const platforms = data.projects.map((p) => ({
            name: p.name,
            description: p.description,
            icon: null,
            logo_url: p.logo_url,
            tags: p.tags,
            sourceLink: p.project_url,
            downloadLink: p.download_url,
            version: p.version,
            updated_at: p.updated_at || p.created_at,
        }));

        return {
            platforms,
            categories: catData.categories || [],
            error: null
        };
    } catch (e) {
        console.error(e);
        return {
            platforms: [],
            error: e.message
        };
    }
}
