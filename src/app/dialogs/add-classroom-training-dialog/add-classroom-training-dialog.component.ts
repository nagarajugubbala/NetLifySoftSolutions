import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { AddCourseDialogComponent, MyErrorStateMatcher } from '../add-course-dialog/add-course-dialog.component';
import { ClassroomService } from '../../classroom.service';

@Component({
  selector: 'app-add-classroom-training-dialog',
  templateUrl: './add-classroom-training-dialog.component.html',
  styleUrls: ['./add-classroom-training-dialog.component.css']
})
export class AddClassroomTrainingDialogComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder,
    public classroomService: ClassroomService,
    public dialogRef: MatDialogRef<AddCourseDialogComponent>,) { }

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

  save(form: any) {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.classroomService.create(this.form.value).subscribe(res => {
      console.log('Course created successfully');
      console.log(this.form.value);
      Swal.fire({ title: 'Course created successfully' }).then(function () {
        location.reload();
      });

    })
  }

  close() {
    this.dialogRef.close();
  }

}
