import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detailes',
  templateUrl: './product-detailes.component.html',
  styleUrls: ['./product-detailes.component.css']
})
export class ProductDetailesComponent implements OnInit {
  comments = [
    {
      text: 'در یک کلمه داغون',
      date: {
        year: '1399',
        month: 'دی',
        day: '2'
      },
      name: 'مجتبی'
    },
    {
      text: 'اق اق اق',
      date: {
        year: '1399',
        month: 'بهمن',
        day: '3'
      },
      name: 'علی'
    },
    {
      text: 'خوب بود جای کار داره',
      date: {
        year: '1399',
        month: 'آذر',
        day: '5'
      },
      name: 'آرزو'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  public generateRowIndexes(count: number): Array<number> {
    const indexes = [];
    for (let i = 0; i < count; i++) {
      indexes.push(i);
    }
    return indexes;
  }

  openIntroductionProduct(): void {

  }

  showMoreComments(): void {

  }
}
