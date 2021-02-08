import { MotherService } from './../../../interfaces/service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../../../services/general.service';
import { RepositoryService } from '../../../services/repository.service';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent implements OnInit {
  motherService: MotherService;
  sellerServices;
  minPrice = 0;
  maxPrice = 0;
  initialized = false;
  constructor(private repository: RepositoryService, private activatedRoute: ActivatedRoute, private general: GeneralService) { }

  ngOnInit(): void {
    const slug = this.activatedRoute.snapshot.paramMap.get('slug');
    this.repository.getMotherServiceBySlug(slug).subscribe(res => {
      this.motherService = res;
      this.initialized = true;
      this.repository.getMotherServicePage(this.motherService.id).subscribe(response => {
        this.sellerServices = response;
        this.initialized = true;
        console.log(response);
        
        this.computePriceRange();
      });
    });
  }

  computePriceRange(): void {
    let min = 300000000000;
    let max = 0;
    for (const item of this.sellerServices) {
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
