<script>
  import IconAndroid from "~icons/material-symbols/android";
  import Navbar from "./lib/components/Navbar.svelte";
  import Hero from "./lib/components/Hero.svelte";
  import Platform from "./lib/components/Platform.svelte";
  import Team from "./lib/components/Team.svelte";
  import Footer from "./lib/components/Footer.svelte";
</script>

<Navbar />

<main
  class="min-h-screen bg-background text-on-surface flex flex-col items-center pt-20"
>
  <Hero />
  <Platform />
  <Team />
</main>

<Footer />
