import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface ActivityNode {
  name: string;
  children?: ActivityNode[];
}
const TREE_DATA: ActivityNode[] = [
  {
    name: 'آجر',
    children: [
      {name: 'قرمز'},
      {name: 'زرد'},
      {name: 'چم چی'},
    ]
  }, {
    name: 'میلگرد',
    children: [
      {
        name: 'بنفش',
        children: [
          {name: '۱۲میل'},
          {name: '۱۰ میل'},
        ]
      }, {
        name: 'صورتی',
        children: [
          {name: '۴۳میل'},
          {name: '۵۵میل'},
        ]
      },
    ]
  },
];

@Component({
  selector: 'app-activity-fields',
  templateUrl: './activity-fields.component.html',
  styleUrls: ['./activity-fields.component.css']
})
export class ActivityFieldsComponent implements OnInit {
  visibleTree = 0;
  treeControl = new NestedTreeControl<ActivityNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<ActivityNode>();
  mainActivityButtons = ['مشارکت در ساخت', 'آزمایشگاه', 'خدمات مهندسی', 'خدمات پیمانکاری(تاسیسات٬ مکانیک٬ برق)', 'خدمات پیمانکاری(نازک کاری)', 'خدمات پیمانکاری(سفت کاری)'];
  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit(): void {
  }

  hasChild = (_: number, node: ActivityNode) => !!node.children && node.children.length > 0;

  showSubActivities(index: number, event: MouseEvent): void {
    if (document.getElementsByClassName('active').length !== 0){
     document.getElementsByClassName('active').item(0).classList.remove('active');
    }
    (event.target as HTMLElement).classList.add('active');

    switch (index) {
      case 1:
        this.visibleTree = 1;
        break;
        case 2:
          this.visibleTree = 2;
          break;
        case 3:
          this.visibleTree = 3;
          break;
        case 4:
          this.visibleTree = 4;
          break;
        case 5:
          this.visibleTree = 5;
          break;
        case 0:
          this.visibleTree = 0;
          break;
      default:
        this.visibleTree = 0;
        break;
    }
  }
}
