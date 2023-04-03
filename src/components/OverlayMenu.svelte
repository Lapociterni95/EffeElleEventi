<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  let data;
  let isOpen = false;

  const handleCloseMenu = () => {
    isOpen = false;
  };

  onMount(async () => {
    window.addEventListener("resize", handleCloseMenu);
    return () => {
      window.removeEventListener("resize", handleCloseMenu);
    };
  });
</script>

<button
  class="relative z-[22] flex sm:hidden"
  on:click={() => {
    isOpen = !isOpen;
  }}
>
  {#if !isOpen}
    <span class="uppercase">menu </span>
  {:else}
    <span class="uppercase">close</span>
  {/if}
</button>

{#if isOpen}
  <div
    transition:fade={{ duration: 100 }}
    class="p-8 w-[100vw] h-[50vh] text-white absolute top-0 left-0 z-[0] flex flex-col items-center justify-center bg-client-blue"
  >
    <slot />
  </div>
  <div
    transition:fade={{ delay: 50, duration: 100 }}
    class="bg-gray-200 h-[10vh] w-full absolute top-[50vh] left-0 z-[0] shadow-xl text-client-blue text-xl p-4 flex flex-col sm:flex-row justify-between sm:items-center "
  >
    <a href="mailto:daaa@dadad.com">info@....</a>
    <span>+323492423423</span>
  </div>

  <div
    on:click={() => handleCloseMenu()}
    on:keydown={() => handleCloseMenu()}
    transition:fade={{ duration: 100 }}
    class="absolute top-0 left-0 z-[-1] w-[100vw] h-[100vh] bg-gray-900 opacity-20"
  />
{:else}
  <div class="hidden sm:block">
    <slot />
  </div>
{/if}
