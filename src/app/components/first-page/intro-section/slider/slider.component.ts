import { Component} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  slides = [
    {path: '../../../../../assets/img/slides/1.jpg'},
    {path: '../../../../../assets/img/slides/2.jpg'},
    {path: '../../../../../assets/img/slides/3.jpg'},
    {path: '../../../../../assets/img/slides/4.jpg'},
    {path: '../../../../../assets/img/slides/5.jpg'},
];
  constructor() { }
}
