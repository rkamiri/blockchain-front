import {Injectable} from '@angular/core';
import Web3 from "web3";
import {local} from "@mindsorg/web3modal-angular/lib/web3modal-ts/src";

const abi = require('./../../assets/abi.json');
declare const window: any;

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  web3: Web3 = new Web3(window.ethereum);
  contractAddress: string = "0xFF844a80832123721932B2Ef11e16A1cA1EC5Dd2";
  contract: any;

  constructor() {
    this.contract = new this.web3.eth.Contract(abi, this.contractAddress);
  }

  getAllGames(): any {
    return this.contract.methods.getAllGames().call().then((games: any) => {
      return games;
    });
  }

  addGame(title: any, platform: any, price: any, description: any, date: any, image: any): any {
    const account = localStorage.getItem("metamaskLogin");

    return this.contract.methods.addGame(title, platform, price, description, date, image).send({from: account}).then((data: any) => {
      console.log(data)
    })
  }

  voteGame(gameId: any): any {
    const account = localStorage.getItem("metamaskLogin");
    return this.contract.methods.getCurrentVoteSessionId().call().then((result: any) => {
      return this.contract.methods.vote(result, gameId).send({from: account}).then((resultV: any) => {
        return resultV;
      });
    })
  }
}
