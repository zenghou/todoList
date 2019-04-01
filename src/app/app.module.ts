import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as $ from 'jquery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlidingUnderlineMenuComponent } from './sliding-underline-menu/sliding-underline-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SlidingUnderlineMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
