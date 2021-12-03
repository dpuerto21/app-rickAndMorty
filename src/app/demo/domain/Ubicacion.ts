
export interface apiRespuesta<t>{

    info:  resultsInfo,
    results: Ubicacion[]
}
export interface resultsInfo {
    count: number;
	next: string;
	pages: number;
	prev?: number;
}

export interface Ubicacion {
	count: number;
	pages: number;
	next: string;
	prev: null;
	id: number;
	name: string;
	type: string;
	dimension: string;
	residents: string[];
	url: string;
	created: Date;
}

export type  resultsLocation = apiRespuesta<Ubicacion[]>
