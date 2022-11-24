import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelechosPageComponent } from './helechos-page.component';

describe('HelechosPageComponent', () => {
  let component: HelechosPageComponent;
  let fixture: ComponentFixture<HelechosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelechosPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelechosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
