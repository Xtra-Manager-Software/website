<script>
  import IconGithub from "~icons/simple-icons/github";
  import IconKotlin from "~icons/simple-icons/kotlin";
  import IconRust from "~icons/simple-icons/rust";
  import IconC from "~icons/simple-icons/c";
  import IconSvelte from "~icons/simple-icons/svelte";
  import IconJavascript from "~icons/simple-icons/javascript";
  import IconCplusplus from "~icons/simple-icons/cplusplus";
  import IconJson from "~icons/simple-icons/json";
  import IconToml from "~icons/simple-icons/toml";
  import IconYaml from "~icons/simple-icons/yaml";
  import IconGradle from "~icons/simple-icons/gradle";
  import IconAndroid from "~icons/simple-icons/android";
  import IconJetpackCompose from "~icons/simple-icons/jetpackcompose";

  import { onMount } from "svelte";

  const techStack = [
    { icon: IconKotlin, name: "Kotlin" },
    { icon: IconAndroid, name: "Android" },
    { icon: IconJetpackCompose, name: "Jetpack Compose" },
    { icon: IconGradle, name: "Gradle" },
    { icon: IconRust, name: "Rust" },
    { icon: IconC, name: "C" },
    { icon: IconSvelte, name: "Svelte" },
    { icon: IconJavascript, name: "JavaScript" },
    { icon: IconCplusplus, name: "C++" },
    { icon: IconJson, name: "JSON" },
    { icon: IconToml, name: "TOML" },
    { icon: IconYaml, name: "YAML" },
    { icon: IconGithub, name: "GitHub" },
  ];
</script>

<section
  class="relative flex flex-col items-center justify-center text-center px-4 pt-8 pb-8 md:pt-12 md:pb-12 select-none cursor-default min-h-[calc(100vh-6rem)] md:min-h-0"
>
  <div
    class="absolute inset-0 -z-20 h-full w-full bg-grid-white/[0.05] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_100%,transparent_100%)]"
  ></div>


  <div
    class="w-full max-w-4xl mx-auto flex flex-col items-center gap-3 md:gap-5 lg:gap-6 relative z-10"
  >
    <h1
      class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-black tracking-tighter leading-[1.1] text-on-surface opacity-0 animate-slide-up text-balance"
    >
      Build programs that are <br class="hidden sm:block" />
      <span class="text-gradient">actually useful.</span>
    </h1>

    <p
      class="text-sm md:text-base lg:text-lg text-on-surface-variant max-w-2xl leading-relaxed opacity-0 animate-slide-up animation-delay-200 px-4"
    >
      Xtra Manager Software Community focuses on designing maintainable,
      real-world solutions—not just trends. We build practical tools driven by
      real needs.
    </p>

    <div
      class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto max-w-sm sm:max-w-none opacity-0 animate-slide-up animation-delay-400 mt-4"
    >
      <a
        href="#highlights"
        class="w-full sm:w-auto bg-primary text-on-primary hover:bg-primary/90 px-8 py-3.5 md:px-10 md:py-4 rounded-full font-bold transition-all duration-300 inline-flex items-center justify-center gap-2"
      >
        Explore Project
      </a>

      <a
        href="https://github.com/Xtra-Manager-Software"
        target="_blank"
        rel="noopener noreferrer"
        class="w-full sm:w-auto glass hover:bg-surface-container/80 text-on-surface px-8 py-3.5 md:px-10 md:py-4 rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
      >
        See More on GitHub
      </a>
    </div>

    <div
      class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-12 mt-6 md:mt-10 pt-6 border-t border-outline/10 w-full opacity-0 animate-slide-up animation-delay-500"
    >
      <div class="flex flex-col items-center gap-1 group">
        <span class="text-2xl sm:text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-on-surface to-outline group-hover:from-primary group-hover:to-secondary transition-all duration-300"
          >100%</span
        >
        <span
          class="text-xs md:text-sm font-medium text-on-surface-variant uppercase tracking-wider whitespace-nowrap"
          >Open Source</span
        >
      </div>
      <div class="flex flex-col items-center gap-1 group">
        <span class="text-2xl sm:text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-on-surface to-outline group-hover:from-primary group-hover:to-secondary transition-all duration-300"
          >Community</span
        >
        <span
          class="text-xs md:text-sm font-medium text-on-surface-variant uppercase tracking-wider whitespace-nowrap"
          >Powered</span
        >
      </div>
      <div class="flex flex-col items-center gap-1 group">
        <span class="text-2xl sm:text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-on-surface to-outline group-hover:from-primary group-hover:to-secondary transition-all duration-300"
          >Multi</span
        >
        <span
          class="text-xs md:text-sm font-medium text-on-surface-variant uppercase tracking-wider whitespace-nowrap"
          >Platform</span
        >
      </div>
      <div class="flex flex-col items-center gap-1 group">
        <span class="text-2xl sm:text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-on-surface to-outline group-hover:from-primary group-hover:to-secondary transition-all duration-300"
          >Free</span
        >
        <span
          class="text-xs md:text-sm font-medium text-on-surface-variant uppercase tracking-wider whitespace-nowrap"
          >Forever</span
        >
      </div>
    </div>

    <div
      class="mt-6 md:mt-8 w-full max-w-[calc(100vw-2rem)] md:max-w-5xl overflow-hidden relative opacity-0 animate-slide-up mask-linear-gradient mx-auto"
      style="animation-delay: 600ms;"
    >
      <div class="flex w-max">
        <div
          class="flex gap-8 md:gap-16 items-center animate-scroll whitespace-nowrap px-6"
        >
          {#each techStack as tech}
            <div
              class="flex flex-col items-center justify-center h-20 w-20 text-on-surface-variant/40 hover:text-white hover:scale-125 transition-all duration-300 drop-shadow-lg cursor-default"
              title={tech.name}
            >
              <tech.icon class="text-4xl md:text-5xl shrink-0" />
            </div>
          {/each}
        </div>
        <div
          class="flex gap-8 md:gap-16 items-center animate-scroll whitespace-nowrap px-6"
          aria-hidden="true"
        >
          {#each techStack as tech}
            <div
              class="flex flex-col items-center justify-center h-20 w-20 text-on-surface-variant/40 hover:text-white hover:scale-125 transition-all duration-300 drop-shadow-lg cursor-default"
              title={tech.name}
            >
              <tech.icon class="text-4xl md:text-5xl shrink-0" />
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  .animate-scroll {
    animation: scroll 40s linear infinite;
  }
  .mask-linear-gradient {
    mask-image: linear-gradient(
      to right,
      transparent,
      black 10%,
      black 90%,
      transparent
    );
    -webkit-mask-image: linear-gradient(
      to right,
      transparent,
      black 10%,
      black 90%,
      transparent
    );
  }
</style>
