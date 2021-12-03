import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ApiResultPersonajes } from '../domain/personajes.interfaces';
import { environment } from '../../../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PersonajesService {
	constructor(private http: HttpClient) {}

	ApiUrl: string = environment.apiUrl;

	getPersonajes(page: number): Observable<ApiResultPersonajes> {
		const url = `${this.ApiUrl}/character/?page=${page} `;
		return this.http.get<ApiResultPersonajes>(url);
	}
	getBusqueda(query: string, page: number): Observable<ApiResultPersonajes> {
		const url = `${this.ApiUrl}/character/?name=${query}&page=${page} `;
		return this.http.get<ApiResultPersonajes>(url);
	}
	getResultsAll(): Observable<ApiResultPersonajes> {
		const url = `${this.ApiUrl}/character `;
		return this.http.get<ApiResultPersonajes>(url);
	}
}
