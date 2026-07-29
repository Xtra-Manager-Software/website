import { env } from '$env/dynamic/private';
import type { RawProject, RawCategory, RawArticle } from './types';

async function fetchJson<T>(fetchFn: typeof fetch, path: string, init?: RequestInit): Promise<T> {
    const res = await fetchFn(`${env.API_URL}${path}`, init);
    if (!res.ok) throw new Error(`API ${path}: ${res.statusText}`);
    return res.json();
}

export async function fetchHighlights(fetchFn: typeof fetch) {
    return fetchJson<{ projects: RawProject[] }>(fetchFn, '/api/projects/highlights');
}

export async function fetchProjects(fetchFn: typeof fetch) {
    return fetchJson<{ projects: RawProject[] }>(fetchFn, '/api/projects');
}

export async function fetchCategories(fetchFn: typeof fetch) {
    return fetchJson<{ categories: RawCategory[] }>(fetchFn, '/api/categories');
}

export async function fetchCategoryProjects(fetchFn: typeof fetch, slug: string) {
    return fetchJson<{ projects: RawProject[] }>(fetchFn, `/api/projects/category/${slug}`);
}

export async function fetchArticles(fetchFn: typeof fetch, page: number, limit: number) {
    return fetchJson<{ articles: RawArticle[]; pagination?: { currentPage: number; limit: number; totalPages: number } }>(
        fetchFn, `/api/articles?page=${page}&limit=${limit}`
    );
}

export async function fetchAllArticles(fetchFn: typeof fetch) {
    return fetchJson<{ articles: RawArticle[] }>(fetchFn, '/api/articles');
}
