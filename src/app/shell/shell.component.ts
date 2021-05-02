import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-shell",
	templateUrl: "./shell.component.html",
	styleUrls: ["./shell.component.scss"],
})
export class ShellComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {}

	onSearch(keywords: string) {
		this.router.navigate(["/search"], { queryParams: { q: keywords } });
	}
}
