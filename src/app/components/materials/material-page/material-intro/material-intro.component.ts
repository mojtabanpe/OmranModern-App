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
  @Input() minPrice = '';
  @Input() maxPrice = '';
  @Input() sellersCount = 0;


  constructor() { }

  ngOnInit(): void {
    this.motherMaterial.images = this.motherMaterial.images.toString().split(',');
  }



}
