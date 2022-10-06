import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteClassroomTrainingDialogComponent } from './delete-classroom-training-dialog.component';

describe('DeleteClassroomTrainingDialogComponent', () => {
  let component: DeleteClassroomTrainingDialogComponent;
  let fixture: ComponentFixture<DeleteClassroomTrainingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteClassroomTrainingDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteClassroomTrainingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
