import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { CollectionsComponent } from './collections/collections.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { UserPageComponent } from './user-page/user-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FAQsComponent } from './faqs/faqs.component';
import { ViewAllComponent } from './view-all/view-all.component';

const routers: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'viewAll', component: ViewAllComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'collections', component: CollectionsComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'nav-bar', component: NavBarComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user-page', component: UserPageComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'faqs', component: FAQsComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routers)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
