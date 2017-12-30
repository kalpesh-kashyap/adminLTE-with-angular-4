import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {

  authenticated: BehaviorSubject<boolean>;

  constructor() {
    this.authenticated = new BehaviorSubject<boolean>(this.isAuthenticated());
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  _authenticate(token: string) {
    localStorage.setItem('token', token);
    this.authenticated.next(true);
  }

  signOut(): Promise<boolean> {
    localStorage.removeItem('token');
     this.authenticated.next(false);
    return Promise.resolve(true)
  }

  signIn(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      return this._authenticate('secret')
    })
  }
}
