import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  color$: BehaviorSubject<string> = new BehaviorSubject('rgb(0, 0, 0)')

  constructor() { }

  setFontColor(r: number = 0, g: number = 0, b: number = 0): void {
    this.color$.next(`rgb(${r}, ${g}, ${b})`);
  }
}
