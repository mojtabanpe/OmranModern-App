import { MotherService } from './../../../../interfaces/service';
import { Component, Input, OnInit } from '@angular/core';
import { RepositoryService } from '../../../../services/repository.service';

@Component({
  selector: 'app-service-intro',
  templateUrl: './service-intro.component.html',
  styleUrls: ['./service-intro.component.css']
})
export class ServiceIntroComponent implements OnInit {
  @Input() motherService: MotherService;
  @Input() minPrice = 0;
  @Input() maxPrice = 0;
  @Input() sellersCount = 0;
  relatedCategories = [];

  constructor(private repository: RepositoryService) { }

  ngOnInit(): void {
    this.repository.getRelatedCategories(this.motherService.category.item_id).subscribe(res => {
      this.relatedCategories = res;
    });
  }



}
