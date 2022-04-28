import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './form/Signup.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CakedetailComponent } from './cakedetail/cakedetail.component';
import { PaymentComponent } from './payment/payment.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddressComponent } from './address/address.component';
import { CheckoutPaymentComponent } from './checkout-payment/checkout-payment.component';
import { AddcakesComponent } from './addcakes/addcakes.component';
import { PreviousorderComponent } from './previousorder/previousorder.component';
import { ForgetComponent } from './forget/forget.component';
const routes: Routes = [
   {path:"login",component:LoginComponent},
   {path:"signup",component:SignupComponent},
   {path:"home",component:HomeComponent},
   {path:"search",component:SearchComponent},
   {path:"payment",component:PaymentComponent},
   {path:"checkout",component:CheckoutComponent,children:[
     {path:"" ,component:AddressComponent},
     {path:"address",component:AddressComponent},
     {path:"payment", component:CheckoutPaymentComponent}
   ]},
   {path:"addcakes",component:AddcakesComponent},
   {path:"forget",component:ForgetComponent},
   {path:"previousorder",component:PreviousorderComponent},
   {path:"detail/:cakeid",component:CakedetailComponent},
   {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
