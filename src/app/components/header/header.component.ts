import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isAuthenticated: boolean = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.isAuthenticated = this.checkIfisAuthenticated();
  }

  authentication() {
    localStorage.setItem('userToken', environment.apikey);
    this.router.navigate([`${this.router.url}`]).then(() => {
      window.location.reload();
    })
  }

  checkIfisAuthenticated() {
    if (localStorage.getItem('userToken') === environment.apikey) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    })
  }
}
