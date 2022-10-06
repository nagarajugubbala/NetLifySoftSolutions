import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInDetailComponent } from './course-in-detail.component';

describe('CourseInDetailComponent', () => {
  let component: CourseInDetailComponent;
  let fixture: ComponentFixture<CourseInDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseInDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseInDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
