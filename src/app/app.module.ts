import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { MenuComponent } from './menu/menu.component';

import { HansLibModule, MouseService, ScreenService } from 'hans-lib';
import { CarouselComponent } from './carousel/carousel.component';
import { SignatureComponent } from './signature/signature.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CarouselComponent,
    SignatureComponent,
    HeaderComponent
  ],
  providers: [
    ScreenService,
    MouseService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HansLibModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
