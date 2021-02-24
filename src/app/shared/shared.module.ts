import { DayPastPipe } from './../pipes/day-past.pipe';
import { PersianDatePipe } from './../pipes/persian-date.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { TrueFalsePipe } from '../pipes/true-false.pipe';
import { PersianNumberPipe } from '../pipes/persian-number.pipe';
import { HtmlToPlaintextPipe } from '../pipes/html-to-plaintext.pipe';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ToastrModule } from 'ngx-toastr';
import { Ng5SliderModule } from 'ng5-slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng5SliderModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatTreeModule,
    MatListModule,
    MatRippleModule,
    // Ng5SliderModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule,
  ],
  declarations: [
    SharedComponent,
    TrueFalsePipe,
    PersianNumberPipe,
    PersianDatePipe,
    DayPastPipe,
    HtmlToPlaintextPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TrueFalsePipe,
    PersianNumberPipe,
    PersianDatePipe,
    HtmlToPlaintextPipe,
    DayPastPipe,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    ToastrModule,
    MatTreeModule,
    MatTabsModule,
    MatIconModule,
    IvyCarouselModule,
    Ng5SliderModule,
    MatRadioModule,
    MatButtonModule,
    MatListModule,
    MatRippleModule,
    MatDialogModule,
  ]
})
export class SharedModule { }
