import { AuthService } from './../../../services/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isSticky = false;
  isLoggedIn = false;
  username = '';

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.auth.isLoggedIn();
    if (this.isLoggedIn) {
      this.username = this.auth.username;
    }
  }

}
