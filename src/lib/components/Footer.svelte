<script>
  import IconGithub from "~icons/simple-icons/github";
  import IconTelegram from "~icons/simple-icons/telegram";

  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-surfaceContainer text-onSurface pt-12 pb-8 mt-20">
  <div class="max-w-6xl mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
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
        </ul>
      </div>
    </div>
  </div>
</footer>
