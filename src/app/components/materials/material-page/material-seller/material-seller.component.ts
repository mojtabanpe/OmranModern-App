import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExtendedSearchDialogComponent } from './extended-search-dialog/extended-search-dialog.component';
import { MoreInformationDialogComponent } from './more-information-dialog/more-information-dialog.component';
import { SortDialogComponent } from './sort-dialog/sort-dialog.component';

@Component({
  selector: 'app-material-seller',
  templateUrl: './material-seller.component.html',
  styleUrls: ['./material-seller.component.css']
})
export class MaterialSellerComponent implements OnInit {
  @Input() sellerMaterials;
  executeOrDischarge = '';
  transport: boolean;
  typeOfSort = 'minUnitPrice';

  constructor(public dialog: MatDialog) {
    
   }

  ngOnInit(): void {
    console.log(this.sellerMaterials);

    for (const sellerMaterial of this.sellerMaterials) {
      sellerMaterial.material.images = sellerMaterial.material.images.toString().split(',');
    }
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
