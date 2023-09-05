import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../core/helpers/routes';
import { ApiService } from '../core/service/data/api.service';


@Injectable({
  providedIn: 'root',
})
export class WebstorgeService {

  constructor(private router: Router, private api: ApiService) { }

  public login(username: any, pass: any): void {
    this.api.auth(username, pass).subscribe((data: any) => {
      localStorage.setItem('authenticated', 'true');
      this.router.navigate([routes.dashboard]);
    }, error => {
      localStorage.setItem('authenticated', 'false');
    })

  }
  public submit(): void {
    localStorage.setItem('authenticated', 'true');
    this.router.navigate([routes.dashboard]);
  }
  public Logout(): void {
    localStorage.removeItem('authorized');
    localStorage.removeItem('loginTime');
    this.router.navigate(['/auth/signin']);
  }
}
