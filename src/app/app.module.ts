import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FAQsComponent } from './faqs/faqs.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { CollectionsComponent } from './collections/collections.component';
import { DetailComponent } from './detail/detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ViewAllComponent } from './view-all/view-all.component';
//import { SearchComponent } from './search/search.component';
import { SearcherComponent } from './partials/searcher/searcher.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { ResultsComponent } from './movies/results/results.component';
import { UserPageComponent } from './user-page/user-page.component';

import { ReturnAndRefundsComponent } from './return-and-refunds/return-and-refunds.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { UserService } from './user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { LegalNotesComponent } from './legal-notes/legal-notes.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { CareersComponent } from './careers/careers.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
//    SearchComponent,
    SearcherComponent,
    MoviesComponent,
    MovieComponent,
    ResultsComponent,
    UserPageComponent,

    ReturnAndRefundsComponent,
    TermsAndConditionsComponent,
    LegalNotesComponent,
    PrivacyPolicyComponent,
    CookiePolicyComponent,
    CareersComponent,
    AboutUsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [UserService ],
  bootstrap: [AppComponent],
})
export class AppModule {}
