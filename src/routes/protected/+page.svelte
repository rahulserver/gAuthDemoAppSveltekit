// svelte template code
<script>
  import { onMount } from 'svelte';
  import {page} from "$app/stores";
  import {goto} from "$app/navigation";

  const store = useStore();

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

