<script>
  import { fly } from "svelte/transition";

  let message = "";
  export let color;
</script>

<button
  on:click={() => (message += "hello!")}
  style="background: {color}; padding: 1rem;"
>
  Say hello!
</button>

{#if message}
  <div transition:fly={{ y: 20 }} class="text-gray-900 text-2xl font-bold">
    {message}
  </div>
{/if}
