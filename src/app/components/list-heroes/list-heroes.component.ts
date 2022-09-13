import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes/heroes.service';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.css']
})
export class ListHeroesComponent implements OnInit {

  constructor(
    private heroService: HeroesService
  ) { }

  ngOnInit() {
    this.getAllHeroes();
  }

  async getAllHeroes() {
    await this.heroService.GetAllHeroes().subscribe((data: any) => {
      console.log('resp', data);

    })
  }

}
