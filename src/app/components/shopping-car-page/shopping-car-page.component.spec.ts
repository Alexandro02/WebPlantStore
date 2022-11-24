import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCarPageComponent } from './shopping-car-page.component';

describe('ShoppingCarPageComponent', () => {
  let component: ShoppingCarPageComponent;
  let fixture: ComponentFixture<ShoppingCarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCarPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
