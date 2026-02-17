<script>
  import { navigate } from "../router.js";
  import IconConstruction from "~icons/material-symbols/construction-rounded";
  import IconBuild from "~icons/material-symbols/build-rounded";
  import IconUpdate from "~icons/material-symbols/update-rounded";
  import IconSchedule from "~icons/material-symbols/schedule-rounded";
  import IconPending from "~icons/material-symbols/pending-actions";
  import IconHardware from "~icons/material-symbols/hardware-rounded";
</script>

<div
  class="min-h-screen flex items-center justify-center p-12 md:p-24 relative overflow-hidden bg-surface select-none cursor-default"
>
  <!-- Mesh Gradient Background - Amber/Construction tinted -->
  <div class="absolute inset-0 opacity-30">
    <div
      class="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_60%_60%,rgba(var(--color-primary),0.15),transparent_70%)]"
    ></div>
  </div>

  <div
    class="relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-20 md:gap-32 pl-8 md:pl-16"
  >
    <!-- Visual Element -->
    <div class="relative flex-shrink-0 group perspective-mid">
      <!-- Main Icon Container -->
      <div
        class="w-48 h-48 md:w-72 md:h-72 rounded-[3.5rem] bg-gradient-to-bl from-surface-container-high to-surface-container flex items-center justify-center shadow-2xl -rotate-3 group-hover:-rotate-6 transition-all duration-700 relative z-10 border border-white/5"
      >
        <IconConstruction
          class="text-8xl md:text-[9rem] text-primary drop-shadow-2xl opacity-90 transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <!-- Floating Elements -->
      <div
        class="absolute -top-12 -left-12 w-20 h-20 rounded-2xl bg-secondary-container flex items-center justify-center shadow-lg rotate-12 animate-float delay-0"
      >
        <IconBuild class="text-4xl text-on-secondary-container" />
      </div>

      <div
        class="absolute -bottom-10 -right-8 w-16 h-16 rounded-xl bg-tertiary-container flex items-center justify-center shadow-md -rotate-12 animate-float delay-1000"
      >
        <IconHardware class="text-3xl text-on-tertiary-container" />
      </div>

      <div
        class="absolute top-1/2 -right-16 w-14 h-14 rounded-full bg-error/10 flex items-center justify-center shadow-sm rotate-6 animate-float delay-2000"
      >
        <IconUpdate class="text-2xl text-error" />
      </div>

      <div
        class="absolute -bottom-4 -left-14 w-12 h-12 rounded-lg bg-surface-variant flex items-center justify-center shadow-sm -rotate-6 animate-float delay-3000"
      >
        <IconSchedule class="text-xl text-on-surface-variant" />
      </div>

      <div
        class="absolute -top-10 right-10 w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center shadow-sm rotate-45 animate-float delay-1000"
      >
        <IconPending class="text-lg text-primary" />
      </div>

      <!-- Glow Effect -->
      <div
        class="absolute inset-0 bg-primary/20 blur-[60px] -z-10 rounded-full animate-pulse-slow"
      ></div>
    </div>

    <!-- Content -->
    <div class="text-center md:text-left">
      <div
        class="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wider uppercase mb-6"
      >
        Scheduled Maintenance
      </div>

      <h1
        class="text-4xl md:text-6xl font-black text-on-surface mb-6 leading-tight"
      >
        We're Making <br /> Improvements
      </h1>

      <p
        class="text-lg text-on-surface-variant mb-8 max-w-md mr-auto leading-relaxed"
      >
        The system is currently undergoing necessary upgrades to serve you
        better. We'll be back online in a bit.
      </p>

      <div
        class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
      >
        <div
          class="px-8 py-3.5 bg-surface-container-high rounded-full font-bold shadow-lg flex items-center gap-3 border border-outline/10"
        >
          <div class="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></div>
          <span class="text-on-surface">Estimated Time: ~30m</span>
        </div>
      </div>

      <div class="mt-8 text-xs font-mono text-on-surface-variant/50">
        Status: UPGRADE_IN_PROGRESS
      </div>
    </div>
  </div>
</div>

<style>
  @keyframes float {
    0%,
    100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(5deg);
    }
  }
  @keyframes pulse-slow {
    0%,
    100% {
      opacity: 0.4;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.1);
    }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  .animate-pulse-slow {
    animation: pulse-slow 4s ease-in-out infinite;
  }
  /* Staggered delays for floating elements */
  .delay-0 {
    animation-delay: 0s;
  }
  .delay-1000 {
    animation-delay: 1s;
  }
  .delay-2000 {
    animation-delay: 2s;
  }
  .delay-3000 {
    animation-delay: 3s;
  }
</style>
