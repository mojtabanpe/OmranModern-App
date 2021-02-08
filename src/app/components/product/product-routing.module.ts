import { ServicesSubgroupComponent } from './services-subgroup/services-subgroup.component';
import { ProductSubgroupComponent } from './product-subgroup/product-subgroup.component';
import { MarketerPageComponent } from './marketer-page/marketer-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductComponent } from './product.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';

const routes: Routes = [
  { path : '', component: ProductComponent, children :
   [
    { path: '', component: ProductPageComponent },
    { path: 'seller', component: MarketerPageComponent },
    { path: 'productSubGroup', component: ProductSubgroupComponent },
    { path: 'serviceSubGroup', component: ServicesSubgroupComponent }
   ]
  }
 ];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
 })
 export class ProductRoutingModule { }
