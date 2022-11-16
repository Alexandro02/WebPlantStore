import { NgModule } from '@angular/core';
import { 
  RouterModule, 
  Routes 
} from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PlantsPageComponent } from './components/plants-page/plants-page.component';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: "contact",
    component: ContactPageComponent
  },
  {
    path: "logIn",
    component: LoginPageComponent
  },
  {
    path: "plants",
    component: PlantsPageComponent
  },
  {
    path: "**",
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
