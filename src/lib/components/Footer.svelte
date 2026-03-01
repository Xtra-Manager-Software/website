<script>
  import IconGithub from "~icons/simple-icons/github";
  import IconTelegram from "~icons/simple-icons/telegram";
  import IconDiscord from "~icons/simple-icons/discord";

  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-background text-onSurface pt-16 pb-12 mt-20 relative overflow-hidden border-t border-outline/10">
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
  <div class="max-w-6xl mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
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
        <div
          class="flex flex-col gap-1 text-xs text-onSurfaceVariant/70 mt-auto"
        >
          <span>&copy; {currentYear} Xtra Manager Software.</span>
          <span>
            Developed by
            <a
              href="https://github.com/pavelc4"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary hover:underline font-medium transition-colors"
            >
              pavelc4
            </a>
            &
            <a
              href="https://github.com/ziyu4"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary hover:underline font-medium transition-colors"
            >
              ziyu4
            </a>
          </span>
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <h3 class="font-bold text-onSurface select-none cursor-default">
          Product
        </h3>
        <ul class="flex flex-col gap-2 text-sm text-onSurfaceVariant">
          <li>
            <a href="#features" class="hover:text-primary transition-colors"
              >Features</a
            >
          </li>
          <li>
            <a href="#platform" class="hover:text-primary transition-colors"
              >Platform</a
            >
          </li>
          <li>
            <a href="#team" class="hover:text-primary transition-colors">Team</a
            >
          </li>
          <li>
            <a href="#blog" class="hover:text-primary transition-colors">Blog</a
            >
          </li>
        </ul>
      </div>

      <div class="flex flex-col gap-4">
        <h3 class="font-bold text-onSurface select-none cursor-default">
          Downloads
        </h3>
        <ul class="flex flex-col gap-2 text-sm text-onSurfaceVariant">
          <li>
            <a href="/downloads" class="hover:text-primary transition-colors"
              >Apps</a
            >
          </li>
          <li>
            <a href="/downloads" class="hover:text-primary transition-colors"
              >Modules</a
            >
          </li>
          <li>
            <a href="/downloads" class="hover:text-primary transition-colors"
              >Kernels</a
            >
          </li>
        </ul>
      </div>

      <div class="flex flex-col gap-4">
        <h3 class="font-bold text-onSurface select-none cursor-default">
          Community
        </h3>
        <ul class="flex flex-col gap-3 text-sm">
          <li>
            <a
              href="https://github.com/Xtra-Manager-Software"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 text-onSurfaceVariant hover:text-primary transition-colors group"
            >
              <div
                class="p-2 rounded-full bg-surfaceContainerHigh hover:bg-onSurface/10 transition-colors"
              >
                <IconGithub class="text-lg" />
              </div>
              <span class="font-medium">GitHub Organization</span>
            </a>
          </li>
          <li>
            <a
              href="https://t.me/XtraManagerSoftware"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 text-onSurfaceVariant hover:text-primary transition-colors group"
            >
              <div
                class="p-2 rounded-full bg-surfaceContainerHigh hover:bg-onSurface/10 transition-colors"
              >
                <IconTelegram class="text-lg" />
              </div>
              <span class="font-medium">Telegram Community</span>
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/mQYVj4twYZ"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 text-onSurfaceVariant hover:text-white transition-colors group"
            >
              <div
                class="p-2.5 rounded-xl bg-surfaceContainerHigh border border-outline/5 hover:bg-surfaceContainerHighest hover:border-primary/20 hover:text-primary transition-all duration-300"
              >
                <IconDiscord class="text-lg" />
              </div>
              <span class="font-medium text-sm">Discord Server</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  
  <div class="w-full max-w-6xl mx-auto px-6 pt-8 mt-8 border-t border-outline/5 flex flex-col md:flex-row items-center justify-between text-xs text-onSurfaceVariant/50 font-medium">
    <p>&copy; {currentYear} Xtra Manager Software. All rights reserved.</p>
    <div class="flex items-center gap-1 mt-4 md:mt-0">
      <span class="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
      All systems operational
    </div>
  </div>
</footer>
