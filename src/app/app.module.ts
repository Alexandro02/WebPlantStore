import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PlantsPageComponent } from './components/plants-page/plants-page.component';
import { HelechosPageComponent } from './components/helechos-page/helechos-page.component';
import { ShoppingCarPageComponent } from './components/shopping-car-page/shopping-car-page.component';

const oktaConfig = {
  issuer: 'https://dev-53222201.okta.com/oauth2/default',
  clientId: '0oa7dsfwndvC0aTs75d7',
  redirectUri: window.location.origin + '/callback',
};

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    FooterComponent,
    ContactPageComponent,
    ErrorPageComponent,
    LoginPageComponent,
    PlantsPageComponent,
    HelechosPageComponent,
    ShoppingCarPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, OktaAuthModule],
  providers: [
    {
      provide: OKTA_CONFIG,
      useValue: oktaConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
