import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jury',
  templateUrl: './jury.component.html',
  styleUrls: ['./jury.component.scss']
})
export class JuryComponent implements OnInit {

  jury = [
    {title: "ARS TECHNICA", url: "https://cdn.thegameawards.com/1/2019/11/2020_Jury_United-States_Ars_Technica_800x800.jpg"},
    {title: "DIGITAL TRENDS", url: "https://cdn.thegameawards.com/1/2019/11/Digital-Trends-1.png"},
    {title: "EASY ALLIES", url: "https://cdn.thegameawards.com/1/2019/11/Image-52-1.png"},
    {title: "ENTERTAINMENT WEEKLY", url: "https://cdn.thegameawards.com/1/2019/11/2019_Jury_United-States_Entertainment_Weekly_800x800.jpg"},
    {title: "GAME INFORMER", url: "https://cdn.thegameawards.com/1/2019/11/2020_Jury_United-States_Game-Informer_800x800.jpg"},
    {title: "GAMESRADAR", url: "https://cdn.thegameawards.com/1/2019/11/2020_Jury_United-States_GamesRadar_800x800.jpg"},
    {title: "GAMERANX", url: "https://cdn.thegameawards.com/1/2019/11/2020_Jury_United-States_GamesRanx_800x800.jpg"},
    {title: "GAMERTAG RADIO", url: "https://cdn.thegameawards.com/1/2019/11/TGA_2021_Voting-Jury_GamerTag-Radio_900x900.jpg"},
    {title: "GAMESPOT", url: "https://cdn.thegameawards.com/1/2019/11/2020_Jury_United-States_Gamespot_800x800.jpg"},
    {title: "GIANT BOMB", url: "https://cdn.thegameawards.com/1/2019/11/2020_Jury_United-States_Giant_Bomb_800x800.jpg"},
    {title: "IGN", url: "https://cdn.thegameawards.com/1/2019/11/2020_Jury_United-States_IGN_800x800.jpg"},
    {title: "INVERSE", url: "https://cdn.thegameawards.com/1/2019/11/TGA_2021_Voting-Jury_Inverse_900x900.jpg"},
    {title: "JEFF GERSTMANN SHOW", url: "https://cdn.thegameawards.com/1/2019/11/channels4_profile-1.jpg"},
    {title: "KINDA FUNNY", url: "https://cdn.thegameawards.com/1/2019/11/2020_Jury_United-States_Kinda_Funny_800x800.jpg"},
    {title: "LA TIMES", url: "https://cdn.thegameawards.com/1/2019/11/2020_Jury_United-States_Los_Angeles_Times_800x800.jpg"},
    {title: "MINNMAX", url: "https://cdn.thegameawards.com/1/2019/11/MinnMaxx-1.png"},
    {title: "PC GAMER", url: "https://cdn.thegameawards.com/1/2019/11/2020_Jury_United-States_PC_Gamer_800x800.jpg"},
    {title: "POLYGON", url: "https://cdn.thegameawards.com/1/2019/11/2020_Jury_United-States_Polygon_800x800.jpg"},
    {title: "SCREEN RANT", url: "https://cdn.thegameawards.com/1/2019/11/TGA_2021_Voting-Jury_Screen-Rant_900x900.jpg"},
    {title: "VENTUREBEAT", url: "https://cdn.thegameawards.com/1/2019/11/2019_Jury_United-States_Venture_Beat_800x800.jpg"},
    {title: "THE VERGE", url: "https://cdn.thegameawards.com/1/2019/11/theverge-1.jpg"},
    {title: "TOUCH ARCADE", url: "https://cdn.thegameawards.com/1/2019/11/2020_Jury_United-States_Touch-Arcade_800x800.jpg"},
    {title: "VICE.COM", url: "https://cdn.thegameawards.com/1/2019/11/2019_Jury_United-States_VICE_800x800.jpg"},
    {title: "WHAT'S GOOD GAMES", url: "https://cdn.thegameawards.com/1/2019/11/2020_Jury_United-States_Whats_Good_Games_800x800.jpg"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
