<script>
  import {signIn, signOut} from "@auth/sveltekit/client"
  import {page} from "$app/stores";
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<p>
    {#if $page.data.session}
        <span>
            <small>Signed in as</small><br/>
            <strong>{$page.data.session.user?.name ?? "User"}</strong>
        </span>
        <button on:click={() => signOut()} class="button">Sign out</button>
    {:else}
        <span>You are not signed in</span>
        <button on:click={() => signIn("google")}>
            Sign In with Google
        </button>
    {/if}
</p>
