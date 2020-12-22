<template>
	<Page>
		<div class="content">
				<div class="bloc">
					<div class="PASSAGE">Passage à Rennes le "23/02/2021"</div>
						<div>
							<input type="radio" id="Film 1" name="drone" value="Film 1"
							checked><label for="Film 1"> Film 1</label>
							<progress value="15" max="100">15%</progress>
						</div>
						<div>
							<input type="radio" id="Film 2" name="drone" value="Film 2">
							<label for="Film 2"> Film 2</label>
							<progress value="80" max="100">80%</progress>
							</div>

						<div>
							<input type="radio" id="Film 3" name="drone" value="Film 3">
							<label for="Film 3"> Film 3</label>
							<progress value="20" max="100">20%</progress>
						</div>

						<div>
							<input type="radio" id="Film 4" name="drone" value="Film 4">
							<label for="Film 4"> Film 4</label>
							<progress value="50" max="100">50%</progress>
						</div>

						<div>
							<input type="radio" id="Film 5" name="drone" value="Film 5">
							<label for="Film 5"> Film 5</label>
							<progress value="15" max="100">15%</progress>
						</div>
				<div class="bloc">
					<div class="PASSAGE">Passage à Nantes le "18/05/2021"</div>
						<div>
							<input type="radio" id="Film 1" name="drone" value="Film 1"
							checked><label for="Film 1"> Film 1</label>
							<progress value="65" max="100">65%</progress>
						</div>
						<div>
							<input type="radio" id="Film 2" name="drone" value="Film 2">
							<label for="Film 2"> Film 2</label>
							<progress value="40" max="100">40%</progress>
							</div>

						<div>
							<input type="radio" id="Film 3" name="drone" value="Film 3">
							<label for="Film 3"> Film 3</label>
							<progress value="10" max="100">10%</progress>
						</div>

						<div>
							<input type="radio" id="Film 4" name="drone" value="Film 4">
							<label for="Film 4"> Film 4</label>
							<progress value="85" max="100">85%</progress>
						</div>

						<div>
							<input type="radio" id="Film 5" name="drone" value="Film 5">
							<label for="Film 5"> Film 5</label>
							<progress value="55" max="100">55%</progress>
						</div>
					</div>
			</div>	
		</div>
	</Page>
</template>

<script>
	import Page from "@/components/Page.vue";
	export default {
		name: "Evenements",
		components: {Page},
	};
</script>

<style scoped>
	.content {
	display: flex;
	flex-direction: column;
	}

	.bloc {
	display: flex;
	flex-direction: column;
		border: 1px solid rgb(200,200,200);
	}
</style>
