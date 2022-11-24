import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PlantsPageComponent } from './components/plants-page/plants-page.component';
import { FlowersPageComponent } from './components/flowers-page/flowers-page.component';
import { HelechosPageComponent } from './components/helechos-page/helechos-page.component';
import { TreesPageComponent } from './components/trees-page/trees-page.component';
import { ShoppingCarPageComponent } from './components/shopping-car-page/shopping-car-page.component';

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
    FlowersPageComponent,
    HelechosPageComponent,
    TreesPageComponent,
    ShoppingCarPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
