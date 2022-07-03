<script  lang="ts">
import { Browser } from '$lib/utils/browser';
import { onMount } from "svelte";

let uid: string | null;
onMount(async () => {
	uid = Browser.getCookie('loginUid');
});

const handleLogin = () => {
	Browser.redirect('/h/login');
}

const handleLogout = () => {
	Browser.setCookie('loginUid', '');
	Browser.refresh();
}
</script>

{#if uid != null && uid.length > 0}
<button on:click={handleLogout}>Logout</button>
{:else}
<button on:click={handleLogin}>Login</button>
{/if}

<nav>
	<a href="/h/about">About</a>
	<a href="/a/wiki">Wiki</a>
	<a href="/a/admin">Admin</a>
</nav>
  
<slot></slot>