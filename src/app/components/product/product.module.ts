import { SharedModule } from './../../shared/shared.module';
// import { GeneralFilterDialogComponent } from '../general-dialogs/general-filter-dialog/general-filter-dialog.component';
// import { GeneralSortDialogComponent } from '../general-dialogs/general-sort-dialog/general-sort-dialog.component';
import { ServicesSubgroupComponent } from './services-subgroup/services-subgroup.component';
import { MoreInformationDialogComponent } from '../materials/material-page/material-seller/more-information-dialog/more-information-dialog.component';
import { SortDialogComponent } from '../materials/material-page/material-seller/sort-dialog/sort-dialog.component';
import { ExtendedSearchDialogComponent } from '../materials/material-page/material-seller/extended-search-dialog/extended-search-dialog.component';
import { ProductSubgroupComponent } from './product-subgroup/product-subgroup.component';
import { MarketerProductsServicesComponent } from './marketer-page/marketer-products-services/marketer-products-services.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { MarketerPageComponent } from './marketer-page/marketer-page.component';
import { ProductSellComponent } from './product-page/product-sell/product-sell.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductIntroComponent } from './product-page/product-intro/product-intro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './product.component';
import { MatIconModule } from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { ProductMarketerComponent } from './product-page/product-marketer/product-marketer.component';
import { ProductDetailesComponent } from './product-page/product-detailes/product-detailes.component';
import {MatTabsModule} from '@angular/material/tabs';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { MarketerIntroComponent } from './marketer-page/marketer-intro/marketer-intro.component';
import {MatTreeModule} from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatRippleModule} from '@angular/material/core';
import { Ng5SliderModule } from 'ng5-slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ToastrModule } from 'ngx-toastr';
import {MatDialogModule} from '@angular/material/dialog';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ProductRoutingModule,
    // Ng5SliderModule,
    ToastrModule.forRoot(),
  ],
  declarations: [
    ProductComponent,
    ProductIntroComponent,
    ProductSellComponent,
    ProductMarketerComponent,
    ProductDetailesComponent,
    MarketerPageComponent,
    ProductPageComponent,
    MarketerIntroComponent,
    MarketerProductsServicesComponent,
    ProductSubgroupComponent,
    // ExtendedSearchDialogComponent,
    // SortDialogComponent,
    // MoreInformationDialogComponent,
    ServicesSubgroupComponent,
    // GeneralSortDialogComponent,
    // GeneralFilterDialogComponent
  ],
  exports: [
    ProductComponent,
    // MatCheckboxModule,
    // MatSelectModule,
    // MatFormFieldModule,
    // ToastrModule,
    // MatTreeModule,
    // MatTabsModule,
    // MatIconModule,
    // IvyCarouselModule
  ],
})
export class ProductModule { }
