import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LazyLoadImageModule } from "ng-lazyload-image";

import { LoaderComponent } from "./component/loader/loader.component";
import { ImageComponent } from "./component/image/image.component";
import { ComingSoonComponent } from "./component/coming-soon/coming-soon.component";
import { ScrollDirective } from "./directives/scroll.directive";
import { SearchFormComponent } from "./component/search-form/search-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { I18nModule } from "@app/i18n";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AccountComponent } from "./component/account/account.component";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		I18nModule,
		NgbModule,
		TranslateModule,
		LazyLoadImageModule,
	],
	declarations: [
		LoaderComponent,
		ScrollDirective,
		ImageComponent,
		ComingSoonComponent,
		SearchFormComponent,
		AccountComponent,
	],
	exports: [LoaderComponent, ScrollDirective, ImageComponent, SearchFormComponent, AccountComponent],
})
export class SharedModule {}
