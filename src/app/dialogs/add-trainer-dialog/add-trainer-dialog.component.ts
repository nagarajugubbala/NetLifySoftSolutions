import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Trainer } from '../../trainer';
import { TrainerService } from '../../trainer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-trainer-dialog',
  templateUrl: './add-trainer-dialog.component.html',
  styleUrls: ['./add-trainer-dialog.component.css']
})
export class AddTrainerDialogComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder,
    public trainerService: TrainerService,
    public dialogRef: MatDialogRef<AddTrainerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Trainer,) { }

    skillList: string[] = ['Python', 'Java', 'Angular', 'ReactJS', 'SQL', 'Salesforce'];

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(10)]],
      skills: [null],
    });
  }

  save(form: any) {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.trainerService.create(this.form.value).subscribe(res => {
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
