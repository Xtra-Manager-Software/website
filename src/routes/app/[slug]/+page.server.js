import { env } from '$env/dynamic/private';
import { error } from '@sveltejs/kit';

export async function load({ fetch, params }) {
    const { slug } = params;

    try {
        const response = await fetch(`${env.API_URL}/api/projects`);
        
        if (!response.ok) throw new Error("Failed to fetch projects");

        const data = await response.json();
        const projects = data.projects || [];

        // Find the project by matching a generated slug from its name
        const project = projects.find(p => {
            const pSlug = p.slug || p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
            return pSlug === slug;
        });

        if (!project) {
            throw error(404, 'App not found');
        }

        return {
            project: {
                name: project.name,
                description: project.description,
                icon: null,
                logo_url: project.logo_url,
                tags: project.tags || [],
                sourceLink: project.project_url,
                downloadLink: project.download_url,
                version: project.version,
                updated_at: project.updated_at || project.created_at,
            }
        };
    } catch (e) {
        console.error(e);
        throw error(404, 'App not found');
    }
}
