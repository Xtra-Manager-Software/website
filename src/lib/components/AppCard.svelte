<script>
  let { project } = $props();
  
  // Auto-generate slug from name if not present
  const slug = project.slug || project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  const url = `/app/${slug}`;
</script>

<a href={url} class="group flex flex-col md:flex-row items-center gap-4 p-4 rounded-3xl bg-surface-container-lowest/50 border border-outline/10 hover:border-primary/40 hover:bg-surface-container/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full backdrop-blur-sm">
  <!-- Icon -->
  <div class="shrink-0 w-20 h-20 md:w-20 md:h-20 rounded-2xl bg-surface-container overflow-hidden border border-outline/20 shadow-sm group-hover:shadow-primary/20 transition-all duration-300 relative">
    {#if project.logo_url}
      <img src={project.logo_url} alt={project.name} class="w-full h-full object-cover" loading="lazy" />
    {:else}
      <div class="w-full h-full flex items-center justify-center bg-surface-variant text-on-surface-variant text-3xl font-black font-sans">
        {project.name.charAt(0)}
      </div>
    {/if}
    <!-- Glass reflection effect -->
    <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
  </div>
  
  <!-- Info -->
  <div class="flex-1 flex flex-col items-center text-center md:items-start md:text-left min-w-0">
    <h3 class="text-lg font-bold text-on-surface truncate w-full tracking-tight">{project.name}</h3>
    <p class="text-sm text-on-surface-variant/70 line-clamp-2 mt-0.5 max-w-[280px] leading-relaxed">
      {project.description}
    </p>
    
    <div class="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
      {#if project.tags && project.tags.length > 0}
        <span class="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded-full">
          {project.tags[0]}
        </span>
      {/if}
      {#if project.version}
        <span class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant bg-surface-variant/30 px-2.5 py-1 rounded-full">
          v{project.version}
        </span>
      {/if}
    </div>
  </div>
  
  <!-- Action -->
  <div class="mt-4 md:mt-0 shrink-0 w-full md:w-auto flex justify-center md:justify-end">
    <button class="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-on-primary px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 w-32 md:w-auto hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(255,183,132,0)] group-hover:shadow-[0_0_15px_rgba(255,183,132,0.3)]">
      GET
    </button>
  </div>
</a>
