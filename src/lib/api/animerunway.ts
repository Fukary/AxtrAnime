import { ANIMERUNWAY_BASE_URL } from "@lib/utils/constants";
import type { Anime } from "@typs/anime";
import type { AnimeRunWayResponse } from "@typs/api";

async function fetchAnimeWay<T>(endpoint: string): Promise<T> {
	const response = await fetch(`${ANIMERUNWAY_BASE_URL}${endpoint}`);
	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}
	const data: AnimeRunWayResponse<T> = await response.json();
	return data.animes;
}

export async function getLatestAnimes(): Promise<Anime[]> {
	return fetchAnimeWay<Anime[]>("/recently-updated?limit=10");
}
