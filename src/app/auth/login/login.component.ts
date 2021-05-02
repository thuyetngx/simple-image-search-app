import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { finalize } from "rxjs/operators";
import { AuthenticationService } from "../authentication.service";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import { environment } from "@env/environment";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
	version: string | null = environment.version;
	error: string | undefined;
	loginForm!: FormGroup;
	isLoading = false;

	constructor(
		private activeModal: NgbActiveModal,
		private formBuilder: FormBuilder,
		private authenticationService: AuthenticationService
	) {
		this.createForm();
	}

	ngOnInit() {}

	ngOnDestroy() {}

	login() {
		this.isLoading = true;
		const login$ = this.authenticationService.login(this.loginForm.value);
		login$
			.pipe(
				finalize(() => {
					this.loginForm.markAsPristine();
					this.activeModal.close(true);
					this.isLoading = false;
				})
			)
			.subscribe(
				(credentials) => {
					console.debug(`${credentials.username} successfully logged in`);
				},
				(error) => {
					console.debug(`Login error: ${error}`);
					this.error = error;
				}
			);
	}

	private createForm() {
		this.loginForm = this.formBuilder.group({
			username: ["YOUR_USERNAME", Validators.required],
			password: ["YOUR_PASSWORD", Validators.required],
			remember: true,
		});
	}

	onClose() {
		this.activeModal.close();
	}
}
