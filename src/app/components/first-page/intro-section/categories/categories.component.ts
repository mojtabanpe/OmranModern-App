import { Router } from '@angular/router';
import { RepositoryService } from './../../../../services/repository.service';
import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

export interface ItemMenu {
  name: string;
  subMenu: Array<ItemMenu>;
  hasChild: boolean;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  prevIndex = '';
  categories = [];
  constructor( private renderer: Renderer2, private el: ElementRef, private repository: RepositoryService, private router: Router) {}

  ngOnInit(): void {
    this.repository.getMenu().subscribe(res => {
      this.categories = res;
    });
  }

  openMenu(index: string, index1: string, index2: string): void {
    let finalInndex: string = index.toString();
    try {
      finalInndex = (finalInndex.toString() +  '' + index1.toString()).toString();
      try {
      finalInndex = (finalInndex.toString() +  '' + index2.toString()).toString();
      } catch (error) {
      }
    } catch (error) {
    }
    if (!this.prevIndex.startsWith(finalInndex)) {
      const element = document.getElementById('submenu' + finalInndex);
      if (!finalInndex.startsWith(this.prevIndex)) {
        const parents = [];
        if ( finalInndex.length === 2) {
          parents.push('submenu' + finalInndex[0]);
        } else if (finalInndex.length === 3){
          parents.push('submenu' + finalInndex[0]);
          parents.push('submenu' + finalInndex[0] + finalInndex[1]);
        }
        const openElements: NodeListOf<Element> = document.querySelectorAll('.menu-open');
        if (openElements) {
          Array.from(openElements, el => {
            if (parents.indexOf(el.id) === -1) {
              el.classList.remove('menu-open');
            }

          });
        }
      }
      this.prevIndex = finalInndex;

      element.classList.add('menu-open');
    }
  }

  navigate(name: string): void {
    name = name.replace(' ', '-');
    this.router.navigate(['/category/' + name]);
  }
}
