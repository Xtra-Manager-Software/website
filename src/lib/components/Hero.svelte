<script>
  import { onMount } from "svelte";

  // Simulate a featured app from the list. In a real app, you might pass this as a prop.
  // For now, we'll hardcode the "Xtra Kernel Manager" feel since it's the flagship.
</script>

<section class="relative w-full px-4 pt-6 pb-2 md:pt-10 flex justify-center">
  <div class="relative w-full max-w-[1200px] h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden group cursor-pointer">
    
    <!-- Background Image/Gradient -->
    <div class="absolute inset-0 bg-surface-container-low transition-transform duration-700 group-hover:scale-105">
      <!-- Simulated abstract background -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary/20 via-surface to-background"></div>
      <div class="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"></div>
    </div>

    <!-- Content -->
    <div class="absolute inset-0 flex flex-col justify-end p-6 md:p-12 z-10">
      <div class="flex items-center gap-2 mb-3 opacity-0 animate-slide-up">
        <span class="px-3 py-1 bg-primary text-on-primary text-xs font-bold uppercase tracking-widest rounded-full">Editor's Choice</span>
      </div>
      
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-on-surface tracking-tighter mb-4 opacity-0 animate-slide-up animation-delay-100">
        Xtra Kernel Manager
      </h1>
      
      <p class="text-on-surface-variant text-base md:text-lg max-w-xl line-clamp-2 mb-8 opacity-0 animate-slide-up animation-delay-200">
        Real-time visibility and precise control over CPU performance, thermal behavior, and power efficiency on custom kernels.
      </p>
      
      <div class="flex items-center gap-4 opacity-0 animate-slide-up animation-delay-300">
        <a href="/app/xtra-kernel-manager" class="bg-on-surface text-surface hover:bg-on-surface/90 px-8 py-3 rounded-full font-bold transition-all hover:scale-105">
          View Detail
        </a>
        <a href="https://github.com/Xtra-Manager-Software/xtra-kernel-manager" target="_blank" rel="noopener noreferrer" class="bg-surface-container-high/50 backdrop-blur-md text-on-surface hover:bg-surface-container-high px-8 py-3 rounded-full font-bold transition-all border border-outline/10 hover:border-outline/30">
          Source
        </a>
      </div>
    </div>
    
  </div>
</section>
