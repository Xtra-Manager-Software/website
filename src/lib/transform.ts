import type { RawProject, Platform } from './types';

export function toPlatform(p: RawProject, extra?: Partial<Platform>): Platform {
    return {
        name: p.name,
        description: p.description,
        icon: null,
        logo_url: p.logo_url,
        tags: p.tags,
        sourceLink: p.project_url,
        downloadLink: p.download_url,
        version: p.version,
        updated_at: p.updated_at || p.created_at,
        ...extra,
    };
}

export function toSlug(name: string): string {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}
