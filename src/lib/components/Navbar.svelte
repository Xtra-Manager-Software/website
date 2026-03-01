<script>
  import IconMenu from "~icons/material-symbols/menu-rounded";
  import IconClose from "~icons/material-symbols/close-rounded";
  import IconGithub from "~icons/simple-icons/github";
  import IconSun from "~icons/ph/sun-bold";
  import IconMoon from "~icons/ph/moon-bold";
  import { navigate } from "../router.js";
  import { onMount } from "svelte";

  let isMenuOpen = $state(false);
  let isScrolled = $state(false);
  let isDarkMode = $state(true);

  let activeSection = $state("");

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function goHome(e) {
    if (e) e.preventDefault();
    navigate("/");
    isMenuOpen = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    activeSection = "home";
  }

  function navigateTo(e, id) {
    if (e) e.preventDefault();
    isMenuOpen = false;
    
    // Hash routing for in-page anchors
    if (id.startsWith("#")) {
        activeSection = id.replace("#", "");
        if (window.location.pathname !== "/") {
            // Navigate home first, then scroll
            navigate("/");
            setTimeout(() => {
                const el = document.getElementById(activeSection);
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }, 100);
        } else {
            // Already home, just scroll
            const el = document.getElementById(activeSection);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
        // Use history API to subtly update URL without triggering router reload
        window.history.pushState(null, '', `/${id}`);
        return;
    }

    // Standard page routing updates
    navigate(`/${id}`);
    if (id === "") {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        activeSection = "home";
    } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
        activeSection = id;
    }
  }

  function toggleTheme(event) {
    // Determine exact click position for the circular animation origin
    const x = event.clientX;
    const y = event.clientY;
    
    // Set custom CSS variables for the animation origin
    document.documentElement.style.setProperty("--x", `${x}px`);
    document.documentElement.style.setProperty("--y", `${y}px`);

    const newThemeIsDark = !isDarkMode;

    // Use View Transitions API if supported
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        applyTheme(newThemeIsDark);
      });
    } else {
      // Fallback for browsers without View Transitions
      applyTheme(newThemeIsDark);
    }
  }

  function applyTheme(dark) {
    isDarkMode = dark;
    if (dark) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }

  onMount(() => {
    // Initialize Theme
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      applyTheme(false);
    } else if (storedTheme === "dark") {
      applyTheme(true);
    } else {
      // Fallback to OS preference
      const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
      applyTheme(!prefersLight);
    }

    const handleScroll = () => {
      isScrolled = window.scrollY > 20;
    };

    window.addEventListener("scroll", handleScroll);

    // Setup intersection observer for scroll spy (only for home page sections like hero, blog if they stay)
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id === "hero" && window.location.pathname === "/") activeSection = "home";
          else if (id === "blog" && window.location.pathname === "/") activeSection = "blog";
        }
      });
    };

    const observerOptions = {
      rootMargin: "-20% 0px -60% 0px", // adjust to trigger earlier/later when scrolling
      threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe specific sections if they exist on the current page
    setTimeout(() => {
        const ids = ["hero", "blog"];
        ids.forEach((id) => {
          const el = document.getElementById(id);
          if (el) observer.observe(el);
        });
    }, 100);

    // Set active section based on current path
    const path = window.location.pathname;
    if (path === "/" || path === "") {
        activeSection = "home";
    } else {
        activeSection = path.substring(1); // removes the leading slash
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
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
            onclick={(e) => navigateTo(e, "")}
            class={`relative rounded-full hover:bg-on-surface/5 transition-all px-4 py-2 block cursor-pointer overflow-hidden group/nav ${activeSection === 'home' ? 'text-primary' : 'text-on-surface hover:text-primary'}`}
            ><span class="relative z-10">Home</span>
            <span class={`absolute bottom-0 left-0 w-full h-[2px] bg-primary transition-transform origin-left duration-300 ${activeSection === 'home' ? 'scale-x-100' : 'scale-x-0 group-hover/nav:scale-x-100'}`}></span>
            </button
          >
        </li>
        <li>
          <button
            onclick={(e) => navigateTo(e, "platform")}
            class={`relative rounded-full hover:bg-on-surface/5 transition-all px-4 py-2 block cursor-pointer overflow-hidden group/nav ${activeSection === 'platform' ? 'text-primary' : 'text-on-surface hover:text-primary'}`}
            ><span class="relative z-10">Platform</span>
            <span class={`absolute bottom-0 left-0 w-full h-[2px] bg-primary transition-transform origin-left duration-300 ${activeSection === 'platform' ? 'scale-x-100' : 'scale-x-0 group-hover/nav:scale-x-100'}`}></span>
            </button
          >
        </li>
        <li>
          <button
            onclick={(e) => navigateTo(e, "team")}
            class={`relative rounded-full hover:bg-on-surface/5 transition-all px-4 py-2 block cursor-pointer overflow-hidden group/nav ${activeSection === 'team' ? 'text-primary' : 'text-on-surface hover:text-primary'}`}
            ><span class="relative z-10">Team</span>
            <span class={`absolute bottom-0 left-0 w-full h-[2px] bg-primary transition-transform origin-left duration-300 ${activeSection === 'team' ? 'scale-x-100' : 'scale-x-0 group-hover/nav:scale-x-100'}`}></span>
            </button
          >
        </li>
        <li>
          <button
            onclick={(e) => navigateTo(e, "downloads")}
            class={`relative rounded-full hover:bg-on-surface/5 transition-all px-4 py-2 block cursor-pointer overflow-hidden group/nav ${activeSection === 'downloads' ? 'text-primary' : 'text-on-surface hover:text-primary'}`}
            ><span class="relative z-10">Downloads</span>
            <span class={`absolute bottom-0 left-0 w-full h-[2px] bg-primary transition-transform origin-left duration-300 ${activeSection === 'downloads' ? 'scale-x-100' : 'scale-x-0 group-hover/nav:scale-x-100'}`}></span>
            </button
          >
        </li>
        <li>
          <button
            onclick={(e) => navigateTo(e, "blog")}
            class={`relative rounded-full hover:bg-on-surface/5 transition-all px-4 py-2 block cursor-pointer overflow-hidden group/nav ${activeSection === 'blog' ? 'text-primary' : 'text-on-surface hover:text-primary'}`}
            ><span class="relative z-10">Blog</span>
            <span class={`absolute bottom-0 left-0 w-full h-[2px] bg-primary transition-transform origin-left duration-300 ${activeSection === 'blog' ? 'scale-x-100' : 'scale-x-0 group-hover/nav:scale-x-100'}`}></span>
            </button
          >
        </li>
      </ul>
    </div>

    <div class="flex items-center gap-2">
      <div class="hidden lg:flex items-center gap-2">
        <button
          onclick={toggleTheme}
          class="p-2.5 rounded-full hover:bg-on-surface/10 transition-transform hover:scale-105 active:scale-95 inline-flex items-center justify-center text-on-surface cursor-pointer"
          aria-label="Toggle Theme"
        >
          {#if isDarkMode}
            <IconMoon class="text-xl" />
          {:else}
            <IconSun class="text-xl" />
          {/if}
        </button>
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
      class="absolute top-[4.5rem] right-0 w-48 bg-surface border border-outline-variant/20 rounded-2xl p-2 lg:hidden animate-in fade-in zoom-in-95 duration-200 z-50 origin-top-right shadow-lg shadow-black/10"
    >
      <ul
        class="flex flex-col w-full gap-1 text-sm font-medium text-on-surface list-none m-0 p-0"
      >
        <li>
          <button
            onclick={(e) => navigateTo(e, "")}
            class={`w-full block rounded-lg hover:bg-on-surface/10 py-2 px-3 transition-colors text-left cursor-pointer ${activeSection === 'home' ? 'text-primary bg-primary/10' : 'hover:text-primary active:bg-primary/20'}`}
            >Home</button
          >
        </li>
        <li>
          <button
            onclick={(e) => navigateTo(e, "platform")}
            class={`w-full block rounded-lg hover:bg-on-surface/10 py-2 px-3 transition-colors text-left cursor-pointer ${activeSection === 'platform' ? 'text-primary bg-primary/10' : 'hover:text-primary active:bg-primary/20'}`}
            >Platform</button
          >
        </li>
        <li>
          <button
            onclick={(e) => navigateTo(e, "team")}
            class={`w-full block rounded-lg hover:bg-on-surface/10 py-2 px-3 transition-colors text-left cursor-pointer ${activeSection === 'team' ? 'text-primary bg-primary/10' : 'hover:text-primary active:bg-primary/20'}`}
            >Team</button
          >
        </li>
        <div class="h-px bg-outline/10 my-1.5"></div>
        <li>
          <button
            onclick={(e) => navigateTo(e, "downloads")}
            class={`w-full block rounded-lg hover:bg-on-surface/10 py-2 px-3 transition-colors text-left cursor-pointer ${activeSection === 'downloads' ? 'text-primary bg-primary/10' : 'hover:text-primary active:bg-primary/20'}`}
            >Downloads</button
          >
        </li>
        <li>
          <button
            onclick={(e) => navigateTo(e, "blog")}
            class={`w-full block rounded-lg hover:bg-on-surface/10 py-2 px-3 transition-colors text-left cursor-pointer ${activeSection === 'blog' ? 'text-primary bg-primary/10' : 'hover:text-primary active:bg-primary/20'}`}
            >Blog</button
          >
        </li>
        <div class="h-px bg-outline/10 my-1.5"></div>
        <li>
          <button
            onclick={(e) => { toggleTheme(e); }}
            class="w-full flex items-center justify-center gap-2 rounded-lg hover:bg-on-surface/10 py-2 px-3 transition-colors text-on-surface cursor-pointer"
          >
            {#if isDarkMode}
              <IconMoon class="text-lg" />
              <span>Light Mode</span>
            {:else}
              <IconSun class="text-lg" />
              <span>Dark Mode</span>
            {/if}
          </button>
        </li>
        <li>
          <a
            href="https://github.com/Xtra-Manager-Software"
            target="_blank"
            rel="noopener noreferrer"
            onclick={toggleMenu}
            class="w-full flex items-center justify-center gap-2 rounded-lg hover:bg-on-surface/10 py-2 px-3 transition-colors text-on-surface"
          >
            <IconGithub class="text-lg" />
            <span>GitHub</span>
          </a>
        </li>
      </ul>
    </div>
  {/if}
</nav>
