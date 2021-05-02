import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { SharedModule } from '@shared';
import { SearchRoutingModule } from '@app/pages/search/search-routing.module';
import { SearchComponent } from '@app/pages/search/component/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		TranslateModule,
		VirtualScrollerModule,
		LazyLoadImageModule,
		SharedModule,
		SearchRoutingModule,
	],
	declarations: [SearchComponent],
	providers: [
		{
			provide: 'virtual-scroller-default-options',
			useValue: {
				checkResizeInterval: 1000,
				modifyOverflowStyleOfParentScroll: true,
				resizeBypassRefreshThreshold: 5,
				scrollAnimationTime: 750,
				scrollDebounceTime: 0,
				scrollThrottlingTime: 0,
				stripedTable: false,
			},
		},
	],
})
export class SearchModule {}
