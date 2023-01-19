import { Component, OnInit } from '@angular/core';
import {GamesService} from "../services/games.service";

@Component({
  selector: 'app-nominees',
  templateUrl: './nominees.component.html',
  styleUrls: ['./nominees.component.scss']
})
export class NomineesComponent implements OnInit {
  private gameService :GamesService;
  games: any = [];
  sessionId: any;
  roundId: any;
  canVote = true;
  constructor(gameService: GamesService) {
    this.gameService = gameService
    this.gameService.getAllGames().then((data: any) => {
      this.games = data;
    })

    this.gameService.getCurrentSessionId().then((data: any) => {
      this.sessionId = data;
      this.gameService.getActualRound(data).then((dataR: any) => {
        this.roundId = dataR;
        if(this.roundId <1){
          this.canVote = false;
        }
      })
    })
  }

  ngOnInit(): void {
  }

  vote(gameId: any, gameName: any) {
    this.gameService.voteGame(gameId).then((res: any) => {
      alert("Voted for game " + gameName)
    })
    console.log(gameId)
  }


}
