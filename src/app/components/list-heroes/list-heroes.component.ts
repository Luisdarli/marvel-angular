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

  constructor(
    private heroService: HeroesService
  ) { }

  ngOnInit() {
    this.getAllHeroes();
  }

  async getAllHeroes() {
    await this.heroService.GetAllHeroes().subscribe((data: BaseHeroesResponse) => {
      this.heroes = data.data.results;
      console.log(this.heroes)
    })
  }

  async filterHeroes(params) {
    await this.heroService.GetAllHeroes(params).subscribe((data: BaseHeroesResponse) => {
      this.heroes = data.data.results;
      console.log('NOVOS', this.heroes)
    })
  }

  heroSearch(evt) {
    if (evt.length === 0) {
      this.getAllHeroes();
    }

    if (evt.length > 2) {
      let params = new HeroesRequest();
      params.nameStartsWith = evt;
      this.filterHeroes(params)
    }
  }

}
