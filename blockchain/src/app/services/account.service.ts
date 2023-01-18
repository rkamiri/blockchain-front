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

  contractAddress: string ="0xFF844a80832123721932B2Ef11e16A1cA1EC5Dd2";

  test(){
    this.web3.setProvider(new Web3.providers.HttpProvider("http://localhost:8545/"));

    const currentUserAddress = localStorage.getItem('metamaskLogin');
    console.log(currentUserAddress)
    this.contract = new this.web3.eth.Contract(abi, this.contractAddress);
    console.log(this.contract.methods.isOwner().send({from:currentUserAddress}))

  }

}
