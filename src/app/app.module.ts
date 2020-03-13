import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { UploadComponent } from './upload/upload.component';
import { FontColorComponent } from './font-color/font-color.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    UploadComponent,
    FontColorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
