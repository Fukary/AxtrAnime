export interface Anime {
	main_id: number;
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
	episodes: number;
	status: string;
	aired: {
		from: string;
		to: string | null;
	};
	duration: string;
	rating: string;
	genres: string[];
}

export interface AnimeE {
	entry: {
		main_id: number;
		title: string;
		images: {
			webp: {
				image_url: string;
			};
		};
		type: string;
	};
	region_locked: boolean;
	id: number;
	title: string;
	image: string;
	synopsis: string;
	episodes: number;
	status: string;
	aired: {
		from: string;
		to: string | null;
	};
	duration: string;
	rating: string;
	genres: string[];
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
