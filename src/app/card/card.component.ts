import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('clockwiseTrigger', [
      transition(':enter', [
        style({ transform: 'rotate(0)' }),
        animate('0.7s', style({ transform: 'rotate(360deg)' }))
      ])
    ]),
    trigger('anticlockwiseTrigger', [
      transition(':enter', [
        style({ transform: 'rotate(0)' }),
        animate('0.7s', style({ transform: 'rotate(-360deg)' }))
      ])
    ])
  ]
})
export class CardComponent implements OnInit {

  value: string = '';
  canvasImg: string;
  @Input() bgImg: string;

  @Input() plans: string[];

  constructor(
    private el: ElementRef,
    private render: Renderer2
  ) { }

  ngOnInit(): void {
    if (this.bgImg) {
      this.render.setStyle(this.el.nativeElement.querySelector('.card'), 'background-image', `url(${this.bgImg})`);
    }
  }

  edit(plan: string, index: number): void {
    console.log(plan, index);
  }

  // 截图生成图片
  toImage(): void {
    html2canvas(document.querySelector('.card')).then(canvas => {
      this.canvasImg = canvas.toDataURL("image/png");
    })
  }

}
