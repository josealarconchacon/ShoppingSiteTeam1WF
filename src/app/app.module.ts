import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SummerCollectionComponent } from './home/summer-collection/summer-collection.component';
import { PantsCollectionComponent } from './home/pants-collection/pants-collection.component';
import { ShoesCollectionComponent } from './home/shoes-collection/shoes-collection.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, LoginComponent, HomeComponent, SummerCollectionComponent, PantsCollectionComponent, ShoesCollectionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
