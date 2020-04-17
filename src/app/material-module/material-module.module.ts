import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSliderModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatSliderModule,
    MatListModule
  ]
})
export class MaterialModule { }
