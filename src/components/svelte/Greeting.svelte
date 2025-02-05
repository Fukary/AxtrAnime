<script lang="ts">
const currentTime = new Date();
const hours = currentTime.getHours();

let greeting = "";

if (hours < 12) {
	greeting = "Buenos Dias";
} else if (hours < 18) {
	greeting = "Buenas Tardes";
} else {
	greeting = "Buenas Noches";
}
</script>

<h2 class="text-5xl font-bold py-1 uppercase ml-auto text-blue-500 dark:text-blue-300 drop-shadow-xl shadow-white pl-4 border-l-8 border-blue-300">{greeting}</h2>

<style>
	h2 {
		font-family: 'Rammetto One';
	}
</style>