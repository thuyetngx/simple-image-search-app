import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class HttpTokenInterceptor implements HttpInterceptor {
	constructor() {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const headersConfig: any = {};

		// [TODO]: Handle get/set token to headers
		const token = '';

		if (token) {
			headersConfig['Authorization'] = `Bearer ${token}`;
		}

		const request = req.clone({ setHeaders: headersConfig });
		return next.handle(request);
	}
}
