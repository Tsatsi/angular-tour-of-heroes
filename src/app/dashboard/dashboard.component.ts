import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService } from '../services/hero/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] | undefined
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  this.getHeroes();
  }


  private getHeroes() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
