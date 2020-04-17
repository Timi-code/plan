import { Component, OnInit } from '@angular/core';
import { ColorService } from './../service/color.service';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-font-color-bar',
  templateUrl: './font-color-bar.component.html',
  styleUrls: ['./font-color-bar.component.scss']
})
export class FontColorBarComponent implements OnInit {
  r: number = 0;
  g: number = 0;
  b: number = 0;

  constructor(
    private colorService: ColorService
  ) { }

  ngOnInit(): void {
  }

  setColor(r: number, g: number, b: number): void {
    this.r = r;
    this.g = g;
    this.b = b;
    this.colorService.setFontColor(this.r, this.g, this.b);
  }

  sliderChange(): void {
    this.colorService.setFontColor(this.r, this.g, this.b);
  }

}
