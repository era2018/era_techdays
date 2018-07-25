import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InfoComponent } from './info/info.component';
import { PDFComponent } from './pdf/pdf.component';
import { GraphsComponent } from './graphs/graphs.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { LoginComponent } from './login/login.component';
import { Choice2Component } from './choice2/choice2.component';
import { RideshareComponent } from './rideshare/rideshare.component';
import { RideshareInputComponent } from './rideshare-input/rideshare-input.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InfoComponent,
    PDFComponent,
    GraphsComponent,
    EmergencyComponent,
    LoginComponent,
    Choice2Component,
    RideshareComponent,
    RideshareInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
