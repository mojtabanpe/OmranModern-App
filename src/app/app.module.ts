import { RepositoryService } from './services/repository.service';
import { SellerIntroComponent } from './components/sellers/seller-page/seller-intro/seller-intro.component';
import { SellerProductsComponent } from './components/sellers/seller-page/seller-products/seller-products.component';
import { WorkSamplesComponent } from './components/sellers/seller-page/work-samples/work-samples.component';
import { GeneralFilterDialogComponent } from './components/general-dialogs/general-filter-dialog/general-filter-dialog.component';
import { GeneralSortDialogComponent } from './components/general-dialogs/general-sort-dialog/general-sort-dialog.component';
import { MoreInformationDialogComponent } from './components/materials/material-page/material-seller/more-information-dialog/more-information-dialog.component';
import { SortDialogComponent } from './components/materials/material-page/material-seller/sort-dialog/sort-dialog.component';
import { ExtendedSearchDialogComponent } from './components/materials/material-page/material-seller/extended-search-dialog/extended-search-dialog.component';
import { SellerPageComponent } from './components/sellers/seller-page/seller-page.component';
import { CategoryPageComponent } from './components/category/category-page/category-page.component';
import { MaterialSellerComponent } from './components/materials/material-page/material-seller/material-seller.component';
import { ServiceDetailsComponent } from './components/services/service-page/service-details/service-details.component';
import { ServiceSellerComponent } from './components/services/service-page/service-seller/service-seller.component';
import { ServiceIntroComponent } from './components/services/service-page/service-intro/service-intro.component';
import { ServicePageComponent } from './components/services/service-page/service-page.component';
import { MaterialPageComponent } from './components/materials/material-page/material-page.component';
import { MaterialDetailsComponent } from './components/materials/material-page/material-details/material-details.component';
import { MaterialIntroComponent } from './components/materials/material-page/material-intro/material-intro.component';
// import { SharedModule } from './shared/shared.module';
import { AuthService } from './services/auth.service';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { ProfileModule } from './components/profile/profile.module';
import { ActivityFieldsComponent } from './components/auth/activity-fields/activity-fields.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BusinessRegisterComponent } from './components/auth/business-register/business-register.component';
import { PasswordRecoveryComponent } from './components/auth/password-recovery/password-recovery.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthComponent } from './components/auth/auth.component';
import { ProductModule } from './components/product/product.module';
import { FooterComponent } from './components/general/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/general/header/header.component';
import { CategoriesComponent } from './components/first-page/intro-section/categories/categories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { IntroSectionComponent } from './components/first-page/intro-section/intro-section.component';
import { SliderComponent } from './components/first-page/intro-section/slider/slider.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { IntroLeftComponent } from './components/first-page/intro-section/intro-left/intro-left.component';
import { CoWorkersComponent } from './components/first-page/co-workers/co-workers.component';
import { CoLeftSideComponent } from './components/first-page/co-workers/co-left-side/co-left-side.component';
import { CoRightSideComponent } from './components/first-page/co-workers/co-right-side/co-right-side.component';
import { WhyUsComponent } from './components/first-page/why-us/why-us.component';
import { GeneralService } from './services/general.service';
import { WhyUsHeaderComponent } from './components/first-page/why-us-header/why-us-header.component';
import { SecondWhyUsComponent } from './components/first-page/second-why-us/second-why-us.component';
import { ApplyYourWorkComponent } from './components/first-page/apply-your-work/apply-your-work.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { BusinessInformationComponent } from './components/auth/business-information/business-information.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.intercept';
import { SharedModule } from './shared/shared.module';
import {CookieService} from 'ngx-cookie-service';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    IntroSectionComponent,
    SliderComponent,
    IntroLeftComponent,
    CoWorkersComponent,
    CoLeftSideComponent,
    CoRightSideComponent,
    WhyUsComponent,
    WhyUsHeaderComponent,
    SecondWhyUsComponent,
    ApplyYourWorkComponent,
    FooterComponent,
    AuthComponent,
    LoginComponent,
    PasswordRecoveryComponent,
    RegisterComponent,
    BusinessInformationComponent,
    BusinessRegisterComponent,
    ActivityFieldsComponent,
    FirstPageComponent,
    MaterialIntroComponent,
    MaterialSellerComponent,
    MaterialDetailsComponent,
    MaterialPageComponent,
    ServicePageComponent,
    ServiceIntroComponent,
    ServiceSellerComponent,
    ServiceDetailsComponent,
    CategoryPageComponent,
    SellerPageComponent,
    SellerProductsComponent,
    SellerIntroComponent,
    WorkSamplesComponent,
    ExtendedSearchDialogComponent,
    SortDialogComponent,
    MoreInformationDialogComponent,
    GeneralSortDialogComponent,
    GeneralFilterDialogComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule,
    ProductModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCarouselModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    MatButtonToggleModule,
    ProfileModule,
    MatMenuModule
  ],
  providers: [GeneralService, AuthService, RepositoryService, CookieService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
