import { Component, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { trigger, transition, style, animate, state, keyframes } from '@angular/animations';
import html2canvas from 'html2canvas';
import { BackgroundBarComponent } from './background-bar/background-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slide', [
      state('slideIn', style({ transform: 'translateY(-80px)' })),
      state('slideOut', style({ transform: 'translateY(-280px)' })),
      transition('* => slideOut', [
        style({ transform: 'translateY(-80px)' }),
        animate('0.6s ease-in-out', keyframes([
          style({ transform: 'translateY(-290px)', offset: 0.8 }),
          style({ transform: 'translateY(-280px)', offset: 1 })
        ]))
      ]),
      transition('* => slideIn', [
        style({ transform: 'translateY(-280px)' }),
        animate('0.3s ease-in-out', style({ transform: 'translateY(-80px)' }))
      ])
    ]),
    trigger('colorSlide', [
      state('slideIn', style({ transform: 'translateY(-40px)' })),
      state('slideOut', style({ transform: 'translateY(-260px)' })),
      transition('* => slideOut', [
        style({ transform: 'translateY(-40px)' }),
        animate('0.6s ease-in-out', keyframes([
          style({ transform: 'translateY(-270px)', offset: 0.8 }),
          style({ transform: 'translateY(-260px)', offset: 1 })
        ]))
      ]),
      transition('* => slideIn', [
        style({ transform: 'translateY(-260px)' }),
        animate('0.3s ease-in-out', style({ transform: 'translateY(-40px)' }))
      ])
    ]),
    trigger('planScale', [
      state('zoom', style({ 'margin-top': '0', width: '100%' })),
      state('scale', style({ 'margin-top': '60px', width: '300px' })),
      transition('* => zoom', [
        // style({ transform: 'translate(-50%, -50%) scale(1)' }),
        animate('0.5s', style({ width: '100%', 'margin-top': '0' }))
      ]),
      transition('zoom => scale', [
        animate('0.3s', style({ 'margin-top': '60px', width: '300px' }))
      ])
    ]),
    trigger('show', [
      transition(':enter', [
        style({ transform: 'translateY(600px) scale(0.7)' }),
        animate('0.8s cubic-bezier(.26, .51, .22, 1)', style({ transform: 'translateY(0) scale(1)' }))
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)' }),
        animate('0.8s cubic-bezier(.26, .51, .22, 1)', style({ transform: 'translateX(-700px) scale(0.7)' }))
      ])
    ]),
    trigger('capture', [
      transition(':enter', [
        style({ transform: 'translateY(600px) scale(0.7)' }),
        animate('0.8s cubic-bezier(.26, .51, .22, 1)', style({ transform: 'translateY(0) scale(1)' }))
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)' }),
        animate('0.8s cubic-bezier(.26, .51, .22, 1)', style({ transform: 'translateY(-800px)' }))
      ])
    ])
  ]
})
export class AppComponent {

  planScale: 'zoom' | 'scale';
  bgbarSlide: 'slideOut' | 'slideIn';
  colorSlide: 'slideOut' | 'slideIn';

  constructor() { }

  step: string = 'main';

  planHandle(): void {
    this.step = 'main';
  }

  showBgBar(): void {
    if (this.bgbarSlide !== 'slideOut') {
      this.bgbarSlide = 'slideOut';
      this.planScale = 'zoom';
    }
  }
  showColorBar(): void {
    if (this.bgbarSlide === 'slideOut') this.bgbarSlide = 'slideIn';
    if (this.colorSlide !== 'slideOut') {
      this.colorSlide = 'slideOut';
      this.planScale = 'zoom';
    }
  }

  hideBar(): void {
    if (this.bgbarSlide) this.bgbarSlide = 'slideIn';
    if (this.colorSlide) this.colorSlide = 'slideIn';
    this.planScale = 'scale';
  }

}
