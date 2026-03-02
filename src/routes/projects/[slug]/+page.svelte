<script>
    import ProjectGrid from "$lib/components/ProjectGrid.svelte";
    
    let { data } = $props();
    let projects = $derived(data.projects || []);
    let categories = $derived(data.categories || []);
</script>

<svelte:head>
    {#if data.categoryName}
        <title>{data.categoryName} Projects - Xtra Manager Software</title>
        <meta property="og:title" content="{data.categoryName} Projects - Xtra Manager Software" />
    {/if}
</svelte:head>

{#if data.error}
    <div class="text-center py-20 text-error">
        <p class="text-lg">Failed to load {data.categoryName || data.category} projects: {data.error}</p>
        <button
            class="mt-4 px-6 py-2 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-sm font-medium"
            onclick={() => window.location.reload()}
        >
            Retry
        </button>
    </div>
{:else}
    <ProjectGrid {projects} {categories} />
{/if}
