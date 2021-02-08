import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-more-information-dialog',
  templateUrl: './more-information-dialog.component.html',
  styleUrls: ['./more-information-dialog.component.css']
})
export class MoreInformationDialogComponent {
  shod = false;

  constructor(
    public dialogRef: MatDialogRef<MoreInformationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.shod = true;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
