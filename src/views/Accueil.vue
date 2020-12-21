<template>
	<Page>
		<div class="content">Accueil</div>
        <img src="../assets/BZV.jpg" alt="" />
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
		padding: 20px;
		flex: 1 0 auto;
	}
    .img{
        width: 50%;
    }
</style>
