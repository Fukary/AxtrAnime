export interface JikanResponse<T> {
	pagination: {
		last_visible_page: number;
		has_next_page: boolean;
		current_page: number;
		items: {
			count: number;
			total: number;
			per_page: number;
		};
	};
	data: T;
}

export interface ApiError {
	status: number;
	message: string;
}

export interface AnimeRunWayResponse<T> {
	animes: T;
	currentPage: number;
	hasNextPage: boolean;
}

export interface AnimeRunWayServers<T> {
	info: T;
	moreInfo: T;
	relatedAnimes: T;
}
