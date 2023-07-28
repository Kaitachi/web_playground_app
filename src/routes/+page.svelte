<script>
	async function getTime() {
		const res = await fetch("/api/v1/time");
		return res.json();
	};
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#await getTime()}
	<span>Waiting...</span>
{:then time}
	<span>{JSON.stringify(time)}</span>
{/await}

