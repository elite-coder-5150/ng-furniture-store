import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorModernComponent } from './interior-modern.component';

describe('InteriorModernComponent', () => {
  let component: InteriorModernComponent;
  let fixture: ComponentFixture<InteriorModernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteriorModernComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteriorModernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
