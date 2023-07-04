import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routers: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'nav-bar', component: NavBarComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routers)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
