import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from '../../contact';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-delete-contact-dialog',
  templateUrl: './delete-contact-dialog.component.html',
  styleUrls: ['./delete-contact-dialog.component.css']
})
export class DeleteContactDialogComponent implements OnInit {
  contacts: Contact[] = [];
  constructor(public dialogRef: MatDialogRef<DeleteContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contact, public contactService: ContactService) {
    console.log(data);
  }

  ngOnInit(): void {
  }

  deleteContact(id: number) {
    this.contactService.delete(id).subscribe(res => {
      this.contacts = this.contacts.filter(item => item.id !== id);
      console.log('Contact deleted successfully!');
      location.reload();
    })
  }

}
