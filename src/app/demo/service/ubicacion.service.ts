import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment.prod';
import { resultsLocation } from '../domain/Ubicacion';

@Injectable({
	providedIn: 'root'
})
export class UbicacionService {
	constructor(private http: HttpClient) {}

	ApiUrl: string = environment.apiUrl

	getPersonaje(): Observable<resultsLocation> {
		const url = `${this.ApiUrl}/location `;
		return this.http.get<resultsLocation>(url);
	}
}
