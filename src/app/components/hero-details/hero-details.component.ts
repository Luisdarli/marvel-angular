import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes/heroes.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  public selectedHero: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private heroService: HeroesService
  ) { }

  ngOnInit() {
    this.selectedHero = this.activatedRoute.snapshot.params['id'];
    this.getDetailsFromHero();
  }

  async getDetailsFromHero() {
    await this.heroService.getDetailsFromHero(this.selectedHero).subscribe((data: any) => {
      console.log('chegou', data);
    })
  }

}
