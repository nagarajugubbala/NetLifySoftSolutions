import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from '../../course';
import { CourseService } from '../../course.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {
  courses: Course[] = [];
  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Course, public courseService: CourseService) {
    console.log(data);
  }


  ngOnInit(): void {
  }

  deleteCourse(id: number) {
    this.courseService.delete(id).subscribe(res => {
      this.courses = this.courses.filter(item => item.id !== id);
      console.log('Course deleted successfully!');
      location.reload();
    })
  }

}
