<script>
  import '../app.css';
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  // import Constellation from "$lib/components/Constellation.svelte";
  import PageLoader from "$lib/components/PageLoader.svelte";
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  let { children } = $props();

  onMount(() => {
    // Remove splash screen with fade-out effect once Svelte boots
    const splash = document.getElementById("splash-screen");
    if (splash) {
      splash.style.opacity = "0";
      splash.style.visibility = "hidden";
      setTimeout(() => {
        splash.remove();
      }, 500); // Wait for transition to finish
    }
  });
  
  // Excluded routes from header/footer
  let hideHeadFoot = $derived(["/maintenance", "/not-found", "/server-error"].includes($page.url.pathname));
</script>

<PageLoader />

{#if !hideHeadFoot}
  <Navbar />
{/if}

<!-- Animated Starfield & Grid Background -->
<div class="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-background">
  <!-- <Constellation /> -->
  <div class="bg-grid-static"></div>
</div>

<main
  class="min-h-screen bg-transparent text-on-surface flex flex-col items-center pt-16 md:pt-20 relative z-10 w-full"
>
  {@render children()}
</main>

{#if !hideHeadFoot}
  <Footer />
{/if}
