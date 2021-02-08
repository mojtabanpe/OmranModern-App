import { Component, OnInit, AfterViewInit, Output } from '@angular/core';
import { GeneralService } from '../../../../services/general.service';

@Component({
  selector: 'app-co-right-side',
  templateUrl: './co-right-side.component.html',
  styleUrls: ['./co-right-side.component.css']
})
export class CoRightSideComponent implements AfterViewInit {
  active = [true, false, false, false, false, false ];
  nextStep = true;
  interval;
  constructor(private general: GeneralService) { }

  ngAfterViewInit(): void {
    // this.interval = setInterval(() => {
    //   this.active[this.general.index] = !this.active[this.general.index];
    //   if (this.general.index === 5) {
    //     this.general.index  = 0;
    //   }
    //   else {
    //     this.general.index ++;
    //   }
    //   this.active[this.general.index] = !this.active[this.general.index];

    // }, 3000);
  }

  stopSliding(index: number): void {
    this.active[this.general.index] = false;
    this.active[index] = true;
    clearInterval(this.interval);
    this.general.index = index;
  }

  startSliding(): void {
    this.active = [false, false, false, false, false, false ];
    this.active[this.general.index] = true;
    this.interval = setInterval(() => {
      this.active[this.general.index] = !this.active[this.general.index];
      if (this.general.index === 5) {
        this.general.index  = 0;
      }
      else {
        this.general.index ++;
      }
      this.active[this.general.index] = !this.active[this.general.index];
    }, 3000);

  }
}
