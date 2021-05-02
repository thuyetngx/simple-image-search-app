import { Component, OnInit, Input } from '@angular/core';
import { I18nService } from '@app/i18n/i18n.service';

@Component({
	selector: 'app-language-selector',
	templateUrl: './language-selector.component.html',
	styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnInit {
	language: string = ''
	@Input() inNavbar = false;
	@Input() menuClass = '';

	constructor(private i18nService: I18nService) {}

	ngOnInit() {
		this.language = this.currentLanguage;
	}

	setLanguage(language: string) {
		this.i18nService.language = language;
	}

	get currentLanguage(): string {
		return this.i18nService.language;
	}

	get languages(): string[] {
		return this.i18nService.supportedLanguages;
	}
}
