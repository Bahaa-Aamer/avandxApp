import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeroSecComponent } from './hero-sec/hero-sec.component';
import { BriefSecComponent } from './brief-sec/brief-sec.component';
import { ClientsSecComponent } from './clients-sec/clients-sec.component';
import { ServicesSecComponent } from './services-sec/services-sec.component';
import { GetintouchSecComponent } from './getintouch-sec/getintouch-sec.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './loader/loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeroSecComponent,
    BriefSecComponent,
    ClientsSecComponent,
    ServicesSecComponent,
    GetintouchSecComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
