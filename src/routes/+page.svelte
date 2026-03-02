<script>
  import Hero from "$lib/components/Hero.svelte";
  import Platform from "$lib/components/Platform.svelte";

  let { data } = $props();
</script>

<svelte:head>
  <title>Xtra Manager Software - Home</title>
  <meta name="description" content="Build programs that are actually useful. Xtra Manager Software Community focuses on designing maintainable, real-world solutions." />
  <meta name="keywords" content="Xtra Manager, Open Source, Software, Android, Kotlin, Rust, Web Development, Community, Tools" />
  
  <!-- OpenGraph -->
  <meta property="og:title" content="Xtra Manager Software - Home" />
  <meta property="og:description" content="Build programs that are actually useful. Xtra Manager Software Community focuses on designing maintainable, real-world solutions." />
  <meta property="og:type" content="website" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Xtra Manager Software - Home" />
  <meta name="twitter:description" content="Build programs that are actually useful. Xtra Manager Software Community focuses on designing maintainable, real-world solutions." />
</svelte:head>

<Hero />
<Platform platforms={data.platforms} categories={data.categories} error={data.error} />
