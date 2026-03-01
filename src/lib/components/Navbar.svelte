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
          ? "bg-surface-container/70 backdrop-blur-xl border border-outline-variant/30 shadow-lg"
          : "bg-surface-container/30 backdrop-blur-md border border-outline-variant/20 shadow-none"
      }
    `}
  >
    <div
      class="font-bold tracking-tight px-3 py-2 md:px-4 text-base md:text-xl lg:text-2xl shrink-0 inline-flex items-center select-none cursor-default"
    >
      <span class="text-primary">Xtra </span>ManagerSoftware
    </div>

    <div class="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
      <ul class="flex flex-row gap-2 font-medium text-sm list-none m-0 p-0">
        <li>
          <button
            onclick={goHome}
            class="relative rounded-full hover:bg-on-surface/5 text-on-surface hover:text-primary transition-all px-4 py-2 block cursor-pointer overflow-hidden group/nav"
            ><span class="relative z-10">Home</span>
            <span class="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover/nav:scale-x-100 transition-transform origin-left duration-300"></span>
            </button
          >
        </li>
        <li>
          <button
            onclick={() => navigate("/#platform")}
            class="relative rounded-full hover:bg-on-surface/5 text-on-surface hover:text-primary transition-all px-4 py-2 block cursor-pointer overflow-hidden group/nav"
            ><span class="relative z-10">Platform</span>
            <span class="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover/nav:scale-x-100 transition-transform origin-left duration-300"></span>
            </button
          >
        </li>
        <li>
          <button
            onclick={() => navigate("/#team")}
            class="relative rounded-full hover:bg-on-surface/5 text-on-surface hover:text-primary transition-all px-4 py-2 block cursor-pointer overflow-hidden group/nav"
            ><span class="relative z-10">Team</span>
            <span class="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover/nav:scale-x-100 transition-transform origin-left duration-300"></span>
            </button
          >
        </li>
        <li>
          <button
            onclick={() => navigate("/downloads")}
            class="relative rounded-full hover:bg-on-surface/5 text-on-surface hover:text-primary transition-all px-4 py-2 block cursor-pointer overflow-hidden group/nav"
            ><span class="relative z-10">Downloads</span>
            <span class="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover/nav:scale-x-100 transition-transform origin-left duration-300"></span>
            </button
          >
        </li>
        <li>
          <button
            onclick={() => navigate("/#blog")}
            class="relative rounded-full hover:bg-on-surface/5 text-on-surface hover:text-primary transition-all px-4 py-2 block cursor-pointer overflow-hidden group/nav"
            ><span class="relative z-10">Blog</span>
            <span class="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover/nav:scale-x-100 transition-transform origin-left duration-300"></span>
            </button
          >
        </li>
      </ul>
    </div>

    <div class="flex items-center gap-2">
      <div class="hidden lg:flex items-center gap-2">
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
      class="absolute top-16 right-4 w-52 bento-card p-3 lg:hidden animate-in slide-in-from-top-4 fade-in duration-300 z-40 origin-top-right shadow-2xl shadow-black/50"
    >
      <ul
        class="flex flex-col w-full gap-1.5 text-sm font-medium text-on-surface list-none m-0 p-0"
      >
        <li>
          <button
            onclick={goHome}
            class="w-full block rounded-xl hover:bg-on-surface/10 hover:text-primary active:bg-primary/20 py-2.5 px-4 transition-all duration-300 text-left cursor-pointer"
            >Home</button
          >
        </li>
        <li>
          <button
            onclick={() => { navigate("/#platform"); toggleMenu(); }}
            class="w-full block rounded-xl hover:bg-on-surface/10 hover:text-primary active:bg-primary/20 py-2.5 px-4 transition-all duration-300 text-left cursor-pointer"
            >Platform</button
          >
        </li>
        <li>
          <button
            onclick={() => { navigate("/#team"); toggleMenu(); }}
            class="w-full block rounded-xl hover:bg-on-surface/10 hover:text-primary active:bg-primary/20 py-2.5 px-4 transition-all duration-300 text-left cursor-pointer"
            >Team</button
          >
        </li>
        <div class="h-px bg-outline/10 my-2"></div>
        <li>
          <button
            onclick={() => { navigate("/downloads"); toggleMenu(); }}
            class="w-full block rounded-xl hover:bg-primary/10 active:bg-primary/20 py-3 px-4 transition-colors text-center cursor-pointer"
            >Downloads</button
          >
        </li>
        <li>
          <button
            onclick={() => { navigate("/#blog"); toggleMenu(); }}
            class="w-full block rounded-xl hover:bg-primary/10 active:bg-primary/20 py-3 px-4 transition-colors text-center cursor-pointer"
            >Blog</button
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
