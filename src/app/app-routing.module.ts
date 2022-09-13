import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { ListHeroesComponent } from './components/list-heroes/list-heroes.component';

const routes: Routes = [
  {
    path: '',
    component: ListHeroesComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
