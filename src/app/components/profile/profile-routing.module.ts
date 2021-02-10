import { ContactInformationComponent } from './contact-information/contact-information.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { SellerInformationComponent } from './seller-information/seller-information.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActivityFieldsComponent } from './../auth/activity-fields/activity-fields.component';
import { BusinessRegisterComponent } from './../auth/business-register/business-register.component';
import { PasswordRecoveryComponent } from './../auth/password-recovery/password-recovery.component';
import { RegisterComponent } from './../auth/register/register.component';
import { LoginComponent } from './../auth/login/login.component';
import { AuthComponent } from './../auth/auth.component';
import { AddWorkSampleComponent } from './add-work-sample/add-work-sample.component';
import { ProfileInformationsComponent } from './profile-informations/profile-informations.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  { path : '', component: DashboardComponent},
  { path : 'sellerInformation', component: SellerInformationComponent},
  { path : 'myProjects', component: MyProjectsComponent},
  { path : 'profileInformation', component: ProfileInformationsComponent},
  { path : 'contactInformation', component: ContactInformationComponent},
 ];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
 })
 export class ProfileRoutingModule { }
