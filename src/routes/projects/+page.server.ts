import { fetchProjects } from '$lib/api';
import { toPlatform } from '$lib/transform';
import type { Platform } from '$lib/types';

export async function load({ fetch }: { fetch: typeof globalThis.fetch }): Promise<{ projects: Platform[]; error: string | null }> {
    try {
        const data = await fetchProjects(fetch);
        return {
            projects: data.projects.map((p) => toPlatform(p)),
            error: null
        };
    } catch (e) {
        console.error(e);
        return { projects: [], error: (e as Error).message };
    }
}
