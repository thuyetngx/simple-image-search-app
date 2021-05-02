import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { debounceTime, finalize } from "rxjs/operators";
import { IPageInfo, VirtualScrollerComponent } from "ngx-virtual-scroller";
import { environment } from "@env/environment";
import { ActivatedRoute } from "@angular/router";
import { SearchImages, ImageDetail } from "@app/model/image.model";
import { ImageService } from "@app/services/image.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ComingSoonComponent } from "@app/@shared/component/coming-soon/coming-soon.component";

@Component({
	selector: "app-search",
	templateUrl: "./search.component.html",
	styleUrls: ["./search.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {
	private keywords: string = "";
	private startIndex: number = 1;
	public totalItems: number = 0;
	public isLoading = false;

	@ViewChild("imageContent") imageContent: ElementRef;
	@ViewChild(VirtualScrollerComponent) imageScroller: VirtualScrollerComponent;

	private maxPage: number = environment.max_page;
	private fullSearchImages: SearchImages = new SearchImages();
	public images: ImageDetail[] = [];

	constructor(
		private activatedRoute: ActivatedRoute,
		private cdr: ChangeDetectorRef,
		private modal: NgbModal,
		private imageService: ImageService
	) {}

	ngOnInit() {
		this.activatedRoute.queryParams.subscribe((params) => {
			if (params["q"]) {
				this.keywords = params["q"];
			}
			if (params["page"]) {
				this.startIndex = Number(params["page"]);
			}
			if (this.keywords) {
				this.fullSearchImages = new SearchImages();
				this.search(this.keywords, this.startIndex);
			}
		});
	}

	private search(keywords: string, startIndex: number): void {
		this.isLoading = true;
		this.imageService
			.search(keywords, startIndex)
			.pipe(
				debounceTime(300),
				finalize(() => {
					this.isLoading = false;
					this.cdr.detectChanges();
				})
			)
			.subscribe((data: SearchImages) => {
				this.totalItems = data.total;
				if (data && data.hits) {
					this.fullSearchImages.hits = [...this.fullSearchImages.hits, ...data.hits];
					this.images = [...this.fullSearchImages.hits];
					this.imageScroller?.refresh();
				}
			});
	}

	onVsEnd(event: IPageInfo) {
		this.imageContent.nativeElement.style.height = event.maxScrollPosition + window.innerHeight + 120 + "px";
		this.fetchMore(event);
	}

	private fetchMore(event: IPageInfo): void {
		if (event.endIndex === -1) return;
		// Just support load first 5 pages for easy review
		if (this.startIndex === this.maxPage) return;
		if (event.endIndex !== this.images.length - 1) return;
		if (this.startIndex >= this.totalItems) return;
		if (this.fullSearchImages.hits) {
			this.startIndex += 1;
		}
		this.search(this.keywords, this.startIndex);
	}

	openDetail() {
		this.modal.open(ComingSoonComponent, { centered: true }).result.then(
			() => {},
			() => {}
		);
	}
}
