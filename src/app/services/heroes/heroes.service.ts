import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//Types
import { BaseHeroesResponse } from './models/base-heroes.response';
import { HeroesRequest } from './models/base-heroes.request';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor(private httpClient: HttpClient) { }

  GetAllHeroes(request?: HeroesRequest): Observable<BaseHeroesResponse> {
    let params = '&'

    console.log('REQUEST', request);

    if (request?.nameStartsWith) {
      params += `nameStartsWith=${request.nameStartsWith}&`
    }

    if (request?.offset) {
      params += `offset=${request.offset}&`
    }

    return this.httpClient.get<BaseHeroesResponse>(`${environment.uri}/characters?ts=${environment.ts}&apikey=${environment.apikey}&hash=${environment.hash}${params}`);
  }
}
