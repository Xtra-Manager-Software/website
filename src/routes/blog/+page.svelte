<script>
  import BlogList from "$lib/components/BlogList.svelte";

  let { data } = $props();
</script>

<svelte:head>
  <title>Xtra Manager Software - Blog</title>
  <meta name="description" content="Stay up to date with the latest news, releases, and articles from the Xtra Manager Software team." />
  <meta name="keywords" content="android development, kernel, root, tech blog, software updates" />

  <!-- OpenGraph -->
  <meta property="og:title" content="Xtra Manager Software - Blog" />
  <meta property="og:description" content="Stay up to date with the latest news, releases, and articles from the Xtra Manager Software team." />
  <meta property="og:type" content="website" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Xtra Manager Software - Blog" />
  <meta name="twitter:description" content="Stay up to date with the latest news, releases, and articles from the Xtra Manager Software team." />
</svelte:head>

<BlogList articles={data.articles} errorMsg={data.error} pagination={data.pagination} />
