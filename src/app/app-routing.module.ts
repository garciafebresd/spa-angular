import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';

const ROUTES: Routes = [
	{path: 'home', component: HomeComponent},
	{path: 'heroes', component: HeroesComponent},
	{path: 'heroe/:id', component: HeroeComponent},
	{path: 'about', component: AboutComponent},
	{path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
