import { Injectable } from '@angular/core';
import Web3 from "web3";
const abi = require ('./../../assets/abi.json');

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }
  web3: Web3 = new Web3();
  contract: any;



  //remove jury member
  removeJury(address: any): Promise<any> {
    return new Promise(() => null);
  }
  //add jury member
  addJury(address: any, name: string, image: string): Promise<any> {
    return new Promise<any>((resolve, reject) => resolve(
      {
        data:()=>{
          return null
        }
      }));
  }
  //get all jury
  getJury(): Promise<any> {
    return new Promise<any>((resolve, reject) => resolve(
      {
        data :[
            {
              name: "test",
              address: "test",
              image: "test",
            },
            {
              name: "test2",
              address: "test2",
              image: "test2",
            }
          ]

      }));
  }

  isAdmin(): Promise<any> {
    return new Promise<any>((resolve, reject) => resolve(
      {
        data:()=>{
          return false
        }
      }));
  }

  contractAddress: string ="0x5CC06a394CF4c297b44378334F981E8dBeE141bf";

  test(){
    const currentUserAddress = localStorage.getItem('metamaskLogin');
    this.contract = new this.web3.eth.Contract(abi, this.contractAddress);
    console.log(this.contract.methods.owner.call({from: currentUserAddress}))
    //this.contract.<methods.send(x,y,z)>
    //this.contract.<methods.call(x,y,z)>
  }

}
