<script>
  import { navigate } from "../router.js";
  import IconArrowLeft from "~icons/material-symbols/arrow-back-rounded";
  import IconCloudOff from "~icons/material-symbols/cloud-off-rounded";
  import IconBugReport from "~icons/material-symbols/bug-report-rounded";
  import IconStorage from "~icons/material-symbols/storage-rounded";
  import IconMemory from "~icons/material-symbols/memory-rounded";
  import IconRefresh from "~icons/material-symbols/refresh-rounded";
  import IconWarning from "~icons/material-symbols/warning-rounded";
</script>

<svelte:head>
  <title>500 Server Error - Xtra Manager</title>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div
  class="min-h-screen flex items-center justify-center p-12 md:p-24 relative overflow-hidden bg-surface select-none cursor-default"
>
  <!-- Mesh Gradient Background - Red/Error tinted -->
  <div class="absolute inset-0 opacity-30">
    <div
      class="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_60%_60%,rgba(var(--color-error),0.1),transparent_70%)]"
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
        <IconCloudOff
          class="text-8xl md:text-[9rem] text-error drop-shadow-2xl opacity-90 transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <!-- Floating Elements -->
      <div
        class="absolute -top-12 -left-12 w-20 h-20 rounded-2xl bg-secondary-container flex items-center justify-center shadow-lg rotate-12 animate-float delay-0"
      >
        <IconBugReport class="text-4xl text-on-secondary-container" />
      </div>

      <div
        class="absolute -bottom-10 -right-8 w-16 h-16 rounded-xl bg-error/10 flex items-center justify-center shadow-md -rotate-12 animate-float delay-1000"
      >
        <IconWarning class="text-3xl text-error" />
      </div>

      <div
        class="absolute top-1/2 -right-16 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shadow-sm rotate-6 animate-float delay-2000"
      >
        <IconStorage class="text-2xl text-primary" />
      </div>

      <div
        class="absolute -bottom-4 -left-14 w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center shadow-sm -rotate-6 animate-float delay-3000"
      >
        <IconMemory class="text-xl text-tertiary" />
      </div>

      <!-- Glow Effect -->
      <div
        class="absolute inset-0 bg-error/40 blur-[80px] -z-10 rounded-full animate-pulse-slow"
      ></div>
    </div>

    <!-- Content -->
    <div class="text-center md:text-left">
      <div
        class="inline-block px-4 py-1.5 rounded-full bg-error/10 text-error font-bold text-sm tracking-wider uppercase mb-6"
      >
        500 Server Error
      </div>

      <h1
        class="text-4xl md:text-6xl font-black text-on-surface mb-6 leading-tight"
      >
        System <br /> Malfunction
      </h1>

      <p
        class="text-lg text-on-surface-variant mb-8 max-w-md mr-auto leading-relaxed"
      >
        Our servers encountered an unexpected condition. Is it us? Yes, it's
        definitely us.
      </p>

      <div
        class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
      >
        <button
          on:click={() => window.location.reload()}
          class="px-8 py-3.5 bg-surface-container-high hover:bg-surface-container-highest text-on-surface rounded-full font-medium transition-all duration-300 hover:shadow-md active:scale-95 border border-outline/10 flex items-center gap-2"
        >
          <IconRefresh class="w-5 h-5" />
          <span>Try Again</span>
        </button>

        <button
          on:click={() => navigate("/")}
          class="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-on-surface text-surface rounded-full font-bold shadow-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
        >
          <div
            class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
          ></div>
          <IconArrowLeft
            class="w-5 h-5 group-hover:-translate-x-1 transition-transform relative"
          />
          <span class="relative">Return Home</span>
        </button>
      </div>

      <div class="mt-8 text-xs font-mono text-on-surface-variant/50">
        Error Code: 500_INTERNAL_SERVER_ERROR
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
      opacity: 0.3;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.25);
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
