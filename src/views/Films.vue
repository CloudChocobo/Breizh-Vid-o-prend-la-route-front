<template>
	<Page>
		<div class="content">Films</div>
	<div class="container">
	<table>
      <tr>
        <td>
			<div class="titre">Le Grand Bleu</div>
		</td>
        <td>
			<div class="titre">Le 5ème élément</div>
			<div class="infos"> 1997, Luc Besson, 126 min</div>
			<div class="pitch">Au XXIII siècle, dans un univers étrange et coloré, où tout espoir de survie est impossible sans la découverte du cinquième élément, un héros affronte le mal pour sauver l'humanité.</div>
			</td>
        <td>
			<div class="titre">Taxi</div>
		</td>
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
	align-items: center;

	}

	.container {
   display: flex;
   flex-direction: column;
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
.titre {
	font-weight: bold;
}

</style>
