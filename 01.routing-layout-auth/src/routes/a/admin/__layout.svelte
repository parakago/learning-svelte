<script  lang="ts">
import { AppRole } from "$lib/types/appRole";
import { LoginStatus } from "$lib/types/loginStatus";
import { Browser } from "$lib/utils/browser";
import { onMount } from "svelte";

let uid: string | null;
onMount(async () => {
	const loginStatus = await LoginStatus.get();
	if (!loginStatus.hasRole(AppRole.Admin)) {
		alert('You Are Not Allowed to Access This Page');
		Browser.goBack();
	}
});
</script>

<slot/>