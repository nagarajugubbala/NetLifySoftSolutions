import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { CourseService } from '../../course.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-course-dialog',
  templateUrl: './add-course-dialog.component.html',
  styleUrls: ['./add-course-dialog.component.css']
})
export class AddCourseDialogComponent implements OnInit {

  form!: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder,
    public courseService: CourseService,
    public dialogRef: MatDialogRef<AddCourseDialogComponent>,) { }

  times = ["9:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
    "4:00 PM", "4:30 PM", "6:00 PM", "6:30 PM", "7:00 PM"];
  trainers = ["Mr. Shiva Kumar", "Mr. Imran", "Mrs. Kalashri", "Mr. Satish Gupta"];

  ngOnInit(): void {
    this.form = this.fb.group({
      course: [null, [Validators.required]],
      trainer_name: [null],
      date: [null],
      time: [null],
      duration: [null],
      actual_price: [null],
      offer_price: [null],
    });
  }
  matcher = new MyErrorStateMatcher();

  save(form: any) {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.courseService.create(this.form.value).subscribe(res => {
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
