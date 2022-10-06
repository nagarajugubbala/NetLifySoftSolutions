import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  submitted = false;


  constructor(private fb: FormBuilder, public contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      course: [null],
      phone: [null, [Validators.required, Validators.pattern("^[0-9]*$"),
      Validators.minLength(10), Validators.maxLength(10)]],
      message: [null],
    });
  }
  getDetails(form: any) {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    // if (this.submitted = false) {
    //   this.form.reset();
    // }

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));

    this.contactService.create(this.form.value).subscribe(res => {
      console.log('Recieved your response successfully');
      console.log(this.form.value);
      Swal.fire({ title: 'Recieved your response successfully' }).then(function () {
        location.reload();
      });
    })
  }


}
