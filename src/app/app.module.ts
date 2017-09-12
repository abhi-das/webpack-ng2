import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
 
import { AppComponent } from './app.component';
import { MenuListComponent } from './menu-list/menu.list.component';
 
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent, MenuListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }