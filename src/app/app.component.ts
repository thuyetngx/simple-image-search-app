import { Component, OnInit, OnDestroy } from "@angular/core";
import { environment } from "@env/environment";
import { I18nService } from "@app/i18n";
@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
	constructor(private i18nService: I18nService) {}

	ngOnInit() {
		// Setup translations
		this.i18nService.init(environment.defaultLanguage, environment.supportedLanguages);
	}

	ngOnDestroy() {
		this.i18nService.destroy();
	}
}
