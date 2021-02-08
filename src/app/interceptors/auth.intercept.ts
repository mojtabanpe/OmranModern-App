import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }
  intercept(req, next): any {
    const token = localStorage.getItem('token');
    const authRequest = req.clone({
        headers: req.headers.set('Authorization',  `JWT ${token}` )
    });
    return next.handle(authRequest);
  }
}
