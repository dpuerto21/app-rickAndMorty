export interface Personaje {
	id: number;
	name: string;
	status: Status;
	species: Species;
	type: string;
	gender: Gender;
	origin: Location;
	location: Location;
	image: string;
	episode: string[];
	url: string;
	created: Date;
}

export type Personajes = Personaje[];

export interface ApiResult<T> {
	info: InfoResults;
	results: Personaje[];
}

export interface InfoResults {
	count: number;
	next: string;
	pages: number;
	prev?: number;
}

export type ApiResultPersonajes = ApiResult<Personajes>;

export enum Gender {
	Female = 'Female',
	Male = 'Male',
	Unknown = 'unknown'
}

export enum Species {
	Alien = 'Alien',
	Human = 'Human',
	Humanoid = 'Humanoid'
}

export enum Status {
	Alive = 'Alive',
	Dead = 'Dead',
	Unknown = 'unknown'
}
