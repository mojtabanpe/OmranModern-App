import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  executeOrDischarge: string;
  transport: boolean;
}

@Component({
  selector: 'app-extended-search-dialog',
  templateUrl: './extended-search-dialog.component.html',
  styleUrls: ['./extended-search-dialog.component.css']
})
export class ExtendedSearchDialogComponent{

  constructor(
    public dialogRef: MatDialogRef<ExtendedSearchDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
