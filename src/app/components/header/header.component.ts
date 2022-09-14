import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes/heroes.service';

//types
import { BaseHeroesResponse } from 'src/app/services/heroes/models/base-heroes.response';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public dataProvided: string;

  constructor(
    private heroService: HeroesService
  ) { }

  ngOnInit() {
    this.getAllHeroes();
  }

  async getAllHeroes() {
    await this.heroService.GetAllHeroes().subscribe((data: BaseHeroesResponse) => {
      this.dataProvided = data.attributionText;
    })
  }

}
