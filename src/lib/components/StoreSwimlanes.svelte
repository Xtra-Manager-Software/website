<script>
    import AppCard from "./AppCard.svelte";
    import PromoCard from "./PromoCard.svelte";

    let { projects = [], categories = [] } = $props();

    // Group projects by category
    let groupedProjects = $derived.by(() => {
        const groups = {};
        projects.forEach(project => {
            // Use the first generic tag or just fallback to "Featured"
            let catSlug = "featured";
            if (project.tags && project.tags.length > 0) {
                // Find matching category
                const cat = categories.find(c => project.tags.includes(c.slug));
                if (cat) catSlug = cat.slug;
            }
            if (!groups[catSlug]) groups[catSlug] = [];
            groups[catSlug].push(project);
        });
        return groups;
    });

    function getCategoryName(slug) {
        if (slug === 'featured') return 'Featured Apps';
        const cat = categories.find(c => c.slug === slug);
        return cat ? cat.name : slug;
    }
</script>

<div class="space-y-12">
    {#each Object.entries(groupedProjects) as [slug, groupProjects]}
        {#if groupProjects.length > 0}
            <section class="opacity-0 animate-slide-up animation-delay-300" style:animation-fill-mode="forwards">
                <div class="flex items-center justify-between px-4 mb-4">
                    <h2 class="text-2xl font-bold text-on-surface tracking-tight">{getCategoryName(slug)}</h2>
                    <a href="/projects/{slug === 'featured' ? '' : slug}" class="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">See All</a>
                </div>
                
                <!-- Swimlane Container -->
                <div class="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4 px-4 gap-4 md:gap-6">
                    {#each groupProjects as project}
                        {#if slug === 'featured'}
                            <div class="snap-start shrink-0 w-[85vw] sm:w-[500px] md:w-[600px]">
                                <PromoCard {project} />
                            </div>
                        {:else}
                            <div class="snap-start shrink-0 w-[85vw] sm:w-[400px] md:w-[450px]">
                                <AppCard {project} />
                            </div>
                        {/if}
                    {/each}
                </div>
            </section>
        {/if}
    {/each}
</div>

<style>
    .hide-scrollbar::-webkit-scrollbar {
        display: none;
    }
    .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
</style>
