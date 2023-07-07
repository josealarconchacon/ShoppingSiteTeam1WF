import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { SummerCollectionComponent } from './home/summer-collection/summer-collection.component';
import { PantsCollectionComponent } from './home/pants-collection/pants-collection.component';
import { ShoesCollectionComponent } from './home/shoes-collection/shoes-collection.component';
import { DescriptionComponent } from './description/description.component';
import { UserPageComponent } from './user-page/user-page.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, LoginComponent, HomeComponent, SummerCollectionComponent, PantsCollectionComponent, ShoesCollectionComponent, DescriptionComponent, UserPageComponent],
=======
import { RegisterComponent } from './register/register.component';
import { CollectionsComponent } from './collections/collections.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    CollectionsComponent,
    DetailComponent,
  ],
>>>>>>> new-b
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
