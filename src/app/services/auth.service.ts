import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private http: HttpClient
  ) {
  }

  confirmEmail(email: any) {
    const params = new HttpParams().set('Email', email);
    return this.http.post(`/ConfirmEmail/`, params);
  }

  register(user: any) {

    return this.http.post(`/register/`, user);
  }
}
