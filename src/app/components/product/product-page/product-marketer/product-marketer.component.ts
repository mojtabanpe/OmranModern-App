import { MoreInformationDialogComponent } from '../../../materials/material-page/material-seller/more-information-dialog/more-information-dialog.component';
import { ExtendedSearchDialogComponent } from '../../../materials/material-page/material-seller/extended-search-dialog/extended-search-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SortDialogComponent } from '../../../materials/material-page/material-seller/sort-dialog/sort-dialog.component';

@Component({
  selector: 'app-product-marketer',
  templateUrl: './product-marketer.component.html',
  styleUrls: ['./product-marketer.component.css']
})
export class ProductMarketerComponent implements OnInit {
  executeOrDischarge = '';
  transport: boolean;
  typeOfSort = 'minUnitPrice';
  marketers =  [
    {
      marketer: {
        name: 'عمران مدرن',
        stars: 2,
        logo: '../../../../assets/img/logo/logo.png'
      },
      contact: {
        phoneNumber: '02188239932',
        address: 'تهران منطقه ۳'
      }
      ,
      transport: {
        transportPrice: '112900',
        transportCar: 'نیسان گاوی',
        execute: false
      },
      states: {
        disscount: 7,
        lastUpdate: 'دیروز',
        preparationTime: 3,
        transportCompany: 'برادران قلی پور'
      },
      price: {
        pricePerUnit: '145500',
        totalPrice: '2300000'
      }
    },
    {
      marketer: {
        name: 'چم چی بگم',
        stars: 5,
        logo: '../../../../assets/img/logo/chomchibegam.png'
      },
      contact: {
        phoneNumber: '02188239932',
        address: 'تهران منطقه 6'
      }
      ,
      transport: {
        transportPrice: '14899',
        transportCar: 'نیسان گاوی',
        execute: true
      },
      states: {
        disscount: 13,
        lastUpdate: 'امروز',
        preparationTime: 2,
        transportCompany: 'خواهران قلی پور'
      },
      price: {
        pricePerUnit: '160000',
        totalPrice: '190000'
      }
    }
  ];
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  sort(btn: HTMLButtonElement): void {
    document.getElementsByClassName('active').item(0).classList.remove('active');
    btn.classList.add('active');

  }

  public generateRowIndexes(count: number): Array<number> {
    const indexes = [];
    for (let i = 0; i < count; i++) {
      indexes.push(i);
    }
    return indexes;
  }

  openSearchDialog(): void {
    const searchDialogRef = this.dialog.open(ExtendedSearchDialogComponent, {
      width: '400px',
      height: '600px',
      data: {executeOrDischarge: this.executeOrDischarge, transport: this.transport}
    });

    searchDialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.executeOrDischarge = result.executeOrDischarge;
        this.transport = result.transport;
      }
    });
  }

  openSortDialog(): void {
    const sortDialogRef = this.dialog.open(SortDialogComponent, {
      width: '400px',
      height: '600px',
      data: {typeOfSort: this.typeOfSort}
    });

    sortDialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        console.log(result);
      }
    });
  }

  openMoreInformation(marketer): void {
    const sortDialogRef = this.dialog.open(MoreInformationDialogComponent, {
      width: '400px',
      data: marketer
    });
  }
}
