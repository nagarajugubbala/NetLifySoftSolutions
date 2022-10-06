import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AddClassroomTrainingDialogComponent } from '../../dialogs/add-classroom-training-dialog/add-classroom-training-dialog.component';
import { Classroom } from '../../classroom';
import { ClassroomService } from '../../classroom.service';
import { ContactDialogComponent } from '../../dialogs/contact-dialog/contact-dialog.component';
import { DeleteClassroomTrainingDialogComponent } from '../../dialogs/delete-classroom-training-dialog/delete-classroom-training-dialog.component';
import { EditClassroomTrainingDialogComponent } from '../../dialogs/edit-classroom-training-dialog/edit-classroom-training-dialog.component';
import { AuthStateService } from '../../shared/auth-state.service';

@Component({
  selector: 'app-classroom-training',
  templateUrl: './classroom-training.component.html',
  styleUrls: ['./classroom-training.component.css']
})
export class ClassroomTrainingComponent implements OnInit {

  course!: Classroom;
  id!: number;
  courses: Classroom[] = [];
  // columns we will show on the table

  public displayedColumns = ['course', 'trainer_name', 'date', 'time', 'location', 'registration', 'actions'];
  public userDisplayedColumns = ['course', 'trainer_name', 'date', 'time', 'location', 'registration'];
  //the source where we will get the data
  public dataSource = new MatTableDataSource<Classroom>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public classroomService: ClassroomService, public dialog: MatDialog, private auth: AuthStateService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
    });
    this.classroomService.get().subscribe((res) => {
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
    const dialogRef = this.dialog.open(DeleteClassroomTrainingDialogComponent, {
      width: '400px',
      data: { id: id }
    });
  }
  openEditDialog(editData: Classroom): void {
    const dialogRef = this.dialog.open(EditClassroomTrainingDialogComponent, {
      width: '500px',
      data: editData,
    });
  }

  openAddCourseDialog(): void {
    const dialogRef = this.dialog.open(AddClassroomTrainingDialogComponent, {
      width: '600px',
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      width: '400px',
    });
  }

}
