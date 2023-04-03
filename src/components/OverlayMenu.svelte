<script>
  import { fade } from "svelte/transition";
  export let isOpen = false;
</script>

<button
  class="relative z-[22]"
  on:click={() => {
    isOpen = !isOpen;
  }}
>
  {#if !isOpen}
    <span>open </span>
  {:else}
    <span>close</span>
  {/if}
</button>

{#if isOpen}
  <div
    transition:fade={{ duration: 100 }}
    class="w-[100vw] h-[100vh] bg-red-800 text-white absolute top-0 left-0 z-[1] flex flex-col items-center justify-center"
  >
    <span>overlay menu content</span>
  </div>
{/if}
