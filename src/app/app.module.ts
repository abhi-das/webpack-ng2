import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
 
import {CountryList} from './country-list/country.list.component';
import {CountryDetail} from './country-detail/country.detail.component';
import { SubContentComponent } from './country-list/sub-content/sub.content.component';

import { AppRoute } from './app.route'; 
import { AppComponent } from './app.component';

 
@NgModule({
  imports: [
    BrowserModule,
    AppRoute
  ],
  declarations: [
    AppComponent, CountryList, CountryDetail, SubContentComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }