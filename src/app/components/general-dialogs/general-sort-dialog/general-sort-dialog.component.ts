import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-general-sort-dialog',
  templateUrl: './general-sort-dialog.component.html',
  styleUrls: ['./general-sort-dialog.component.css']
})
export class GeneralSortDialogComponent{
  constructor(
    public dialogRef: MatDialogRef<GeneralSortDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) {
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
