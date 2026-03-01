<script>
  import IconGithub from "~icons/simple-icons/github";
  import IconTelegram from "~icons/simple-icons/telegram";

  const team = [
    {
      name: "Gustyx-Power",
      realName: "Gusti Aditya Muzaky",
      university: "Pelita Bangsa University",
      role: "Founder & Mobile Developer",
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
</script>

<section
  id="team"
  class="py-10 md:py-20 px-4 relative select-none cursor-default"
>
  <div class="w-full max-w-5xl mx-auto relative z-10">
    <div class="text-center mb-16 md:mb-24">
      <h2
        class="text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface mb-6 tracking-tight"
      >
        Our Team
      </h2>
      <p
        class="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
      >
        The minds behind Xtra Manager Software.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mx-auto opacity-0 animate-slide-up animation-delay-300">
      {#each team as member, index}
        <div
          class="group bento-card flex flex-col items-center text-center p-5 md:p-6 hover:-translate-y-3 h-full min-h-[400px]"
          style="animation-delay: {index * 150}ms;"
        >
          <!-- Gradient Hover Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          ></div>

          <div class="relative z-10 flex flex-col items-center w-full h-full">
            <div class="mb-5 relative">
              <div
                class="relative w-24 h-24 md:w-28 md:h-28 group-hover:scale-105 transition-transform duration-500 shadow-xl rounded-full"
              >
                <!-- Animated Ring -->
                <div class="absolute inset-[-4px] rounded-full bg-gradient-to-tr from-primary to-secondary opacity-0 group-hover:opacity-100 blur-[2px] transition-opacity duration-500"></div>
                <img
                  src={member.avatar}
                  alt={member.name}
                  loading="lazy"
                  crossorigin="anonymous"
                  class="w-full h-full object-cover bg-surface-container-highest relative z-10 rounded-full border-4 border-surface-container-highest group-hover:border-transparent transition-colors duration-500"
                />
              </div>
            </div>

            <!-- Content -->
            <h3
              class="text-xl md:text-2xl font-bold text-on-surface mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300"
            >
              {member.name}
            </h3>
            <p class="text-xs md:text-sm font-medium text-on-surface-variant mb-4">
              {member.realName}
            </p>
            
            <div class="h-8 mb-4 flex items-center justify-center w-full">
              {#if member.university}
                <span
                  class="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] md:text-[10px] font-bold tracking-wider uppercase line-clamp-1"
                >
                  {member.university}
                </span>
              {/if}
            </div>
            
            <span
              class="inline-block px-3 md:px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4"
            >
              {member.role}
            </span>
            
            <p
              class="text-on-surface-variant leading-relaxed text-xs md:text-sm mb-6 line-clamp-3 flex-1 flex items-center justify-center w-full"
            >
              {member.bio}
            </p>

            <!-- Action Buttons -->
            <div class="mt-auto pt-5 flex items-center justify-center gap-3 w-full border-t border-outline/5 shrink-0">
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-high text-on-surface hover:text-primary hover:bg-primary/10 border border-outline/5 hover:border-primary/20 transition-all duration-300 group/btn shadow-sm hover:scale-110 hover:shadow-[0_0_15px_rgba(255,183,132,0.3)]"
                aria-label="GitHub Profile"
              >
                <IconGithub class="text-lg transition-transform" />
              </a>
              <a
                href={member.telegram}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-high text-on-surface hover:text-primary hover:bg-primary/10 border border-outline/5 hover:border-primary/20 transition-all duration-300 group/btn shadow-sm hover:scale-110 hover:shadow-[0_0_15px_rgba(255,183,132,0.3)]"
                aria-label="Telegram Profile"
              >
                <IconTelegram class="text-lg transition-transform" />
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
