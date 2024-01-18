import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './landing-page/navbar/navbar.component';
import { WorksComponent } from './landing-page/works/works.component';
import { DiningComponent } from './landing-page/dining/dining.component';
import { AboutUsComponent } from './landing-page/about-us/about-us.component';
import { ContactComponent } from './landing-page/contact/contact.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './landing-page/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    WorksComponent,
    DiningComponent,
    AboutUsComponent,
    ContactComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
