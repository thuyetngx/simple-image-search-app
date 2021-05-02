import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ApiPrefixInterceptor } from './http/api-prefix.interceptor';
import { ErrorHandlerInterceptor } from './http/error-handler.interceptor';
import { HttpTokenInterceptor } from './http/http.token.interceptor';

import { ApiService } from './services/api.service';

@NgModule({
	imports: [CommonModule, HttpClientModule, TranslateModule, RouterModule],
	providers: [
		ApiService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ApiPrefixInterceptor,
			multi: true,
		},
		{ provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ErrorHandlerInterceptor,
			multi: true,
		},
	],
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		// Import guard
		if (parentModule) {
			throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
		}
	}
}
