import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-intro',
  templateUrl: './product-intro.component.html',
  styleUrls: ['./product-intro.component.css']
})
export class ProductIntroComponent implements OnInit {
  selectedRelated = 0;
  relatedServices = [{
    index: 0,
    urlPicture: 'https://elmobadan.ir/wp-content/uploads/2020/09/477809_943.jpg',
    company: 'برداران هاشمی',
    priceRange: 'قیمت از ۳۲۹۰ تا ۶۹۹۰ تومان'
  }, {
    index: 1,
    urlPicture: 'https://www.2invest.ir/images/Fatemeh/karafarini/98/Rebar2.jpg',
    company: 'خواهران رضایی',
    priceRange: 'قیمت از ۵۶۰۰ تا ۸۹۰۰ تومان'
  }];
  constructor() { }

  ngOnInit(): void {
  }

  changeSelectedRelated(n: number): void {
    if ( n === 1) {
      this.selectedRelated ++;
    }
    else {
      this.selectedRelated --;
      }
    }
}
