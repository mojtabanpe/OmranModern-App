import { Seller } from './../../../../interfaces/seller';
import { RepositoryService } from './../../../../services/repository.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-intro',
  templateUrl: './seller-intro.component.html',
  styleUrls: ['./seller-intro.component.css']
})
export class SellerIntroComponent implements OnInit {
  satisfaction;
  @Input() seller: Seller;
  constructor() { }

  ngOnInit(): void {
    this.satisfaction = this.seller.stars.average / 5 * 100;
  }

  public generateRowIndexes(count: number): Array<number> {
    const indexes = [];
    count = +count.toFixed();
    for (let i = 0; i < count; i++) {
      indexes.push(i);
    }
    return indexes;
  }
}
