import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  selectedRelated = 0;
  relatedServices = [{
    index: 0,
    urlPicture: 'https://www.fooladiom.com/image/cache/media/product/3484/milgerd-ajdar-550x550.jpg',
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

}
