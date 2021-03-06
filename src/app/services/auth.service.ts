import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.serverUrl;

  private httpOptions: any;

  // the actual JWT token
  public token: string;

  // the token expiration date
  public tokenExpires: Date;

  // the username of the logged in user
  public username: string;

  public role: 'anonymous';
  // error messages received from the login attempt
  public errors: any = [];

  decodeToken: any;

  jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }

  login(credentials): any {
    return this.http.post(this.baseUrl + 'api-token-auth/', credentials, this.httpOptions);
  }


  // Refreshes the JWT token, to extend the time the user is logged in
  public refreshToken(): void {
    this.http.post('/api-token-refresh/', JSON.stringify({token: this.token}), this.httpOptions).subscribe(
      (response: any) => {
        this.updateData(response.token);
      },
      err => {
        this.errors = err.error;
      }
    );
  }

  public logout(): void {
    this.token = null;
    this.tokenExpires = null;
    this.username = null;
    localStorage.removeItem('token');
  }

  private updateData(token): void {
    localStorage.setItem('token', token);
    this.token = token;
    this.errors = [];

    // decode the token to read the username and expiration timestamp
    this.decodeToken = this.jwtHelper.decodeToken(token);

    this.tokenExpires = new Date(this.decodeToken.exp * 1000);
    this.username = this.decodeToken.username;
  }

  isLoggedIn(): any {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  getRole(username: string): any {
    return this.http.get(this.baseUrl + 'helpers/account/getRole/' + username)
  }

  getCode(phoneOrEmail: string): any {
    const data = {
      phoneOrEmail
    };
    return this.http.post(this.baseUrl + 'helpers/ghasedak/get_code/', data)
  }
  verifyCode( code: string, phoneOrEmail: string): any {
    const data = {
      phoneOrEmail,
      code
    };
    return this.http.post(this.baseUrl + 'helpers/ghasedak/verify_code/', data)
  }

  register(credentials): any {
    return this.http.post(this.baseUrl + 'helpers/account/register/', credentials)
  }

}

