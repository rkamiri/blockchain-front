import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  isAdmin: any = true;
  hasVote: any = true;
  canAddGame: any = true;
  title: any;
  form: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
    releaseDate: ['', Validators.required],
    platform: ['', Validators.required],
    imageUrl: ['', Validators.required],
  });
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {}
  get f() { return this.form.controls; }
  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;

  }


}
