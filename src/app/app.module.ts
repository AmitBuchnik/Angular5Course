import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Ex3Component } from './ex3/ex3.component';
import { Ex2Component } from './ex2/ex2.component';


@NgModule({
  declarations: [
    AppComponent,
    Ex3Component,
    Ex2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
