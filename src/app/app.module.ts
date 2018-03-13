import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Ex3Component } from './ex3/ex3.component';
import { Ex2Component } from './ex2/ex2.component';
import { GrandsonCompComponent } from './ex4/1/grandson-comp.component';
import { ChildCompComponent } from './ex4/1/child-comp.component';
import { ParentCompComponent } from './ex4/1/parent-comp.component';
import { ParentComponentComponent } from './ex4/2/parent-component.component';
import { ChildComponentComponent } from './ex4/2/child-component.component';


@NgModule({
  declarations: [
    AppComponent,
    Ex3Component,
    Ex2Component,
    GrandsonCompComponent,
    ChildCompComponent,
    ParentCompComponent,
    ParentComponentComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
