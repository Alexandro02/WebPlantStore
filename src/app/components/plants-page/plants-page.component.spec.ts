import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsPageComponent } from './plants-page.component';

describe('PlantsPageComponent', () => {
  let component: PlantsPageComponent;
  let fixture: ComponentFixture<PlantsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
