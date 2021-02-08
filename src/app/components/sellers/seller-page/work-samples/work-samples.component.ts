import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-samples',
  templateUrl: './work-samples.component.html',
  styleUrls: ['./work-samples.component.css']
})
export class WorkSamplesComponent implements OnInit {
  @Input() workSamples;
  constructor() { }

  ngOnInit(): void {
  }

}
