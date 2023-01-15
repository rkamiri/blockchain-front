import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  private amount = 50;
  private size = 5;
  private speed = 1.5;
  private wind = 0;
  private color = '#000';
  private opacity = 0.8;
  private swing = 1;
  private image = '';
  private zIndex = 1;

  constructor() {}

  changeColor() {
    this.color = this.color === '#000' ? '#f00' : '#000';
  }

  changeAmount() {
    this.amount = this.amount == 50 ? 200 : 50;
  }

  changeSize() {
    this.size = this.size == 5 ? 10 : 5;
  }

  changeSpeed() {
    this.speed = this.speed == 1.5 ? 5 : 1.5;
  }

  changeWind() {
    this.wind = this.wind == 0 ? 2 : 0;
  }

  changeOpacity() {
    this.opacity = this.opacity == 0.8 ? 0.1 : 0.8;
  }
  
  changeSwing() {
    this.swing = this.swing == 1 ? 5 : 1;
  }
  
  changeImage() {
    this.image = this.image == '' ? '/favicon.ico' : '';
  }
  
  changeZindex() {
    this.zIndex = this.zIndex == 1 ? -1 : 1;
  }

}
