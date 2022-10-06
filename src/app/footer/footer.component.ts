import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  submitted = false;
  constructor(private fb: FormBuilder, public contactService: ContactService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    });
  }
  getDetails(form: any) {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.contactService.create(this.form.value).subscribe(res => {
      console.log(this.form.value);
      Swal.fire({ title: 'News letter subscribed successfully!' }).then(function () {
        console.log('News letter subscribed successfully!');
        location.reload();
      });
    })
  }

}
