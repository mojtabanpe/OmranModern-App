import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  isStickyHeader = false;
  constructor() { }

  ngOnInit(): void {
    console.log('oomad to app');
    
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event): void {
    this.isStickyHeader = window.scrollY >= 50;
  }
}
