import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { CollectionsComponent } from './collections/collections.component';
import { DetailComponent } from './detail/detail.component';
=======
import { FooterComponent } from './footer/footer.component';
import {  ContactUsComponent } from './contact-us/contact-us.component';


>>>>>>> Adnan

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    CollectionsComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
=======
    FooterComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

>>>>>>> Adnan
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
