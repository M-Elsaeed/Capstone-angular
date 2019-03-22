import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router) { }

  ngOnInit() {

  }

  loginUser(userEmail) {
    let body = '{"username" : "' + userEmail + '"}';
    console.log(body);

    this.authService.login(body).subscribe(requestResponse => {
      console.log(requestResponse);
      if (requestResponse['id']) {
        // Save Into Localstorage

        this.authService.setToken(requestResponse['id']);

        //Redirect to HomePage
        setTimeout(() => {
          this.router.navigate(['/Home']);
        }, 3000)
      } else {
        // Error
        console.log(requestResponse['message']);
      }
    });
  }





}
