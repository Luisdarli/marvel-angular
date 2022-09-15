import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { ListHeroesComponent } from './components/list-heroes/list-heroes.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { GuardRouteService } from './guards/guard-route';

const routes: Routes = [
  {
    path: '',
    component: ListHeroesComponent,
  },
  {
    path: 'details/:id',
    canActivate: [GuardRouteService],
    component: HeroDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
