import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CakeComponent } from './cake/cake.component';
import { SignupComponent } from './form/Signup.component';
import { CakelistComponent } from './cakelist/cakelist.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { timeout } from 'rxjs';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ForgetComponent } from './forget/forget.component';
import { CakedetailComponent } from './cakedetail/cakedetail.component';
import { PaymentComponent } from './payment/payment.component';
import { DiscountPipe } from './discount.pipe';
import { PresentationDirective } from './presentation.directive';
import { AddressComponent } from './address/address.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutPaymentComponent } from './checkout-payment/checkout-payment.component';
import { AddcakesComponent } from './addcakes/addcakes.component';
import { PreviousorderComponent } from './previousorder/previousorder.component';
import { SpacePipe } from './space.pipe';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    CakeComponent,
    SignupComponent,
    CakelistComponent,
    LoginComponent,
    HomeComponent,
    SearchComponent,
    PagenotfoundComponent,
    ForgetComponent,
    CakedetailComponent,
    PaymentComponent,
    DiscountPipe,
    PresentationDirective,
    AddressComponent,
    CheckoutComponent,
    CheckoutPaymentComponent,
    AddcakesComponent,
    PreviousorderComponent,
    SpacePipe,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({timeOut:2000, progressBar:true,progressAnimation:'increasing',preventDuplicates:true}),
    FontAwesomeModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true
    }),
    HttpClientModule,
    NgxUiLoaderRouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
