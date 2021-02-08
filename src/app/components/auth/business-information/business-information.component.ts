import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-business-information',
  templateUrl: './business-information.component.html',
  styleUrls: ['./business-information.component.css']
})
export class BusinessInformationComponent implements OnInit {
  cities = [
    {value: 'tehran', viewValue: 'تهران'},
    {value: 'yazd', viewValue: 'یزد'},
    {value: 'esfahan', viewValue: 'اصفهان'}
  ];
  provinces = [
    {value: 'tehran', viewValue: 'تهران'},
    {value: 'yazd', viewValue: 'یزد'},
    {value: 'esfahan', viewValue: 'اصفهان'}
  ];

  regions = [
      { item_id: 1, item_text: 'منطقه ۱' },
      { item_id: 2, item_text: 'منطقه ۲' },
      { item_id: 3, item_text: 'منطقه ۳' },
      { item_id: 4, item_text: 'منطقه ۴' },
      { item_id: 5, item_text: 'منطقه ۵' }
    ];
  selectedRegions = [
    { item_id: 3, item_text: 'منطقه ۳' },
    { item_id: 4, item_text: 'منطقه ۴' }
  ];
  dropdownSettings: IDropdownSettings;

  constructor() { }

  ngOnInit(): void {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'انتخاب همه',
      unSelectAllText: 'حذف همه',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

  }
  onItemSelect(item: any): void {
    console.log(item);
  }
  onSelectAll(items: any): void {
    console.log(items);
  }
  }


