<script>
    import IconGithub from "~icons/simple-icons/github";
    import IconAndroid from "~icons/simple-icons/android";

    let { data } = $props();
    let project = $derived(data.project);

    function formatDate(unixTimestamp) {
        if (!unixTimestamp) return "";
        const date = new Date(unixTimestamp * 1000);
        return date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
    }
</script>

<svelte:head>
    <title>{project.name} - Xtra Manager Software</title>
    <meta name="description" content={project.description} />
</svelte:head>

<main class="max-w-4xl mx-auto px-4 py-8 md:py-16 min-h-[80vh]">
    <!-- App Header Section -->
    <header class="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start border-b border-outline/10 pb-8 animate-slide-up">
        
        <!-- App Icon -->
        <div class="shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-[2rem] bg-surface-container overflow-hidden border border-outline/20 shadow-2xl relative">
            {#if project.logo_url}
                <img src={project.logo_url} alt={project.name} class="w-full h-full object-cover" />
            {:else}
                <div class="w-full h-full flex items-center justify-center bg-surface-variant text-on-surface-variant text-5xl font-black">
                    {project.name.charAt(0)}
                </div>
            {/if}
            <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
        </div>

        <!-- App Meta & Actions -->
        <div class="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 class="text-3xl md:text-5xl font-black text-on-surface tracking-tight mb-2">{project.name}</h1>
            <p class="text-lg font-medium text-primary mb-1">Xtra Manager Software</p>
            
            <!-- Tags -->
            <div class="flex flex-wrap gap-2 justify-center md:justify-start mt-2 mb-6">
                {#each project.tags as tag}
                    <span class="px-2.5 py-1 rounded-full bg-surface-container-high border border-outline/10 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                        {tag}
                    </span>
                {/each}
            </div>

            <!-- Actions -->
            <div class="flex flex-wrap gap-3 mt-auto">
                {#if project.downloadLink}
                    <a href={project.downloadLink} target="_blank" rel="noopener noreferrer" 
                       class="bg-primary text-on-primary hover:bg-primary/90 px-10 py-3 rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-primary/20">
                        GET
                    </a>
                {/if}
                
                {#if project.sourceLink}
                    <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" 
                       class="bg-surface-container-high text-on-surface hover:bg-surface-container-highest px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 border border-outline/10">
                        <IconGithub class="text-xl" /> Source
                    </a>
                {/if}
            </div>
        </div>
    </header>

    <!-- App Details Content -->
    <div class="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10 animate-slide-up animation-delay-200">
        <!-- Main Content -->
        <div class="lg:col-span-2 space-y-10">
            <section>
                <h2 class="text-xl font-bold text-on-surface mb-4">About this app</h2>
                <div class="text-on-surface-variant leading-relaxed text-base space-y-4 whitespace-pre-line">
                    {project.description}
                </div>
            </section>
        </div>

        <!-- Sidebar / Info Data -->
        <div class="space-y-6">
            <section class="bg-surface-container-lowest border border-outline/10 rounded-3xl p-6">
                <h3 class="text-sm font-bold text-on-surface uppercase tracking-widest mb-4">Information</h3>
                
                <dl class="space-y-4 text-sm">
                    {#if project.version}
                        <div class="flex justify-between border-b border-outline/5 pb-2">
                            <dt class="text-on-surface-variant">Version</dt>
                            <dd class="font-medium text-on-surface">{project.version}</dd>
                        </div>
                    {/if}
                    
                    {#if project.updated_at}
                        <div class="flex justify-between border-b border-outline/5 pb-2">
                            <dt class="text-on-surface-variant">Updated</dt>
                            <dd class="font-medium text-on-surface">{formatDate(project.updated_at)}</dd>
                        </div>
                    {/if}
                    
                    <div class="flex justify-between border-b border-outline/5 pb-2">
                        <dt class="text-on-surface-variant">Provider</dt>
                        <dd class="font-medium text-on-surface text-right">Xtra Manager Software</dd>
                    </div>
                </dl>
            </section>
        </div>
    </div>
</main>
