import { Component } from '@angular/core';
import Web3 from 'web3';
declare const window: any;
@Component({
  selector: 'sign-in',
  template: `
    <span *ngIf="!isConnected" (click)="connectToMetaMask()">&nbsp;SIGN IN</span>
    <span *ngIf="isConnected" (click)="disconnectFromMetaMask()">&nbsp;SIGN OUT</span>
  `
})
export class SigninComponent{
  web3: Web3 = new Web3();
  isConnected = false;
  constructor() {
    if(localStorage.getItem('metamaskLogin')) {
      this.isConnected = true;
    }
    if (typeof window.ethereum !== 'undefined') {
      this.web3 = new Web3(window.ethereum);
    }
  }

  connectToMetaMask() {
    if(this.web3){
      // @ts-ignore
      this.web3.currentProvider.enable()
        .then((data: any) => {
          localStorage.setItem('metamaskLogin', data[0]);
          this.isConnected = true;
        })
        .catch((err: any) => {
          if(!window.ethereum){
            alert('Please install MetaMask');
          } else {
            alert(`Error connecting to MetaMask: ${err.message}`);
          }
        });
    }
  }

  disconnectFromMetaMask() {
    localStorage.removeItem('metamaskLogin');
    this.isConnected = false;
  }
}
