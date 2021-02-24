import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExtendedSearchDialogComponent } from '../../../materials/material-page/material-seller/extended-search-dialog/extended-search-dialog.component';
import { MoreInformationDialogComponent } from '../../../materials/material-page/material-seller/more-information-dialog/more-information-dialog.component';
import { SortDialogComponent } from '../../../materials/material-page/material-seller/sort-dialog/sort-dialog.component';

@Component({
  selector: 'app-service-seller',
  templateUrl: './service-seller.component.html',
  styleUrls: ['./service-seller.component.css']
})
export class ServiceSellerComponent implements OnInit {
  @Input() sellerServices;
  executeOrDischarge = '';
  transport: boolean;
  typeOfSort = 'minUnitPrice';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    for (const sellerService of this.sellerServices) {
      sellerService.service.images = sellerService.service.images.toString().split(',');
    }
    console.log(this.sellerServices);
    
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

  openMoreInformation(seller): void {
    const sortDialogRef = this.dialog.open(MoreInformationDialogComponent, {
      width: '400px',
      data: seller
    });
  }

}
