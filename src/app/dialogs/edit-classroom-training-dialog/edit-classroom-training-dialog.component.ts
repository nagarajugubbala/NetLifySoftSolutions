import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { MyErrorStateMatcher } from '../add-course-dialog/add-course-dialog.component';
import { Classroom } from '../../classroom';
import { ClassroomService } from '../../classroom.service';

@Component({
  selector: 'app-edit-classroom-training-dialog',
  templateUrl: './edit-classroom-training-dialog.component.html',
  styleUrls: ['./edit-classroom-training-dialog.component.css']
})
export class EditClassroomTrainingDialogComponent implements OnInit {

  form!: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder,
    public classroomService: ClassroomService, @Inject(MAT_DIALOG_DATA) public data: Classroom,
    public dialogRef: MatDialogRef<EditClassroomTrainingDialogComponent>,) { }

  times = ["9:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
    "4:00 PM", "4:30 PM", "6:00 PM", "6:30 PM", "7:00 PM"];
  trainers = ["Mr. Shiva Kumar", "Mr. Imran", "Mrs. Kalashri", "Mr. Satish Gupta"];
  locations = ["Hyderabad", "Bangalore"];

  ngOnInit(): void {
    this.form = this.fb.group({
      course: [null, [Validators.required]],
      trainer_name: [null],
      date: [null],
      time: [null],
      location: [null],
    });
  }
  matcher = new MyErrorStateMatcher();

  update(id: number) {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.classroomService.update(this.data.id, this.form.value).subscribe(res => {
      console.log('Course updated successfully');
      console.log(this.form.value);
      Swal.fire({ title: 'Course updated successfully' }).then(function () {
        location.reload();
      });

    })
  }

  close() {
    this.dialogRef.close();
  }
}
function id(id: any, data: Classroom) {
  throw new Error('Function not implemented.');
}
