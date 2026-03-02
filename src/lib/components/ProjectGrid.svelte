<script>
    import IconAndroid from "~icons/simple-icons/android";
    import IconGithub from "~icons/simple-icons/github";

    let { projects = [], categories = [], layout = "masonry" } = $props();

    function formatDate(unixTimestamp) {
        if (!unixTimestamp) return "";
        const date = new Date(unixTimestamp * 1000);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        return `${year}-${month}-${day} ${hours}:${minutes}`;
    }

    function getCategoryLabel(tags) {
        if (!tags || categories.length === 0) return null;
        const lowerTags = tags.map((t) => t.toLowerCase());
        const category = categories.find((c) => lowerTags.includes(c.slug.toLowerCase()));
        return category ? category.name : null;
    }

    function filterGenericTags(tags) {
        if (!tags) return [];
        const genericTags = categories.map((c) => c.slug.toLowerCase());
        return tags.filter((tag) => {
            return !genericTags.includes(tag.toLowerCase());
        });
    }
</script>

{#if projects.length === 0}
    <div class="text-center py-20">
        <div
            class="inline-flex justify-center items-center w-20 h-20 rounded-full bg-surface-container-high mb-4 text-on-surface-variant/50"
        >
            <IconAndroid class="text-4xl" />
        </div>
        <p class="text-on-surface-variant text-lg">
            No projects found in this category yet.
        </p>
    </div>
{:else}
    <div
        class="opacity-0 animate-slide-up animation-delay-300 {layout === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8' : 'columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8'}"
    >
        {#each projects as platform, index}
            <div
                class="group relative flex flex-col bg-surface-container backdrop-blur-md rounded-[2rem] p-6 md:p-8 hover:bg-surface-container-high transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 overflow-hidden {layout === 'masonry' ? 'break-inside-avoid' : ''}"
                style="animation-delay: {index * 100}ms;"
            >
                <!-- Curved Border Trace Quadrants -->
                <div class="absolute inset-0 pointer-events-none z-20">
                    <div class="border-trace-quadrant q-tl"></div>
                    <div class="border-trace-quadrant q-tr"></div>
                    <div class="border-trace-quadrant q-bl"></div>
                    <div class="border-trace-quadrant q-br"></div>
                </div>

                <div
                    class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                ></div>

                <div class="relative z-10 flex flex-col h-full">
                    {#if platform.version}
                        <div
                            class="absolute -top-2 -right-2 px-3 py-1.5 rounded-full bg-secondary-container text-on-secondary-container border border-outline/5 text-[11px] font-bold tracking-widest uppercase shadow-sm z-20"
                        >
                            {platform.version}
                        </div>
                    {/if}

                    <div class="flex items-center mb-6">
                        <div
                            class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-surface-container-highest text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm overflow-hidden shrink-0"
                        >
                            {#if platform.logo_url}
                                <img
                                    src={platform.logo_url}
                                    alt={platform.name}
                                    class="w-full h-full object-cover"
                                    crossorigin="anonymous"
                                />
                            {:else if platform.icon}
                                {@const Icon = platform.icon}
                                <Icon class="text-2xl" />
                            {:else}
                                <IconAndroid class="text-2xl" />
                            {/if}
                        </div>
                    </div>

                    <h3
                        class="text-2xl font-bold text-on-surface mb-1 group-hover:text-primary transition-colors duration-300 tracking-tight"
                    >
                        {platform.name}
                    </h3>

                    <div class="flex items-center justify-between mb-4">
                        {#if platform.category_name || getCategoryLabel(platform.tags)}
                            <div class="text-sm font-medium text-primary">
                                {platform.category_name || getCategoryLabel(platform.tags)}
                            </div>
                        {/if}
                        
                        {#if platform.updated_at}
                            <div class="text-[10px] font-medium text-on-surface-variant/70 bg-surface-container-highest/50 px-2 py-1 rounded-md border border-outline/5 whitespace-nowrap hidden sm:block">
                                Updated: {formatDate(platform.updated_at)}
                            </div>
                        {/if}
                    </div>
                    
                    <!-- Mobile only date view so it doesn't squish with long titles on tiny screens -->
                    {#if platform.updated_at}
                        <div class="text-[10px] font-medium text-on-surface-variant/70 bg-surface-container-highest/50 px-2 py-1 rounded-md border border-outline/5 w-fit mb-4 sm:hidden">
                            Updated: {formatDate(platform.updated_at)}
                        </div>
                    {/if}

                    <p
                        class="text-on-surface-variant mb-6 leading-relaxed text-base whitespace-pre-line"
                    >
                        {platform.description}
                    </p>

                    <div class="flex flex-wrap gap-2 mb-8">
                        {#each filterGenericTags(platform.tags) as tag}
                            <span
                                class="px-3 py-1.5 rounded-full bg-surface-variant/50 hover:bg-surface-variant text-xs font-medium text-on-surface-variant transition-colors border border-outline/5 cursor-default"
                            >
                                {tag}
                            </span>
                        {/each}
                    </div>

                    <div
                        class="flex items-center justify-end gap-3 mt-auto"
                    >
                        {#if platform.sourceLink}
                            <a
                                href={platform.sourceLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full
                                bg-surface-container-highest hover:bg-on-surface/10
                                text-sm font-medium text-on-surface transition-all duration-300 hover:scale-105 group/btn"
                            >
                                <IconGithub
                                    class="text-lg group-hover/btn:scale-110 transition-transform"
                                />
                                GitHub
                            </a>
                        {/if}

                        {#if platform.downloadLink}
                            <a
                                href={platform.downloadLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-sm font-medium text-on-primary transition-all duration-300 group/btn"
                            >
                                <span>Download</span>
                            </a>
                        {/if}
                    </div>
                </div>
            </div>
        {/each}
    </div>
{/if}
