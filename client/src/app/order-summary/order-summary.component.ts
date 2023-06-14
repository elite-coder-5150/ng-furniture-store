import {Component, Input} from '@angular/core';
import {CartItem} from "../models/cart-item";

@Component({
  selector: 'ng-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent {
	@Input() cartItems: CartItem[] = [];
	@Input() total: number = 0;
	@Input() subtotal: number = 0;
	public cartItem: CartItem = {} as CartItem;
	constructor() {}
}
