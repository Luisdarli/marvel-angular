import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//Types
import { HeroesRequest } from './models/base-heroes.request';
import { BaseHeroesResponse } from './models/base-heroes.response';
import { HeroesDetailsResponse } from './models/hero-details.response';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  public encodeURI = `ts=${environment.ts}&apikey=${environment.apikey}&hash=${environment.hash}&limit=5`

  constructor(private httpClient: HttpClient) { }

  GetAllHeroes(request?: HeroesRequest): Observable<BaseHeroesResponse> {
    let params = '&'

    if (request?.nameStartsWith) {
      params += `nameStartsWith=${request.nameStartsWith}&`
    }

    if (request?.offset) {
      params += `offset=${request.offset}&`
    }

    return this.httpClient.get<BaseHeroesResponse>(`${environment.uri}/characters?${this.encodeURI}${params}`);
  }

  getDetailsFromHero(id: number, offset?: number): Observable<HeroesDetailsResponse> {
    return this.httpClient.get<HeroesDetailsResponse>(`${environment.uri}/characters/${id}?${this.encodeURI}`)
  }
}
