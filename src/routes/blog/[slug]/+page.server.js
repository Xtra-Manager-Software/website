export const config = {
    isr: {
        expiration: 300
    }
};

import { generateHTML } from "@tiptap/html";
import StarterKit from "@tiptap/starter-kit";
import { API_URL } from '$env/static/private';

export async function entries() {
    try {
        const response = await fetch(`${API_URL}/api/articles`);
        if (!response.ok) return [];
        const data = await response.json();
        return data.articles.map(article => ({ slug: article.slug }));
    } catch {
        return [{ slug: "fallback-error" }]; // SvelteKit needs at least one entry if it throws on empty, let's just return actual entries.
    }
}

export async function load({ fetch, params }) {
    try {
        const slug = params.slug;
        const res = await fetch(`${API_URL}/api/articles/${slug}`);
        if (!res.ok) {
            throw new Error(`Failed to load article: ${res.statusText}`);
        }

        let article = await res.json();
        if (article.description === "Null Description") {
            article.description = "";
        }

        let htmlContent = "";

        if (
            article.content_json &&
            Array.isArray(article.content_json.sections)
        ) {
            const cleanContentStr = JSON.stringify(article.content_json).replace(/"Null Description"/g, '" "');
            const cleanContent = JSON.parse(cleanContentStr);
            let generatedHtml = "";
            cleanContent.sections.forEach((section) => {
                const gridClass =
                    section.cols > 1
                        ? `grid grid-cols-1 md:grid-cols-${section.cols} gap-6`
                        : "w-full";

                generatedHtml += `<div class="${gridClass} mb-6">`;

                if (Array.isArray(section.contents)) {
                    section.contents.forEach((colContent) => {
                        // Render Tiptap content for this column
                        const colHtml = generateHTML(colContent, [
                            StarterKit,
                        ]);
                        generatedHtml += `<div>${colHtml}</div>`;
                    });
                }

                generatedHtml += `</div>`;
            });

            htmlContent = generatedHtml;
        }

        return {
            article,
            htmlContent,
            error: null
        };
    } catch (e) {
        console.error(e);
        return {
            article: null,
            htmlContent: "",
            error: e.message
        };
    }
}
