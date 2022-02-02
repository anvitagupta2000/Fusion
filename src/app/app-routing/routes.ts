import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { SignupComponent } from '../signup/signup.component';
import { SigninComponent } from '../signin/signin.component';
import { AdminComponent } from '../admin/admin.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'menu',     component: MenuComponent },
  { path: 'contactus',     component: ContactComponent },
  { path: 'aboutus',     component: AboutComponent },
  { path: 'signup',     component: SignupComponent },
  { path: 'signin',     component: SigninComponent },
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'dishdetail/:id',     component: DishdetailComponent },
  { path: 'admin',     component: AdminComponent }
];