<script>
  let { project } = $props();
  
  // Auto-generate slug from name if not present
  const slug = project.slug || project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  const url = `/app/${slug}`;
</script>

<a href={url} class="group flex flex-row items-center gap-4 p-3 md:p-4 rounded-3xl bg-surface-container-lowest/50 border border-outline/10 hover:border-primary/40 hover:bg-surface-container/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full backdrop-blur-sm">
  <!-- Icon -->
  <div class="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-surface-container overflow-hidden border border-outline/20 shadow-sm group-hover:shadow-primary/20 transition-all duration-300 relative">
    {#if project.logo_url}
      <img src={project.logo_url} alt={project.name} class="w-full h-full object-cover" loading="lazy" />
    {:else}
      <div class="w-full h-full flex items-center justify-center bg-surface-variant text-on-surface-variant text-2xl md:text-3xl font-black font-sans">
        {project.name.charAt(0)}
      </div>
    {/if}
    <!-- Glass reflection effect -->
    <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
  </div>
  
  <!-- Info -->
  <div class="flex-1 flex flex-col justify-center items-start text-left min-w-0 py-1">
    <h3 class="text-base md:text-lg font-bold text-on-surface w-full tracking-tight leading-tight line-clamp-2">{project.name}</h3>
  </div>
  
  <!-- Action -->
  <div class="shrink-0 flex justify-end pl-2">
    <button class="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-on-primary px-4 py-1.5 md:px-6 md:py-2 rounded-full font-bold text-xs md:text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(255,183,132,0)] group-hover:shadow-[0_0_15px_rgba(255,183,132,0.3)]">
      GET
    </button>
  </div>
</a>
