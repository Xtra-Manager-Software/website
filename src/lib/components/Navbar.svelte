<script>
  import IconMenu from "~icons/material-symbols/menu-rounded";
  import IconClose from "~icons/material-symbols/close-rounded";

  let isMenuOpen = $state(false);

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<nav class="fixed top-2 left-2 right-2 z-50">
  <div
    class="bg-surface-container-high/90 backdrop-blur-xl text-on-surface rounded-full shadow-xl px-4 md:px-6 min-h-[3.5rem] md:min-h-[4rem] transition-all duration-300 flex items-center justify-between relative"
  >
    <a
      href="/"
      class="font-bold tracking-tight hover:bg-on-surface/10 rounded-full px-3 py-2 md:px-4 text-base md:text-xl lg:text-2xl shrink-0 transition-colors inline-flex items-center"
    >
      <span class="text-primary">Xtra </span>ManagerSoftware
    </a>

    <div class="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
      <ul class="flex flex-row gap-1 font-medium text-base list-none m-0 p-0">
        <li>
          <a
            href="#features"
            class="rounded-full hover:bg-primary/10 hover:text-primary transition-colors px-4 py-2 block xl:px-5"
            >Features</a
          >
        </li>
        <li>
          <a
            href="#platform"
            class="rounded-full hover:bg-primary/10 hover:text-primary transition-colors px-4 py-2 block xl:px-5"
            >Platform</a
          >
        </li>
        <li>
          <a
            href="#team"
            class="rounded-full hover:bg-primary/10 hover:text-primary transition-colors px-4 py-2 block xl:px-5"
            >Team</a
          >
        </li>
        <li>
          <a
            href="#blog"
            class="rounded-full hover:bg-primary/10 hover:text-primary transition-colors px-4 py-2 block xl:px-5"
            >Blog</a
          >
        </li>
      </ul>
    </div>

    <div class="flex items-center gap-2">
      <div class="hidden lg:flex items-center gap-2">
        <a
          href="#get-started"
          class="bg-primary text-on-primary hover:bg-primary/90 rounded-full px-6 py-2.5 font-medium transition-transform hover:scale-105 active:scale-95 inline-flex items-center justify-center"
        >
          Get Started
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
      class="absolute top-16 right-4 w-52 bg-surface-container-high rounded-2xl shadow-xl overflow-hidden lg:hidden animate-in slide-in-from-top-2 fade-in duration-200 z-40 p-2 origin-top-right"
    >
      <ul
        class="flex flex-col w-full gap-1 text-base text-on-surface list-none m-0 p-0"
      >
        <li>
          <a
            href="#features"
            onclick={toggleMenu}
            class="block rounded-xl hover:bg-primary/10 active:bg-primary/20 py-3 px-4 transition-colors"
            >Features</a
          >
        </li>
        <li>
          <a
            href="#platform"
            onclick={toggleMenu}
            class="block rounded-xl hover:bg-primary/10 active:bg-primary/20 py-3 px-4 transition-colors"
            >Platform</a
          >
        </li>
        <li>
          <a
            href="#team"
            onclick={toggleMenu}
            class="block rounded-xl hover:bg-primary/10 active:bg-primary/20 py-3 px-4 transition-colors"
            >Team</a
          >
        </li>
        <li>
          <a
            href="#blog"
            onclick={toggleMenu}
            class="block rounded-xl hover:bg-primary/10 active:bg-primary/20 py-3 px-4 transition-colors"
            >Blog</a
          >
        </li>
        <div class="h-px bg-outline/20 my-2"></div>
        <li>
          <a
            href="#get-started"
            onclick={toggleMenu}
            class="block rounded-xl bg-primary text-on-primary hover:bg-primary/90 py-3 px-4 text-center font-medium transition-transform active:scale-95"
            >Get Started</a
          >
        </li>
      </ul>
    </div>
  {/if}
</nav>
