import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../services/general.service';

@Component({
  selector: 'app-co-left-side',
  templateUrl: './co-left-side.component.html',
  styleUrls: ['./co-left-side.component.css']
})
export class CoLeftSideComponent implements OnInit {

  constructor(public general: GeneralService) { }

  ngOnInit(): void {
  }

}
