<script lang="ts">
const currentTime = new Date();
const hours = currentTime.getHours();

let greeting = "";

if (hours < 12) {
	greeting = "Good morning";
} else if (hours < 18) {
	greeting = "Good afternoon";
} else {
	greeting = "Good evening";
}
</script>

<h2 class="text-4xl font-bold mb-4 uppercase text-blue-500 dark:text-blue-400">{greeting}</h2>