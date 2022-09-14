import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes/heroes.service';
import { HeroesRequest } from 'src/app/services/heroes/models/base-heroes.request';
import { BaseHeroesResponse, Result } from 'src/app/services/heroes/models/base-heroes.response';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.css']
})
export class ListHeroesComponent implements OnInit {
  public heroes: Result[];
  public filter = <HeroesRequest>{
    offset: 0
  };

  constructor(
    private heroService: HeroesService
  ) { }

  ngOnInit() {
    this.getAllHeroes();
  }

  async getAllHeroes() {
    await this.heroService.GetAllHeroes().subscribe((data: BaseHeroesResponse) => {
      this.heroes = data.data.results;
    })
  }

  async filterHeroes(params) {
    await this.heroService.GetAllHeroes(params).subscribe((data: BaseHeroesResponse) => {
      this.heroes = data.data.results;
    })
  }

  heroSearch(evt) {
    this.filter.offset = 0;

    if (evt.length === 0) {
      this.filter = {};
      this.getAllHeroes();
    }

    if (evt.length > 2) {
      this.filter.nameStartsWith = evt;
      this.filterHeroes(this.filter)
    }
  }

  async loadMore() {
    this.filter.offset += 5;
    this.filterHeroes(this.filter);
  }

}
