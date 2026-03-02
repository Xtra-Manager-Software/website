<script>
    let { articles = [], errorMsg = null, pagination = { page: 1, totalPages: 1 } } = $props();

    function formatDate(unixTimestamp) {
        if (!unixTimestamp) return "";
        return new Date(unixTimestamp * 1000).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }
</script>

<section id="blog" class="py-24 w-full relative">
    <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="text-center max-w-2xl mx-auto mb-16 opacity-0 animate-slide-up">
            <h2 class="text-4xl md:text-5xl font-bold mb-6 text-on-surface">
                Blog & <span class="text-gradient">Updates</span>
            </h2>
            <p class="text-lg text-on-surface-variant">
                Stay up to date with the latest news, releases, and articles
                from the Xtra Manager Software team.
            </p>
        </div>

        {#if errorMsg}
            <div
                class="p-8 text-center bg-surface-container rounded-2xl border border-error"
            >
                <p class="text-error">{errorMsg}</p>
            </div>
        {:else if articles.length === 0}
            <div class="text-center py-12">
                <p class="text-on-surface-variant">
                    No articles published yet. Check back soon!
                </p>
            </div>
        {:else}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 opacity-0 animate-slide-up animation-delay-200">
                {#each articles as article, index}
                    <a
                        href="/blog/{article.slug}"
                        class="group bento-card flex flex-col h-full hover:-translate-y-2 p-6 md:p-8"
                        style="animation-delay: {index * 150}ms;"
                    >
                        <div class="flex-grow flex flex-col relative z-10">
                            <div
                                class="font-bold text-xl md:text-2xl text-on-surface mb-3 group-hover:text-primary transition-colors line-clamp-2 tracking-tight"
                            >
                                {article.title}
                            </div>
                            {#if article.description}
                                <p
                                    class="text-on-surface-variant text-sm md:text-base mb-6 flex-grow line-clamp-3 leading-relaxed"
                                >
                                    {article.description}
                                </p>
                            {/if}
                        </div>

                        <div
                            class="mt-auto pt-6 border-t border-outline/5 flex items-center justify-between text-xs font-medium text-on-surface-variant relative z-10"
                        >
                            <span class="bg-surface-container px-3 py-1.5 rounded-full border border-outline/5">{formatDate(article.created_at)}</span>
                            <div
                                class="flex items-center gap-1.5 group-hover:text-primary font-bold transition-colors uppercase tracking-wider text-[10px] md:text-xs"
                            >
                                Read Article
                                <span
                                    class="iconify mdi--arrow-right text-lg transition-transform group-hover:translate-x-2"
                                    aria-hidden="true"
                                ></span>
                            </div>
                        </div>
                    </a>
                {/each}
            </div>
            
            <!-- Pagination Controls -->
            {#if pagination.totalPages > 1}
                <div class="flex justify-center items-center gap-4 mt-16 opacity-0 animate-slide-up animation-delay-300">
                    <a 
                        href={pagination.page > 1 ? `?page=${pagination.page - 1}` : null}
                        class="px-5 py-2.5 rounded-full font-medium transition-all duration-300 {pagination.page > 1 ? 'bg-surface-container hover:bg-surface-container-high text-on-surface hover:text-primary shadow-sm' : 'bg-surface-container/50 text-on-surface-variant/50 cursor-not-allowed pointer-events-none'}"
                        data-sveltekit-noscroll
                    >
                        Previous
                    </a>
                    
                    <span class="text-sm font-medium text-on-surface-variant">
                        Page <span class="text-on-surface">{pagination.page}</span> of <span class="text-on-surface">{pagination.totalPages}</span>
                    </span>
                    
                    <a 
                        href={pagination.page < pagination.totalPages ? `?page=${pagination.page + 1}` : null}
                        class="px-5 py-2.5 rounded-full font-medium transition-all duration-300 {pagination.page < pagination.totalPages ? 'bg-surface-container hover:bg-surface-container-high text-on-surface hover:text-primary shadow-sm' : 'bg-surface-container/50 text-on-surface-variant/50 cursor-not-allowed pointer-events-none'}"
                        data-sveltekit-noscroll
                    >
                        Next
                    </a>
                </div>
            {/if}
        {/if}
    </div>
</section>
