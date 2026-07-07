<script lang="ts">
	import { authClient } from "$lib/auth-client"
	const session = authClient.useSession()
</script>

<main class="flex flex-col items-center justify-center h-screen">
	{#if $session.data}
		<p class="mb-4">
			Signed in as <span class="font-medium">{$session.data.user.name}</span>
		</p>
		<button
			class="bg-rose-700 text-white px-4 py-2 rounded-md"
			onclick={() => authClient.signOut()}
		>
			Sign out
		</button>
	{:else}
		<button
			class="bg-stone-900 text-white px-4 py-2 rounded-md"
			onclick={() => authClient.signIn.social({ provider: "google" })}
		>
			Continue with Google
		</button>
	{/if}
</main>
