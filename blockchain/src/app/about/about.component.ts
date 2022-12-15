import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Clipboard} from '@angular/cdk/clipboard';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  buttons = {
    medias:  {clicked: false, url: "GAMEAWARDS@FORTYSEVEN.COM"},
    partnership: {clicked: false, url: "INFO@THEGAMEAWARDS.COM"}
  }
  constructor(private titleService:Title, private clipboard: Clipboard) {
    this.titleService.setTitle("About | The game awards");
  }

  ngOnInit(): void {}

  clickOnButton(medias: any): void {
    medias.clicked = true;
    this.clipboard.copy(medias.url);
    setTimeout(() => {
      medias.clicked = false;
    }, 3000)
  }


}
