import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Seller } from '../../../interfaces/seller';
import { RepositoryService } from '../../../services/repository.service';

@Component({
  selector: 'app-seller-page',
  templateUrl: './seller-page.component.html',
  styleUrls: ['./seller-page.component.css']
})
export class SellerPageComponent implements OnInit {
  seller: Seller;
  constructor(private activatedRoute: ActivatedRoute, private repository: RepositoryService) { }

  ngOnInit(): void {
    const slug = this.activatedRoute.snapshot.paramMap.get('slug');
    this.repository.getSellerBySlug(slug).subscribe(res => {
      this.seller = res;
    });
  }

}
