import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Classroom } from '../../classroom';
import { ClassroomService } from '../../classroom.service';

@Component({
  selector: 'app-delete-classroom-training-dialog',
  templateUrl: './delete-classroom-training-dialog.component.html',
  styleUrls: ['./delete-classroom-training-dialog.component.css']
})
export class DeleteClassroomTrainingDialogComponent implements OnInit {

  courses: Classroom[] = [];
  constructor(public dialogRef: MatDialogRef<DeleteClassroomTrainingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Classroom, public classroomService: ClassroomService) {
    console.log(data);
  }


  ngOnInit(): void {
  }

  deleteCourse(id: number) {
    this.classroomService.delete(id).subscribe(res => {
      this.courses = this.courses.filter(item => item.id !== id);
      console.log('Course deleted successfully!');
      location.reload();
    })
  }

}
