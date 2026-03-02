import { env } from '$env/dynamic/private';

export async function load({ fetch }) {
    try {
        const response = await fetch(`${env.API_URL}/api/projects`);
        if (!response.ok) throw new Error("Failed to fetch projects");

        const data = await response.json();

        const transformedProjects = data.projects.map((p) => ({
            name: p.name,
            description: p.description,
            icon: null,
            logo_url: p.logo_url,
            tags: p.tags,
            sourceLink: p.project_url,
            downloadLink: p.download_url,
            version: p.version,
            updated_at: p.updated_at || p.created_at,
            category_name: undefined // Will try to glean from tags in component or use backend if they add it
        }));

        return {
            projects: transformedProjects,
            error: null
        };
    } catch (e) {
        console.error(e);
        return {
            projects: [],
            error: e.message
        };
    }
}
