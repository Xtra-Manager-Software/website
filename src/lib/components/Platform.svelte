<script>
  import StoreSwimlanes from "$lib/components/StoreSwimlanes.svelte";

  let { platforms = [], categories = [], error = null } = $props();
</script>

<section id="highlights" class="py-8 md:py-16 relative select-none cursor-default max-w-[1400px] mx-auto w-full">
  <div class="absolute inset-0 pointer-events-none -z-10">
    <div
      class="absolute top-1/4 right-0 -translate-y-1/2 w-[300px] h-[300px] rounded-full opacity-5 blur-[100px]"
      style="background: radial-gradient(circle, var(--primary) 0%, transparent 70%);"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-[250px] h-[250px] rounded-full opacity-5 blur-[100px]"
      style="background: radial-gradient(circle, var(--secondary) 0%, transparent 70%);"
    ></div>
  </div>

  <div class="w-full">
    {#if error}
        <div class="text-center py-20 text-error">
            <p class="text-lg">Failed to load projects: {error}</p>
        </div>
    {:else}
        <StoreSwimlanes projects={platforms} {categories} />
    {/if}
  </div>
</section>
