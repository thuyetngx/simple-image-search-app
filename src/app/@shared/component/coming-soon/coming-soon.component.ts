import { Component } from '@angular/core';

@Component({
	selector: 'app-coming-soon',
	template: ` <div class="d-flex align-items-center justify-content-center coming-soon">Coming soon...</div> `,
	styles: [
		`
			.coming-soon {
				min-height: 300px;
				color: #5699d0;
				font-weight: 600;
				font-size: 2rem;
			}
		`,
	],
})
export class ComingSoonComponent {}
