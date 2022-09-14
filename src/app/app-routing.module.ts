import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { ListHeroesComponent } from './components/list-heroes/list-heroes.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';

const routes: Routes = [
  {
    path: '',
    component: ListHeroesComponent,
  },
  {
    path: 'details/:id',
    component: HeroDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
