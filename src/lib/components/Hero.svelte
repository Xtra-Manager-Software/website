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
  class="relative min-h-[90dvh] flex flex-col items-center justify-center text-center px-4 py-12 md:py-24 overflow-hidden select-none cursor-default"
>
  <div class="absolute inset-0 -z-10 overflow-hidden">
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary/20 rounded-full blur-[100px] md:blur-[120px] opacity-30 animate-pulse"
    ></div>
  </div>

  <div
    class="w-full max-w-4xl mx-auto flex flex-col items-center gap-4 md:gap-8 lg:gap-10 relative z-10"
  >
    <div
      class="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-surface-container-high border border-outline/10 text-xs md:text-sm font-medium text-on-surface-variant hover:bg-surface-container-high/80 transition-colors cursor-default animate-in slide-in-from-bottom-2 fade-in duration-500"
    >
      <span class="w-2 h-2 rounded-full bg-primary/80 animate-pulse"></span>
      <span class="hidden sm:inline"
        >Open Source • Practical • Collaborative</span
      >
      <span class="sm:hidden">Open Source</span>
    </div>

    <h1
      class="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight text-on-surface animate-in slide-in-from-bottom-4 fade-in duration-700 delay-100 text-balance"
    >
      Build programs that are <br class="hidden sm:block" />
      <span class="text-primary">actually useful.</span>
    </h1>

    <p
      class="text-sm md:text-base lg:text-xl text-on-surface-variant max-w-3xl leading-relaxed animate-in slide-in-from-bottom-6 fade-in duration-700 delay-200"
    >
      Xtra Manager Software Community focuses on designing maintainable,
      real-world solutions—not just trends. We build practical tools driven by
      real needs.
    </p>

    <div
      class="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto max-w-sm sm:max-w-none animate-in slide-in-from-bottom-8 fade-in duration-700 delay-300"
    >
      <a
        href="#platform"
        class="w-full sm:w-auto bg-primary text-on-primary hover:bg-primary/90 px-6 py-2.5 text-sm md:text-base md:px-8 md:py-3.5 rounded-full font-medium transition-transform hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
      >
        Explore Project
      </a>

      <a
        href="https://github.com/Xtra-Manager-Software"
        target="_blank"
        rel="noopener noreferrer"
        class="w-full sm:w-auto bg-surface-container-high text-on-surface hover:bg-on-surface/5 border border-outline/10 px-6 py-2.5 text-sm md:text-base md:px-8 md:py-3.5 rounded-full font-medium transition-colors inline-flex items-center justify-center gap-2"
      >
        See More
      </a>
    </div>

    <div
      class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-16 mt-8 md:mt-24 pt-8 border-t border-outline/10 w-full animate-in fade-in duration-1000 delay-500"
    >
      <div class="flex flex-col items-center gap-0.5 md:gap-1">
        <span class="text-xl sm:text-2xl md:text-3xl font-bold text-on-surface"
          >100%</span
        >
        <span
          class="text-[10px] sm:text-xs md:text-sm text-on-surface-variant whitespace-nowrap"
          >Open Source</span
        >
      </div>
      <div class="flex flex-col items-center gap-0.5 md:gap-1">
        <span class="text-xl sm:text-2xl md:text-3xl font-bold text-on-surface"
          >Community</span
        >
        <span
          class="text-[10px] sm:text-xs md:text-sm text-on-surface-variant whitespace-nowrap"
          >Powered</span
        >
      </div>
      <div class="flex flex-col items-center gap-0.5 md:gap-1">
        <span class="text-xl sm:text-2xl md:text-3xl font-bold text-on-surface"
          >Multi</span
        >
        <span
          class="text-[10px] sm:text-xs md:text-sm text-on-surface-variant whitespace-nowrap"
          >Platform</span
        >
      </div>
      <div class="flex flex-col items-center gap-0.5 md:gap-1">
        <span class="text-xl sm:text-2xl md:text-3xl font-bold text-on-surface"
          >Free</span
        >
        <span
          class="text-[10px] sm:text-xs md:text-sm text-on-surface-variant whitespace-nowrap"
          >Forever</span
        >
      </div>
    </div>

    <div
      class="mt-8 md:mt-24 w-full max-w-[calc(100vw-2rem)] md:max-w-5xl overflow-hidden relative animate-in fade-in duration-1000 delay-700 mask-linear-gradient mx-auto"
    >
      <div class="flex w-max">
        <div
          class="flex gap-8 md:gap-12 items-center animate-scroll whitespace-nowrap px-6"
        >
          {#each techStack as tech}
            <div
              class="flex flex-col items-center gap-2 text-on-surface-variant/50 hover:text-primary transition-colors duration-300"
              title={tech.name}
            >
              <tech.icon class="text-3xl md:text-4xl" />
            </div>
          {/each}
        </div>
        <div
          class="flex gap-8 md:gap-12 items-center animate-scroll whitespace-nowrap px-6"
          aria-hidden="true"
        >
          {#each techStack as tech}
            <div
              class="flex flex-col items-center gap-2 text-on-surface-variant/50 hover:text-primary transition-colors duration-300"
              title={tech.name}
            >
              <tech.icon class="text-3xl md:text-4xl" />
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
