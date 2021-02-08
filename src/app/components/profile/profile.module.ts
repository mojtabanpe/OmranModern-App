import { MyProjectsComponent } from './my-projects/my-projects.component';
import { SellerInformationComponent } from './seller-information/seller-information.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { AddWorkSampleComponent } from './add-work-sample/add-work-sample.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProductModule } from '../product/product.module';
import { ProfileInformationsComponent } from './profile-informations/profile-informations.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
import { SharedModule } from '../../shared/shared.module';




@NgModule({
  imports: [
    ProfileRoutingModule,
    // ProductModule,
    NgMultiSelectDropDownModule,
    MatChipsModule,
    MatExpansionModule,
    SharedModule,
    // ReactiveFormsModule
  ],
  declarations: [
    ProfileComponent,
    ProfileInformationsComponent,
    AddWorkSampleComponent,
    DashboardComponent,
    SellerInformationComponent,
    MyProjectsComponent,
  ],
  exports: [ProfileComponent]
})
export class ProfileModule { }
