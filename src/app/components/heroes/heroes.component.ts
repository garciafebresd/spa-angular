import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroeStructure } from '../../interface/heroe-structure.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:HeroeStructure[] = [];

  constructor(private _heroesService:HeroesService, private _router:Router) {
  }

  ngOnInit() {
  	this.heroes = this._heroesService.getHeroes();
  	console.log(this.heroes);
  }

  verHeroe(idx:number){
  	this._router.navigate(['/heroe',idx]);
  }
}
