import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
	searchForm: FormGroup;
	constructor(private router: Router, private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.searchForm = this.formBuilder.group({
			keyword: ["", Validators.required],
		});
	}

	onSubmit(keyword: string): void {
		if (keyword) {
			this.router.navigate(["/search"], { queryParams: { q: keyword } });
		}
	}
}
