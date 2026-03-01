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
      const response = await fetch(`${apiBase}/api/projects/highlights`);
      console.log("Response status:", response.status);
      if (!response.ok) throw new Error("Failed to fetch projects");
      const data = await response.json();
      console.log("Fetched data:", data);

      platforms = data.projects.slice(0, 3).map((p) => ({
        name: p.name,
        description: p.description,
        icon: null,
        logo_url: p.logo_url,
        tags: p.tags,
        sourceLink: p.project_url,
        downloadLink: p.download_url,
        version: p.version,
        updated_at: p.updated_at || p.created_at,
      }));
    } catch (e) {
      console.error(e);
      error = e.message;
    } finally {
      loading = false;
    }
  });
  function getCategoryLabel(tags) {
    if (!tags) return null;
    const lowerTags = tags.map((t) => t.toLowerCase());
    if (lowerTags.includes("apps")) return "Applications";
    if (lowerTags.includes("module")) return "Root Module";
    if (lowerTags.includes("kernel")) return "Android Kernel";
    if (lowerTags.includes("rom")) return "Custom ROM";
    if (lowerTags.includes("tools")) return "System Tools";
    return null;
  }

  function filterGenericTags(tags) {
    if (!tags) return [];
    const genericTags = ["apps", "module", "kernel", "rom", "tools"];
    return tags.filter((tag) => {
      return !genericTags.includes(tag.toLowerCase());
    });
  }

  function formatDate(unixTimestamp) {
    if (!unixTimestamp) return "";
    const date = new Date(unixTimestamp * 1000);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  }
</script>

<section
  id="platform"
  class="py-20 md:py-32 px-4 relative select-none cursor-default"
>
  <div class="absolute inset-0 pointer-events-none -z-10">
    <div
      class="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] rounded-full opacity-5"
      style="background: radial-gradient(circle, var(--primary) 0%, transparent 70%);"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-[250px] h-[250px] rounded-full opacity-5"
      style="background: radial-gradient(circle, var(--secondary) 0%, transparent 70%);"
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

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 opacity-0 animate-slide-up animation-delay-300">
      {#each platforms as platform, index}
        <div
          class="group bento-card flex flex-col pt-12"
          style="animation-delay: {index * 150}ms;"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          ></div>

          <div class="relative z-10 flex flex-col h-full">
            {#if platform.version}
              <div
                class="absolute -top-4 -right-4 px-3 py-1.5 rounded-bl-3xl rounded-tr-3xl bg-primary/20 text-primary border-b border-l border-primary/20 text-[10px] font-bold tracking-widest uppercase shadow-sm z-20 backdrop-blur-md"
              >
                {platform.version}
              </div>
            {/if}

            <div class="flex items-center gap-4 mb-6">
              <div
                class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-surface-container-highest/50 border border-outline/10 text-primary group-hover:scale-110 group-hover:rotate-3 group-hover:bg-primary/20 transition-all duration-500 shadow-sm overflow-hidden shrink-0"
              >
                {#if platform.logo_url}
                  <img
                    src={platform.logo_url}
                    alt={platform.name}
                    class="w-full h-full object-cover"
                    crossorigin="anonymous"
                  />
                {:else if platform.icon}
                  <svelte:component this={platform.icon} class="text-2xl" />
                {:else}
                  <IconAndroid class="text-2xl" />
                {/if}
              </div>
              
              {#if platform.updated_at}
                <div class="text-[10px] font-medium text-on-surface-variant/70 bg-surface-container-highest/50 px-2 py-1 rounded-md border border-outline/5">
                  Updated: {formatDate(platform.updated_at)}
                </div>
              {/if}
            </div>

            <h3
              class="text-2xl font-bold text-on-surface mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300 tracking-tight"
            >
              {platform.name}
            </h3>

            <div class="flex items-center justify-between gap-2 mb-3">
              {#if getCategoryLabel(platform.tags)}
                <div class="text-sm font-medium text-primary">
                  {getCategoryLabel(platform.tags)}
                </div>
              {/if}
            </div>

            <p
              class="text-on-surface-variant mb-6 leading-relaxed text-base whitespace-pre-line"
            >
              {platform.description}
            </p>

            <div class="flex flex-wrap gap-2 mb-8 mt-4">
              {#each filterGenericTags(platform.tags) as tag}
                <span
                  class="px-3 py-1 rounded-full bg-outline/5 border border-outline/10 text-[10px] uppercase tracking-wider font-semibold text-on-surface-variant transition-colors group-hover:bg-primary/10 group-hover:border-primary/20 group-hover:text-primary cursor-default"
                >
                  {tag}
                </span>
              {/each}
            </div>

            <div class="flex items-center justify-end gap-3 mt-auto pt-6 border-t border-outline/5">
              <a
                href={platform.sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl
                bg-surface-container hover:bg-surface-container-highest border border-outline/10
                text-sm font-medium text-on-surface transition-all duration-300 hover:-translate-y-1 group/btn"
              >
                <IconGithub
                  class="text-lg group-hover/btn:scale-110 group-hover/btn:text-primary transition-all"
                />
                GitHub
              </a>

              {#if platform.downloadLink}
                <a
                  href={platform.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-on-primary border border-primary/20 hover:border-transparent text-sm font-medium transition-all duration-300 group/btn hover:-translate-y-1 glow-primary-hover"
                >
                  <span class="group-hover/btn:scale-105 transition-transform">Download</span>
                </a>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
