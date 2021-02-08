import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-sell',
  templateUrl: './product-sell.component.html',
  styleUrls: ['./product-sell.component.css']
})
export class ProductSellComponent implements OnInit {
  selectedWay: string;
  waysOfSell: string[] = ['نقد', 'چک بلند مدت', 'چک کوتاه مدت', 'تهارتر'];
  constructor() { }

  ngOnInit(): void {
  }


}
