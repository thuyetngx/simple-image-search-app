import { Component, Input } from "@angular/core";

@Component({
	selector: "app-image",
	template: `
		<picture>
			<source media="(min-width: {{ screen_lg }})" [attr.defaultImage]="defaultImage" [attr.lazyLoad]="image" />
			<source media="(min-width: {{ screen_md }})" [attr.defaultImage]="defaultImage" [attr.lazyLoad]="image" />
			<img
				class="lazyload-image"
				[style.height]="height + 'px'"
				[style.maxHeight]="maxHeight + 'px'"
				[defaultImage]="defaultImage"
				[lazyLoad]="image"
				[alt]="alt"
			/>
		</picture>
	`,
	styles: [
		`
			.lazyload-image {
				width: 100%;
				min-height: 100px;
				object-fit: cover;
			}
		`,
	],
})
export class ImageComponent {

	screen_lg = "1200px";
	screen_md = "992px";

	@Input() defaultImage: string = "assets/placeholder.jpg";
	@Input() image: string;
	@Input() alt: string;
	@Input() maxHeight: number;
	@Input() height: number;
}
