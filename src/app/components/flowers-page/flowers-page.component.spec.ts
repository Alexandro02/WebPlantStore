import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowersPageComponent } from './flowers-page.component';

describe('FlowersPageComponent', () => {
  let component: FlowersPageComponent;
  let fixture: ComponentFixture<FlowersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
