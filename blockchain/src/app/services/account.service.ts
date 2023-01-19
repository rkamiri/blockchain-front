import {Injectable} from '@angular/core';
import Web3 from "web3";

const abi = require('./../../assets/abi.json');
declare const window: any;

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  web3: Web3 = new Web3(window.ethereum);
  contractAddress: string = "0xFF844a80832123721932B2Ef11e16A1cA1EC5Dd2";
  contract: any;

  constructor() {
    this.contract = new this.web3.eth.Contract(abi, this.contractAddress);
  }




  isAdmin(): Promise<any> {
    return new Promise<any>((resolve, reject) => resolve(
      {
        data: () => {
          return false
        }
      }));
  }


  isOwner() {
    return this.contract.methods.isOwner().call().then((result: any) => {
      return result;
    });
  }

}
