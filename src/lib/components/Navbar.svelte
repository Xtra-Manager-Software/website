<script>
  import IconMenu from "~icons/material-symbols/menu-rounded";
  import IconClose from "~icons/material-symbols/close-rounded";
  import IconGithub from "~icons/simple-icons/github";
  import { navigate } from "../router.js";
  import { onMount } from "svelte";

  let isMenuOpen = $state(false);
  let isScrolled = $state(false);

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function goHome(e) {
    e.preventDefault();
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
    isMenuOpen = false;
  }

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 20;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<nav class="fixed top-2 left-2 right-2 z-50 select-none cursor-default">
  <div
    class={`
      rounded-full px-4 md:px-6 min-h-[3.5rem] md:min-h-[4rem] 
      flex items-center justify-between relative
      transition-all duration-500 ease-in-out
      text-on-surface
      ${
        isScrolled
          ? "bg-surface/30 backdrop-blur-[80px] shadow-lg"
          : "bg-transparent shadow-none"
      }
    `}
  >
    <div
      class="font-bold tracking-tight px-3 py-2 md:px-4 text-base md:text-xl lg:text-2xl shrink-0 inline-flex items-center select-none cursor-default"
    >
      <span class="text-primary">Xtra </span>ManagerSoftware
    </div>

    <div class="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
      <ul class="flex flex-row gap-1 font-medium text-base list-none m-0 p-0">
        <li>
          <a
            href="/"
            onclick={goHome}
            class="rounded-full hover:bg-primary/10 hover:text-primary transition-colors px-4 py-2 block xl:px-5"
            >Home</a
          >
        </li>
        <li>
          <a
            href="/#platform"
            class="rounded-full hover:bg-primary/10 hover:text-primary transition-colors px-4 py-2 block xl:px-5"
            >Platform</a
          >
        </li>
        <li>
          <a
            href="/#team"
            class="rounded-full hover:bg-primary/10 hover:text-primary transition-colors px-4 py-2 block xl:px-5"
            >Team</a
          >
        </li>
        <li>
          <a
            href="/downloads"
            class="rounded-full hover:bg-primary/10 hover:text-primary transition-colors px-4 py-2 block xl:px-5"
            >Downloads</a
          >
        </li>
        <li>
          <a
            href="/#blog"
            class="rounded-full hover:bg-primary/10 hover:text-primary transition-colors px-4 py-2 block xl:px-5"
            >Blog</a
          >
        </li>
      </ul>
    </div>

    <div class="flex items-center gap-2">
      <div class="hidden lg:flex items-center gap-2">
        <div
          class="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-surface-container-high/50 border border-outline/10 text-xs font-medium text-on-surface-variant hover:bg-surface-container-high/80 transition-colors cursor-default"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-primary/80 animate-pulse"
          ></span>
          <span>Open Source</span>
        </div>
        <a
          href="https://github.com/Xtra-Manager-Software"
          target="_blank"
          rel="noopener noreferrer"
          class="p-2.5 rounded-full hover:bg-on-surface/10 transition-transform hover:scale-105 active:scale-95 inline-flex items-center justify-center text-on-surface"
          aria-label="GitHub Organization"
        >
          <IconGithub class="text-xl" />
        </a>
      </div>

      <div class="lg:hidden">
        <button
          class="p-2 rounded-full hover:bg-on-surface/10 transition-colors inline-flex items-center justify-center"
          onclick={toggleMenu}
          aria-label="Toggle menu"
        >
          {#if isMenuOpen}
            <IconClose class="text-xl md:text-2xl" />
          {:else}
            <IconMenu class="text-xl md:text-2xl" />
          {/if}
        </button>
      </div>
    </div>
  </div>

  {#if isMenuOpen}
    <div
      class="absolute top-16 right-4 w-52 bg-surface-container-high/90 backdrop-blur-2xl rounded-2xl shadow-xl overflow-hidden lg:hidden animate-in slide-in-from-top-2 fade-in duration-200 z-40 p-2 origin-top-right"
    >
      <ul
        class="flex flex-col w-full gap-1 text-base text-on-surface list-none m-0 p-0"
      >
        <li>
          <a
            href="/"
            onclick={goHome}
            class="block rounded-xl hover:bg-primary/10 active:bg-primary/20 py-3 px-4 transition-colors text-center"
            >Home</a
          >
        </li>
        <li>
          <a
            href="/#platform"
            onclick={toggleMenu}
            class="block rounded-xl hover:bg-primary/10 active:bg-primary/20 py-3 px-4 transition-colors text-center"
            >Platform</a
          >
        </li>
        <li>
          <a
            href="/#team"
            onclick={toggleMenu}
            class="block rounded-xl hover:bg-primary/10 active:bg-primary/20 py-3 px-4 transition-colors text-center"
            >Team</a
          >
        </li>
        <div class="h-px bg-outline/10 my-2"></div>
        <li>
          <a
            href="/downloads"
            onclick={toggleMenu}
            class="block rounded-xl hover:bg-primary/10 active:bg-primary/20 py-3 px-4 transition-colors text-center"
            >Downloads</a
          >
        </li>
        <li>
          <a
            href="/#blog"
            onclick={toggleMenu}
            class="block rounded-xl hover:bg-primary/10 active:bg-primary/20 py-3 px-4 transition-colors text-center"
            >Blog</a
          >
        </li>
        <div class="h-px bg-outline/10 my-2"></div>
        <li>
          <a
            href="https://github.com/Xtra-Manager-Software"
            target="_blank"
            rel="noopener noreferrer"
            onclick={toggleMenu}
            class="w-full flex items-center justify-center gap-3 rounded-xl hover:bg-on-surface/10 py-3 px-4 font-medium transition-colors text-on-surface"
          >
            <IconGithub class="text-xl" />
            <span>GitHub</span>
          </a>
        </li>
      </ul>
    </div>
  {/if}
</nav>
