import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../services/account.service";

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
  juryList: any;
  accountService: AccountService;

  constructor(private formBuilder: FormBuilder, accountService: AccountService) {
    this.accountService = accountService;
  }

  ngOnInit(): void {
    this.isAdminFn();
  }
  get f() { return this.form.controls; }
  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;
  }


  removeJury(address: any) {
    this.accountService.removeJury(address).then(() => {
      this.accountService.getJury().then(result => {
        this.juryList = result;
      })
    })
  }
  addJury(address: any) {
    this.accountService.removeJury(address).then(() => {
      this.accountService.getJury().then(result => {
        this.juryList = result.data;
      })
    })
  }

  getJury() {
      this.accountService.getJury().then(result => {
        this.juryList = result.data;
    })
  }

  isAdminFn() {
    this.accountService.isAdmin().then(result => {
      this.isAdmin = result.data;
      if(this.isAdmin) {
        this.getJury();
      }
    })
  }


}
