<script>
  import IconGithub from "~icons/simple-icons/github";
  import IconTelegram from "~icons/simple-icons/telegram";
  import { onMount, onDestroy } from "svelte";
  import { fade, fly } from "svelte/transition";

  const team = [
    {
      name: "Gustyx-Power",
      realName: "Gusti Aditya Muzaky",
      university: "Pelita Bangsa University",
      role: "Founder & Developer",
      bio: "Not a Pro Developer, just want to share my hobby and improve the community.",
      avatar: "https://avatars.githubusercontent.com/u/142430633?v=4",
      github: "https://github.com/Gustyx-Power",
      telegram: "https://t.me/Gustyx_Power",
    },
    {
      name: "Pavelc4",
      realName: "Dimas Dwi Ariyanto",
      university: "Widyatama University",
      role: "Co Founders & Web Developer",
      bio: "Just an ordinary student with a passion web development.",
      avatar: "https://avatars.githubusercontent.com/u/94319420?v=4",
      github: "https://github.com/pavelc4",
      telegram: "https://t.me/pavellc",
    },
    {
      name: "Ziyu4",
      realName: "Pandu",
      role: "Contributor & Backend Developer",
      bio: "Just Meow Meow",
      avatar: "https://avatars.githubusercontent.com/ziyu4",
      github: "https://github.com/ziyu4",
      telegram: "https://t.me/ziyu4",
    },
    {
      name: "Im-Sleepy",
      realName: "Mohammad Adi",
      role: "Frontend Developer",
      bio: "Professional sleeper who also happens to know how to code. Loves experimenting with UI/UX when not taking a nap.",
      avatar: "https://avatars.githubusercontent.com/u/234120829?s=64&v=4",
      github: "https://github.com/sleep-bugy",
      telegram: "https://t.me/manusiatukangtidur",
    },
  ];

  let currentIndex = 0;
  let timer;

  function next() {
    currentIndex = (currentIndex + 1) % team.length;
  }

  function prev() {
    currentIndex = (currentIndex - 1 + team.length) % team.length;
  }

  function resetTimer() {
    if (timer) clearInterval(timer);
    timer = setInterval(next, 5000);
  }

  onMount(() => {
    resetTimer();
  });

  onDestroy(() => {
    if (timer) clearInterval(timer);
  });
</script>

<section
  id="team"
  class="py-8 md:py-12 px-4 relative select-none cursor-default"
>
  <div class="w-full max-w-4xl mx-auto relative z-10">
    <div class="text-center mb-8 md:mb-10">
      <h2 class="text-3xl md:text-4xl font-bold text-on-surface mb-2 tracking-tight">
        Our Team
      </h2>
      <p class="text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
        The minds behind Xtra Manager Software.
      </p>
    </div>

    <!-- Single Carousel Card -->
    <div class="bento-card relative overflow-hidden group min-h-[480px] md:min-h-[320px] flex items-center justify-center opacity-0 animate-slide-up animation-delay-300">
      <!-- Background Gradient Effect -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

      <!-- Carousel Navigation (Arrows) -->
      <button
        onclick={() => { prev(); resetTimer(); }}
        class="absolute left-2 md:left-4 z-20 w-10 h-10 rounded-full bg-surface-container-high/50 hover:bg-primary hover:text-on-primary text-on-surface flex items-center justify-center backdrop-blur-md border border-outline/10 transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
        aria-label="Previous Team Member"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>
      <button
        onclick={() => { next(); resetTimer(); }}
        class="absolute right-2 md:right-4 z-20 w-10 h-10 rounded-full bg-surface-container-high/50 hover:bg-primary hover:text-on-primary text-on-surface flex items-center justify-center backdrop-blur-md border border-outline/10 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
        aria-label="Next Team Member"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>

      <!-- Carousel Content -->
      <div class="relative w-full h-full px-10 md:px-16 py-4 flex items-center">
        {#key currentIndex}
          <div
            in:fly={{ x: 50, duration: 400, delay: 100 }}
            out:fade={{ duration: 200 }}
            class="absolute inset-0 px-10 md:px-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 w-full h-full"
          >
            <!-- Avatar Left -->
            <div class="relative shrink-0 mt-2 md:mt-0 flex flex-col items-center gap-5">
              <div class="relative w-32 h-32 md:w-40 md:h-40 group-hover:scale-105 transition-transform duration-500 shadow-xl rounded-full">
                <div class="absolute inset-[-4px] rounded-full bg-gradient-to-tr from-primary to-secondary opacity-0 group-hover:opacity-100 blur-[4px] transition-opacity duration-500"></div>
                <img
                  src={team[currentIndex].avatar}
                  alt={team[currentIndex].name}
                  loading="lazy"
                  crossorigin="anonymous"
                  class="w-full h-full object-cover bg-surface-container-highest relative z-10 rounded-full border-4 border-surface-container-highest transition-colors duration-500"
                />
              </div>

              <!-- Action Buttons -->
              <div class="flex items-center gap-3 md:gap-4">
                <a
                  href={team[currentIndex].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full bg-surface-container-high text-on-surface hover:text-on-primary hover:bg-primary border border-outline/10 transition-all duration-300 glow-primary-hover"
                  aria-label="GitHub Profile"
                >
                  <IconGithub class="text-lg md:text-xl transition-transform" />
                </a>
                <a
                  href={team[currentIndex].telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full bg-surface-container-high text-on-surface hover:text-on-primary hover:bg-primary border border-outline/10 transition-all duration-300 glow-primary-hover"
                  aria-label="Telegram Profile"
                >
                  <IconTelegram class="text-lg md:text-xl transition-transform" />
                </a>
              </div>
            </div>

            <!-- Text Right -->
            <div class="flex flex-col items-center md:items-start text-center md:text-left max-w-lg">
              <h3 class="text-2xl md:text-3xl font-bold text-on-surface mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                {team[currentIndex].name}
              </h3>
              <p class="text-sm font-medium text-on-surface-variant mb-4">
                {team[currentIndex].realName}
              </p>

              <div class="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-4">
                <span class="px-3 py-1.5 rounded-md bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-wider">
                  {team[currentIndex].role}
                </span>
                {#if team[currentIndex].university}
                  <span class="px-3 py-1.5 rounded-md bg-primary/10 border border-primary/20 text-xs font-bold tracking-wider uppercase" style="color: var(--primary);">
                    {team[currentIndex].university}
                  </span>
                {/if}
              </div>

              <p class="text-on-surface-variant leading-relaxed text-sm md:text-base mb-2 md:mb-4 line-clamp-3">
                {team[currentIndex].bio}
              </p>
            </div>
          </div>
        {/key}
      </div>
      
      <!-- Dots Indicator -->
      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {#each team as _, i}
          <button
            onclick={() => { currentIndex = i; resetTimer(); }}
            aria-label="Go to slide {i + 1}"
            class="w-2.5 h-2.5 rounded-full transition-all duration-300 {currentIndex === i ? 'bg-primary scale-125 w-6' : 'bg-outline/30 hover:bg-outline/60'}"
          ></button>
        {/each}
      </div>
    </div>
  </div>
</section>
