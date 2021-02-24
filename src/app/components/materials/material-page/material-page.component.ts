import { PersianNumberPipe } from './../../../pipes/persian-number.pipe';
import { GeneralService } from './../../../services/general.service';
import { MotherMaterial } from './../../../interfaces/material';
import { RepositoryService } from './../../../services/repository.service';
import { Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgPersianDatepickerComponent } from 'ng-persian-datepicker';

@Component({
  selector: 'app-material-page',
  templateUrl: './material-page.component.html',
  styleUrls: ['./material-page.component.css'],
})
export class MaterialPageComponent implements OnInit {
  motherMaterial: MotherMaterial;
  sellerMaterials = [];
  minPrice = '';
  maxPrice = '';
  initialized = false;

  constructor(private repository: RepositoryService, private activatedRoute: ActivatedRoute, private general: GeneralService,
              private persianNumber: PersianNumberPipe) { }

  ngOnInit(): void {

    const slug = this.activatedRoute.snapshot.paramMap.get('slug');
    this.repository.getMotherMaterialBySlug(slug).subscribe(res => {
      this.motherMaterial = res[0];
      this.initialize();
      this.initialized = true;
    });
  }


  initialize(): void {
    let min = 300000000000;
    let max = 0;
    for (const material of this.motherMaterial.materials_list) {
      for (const sellerMaterial of material.sellers_list) {
        let temp = sellerMaterial.prices[0].amount;
        this.sellerMaterials.push(sellerMaterial);
        if (temp !== 'توافقی') {
          temp = +temp;
          if (temp < min) {
            min = temp;
          } else if (temp > max) {
            max = temp;
          }
        }
      }
    }
    if (min === 300000000000) {
      this.minPrice = 'نامشخص';
    } else  {
      this.minPrice = min.toString();
    }
    if (max === 0) {
      this.maxPrice  = 'نامشخص';
    } else  {
      this.maxPrice = max.toString();
    }

  }



}
