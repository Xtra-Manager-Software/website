<script>
  import IconGithub from "~icons/simple-icons/github";
  import IconTelegram from "~icons/simple-icons/telegram";
  import IconDiscord from "~icons/simple-icons/discord";

  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-background text-onSurface pt-10 pb-8 mt-24 relative border-t border-outline/10 z-20">
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
  <div class="w-full max-w-7xl mx-auto px-6 md:px-12">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
      <div class="flex flex-col gap-3">
        <div class="flex flex-col gap-1">
          <span
            class="font-bold text-xl tracking-tight select-none cursor-default"
          >
            <span class="text-primary">Xtra </span>ManagerSoftware
          </span>
          <p class="text-sm text-onSurfaceVariant leading-relaxed max-w-xs">
            Building practical, open-source tools driven by real community
            needs.
          </p>
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <h3 class="font-bold text-base text-onSurface select-none cursor-default">
          Product
        </h3>
        <ul class="flex flex-col gap-2 text-sm text-onSurfaceVariant">
          <li>
            <a href="/#highlights" class="hover:text-primary transition-colors"
              >Highlights</a
            >
          </li>
          <li>
            <a href="/team" class="hover:text-primary transition-colors">Team</a
            >
          </li>
          <li>
            <a href="/blog" class="hover:text-primary transition-colors">Blog</a
            >
          </li>
        </ul>
      </div>

      <div class="flex flex-col gap-3">
        <h3 class="font-bold text-base text-onSurface select-none cursor-default">
          Projects
        </h3>
        <ul class="flex flex-col gap-2 text-sm text-onSurfaceVariant">
          <li>
            <a href="/projects/apps" class="hover:text-primary transition-colors"
              >Apps</a
            >
          </li>
          <li>
            <a href="/projects/modules" class="hover:text-primary transition-colors"
              >Modules</a
            >
          </li>
          <li>
            <a href="/projects/kernels" class="hover:text-primary transition-colors"
              >Kernels</a
            >
          </li>
        </ul>
      </div>

      <div class="flex flex-col gap-3">
        <h3 class="font-bold text-base text-onSurface select-none cursor-default">
          Community
        </h3>
        <ul class="flex flex-col gap-4 text-sm mt-1">
          <li>
            <a
              href="https://github.com/Xtra-Manager-Software"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 text-onSurfaceVariant hover:text-primary transition-colors group"
            >
              <IconGithub class="text-xl group-hover:scale-110 transition-transform" />
              <span class="font-medium">GitHub Organization</span>
            </a>
          </li>
          <li>
            <a
              href="https://t.me/XtraManagerSoftware"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 text-onSurfaceVariant hover:text-primary transition-colors group"
            >
              <IconTelegram class="text-xl group-hover:scale-110 transition-transform" />
              <span class="font-medium">Telegram Community</span>
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/mQYVj4twYZ"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 text-onSurfaceVariant hover:text-primary transition-colors group"
            >
              <IconDiscord class="text-xl group-hover:scale-110 transition-transform" />
              <span class="font-medium">Discord Server</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  
  <div class="w-full max-w-7xl mx-auto px-6 md:px-12 pt-6 mt-4 border-t border-outline/5 flex flex-col items-center justify-center text-xs text-onSurfaceVariant/50 font-medium gap-2 pb-2">
    <div class="flex flex-col md:flex-row items-center gap-1 md:gap-4 text-center">
      <p>&copy; {currentYear} Xtra Manager Software.</p>
      <span class="hidden md:inline">•</span>
      <p>
        Developed by
        <a href="https://github.com/pavelc4" target="_blank" rel="noopener noreferrer" class="text-primary underline decoration-primary/50 hover:decoration-primary transition-colors">pavelc4</a>
        &
        <a href="https://github.com/ziyu4" target="_blank" rel="noopener noreferrer" class="text-primary underline decoration-primary/50 hover:decoration-primary transition-colors">ziyu4</a>
      </p>
    </div>
  </div>
</footer>
