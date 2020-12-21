<template>
	<nav>
		<NavLeftItem route="/" label="Accueil"></NavLeftItem>
		<NavLeftItem route="/evenements" label="Evenements"></NavLeftItem>
		<NavLeftItem route="/films" label="Films"></NavLeftItem>
		<NavLeftItem route="/villages" label="Villages"></NavLeftItem>
	</nav>
</template>

<script>
	import NavLeftItem from "@/components/NavLeftItem.vue";
	export default {
		name: "NavLeft",
		components: {NavLeftItem},
	};
</script>

<style scoped>
	nav {
		width: 20vw;
		background: #a3e7e7;
		min-width: 180px;
		max-width: 220px;
		padding: 20px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
</style>
