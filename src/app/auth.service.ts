import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from './../environments/environment';

export interface IJwtToken {
  token: string;
}

export interface JwtPayload {
  id: number;
  email: string;
  password?: string;
  fullName?: string;
  iat?: number;
  exp?: number;
}

@Injectable()
export class AuthService {
  constructor(protected http: HttpClient) {}

  public get isLogued(): boolean {
    return !!this.getToken();
  }

  getToken(): string | null {
    return localStorage.getItem(environment.Auth.tokenName);
  }

  getPayload(): JwtPayload | null {
    if (!this.isLogued) {
      return null;
    }

    const token = this.getToken() as string;
    const jwtParts = token.split('.');
    const payload = decodeURIComponent(
      atob(jwtParts[1]).split('').map(
        c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      ).join('')
    );

    return JSON.parse(payload);
  }

  login(payload: any): Observable<IJwtToken> {
    return new Observable(subscribe => {
      this.http.post(
        environment.Auth.loginUrl,
        payload,
      ).subscribe(
        (token: any) => {
          localStorage.setItem(environment.Auth.tokenName, token.token)
          subscribe.next(token as IJwtToken);
        },
        error => subscribe.error(error)
      );
    });
  }

  logout() {
    localStorage.removeItem(environment.Auth.tokenName);
  }
}
