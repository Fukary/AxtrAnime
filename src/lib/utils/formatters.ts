export function formatDate(dateString: string): string {
	const date = new Date();
	return date.toLocaleDateString("es-ES", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}

export function formatDuration(duration: string): string {
	const minutes = Number.parseInt(duration);
	if (Number.isNaN(minutes)) return duration;

	const hours = Math.floor(minutes / 60);
	const remainingMinutes = minutes % 60;

	return hours > 0 ? `${hours}h ${remainingMinutes}min` : `${minutes}min`;
}

export function truncateText(text: string, maxLength: number): string {
	if (text.length <= maxLength) return text;
	return `${text.slice(0, maxLength)}...`;
}
