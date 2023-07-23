import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import {  ContactUsComponent } from './contact-us/contact-us.component';
import { FAQsComponent } from './faqs/faqs.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { CollectionsComponent } from './collections/collections.component';
import { DetailComponent } from './detail/detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    CollectionsComponent,
    DetailComponent,
    ShoppingCartComponent,

    FooterComponent,
    ContactUsComponent,
    FAQsComponent,
    ViewAllComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //FooterComponent,
    //ContactUsComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
