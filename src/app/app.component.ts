import { Component, HostListener, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  previousUrl: string;
  constructor(private router: Router) {
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      if (event.url === '/') {
        localStorage.removeItem('token');
      }
   });
  }
  @HostListener('document:click', ['$event'])
  documentClick(event): void {
      if (event.target.attributes.id !== 'categories-menu') {
        const openElements: NodeListOf<Element> = document.querySelectorAll('.menu-open');
        if (openElements) {
          Array.from(openElements, el => {el.classList.remove('menu-open'); });
        }
      }
  }
  ngOnInit(): void {

  }
}
