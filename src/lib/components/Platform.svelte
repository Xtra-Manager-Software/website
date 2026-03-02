<script>
  import ProjectGrid from "$lib/components/ProjectGrid.svelte";

  let { platforms = [], categories = [], error = null } = $props();
</script>

<section
  id="highlights"
  class="py-20 md:py-32 px-4 relative select-none cursor-default"
>
  <div class="absolute inset-0 pointer-events-none -z-10">
    <div
      class="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] rounded-full opacity-5"
      style="background: radial-gradient(circle, var(--primary) 0%, transparent 70%);"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-[250px] h-[250px] rounded-full opacity-5"
      style="background: radial-gradient(circle, var(--secondary) 0%, transparent 70%);"
    ></div>
  </div>

  <div class="max-w-6xl mx-auto">
    <div class="flex flex-col items-center text-center gap-4 mb-16 md:mb-24">
      <div
        class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline/10 text-xs font-medium text-primary"
      >
        <span>Highlights</span>
      </div>
      <h2
        class="text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight"
      >
        Featured Projects
      </h2>
      <p class="text-on-surface-variant max-w-2xl text-lg">
        A glimpse into some of the best tools and resources we've built for the community. Open source and free forever.
      </p>
    </div>

    <ProjectGrid projects={platforms} {categories} layout="grid" />
  </div>
</section>
