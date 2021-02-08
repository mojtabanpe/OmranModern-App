import { environment } from './../../../../environments/environment';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: {
    username: '',
    password: '',
    rememberMe: false
  };
  jwtHelper = new JwtHelperService();
  invalidLogin: boolean;
  loginForm: FormGroup;
  userInitialized = false;
  decodeToken: any;

  constructor(private auth: AuthService, private fb: FormBuilder, private router: Router, private alert: ToastrService,
              public cookieService: CookieService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      rememberMe: [false]
    });
  }
  login(): void {
    this.user = this.loginForm.value;
    this.auth.login(this.user).subscribe((response: any) => {
      this.updateData(response.token);
      this.cookieService.set('token', response.token);
      this.auth.getRole(this.decodeToken.username).subscribe(res => {
        this.auth.role = res;
        if (res === 'admin') {
          window.location.href = environment.adminUrl;
        } else if (res === 'seller') {
          window.location.href = environment.adminUrl + '/seller';
        } else if (res === 'user') {
          this.router.navigate(['/']);
        } else {
          this.alert.error('نقش کاربر تعریف نشده است!');
        }
      });
    },
    err => {
      this.alert.error('کاربری با این مشخصات وجود ندارد!');
    }
  );;
  }

  private updateData(token): void {
    localStorage.setItem('token', token);

    // decode the token to read the username and expiration timestamp
    this.decodeToken = this.jwtHelper.decodeToken(token);
    this.auth.tokenExpires = new Date(this.decodeToken.exp * 1000);
    this.auth.username = this.decodeToken.username;
    

  }

}
