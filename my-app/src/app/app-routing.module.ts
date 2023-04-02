import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompetencesComponent } from './competences/competences.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'competences', component:CompetencesComponent},
  {path:'about-me', component:AboutMeComponent},
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
