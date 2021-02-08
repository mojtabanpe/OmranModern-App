import { RepositoryService } from './../../../../services/repository.service';
import { MotherMaterial } from './../../../../interfaces/material';
import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-material-intro',
  templateUrl: './material-intro.component.html',
  styleUrls: ['./material-intro.component.css']
})
export class MaterialIntroComponent implements OnInit {
  @Input() motherMaterial: MotherMaterial;
  @Input() minPrice = 0;
  @Input() maxPrice = 0;
  @Input() sellersCount = 0;
  
  relatedCategories = [];

  constructor(private repository: RepositoryService) { }

  ngOnInit(): void {
    this.repository.getRelatedCategories(this.motherMaterial.category.item_id).subscribe(res => {
      this.relatedCategories = res;
    });
  }



}
