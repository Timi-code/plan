import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { MaterialModule } from './material-module/material-module.module';
import { BackgroundBarComponent } from './background-bar/background-bar.component';
import { FontColorBarComponent } from './font-color-bar/font-color-bar.component';
import { PlanListComponent } from './plan-list/plan-list.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    WellcomeComponent,
    BackgroundBarComponent,
    FontColorBarComponent,
    PlanListComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HammerModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
