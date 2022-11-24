import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';

import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PlantsPageComponent } from './components/plants-page/plants-page.component';
import { FlowersPageComponent } from './components/flowers-page/flowers-page.component';
import { HelechosPageComponent } from './components/helechos-page/helechos-page.component';
import { ShoppingCarPageComponent } from './components/shopping-car-page/shopping-car-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: 'logIn',
    component: LoginPageComponent,
  },
  {
    path: 'plants',
    component: PlantsPageComponent,
    // canActivate: [OktaAuthGuard],
  },
  {
    path: 'plants/flowers',
    component: FlowersPageComponent,
  },
  {
    path: 'plants/helechos',
    component: HelechosPageComponent,
  },
  {
    path: 'plants/helechos/cart',
    component: ShoppingCarPageComponent,
  },
  {
    path: 'cart',
    component: ShoppingCarPageComponent,
  },
  {
    path: 'callback',
    component: OktaCallbackComponent,
  },
  {
    path: '**',
    component: ErrorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
