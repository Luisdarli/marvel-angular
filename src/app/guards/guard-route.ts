import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class GuardRouteService implements CanActivate {
  constructor(private router: Router) { }

  canActivate() {
    if (localStorage.getItem('userToken') == environment.apikey) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
