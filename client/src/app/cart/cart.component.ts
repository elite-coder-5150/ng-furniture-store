import { Component } from '@angular/core';
import { CartItem } from '../models/cart-item';
@Component({
  selector: 'ng-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
	public cart: CartItem[] = [];
	constructor() {}

	addToCart() {
		this.cart.push({
			id: 1,
			name: 'Product 1',
			price: 9.99,
			quantity: 1
		});
	}

	removeFromCart(index: number) {
		this.cart.splice(index, 1);
	}

	getTotal() {
		return this.cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
	}

	getQuantity() {
		return this.cart.reduce((acc, curr) => acc + curr.quantity, 0);
	}
}
