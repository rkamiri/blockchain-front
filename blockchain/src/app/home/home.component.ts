import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('scroll', [
      state('on', style({left: '-100px'})),
      transition('* => *', [
        style({left: '-100px'}),
        animate(10000, style({left: '100%'}))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  state = 0;

  scrollDone() {
    this.state++;
  }

  constructor() { }

  ngOnInit(): void {
    const video = document.getElementById("background-video") as HTMLVideoElement;
    video.play().then(r => {});
  }

}
