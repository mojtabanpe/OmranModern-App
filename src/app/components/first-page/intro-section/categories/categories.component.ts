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
  categories: Array<ItemMenu> = [
    {
      name: 'مصالح سفت کاری و نازک کاری',
      subMenu: [
        {name: 'وسایل حمام', subMenu: [
          {name: 'لیف', subMenu: [], hasChild: false},
          {name: 'صابون', subMenu: [
            {name: 'صابون گلنار', subMenu: [], hasChild: false},
            {name: 'صابون', subMenu: [], hasChild: false},
          ], hasChild: true},
          {name: 'شامپو', subMenu: [], hasChild: false}
        ], hasChild: true},
        {name: 'مهندس طراح/شرکت مشاور', subMenu: [], hasChild: false},
        {name: 'خدمات آرمایشگاهی ساختمان', subMenu: [], hasChild: false},
        {name: 'شارکت و ساخت/اخذ مجو', subMenu: [], hasChild: false}
      ],
      hasChild: true
    },
    {
      name: 'مهندس طراح/شرکت مشاور',
      subMenu: [
        {name: 'مهندس و شرکت ها', subMenu: [], hasChild: false},
        {name: 'مهندس طراح/شرکت مشاور', subMenu: [], hasChild: false},
        {name: 'خدمات آرمایشگاهی ساختمان', subMenu: [], hasChild: false}
      ],
      hasChild: true
    },
    {
      name: 'مهندس و شرکت های مجری',
      subMenu: [
        {name: 'مهندس و شرکت ها', subMenu: [], hasChild: false},
        {name: 'مهندس طراح/شرکت مشاور', subMenu: [], hasChild: false},
        {name: 'خدمات آرمایشگاهی ساختمان', subMenu: [], hasChild: false},
        {name: 'شارکت و ساخت/اخذ مجو', subMenu: [], hasChild: false}
      ],
      hasChild: true
    },
    {
      name: 'آرمایشگاه',
      subMenu: [
        {name: 'مهندس و شرکت ها', subMenu: [], hasChild: false},
        {name: 'مهندس طراح/شرکت مشاور', subMenu: [], hasChild: false},
        {name: 'خدمات آرمایشگاهی ساختمان', subMenu: [], hasChild: false},
        {name: 'شارکت و ساخت/اخذ مجو', subMenu: [], hasChild: false}
      ],
      hasChild: true
    },
  ];
  constructor( private renderer: Renderer2, private el: ElementRef, private repository: RepositoryService) {}

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
        console.log(parents);

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


}
