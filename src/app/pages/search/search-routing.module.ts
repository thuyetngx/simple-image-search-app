import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SearchComponent } from "@app/pages/search/component/search.component";

const routes: Routes = [
	{
	  path: '',
	  component: SearchComponent,
	  data: {
		title: 'Search',
	  },
	},
  ];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	providers: [],
})
export class SearchRoutingModule {}
