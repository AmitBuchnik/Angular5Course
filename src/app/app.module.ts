import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { Ex3Component } from './ex3/ex3.component';
import { Ex2Component } from './ex2/ex2.component';
import { GrandsonCompComponent } from './ex4/1/grandson-comp.component';
import { ChildCompComponent } from './ex4/1/child-comp.component';
import { ParentCompComponent } from './ex4/1/parent-comp.component';
import { ParentComponentComponent4 } from './ex4/4/parent-component.component';
import { ChildComponentComponent4 } from './ex4/4/child-component.component';
import { VehicleService } from './vehicle.service';
import { VehicleClientComponent } from './vehicle-client/vehicle-client.component';
import { VehiclesInfoService } from './vehicles-info.service';
import { VehiclesInfoFormattedService } from './vehicles-info-formatted.service';
import { VehicleTypesFormattedClientComponent } from './vehicle-types-formatted-client/vehicle-types-formatted-client.component';
import { PostsclientComponent } from './postsclient/postsclient.component';
import { DalService } from './dal.service';
import { FormExampleComponent } from './form-example/form-example.component';
import { UsersComponent } from './users/users.component';
import { ReverseStringPipe } from './reverse-string.pipe';


@NgModule({
  declarations: [
    AppComponent,
    Ex3Component,
    Ex2Component,
    GrandsonCompComponent,
    ChildCompComponent,
    ParentCompComponent,
    ParentComponentComponent4,
    ChildComponentComponent4,
    VehicleClientComponent,
    VehicleTypesFormattedClientComponent,
    PostsclientComponent,
    FormExampleComponent,
    UsersComponent,
    ReverseStringPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    VehicleService,
    VehiclesInfoService,
    VehiclesInfoFormattedService,
    DalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
