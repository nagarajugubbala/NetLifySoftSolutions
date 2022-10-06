import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../contact';
import { ContactService } from '../../contact.service';
import { DeleteContactDialogComponent } from '../../dialogs/delete-contact-dialog/delete-contact-dialog.component';
import { AuthStateService } from '../../shared/auth-state.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  public displayedColumns = ['name', 'course', 'phone', 'email', 'message', 'actions'];
  public dataSource = new MatTableDataSource<Contact>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public contactService: ContactService, public dialog: MatDialog, 
    private auth: AuthStateService, private route: ActivatedRoute,
    private router: Router) { }

  isSignedIn!: boolean;

  ngOnInit(): void {
    this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
    });
    this.contactService.getAll().subscribe((res) => {
      // console.log(res);
      this.dataSource.data = res;
    });
  }
  openDeleteDialog(id: number): void {
    const dialogRef = this.dialog.open(DeleteContactDialogComponent, {
      width: '400px',
      data: { id: id }
    });
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
