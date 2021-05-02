import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { ApiService } from "@app/@core/services/api.service";
import { HttpParams } from "@angular/common/http";

@Injectable({
	providedIn: "root",
})
export class ImageService {
	itemPerPage: string = environment.itemPerPage;

	constructor(private apiService: ApiService) {}

	search(keywords: string, startIndex: number) {
		const params = new HttpParams()
			.set("key", environment.api_key)
			.set("q", encodeURIComponent(keywords))
			.set("image_type", 'photo')
			.set("pretty", 'true')
			.set("page", startIndex ? startIndex.toString() : "1")
			.set("per_page", this.itemPerPage)
			.set("lang", localStorage.getItem("language"));
		return this.apiService.get("", params);
	}
}
