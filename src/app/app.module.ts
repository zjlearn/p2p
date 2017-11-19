import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {CarouselComponent} from './carousel/carousel.component';
import {ProductComponent} from './product/product.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProductService} from './shared/productService';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {InvestComponent} from './invest/invest.component';
import {LoanComponent} from './loan/loan.component';
import {MaterialModule} from './material/material.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    CarouselComponent,
    ProductComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    InvestComponent,
    LoanComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,  // 用于响应式表单
    AppRoutingModule   // 用于主模块中的路由
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
