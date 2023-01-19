import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../services/account.service";
import {GamesService} from "../services/games.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  isAdmin: any = false;
  hasVote: any = false;
  canAddGame: any = false;
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
  error: any;
  private gameService: GamesService;
  private sessionId: any;
  roundId: any;
  votedGame: any;

  constructor(private formBuilder: FormBuilder, accountService: AccountService, gameService: GamesService) {
    this.accountService = accountService;
    this.gameService = gameService;
    this.accountService.isOwner().then((result: any) => {
      this.isAdmin = result;
    })
    this.gameService.getCurrentSessionId().then((data: any) => {
      this.sessionId = data;
      this.gameService.getActualRound(data).then((dataR: any) => {
        this.roundId = dataR;
        if (this.roundId < 1) {
          this.hasVote = false;
        } else {
          this.gameService.getCurrentVoteGame(this.sessionId).then((result: any) => {
            this.votedGame = result;
          })
        }
      })
    })
  }

  ngOnInit(): void {

  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;
  }


  removeJury(address: any) {
    /* this.accountService.removeJury(address).then(() => {
       this.accountService.getJury().then(result => {
         this.juryList = result;
       })
     })*/
  }

  addJury(address: any, name: any, image: any) {
    /* this.error = null;
     this.loading = true;
     if(address.length === 0 || name.length === 0 || image.length === 0){
       this.error = "some fields are empty"
       this.loading = false;
     }
     this.accountService.addJury(address, name, image).then(() => {
       this.accountService.getJury().then(result => {
         this.juryList = result.data;
         this.loading = false;
       })
     })*/
  }

  getJury() {
    /*this.accountService.getJury().then(result => {
      this.juryList = result.data;
  })*/
  }

  addGame() {
    if (this.form.get("name")?.hasError('required') ||
      this.form.get("platform")?.hasError('required') ||
      this.form.get("price")?.hasError('required') ||
      this.form.get("description")?.hasError('required') ||
      this.form.get("releaseDate")?.hasError('required') ||
      this.form.get("imageUrl")?.hasError('required')
    ) {
      alert("need all inputs to be completed")
      return;
    }
    if (confirm("Are you sure ?")) {
      this.gameService.addGame(this.form.get('name')?.value, this.form.get('platform')?.value, this.form.get('price')?.value, this.form.get('description')?.value,
        this.form.get('releaseDate')?.value, this.form.get('imageUrl')?.value).then((data: any) => {
        if (data.id) {
          console.log("added game");
          alert("Added Game");
          location.href = '/nominees';
        }
      });
    }
  }

  startSession() {
    this.gameService.startSession(this.sessionId).then((result: any) => {
      alert("session started");
    })
  }

  nextRound() {
    this.gameService.goNextRound(this.sessionId).then((result: any) => {
      alert("next round selected");
    })
  }
}
