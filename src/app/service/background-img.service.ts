import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackgroundImgService {

  img$: BehaviorSubject<number> = new BehaviorSubject(1);

  constructor() { }

  choiceImg(img: number): void {
    this.img$.next(img);
  }
}
