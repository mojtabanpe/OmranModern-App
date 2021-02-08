import { Component, ElementRef, Host, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-marketer-products-services',
  templateUrl: './marketer-products-services.component.html',
  styleUrls: ['./marketer-products-services.component.css']
})
export class MarketerProductsServicesComponent implements OnInit {
  searchShadow = false;
  gotShadow = false;
  removeShadow = true;
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
  constructor() {

   }


  ngOnInit(): void {
  }


}
