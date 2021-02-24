import { AuthService } from './../../../services/auth.service';
import { Component, Input, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isSticky = false;
  isLoggedIn = false;
  username = '';
  @ViewChild('sidebar') sidebar: ElementRef;
  constructor(private auth: AuthService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.isLoggedIn = this.auth.isLoggedIn();
    if (this.isLoggedIn) {
      this.username = this.auth.username;
    }
  }

  openSidebar(): void {
    this.renderer.addClass(this.sidebar.nativeElement, 'show');
  }
  closeSidebar(): void {
    this.renderer.removeClass(this.sidebar.nativeElement, 'show');
  }

}
