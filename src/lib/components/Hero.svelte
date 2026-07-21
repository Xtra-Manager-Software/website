<script>
  import { onMount, onDestroy } from "svelte";
  import { fade, slide } from 'svelte/transition';

  let { projects = [] } = $props();
  
  // We'll take up to 5 projects to feature in the carousel
  let featuredProjects = $derived(projects.slice(0, 5));
  let currentIndex = $state(0);
  let interval;

  onMount(() => {
    if (featuredProjects.length > 1) {
      interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % featuredProjects.length;
      }, 5000); // Slide every 5 seconds
    }
  });

  onDestroy(() => {
    if (interval) clearInterval(interval);
  });

  function goToSlide(index) {
    currentIndex = index;
    // Reset interval when user manually clicks
    if (interval) {
      clearInterval(interval);
      interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % featuredProjects.length;
      }, 5000);
    }
  }
</script>

<section class="relative w-full px-4 pt-6 pb-2 md:pt-10 flex justify-center">
  {#if featuredProjects.length > 0}
    <div class="relative w-full max-w-[1200px] h-[450px] md:h-[500px] rounded-[2rem] overflow-hidden group">
      
      <!-- Global Carousel Background -->
      <div class="absolute inset-0 bg-surface-container-low overflow-hidden pointer-events-none z-0">
        <!-- Simulated abstract background -->
        <div class="absolute inset-0 bg-gradient-to-br from-primary/20 via-surface to-background"></div>
        <div class="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]"></div>
        
        <!-- Gradient fading towards the right so text is readable -->
        <div class="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent"></div>
      </div>

      <!-- Carousel Content -->
      {#each featuredProjects as project, i}
        {#if currentIndex === i}
          <div transition:fade={{ duration: 600 }} class="absolute inset-0 flex flex-col-reverse md:flex-row items-center p-6 md:p-12 z-10 gap-8 md:gap-12">
            
            <!-- Left Side: Text Content -->
            <div class="flex-1 flex flex-col justify-center items-start h-full max-w-2xl">
              <div class="flex items-center gap-2 mb-4">
                <span class="px-3 py-1 bg-primary text-on-primary text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full">
                  Editor's Choice
                </span>
                {#if project.tags && project.tags.length > 0}
                  <span class="px-3 py-1 bg-surface-variant/50 border border-outline/10 text-on-surface-variant text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full hidden sm:inline-block">
                    {project.tags[0]}
                  </span>
                {/if}
              </div>
              
              <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-on-surface tracking-tighter mb-4 line-clamp-2">
                {project.name}
              </h1>
              
              <p class="text-on-surface-variant text-sm md:text-lg max-w-xl line-clamp-3 mb-8">
                {project.description}
              </p>
              
              <div class="flex items-center gap-4">
                <!-- Generating slug dynamically -->
                <a href="/app/{project.slug || project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')}" class="bg-on-surface text-surface hover:bg-on-surface/90 px-8 py-3 rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-white/5">
                  View Detail
                </a>
              </div>
            </div>

            <!-- Right Side: Logo / Image -->
            <div class="w-24 h-24 md:w-56 md:h-56 shrink-0 md:mr-12 drop-shadow-2xl">
              <div class="w-full h-full rounded-3xl md:rounded-[3rem] bg-surface-container overflow-hidden border-2 border-outline/20 shadow-2xl relative">
                {#if project.logo_url}
                  <img src={project.logo_url} alt={project.name} class="w-full h-full object-cover" />
                {:else}
                  <div class="w-full h-full flex items-center justify-center bg-surface-variant text-on-surface-variant text-4xl md:text-7xl font-black">
                    {project.name.charAt(0)}
                  </div>
                {/if}
                <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
              </div>
            </div>
            
          </div>
        {/if}
      {/each}
      
      <!-- Carousel Indicators (Dots) -->
      {#if featuredProjects.length > 1}
        <div class="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
          {#each featuredProjects as _, idx}
            <button 
              onclick={() => goToSlide(idx)}
              aria-label="Go to slide {idx + 1}"
              class="h-2 rounded-full transition-all duration-300 {currentIndex === idx ? 'w-8 bg-primary' : 'w-2 bg-on-surface-variant/40 hover:bg-on-surface-variant/80'}"
            ></button>
          {/each}
        </div>
      {/if}
      
    </div>
  {:else}
    <!-- Fallback if no projects available yet -->
    <div class="relative w-full max-w-[1200px] h-[200px] rounded-[2rem] bg-surface-container flex items-center justify-center">
       <p class="text-on-surface-variant">Loading featured projects...</p>
    </div>
  {/if}
</section>
