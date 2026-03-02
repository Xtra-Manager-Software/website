<script>
    import { page } from "$app/stores";
    
    let { data, children } = $props();
    let categories = $derived(data.categories || []);
    
    // Determine the active category tab based on the URL path
    let activeTab = $derived(
        $page.url.pathname === '/projects' ? 'all' : 
        $page.url.pathname.split('/').pop()
    );

    let activeDescription = $derived(
        activeTab === 'all' 
            ? "Browse our complete collection of open-source applications, root modules, custom kernels, and system tools."
            : (categories.find(c => c.slug === activeTab)?.description || "Browse our collection of projects.")
    );
</script>

<svelte:head>
    <title>Xtra Manager Software - Projects</title>
    <meta name="description" content="Discover and download open-source apps, kernels, modules, and system tools created by the Xtra Manager Software Community." />
    <meta name="keywords" content="Downloads, Android Apps, Custom ROM, Kernel, Root Modules, Xtra Manager Tools, Projects" />

    <meta property="og:title" content="Xtra Manager Software - Projects" />
    <meta property="og:description" content="Discover and download open-source apps, kernels, modules, and system tools created by the Xtra Manager Software Community." />
    <meta property="og:type" content="website" />
    
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Xtra Manager Software - Projects" />
    <meta name="twitter:description" content="Discover and download open-source apps, kernels, modules, and system tools created by the Xtra Manager Software Community." />
</svelte:head>

<section class="py-32 px-4 relative min-h-screen">
    <div class="fixed inset-0 pointer-events-none -z-10">
        <div
            class="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-5"
            style="background: radial-gradient(circle, var(--primary) 0%, transparent 70%);"
        ></div>
        <div
            class="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-5"
            style="background: radial-gradient(circle, var(--secondary) 0%, transparent 70%);"
        ></div>
    </div>

    <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
            <h1 class="text-4xl md:text-5xl font-bold text-on-surface mb-4">
                Projects & Downloads
            </h1>
            <p class="text-on-surface-variant text-lg max-w-2xl mx-auto min-h-[56px] transition-all duration-300">
                {activeDescription}
            </p>
        </div>

        <!-- Dynamic Category Tabs -->
        <div class="flex justify-center flex-wrap gap-2 mb-12">
            <!-- 'All' Tab routes to /projects -->
            <a
                href="/projects"
                data-sveltekit-noscroll
                class="px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 capitalize inline-block
                {activeTab === 'all'
                    ? 'bg-primary text-on-primary shadow-lg shadow-primary/25 scale-105'
                    : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface'}"
            >
                All
            </a>
            
            <!-- Dynamic Category Tabs route to /projects/[slug] -->
            {#each categories as category}
                <a
                    href="/projects/{category.slug}"
                    data-sveltekit-noscroll
                    class="px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 capitalize inline-block
                    {activeTab === category.slug
                            ? 'bg-primary text-on-primary shadow-lg shadow-primary/25 scale-105'
                            : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface'}"
                >
                    {category.name}
                </a>
            {/each}
        </div>

        {#if data.error && categories.length === 0}
            <div class="text-center py-4 px-6 bg-error/10 text-error rounded-2xl mb-8 border border-error/20">
                Failed to load categories. Please try again later.
            </div>
        {/if}

        <!-- Render the active sub-route page (All Projects or Category Projects) -->
        <div class="relative">
            {@render children()}
        </div>
    </div>
</section>
