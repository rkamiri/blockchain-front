import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  //remove jury member
  removeJury(address: any): Promise<any> {
    return new Promise(() => null);
  }
  //add jury member
  addJury(address: any, name: string, image: string): Promise<any> {
    return new Promise(() => null);
  }
  //get all jury
  getJury(): Promise<any> {
    return new Promise(() => [
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
    ]);
  }

  isAdmin(): Promise<any> {
    return  new Promise(() =>true);
  }
}
