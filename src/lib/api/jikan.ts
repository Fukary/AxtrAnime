import { JIKAN_BASE_URL } from "@lib/utils/constants";
import type { Anime, WeeklySchedule } from "@typs/anime";
import type { JikanResponse } from "@typs/api";
import type { Episode } from "@typs/episode";

async function fetchJikan<T>(endpoint: string): Promise<T> {
	const response = await fetch(`${JIKAN_BASE_URL}${endpoint}`);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	const data: JikanResponse<T> = await response.json();
	return data.data;
}

export async function getAnimeById(id: number): Promise<Anime> {
	return fetchJikan<Anime>(`/anime/${id}`);
}

export async function getLatestAnimes(): Promise<Anime[]> {
	return fetchJikan<Anime[]>("/seasons/now");
}
export async function getAnimeSearch(query: string): Promise<Anime[]> {
	return fetchJikan<Anime[]>(`/anime?q=${query}&limit=1`);
}

export async function getEpisodeInfo(
	animeId: number,
	episodeNumber: number,
): Promise<Episode> {
	const episodes = await fetchJikan<Episode[]>(`/anime/${animeId}/episodes`);
	const episode = episodes.find((ep) => ep.number === episodeNumber);

	if (!episode) {
		throw new Error("Episode not found");
	}

	return {
		...episode,
	};
}

export async function getWeeklySchedule(): Promise<WeeklySchedule> {
	return fetchJikan<WeeklySchedule>("/schedules");
}

export async function getAnimeDirectory(page: number): Promise<Anime[]> {
	return fetchJikan<Anime[]>(`/anime?page=${page}`);
}
