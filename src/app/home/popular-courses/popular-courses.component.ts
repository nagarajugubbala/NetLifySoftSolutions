import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialogComponent } from '../../dialogs/contact-dialog/contact-dialog.component';

@Component({
  selector: 'app-popular-courses',
  templateUrl: './popular-courses.component.html',
  styleUrls: ['./popular-courses.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PopularCoursesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      width: '400px',
    });
  }
  courses = [{ name: 'Artificial Intelligence', img: 'assets/images/artificial-intelligence.ico' },
  { name: 'Machine Learning', img: 'assets/images/machine-learning.ico' },
  { name: 'Software Testing', img: 'assets/images/testing.ico' },
  { name: 'Angular', img: 'assets/images/angular.ico' },
  { name: 'Salesforce', img: 'assets/images/salesforce.ico' },
  { name: 'SAP', img: 'assets/images/sap.ico' },
  { name: 'Python', img: 'assets/images/python-logo.png' },
  { name: 'React', img: 'assets/images/react-logo.png' },
  { name: 'Java', img: 'assets/images/java-logo1.png' },
  { name: 'Digital Marketing', img: 'assets/images/dm-logo.png' },
  { name: 'Human Resourse', img: 'assets/images/hr-logo.png' },
  { name: 'Networking', img: 'assets/images/networking-logo.png' },
  ]
}
