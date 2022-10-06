import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseInDetail } from '../all-courses/course-in-detail';
import { CourseInDetailService } from '../all-courses/course-in-detail.service';
import { ContactDialogComponent } from '../../dialogs/contact-dialog/contact-dialog.component';

@Component({
  selector: 'app-course-in-detail',
  templateUrl: './course-in-detail.component.html',
  styleUrls: ['./course-in-detail.component.css']
})
export class CourseInDetailComponent implements OnInit {
  courseID: any;
  course: CourseInDetail | any;
  constructor(private _Activatedroute: ActivatedRoute, private _router: Router,
    private _courseInDetailService: CourseInDetailService, public dialog: MatDialog) { }

  sub: any;
  ngOnInit(): void {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      console.log(params);
      this.courseID = params.get('courseID');
      let courses = this._courseInDetailService.getCourses();
      this.course = courses.find(c => c.courseID == this.courseID);
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onBack(): void {
    this._router.navigate(['all-courses']);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      width: '400px',
    });
  }


}
