import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Login, Register } from './auth';
import jwt_decode from 'jwt-decode'
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  userData: any = new BehaviorSubject(null)

  constructor(private _httpClient: HttpClient, private _router: Router) {
    if (localStorage.getItem('userToken') != null) {
      this.saveUserData()
    }
    //  else{
    //   _router.navigate(['/login'])
    // }
  }

  saveUserData() {
    let token = localStorage.getItem('userToken')
    let decode = jwt_decode(JSON.stringify(token))
    this.userData.next(decode)

  }
  register(data: Register): Observable<any> {
    return this._httpClient.post("https://route-egypt-api.herokuapp.com/signup", data)
  }

  login(data: Login): Observable<any> {
    return this._httpClient.post("https://route-egypt-api.herokuapp.com/signin", data)
  }

  logOut() {
    localStorage.removeItem('userToken')
    this.userData.next(null)
    this._router.navigate(['/login'])
  }
}

