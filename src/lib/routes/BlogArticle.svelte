<script>
    import { onMount } from "svelte";
    import { params } from "../router.js";
    import { generateHTML } from "@tiptap/html";
    import StarterKit from "@tiptap/starter-kit";

    let article = null;
    let htmlContent = "";
    let isLoading = true;
    let errorMsg = null;

    onMount(async () => {
        try {
            // @ts-ignore
            const slug = $params.slug;
            if (!slug) throw new Error("No slug provided");

            const res = await fetch(
                `https://xkmbackend.arasea.workers.dev/api/articles/${slug}`,
            );
            if (!res.ok) {
                throw new Error(`Failed to load article: ${res.statusText}`);
            }

            const data = await res.json();
            article = data;

            document.title = `${data.title} - Xtra Manager Software`;
            const descTag = document.querySelector('meta[name="description"]');
            if (descTag && data.description)
                descTag.setAttribute("content", data.description);

            if (
                data.content_json &&
                Array.isArray(data.content_json.sections)
            ) {
                let generatedHtml = "";
                data.content_json.sections.forEach((section) => {
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
        } catch (err) {
            errorMsg = err.message;
            console.error(err);
        } finally {
            isLoading = false;
        }
    });
</script>

<div class="max-w-4xl mx-auto px-6 py-12 w-full min-h-screen">
    {#if isLoading}
        <div class="flex justify-center items-center min-h-[50vh]">
            <div
                class="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"
            ></div>
        </div>
    {:else if errorMsg}
        <div
            class="p-8 text-center bg-surface-container rounded-2xl border border-error"
        >
            <h2 class="text-2xl font-bold mb-4 text-error">
                Failed to load article
            </h2>
            <p class="text-on-surface-variant mb-6">{errorMsg}</p>
            <button
                class="px-6 py-3 bg-primary text-on-primary font-medium rounded-full hover:bg-primary-container hover:text-on-primary-container transition-colors"
                on:click={() => window.location.reload()}
            >
                Retry
            </button>
        </div>
    {:else if article}
        <article class="w-full">
            <header class="mb-12 border-b border-surface-container pb-8">
                <h1
                    class="text-4xl md:text-5xl font-bold text-on-surface mb-6 leading-tight"
                >
                    {article.title}
                </h1>
                {#if article.description}
                    <p class="text-xl text-on-surface-variant mb-6">
                        {article.description}
                    </p>
                {/if}
                <div
                    class="flex flex-wrap items-center gap-4 text-sm text-on-surface-variant"
                >
                    {#if article.created_at}
                        <div class="flex items-center gap-2">
                            <span
                                class="iconify mdi--calendar"
                                aria-hidden="true"
                            ></span>
                            <time datetime={article.created_at}>
                                {new Date(
                                    article.created_at * 1000,
                                ).toLocaleDateString("id-ID", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </time>
                        </div>
                    {/if}
                    {#if article.status}
                        <span
                            class="px-3 py-1 bg-surface-container border border-outline-variant text-primary rounded-full text-xs font-semibold uppercase tracking-wider"
                        >
                            {article.status}
                        </span>
                    {/if}
                </div>
            </header>

            <div
                class="prose prose-invert prose-lg md:prose-xl max-w-none w-full prose-headings:text-on-surface prose-p:text-on-surface-variant prose-a:text-primary hover:prose-a:text-tertiary prose-strong:text-on-surface transition-colors"
            >
                {@html htmlContent}
            </div>
        </article>
    {/if}
</div>
