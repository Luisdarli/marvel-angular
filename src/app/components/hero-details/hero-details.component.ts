import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes/heroes.service';

//Types
import { HeroesDetailsResponse, Result } from 'src/app/services/heroes/models/hero-details.response';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  public selectedHero: number;
  public currentHero: Result;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroService: HeroesService
  ) { }

  ngOnInit() {
    this.selectedHero = this.activatedRoute.snapshot.params['id'];
    this.getDetailsFromHero();
  }

  async getDetailsFromHero() {
    await this.heroService.getDetailsFromHero(this.selectedHero).subscribe((data: HeroesDetailsResponse) => {
      this.currentHero = data.data.results[0];
      console.log('chegou', this.currentHero);
    })
  }

}
