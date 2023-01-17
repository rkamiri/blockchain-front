import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {NomineesComponent} from "./nominees/nominees.component";
import {JuryComponent} from "./jury/jury.component";
import {CandidateComponent} from "./candidate/candidate.component";
import {AccountComponent} from "./account/account.component";
import {ResultsComponent} from "./results/results.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'jury', component: JuryComponent},
  {path: 'nominees', component: NomineesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'candidate', component: CandidateComponent},
  {path: 'account', component: AccountComponent},
  {path: 'results', component: ResultsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
