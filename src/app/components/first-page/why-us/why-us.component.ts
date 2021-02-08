import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.css']
})
export class WhyUsComponent implements OnInit {
  visible = [true, true, true, true, true, true, true, true];

  constructor() { }

  ngOnInit(): void {
  }

  toggleVisibility(num: number): void {
    this.visible[num] = !this.visible[num];
  }
}
