<script>
  import { onMount } from 'svelte';
  import {page} from "$app/stores";
  import {goto} from "$app/navigation";

  onMount(() => {
    if(!$page.data?.session) {
      goto('/');
      return;
    }
  });
</script>
{#if $page.data?.session}
    <div>Protected</div>
{/if}

