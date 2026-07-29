export interface RawProject {
    name: string;
    description: string;
    logo_url: string | null;
    tags: string[];
    project_url: string;
    download_url: string;
    version: string;
    updated_at: string;
    created_at: string;
    slug?: string;
}

export interface RawCategory {
    slug: string;
    name: string;
    description?: string;
}

export interface RawArticle {
    slug: string;
    title?: string;
    description?: string;
    updated_at: number;
    created_at?: number;
    content?: string;
    content_json?: { sections: unknown[] };
    status?: string;
}

export interface Platform {
    name: string;
    description: string;
    icon: null;
    logo_url: string | null;
    tags: string[];
    sourceLink: string;
    downloadLink: string;
    version: string;
    updated_at: string;
    slug?: string;
    category_name?: string | null;
}

export interface Category {
    slug: string;
    name: string;
    description?: string;
}

export interface Article {
    slug: string;
    title?: string;
    description?: string;
    updated_at: number;
    created_at?: number;
    content?: string;
    content_json?: { sections: unknown[] };
    status?: string;
}

export interface Pagination {
    page: number;
    limit: number;
    totalPages: number;
}
