<script>
  import IconGithub from "~icons/simple-icons/github";
  import IconTelegram from "~icons/simple-icons/telegram";

  const team = [
    {
      name: "Gustyx-Power",
      role: "Founder & Developer",
      bio: "Not a Pro Developer, just want to share my hobby and improve the community.",
      avatar: "https://avatars.githubusercontent.com/u/142430633?v=4",
      github: "https://github.com/Gustyx-Power",
      telegram: "https://t.me/Gustyx_Power",
    },
    {
      name: "Pavelc4",
      role: "Co Founders & UI/UX",
      bio: "Just an ordinary student with a passion web development.",
      avatar: "https://avatars.githubusercontent.com/u/94319420?v=4",
      github: "https://github.com/pavelc4",
      telegram: "https://t.me/pavelc4",
    },
  ];
</script>

<section
  id="team"
  class="py-20 md:py-32 px-4 relative overflow-hidden bg-surface select-none cursor-default"
>
  <div class="w-full max-w-4xl mx-auto relative z-10">
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
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
      {#each team as member}
        <div
          class="group relative flex flex-col items-center text-center bg-surface-container-low/50 backdrop-blur-md rounded-[2.5rem] p-8 hover:bg-surface-container/60 transition-all duration-500 hover:-translate-y-2 overflow-hidden hover:shadow-[0_0_30px_var(--primary)/20]"
        >
          <div
            class="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          ></div>

          <div class="relative z-10 flex flex-col items-center w-full">
            <div class="mb-8 relative">
              <div
                class="relative w-32 h-32 md:w-40 md:h-40 group-hover:scale-105 transition-transform duration-500"
              >
                <!-- Foto Utama -->
                <img
                  src={member.avatar}
                  alt={member.name}
                  class="w-full h-full object-cover bg-surface-container-highest relative z-10 rounded-full"
                />
              </div>
            </div>

            <!-- Content -->
            <h3
              class="text-2xl font-bold text-on-surface mb-2 group-hover:text-primary transition-colors duration-300"
            >
              {member.name}
            </h3>
            <span
              class="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest mb-4"
            >
              {member.role}
            </span>
            <p
              class="text-on-surface-variant leading-relaxed text-sm md:text-base mb-8 line-clamp-3"
            >
              {member.bio}
            </p>

            <!-- Action Buttons -->
            <div class="mt-auto flex items-center justify-center gap-4">
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-surface-container-high text-on-surface hover:text-primary hover:bg-surface-container-highest transition-all duration-300 group/btn shadow-sm hover:shadow-md hover:scale-110"
                aria-label="GitHub Profile"
              >
                <IconGithub class="text-xl transition-transform" />
              </a>
              <a
                href={member.telegram}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-surface-container-high text-on-surface hover:text-primary hover:bg-surface-container-highest transition-all duration-300 group/btn shadow-sm hover:shadow-md hover:scale-110"
                aria-label="Telegram Profile"
              >
                <IconTelegram class="text-xl transition-transform" />
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
