import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-general-filter-dialog',
  templateUrl: './general-filter-dialog.component.html',
  styleUrls: ['./general-filter-dialog.component.css']
})
export class GeneralFilterDialogComponent {
  choosenQuality = '';
  choosenBrand = '';
  constructor(
    public dialogRef: MatDialogRef<GeneralFilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
