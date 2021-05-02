import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
	selector: "app-search-form",
	templateUrl: "./search-form.component.html",
	styleUrls: ["./search-form.component.scss"],
})
export class SearchFormComponent implements OnInit {
	@Input() keywords: string = "";
	@Input() header: boolean = false;
	@Output() search: EventEmitter<string> = new EventEmitter<string>(null);

	searchForm: FormGroup;

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.searchForm = this.formBuilder.group({
			keyword: [this.keywords, Validators.required],
		});
	}

	onSubmit(): void {
		if (this.searchForm.valid) {
			this.search.emit(this.searchForm.value.keyword);
		}
	}
}
