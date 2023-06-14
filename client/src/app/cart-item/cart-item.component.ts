import {Component, Input} from '@angular/core';

@Component({
  selector: 'ng-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
	@Input() name: string = '';
	@Input() price: number = 0;

	public quantity: number = 0;
	public total: number = 0;
	public subtotal: number = 0;
	public id: number = 0;
	calculateTotal(quantity: number, price: number): number {
		return quantity * price;
	}

	calculateSubtotal(quantity: number, price: number): number {
		return quantity * price;
	}

	getNumItems(quantity: number): number {
		return quantity;
	}
}
