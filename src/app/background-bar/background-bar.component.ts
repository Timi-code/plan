import { Component, OnInit } from '@angular/core';
import { BackgroundImgService } from './../service/background-img.service';

@Component({
  selector: 'app-background-bar',
  templateUrl: './background-bar.component.html',
  styleUrls: ['./background-bar.component.scss']
})
export class BackgroundBarComponent implements OnInit {

  imgs: number[] = [1, 2, 3, 4, 5];

  constructor(
    private imgService: BackgroundImgService
  ) { }

  ngOnInit(): void {
  }

  choiceImg(index: number): void {
    this.imgService.choiceImg(index)
  }

}
