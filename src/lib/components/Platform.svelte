<script>
  import IconArrowRight from "~icons/material-symbols/arrow-forward-rounded";
  import IconAndroid from "~icons/simple-icons/android";
  import IconGithub from "~icons/simple-icons/github";

  import { onMount, tick } from "svelte";

  let platforms = [];
  let loading = true;
  let error = null;

  onMount(async () => {
    const apiBase = import.meta.env.DEV ? "" : import.meta.env.API_URL;
    try {
      const response = await fetch(`${apiBase}/api/projects`);
      console.log("Response status:", response.status);
      if (!response.ok) throw new Error("Failed to fetch projects");
      const data = await response.json();
      console.log("Fetched data:", data);
      platforms = data.projects.map((p) => ({
        name: p.name,
        description: p.description,
        icon: null,
        logo_url: p.logo_url,
        tags: p.tags,
        sourceLink: p.project_url,
        downloadLink: p.download_url,
        version: p.version,
      }));
    } catch (e) {
      console.error(e);
      error = e.message;
    } finally {
      loading = false;
    }
  });
</script>

<section
  id="platform"
  class="py-20 md:py-32 px-4 relative overflow-hidden select-none cursor-default"
>
  <div class="absolute inset-0 pointer-events-none -z-10">
    <div
      class="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-[250px] h-[250px] bg-secondary/5 rounded-full blur-[80px]"
    ></div>
  </div>

  <div class="max-w-6xl mx-auto">
    <div class="flex flex-col items-center text-center gap-4 mb-16 md:mb-24">
      <div
        class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline/10 text-xs font-medium text-primary"
      >
        <span>Our Ecosystem</span>
      </div>
      <h2
        class="text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight"
      >
        Platforms & Projects
      </h2>
      <p class="text-on-surface-variant max-w-2xl text-lg">
        Explore the tools we've built to solve real-world problems. Open source
        and free forever.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {#each platforms as platform}
        <div
          class="group relative flex flex-col bg-surface-container-low/50 backdrop-blur-md rounded-[2rem] p-6 md:p-8 hover:bg-surface-container/60 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 overflow-hidden"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          ></div>

          <div class="relative z-10 flex flex-col h-full">
            {#if platform.version}
              <div
                class="absolute -top-2 -right-2 px-3 py-1.5 rounded-full bg-secondary-container text-on-secondary-container border border-outline/5 text-[11px] font-bold tracking-widest uppercase shadow-sm"
              >
                {platform.version}
              </div>
            {/if}

            <div
              class="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-tertiary-container text-on-tertiary-container group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm overflow-hidden"
            >
              {#if platform.logo_url}
                <img
                  src={platform.logo_url}
                  alt={platform.name}
                  class="w-full h-full object-cover"
                />
              {:else if platform.icon}
                <svelte:component this={platform.icon} class="text-2xl" />
              {:else}
                <IconAndroid class="text-2xl" />
              {/if}
            </div>

            <h3
              class="text-2xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors duration-300 tracking-tight"
            >
              {platform.name}
            </h3>

            <p class="text-on-surface-variant mb-6 leading-relaxed text-base">
              {platform.description}
            </p>

            <div class="flex flex-wrap gap-2 mb-8">
              {#each platform.tags as tag}
                <span
                  class="px-3 py-1.5 rounded-full bg-surface-variant/50 hover:bg-surface-variant text-xs font-medium text-on-surface-variant transition-colors border border-outline/5 cursor-default"
                >
                  {tag}
                </span>
              {/each}
            </div>

            <div
              class="flex items-center justify-end gap-3 mt-auto pt-4 border-t border-outline-variant/20"
            >
              <a
                href={platform.sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-tertiary-container hover:bg-tertiary-container/80 text-sm font-medium text-on-tertiary-container transition-all duration-300 hover:scale-105 group/btn"
              >
                <IconGithub
                  class="text-lg group-hover/btn:scale-110 transition-transform"
                />
                GitHub
              </a>
              {#if platform.downloadLink}
                <a
                  href={platform.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 text-sm font-medium text-on-primary transition-all duration-300 group/btn"
                >
                  <span>Download</span>
                  <IconArrowRight
                    class="text-lg group-hover/btn:translate-x-1 transition-transform"
                  />
                </a>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
