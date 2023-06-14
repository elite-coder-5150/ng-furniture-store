import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'ng-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
	public loginForm : FormGroup = new FormGroup({});

	/**
	 * i need this function to use axios to send the form data to the server
	 */
	public onSubmit() : void {
	}
}
