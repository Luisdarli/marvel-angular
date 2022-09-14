import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { ListHeroesComponent } from './components/list-heroes/list-heroes.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    ListHeroesComponent,
    HeroDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
