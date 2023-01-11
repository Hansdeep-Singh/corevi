import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MaterialModule } from './material.module';
import { MenuComponent } from './menu/menu.component';

import { HansLibModule, MouseService, ScreenService } from 'hans-lib';
import { CarouselComponent } from './carousel/carousel.component';
import { SignatureComponent } from './signature/signature.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CounterComponent } from './counter/counter.component';
import { GrdComponent } from './grd/grd.component';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CarouselComponent,
    SignatureComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    ShopComponent,
    HomeComponent,
    PageNotFoundComponent,
    CounterComponent,
    GrdComponent,
    LoginComponent

  ],
  providers: [
    ScreenService,
    MouseService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HansLibModule.forRoot({ apiUrl: environment.ROOT_URL }),
    FormsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
