<script lang="ts">
import { onMount } from 'svelte';
import { Browser } from '../../../utils/browser';
import { LoginStatus } from '../../../types/common'

onMount(async () => {
    const loginStatus = await new Promise<LoginStatus>((resolve, reject) => {
        setTimeout(() => {
            const uid = Browser.getCookie('loginUid');
            if (uid == null || uid.length == 0)
                resolve(LoginStatus.ANON);
            else
                resolve(new LoginStatus(uid));
        }, 500);
	});
    
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
        Browser.setCookie('loginUid', uid);
        Browser.redirect('/');
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