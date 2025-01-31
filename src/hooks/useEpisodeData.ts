import { getEpisodeInfo } from "@lib/api/jikan";
import type { ApiError } from "@typs/api";
import type { Episode } from "@typs/episode";
import { useEffect, useState } from "react";

export function useEpisodeData(animeId: number, episodeNumber: number) {
	const [episode, setEpisode] = useState<Episode | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<ApiError | null>(null);

	useEffect(() => {
		async function fetchEpisode() {
			try {
				setLoading(true);
				const data = await getEpisodeInfo(animeId, episodeNumber);
				setEpisode(data);
			} catch (err) {
				setError({
					status: (err as ApiError).status || 500,
					message: (err as ApiError).message || "An unknown error occurred",
				});
			} finally {
				setLoading(false);
			}
		}
		fetchEpisode();
	}, [animeId, episodeNumber]);

	return { episode, loading, error };
}
