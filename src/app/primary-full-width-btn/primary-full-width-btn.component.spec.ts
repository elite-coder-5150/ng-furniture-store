import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PrimaryFullWidthBtnComponent} from './primary-full-width-btn.component';

describe('PrimaryFullWidthBtnComponent', () => {
	let component: PrimaryFullWidthBtnComponent;
	let fixture: ComponentFixture<PrimaryFullWidthBtnComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PrimaryFullWidthBtnComponent]
		})
				.compileComponents();

		fixture = TestBed.createComponent(PrimaryFullWidthBtnComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it ('should have a title', () => {
		component.title = 'Test Title';
		fixture.detectChanges();
		const compiled = fixture.nativeElement;
		expect(compiled.querySelector('button').textContent).toContain('Test Title');
	});
});
