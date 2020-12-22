<template>
	<Page>
		<div class="content">
			<div class="img">
				<img src="../assets/BZV.svg" alt="" />
			</div>
		</div>
	</Page>
</template>

<script>
	import Page from "@/components/Page.vue";
	export default {
		name: "Accueil",
		components: {Page},
	};
</script>

<style scoped>
	.content {
	display: flex;
	align-items: center;
	background-color:#3a7181; 
	}
	.img {
	display: flex;
width: auto;


	}
</style>
