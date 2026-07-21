<script>
    import AppCard from "./AppCard.svelte";
    import IconAndroid from "~icons/simple-icons/android";

    let { projects = [], categories = [], layout = "grid" } = $props();

</script>

{#if projects.length === 0}
    <div class="text-center py-20">
        <div class="inline-flex justify-center items-center w-20 h-20 rounded-full bg-surface-container-high mb-4 text-on-surface-variant/50">
            <IconAndroid class="text-4xl" />
        </div>
        <p class="text-on-surface-variant text-lg">
            No projects found in this category yet.
        </p>
    </div>
{:else}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 opacity-0 animate-slide-up animation-delay-300">
        {#each projects as project, index}
            <div style="animation-delay: {index * 50}ms;" class="animate-slide-up opacity-0" style:animation-fill-mode="forwards">
                <AppCard {project} />
            </div>
        {/each}
    </div>
{/if}
