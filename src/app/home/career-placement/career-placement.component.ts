import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialogComponent } from '../../dialogs/contact-dialog/contact-dialog.component';

@Component({
  selector: 'app-career-placement',
  templateUrl: './career-placement.component.html',
  styleUrls: ['./career-placement.component.css']
})
export class CareerPlacementComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      width: '400px',
    });
  }

}
