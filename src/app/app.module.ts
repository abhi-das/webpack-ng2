import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuListComponent } from './menu-list/menu.list.component';
 
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent, MenuListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }