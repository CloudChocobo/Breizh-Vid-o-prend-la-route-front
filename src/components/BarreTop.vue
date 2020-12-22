<template>
	<div class="barretop">
		<nav>
		<NavTopItem route="/" label="Accueil"></NavTopItem>
		<NavTopItem route="/evenements" label="Evenements"></NavTopItem>
		<NavTopItem route="/films" label="Films"></NavTopItem>
		<NavTopItem route="/villages" label="Villages"></NavTopItem>
		</nav>
	</div>
</template>

<script>
import NavTopItem from "@/components/NavTopItem.vue";
	export default {
		name: "BarreTop",
		props: [],
		components: {NavTopItem},
	};
</script>

<style scoped>
	.barretop {
		height: 84px;
		background-color: #15728f;
	}
	nav {
		width: 20vw;
		background: #15728f;
		min-width: 180px;
		max-width: 220px;
		padding: 20px;
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		gap: 10px;
	}

</style>
