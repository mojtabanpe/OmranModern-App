import { Seller } from './../../../../interfaces/seller';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-products',
  templateUrl: './seller-products.component.html',
  styleUrls: ['./seller-products.component.css']
})
export class SellerProductsComponent implements OnInit {
  searchShadow = false;
  gotShadow = false;
  removeShadow = true;
  materials;
  services;
  @Input() seller;
  marketerProducts = [{
    name: 'میلگرد آجدار',
    picture: 'https://e92.ir/wp-content/uploads/2018/09/tirche-block.jpg',
    unit: '10 تایی',
    price: '۴۶۵۰۰'
  }, {
    name: 'میلگرد ',
    picture: 'https://e92.ir/wp-content/uploads/2018/09/tirche-block.jpg',
    unit: '10 تایی',
    price: '۴۶۵۰۰'
  }, {
    name: 'سنگ پا',
    picture: 'https://e92.ir/wp-content/uploads/2018/09/tirche-block.jpg',
    unit: '10 تایی',
    price: '۴۶۵۰۰'
  }, {
    name: 'آجر',
    picture: 'https://e92.ir/wp-content/uploads/2018/09/tirche-block.jpg',
    unit: '10 تایی',
    price: '۴۶۵۰۰'
  }, {
    name: 'بتن',
    picture: 'https://e92.ir/wp-content/uploads/2018/09/tirche-block.jpg',
    unit: '10 تایی',
    price: '۴۶۵۰۰'
  }, {
    name: 'پفک',
    picture: 'https://e92.ir/wp-content/uploads/2018/09/tirche-block.jpg',
    unit: '10 تایی',
    price: '۴۶۵۰۰'
  }, {
    name: 'بیسکوییت ',
    picture: 'https://e92.ir/wp-content/uploads/2018/09/tirche-block.jpg',
    unit: '10 تایی',
    price: '۴۶۵۰۰'
  }];
  marketerServices = [{
    title: 'میلگرد اسدی',
    picture: 'https://www.asroon.ir/uploads/products/milgerd/%D8%A2%D8%AC%D8%AF%D8%A7%D8%B1/%DA%AF%D8%A7%D9%84%D8%B1%DB%8C%20%D8%A8%D8%B1%D8%B1%D8%B3%DB%8C%20%D8%A7%D8%AC%D9%85%D8%A7%D9%84%DB%8C/B1.jpg',
    unit: 'دونه',
    price: '۱۶۰۰۰',
    hover: false
  }, {
    title: 'میلگرد اسدی',
    picture: 'https://www.asroon.ir/uploads/products/milgerd/%D8%A2%D8%AC%D8%AF%D8%A7%D8%B1/%DA%AF%D8%A7%D9%84%D8%B1%DB%8C%20%D8%A8%D8%B1%D8%B1%D8%B3%DB%8C%20%D8%A7%D8%AC%D9%85%D8%A7%D9%84%DB%8C/B1.jpg',
    unit: 'دونه',
    price: '۱۶۰۰۰',
    hover: false
  }, {
    title: 'میلگرد اسدی',
    picture: 'https://www.asroon.ir/uploads/products/milgerd/%D8%A2%D8%AC%D8%AF%D8%A7%D8%B1/%DA%AF%D8%A7%D9%84%D8%B1%DB%8C%20%D8%A8%D8%B1%D8%B1%D8%B3%DB%8C%20%D8%A7%D8%AC%D9%85%D8%A7%D9%84%DB%8C/B1.jpg',
    unit: 'دونه',
    price: '۱۶۰۰۰',
    hover: false
  }, {
    title: 'میلگرد اسدی',
    picture: 'https://www.asroon.ir/uploads/products/milgerd/%D8%A2%D8%AC%D8%AF%D8%A7%D8%B1/%DA%AF%D8%A7%D9%84%D8%B1%DB%8C%20%D8%A8%D8%B1%D8%B1%D8%B3%DB%8C%20%D8%A7%D8%AC%D9%85%D8%A7%D9%84%DB%8C/B1.jpg',
    unit: 'دونه',
    price: '۱۶۰۰۰',
    hover: false
  }, {
    title: 'میلگرد اسدی',
    picture: 'https://www.asroon.ir/uploads/products/milgerd/%D8%A2%D8%AC%D8%AF%D8%A7%D8%B1/%DA%AF%D8%A7%D9%84%D8%B1%DB%8C%20%D8%A8%D8%B1%D8%B1%D8%B3%DB%8C%20%D8%A7%D8%AC%D9%85%D8%A7%D9%84%DB%8C/B1.jpg',
    unit: 'دونه',
    price: '۱۶۰۰۰',
    hover: false
  }, {
    title: 'میلگرد اسدی',
    picture: 'https://www.asroon.ir/uploads/products/milgerd/%D8%A2%D8%AC%D8%AF%D8%A7%D8%B1/%DA%AF%D8%A7%D9%84%D8%B1%DB%8C%20%D8%A8%D8%B1%D8%B1%D8%B3%DB%8C%20%D8%A7%D8%AC%D9%85%D8%A7%D9%84%DB%8C/B1.jpg',
    unit: 'دونه',
    price: '۱۶۰۰۰',
    hover: false
  }];

  constructor() {}

  ngOnInit(): void {
    this.services = this.seller.services;
    this.materials = this.seller.materials;
    console.log(this.materials);
    console.log(this.services);
    for (const service of this.services) {
      service.hover = false;
    }
  }


}
