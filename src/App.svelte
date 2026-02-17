<script>
  import Navbar from "./lib/components/Navbar.svelte";
  import Footer from "./lib/components/Footer.svelte";
  import Home from "./lib/routes/Home.svelte";
  import NotFound from "./lib/routes/NotFound.svelte";
  import ServerError from "./lib/routes/ServerError.svelte";
  import Maintenance from "./lib/routes/Maintenance.svelte";
  import { route, params, handleLocation } from "./lib/router.js";
  import { onMount } from "svelte";

  onMount(() => {
    handleLocation();
  });
</script>

{#if !["not-found", "server-error", "maintenance"].includes($route)}
  <Navbar />
{/if}

<main
  class="min-h-screen bg-background text-on-surface flex flex-col items-center pt-20"
>
  {#if $route === "home"}
    <Home />
  {:else if $route === "server-error"}
    <ServerError />
  {:else if $route === "maintenance"}
    <Maintenance />
  {:else}
    <NotFound />
  {/if}
</main>

{#if !["not-found", "server-error", "maintenance"].includes($route)}
  <Footer />
{/if}
