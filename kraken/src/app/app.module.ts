import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }     from './app.component';
import { HomeComponent }    from './home.component'

import { AppRoutingModule } from './app-routing.module'

@NgModule({
  imports:
  [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations:
  [
    AppComponent,
    HomeComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
