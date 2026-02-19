<script>
  import Navbar from "./lib/components/Navbar.svelte";
  import Footer from "./lib/components/Footer.svelte";
  import { route, params, handleLocation } from "./lib/router.js";
  import { onMount } from "svelte";

  onMount(() => {
    handleLocation();
  });

  const routes = {
    home: () => import("./lib/routes/Home.svelte"),
    "server-error": () => import("./lib/routes/ServerError.svelte"),
    maintenance: () => import("./lib/routes/Maintenance.svelte"),
    downloads: () => import("./lib/routes/Downloads.svelte"),
    "not-found": () => import("./lib/routes/NotFound.svelte"),
  };
</script>

{#if !["not-found", "server-error", "maintenance"].includes($route)}
  <Navbar />
{/if}

<main
  class="min-h-screen bg-background text-on-surface flex flex-col items-center pt-20"
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
