import { UserGuard } from './../services/userGuard';
import { CheckoutGuard } from './../services/checkoutGuard';
import { UserComponent } from './ui/main/user.component';
import { ForgotPasswordComponent } from './ui/main/forgotPassword.component';
import { EmailConfirmComponent } from './ui/main/emailConfirm.component';
import { NotFoundComponent } from './ui/main/notFound.component';
import { ProductDetailComponent } from './ui/main/productDetail.component';
import { CheckoutComponent } from './ui/main/checkout.component';
import { CartComponent } from './ui/main/cart.component';
import { RegisterComponent } from './ui/main/register.component';
import { LoginComponent } from './ui/main/login.component';
import { ContactComponent } from './ui/main/contact.component';
import { AboutComponent } from './ui/main/about.component';
import { StoreComponent } from './ui/main/store.component';
import { DashboardComponent } from './ui/main/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"dashboard", component:DashboardComponent},
  {path:"store/:id", component:ProductDetailComponent},
  {path:"store", component:StoreComponent},
  {path:"about", component:AboutComponent},
  {path:"contact", component:ContactComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:'emailVerify', component:EmailConfirmComponent},
  {path:'passwordReset', component:ForgotPasswordComponent},
  {path:'user', component:UserComponent, canActivate:[UserGuard]}, 
  {path:"cart", component:CartComponent},
  {path:"checkout", component:CheckoutComponent, canActivate:[CheckoutGuard]},
  {path: '',   redirectTo: '/dashboard', pathMatch: 'full' }, 
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
