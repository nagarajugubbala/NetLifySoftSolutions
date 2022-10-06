import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClassroomTrainingDialogComponent } from './add-classroom-training-dialog.component';

describe('AddClassroomTrainingDialogComponent', () => {
  let component: AddClassroomTrainingDialogComponent;
  let fixture: ComponentFixture<AddClassroomTrainingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClassroomTrainingDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddClassroomTrainingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
