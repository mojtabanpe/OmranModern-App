import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sort-dialog',
  templateUrl: './sort-dialog.component.html',
  styleUrls: ['./sort-dialog.component.css']
})
export class SortDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<SortDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) {
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
