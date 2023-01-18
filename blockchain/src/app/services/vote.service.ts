import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor() { }

  //vote for a game
  vote(sessionId:any, gameId: any): Promise<any> {
    return new Promise(() => null);
  }
  //get session results for round
  results(sessionId:any): Promise<any> {
    return new Promise(() => null);
  }
  //get winner of the session's round
  winner(sessionId:any): Promise<any> {
    return new Promise(() => null);
  }
  //get current session id
  currentSessionId(): Promise<any> {
    return new Promise(() => null);
  }
}
