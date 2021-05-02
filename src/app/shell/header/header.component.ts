import { Component, EventEmitter, HostListener, OnInit, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
	keywords: string = "";
	isSticky: boolean = false;

	@Output() search: EventEmitter<string> = new EventEmitter<string>(null);

	@HostListener("window:scroll", ["$event"])
	checkScroll() {
		this.isSticky = window.pageYOffset >= 20;
	}

	constructor(private activatedRoute: ActivatedRoute) {}

	ngOnInit() {
		this.activatedRoute.queryParams.subscribe((params) => {
			if (params["q"]) {
				this.keywords = params["q"];
			}
		});
	}

	onSearch(keywords: string) {
		if (keywords) {
			this.search.emit(keywords);
		}
	}
}
