import { CategoryPageComponent } from './components/category/category-page/category-page.component';
import { ServicePageComponent } from './components/services/service-page/service-page.component';
import { SellerPageComponent } from './components/sellers/seller-page/seller-page.component';
import { MaterialPageComponent } from './components/materials/material-page/material-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { MarketerPageComponent } from './components/product/marketer-page/marketer-page.component';
import { ProductPageComponent } from './components/product/product-page/product-page.component';
import { AuthComponent } from './components/auth/auth.component';
import { ActivityFieldsComponent } from './components/auth/activity-fields/activity-fields.component';
import { BusinessRegisterComponent } from './components/auth/business-register/business-register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { PasswordRecoveryComponent } from './components/auth/password-recovery/password-recovery.component';
import { RegisterComponent } from './components/auth/register/register.component';


const routes: Routes = [
{ path : 'products',
  loadChildren: () => import('./components/product/product.module').then(m => m.ProductModule)
},
// { path : 'services',
//   loadChildren: () => import('./components/product/product.module').then(m => m.ProductModule)
// },
// ,
// { path : 'service',
//   loadChildren: () => import('./components/product/product.module').then(m => m.ProductModule)
// },
// {
//   path: 'profile',
//   loadChildren: () => import('./components/profile/profile.module').then(m => m.ProfileModule)
// },
{ path: '', component: FirstPageComponent },
{ path: 'materials/:slug', component: MaterialPageComponent },
{ path: 'services/:slug', component: ServicePageComponent },
{ path: 'sellers/:slug', component: SellerPageComponent },
{ path: 'category/:slug', component: CategoryPageComponent },
{
  path: 'auth', component: AuthComponent, children:
  [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'forget', component: PasswordRecoveryComponent },
    { path: 'businessRegister', component: BusinessRegisterComponent },
    { path: 'activityFields', component: ActivityFieldsComponent },
  ]
}
// { path: 'category/{slug}', component: CategoryComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
