import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSummaryComponent } from './order-summary.component';

describe('OrderSummaryComponent', () => {
  let component: OrderSummaryComponent;
  let fixture: ComponentFixture<OrderSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a div with the class of cart-header that contains a div with a class of card-title', () => {
	  	const compiled = fixture.nativeElement;
	expect(compiled.querySelector('.cart-header .card-title')).toBeTruthy();
  });

  it ('should have an unordered list with the list item with the class of item', () => {
	const compiled = fixture.nativeElement;
	expect(compiled.querySelector('ul li.cart-item')).toBeTruthy();
  });

  it('each item within the list has a left and a right side', () => {
	const compiled = fixture.nativeElement;
	expect(compiled.querySelector('ul li.cart-item .left')).toBeTruthy();
	expect(compiled.querySelector('ul li.cart-item .right')).toBeTruthy();
  });

  it ('should have an unordered list with the class name of sub-total', () => {
	const compiled = fixture.nativeElement;
	expect(compiled.querySelector('ul.sub-total')).toBeTruthy();
  });

  it ('in the sub-total list each list item has a left and a right side', () => {
	const compiled = fixture.nativeElement;
	expect(compiled.querySelector('ul.sub-total li .left')).toBeTruthy();
	expect(compiled.querySelector('ul.sub-total li .right')).toBeTruthy();
  });

	it(' the left side should contain a div with the class name of name', () => {
		const compiled = fixture.nativeElement;
		expect(compiled.querySelector('ul.sub-total li .left .name')).toBeTruthy();
	});

	it ('the right side should contain a div with the class of price', () => {
		const compiled = fixture.nativeElement;
		expect(compiled.querySelector('ul.sub-total li .right .price')).toBeTruthy();
	});

	it ('the unordered list with the class of total should contain a list item with the class of total', () => {
		const compiled = fixture.nativeElement;
		expect(compiled.querySelector('ul.total li.total')).toBeTruthy();
	});

	it ('the list item has a left and a right side', () => {
		const compiled = fixture.nativeElement;
		expect(compiled.querySelector('ul.total li.total .left')).toBeTruthy();
		expect(compiled.querySelector('ul.total li.total .right')).toBeTruthy();
	});

	it ('should contain a an ng-primary-btn component with the text of place order', () => {
		const compiled = fixture.nativeElement;
		expect(compiled.querySelector('ng-primary-btn').textContent).toContain('Place Order');
	})
});
