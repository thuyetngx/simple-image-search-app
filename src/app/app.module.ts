import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ServiceWorkerModule } from "@angular/service-worker";
import { TranslateModule } from "@ngx-translate/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgProgressModule } from "ngx-progressbar";
import { environment } from "@env/environment";
import { CoreModule } from "@core";
import { SharedModule } from "@shared";
import { AuthModule } from "@app/auth";
import { ShellModule } from "./shell/shell.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeModule } from "./pages/home/home.module";

@NgModule({
	imports: [
		BrowserModule,
		ServiceWorkerModule.register("./ngsw-worker.js", { enabled: environment.production }),
		FormsModule,
		HttpClientModule,
		TranslateModule.forRoot(),
		NgbModule,
		NgProgressModule,
		CoreModule,
		SharedModule,
		ShellModule,
		AuthModule,
		HomeModule,
		AppRoutingModule, // must be imported as the last module as it contains the fallback route
	],
	declarations: [AppComponent],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
