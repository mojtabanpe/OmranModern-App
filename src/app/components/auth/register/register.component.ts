import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  step = 1;
  phoneOrEmail = '';
  code = '';
  password = '';
  constructor(private auth: AuthService, private alert: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  getCode(): void{
    this.step = 2;
    this.auth.getCode(this.phoneOrEmail).subscribe(res => {
      this.alert.success(' پیامکی حاوی کد اعتبارسنجی برای شما ارسال شد ');
    });
  }
  verifyCode(): void {
    if (this.code !== '') {
      this.auth.verifyCode(this.code, this.phoneOrEmail).subscribe(res => {
        this.step = 3;  
        this.alert.success('لطفا رمز عبور خود را انتخاب کنید');
      }, err => {
        this.alert.error('کد وارد شده صحیح نمیباشد!')
      });
    }  
  }
  submit(): void {
    const credentials = {
      username: this.phoneOrEmail,
      password: this.password
    }
    this.auth.register(credentials).subscribe(res => {
      this.router.navigate(['/auth/login']);
    }, err => {
      this.alert.error('کاربر با این مشخصات وجود دارد!');
    });
  }
}
