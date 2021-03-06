import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }


  canActivate() {
    if (this.authService.isLoggedIn()) {
      console.log(this.authService.isLoggedIn());
      return true;
    } else {
      this.router.navigate(['/Login']);
      return false;
    }
  }

}



@Injectable()
export class LoginPageAuthGuard implements CanActivate {

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }


  canActivate() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/Home']);
      return false;
    } else {
      return true;
    }
  }

}