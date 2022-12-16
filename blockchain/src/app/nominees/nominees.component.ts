import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nominees',
  templateUrl: './nominees.component.html',
  styleUrls: ['./nominees.component.scss']
})
export class NomineesComponent implements OnInit {
  games = [
    {name: "GOD OF WAR : RAGNAROK", platform: "PS4, PS5", price: "$70 - $80", description: "Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go", release: "Fall 2022", url:"https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png"},
    {name: "Gran Turismo® 7", platform: "PS4, PS5, PC", price: "$70 - $80", description: "Gran Turismo® 7 brings together the very best features of the Real Driving Simulator.", release: "Fall 2022", url:"https://static.actugaming.net/media/2020/06/gran-turismo-7-jaquette.jpg"},
    {name: "Marvel's Spider-Man: Miles Morales", platform: "PS4, PS5", price: "$70 - $80", description: "Be greater. Be yourself. Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.", release: "Fall 2022", url:"https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/PRfYtTZQsuj3ALrBXGL8MjAH.jpg"},
    {name: "Ratchet & Clank: Rift Apart", platform: "PS5", price: "$80", description: "Blast your way through an interdimensional adventure.", release: "Fall 2021", url:"https://image.api.playstation.com/vulcan/ap/rnd/202101/2921/DwVjpbKOsFOyPdNzmSTSWuxG.png"},
    {name: "UNCHARTED™: Legacy of Thieves Collection", platform: "PS5, PC", price: "$70 - $80", description: "Are you ready to seek your fortune", release: "Winter 2022", url:"https://cdn1.epicgames.com/offer/8b2d6cf2b45b41f1abe91bc5b7c1e8f9/EGS_UNCHARTEDLegacyofThievesCollection_NaughtyDogLLC_S2_1200x1600-6d81cdaf0ca5c5e1cf9f9f32a92f4b14"},
    {name: "Returnal", platform: "PS5", price: "$70 - $80", description: "Break the cycle of chaos on an always-changing alien planet.", release: "Spring 2022", url:"https://image.api.playstation.com/vulcan/ap/rnd/202011/1621/fYZQHZ42eXXUt7c6D5YjLrq5.png"},
    {name: "Ghost of Tsushima Director's Cut", platform: "PS4, PS5", price: "$70 - $80", description: "A storm is coming. Discover the expanded Ghost of Tsushima experience in this Director’s Cut.", release: "Fall 2022", url:"https://image.api.playstation.com/vulcan/ap/rnd/202106/2322/c16gs6a7lbAYzPf7ZTikbH1c.png"},
    {name: "DEATH STRANDING DIRECTOR'S CUT", platform: "PS5", price: "$70 - $80", description: "Connect a fractured society in the definitive DEATH STRANDING experience for PlayStation®5.", release: "Fall 2022", url:"https://cdn1.epicgames.com/offer/0a9e3c5ab6684506bd624a849ca0cf39/EGS_DEATHSTRANDINGDIRECTORSCUT_KOJIMAPRODUCTIONS_Expansion_S2_1200x1600-5f99e16507795f9b497716b470cfd876"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
