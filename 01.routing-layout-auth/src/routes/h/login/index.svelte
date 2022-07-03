<script lang="ts">
import { onMount } from 'svelte';
import { Browser } from '$lib/utils/browser';
import { LoginStatus } from '$lib/types/loginStatus'

onMount(async () => {
    const loginStatus = await LoginStatus.get();
    
    if (loginStatus.isLogin()) {
        location.replace('/');
    } else {
        loginStatusNotChecked = false;
    }
});

let loginStatusNotChecked = true;
let uid: string, pwd: string;

const handleSubmit = () => {
    if (uid == 'admin' || uid == 'user') {
        LoginStatus.set(uid).then(() => {
            Browser.redirect('/');
        });
    } else {
        alert('Login Error: admin or user');
    }
}
</script>

{#if loginStatusNotChecked}
Checking Login Status...
{:else}
<form on:submit|preventDefault = {handleSubmit}>
    <label for="uid">Username : </label>
    <input type="text" placeholder="admin or user" name="uid" bind:value={uid} required>
    <label for="pwd">Password : </label>
    <input type="password" placeholder="Don't Enter Password" name="pwd" bind:value={pwd}>
    <button type="submit">Login</button>
</form>
{/if}