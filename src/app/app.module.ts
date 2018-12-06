import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AmazingTimePickerModule } from 'amazing-time-picker'
import { AppComponent } from './app.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentOneService } from './shared/component-one.service';
import { ComponentTwoComponent } from './component-two/component-two.component';
import {ComponentTwoService } from './shared/component-two.service';
import { ComponentThreeComponent } from './component-three/component-three.component';
import { ComponentThreeService } from './shared/component-three.service';
import { ComponentFourComponent } from './component-four/component-four.component';
import { Routes, RouterModule } from '@angular/router'
const appRoutes : Routes =[
  {path:'', component:ComponentOneComponent},
  {path:'symptoms',component:ComponentTwoComponent},
  {path:'tpa_Eligibility',component:ComponentThreeComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    ComponentThreeComponent,
    ComponentFourComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AmazingTimePickerModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ComponentOneService,ComponentTwoService,ComponentThreeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
