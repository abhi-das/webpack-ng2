import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
 
import { AppComponent } from './app.component';

import { HomeComponent } from './homepage/home.component';
import { InfoComponent } from './infocomp/info.component';
 
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent, HomeComponent, InfoComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }