import { Component, OnInit, Input, Renderer2, ElementRef } from '@angular/core';
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

  hideHandle: boolean = false;
  hideAddBtn: boolean = false;
  value: string = '';
  plans: string[] = [];
  canvasImg: string;
  bgImg: string;

  @Input() complete: boolean;
  @Input() step: number;

  constructor(
    private el: ElementRef,
    private render: Renderer2
  ) { }

  ngOnInit(): void { }

  edit(plan: string, index: number): void {
    console.log(plan, index);
  }

  add(): void {
    this.hideAddBtn = true;
  }

  submit(): void {
    this.hideAddBtn = false;
    setTimeout(() => {
      this.value = ''
    }, 1000);
  }

  enter(): void {
    this.plans.push(this.value);
    this.value = '';
  }

  inputBlur(): void {
    this.hideAddBtn = false;
    setTimeout(() => {
      this.value = ''
    }, 1000);
  }

  // 自定义背景图
  upload($event: Event): void {
    const target = $event.target as HTMLInputElement;
    const file = target.files[0];
    const reader = new FileReader();
    reader.onload = (event: Event) => {
      const fileReader = event.target as FileReader;
      this.render.setStyle(this.el.nativeElement.querySelector('.card'), 'background-image', `url(${fileReader.result})`);
    }
    reader.readAsDataURL(file);
  }

  // 截图生成图片
  toImage(): void {
    html2canvas(document.querySelector('.card')).then(canvas => {
      this.canvasImg = canvas.toDataURL("image/png");
    })
  }

}
