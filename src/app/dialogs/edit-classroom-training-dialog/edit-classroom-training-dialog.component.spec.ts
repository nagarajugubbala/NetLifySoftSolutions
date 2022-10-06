import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClassroomTrainingDialogComponent } from './edit-classroom-training-dialog.component';

describe('EditClassroomTrainingDialogComponent', () => {
  let component: EditClassroomTrainingDialogComponent;
  let fixture: ComponentFixture<EditClassroomTrainingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditClassroomTrainingDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditClassroomTrainingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
