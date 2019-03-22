import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
    //'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) { }


  login(loginData) {
    
    return this.http.post('http://localhost:3000/comments',loginData,httpOptions);
    

  }
  setToken(token) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');

  }

  removeToken() {
    localStorage.removeItem('token');
  }


  isLoggedIn() {
    //return false;
    return localStorage.getItem('token') ? true : false;
  }
}
