import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseHeroesResponse } from './models/base-heroes.response';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor(private httpClient: HttpClient) { }

  GetAllHeroes(): Observable<BaseHeroesResponse> {
    return this.httpClient.get<BaseHeroesResponse>(`${environment.uri}/characters?ts=${environment.ts}&apikey=${environment.apikey}&hash=${environment.hash}`);
  }
}
