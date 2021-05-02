import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { NgProgress, NgProgressRef } from 'ngx-progressbar';

@Injectable()
export class ApiService {
	private progressRef: NgProgressRef;

	constructor(private progress: NgProgress, private http: HttpClient) {
		this.progressRef = this.progress.ref('progressBar');
	}

	get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
		const observable = this.http.get(`${path}`, { params });
		return this.responseInterceptor(observable);
	}

	put(path: string, body: Object = {}): Observable<any> {
		const observable = this.http.put(`${path}`, JSON.stringify(body));
		return this.responseInterceptor(observable);
	}

	post(path: string, body: Object = {}): Observable<any> {
		const observable = this.http.post(`${path}`, JSON.stringify(body));
		return this.responseInterceptor(observable);
	}

	delete(path: string): Observable<any> {
		const observable = this.http.delete(`${path}`);
		return this.responseInterceptor(observable);
	}

	private responseInterceptor(observableRes: Observable<any>): Observable<any> {
		this.startLoading();
		return observableRes.pipe(
			map((res) => res),
			finalize(() => {
				this.completeLoading();
			}),
			catchError(this.handleError)
		);
	}

	private startLoading(): void {
		this.progressRef.start();
	}

	private completeLoading(): void {
		this.progressRef.complete();
	}

	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			// A client-side or network error occurred. Handle it accordingly.
			console.error('An error occurred:', error.error.message);
		} else {
			// The backend returned an unsuccessful response code.
			// The response body may contain clues as to what went wrong.
			console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
		}
		// Return an observable with a user-facing error message.
		return throwError('Something bad happened; please try again later.');
	}
}
