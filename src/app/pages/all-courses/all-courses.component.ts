import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialogComponent } from '../../dialogs/contact-dialog/contact-dialog.component';
import { CourseInDetail } from './course-in-detail';
import { CourseInDetailService } from './course-in-detail.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit {
  courses!: CourseInDetail[];
  constructor(public dialog: MatDialog, private courseInDetailService: CourseInDetailService) { }


  ngOnInit(): void {
    this.courses = this.courseInDetailService.getCourses();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      width: '400px',
    });
  }
}
