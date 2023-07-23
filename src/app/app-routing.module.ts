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
import { ReturnAndRefundsComponent } from './return-and-refunds/return-and-refunds.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { LegalNotesComponent } from './legal-notes/legal-notes.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { CareersComponent } from './careers/careers.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routers: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'collections', component: CollectionsComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'nav-bar', component: NavBarComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user-page', component: UserPageComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'faqs', component: FAQsComponent },
  { path: 'return-and-returns', component: ReturnAndRefundsComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent},
  { path: 'legal-notes', component: LegalNotesComponent},
  { path: 'privacy-policy', component: PrivacyPolicyComponent},
  { path: 'cookie-policy', component: CookiePolicyComponent},
  { path: 'careers', component: CareersComponent},
  { path: 'about-us', component: AboutUsComponent},
  

];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routers)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
