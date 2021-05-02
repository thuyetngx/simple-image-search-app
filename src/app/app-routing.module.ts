import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShellService } from "./shell/shell.service";

const routes: Routes = [
	ShellService.childRoutes([
		{
			path: "search",
			loadChildren: () => import("./pages/search/search.module").then((m) => m.SearchModule),
		},
	]),
	// Fallback when no prior route is matched
	{ path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
	exports: [RouterModule],
	providers: [],
})
export class AppRoutingModule {}
