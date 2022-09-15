import { Component, OnInit } from '@angular/core';


//types
import { HeroesService } from 'src/app/services/heroes/heroes.service';
import { BaseHeroesResponse } from 'src/app/services/heroes/models/base-heroes.response';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public dataProvided: string;
  public copyright: string;

  constructor(
    private heroService: HeroesService
  ) { }

  ngOnInit() {
    this.getDataProvided();
  }

  async getDataProvided() {
    await this.heroService.GetAllHeroes().subscribe((data: BaseHeroesResponse) => {
      this.dataProvided = data.attributionHTML;
      this.copyright = data.copyright
    })
  }

}
