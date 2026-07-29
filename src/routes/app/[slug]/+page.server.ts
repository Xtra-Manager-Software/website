import { error } from '@sveltejs/kit';
import { fetchProjects } from '$lib/api';
import { toPlatform, toSlug } from '$lib/transform';
import type { Platform } from '$lib/types';

export async function load({ fetch, params }: { fetch: typeof globalThis.fetch; params: { slug: string } }): Promise<{ project: Platform }> {
    const data = await fetchProjects(fetch);
    const project = (data.projects || []).find((p) => {
        const pSlug = p.slug || toSlug(p.name);
        return pSlug === params.slug;
    });

    if (!project) throw error(404, 'App not found');

    return { project: toPlatform(project) };
}
