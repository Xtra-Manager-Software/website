import { env } from '$env/dynamic/private';

export async function load({ fetch, params, parent }) {
    try {
        const { slug } = params;

        // Wait for the parent layout's data to get categories cache if needed
        const { categories } = await parent();
        let targetCategoryName = null;

        if (categories && categories.length > 0) {
            const cat = categories.find(c => c.slug === slug);
            if (cat) targetCategoryName = cat.name;
        }

        const response = await fetch(`${env.API_URL}/api/projects/category/${slug}`);
        if (!response.ok) {
            if (response.status === 404) {
                // Let project grid handle empty array gracefully
                return { projects: [], category: slug, error: null };
            }
            throw new Error(`Failed to fetch category projects: ${response.statusText}`);
        }

        const data = await response.json();

        const transformedProjects = (data.projects || []).map((p) => ({
            name: p.name,
            description: p.description,
            icon: null,
            logo_url: p.logo_url,
            tags: p.tags,
            sourceLink: p.project_url,
            downloadLink: p.download_url,
            version: p.version,
            updated_at: p.updated_at || p.created_at,
            category_name: targetCategoryName // Provide direct text for the label
        }));

        return {
            projects: transformedProjects,
            category: slug,
            categoryName: targetCategoryName,
            error: null
        };
    } catch (e) {
        console.error(e);
        return {
            projects: [],
            category: params.slug,
            categoryName: null,
            error: e.message
        };
    }
}
