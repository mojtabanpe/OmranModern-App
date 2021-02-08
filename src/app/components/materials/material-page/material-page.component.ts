import { GeneralService } from './../../../services/general.service';
import { MotherMaterial } from './../../../interfaces/material';
import { RepositoryService } from './../../../services/repository.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-material-page',
  templateUrl: './material-page.component.html',
  styleUrls: ['./material-page.component.css']
})
export class MaterialPageComponent implements OnInit {
  motherMaterial: MotherMaterial;
  sellerMaterials;
  minPrice = 0;
  maxPrice = 0;
  initialized = false;
  constructor(private repository: RepositoryService, private activatedRoute: ActivatedRoute, private general: GeneralService) { }

  ngOnInit(): void {
    const slug = this.activatedRoute.snapshot.paramMap.get('slug');
    this.repository.getMotherMaterialBySlug(slug).subscribe(res => {
      this.motherMaterial = res;
      this.initialized = true;
      this.repository.getMotherMaterialPage(this.motherMaterial.id).subscribe(response => {
        this.sellerMaterials = response;
        console.log(response);
        this.computePriceRange();
      });
    });
  }

  computePriceRange(): void {
    let min = 300000000000;
    let max = 0;
    for (const item of this.sellerMaterials) {
      let temp = item.prices[0].amount;
      if (temp !== 'توافقی') {
        temp = +temp;
        if (temp < min) {
          min = temp;
        } else if (temp > min) {
          max = temp;
        }
      }
    }
    if (min === 300000000000) {
      min = 0;
    }
    this.minPrice = min;
    this.maxPrice = max;
  }



}
