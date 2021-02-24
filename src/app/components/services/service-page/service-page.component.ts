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
  sellerServices = [];
  minPrice = '';
  maxPrice = '';
  initialized = false;
  constructor(private repository: RepositoryService, private activatedRoute: ActivatedRoute, private general: GeneralService) { }

  ngOnInit(): void {
    const slug = this.activatedRoute.snapshot.paramMap.get('slug');
    this.repository.getMotherServiceBySlug(slug).subscribe(res => {
      this.motherService = res[0];
      this.initialize();
      this.initialized = true;
    });
  }


  initialize(): void {
    let min = 300000000000;
    let max = 0;
    for (const service of this.motherService.services_list) {
      for (const sellerService of service.sellers_list) {
        let temp = sellerService.prices[0].amount;
        this.sellerServices.push(sellerService);
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
