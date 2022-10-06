import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerPlacementComponent } from './career-placement.component';

describe('CareerPlacementComponent', () => {
  let component: CareerPlacementComponent;
  let fixture: ComponentFixture<CareerPlacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerPlacementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
