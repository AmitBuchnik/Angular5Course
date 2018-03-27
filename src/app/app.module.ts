import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

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
import { SliderComponent } from './slider/slider.component';
import { SliderpipePipe } from './sliderpipe.pipe';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { SpapageComponent } from './spapage/spapage.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';

const appRoutes: Routes = [
  {
    path: 'view1/:id/:name', component: Comp1Component,
    children: [
      { path: 'view3', component: Comp3Component },
      { path: 'view4', component: Comp4Component }
    ]
  },
  {
    path: 'view1', component: Comp1Component,
    children: [
      { path: 'view3', component: Comp3Component },
      { path: 'view4', component: Comp4Component }
    ]
  },
  { path: 'view2', component: Comp2Component }
];

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
    ReverseStringPipe,
    SliderComponent,
    SliderpipePipe,
    Comp1Component,
    Comp2Component,
    SpapageComponent,
    Comp3Component,
    Comp4Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
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
