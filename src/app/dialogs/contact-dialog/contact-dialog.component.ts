import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from '../../contact';
import { ContactService } from '../../contact.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})
export class ContactDialogComponent implements OnInit {

  form!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    public contactService: ContactService,
    public dialogRef: MatDialogRef<ContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contact,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      phone: [null, [Validators.required, Validators.pattern("^[0-9]*$"),
      Validators.minLength(10), Validators.maxLength(10)]],
      message: [null],
    });
  }

  save(form: any) {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    // if (this.submitted = false) {
    //   this.form.reset();
    // }
    this.contactService.create(this.form.value).subscribe(res => {
      console.log('Recieved your response successfully');
      console.log(this.form.value);
      Swal.fire({ title: 'Recieved your response successfully' }).then(function () {
        location.reload();
      });

    })
  }

  close() {
    this.dialogRef.close();
  }

}
