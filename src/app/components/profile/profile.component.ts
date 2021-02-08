import { Router } from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  navIsOpen = true;
  panelOpenState = false;
  constructor(private router: Router) { }


  ngOnInit(): void {

  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  toggleNav(): void {
    this.navIsOpen = !this.navIsOpen;
    console.log(this.navIsOpen);
  }

}
