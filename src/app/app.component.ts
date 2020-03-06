import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('show', [
      transition(':enter', [
        style({ transform: 'translateY(100px)' }),
        animate('0.3s', style({ transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AppComponent {
  step: number = 1;
  complete: boolean = false;

  next(): void {
    this.step += 1;
  }

}
