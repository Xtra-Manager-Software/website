<script>
    import { navigating } from "$app/stores";
    import { onMount } from "svelte";

    let visible = $state(false);
    let progress = $state(0);
    let timer = null;

    $effect(() => {
        if ($navigating) {
            visible = true;
            progress = 10;
            // Fake progression while waiting
            timer = setInterval(() => {
                if (progress < 90) {
                    progress += Math.random() * 2 + 0.5;
                }
            }, 100);
        } else {
            if (visible) {
                progress = 100;
                if (timer) clearInterval(timer);
                // Hide after transition finishes
                setTimeout(() => {
                    visible = false;
                    setTimeout(() => {
                        progress = 0; // Reset for next time after hidden
                    }, 300);
                }, 400); // Wait for the w-full transition to complete
            }
        }
    });

    onMount(() => {
        return () => {
            if (timer) clearInterval(timer);
        };
    });
</script>

<div
    class="fixed top-0 left-0 h-[1.5px] bg-primary z-[9999] pointer-events-none transition-all ease-out duration-[150ms] shadow-[0_0_8px_var(--color-primary)] w-0"
    style="width: {progress}%; opacity: {visible ? '1' : '0'}; {visible ? '' : 'transition: opacity 0.3s ease-out, width 0s linear 0.3s;'}"
></div>
