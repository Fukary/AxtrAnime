export interface Anime {
	mal_id: number;
	title: string;
	name: string;
	img: string;
	images: {
		webp: {
			image_url: string;
		};
	};
	region_locked: boolean;
	synopsis: string;
	type: string;
	episodes: {
		sub: number;
	};
	status: string;
	aired: {
		from: string;
		to: string | null;
	};
	duration: string;
	rating: string;
	genres: string[];
}

export interface EpisodeThumbnail {
	id: string;
	name: string;
	img: string;
	episodes: {
		sub: number;
	};
	duration: string;
	region_locked: boolean;
}

export interface EpisodeVideo {
	tracks: [];
	mainID: number;
}

export interface WeeklySchedule {
	monday: Anime[];
	tuesday: Anime[];
	wednesday: Anime[];
	thursday: Anime[];
	friday: Anime[];
	saturday: Anime[];
	sunday: Anime[];
}
