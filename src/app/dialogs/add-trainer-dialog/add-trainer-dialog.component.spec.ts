import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrainerDialogComponent } from './add-trainer-dialog.component';

describe('AddTrainerDialogComponent', () => {
  let component: AddTrainerDialogComponent;
  let fixture: ComponentFixture<AddTrainerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTrainerDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTrainerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
