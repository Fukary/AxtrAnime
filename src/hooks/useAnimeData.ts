import { getAnimeById } from "@lib/api/jikan";
import type { Anime } from "@typs/anime";
import type { ApiError } from "@typs/api";
import { useEffect, useState } from "react";

export function useAnimeData(id: number) {
	const [anime, setAnime] = useState<Anime | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<ApiError | null>(null);

	useEffect(() => {
		async function fetchAnime() {
			try {
				setLoading(true);
				const data = await getAnimeById(id);
				setAnime(data);
			} catch (err) {
				setError({
					status: (err as ApiError).status || 500,
					message: (err as ApiError).message || "An unknown error occurred",
				});
			} finally {
				setLoading(false);
			}
		}
		fetchAnime();
	}, [id]);

	return { anime, loading, error };
}
