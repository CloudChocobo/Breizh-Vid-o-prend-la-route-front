<template>
	<Page>
		<div class="content">
				<img src="../assets/BZV.jpg" alt="" />
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
	justify-items: center;
	}
.img
{
width: 1440px;
height: 720px;
position: relative;
}
</style>
