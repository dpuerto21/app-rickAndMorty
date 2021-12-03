import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { tap } from 'rxjs/operators';
import { apiResultEpisode } from '../domain/Episodios';
import { environment } from '../../../environments/environment.prod';

@Injectable({
	providedIn: 'root'
})
export class EpisodiosService {
	constructor(private http: HttpClient) {}

	ApiUrl: string = environment.apiUrl;

	getepisode( ): Observable<apiResultEpisode> {
		const url = `${this.ApiUrl}/episode/ `;
		return this.http.get<apiResultEpisode>(url);
	}
	getepisodeIq(query: string, id: number): Observable<apiResultEpisode> {
		const url = `${this.ApiUrl}/episode/${id}/?name=${query}`;
		return this.http.get<apiResultEpisode>(url).pipe(tap(console.log));
	}
}
