<template>
	<Page>
		<div class="content">Films</div>
	<div class="container">
	<table>
      <tr>
        <td>Le Grand Bleu</td>
        <td>Le 5ème élément</td>
        <td>Taxi</td>
      </tr>
    </table>
	</div>
	</Page>
</template>

<script>
	import Page from "@/components/Page.vue";
	export default {
		name: "Films",
		components: {Page},
	};
</script>

<style scoped>
	.content {
	display: flex;
	flex-direction: column;
	}

	.container {
   display: flex;
   align-items: center;
	}
	
		table {
		border-collapse: collapse;
		border: 2px solid rgb(200,200,200);
		letter-spacing: 1px;
		font-size: 0.8rem;
		display: flex;
		flex-direction: column;
}

	td{
		border: 1px solid rgb(190,190,190);
		padding: 10px 20px;
		display: flex;
		flex-direction: column;
		text-align: center;
}

</style>
