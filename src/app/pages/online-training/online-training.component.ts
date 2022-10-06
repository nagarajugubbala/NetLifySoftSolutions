import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AddCourseDialogComponent } from '../../dialogs/add-course-dialog/add-course-dialog.component';
import { AddTrainerDialogComponent } from '../../dialogs/add-trainer-dialog/add-trainer-dialog.component';
import { ContactDialogComponent } from '../../dialogs/contact-dialog/contact-dialog.component';
import { Course } from '../../course';
import { CourseService } from '../../course.service';
import { DeleteDialogComponent } from '../../dialogs/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from '../../dialogs/edit-dialog/edit-dialog.component';
import { AuthStateService } from '../../shared/auth-state.service';

@Component({
  selector: 'app-online-training',
  templateUrl: './online-training.component.html',
  styleUrls: ['./online-training.component.css']
})
export class OnlineTrainingComponent implements OnInit, AfterViewInit {
  course!: Course;
  id!: number;
  courses: Course[] = [];
  // columns we will show on the table
  
  public displayedColumns = ['course', 'date', 'time', 'duration', 'registration', 'actions'];
  public userDisplayedColumns = ['course', 'date', 'time', 'duration', 'registration'];
  //the source where we will get the data
  public dataSource = new MatTableDataSource<Course>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public courseService: CourseService, public dialog: MatDialog, private auth: AuthStateService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
    });
    this.courseService.getAll().subscribe((res) => {
      // console.log(res);
      this.dataSource.data = res;
    });

  }

  isSignedIn!: boolean;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDeleteDialog(id: number): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '400px',
      data: { id: id }
    });
  }
  openEditDialog(editData: Course): void {
    // console.log(editData);
    // this.courseService.find(this.id).subscribe((editData: Course) => {
    //   this.course = editData;
    //   console.log(this.course);
    // });
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '500px',
      data: editData,
    });
  }

  openAddCourseDialog(): void {
    const dialogRef = this.dialog.open(AddCourseDialogComponent, {
      width: '600px',
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      width: '400px',
    });
  }

}
