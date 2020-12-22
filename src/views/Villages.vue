<template>
	<Page>
		<div class="content">
		<h1>Villages</h1>
	<div class="tableau">
		<table>
      <tr>
        <th scope="col">Nom</th>
        <th scope="col">Code Postal</th>
        <th scope="col">Modifier</th>
      </tr>
      <tr>
        <td>Nantes</td>
        <td>44000</td>
        <td><img src="../assets/icones/modifs.svg" alt="" /></td>
      </tr>
      <tr>
        <td>Rennes</td>
        <td>35000</td>
        <td><img src="../assets/icones/modifs.svg" alt="" /></td>
      </tr>
    </table>
	</div>

    <table>
      <tr>
        <th scope="col">Ajouter un village</th>
      </tr>
      <tr>
        <td>
			<div class="container">
			<div class="nom">Nom</div>
			<Champ texte="Nom Village"></Champ>
			</div>
			<div clas="container">
			<div class="codePostal">Code Postal</div>
			<Champ texte="Code Postal"></Champ>
			</div>
			<NavTopItem route="/villages" label="Valider"></NavTopItem>
		</td>
    </tr>
    </table>
</div>
	</Page>
</template>

<script>
	import Page from "@/components/Page.vue";
	import ChampsPlaceHolder from "@/components/ChampsPlaceHolder.vue";
	import NavTopItem from "@/components/NavTopItem.vue";
	export default {
		name: "Villages",
		components: {Page, 
					Champ: ChampsPlaceHolder,
					NavTopItem,
						},
		}	
	
</script>

<style scoped>
h1 {
	padding: 30px;;
	display: flex;
	flex-direction: row;

}
	.content {
	display: flex;
	justify-content: center;
	}
	table {
		border-collapse: collapse;
		border: 2px solid rgb(200,200,200);
		letter-spacing: 1px;
		font-size: 0.8rem;
}

	td, th {
		border: 1px solid rgb(190,190,190);
		padding: 10px 20px;
}

	th {
		background-color: rgb(235,235,235);
}

	td {
	text-align: center;
}
.img {
	display: flex;
height: 10px;
}
</style>