<template>
	<div class="page">
		<BarreTop></BarreTop>
		<main>
			<NavTop></NavTop>
			<slot></slot>
		</main>
	</div>
</template>

<script>
	import BarreTop from "@/components/BarreTop.vue";
	export default {
		name: "",
		props: [],
		components: {BarreTop},
	};
</script>

<style scoped>
	.page {
		display: flex;
		flex-direction: column;
		height: 100%;
		flex-grow: 1;
		flex-direction: column;
	}
	.page main {
		display: flex;
		flex-direction: row;
		
	}
</style>
