import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-co-workers',
  templateUrl: './co-workers.component.html',
  styleUrls: ['./co-workers.component.css']
})
export class CoWorkersComponent implements OnInit {
  screenWidth;
  constructor() {
  }

  ngOnInit(): void {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?): void {
        this.screenWidth = window.innerWidth;
        if (this.screenWidth < 1300 && this.screenWidth > 1100) {
          document.getElementById('topCoWorker').setAttribute('points', '1920,0 1320,260 0,0');
        }
        else if (this.screenWidth > 1300) {
          document.getElementById('topCoWorker').setAttribute('points', '1920,0 1400,225 0,0');

        }
        else if (this.screenWidth < 1100 && this.screenWidth > 900) {
          document.getElementById('topCoWorker').setAttribute('points', '1920,0 1240,290 0,0');
        }
  }
}
