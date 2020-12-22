<template>
<div class="inputWrapper">
	<div class="imgWrapper">
	</div>
	<input type="text" :placeholder="texte"/></div>
</template>

<script>
	export default {
		name: "ChampsPlaceHolder",
		props: ["texte"],
	};
</script>

<style scoped>
	.inputWrapper{
		position: relative;
        border: 1px solid rgb(200,200,200);
        border-radius: 10px;
	}
	.imgWrapper{
		position: absolute;
		z-index:2;
		left:10px;
		height:100%;
		display: flex;
		justify-content:center;
		align-items: center;
		width:20px;
        
	}
	img {
		justify-content: center;
		height:10px;
		width:10px;
	}
	input{
		width:75%;
		padding: 10px 10px;
		border:none;
		border-radius:10px;
		z-index:1;
		justify-content: center;
	}

</style>