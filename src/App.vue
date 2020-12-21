<template>
	<router-view />
</template>

<script>
	export default {
		name: "App",
		watch: {
			$route(to) {
				document.title = to.meta.title || "GMAC";
			},
			immediate: true,
		},
	};
</script>

<style>
	body {
		margin: 0;
		min-height: 100vh;
		display: flex;
		flex-grow: 1;
		flex-direction: column;
	}
	#app {
		font-family: "Mukta", sans-serif;
		color: #34313a;
		height: 100%;
		display: flex;
		flex-grow: 1;
		flex-direction: column;
	}
</style>
