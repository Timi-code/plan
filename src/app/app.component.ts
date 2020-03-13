import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('show', [
      transition(':enter', [
        style({ transform: 'translateY(600px) scale(0.7)' }),
        animate('0.8s cubic-bezier(.26, .51, .22, 1)', style({ transform: 'translateY(0) scale(1)' }))
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)' }),
        animate('0.8s cubic-bezier(.26, .51, .22, 1)', style({ transform: 'translateY(-700px) scale(0.7)' }))
      ])
    ])
  ]
})
export class AppComponent {
  plans: string[] = [];
  step: number = 1;
  value: string;
  bgImg: string;
  canvasImg: string;

  enter(): void {
    const value = this.value.trim();
    if (this.plans.length >= 8) {
      alert('不宜超过8条哟');
      return
    }
    if (value) {
      this.plans.push(value);
      this.value = '';
    }
  }

  handleBgImg(img: string) {
    this.bgImg = img;
  }

  back(): void {
    this.step -= 1;
  }

  next(): void {
    this.step += 1;
  }

  complete(): void {
    html2canvas(document.querySelector('.font-color')).then(canvas => {
      this.canvasImg = canvas.toDataURL("image/png");
      this.step = 4;
    })
  }

}
