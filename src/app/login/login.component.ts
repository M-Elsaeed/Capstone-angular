import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpModule: HttpClient) { }

  ngOnInit() {

  }

  logDis(form) {
    console.log(form);
    console.log(form.value.email);
    console.log(form.value.password);
  }

}
