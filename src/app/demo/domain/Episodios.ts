export interface apiResults<T> {
	info: Info;
	results: Episode[];
}

export interface Info {
	count: number;
	pages: number;
	next: string;
	prev: null;
}

export interface Episode {
    id: number;
	name: string;
	type: string;
	dimension: string;
	residents: string[];
	url: string;
	created: Date;
}
export type Episodes = Episode[]

export type apiResultEpisode = apiResults<Episodes>;
