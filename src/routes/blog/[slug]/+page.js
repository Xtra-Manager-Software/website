export const ssr = false;


export async function load({ fetch, params }) {
    try {
        const slug = params.slug;
        const res = await fetch(`/api/articles/${slug}`);
        if (!res.ok) {
            throw new Error(`Failed to load article: ${res.statusText}`);
        }

        let article = await res.json();
        if (article.description === "Null Description") {
            article.description = "";
        }

        return {
            article,
            htmlContent: "",
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
