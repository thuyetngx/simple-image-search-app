import { Component, OnInit } from "@angular/core";

import { AuthenticationService, CredentialsService } from "@app/auth";
import { LoginComponent } from "@app/auth/login/login.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
	selector: "app-account",
	templateUrl: "./account.component.html",
	styleUrls: ["./account.component.scss"],
})
export class AccountComponent implements OnInit {
	menuHidden = true;

	constructor(
		private modal: NgbModal,
		private authenticationService: AuthenticationService,
		private credentialsService: CredentialsService
	) {}

	ngOnInit() {}

	toggleMenu() {
		this.menuHidden = !this.menuHidden;
	}

	logout() {
		this.authenticationService.logout().subscribe(() => {});
	}

	get username(): string | null {
		const credentials = this.credentialsService.credentials;
		return credentials ? credentials.username : null;
	}

	onLogin() {
		this.modal.open(LoginComponent, { centered: true, backdrop: "static" }).result.then(
			() => {},
			() => {}
		);
	}
}
