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

  constructor() { }

  ngOnInit(): void {
    this.motherService.images = this.motherService.images.toString().split(',');
  }



}
