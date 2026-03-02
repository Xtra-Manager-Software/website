<script>
    import { generateHTML } from "@tiptap/html";
    import StarterKit from "@tiptap/starter-kit";

    let { data } = $props();
    let article = $derived(data.article);
    let errorMsg = $derived(data.error);

    let htmlContent = $derived.by(() => {
        if (!article || !article.content_json || !Array.isArray(article.content_json.sections)) {
            return data.htmlContent || "";
        }
        try {
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
                        const colHtml = generateHTML(colContent, [StarterKit]);
                        generatedHtml += `<div>${colHtml}</div>`;
                    });
                }

                generatedHtml += `</div>`;
            });
            return generatedHtml;
        } catch (e) {
            console.error("Failed to generate HTML:", e);
            return "";
        }
    });
</script>

<svelte:head>
    {#if article}
        <title>{article.title} - Xtra Manager Software</title>
        {#if article.description}
            <meta name="description" content={article.description} />
            <meta property="og:description" content={article.description} />
            <meta name="twitter:description" content={article.description} />
        {/if}
        
        <!-- OpenGraph -->
        <meta property="og:title" content="{article.title} - Xtra Manager Software" />
        <meta property="og:type" content="article" />
        {#if article.created_at}
            <meta property="article:published_time" content={new Date(article.created_at * 1000).toISOString()} />
        {/if}

        <!-- Twitter -->
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="{article.title} - Xtra Manager Software" />
    {/if}
</svelte:head>

<!-- Solid Background Mask for Readability against the Constellation -->
<div class="fixed inset-0 bg-background/95 backdrop-blur-3xl z-[-1]"></div>

<div class="max-w-4xl mx-auto px-6 py-12 w-full min-h-screen">
    {#if errorMsg}
        <div
            class="p-8 text-center bg-surface-container rounded-2xl border border-error"
        >
            <h2 class="text-2xl font-bold mb-4 text-error">
                Failed to load article
            </h2>
            <p class="text-on-surface-variant mb-6">{errorMsg}</p>
            <button
                class="px-6 py-3 bg-primary text-on-primary font-medium rounded-full hover:bg-primary-container hover:text-on-primary-container transition-colors"
                onclick={() => window.location.reload()}
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
                                ).toLocaleDateString("en-US", {
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
