import { Component } from '@angular/core';

@Component({
  selector: 'ng-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

	// I need a function the prints a recent and send that to the users email
	printReceipt(): void {

	}

	// send an email using nodemailer
	sendEmail(): void {

	}
}
