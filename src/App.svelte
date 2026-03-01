<script>
  import Navbar from "./lib/components/Navbar.svelte";
  import Footer from "./lib/components/Footer.svelte";
  import { route, params, handleLocation } from "./lib/router.js";
  import { onMount } from "svelte";

  let mouseX = $state(0);
  let mouseY = $state(0);

  onMount(() => {
    handleLocation();

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  const routes = {
    home: () => import("./lib/routes/Home.svelte"),
    "server-error": () => import("./lib/routes/ServerError.svelte"),
    maintenance: () => import("./lib/routes/Maintenance.svelte"),
    downloads: () => import("./lib/routes/Downloads.svelte"),
    "blog-article": () => import("./lib/routes/BlogArticle.svelte"),
    "not-found": () => import("./lib/routes/NotFound.svelte"),
  };
</script>

{#if !["not-found", "server-error", "maintenance"].includes($route)}
  <Navbar />
{/if}

<!-- Animated Global Background Elements (Always visible, perfectly synced) -->
<div class="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-background">
  <div class="bg-grid-animated"></div>
  
  <!-- Global Cursor Light (Hidden on mobile) -->
  <div
    class="absolute inset-0 opacity-20 pointer-events-none hidden md:block"
    style="background: radial-gradient(800px circle at {mouseX}px {mouseY}px, var(--primary) 0%, transparent 50%)"
  ></div>

  <div class="bg-blob blob-1"></div>
  <div class="bg-blob blob-2"></div>
  <div class="bg-blob blob-3"></div>
</div>

<main
  class="min-h-screen bg-transparent text-on-surface flex flex-col items-center pt-16 md:pt-20 relative z-10 w-full"
>
  {#await routes[$route]()}
    <div class="h-screen w-full flex items-center justify-center">
      <div
        class="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"
      ></div>
    </div>
  {:then module}
    <svelte:component this={module.default} />
  {:catch error}
    <div class="p-8 text-center text-error">
      <h2 class="text-xl font-bold mb-2">Failed to load page</h2>
      <p>{error.message}</p>
      <button
        class="mt-4 px-4 py-2 bg-surface-container-high rounded-full hover:bg-surface-container-highest"
        on:click={() => window.location.reload()}
      >
        Reload
      </button>
    </div>
  {/await}
</main>

{#if !["not-found", "server-error", "maintenance"].includes($route)}
  <Footer />
{/if}
