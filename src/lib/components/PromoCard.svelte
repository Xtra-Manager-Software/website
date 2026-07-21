<script>
  let { project } = $props();
  
  const slug = project.slug || project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  const url = `/app/${slug}`;
  
  // Vibrant gradients to act as banners for the Promo Cards
  const gradients = [
    "from-blue-600 to-indigo-900",
    "from-emerald-500 to-teal-900",
    "from-orange-500 to-red-900",
    "from-purple-600 to-fuchsia-900",
    "from-pink-500 to-rose-900",
    "from-cyan-500 to-blue-900",
    "from-amber-500 to-orange-900"
  ];
  // Select gradient based on project name length to be somewhat consistent
  const gradient = gradients[(project.name.length) % gradients.length];
</script>

<a href={url} class="group block relative w-full h-[320px] md:h-[380px] rounded-[2rem] overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all duration-500 cursor-pointer">
  <!-- Background Banner -->
  <div class="absolute inset-0 bg-gradient-to-br {gradient} opacity-90 group-hover:scale-105 transition-transform duration-700"></div>
  
  <!-- Subtle pattern overlay for texture -->
  <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
  
  <!-- Dark Gradient Overlay for text readability at the bottom -->
  <div class="absolute inset-0 p-6 md:p-8 flex flex-col justify-between bg-gradient-to-t from-black/90 via-black/30 to-transparent">
    
    <!-- Top Tags -->
    <div class="flex gap-2">
       <span class="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-widest shadow-sm">
         Featured Story
       </span>
    </div>

    <!-- Bottom Info -->
    <div class="flex flex-col gap-5">
      <!-- Narrative Title (Using description as the story hook) -->
      <h3 class="text-2xl md:text-3xl font-extrabold text-white leading-tight line-clamp-2 drop-shadow-md">
        {project.description}
      </h3>

      <!-- App Mini Card -->
      <div class="flex items-center gap-4 bg-black/40 backdrop-blur-md p-3 md:p-4 rounded-2xl border border-white/10 group-hover:bg-black/60 transition-colors duration-300">
        <!-- Icon -->
        <div class="w-12 h-12 md:w-14 md:h-14 shrink-0 bg-surface-container rounded-xl overflow-hidden shadow-inner">
           {#if project.logo_url}
             <img src={project.logo_url} alt={project.name} class="w-full h-full object-cover" loading="lazy" />
           {:else}
             <div class="w-full h-full flex items-center justify-center bg-surface-variant text-on-surface-variant text-xl font-black">{project.name.charAt(0)}</div>
           {/if}
        </div>
        
        <!-- App Details -->
        <div class="flex-1 min-w-0">
          <h4 class="text-white font-bold text-sm md:text-base leading-tight line-clamp-2">{project.name}</h4>
          <p class="text-white/70 text-[11px] md:text-xs truncate font-medium mt-0.5">
            {#if project.tags && project.tags.length > 0}
              <span class="uppercase">{project.tags[0]}</span> • 
            {/if}
            {#if project.version}v{project.version}{/if}
          </p>
        </div>
        
        <!-- Get Button -->
        <div class="shrink-0 pl-2">
          <button class="bg-white/20 hover:bg-white text-white hover:text-black px-4 py-1.5 md:px-5 md:py-2 rounded-full font-bold text-xs md:text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
            GET
          </button>
        </div>
      </div>
    </div>
    
  </div>
</a>
