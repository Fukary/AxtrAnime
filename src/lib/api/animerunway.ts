import { ANIMERUNWAY_BASE_URL } from "@lib/utils/constants";
import type { EpisodeThumbnail, EpisodeVideo } from "@typs/anime";
import type { AnimeRunWayResponse, AnimeRunWayServers } from "@typs/api";

async function fetchAnimeWay<T>(endpoint: string): Promise<T> {
	const response = await fetch(`${ANIMERUNWAY_BASE_URL}${endpoint}`);
	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}
	const data: AnimeRunWayResponse<T> = await response.json();
	return data.animes;
}

async function fetchAnimeWay2<T>(endpoint: string): Promise<T> {
	const response = await fetch(`${ANIMERUNWAY_BASE_URL}${endpoint}`);
	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}
	return await response.json();
}

export async function getLatestEpisodes(): Promise<EpisodeThumbnail[]> {
	return fetchAnimeWay<EpisodeThumbnail[]>("/recently-updated");
}

export async function getEpisode(id: string, episodeNumber: number): Promise<EpisodeVideo> {
	return fetchAnimeWay2<EpisodeVideo>(`/anime/${id}`);
}