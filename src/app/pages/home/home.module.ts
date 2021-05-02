import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { VirtualScrollerModule } from "ngx-virtual-scroller";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { SharedModule } from "@shared";
import { HomeRoutingModule } from "@app/pages/home/home-routing.module";
import { HomeComponent } from "@app/pages/home/component/home.component";
import { I18nModule } from "@app/i18n";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		TranslateModule,
		VirtualScrollerModule,
		LazyLoadImageModule,
		I18nModule,
		SharedModule,
		HomeRoutingModule,
	],
	declarations: [HomeComponent],
	providers: [
		{
			provide: "virtual-scroller-default-options",
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
export class HomeModule {}
